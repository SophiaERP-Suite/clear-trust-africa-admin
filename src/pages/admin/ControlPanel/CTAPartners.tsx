import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-modal';
import { AlertCircleIcon, CheckCheck, Pen, Plus, X,} from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import { handleCreateEmployee } from "../../../utils/ResponseHandlers/EmployeeResponse";
import { fetchDBSPartner, submitDBSPartner, updateDBSPartner } from "../../../utils/Requests/IncidentRequests";
import { fetchCountries } from "../../../utils/Requests/EmployeeRequests";
import Tippy from "@tippyjs/react";

interface DBSPartnerFormValues {
  PartnerName: string;
  CountryId: string;
}

interface DBSPartner {
    partnerId: number;
    partnerName: string;
    countryId: string;
    countryName: string;
}

interface CountryData {
  countryId: number;
  name: string;
  code: string;
}

type FilterForm = {
  CountryId: string;
}


export default function CTAPartnerType() {
  const [loading, setLoading] = useState(true);
  const [ctaPartner, setCTAPartner] = useState<DBSPartner[]>([]);
  const [ctaPartnerEdit, setCTAPartnerEdit] = useState<DBSPartner | null>(null);
  const { register, reset, handleSubmit, formState } = useForm<DBSPartnerFormValues>();
  const [countries, setCountries] = useState<CountryData[]>([]);
  const {
    register: regEdit,
    reset: resetEdit,
    handleSubmit: submitEdit,
    formState: editFormState,
    setValue,
  } = useForm<DBSPartnerFormValues>();
  const [error, setError] = useState<string | null>(null);
  const [addModalState, setAddModalState] = useState(false);
  const [editModalState, setEditModalState] = useState(false);
  const { errors } = formState;
  const { errors: editErrors } = editFormState;
  const {
    register: filterReg,
    control,
  } = useForm<FilterForm>();
  const filters = useWatch({ control });
  const [page, setPage] = useState(1);
  const [totalPartners, setTotalPartners] = useState(0);
  const limit = 4;

  useEffect(() => {
    fetchDBSPartner({ pageNumber: page, limit, ...filters })
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => {
          console.log(data);
          setCTAPartner(data.data.thirdParty);
          setTotalPartners(data.data.totalCount);
        })
      } else {
        res.text()
        .then(data => {
          console.log(JSON.parse(data));
        })
      }
    })
    .finally(() => setLoading(false))
  }, [page, limit, filters]);
  
  useEffect(() => {
    fetchCountries()
    .then(res => {
    if (res.status === 200) {
        res.json()
        .then(data => {
        setCountries(data);
        })
    } else {
        res.text()
        .then(data => {
        console.log(JSON.parse(data));
        })
    }
    })
    .catch((err) => console.log(err))
}, []);
    
  useEffect(() => {
    if (ctaPartnerEdit) {
      setValue('PartnerName', ctaPartnerEdit.partnerName);
      setValue('CountryId', ctaPartnerEdit.countryId);
    }
  }, [ctaPartnerEdit, setValue])

  const refetchctaPartners = async () => {
    try {
      setLoading(true);
      const res = await fetchDBSPartner({ pageNumber: page, limit, ...filters });
      if (res.status === 200) {
        const data = await res.json()
        console.log(data);
        setCTAPartner(data.data.thirdParty);
        setTotalPartners(data.data.totalCount);
      } else {
        const resText = await res.text();
        console.log(JSON.parse(resText));
      }
      
    } catch (err) {
      console.error(err);
      setError("Failed to fetch Incident Action Types");
    } finally {
      setLoading(false);
    }
  };
  
  const addNewctaPartnerType = async (data: DBSPartnerFormValues) =>{
    if (!errors.PartnerName && !errors.CountryId){
      const loader = document.getElementById('query-loader');
      const text = document.getElementById('query-text');
      if (loader) {
        loader.style.display = 'flex';
      }
      if (text) {
        text.style.display = 'none';
      }
      const formData = new FormData();
      formData.append("PartnerName", data.PartnerName);
      formData.append("CountryId", data.CountryId);
      const res = await submitDBSPartner(formData);
      handleCreateEmployee(res, loader, text, { toast }, reset)
      .finally(async () => {
        setAddModalState(false);
        await refetchctaPartners();
      });
    }
  }
  
  const updateAction = async (data: DBSPartnerFormValues) =>{
    if (!editErrors.PartnerName && !editErrors.CountryId && ctaPartnerEdit){
      const loader = document.getElementById('query-loader');
      const text = document.getElementById('query-text');
      if (loader) {
        loader.style.display = 'flex';
      }
      if (text) {
        text.style.display = 'none';
      }
      const formData = new FormData();
      formData.append("PartnerName", data.PartnerName);
      formData.append("CountryId", data.CountryId);
      const res = await updateDBSPartner(formData, ctaPartnerEdit.partnerId);
      handleCreateEmployee(res, loader, text, { toast }, resetEdit)
      .finally(async () => {
        setEditModalState(false);
        await refetchctaPartners();
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
              <p className="font-semibold text-black py-1 text-lg"><AlertCircleIcon size={20} className="mr-2" /> Add New Third Party</p>
            </div>
            <form
                  onSubmit={handleSubmit(addNewctaPartnerType)}
                  noValidate
                >
              <div className="grid grid-cols-1 gap-x-8 gap-y-5 mt-2">
                <div>
                  <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                  >
                    Third Party Name
                  </label>
                  <div>
                    <input
                      type="text"
                      className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        {
                        ...register('PartnerName', {
                          required: 'Required'
                        })
                      }
                      required
                    />
                    <p className='error-msg'>{errors.PartnerName?.message}</p>
                  </div>
                </div>
                <div>
                    <label
                        className="inline-block mb-2 text-secondary-600 dark:text-white"
                        htmlFor="email"
                      >
                        Country
                      </label>
                      <div>
                        <select
                            className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            {
                            ...register('CountryId', {
                                required: 'Required',
                                pattern: {
                                value: /^(?!default$).+$/,
                                message: 'Required'
                                }
                            })
                            }
                        >
                            <option value="default">Select Country</option>
                            {
                            countries.map((data, index) => (
                                <option key={index} value={data.countryId}>{data.name}</option>
                            ))
                            }
                        </select>
                        <p className='error-msg'>{errors.CountryId?.message}</p>
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
                    Add Third Party
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
            ctaPartnerEdit && (
                <div className="h-fit w-100">
                    <div className="flex justify-start">
                    <p className="font-semibold text-black py-1 text-lg"><AlertCircleIcon size={20} className="mr-2" /> Update Third Party</p>
                    </div>
                    <form
                        onSubmit={submitEdit(updateAction)}
                        noValidate
                        >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-5 mt-2">
                        <div>
                            <label
                                className="inline-block mb-2 text-secondary-600 dark:text-white"
                                htmlFor="email"
                            >
                                Third Party Name
                            </label>
                            <div>
                                <input
                                type="text"
                                className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    {
                                    ...regEdit('PartnerName', {
                                    required: 'Required'
                                    })
                                }
                                required
                                />
                                <p className='error-msg'>{editErrors.PartnerName?.message}</p>
                            </div>
                        </div>
                        <div>
                    <label
                        className="inline-block mb-2 text-secondary-600 dark:text-white"
                        htmlFor="email"
                      >
                        Country
                      </label>
                      <div>
                        <select
                            className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            {
                            ...regEdit('CountryId', {
                                required: 'Required',
                                pattern: {
                                value: /^(?!default$).+$/,
                                message: 'Required'
                                }
                            })
                            }
                        >
                            <option value="default">Select Country</option>
                            {
                            countries.map((data, index) => (
                                <option key={index} value={data.countryId}>{data.name}</option>
                            ))
                            }
                        </select>
                        <p className='error-msg'>{editErrors.CountryId?.message}</p>
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
                            Edit Third Party
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
                <AlertCircleIcon /> Third Party
              </h4>
            </div>
            <div className="py-2 px-3">
              <div className="overflow-x-auto">
                <div className=" overflow-x-auto p-5">
                  
                  <div className="flex justify-end mb-2">
                    <div className="flex justify-center gap-4 mb-4">
                    <select
                        {...filterReg('CountryId')}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                        <option value="">All Countries</option>
                        {
                            countries.map((data, index) => (
                            <option value={data.countryId} key={index}>{data.name}</option>
                            ))
                        }
                        </select>
                      <button
                        className="btn btn-success"
                        onClick={() => setAddModalState(true)}
                      >
                        <Plus /> Add Third Party
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
                  {!loading && !error && (
                    <>
                        <div className="overflow-x-auto">
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
                                            Country
                                        </th>
                                        <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800">
                                {
                                    ctaPartner.map((data, index) => (
                                    <tr key={data.partnerId ?? index}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="iq-media-group iq-media-group-1">
                                            <h6 className="font-bold dark:text-white">
                                            {" "}
                                            #{index}
                                            </h6>
                                        </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                                        {data.partnerName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                                        {data.countryName}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center list-user-action">
                                            <Tippy content='Edit Third party'>
                                                <button
                                                    className="btn btn-warning btn-icon btn-sm mr-1"
                                                    type="button"
                                                    onClick={() => {
                                                        setCTAPartnerEdit(data);
                                                        setEditModalState(true);
                                                    }}
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
                                ctaPartner.length === 0 ?
                                    <div className="py-4 whitespace-nowrap w-full">
                                        <span className="px-6 py-4 text-left font-medium text-black dark:text-white">There hasn't been any third party added</span>
                                    </div> : <></>
                            }
                        </div>
                        <div className="flex flex-wrap justify-between mt-6">
                            <div className="flex justify-center items-center mb-1">
                                <p className="text-black">
                                    Showing { ctaPartner.length > 0 ? ((page * limit) - limit) + 1 : 0 } to { ctaPartner.length > 0 ? (((page * limit) - limit) + 1) + (ctaPartner.length - 1) : 0 } of { totalPartners } entries
                                </p>
                            </div>
                            <div className="inline-flex flex-wrap">
                                {
                                page > 1 && <a
                                href="#"
                                onClick={() => { if (page > 1) {setPage(page - 1);} }}
                                className="border-t border-b border-l text-primary-500 border-secondary-500 px-2 py-1 rounded-l dark:border-secondary-800"
                                >
                                Previous
                                </a>
                                }
                                <a
                                href="#"
                                className="border text-white border-secondary-500 cursor-pointer bg-primary-500 px-4 py-1 dark:border-secondary-800"
                                >
                                { page }
                                </a>
                                {
                                (page * limit) < totalPartners && <a
                                href="#"
                                onClick={() => { setPage(page + 1); }}
                                className="border-r border-t border-b text-primary-500 border-secondary-500 px-4 py-1 rounded-r dark:border-secondary-800"
                                >
                                Next
                                </a>
                                }
                                
                            </div>
                        </div>
                    </>
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
