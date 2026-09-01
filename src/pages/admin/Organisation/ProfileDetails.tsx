import { useEffect, useState } from 'react';
import { 
  Building2, 
  UserCircle, 
  Shield, 
  Eye, 
  EyeOff,
  Users,
  UserLock,
  ChevronRightIcon,
  Pen,
  X,
  CheckCheck
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../utils/useAuth';
import { useForm } from 'react-hook-form';
import { fetchUser, updateOrgDetails, updatePassword, updateUserDetails } from '../../../utils/Requests/AuthRequests';
import { handleCreateEmployee } from '../../../utils/ResponseHandlers/EmployeeResponse';
import { toast, ToastContainer } from 'react-toastify';

// Types
interface OrganizationData {
  Name: string;
  RegistrationNumber: string;
  TIN: string;
  Address: string;
}

interface UserProfile {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  Address: string;
  DateOfBirth: string;
  Gender: string;
}

interface PasswordData {
  CurrentPassword: string;
  NewPassword: string;
  ConfirmPassword: string;
}

type TabType = 'organization' | 'personal' | 'security';

export default function OrganizationProfile() {
  const { user, loadUser } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('organization');
  const [isEditingOrg, setIsEditingOrg] = useState(false);
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, reset, handleSubmit, formState: { isValid, errors }, watch } = useForm<PasswordData>();
  const {
    register: userReg,
    reset: userReset,
    handleSubmit: submitUser,
    formState: {
      isValid: userIsValid,
      errors: userErrors
    },
    setValue
  } = useForm<UserProfile>();
  const {
    register: orgReg,
    reset: orgReset,
    handleSubmit: submitOrg,
    formState: {
      isValid: orgIsValid,
      errors: orgErrors
    },
    setValue: setOrgValue
  } = useForm<OrganizationData>();
  const newPassword = watch('NewPassword');

  const tabs = [
    { id: 'organization', label: 'Organization', icon: Building2 },
    { id: 'personal', label: 'Personal Details', icon: UserCircle },
    { id: 'security', label: 'Security', icon: Shield },
  ] as const;

  useEffect(() => {
    if (user) {
      setValue('FirstName', user.firstName);
      setValue('LastName', user.lastName);
      setValue('Address', user.address);
      setValue('Gender', user.gender ?? "default");
      setValue('Email', user.email);
      setValue('Phone', user.phone);
      setValue('DateOfBirth', user.dateOfBirth && new Date(user.dateOfBirth).toISOString().split('T')[0]);
    }
  }, [user, setValue])

  useEffect(() => {
    if (user) {
      setOrgValue('Name', user.organisationName);
      setOrgValue('Address', user.organisationAddress);
      setOrgValue('TIN', user.tin);
      setOrgValue('RegistrationNumber', user.registrationNumber);
    }
  }, [user, setOrgValue])

  const updateUserPassword = async (data: PasswordData) =>{
    if (isValid && user) {
      const loader = document.getElementById('query-loader');
      const text = document.getElementById('query-text');
      if (loader) {
        loader.style.display = 'flex';
      }
      if (text) {
        text.style.display = 'none';
      }
      const res = await updatePassword(data, user.organisationId);
      handleCreateEmployee(res, loader, text, { toast }, reset);
    }
  }

  const updateUserData = async (data: UserProfile) =>{
    if (userIsValid && user) {
      const loader = document.getElementById('query-loader-1');
      const text = document.getElementById('query-text-1');
      if (loader) {
        loader.style.display = 'flex';
      }
      if (text) {
        text.style.display = 'none';
      }
      const res = await updateUserDetails(data);
      handleCreateEmployee(res, loader, text, { toast }, userReset)
      .finally(() => {
        fetchUser(localStorage.getItem('accessToken') ?? "")
          .then((res) => {
            if (res.status === 200) {
              return res.json();
            }
          })
          .then((data) => {
            loadUser(data.user);
          })
          .finally(() => setIsEditingPersonal(false))
      })
    }
  }

  const updateOrgData = async (data: OrganizationData) =>{
    if (orgIsValid && user) {
      const loader = document.getElementById('query-loader-2');
      const text = document.getElementById('query-text-2');
      if (loader) {
        loader.style.display = 'flex';
      }
      if (text) {
        text.style.display = 'none';
      }
      const res = await updateOrgDetails(data);
      handleCreateEmployee(res, loader, text, { toast }, userReset)
      .finally(() => {
        fetchUser(localStorage.getItem('accessToken') ?? "")
          .then((res) => {
            if (res.status === 200) {
              return res.json();
            }
          })
          .then((data) => {
            loadUser(data.user);
          })
          .finally(() => setIsEditingOrg(false))
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <ToastContainer />
      {/* Header */}
      <div className="mb-6">
        <div className="w-full mb-8">
          <div className="row">
            <div className="col-md-12">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex">
                  <UserLock className="text-blue-600 mr-2" size={36} />
                  <div>
                    <h3 className="mb-0 text-black">
                      Organisation & Profile
                    </h3>
                    <p className="text-secondary-600 text-black">
                      <NavLink to="/Dashboard">Dashboard</NavLink>{" "}
                      <ChevronRightIcon size={14} />{" "}
                      <NavLink to="/OrganizationProfile">Organisation & Profile</NavLink>{" "}
                    </p>
                  </div>
                </div>

                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        user && (
          <div className="mx-auto">
            {/* Tabs */}
            <div className="flex gap-1 bg-white p-1 rounded-lg border border-slate-200 mb-8 w-fit">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <a
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                      activeTab === tab.id
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:text-slate-900 cursor-pointer"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </a>
                );
              })}
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              
              <div className="p-6">
                {/* Organization Tab */}
                {activeTab === 'organization' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold text-gray-900">Organization Information</h2>
                      <div className="flex gap-3">
                        <button
                          onClick={() => window.location.href = '/admins'}
                          className="btn btn-info hidden"
                        >
                          <Users size={18} className="mr-2" />
                          View Admins
                        </button>
                        {
                          user.userRole === 'SuperAdmin' 
                          ? (!isEditingOrg
                            ? (
                              <button
                                className="btn btn-warning"
                                onClick={() => setIsEditingOrg(true)}
                              >
                                <Pen size={18} className="mr-2" /> Edit
                              </button>
                            )
                            : (<></>)
                          )
                          : (<></>)
                        }
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Organization Fields */}
                      <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={submitOrg(updateOrgData)} noValidate>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-black mb-1">
                            Organization Name
                          </label>
                          {isEditingOrg ? (
                            <div>
                              <input
                                type="text"
                                {
                                  ...orgReg('Name', {
                                    required: 'Required'
                                  })
                                }
                                className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                              />
                              <p className='error-msg'>{orgErrors.Name?.message}</p>
                            </div>
                          ) : (
                            <p className="text-gray-900 py-2">{user.organisationName}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-black mb-1">
                            Registration Number
                          </label>
                          {isEditingOrg ? (
                            <div>
                              <input
                                type="text"
                                {
                                  ...orgReg('RegistrationNumber', {
                                    required: 'Required'
                                  })
                                }
                                className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                              />
                              <p className='error-msg'>{orgErrors.RegistrationNumber?.message}</p>
                            </div>
                          ) : (
                            <p className="text-gray-900 py-2">{user.registrationNumber}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-black mb-1">
                            Tax Identification Number (TIN)
                          </label>
                          {isEditingOrg ? (
                            <div>
                              <input
                                type="text"
                                {
                                  ...orgReg('TIN', {
                                    required: 'Required'
                                  })
                                }
                                className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                              />
                              <p className='error-msg'>{orgErrors.TIN?.message}</p>
                            </div>
                          ) : (
                            <p className="text-gray-900 py-2">{user.tin}</p>
                          )}
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-black mb-1">
                            Address
                          </label>
                          {isEditingOrg ? (
                            <div>
                              <textarea
                                rows={3}
                                {
                                  ...orgReg('Address', {
                                    required: 'Required'
                                  })
                                }
                                className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                              />
                              <p className='error-msg'>{orgErrors.Address?.message}</p>
                            </div>
                          ) : (
                            <p className="text-gray-900 py-2">{user.organisationAddress}</p>
                          )}
                        </div>
                        {
                          isEditingOrg ? (
                            <div className='col-span-2 flex justify-end gap-2'>
                              <button
                                onClick={() => {
                                  setIsEditingOrg(false);
                                }}
                                className="btn btn-danger"
                              >
                                <X size={18} className="mr-2" /> Cancel
                              </button>
                              <button
                                className="btn btn-success"
                              >
                                <div className="dots hidden" id="query-loader-2">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                  </div>
                                  <span id="query-text-2">
                                    <CheckCheck size={18} className="mr-2" />
                                    Save Changes
                                  </span>
                              </button>
                            </div>
                          ) : (<></>)
                        }
                      </form>
                    </div>
                  </div>
                )}

                {/* Personal Details Tab */}
                {activeTab === 'personal' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                      {!isEditingPersonal ? (
                        <button
                          onClick={() => setIsEditingPersonal(true)}
                          className="btn btn-warning"
                        >
                          <Pen size={18} className="mr-2" /> Edit
                        </button>
                      ) : (
                        <></>
                      )}
                    </div>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={submitUser(updateUserData)} noValidate>
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">
                          First Name
                        </label>
                        {isEditingPersonal ? (
                          <div>
                            <input
                              type="text"
                              {
                                ...userReg('FirstName', {
                                  required: 'Required'
                                })
                              }
                              className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />
                            <p className='error-msg'>{userErrors.FirstName?.message}</p>
                          </div>
                          
                        ) : (
                          <p className="text-gray-900 py-2">{user.firstName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-black mb-1">
                          Last Name
                        </label>
                        {isEditingPersonal ? (
                          <div>
                            <input
                              type="text"
                              {
                                ...userReg('LastName', {
                                  required: 'Required'
                                })
                              }
                              className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />
                            <p className='error-msg'>{userErrors.LastName?.message}</p>
                          </div>
                        ) : (
                          <p className="text-gray-900 py-2">{user.lastName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-black mb-1">
                          Email Address
                        </label>
                        {isEditingPersonal ? (
                          <div>
                            <input
                              type="text"
                              {
                                ...userReg('Email', {
                                  required: 'Required'
                                })
                              }
                              className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />
                            <p className='error-msg'>{userErrors.Email?.message}</p>
                          </div>
                        ) : (
                          <p className="text-gray-900 py-2">{user.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-black mb-1">
                          Phone Number
                        </label>
                        {isEditingPersonal ? (
                          <div>
                            <input
                              type="text"
                              {
                                ...userReg('Phone', {
                                  required: 'Required'
                                })
                              }
                              className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />
                            <p className='error-msg'>{userErrors.Phone?.message}</p>
                          </div>
                        ) : (
                          <p className="text-gray-900 py-2">{user.phone}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">
                          Date Of Birth
                        </label>
                        {isEditingPersonal ? (
                          <div>
                            <input
                              type="date"
                              {
                                ...userReg('DateOfBirth', {
                                  required: 'Required'
                                })
                              }
                              className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />
                            <p className='error-msg'>{userErrors.DateOfBirth?.message}</p>
                          </div>
                        ) : (
                          <p className="text-gray-900 py-2">{user.dateOfBirth ? `${new Date(user.dateOfBirth).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric'})}` : "None Provided"}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-black mb-1">
                          Gender
                        </label>
                        {isEditingPersonal ? (
                          <div>
                            <select
                              {
                                ...userReg('Gender', {
                                  required: 'Required',
                                  pattern: {
                                    value: /^(?!default$).+$/,
                                    message: 'Required'
                                  }
                                })
                              }
                              className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            >
                              <option value="default">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                            <p className='error-msg'>{userErrors.DateOfBirth?.message}</p>
                          </div>
                        ) : (
                          <p className="text-gray-900 py-2">{user.gender ?? "None Provided"}</p>
                        )}
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-black mb-1">
                          Address
                        </label>
                        {isEditingPersonal ? (
                          <div>
                            <textarea
                              rows={3}
                              {
                                ...userReg('Address', {
                                  required: 'Required'
                                })
                              }
                              className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-secondary-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            />
                            <p className='error-msg'>{userErrors.Address?.message}</p>
                          </div>
                        ) : (
                          <p className="text-gray-900 py-2">{user.address ?? "None Provided"}</p>
                        )}
                      </div>
                      
                        {
                          isEditingPersonal ? (
                            <div className='col-span-2 flex justify-end gap-2'>
                              <button
                                onClick={() => {
                                  setIsEditingPersonal(false);
                                }}
                                className="btn btn-danger"
                              >
                                <X size={18} className="mr-2" /> Cancel
                              </button>
                              <button
                                className="btn btn-success"
                              >
                                <div className="dots hidden" id="query-loader-1">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                  </div>
                                  <span id="query-text-1">
                                    <CheckCheck size={18} className="mr-2" />
                                    Save Changes
                                  </span>
                              </button>
                            </div>
                          ) : (<></>)
                        }
                    </form>
                  </div>
                )}

                {/* Security Tab */}
                {activeTab === 'security' && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Change Password</h2>
                    <p className="text-gray-500 text-sm mb-6">
                      Update your account password. Make sure to use a strong password.
                    </p>

                    <form className="max-w-md space-y-5" onSubmit={handleSubmit(updateUserPassword)} noValidate>
                      <div>
                        <label className="block text-sm font-medium text-black mb-1">
                          Current Password
                        </label>
                        <div>
                          <div className="relative">
                            <input
                              type={showCurrentPassword ? 'text' : 'password'}
                              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter current password"
                              {
                                ...register('CurrentPassword', {
                                  required: 'Required'
                                })
                              }
                            />
                            <button
                              type="button"
                              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                              className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                              {showCurrentPassword ? <EyeOff size={18} className="text-gray-400" /> : <Eye size={18} className="text-gray-400" />}
                            </button>
                          </div>
                          <p className='error-msg'>{errors.CurrentPassword?.message}</p>
                        </div>
                        
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-black mb-1">
                          New Password
                        </label>
                        <div>
                          <div className="relative">
                            <input
                              type={showNewPassword ? 'text' : 'password'}
                              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter new password"
                              {
                                ...register('NewPassword', {
                                  required: 'Required',
                                  minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters',
                                  },
                                })
                              }
                            />
                            <button
                              type="button"
                              onClick={() => setShowNewPassword(!showNewPassword)}
                              className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                              {showNewPassword ? <EyeOff size={18} className="text-gray-400" /> : <Eye size={18} className="text-gray-400" />}
                            </button>
                            <p className='error-msg'>{errors.NewPassword?.message}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-black mb-1">
                          Confirm New Password
                        </label>
                        <div>
                          <div className="relative">
                            <input
                              type={showConfirmPassword ? 'text' : 'password'}
                              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Confirm new password"
                                {
                                  ...register('ConfirmPassword', {
                                    required: 'Required',
                                    minLength: {
                                      value: 8,
                                      message: 'Password must be at least 8 characters',
                                    },
                                    validate: (value) =>
                                        value === newPassword || 'Passwords do not match',
                                      })
                                    }
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                              {showConfirmPassword ? <EyeOff size={18} className="text-gray-400" /> : <Eye size={18} className="text-gray-400" />}
                            </button>
                          </div>
                          <p className='error-msg'>{errors.ConfirmPassword?.message}</p>
                        </div>
                          
                      </div>

                      <button
                        className="btn btn-success"
                      >
                        <div className="dots hidden" id="query-loader">
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                        </div>
                        <span id="query-text">
                          <CheckCheck size={18} className="mr-2" />
                          Update Password
                        </span>
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}