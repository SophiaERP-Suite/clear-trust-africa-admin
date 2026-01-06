import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-modal';
import { BookKey, CheckCheck, Pen, Plus, X,} from "lucide-react";
import { fetchDbsStatus, submitDbsStatus, updateDbsStatus } from "../../../utils/Requests/DbsRequests";
import type { DBSStatus } from "../Tracker/DbsTracker";
import { useForm } from "react-hook-form";
import { handleCreateEmployee } from "../../../utils/ResponseHandlers/EmployeeResponse";

interface DBSStatusFormValues {
  StatusName: string;
}

export default function DBSStatus() {
  const [loading, setLoading] = useState(true);
  const [dbsStatus, setDbsStatus] = useState<DBSStatus[]>([]);
  const [dbsStatusEdit, setDbsStatusEdit] = useState<DBSStatus | null>(null);
  const { register, reset, handleSubmit, formState } = useForm<DBSStatusFormValues>();
  const {
    register: regEdit,
    reset: resetEdit,
    handleSubmit: submitEdit,
    formState: editFormState,
    setValue,
  } = useForm<DBSStatusFormValues>();
  const [error, setError] = useState<string | null>(null);
  const [addModalState, setAddModalState] = useState(false);
  const [editModalState, setEditModalState] = useState(false);
  const { errors } = formState;
  const { errors: editErrors } = editFormState;

  useEffect(() => {
    fetchDbsStatus()
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => {
          console.log(data);
          setDbsStatus(data.data);
        })
      } else {
        res.text()
        .then(data => {
          console.log(JSON.parse(data));
        })
      }
    })
    .finally(() => setLoading(false))
  }, []);
    
  useEffect(() => {
    if (dbsStatusEdit) {
      setValue('StatusName', dbsStatusEdit.statusName);
    }
  }, [dbsStatusEdit, setValue])

  const refetchDbsStatus = async () => {
    try {
      setLoading(true);
      const res = await fetchDbsStatus();
      if (res.status === 200) {
        const data = await res.json()
        console.log(data);
        setDbsStatus(data.data);
      } else {
        const resText = await res.text();
        console.log(JSON.parse(resText));
      }
      
    } catch (err) {
      console.error(err);
      setError("Failed to fetch DBS Status");
    } finally {
      setLoading(false);
    }
  };
  
  const addNewStatus = async (data: DBSStatusFormValues) =>{
    if (!errors.StatusName){
      const loader = document.getElementById('query-loader');
      const text = document.getElementById('query-text');
      if (loader) {
        loader.style.display = 'flex';
      }
      if (text) {
        text.style.display = 'none';
      }
      const formData = new FormData();
      formData.append("StatusName", data.StatusName);
      const res = await submitDbsStatus(formData);
      handleCreateEmployee(res, loader, text, { toast }, reset)
      .finally(async () => {
        setAddModalState(false);
        await refetchDbsStatus();
      });
    }
  }
  
  const updateStatus = async (data: DBSStatusFormValues) =>{
    if (!editErrors.StatusName && dbsStatusEdit){
      const loader = document.getElementById('query-loader');
      const text = document.getElementById('query-text');
      if (loader) {
        loader.style.display = 'flex';
      }
      if (text) {
        text.style.display = 'none';
      }
      const formData = new FormData();
      formData.append("StatusName", data.StatusName);
      const res = await updateDbsStatus(formData, dbsStatusEdit.statusId);
      handleCreateEmployee(res, loader, text, { toast }, resetEdit)
      .finally(async () => {
        setEditModalState(false);
        await refetchDbsStatus();
      });
    }
  }

  return (
    <div
      className="footer-inner mx-auto main-container container"
      x-bind:className="setting.page_layout"
    >
      <ToastContainer />
      <Modal isOpen={addModalState} onRequestClose={() => { setAddModalState(false); }}
        style={{
        content: {
          width: 'fit-content',
          height: 'fit-content',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgb(255 255 255)',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
        },
        overlay: {
          backgroundColor: 'rgba(255, 255, 255, 0.7)'
        }
      }}
      >
        
          <div className="h-fit w-100">
            <div className="flex justify-start">
              <p className="font-semibold text-black py-1 text-lg"><BookKey size={20} className="mr-2" /> Add New DBS Status</p>
            </div>
            <form
                  onSubmit={handleSubmit(addNewStatus)}
                  noValidate
                >
              <div className="grid grid-cols-1 gap-x-8 gap-y-5 mt-2">
                <div>
                  <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                  >
                    Status Name
                  </label>
                  <div>
                    <input
                      type="text"
                      className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        {
                        ...register('StatusName', {
                          required: 'Required'
                        })
                      }
                      required
                    />
                    <p className='error-msg'>{errors.StatusName?.message}</p>
                  </div>
                </div>
              </div>
              <hr className="mt-5" />
              <div className="flex justify-end my-2 gap-2">
                <button className="btn text-white bg-black" onClick={() => setAddModalState(false) }>
                  <X size={18} className="mr-2" />
                  Cancel
                </button>
                <button className="btn btn-success">
                  <div className="dots hidden" id="query-loader">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                  <span id="query-text">
                    <CheckCheck size={18} className="mr-2" />
                    Add Status
                  </span>
                </button>
              </div>
            </form>
          </div>
      </Modal>
      <Modal isOpen={editModalState} onRequestClose={() => { setEditModalState(false); }}
        style={{
        content: {
          width: 'fit-content',
          height: 'fit-content',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgb(255 255 255)',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
        },
        overlay: {
          backgroundColor: 'rgba(255, 255, 255, 0.7)'
        }
      }}
      >
        {
            dbsStatusEdit && (
                <div className="h-fit w-100">
                    <div className="flex justify-start">
                    <p className="font-semibold text-black py-1 text-lg"><BookKey size={20} className="mr-2" /> Update DBS Status</p>
                    </div>
                    <form
                        onSubmit={submitEdit(updateStatus)}
                        noValidate
                        >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-5 mt-2">
                        <div>
                        <label
                            className="inline-block mb-2 text-secondary-600 dark:text-white"
                            htmlFor="email"
                        >
                            Status Name
                        </label>
                        <div>
                            <input
                            type="text"
                            className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                {
                                ...regEdit('StatusName', {
                                required: 'Required'
                                })
                            }
                            required
                            />
                            <p className='error-msg'>{editErrors.StatusName?.message}</p>
                        </div>
                        </div>
                    </div>
                    <hr className="mt-5" />
                    <div className="flex justify-end my-2 gap-2">
                        <button className="btn text-white bg-black" onClick={() => setEditModalState(false) }>
                        <X size={18} className="mr-2" />
                        Cancel
                        </button>
                        <button className="btn btn-warning">
                        <div className="dots hidden" id="query-loader">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                        <span id="query-text">
                            <Pen size={18} className="mr-2" />
                            Edit Status
                        </span>
                        </button>
                    </div>
                    </form>
                </div>       
            )
        }
      </Modal>
      <div className="flex flex-wrap contet-inner">
        <div className="flex-auto w-full">
          <div className="relative flex flex-col mb-8  bg-white dark:bg-dark-card shadow rounded">
            <div className="flex justify-between flex-auto p-5 border-b dark:border-secondary-800 rounded">
              <h4 className="mb-0 dark:text-secondary-200">
                <BookKey /> DBS Status
              </h4>
            </div>
            <div className="py-2 px-3">
              <div className="overflow-x-auto">
                <div className=" overflow-x-auto p-5">
                  
                  <div className="flex justify-end mb-2">
                    <div className="flex justify-center gap-2 mb-4">
                      <button
                        className="btn btn-success"
                        onClick={() => setAddModalState(true)}
                      >
                        <Plus /> Add New DBS Status
                      </button>
                    </div>
                  </div>
                  {loading && (
                    <div
                      className="loading flex items-center justify-center gap-3 text-center mt-8"
                      aria-label="Loading Roles"
                      role="status"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 44 44"
                        stroke="currentColor"
                        aria-label="Loading"
                      >
                        <g fill="none" fillRule="evenodd" strokeWidth="4">
                          <circle cx="22" cy="22" r="9" strokeOpacity="0.2" />
                          <path
                            d="M22 3 A19 19 0 0 1 41 22"
                            stroke="currentColor"
                            strokeLinecap="round"
                          >
                            <animateTransform
                              attributeName="transform"
                              type="rotate"
                              from="0 22 22"
                              to="360 22 22"
                              dur="1s"
                              repeatCount="indefinite"
                            />
                          </path>
                        </g>
                      </svg>
                      <span className="text-gray-700">Please Wait... </span>
                    </div>
                  )}
                  {error && (
                    <div className="error flex justify-center text-center mt-[25%]">
                      Error: {error}
                    </div>
                  )}
                  {!loading && !error && dbsStatus.length === 0 && (
                    <div className="no-roles flex justify-center text-center mt-[25%]">
                      No DBS Status found.
                    </div>
                  )}
                  {!loading && !error && dbsStatus.length > 0 && (
                    <ul className="space-y-3">
                      {dbsStatus.map((data) => (
                        <li
                          key={data.statusId}
                          className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                        >
                          <span>{data.statusName}</span>
                          <div>
                            <button
                              className="btn btn-warning btn-icon btn-sm mr-1"
                              type="button"
                              onClick={() =>{
                                setDbsStatusEdit(data);
                                setEditModalState(true);
                              }
                              }
                            >
                              <Pen />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
