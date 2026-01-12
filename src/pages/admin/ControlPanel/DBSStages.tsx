import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-modal';
import { IdCard, CheckCheck, Pen, Plus, X, Search,} from "lucide-react";
import { fetchDbsStages, fetchDbsTypes, submitDbsStage, updateDbsStage } from "../../../utils/Requests/DbsRequests";
import { useForm, useWatch } from "react-hook-form";
import { handleCreateEmployee } from "../../../utils/ResponseHandlers/EmployeeResponse";
import Tippy from "@tippyjs/react";
import { fetchOrgMembers } from "../../../utils/Requests/AuthRequests";
import type { DBSTypes } from "../Tracker/DbsTracker";

interface DBSStagesFormValues {
  StageName: string;
  StageDescription: string;
  StageLevel: number;
  DBSTypeId: number;
  StageAdminId: number;
  Duration: number;
  DurationUnit: number;
}

export interface DBSStagesData {
  dbsStageId: number;
  stageName: string;
  stageDescription: string;
  stageLevel: number;
  dbsTypeId: number;
  dbsTypeName: string;
  stageAdminId: number;
  stageAdminFirstName: string;
  stageAdminLastName: string;
  slaTrackerId: number;
  duration: number;
  durationUnit: number;
  dateCreated: string;
}

interface UserData {
    userId: number;
    firstName: string;
    lastName: string;
}

type FilterForm = {
  StageName: string;
  DBSTypeId: number;
  StageAdmin: string;
}

