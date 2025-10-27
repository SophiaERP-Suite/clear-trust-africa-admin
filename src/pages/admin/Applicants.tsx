import "../../assets2/css/choices.min.css";
import "../../assets2/css/flatpickr.min.css";
import "../../assets2/css/libs.min.css";
import "../../assets2/css/quill.snow.css";
import "../../assets2/css/responsive.css";
import "../../assets2/css/sheperd.css";
import "../../assets2/css/sweetalert2.min.css";
import "../../assets2/css/tailwind.css";
import "../../assets2/css/uppy.min.css";
import "../../assets2/js/choice.js";
import "../../assets2/js/choices.min.js";
import "../../assets2/js/dashboard.js";
import "../../assets2/js/fslightbox.js";
import "../../assets2/js/libs.min.js";
import "../../assets2/js/slider-tabs.js";
import "../../assets2/js/sweet-alert.js";
import "../../assets2/js/swiper-slider.js";

function AdminApplicants() {
  return (
    <>
      <div className="text-white h-48 sub-header">
        <div className="w-full p-8">
          <div className="row">
            <div className="px-4 col-md-12">
              <div className="flex flex-wrap items-center justify-between">
                <div>
                  <h1 className="text-white mb-2 mr-16">Hello Qompac!</h1>
                  <p className="mb-4 text-white mr-16">
                    Experience a simple yet powerful way to build Dashboards
                    with Qompac UI.
                  </p>
                </div>
                <div>
                  <a
                    href="javascript:void(0)"
                    className="text-white btn shadow-md btn-soft-light hover:shadow-xl hover:bg-glass focus:bg-gray-200"
                  >
                    <svg
                      width="20"
                      className="inline-block"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8251 15.2171H12.1748C14.0987 15.2171 15.731 13.985 16.3054 12.2764C16.3887 12.0276 16.1979 11.7713 15.9334 11.7713H14.8562C14.5133 11.7713 14.2362 11.4977 14.2362 11.16C14.2362 10.8213 14.5133 10.5467 14.8562 10.5467H15.9005C16.2463 10.5467 16.5263 10.2703 16.5263 9.92875C16.5263 9.58722 16.2463 9.31075 15.9005 9.31075H14.8562C14.5133 9.31075 14.2362 9.03619 14.2362 8.69849C14.2362 8.35984 14.5133 8.08528 14.8562 8.08528H15.9005C16.2463 8.08528 16.5263 7.8088 16.5263 7.46728C16.5263 7.12575 16.2463 6.84928 15.9005 6.84928H14.8562C14.5133 6.84928 14.2362 6.57472 14.2362 6.23606C14.2362 5.89837 14.5133 5.62381 14.8562 5.62381H15.9886C16.2483 5.62381 16.4343 5.3789 16.3645 5.13113C15.8501 3.32401 14.1694 2 12.1748 2H11.8251C9.42172 2 7.47363 3.92287 7.47363 6.29729V10.9198C7.47363 13.2933 9.42172 15.2171 11.8251 15.2171Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.4"
                        d="M19.5313 9.82568C18.9966 9.82568 18.5626 10.2533 18.5626 10.7823C18.5626 14.3554 15.6186 17.2627 12.0005 17.2627C8.38136 17.2627 5.43743 14.3554 5.43743 10.7823C5.43743 10.2533 5.00345 9.82568 4.46872 9.82568C3.93398 9.82568 3.5 10.2533 3.5 10.7823C3.5 15.0873 6.79945 18.6413 11.0318 19.1186V21.0434C11.0318 21.5715 11.4648 22.0001 12.0005 22.0001C12.5352 22.0001 12.9692 21.5715 12.9692 21.0434V19.1186C17.2006 18.6413 20.5 15.0873 20.5 10.7823C20.5 10.2533 20.066 9.82568 19.5313 9.82568Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    Announcements
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 h-80 img-height overflow-hidden"
          style={{ zIndex: -1 }}
        >
          <img
            src="../../assets/images/dashboard/top-header.html"
            alt="header"
            className="animated-scaleX object-cover w-screen h-full rounded-2xl"
          />
        </div>
      </div>
      <div className="flex flex-wrap contet-inner">
    <div className="flex-auto w-full">
        <div className="relative flex flex-col mb-8  bg-white dark:bg-dark-card shadow rounded">
            <div className="flex justify-between flex-auto p-5 border-b dark:border-secondary-800 rounded">
                <h4 className="mb-0 dark:text-secondary-200">User List</h4>
            </div>
            <div className="pb-6 pt-2 px-0">
                <div className="overflow-x-auto">
                    <div className=" overflow-x-auto p-5">
                        <div className="flex flex-wrap justify-between my-6 mx-5">
                            <div className="flex justify-center items-center mb-1">
                            <label className="inline-block text-secondary-600 dark:text-white" htmlFor="show">Show</label>
                            <div className="flex">
                                <select
                                className="block w-full px-2 py-1 ml-2 text-base font-normal rounded text-secondary-500 dark:bg-dark-card dark:border-secondary-800 bg-white border outline-none focus:border-primary-500 focus:shadow"
                                aria-label=".form-select-sm example" id="show">
                                <option selected={true}>10</option>
                                <option value="1">25</option>
                                <option value="2">50</option>
                                <option value="3">100</option>
                                </select>
                                <span className="text-secondary-600 ml-1 dark:text-white">entries</span>
                            </div>
                            </div>
                            <div className="flex justify-center items-center mb-1">
                            <label className="inline-block mb-2 text-secondary-600 dark:text-white" htmlFor="email">Search:</label>
                            <input type="email"
                                className="block w-full px-4 py-1 ml-2 text-base font-normal dark:bg-dark-card dark:border-secondary-800 bg-white border rounded outline-none focus:border-primary-500 focus:shadow"
                                id="email"/>
                            </div>
                        </div>
                        <table
                            className="min-w-full overflow-hidden divide-y divide-secondary-200 dark:divide-secondary-800 border dark:border-secondary-800">
                            <thead>
                                <tr className="bg-secondary-100 dark:bg-dark-bg">
                                    <th className="px-6 py-4 text-left font-medium text-secondary-600 dark:text-white">
                                        Profile</th>
                                    <th className="px-6 py-4 text-left font-medium text-secondary-600 dark:text-white">
                                        Name</th>
                                    <th className="px-6 py-4 text-left font-medium text-secondary-600 dark:text-white">
                                        Contact</th>
                                    <th className="px-6 py-4 text-left font-medium text-secondary-600 dark:text-white">
                                        Email</th>
                                    <th className="px-6 py-4 text-left font-medium text-secondary-600 dark:text-white">
                                        Country</th>
                                    <th className="px-6 py-4 text-left font-medium text-secondary-600 dark:text-white">
                                        Status</th>
                                    <th className="px-6 py-4 text-left font-medium text-secondary-600 dark:text-white">
                                        Company</th>
                                    <th className="px-6 py-4 text-left font-medium text-secondary-600 dark:text-white">
                                        Join Date</th>
                                    <th className="px-6 py-4 text-left font-medium text-secondary-600 dark:text-white">
                                        Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img className="w-10 h-10 mr-3 text-primary-400 bg-primary-500/10 rounded-xl"
                                            src="../../assets/images/shapes/01.html" alt="profile"/>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">Anna Sthesia</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">(760) 756 7568</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">annasthesia@gmail.com
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">USA</td>
                                    <td className="px-6 py-4"><span
                                            className="inline-block whitespace-nowrap px-2 py-1 text-xs text-center font-bold leading-none text-white bg-primary-500 rounded">Active</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">Acme Corporation</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">2019/12/01</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center list-user-action">
                                            <a className="btn btn-success btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Add">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M19.2036 8.66919V12.6792" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path d="M21.2497 10.6741H17.1597" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="btn btn-warning btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Edit">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="btn btn-danger btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Delet">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                        <path
                                                            d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M20.708 6.23975H3.75" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path
                                                            d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-secondary-100 dark:bg-dark-bg">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img className="w-10 h-10 mr-3 text-primary-400 bg-primary-500/10  rounded-xl"
                                            src="../../assets/images/shapes/02.html" alt="profile"/>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">Brock Lee</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">+62 5689 458 658</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">brocklee@gmail.com</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">Indonesia</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600"><span
                                            className="inline-block whitespace-nowrap px-2 py-1 text-xs text-center font-bold leading-none text-white bg-primary-500 rounded">Active</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">Soylent Corp</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">2019/12/01</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center list-user-action">
                                            <a className="btn btn-success btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Add">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M19.2036 8.66919V12.6792" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path d="M21.2497 10.6741H17.1597" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="btn btn-warning btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Edit">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="btn btn-danger btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Delet">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                        <path
                                                            d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M20.708 6.23975H3.75" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path
                                                            d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img className="w-10 h-10 mr-3 text-primary-400 bg-primary-500/10 rounded-xl"
                                            src="../../assets/images/shapes/03.html" alt="profile"/>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">Dan Druff</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">+55 6523 456 856</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">dandruff@gmail.com</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">Brazil</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 "><span
                                            className="inline-block whitespace-nowrap px-2 py-1 text-xs text-center font-bold leading-none text-white bg-warning-500 rounded">Pending</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">Umbrella Corporation</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">2019/12/01</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center list-user-action">
                                            <a className="btn btn-success btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Add">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M19.2036 8.66919V12.6792" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path d="M21.2497 10.6741H17.1597" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="btn btn-warning btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Edit">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="btn btn-danger btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Delet">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                        <path
                                                            d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M20.708 6.23975H3.75" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path
                                                            d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-secondary-100 dark:bg-dark-bg">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img className="w-10 h-10 mr-3 text-primary-400 bg-primary-500/10 rounded-xl"
                                            src="../../assets/images/shapes/04.html" alt="profile"/>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500 ">Hans Olo</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">+91 2586 253 125</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">hansolo@gmail.com</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">India</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600"><span
                                            className="inline-block whitespace-nowrap px-2 py-1 text-xs text-center font-bold leading-none text-white bg-danger-500 rounded">Inactive</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">Vehement Capital</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">2019/12/01</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center list-user-action">
                                            <a className="btn btn-success btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Add">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M19.2036 8.66919V12.6792" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path d="M21.2497 10.6741H17.1597" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="btn btn-warning btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Edit">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="btn btn-danger btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Delet">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                        <path
                                                            d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M20.708 6.23975H3.75" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path
                                                            d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img className="w-10 h-10 mr-3 text-primary-400 bg-primary-500/10 rounded-xl"
                                            src="../../assets/images/shapes/05.html" alt="profile"/>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">Lynn Guini</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">+27 2563 456 589</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600">lynnguini@gmail.com</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">Africa</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600"><span
                                            className="inline-block whitespace-nowrap px-2 py-1 text-xs text-center font-bold leading-none text-white bg-primary-500 rounded">Active</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">Massive Dynamic</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">2019/12/01</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center list-user-action">
                                            <a className="btn btn-success btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Add">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M19.2036 8.66919V12.6792" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path d="M21.2497 10.6741H17.1597" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="btn btn-warning btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Edit">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="btn btn-danger btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Delet">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                        <path
                                                            d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M20.708 6.23975H3.75" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path
                                                            d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-secondary-100 dark:bg-dark-bg">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img className="w-10 h-10 mr-3 text-primary-400 bg-primary-500/10 rounded-xl"
                                            src="../../assets/images/shapes/06.html" alt="profile"/>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">Eric Shun</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">+55 25685 256 589</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">ericshun@gmail.com</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">Brazil</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600"><span
                                            className="inline-block whitespace-nowrap px-2 py-1 text-xs text-center font-bold leading-none text-white bg-warning-500 rounded">Pending</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500 ">Globex Corporation</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">2019/12/01</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center list-user-action">
                                            <a className="btn btn-success btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Add">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M19.2036 8.66919V12.6792" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path d="M21.2497 10.6741H17.1597" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="btn btn-warning btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Edit">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="btn btn-danger btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Delet">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                        <path
                                                            d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M20.708 6.23975H3.75" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path
                                                            d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img className="w-10 h-10 mr-3 text-primary-400 bg-primary-500/10 rounded-xl"
                                            src="../../assets/images/shapes/03.html" alt="profile"/>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">aaronottix</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">(760) 765 2658</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">budwiser@ymail.com</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">USA</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600"><span
                                            className="inline-block whitespace-nowrap px-2 py-1 text-xs text-center font-bold leading-none text-white bg-info-500 rounded">Hold</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">Acme Corporation</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">2019/12/01</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center list-user-action">
                                            <a className="btn btn-success btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Add">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M19.2036 8.66919V12.6792" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path d="M21.2497 10.6741H17.1597" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="btn btn-warning btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Edit">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="btn btn-danger btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Delet">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                        <path
                                                            d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M20.708 6.23975H3.75" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path
                                                            d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-secondary-100 dark:bg-dark-bg">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img className="w-10 h-10 mr-3 text-primary-400 bg-primary-500/10 rounded-xl"
                                            src="../../assets/images/shapes/05.html" alt="profile"/>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-slate-500 dark:text-secondary-500">Marge Arita</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-slate-500 dark:text-secondary-500">+27 5625 456 589</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-slate-500 dark:text-secondary-500">margearita@gmail.com</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-slate-500 dark:text-secondary-500">Africa</td>
                                    <td className="px-6 py-4 whitespace-nowrap"><span
                                            className="inline-block whitespace-nowrap px-2 py-1 text-xs text-center font-bold leading-none text-white bg-success-500 rounded">Complete</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-slate-500 dark:text-secondary-500">Vehement Capital</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-slate-500 dark:text-secondary-500">2019/12/01</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center list-user-action">
                                            <a className="btn btn-success btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Add">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M19.2036 8.66919V12.6792" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path d="M21.2497 10.6741H17.1597" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="btn btn-warning btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Edit">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="btn btn-danger btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Delet">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                        <path
                                                            d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M20.708 6.23975H3.75" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path
                                                            d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img className="w-10 h-10 mr-3 text-primary-400 bg-primary-500/10 rounded-xl"
                                            src="../../assets/images/shapes/02.html" alt="profile"/>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">Bill Dabear</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">+55 2563 456 589</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">billdabear@gmail.com</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">Brazil</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600"><span
                                            className="inline-block whitespace-nowrap px-2 py-1 text-xs text-center font-bold leading-none text-white bg-primary-500 rounded">Active</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">Massive Dynamic</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-secondary-600 dark:text-secondary-500">2019/12/01</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center list-user-action">
                                            <a className="btn btn-success btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Add">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M19.2036 8.66919V12.6792" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path d="M21.2497 10.6741H17.1597" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="btn btn-warning btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Edit">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            <a className="btn btn-danger btn-icon btn-sm mr-1" href="#" type="button"
                                                data-tp-toggle="tooltip" data-tp-placement="top" data-tp-title="Delet">
                                                <span className="btn-inner">
                                                    <svg width="17" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                        <path
                                                            d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M20.708 6.23975H3.75" stroke="currentColor"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path
                                                            d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="border dark:border-secondary-800">
                        <div className="flex flex-wrap justify-between my-6 mx-5">
                                <div className="flex justify-center items-center mb-1">
                                  <p className="text-secondary-600">Showing 1 to 9 of 9 entries</p>  
                                </div>
                                <div className="inline-flex flex-wrap">
                                    <a href="#" className="border-t border-b border-l text-primary-500 border-secondary-500 px-2 py-1 rounded-l dark:border-secondary-800">Previous</a>
                                    <a href="#" className="border text-white border-secondary-500 cursor-pointer bg-primary-500 px-4 py-1 dark:border-secondary-800">1</a>
                                    <a href="#" className="border-r border-t border-b text-primary-500 border-secondary-500 px-4 py-1 rounded-r dark:border-secondary-800">Next</a>
                                </div>
                        </div>
                    </div>  
                    </div> 
                    
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  );
}

export default AdminApplicants;
