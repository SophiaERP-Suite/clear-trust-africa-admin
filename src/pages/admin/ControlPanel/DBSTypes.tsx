import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-modal';
import { FolderKey, CheckCheck, Pen, Plus, X,} from "lucide-react";
import { fetchDbsTypes, submitDbsType, updateDbsType } from "../../../utils/Requests/DbsRequests";
import type { DBSTypes } from "../Tracker/DbsTracker";
import { useForm, Controller } from "react-hook-form";
import { handleCreateEmployee } from "../../../utils/ResponseHandlers/EmployeeResponse";
import Tippy from "@tippyjs/react";
import RichTextEditor from "../../../layout/RichTextEditor";
import HtmlRenderer from "../../../layout/HTMLRenderer";

interface DBSTypesFormValues {
  TypeName: string;
  TypeCost: number;
  Description: string;
}

export default function DBSType() {
  const [loading, setLoading] = useState(true);
  const [dbsType, setDbsType] = useState<DBSTypes[]>([]);
  const [dbsTypeEdit, setDbsTypeEdit] = useState<DBSTypes | null>(null);
  const { register, reset, handleSubmit, formState, control } = useForm<DBSTypesFormValues>();
  const {
    register: regEdit,
    reset: resetEdit,
    handleSubmit: submitEdit,
    formState: editFormState,
    control: editControl,
    setValue,
  } = useForm<DBSTypesFormValues>();
  const [error, setError] = useState<string | null>(null);
  const [addModalState, setAddModalState] = useState(false);
  const [editModalState, setEditModalState] = useState(false);
  const { errors } = formState;
  const { errors: editErrors } = editFormState;

  useEffect(() => {
    fetchDbsTypes()
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => {
          console.log(data);
          setDbsType(data.data);
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
    if (dbsTypeEdit) {
      setValue('TypeName', dbsTypeEdit.typeName);
      setValue('TypeCost', dbsTypeEdit.typeCost);
      setValue('Description', dbsTypeEdit.description);
    }
  }, [dbsTypeEdit, setValue])

  const refetchDbsType = async () => {
    try {
      setLoading(true);
      const res = await fetchDbsTypes();
      if (res.status === 200) {
        const data = await res.json()
        console.log(data);
        setDbsType(data.data);
      } else {
        const resText = await res.text();
        console.log(JSON.parse(resText));
      }
      
    } catch (err) {
      console.error(err);
      setError("Failed to fetch DBS Types");
    } finally {
      setLoading(false);
    }
  };
  
  const addNewStatus = async (data: DBSTypesFormValues) =>{
    if (!errors.TypeName && !errors.TypeCost && !errors.Description){
      const loader = document.getElementById('query-loader');
      const text = document.getElementById('query-text');
      if (loader) {
        loader.style.display = 'flex';
      }
      if (text) {
        text.style.display = 'none';
      }
      const formData = new FormData();
      formData.append("TypeName", data.TypeName);
      formData.append("TypeCost", String(data.TypeCost));
      formData.append("Description", data.Description);
      const res = await submitDbsType(formData);
      handleCreateEmployee(res, loader, text, { toast }, reset)
      .finally(async () => {
        setAddModalState(false);
        await refetchDbsType();
      });
    }
  }
  
  const updateType = async (data: DBSTypesFormValues) =>{
    if (!editErrors.TypeName && !editErrors.TypeCost &&
        !editErrors.Description && dbsTypeEdit){
      const loader = document.getElementById('query-loader');
      const text = document.getElementById('query-text');
      if (loader) {
        loader.style.display = 'flex';
      }
      if (text) {
        text.style.display = 'none';
      }
      const formData = new FormData();
      formData.append("TypeName", data.TypeName);
      formData.append("TypeCost", String(data.TypeCost));
      formData.append("Description", data.Description);
      const res = await updateDbsType(formData, dbsTypeEdit.dbsTypeId);
      handleCreateEmployee(res, loader, text, { toast }, resetEdit)
      .finally(async () => {
        setEditModalState(false);
        await refetchDbsType();
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
              <p className="font-semibold text-black py-1 text-lg"><FolderKey size={20} className="mr-2" /> Add New Type</p>
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
                    Type Name
                  </label>
                  <div>
                    <input
                      type="text"
                      className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        {
                        ...register('TypeName', {
                          required: 'Required'
                        })
                      }
                      required
                    />
                    <p className='error-msg'>{errors.TypeName?.message}</p>
                  </div>
                </div>
                <div>
                  <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                  >
                    Type Cost
                  </label>
                  <div>
                    <input
                      type="number"
                      className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        {
                        ...register('TypeCost', {
                          required: 'Required'
                        })
                      }
                      required
                    />
                    <p className='error-msg'>{errors.TypeCost?.message}</p>
                  </div>
                </div>
                <div>
                  <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                  >
                    Description
                  </label>
                  <div>
                    <Controller
                        name="Description"
                        control={control}
                        rules={{ required: 'Required' }}
                        render={({ field }) => (
                          <RichTextEditor
                            value={field.value}
                            onChange={field.onChange}
                          />
                        )}
                    />
                    <p className='error-msg'>{errors.Description?.message}</p>
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
                    Add Type
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
            dbsTypeEdit && (
                <div className="h-fit w-100">
                    <div className="flex justify-start">
                    <p className="font-semibold text-black py-1 text-lg"><FolderKey size={20} className="mr-2" /> Update Type</p>
                    </div>
                    <form
                        onSubmit={submitEdit(updateType)}
                        noValidate
                        >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-5 mt-2">
                        <div>
                        <label
                            className="inline-block mb-2 text-secondary-600 dark:text-white"
                            htmlFor="email"
                        >
                            Type Name
                        </label>
                        <div>
                            <input
                            type="text"
                            className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                {
                                ...regEdit('TypeName', {
                                required: 'Required'
                                })
                            }
                            required
                            />
                            <p className='error-msg'>{editErrors.TypeName?.message}</p>
                        </div>
                        </div>
                        <div>
                        <label
                            className="inline-block mb-2 text-secondary-600 dark:text-white"
                            htmlFor="email"
                        >
                            Type Cost
                        </label>
                        <div>
                            <input
                            type="number"
                            className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                {
                                ...regEdit('TypeCost', {
                                required: 'Required'
                                })
                            }
                            required
                            />
                            <p className='error-msg'>{editErrors.TypeCost?.message}</p>
                        </div>
                        </div>
                        <div>
                        <label
                            className="inline-block mb-2 text-secondary-600 dark:text-white"
                            htmlFor="email"
                        >
                            Description
                        </label>
                        <div>
                          <Controller
                              name="Description"
                              control={editControl}
                              rules={{ required: 'Required' }}
                              render={({ field }) => (
                                <RichTextEditor
                                  value={field.value}
                                  onChange={field.onChange}
                                />
                              )}
                          />
                            <p className='error-msg'>{editErrors.Description?.message}</p>
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
                            Edit Type
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
                <FolderKey /> Check Type
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
                        <Plus /> Add New Check Type
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
                  {!loading && !error && dbsType.length === 0 && (
                    <div className="no-roles flex justify-center text-center mt-[25%]">
                      No Type found.
                    </div>
                  )}
                  {!loading && !error && dbsType.length > 0 && (
                    <div className="overflow-x-auto">
                        <div className="flex flex-wrap justify-between overflow-x-auto">
                            <table className="min-w-full divide-y divide-secondary-200 dark:divide-secondary-800 border dark:border-secondary-800">
                                <thead>
                                    <tr className="bg-secondary-100 dark:bg-dark-bg">
                                        <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                            S/N
                                        </th>
                                        <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                            Name
                                        </th>
                                        <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                            Cost
                                        </th>
                                        <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                            Description
                                        </th>
                                        <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800">
                                {
                                    dbsType.map((data, index) => (
                                    <tr key={data.dbsTypeId ?? index}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="iq-media-group iq-media-group-1">
                                            <h6 className="font-bold dark:text-white">
                                            {" "}
                                            #{index + 1}
                                            </h6>
                                        </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                                        {data.typeName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                                        { `NGN ${data.typeCost.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2})}` }
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                                          <HtmlRenderer html={data.description} />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center list-user-action">
                                            <Tippy content='Edit DBS Type'>
                                                <button
                                                    className="btn btn-warning btn-icon btn-sm mr-1"
                                                    type="button"
                                                    onClick={() =>{
                                                        setDbsTypeEdit(data);
                                                        setEditModalState(true);
                                                    }
                                                    }
                                                    >
                                                    <Pen />
                                                    </button>
                                            </Tippy>
                                            </div>
                                        </td>
                                    </tr>
                                    ))
                                }
                                
                            </tbody>
                            </table>
                            {
                            dbsType.length === 0 ?
                                <div className="py-4 whitespace-nowrap w-full">
                                    <span className="px-6 py-4 text-left font-medium text-black dark:text-white">There hasn't been any types added</span>
                                </div> : <></>
                            }
                        </div>
                    </div>
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