export default function DBSStages() {
  const [loading, setLoading] = useState(true);
  const [orgMembers, setOrgMembers] = useState<UserData[]>([]);
  const [dbsStages, setDbsStages] = useState<DBSStagesData[]>([]);
  const [dbsType, setDbsType] = useState<DBSTypes[]>([]);
  const { register, reset, handleSubmit, formState } = useForm<DBSStagesFormValues>();
  const {
    register: filterReg,
    control,
  } = useForm<FilterForm>();
  const {
    register: editReg,
    setValue,
    reset: resetEdit,
    handleSubmit: submitEdit,
    formState: editFormState,
  } = useForm<DBSStagesFormValues>();
  const { errors: editErrors } = editFormState;
  const filters = useWatch({ control });
  const [dbsPage, setDbsPage] = useState(1);
  const [totalDbsStages, setTotalDbsStages] = useState(0);
  const dbsLimit = 4;
  const [error, setError] = useState<string | null>(null);
  const [addModalState, setAddModalState] = useState(false);
  const [editModalState, setEditModalState] = useState(false);
  const { errors } = formState;
  const [editStage, setEditStage] = useState<DBSStagesData | null>(null);

  useEffect(() => {
    if (editStage) {
      setValue('StageName', editStage.stageName);
      setValue('StageDescription', editStage.stageDescription);
      setValue('StageLevel', editStage.stageLevel);
      setValue('DBSTypeId', editStage.dbsTypeId);
      setValue('StageAdminId', editStage.stageAdminId);
      setValue('Duration', editStage.duration);
      setValue('DurationUnit', editStage.durationUnit);
    }
  }, [editStage, setValue])
  
  useEffect(() => {
    fetchOrgMembers()
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => {
          console.log(data);
          setOrgMembers(data.data);
        })
      } else {
        res.text()
        .then(data => {
          console.log(JSON.parse(data));
        })
      }
    })
  }, []);

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
}, []);

  useEffect(() => {
    setDbsStages([]);
    fetchDbsStages({ pageNumber: dbsPage, limit: dbsLimit, ...filters })
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => {
          console.log(data);
          setTotalDbsStages(data.data.count);
          setDbsStages(data.data.stages);
        })
      } else {
        res.text()
        .then(data => {
          console.log(JSON.parse(data));
        })
      }
    })
    .finally(() => setLoading(false))
  }, [dbsPage, dbsLimit, filters]);

  const refetchDbsStages = async () => {
    try {
      setLoading(true);
      const res = await fetchDbsStages({ pageNumber: dbsPage, limit: dbsLimit, ...filters });
      if (res.status === 200) {
        const data = await res.json()
        console.log(data);
        setDbsStages(data.data.stages);
        setTotalDbsStages(data.data.count);
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
  
  const addNewStage = async (data: DBSStagesFormValues) =>{
    if (!errors.StageName && !errors.StageDescription &&
        !errors.StageLevel && !errors.DBSTypeId &&
        !errors.Duration && !errors.DurationUnit &&
        !errors.StageAdminId
    ) {
      const loader = document.getElementById('query-loader');
      const text = document.getElementById('query-text');
      if (loader) {
        loader.style.display = 'flex';
      }
      if (text) {
        text.style.display = 'none';
      }
      const formData = new FormData();
      formData.append("StageName", data.StageName);
      formData.append("StageDescription", data.StageDescription);
      formData.append("StageLevel", String(data.StageLevel));
      formData.append("DBSTypeId", String(data.DBSTypeId));
      formData.append("Duration", String(data.Duration));
      formData.append("DurationUnit", String(data.DurationUnit));
      formData.append("StageAdminId", String(data.StageAdminId));
      const res = await submitDbsStage(formData);
      handleCreateEmployee(res, loader, text, { toast }, reset)
      .finally(async () => {
        setAddModalState(false);
        await refetchDbsStages();
      });
    }
  }

  const updateStage = async (data: DBSStagesFormValues) =>{
      if (!editErrors.StageName && !editErrors.StageDescription &&
        !editErrors.StageLevel && !editErrors.DBSTypeId &&
        !editErrors.Duration && !editErrors.DurationUnit &&
        !editErrors.StageAdminId && editStage
    ) {
        const loader = document.getElementById('query-loader');
        const text = document.getElementById('query-text');
        if (loader) {
          loader.style.display = 'flex';
        }
        if (text) {
          text.style.display = 'none';
        }
        const formData = new FormData();
        formData.append("StageName", data.StageName);
        formData.append("StageDescription", data.StageDescription);
        formData.append("StageLevel", String(data.StageLevel));
        formData.append("DBSTypeId", String(data.DBSTypeId));
        formData.append("Duration", String(data.Duration));
        formData.append("DurationUnit", String(data.DurationUnit));
        formData.append("StageAdminId", String(data.StageAdminId));
        const res = await updateDbsStage(formData, editStage.dbsStageId);
        handleCreateEmployee(res, loader, text, { toast }, resetEdit)
        .finally(async () => {
          setEditModalState(false);
          await refetchDbsStages();
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
        
          <div className="h-fit max-h-[70vh] overflow-y-auto w-100">
            <div className="flex justify-start">
              <p className="font-semibold text-black py-1 text-lg"><IdCard size={20} className="mr-2" /> Add New DBS Stage</p>
            </div>
            <form
                  onSubmit={handleSubmit(addNewStage)}
                  noValidate
                >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5 mt-2">
                <div className="lg:col-span-2">
                  <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                  >
                    Stage Name
                  </label>
                  <div>
                    <input
                      type="text"
                      className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        {
                        ...register('StageName', {
                          required: 'Required'
                        })
                      }
                      required
                    />
                    <p className='error-msg'>{errors.StageName?.message}</p>
                  </div>
                </div>
                <div>
                  <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                  >
                    Stage Level
                  </label>
                  <div>
                    <input
                      type="number"
                      className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        {
                        ...register('StageLevel', {
                          required: 'Required'
                        })
                      }
                      required
                    />
                    <p className='error-msg'>{errors.StageLevel?.message}</p>
                  </div>
                </div>
                <div>
                  <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                  >
                    DBS Type
                  </label>
                  <div>
                    <select
                      className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      {
                        ...register('DBSTypeId', {
                          required: 'Required',
                          pattern: {
                            value: /^(?!default$).+$/,
                            message: 'Required'
                          }
                        })
                      }
                    >
                      <option value="default">Select DBS Type</option>
                      {
                        dbsType.map((data, index) => (
                            <option value={data.dbsTypeId} key={index}>{data.typeName}</option>
                        ))
                      }
                    </select>
                    <p className='error-msg'>{errors.DBSTypeId?.message}</p>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                  >
                    Description
                  </label>
                  <div>
                    <textarea
                      className="w-full h-30 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        {
                        ...register('StageDescription', {
                          required: 'Required'
                        })
                      }
                      required
                    />
                    <p className='error-msg'>{errors.StageDescription?.message}</p>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                  >
                    Stage Admin
                  </label>
                  <div>
                    <select
                      className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      {
                        ...register('StageAdminId', {
                          required: 'Required',
                          pattern: {
                            value: /^(?!default$).+$/,
                            message: 'Required'
                          }
                        })
                      }
                    >
                      <option value="default">Select Stage Admin</option>
                      {
                        orgMembers.map((data, index) => (
                            <option value={data.userId} key={index}>{`${data.firstName} ${data.lastName}`}</option>
                        ))
                      }
                    </select>
                    <p className='error-msg'>{errors.StageAdminId?.message}</p>
                  </div>
                </div>
                <div>
                  <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                  >
                    Duration
                  </label>
                  <div>
                    <input
                      type="number"
                      className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        {
                        ...register('Duration', {
                          required: 'Required'
                        })
                      }
                      required
                    />
                    <p className='error-msg'>{errors.Duration?.message}</p>
                  </div>
                </div>
                <div>
                  <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                  >
                    Unit
                  </label>
                  <div>
                    <select
                      className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      {
                        ...register('DurationUnit', {
                          required: 'Required',
                          pattern: {
                            value: /^(?!default$).+$/,
                            message: 'Required'
                          }
                        })
                      }
                    >
                      <option value="default">Select Duration Unit</option>
                      <option value="1">Hours</option>
                      <option value="2">Days</option>
                      <option value="3">Weeks</option>
                    </select>
                    <p className='error-msg'>{errors.DurationUnit?.message}</p>
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
                    Add Stage
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
            editStage && (
                <div className="h-fit max-h-[70vh] overflow-y-auto w-100">
                    <div className="flex justify-start">
                    <p className="font-semibold text-black py-1 text-lg"><IdCard size={20} className="mr-2" /> Update DBS Stage</p>
                    </div>
                    <form
                  onSubmit={submitEdit(updateStage)}
                  noValidate
                >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5 mt-2">
                <div className="lg:col-span-2">
                  <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                  >
                    Stage Name
                  </label>
                  <div>
                    <input
                      type="text"
                      className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        {
                        ...editReg('StageName', {
                          required: 'Required'
                        })
                      }
                      required
                    />
                    <p className='error-msg'>{editErrors.StageName?.message}</p>
                  </div>
                </div>
                <div>
                  <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                  >
                    Stage Level
                  </label>
                  <div>
                    <input
                      type="number"
                      className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        {
                        ...editReg('StageLevel', {
                          required: 'Required'
                        })
                      }
                      required
                    />
                    <p className='error-msg'>{editErrors.StageLevel?.message}</p>
                  </div>
                </div>
                <div>
                  <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                  >
                    DBS Type
                  </label>
                  <div>
                    <select
                      className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      {
                        ...editReg('DBSTypeId', {
                          required: 'Required',
                          pattern: {
                            value: /^(?!default$).+$/,
                            message: 'Required'
                          }
                        })
                      }
                    >
                      <option value="default">Select DBS Type</option>
                      {
                        dbsType.map((data, index) => (
                            <option value={data.dbsTypeId} key={index}>{data.typeName}</option>
                        ))
                      }
                    </select>
                    <p className='error-msg'>{editErrors.DBSTypeId?.message}</p>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                  >
                    Description
                  </label>
                  <div>
                    <textarea
                      className="w-full h-30 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        {
                        ...editReg('StageDescription', {
                          required: 'Required'
                        })
                      }
                      required
                    />
                    <p className='error-msg'>{editErrors.StageDescription?.message}</p>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                  >
                    Stage Admin
                  </label>
                  <div>
                    <select
                      className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      {
                        ...editReg('StageAdminId', {
                          required: 'Required',
                          pattern: {
                            value: /^(?!default$).+$/,
                            message: 'Required'
                          }
                        })
                      }
                    >
                      <option value="default">Select Stage Admin</option>
                      {
                        orgMembers.map((data, index) => (
                            <option value={data.userId} key={index}>{`${data.firstName} ${data.lastName}`}</option>
                        ))
                      }
                    </select>
                    <p className='error-msg'>{editErrors.StageAdminId?.message}</p>
                  </div>
                </div>
                <div>
                  <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                  >
                    Duration
                  </label>
                  <div>
                    <input
                      type="number"
                      className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        {
                        ...editReg('Duration', {
                          required: 'Required'
                        })
                      }
                      required
                    />
                    <p className='error-msg'>{editErrors.Duration?.message}</p>
                  </div>
                </div>
                <div>
                  <label
                    className="inline-block mb-2 text-secondary-600 dark:text-white"
                    htmlFor="email"
                  >
                    Unit
                  </label>
                  <div>
                    <select
                      className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      {
                        ...editReg('DurationUnit', {
                          required: 'Required',
                          pattern: {
                            value: /^(?!default$).+$/,
                            message: 'Required'
                          }
                        })
                      }
                    >
                      <option value="default">Select Duration Unit</option>
                      <option value="1">Hours</option>
                      <option value="2">Days</option>
                      <option value="3">Weeks</option>
                    </select>
                    <p className='error-msg'>{editErrors.DurationUnit?.message}</p>
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
                    Update Stage
                  </span>
                </button>
              </div>
            </form>
                </div>       
            )
        }
      </Modal>
      <div className="flex flex-wrap content-inner">
        <div className="flex-auto w-50">
          <div className="relative flex flex-col mb-8  bg-white dark:bg-dark-card shadow rounded">
            <div className="flex justify-between flex-auto p-5 border-b dark:border-secondary-800 rounded">
              <h4 className="mb-0 dark:text-secondary-200">
                <IdCard /> DBS Stage
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
                        <Plus /> Add New DBS Stage
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
                    <div className="flex flex-wrap justify-between overflow-x-auto">
                      <div className="pb-5">
                        <div className="flex flex-wrap gap-4">
                          <div className="flex-1 min-w-[330px]">
                            <div className="relative">
                              <Search
                                className="absolute left-3 top-7 transform -translate-y-1/2 text-gray-400"
                                size={20}
                              />
                              <input
                                type="text"
                                placeholder="Search by stage name..."
                                {...filterReg('StageName')}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                          </div>
                          <div className="flex-1 min-w-[330px]">
                            <div className="relative">
                              <Search
                                className="absolute left-3 top-7 transform -translate-y-1/2 text-gray-400"
                                size={20}
                              />
                              <input
                                type="text"
                                placeholder="Search by stage admin name..."
                                {...filterReg('StageAdmin')}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                          </div>
                          <select
                            {...filterReg('DBSTypeId')}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">All DBS Type</option>
                            {
                              dbsType.map((data, index) => (
                                <option value={data.dbsTypeId} key={index}>{data.typeName}</option>
                              ))
                            }
                          </select>
                        </div>
                      </div>
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
                                      Level
                                  </th>
                                  <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                      Description
                                  </th>
                                  <th className="px-6 py-4 min-w-30 text-left font-medium text-black dark:text-white">
                                      DBS Type
                                  </th>
                                  <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                      Stage Admin
                                  </th>
                                  <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                      Duration
                                  </th>
                                  <th className="px-6 py-4 text-left font-medium text-black dark:text-white">
                                      Action
                                  </th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800">
                            {
                              dbsStages.map((data, index) => (
                              <tr key={data.dbsTypeId ?? index}>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="iq-media-group iq-media-group-1">
                                      <h6 className="font-bold dark:text-white">
                                      {" "}
                                      #{(index + (dbsLimit * (dbsPage - 1))) + 1}
                                      </h6>
                                  </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                                  {data.stageName}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                                  {data.stageLevel}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                                  {data.stageDescription}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                                  {data.dbsTypeName}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                                  {`${data.stageAdminFirstName} ${data.stageAdminLastName}`}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap  text-gray-900">
                                  {data.duration}
                                      {data.durationUnit === 1 ? (data.duration > 1 ? ' Hours' : ' Hour') : ''}
                                      {data.durationUnit === 2 ? (data.duration > 1 ? ' Days' : ' Day') : ''}
                                      {data.durationUnit === 3 ? (data.duration > 1 ? ' Weeks' : ' Week') : ''}
                                  </td>
                                  <td className="px-6 py-4">
                                      <div className="flex items-center list-user-action">
                                      <Tippy content='Edit DBS Stage'>
                                          <button
                                              className="btn btn-warning btn-icon btn-sm mr-1"
                                              type="button"
                                          onClick={() => {
                                                setEditStage(data);
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
                      </div>
                        
                        {
                        dbsStages.length === 0 ?
                            <div className="py-4 whitespace-nowrap w-full">
                                <span className="px-6 py-4 text-left font-medium text-black dark:text-white">There hasn't been any dbs stage added</span>
                            </div> : <></>
                        }
                    </div>
                    <div className="flex flex-wrap justify-between mt-6">
                      <div className="flex justify-center items-center mb-1">
                        <p className="text-black">
                          Showing { dbsStages.length > 0 ? ((dbsPage * dbsLimit) - dbsLimit) + 1 : 0 } to { dbsStages.length > 0 ? (((dbsPage * dbsLimit) - dbsLimit) + 1) + (dbsStages.length - 1) : 0 } of { totalDbsStages } entries
                        </p>
                      </div>
                      <div className="inline-flex flex-wrap">
                        {
                          dbsPage > 1 && <a
                          href="#"
                          onClick={() => { if (dbsPage > 1) {setDbsPage(dbsPage - 1);} }}
                          className="border-t border-b border-l text-primary-500 border-secondary-500 px-2 py-1 rounded-l dark:border-secondary-800"
                        >
                          Previous
                        </a>
                        }
                        <a
                          href="#"
                          className="border text-white border-secondary-500 cursor-pointer bg-primary-500 px-4 py-1 dark:border-secondary-800"
                        >
                          { dbsPage }
                        </a>
                        {
                          (dbsPage * dbsLimit) < totalDbsStages && <a
                          href="#"
                          onClick={() => { setDbsPage(dbsPage + 1); }}
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
