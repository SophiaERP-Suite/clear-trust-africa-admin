import { ChevronRightIcon, Users } from "lucide-react";
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
// import { ChevronRightIcon } from "lucide-react";

function AdminApplicantsNew() {
  return (
    <>
      <div
        className="text-white h-48 sub-header"
        style={{ backgroundColor: "rgb(112 22 208 / 1)", overflow: "hidden" }}
      >
        <div className="w-full p-8">
          <div className="row">
            <div className="px-4 col-md-12">
              <div className="flex flex-wrap items-center justify-between">
                <div>
                  <h1 className="text-white mb-2 mr-16">New Applicant</h1>
                  <p className="mb-4 text-white mr-16">
                    <p className="text-secondary-600 text-white">
                      <a href="/admin/dashboard">Dashboard</a>{" "}
                      <ChevronRightIcon size={14} />{" "}
                      <a href="applicants">Applicants Management</a>{" "}
                      <ChevronRightIcon size={14} /> New Applicant
                    </p>
                  </p>
                </div>
                <div>
                  <a
                    href="applicantsMgt"
                    className="text-white btn shadow-md btn-soft-light hover:shadow-xl hover:bg-glass focus:bg-gray-200"
                  >
                    <Users size={18} className="mr-2" />
                    All Applicants
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
      <div
        className="p-6 lg:p-8 footer-inner  mx-auto main-container  lg:py-0 py-0 "
        x-bind:class="setting.page_layout"
      >
        <div className="flex flex-wrap contet-inner" x-data="{ openTab: 1 }">
          <div className="flex-auto w-full mt-6 md:mt-0">
            <div className="relative flex flex-col mb-8 text-secondary-500 bg-white shadow rounded dark:bg-dark-card">
              <div className="flex-auto p-6 ">
                <div className="flex flex-wrap items-center justify-between">
                  <div className="flex flex-wrap items-center">
                    <div className="right-0 lg:relative mb-0 mr-4 -mt-20 lg:top-0 top-9 md:top-4 lg:mb-0 profile-logo profile-logo1">
                      <img
                        src="user.jpg"
                        className="w-24 h-24 border-4 border-white mb-3 rounded-full"
                        alt="profile-image"
                      />
                    </div>
                    <div className="flex flex-wrap items-center mb-4 md:mb-0">
                      <h4 className="mr-2  font-medium mb-0 dark:text-white">
                        Austin Robertson
                      </h4>
                      <span className="mb-0 mr-3 text-secondary-600 dark:text-white">
                        {" "}
                        - Web Developer
                      </span>
                    </div>
                  </div>
                  <ul className="flex flex-wrap mb-0 text-center ">
                    <li className="nav-item">
                      <a
                        className="block px-4 py-2 text-secondary-600 hover:text-primary-500 rounded-full focus:text-white focus:bg-primary-500 focus:rounded-full"
                        href="#profile-feed"
                        x-bind:style="openTab == 1 ? 'border-radius:9999px; color:white; background-color:#7016d0' : ''"
                      >
                        Overview
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="block px-4 py-2 text-secondary-600 hover:text-primary-500 rounded-full focus:text-white focus:bg-primary-500 focus:rounded-full"
                        href="#profile-activity"
                        x-bind:style="openTab == 2 ? 'border-radius:9999px; color:white; background-color:#7016d0' : ''"
                      >
                        History
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="block px-4 py-2 text-secondary-600 hover:text-primary-500 rounded-full focus:text-white focus:bg-primary-500 focus:rounded-full"
                        href="#profile-friends"
                        x-bind:style="openTab == 3 ? 'border-radius:9999px; color:white; background-color:#7016d0' : ''"
                      >
                        Records
                      </a>
                    </li>
                 
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
            <div className="flex-auto w-full lg:w-1/4 ">
              <div className="relative flex flex-col mb-8  bg-white shadow rounded dark:bg-dark-card">
                <div className="p-5 border-b dark:border-secondary-800">
                  <h4 className="font-medium mb-0 dark:text-white">News</h4>
                </div>
                <div className="flex-auto p-5 ">
                  <ul className="p-0 m-0 list-inline">
                    <li className="flex mb-2">
                      <div className="mr-4 text-secondary-600 dark:text-white mt-2 md:mt-1 rtl:ml-2">
                        <svg width="20" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"
                          ></path>
                        </svg>
                      </div>
                      <p className="mb-0 news-detail text-secondary-600 dark:text-white">
                        there is a meetup in your city on friday at 19:00.
                        <a
                          href="#"
                          className="text-primary-500 hover:text-primary-500"
                        >
                          see details
                        </a>
                      </p>
                    </li>
                    <li className="flex">
                      <div className="mr-4 text-secondary-600 dark:text-white mt-1 rtl:ml-2">
                        <svg width="20" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"
                          ></path>
                        </svg>
                      </div>
                      <p className="mb-0 news-detail text-secondary-600 dark:text-white">
                        20% off coupon on selected items at pharmaprix{" "}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative flex flex-col mb-8  bg-white shadow rounded dark:bg-dark-card">
                <div className="flex items-center justify-between p-5 border-b dark:border-secondary-800">
                  <h4 className="text-2xl font-medium mb-0 dark:text-white">
                    Gallery
                  </h4>
                  <span className="dark:text-white">132 pics</span>
                </div>
                <div className="flex-auto p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <a
                      data-fslightbox="gallery"
                      href="../../assets/images/icons/04.html"
                    >
                      <img
                        src="../../assets/images/icons/04.html"
                        className="w-full h-auto rounded bg-info-500/10 text-info-500"
                        alt="profile-image"
                      />
                    </a>
                    <a
                      data-fslightbox="gallery"
                      href="../../assets/images/shapes/02.html"
                    >
                      <img
                        src="../../assets/images/shapes/02.html"
                        className="w-full text-primary-500 bg-primary-500/10 rounded"
                        alt="profile-image"
                      />
                    </a>
                    <a
                      data-fslightbox="gallery"
                      href="../../assets/images/icons/08.html"
                    >
                      <img
                        src="../../assets/images/icons/08.html"
                        className="w-full rounded bg-info-500/10 text-info-500"
                        alt="profile-image"
                      />
                    </a>
                    <a
                      data-fslightbox="gallery"
                      href="../../assets/images/shapes/04.html"
                    >
                      <img
                        src="../../assets/images/shapes/04.html"
                        className="w-full text-primary-500 bg-primary-500/10 rounded"
                        alt="profile-image"
                      />
                    </a>
                    <a
                      data-fslightbox="gallery"
                      href="../../assets/images/icons/02.html"
                    >
                      <img
                        src="../../assets/images/shapes/03.html"
                        className="w-full text-warning-500 bg-warning-500/10 rounded"
                        alt="profile-image"
                      />
                    </a>
                    <a
                      data-fslightbox="gallery"
                      href="../../assets/images/shapes/06.html"
                    >
                      <img
                        src="../../assets/images/shapes/06.html"
                        className="w-full text-primary-500 bg-primary-500/10 rounded"
                        alt="profile-image"
                      />
                    </a>
                    <a
                      data-fslightbox="gallery"
                      href="../../assets/images/icons/05.html"
                    >
                      <img
                        src="../../assets/images/shapes/05.html"
                        className="w-full text-danger-500 bg-danger-500/10 rounded"
                        alt="profile-image"
                      />
                    </a>
                    <a
                      data-fslightbox="gallery"
                      href="../../assets/images/shapes/04.html"
                    >
                      <img
                        src="../../assets/images/shapes/04.html"
                        className="w-full text-primary-500 bg-primary-500/10 rounded"
                        alt="profile-image"
                      />
                    </a>
                    <a
                      data-fslightbox="gallery"
                      href="../../assets/images/icons/01.html"
                    >
                      <img
                        src="../../assets/images/icons/01.html"
                        className="w-full text-success-500 bg-success-500/10 rounded"
                        alt="profile-image"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col mb-8  bg-white shadow rounded dark:bg-dark-card">
                <div className="flex-auto p-5 border-b dark:border-secondary-800">
                  <h4 className="text-2xl font-medium dark:text-white mb-0">
                    Twitter Feeds
                  </h4>
                </div>
                <div className="flex-auto px-5 pt-5">
                  <div>
                    <div className="flex items-center mb-2">
                      <img
                        className="w-12 h-12  mr-4 bg-danger-500/10 rounded-full rtl:ml-4"
                        src="../../assets/images/avatars/03.html"
                      />
                      <div className="media-support-info">
                        <h6 className="mb-0  font-medium dark:text-white">
                          Wade Warren
                        </h6>
                        <p className="mb-0 dark:text-white">
                          @wade007
                          <span className="text-primary-500">
                            <svg
                              width="15"
                              className="inline-block"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                              ></path>
                            </svg>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="media-support-body">
                      <p className="mb-0 text-secondary-600 dark:text-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                      </p>
                      <div className="flex flex-wrap text-primary-500 hover:text-primary-600">
                        <a href="#" className="pr-2 twit-meta-tag">
                          #Html
                        </a>
                        <a href="#" className="pr-2 twit-meta-tag">
                          #Bootstrap
                        </a>
                      </div>
                      <div className="twit-date dark:text-white">
                        07 Jan 2021
                      </div>
                    </div>
                  </div>
                  <hr className="my-6 text-secondary-500" />
                  <div className="flex items-center mb-2">
                    <img
                      className="w-12 h-12  mr-4 bg-primary-500/10 rounded-full rtl:ml-4"
                      src="../../assets/images/avatars/04.html"
                    />
                    <div className="media-support-info">
                      <h6 className="mb-0  font-medium dark:text-white">
                        Flutter
                      </h6>
                      <p className="mb-0 dark:text-white">
                        @jane59
                        <span className="text-primary-500">
                          <svg
                            width="15"
                            className="inline-block"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                            ></path>
                          </svg>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="media-support-body">
                    <p className="mb-0 text-secondary-600 dark:text-white">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </p>
                    <div className="flex flex-wrap text-primary-500 hover:text-primary-600">
                      <a href="#" className="pr-2 twit-meta-tag">
                        #Js
                      </a>
                      <a href="#" className="pr-2 twit-meta-tag">
                        #Bootstrap
                      </a>
                    </div>
                    <div className="twit-date dark:text-white">18 Feb 2021</div>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <hr className="my-6 text-secondary-500" />
                  <div className="flex items-center mb-2">
                    <img
                      className="w-12 h-12  mr-4 bg-warning-500/10 rounded-full rtl:ml-4"
                      src="../../assets/images/avatars/02.html"
                    />
                    <div className="mt-2">
                      <h6 className="mb-0  font-medium dark:text-white">
                        Guy Hawkins
                      </h6>
                      <p className="mb-0 dark:text-white">
                        @hawk_g
                        <span className="text-primary-500">
                          <svg
                            width="15"
                            className="inline-block"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                            ></path>
                          </svg>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="media-support-body">
                    <p className="mb-0 text-secondary-600 dark:text-white">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </p>
                    <div className="flex flex-wrap text-primary-500 hover:text-primary-600">
                      <a href="#" className="pr-2 twit-meta-tag">
                        #Html
                      </a>
                      <a href="#" className="pr-2 twit-meta-tag">
                        #CSS
                      </a>
                    </div>
                    <div className="twit-date dark:text-white">15 Mar 2021</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-auto w-full lg:w-2/4">
              <div x-show="openTab === 1">
                <div className="relative flex flex-col mb-8 bg-white shadow rounded dark:bg-dark-card">
                  <div className="flex items-center justify-between flex-auto p-6 pb-6">
                    <div className="header-title">
                      <div className="flex flex-wrap">
                        <div className="md:mr-4 mr-8">
                          <img
                            className="max-w-full  bg-danger-500/10 rounded-full h-14 w-14"
                            src="../../assets/images/avatars/02.html"
                          />
                        </div>
                        <div className="mt-2 rtl:mr-4">
                          <h5 className="mb-0 text-xl font-medium dark:text-white">
                            Anna Sthesia
                          </h5>
                          <p className="mb-0 text-primary-500 dark:text-primary-500">
                            colleagues
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center" x-data="{ open: false }">
                      <div className="" x-data="dropdown">
                        <span className="flex items-center text-base cursor-pointer text-secondary-600 dark:text-white">
                          29 mins
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x-bind="checkArrow()"
                            className="w-5 h-7 duraion-500 transition-transform rotate-0"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                          >
                            <path d="M128 192l128 128 128-128z"></path>
                          </svg>
                        </span>
                        <div
                          className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-bg rounded shadow-lg dark:text-secondary-600 origin-top-right"
                          x-bind="dropdownTransition"
                          style={{ display: "none" }}
                        >
                          <a
                            className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 dark:text-white group"
                            href="javascript:void(0);"
                          >
                            Action
                          </a>
                          <a
                            className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 dark:text-white group"
                            href="javascript:void(0);"
                          >
                            Another action
                          </a>
                          <a
                            className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 dark:text-white group"
                            href="javascript:void(0);"
                          >
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-0 ">
                    <a href="javascript:void(0);">
                      <img
                        src="../../assets/images/pages/03-page.html"
                        alt="post-image"
                        className="w-full"
                      />
                    </a>
                    <div className="p-4">
                      <div className="flex flex-wrap items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex items-center mr-4">
                            <svg
                              width="20"
                              height="20"
                              className="inline-block rtl:ml-2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
                              ></path>
                            </svg>
                            <span className="ml-1 dark:text-white">140</span>
                          </div>
                          <div className="flex items-center ">
                            <svg
                              width="20"
                              height="20"
                              className="inline-block rtl:ml-2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z"
                              ></path>
                            </svg>
                            <span className="ml-1 dark:text-white">140</span>
                          </div>
                        </div>
                        <div x-data="{ open: false }">
                          <div className="flex items-center mr-3 text-primary-500 hover:text-primary-600">
                            <a href="#" x-on:click="scrolldisable()">
                              <div
                                className="fixed w-full h-full botttom-0 z-50"
                                x-show="open"
                                style={{ display: "none" }}
                              >
                                <span className="fixed bg-secondary-900/[0.3] bg-opacity-30 w-full h-full inset-x-0 top-0"></span>
                                <nav
                                  className="right-0 fixed bg-white top-0 bg-white py-4 dark:bg-dark-card h-full overflow-auto z-40"
                                  x-show="open"
                                  x-description="Mobile menu"
                                  role="menu"
                                  x-transition:enter="transform transition-transform duration-700"
                                  x-transition:enter-start="translate-x-full"
                                  x-transition:enter-end="translate-x-0"
                                  x-transition:leave="transform transition-transform duration-700"
                                  x-transition:leave-start="translate-x-0"
                                  x-transition:leave-end="translate-x-full"
                                >
                                  <div className="p-3">
                                    <h3 className="text-2xl font-semibold text-secondary-600">
                                      <div className="">
                                        <p className="text-xl dark:text-white mb-4 ml-3">
                                          Share
                                        </p>
                                        <ul className="flex">
                                          <li className="relative block px-2 py-2 dark:text-secondary-600 text-black border-0 pb-0">
                                            <a href="#">
                                              <img
                                                src="../../assets/images/brands/08.html"
                                                alt="fb"
                                                className="ml-3 rounded-lg"
                                              />
                                            </a>
                                            <p className="text-sm dark:text-white text-black ">
                                              Facebook
                                            </p>
                                          </li>
                                          <li className="relative block px-2 py-2 dark:text-secondary-600 text-black border-0 pb-0">
                                            <a href="#">
                                              <img
                                                src="../../assets/images/brands/09.html"
                                                alt="fb"
                                                className="ml-1 rounded-lg"
                                              />
                                            </a>
                                            <p className="text-sm dark:text-white text-black ">
                                              Twitter
                                            </p>
                                          </li>
                                          <li className="relative block px-2 py-2 dark:text-secondary-600 text-black border-0 pb-0">
                                            <a href="#">
                                              <img
                                                src="../../assets/images/brands/10.html"
                                                alt="fb"
                                                className="ml-3 rounded-lg"
                                              />
                                            </a>
                                            <p className="text-sm dark:text-white text-black ">
                                              Instagram
                                            </p>
                                          </li>
                                          <li className="relative block px-2 py-2 dark:text-secondary-600 text-black border-0 pb-0">
                                            <a href="#">
                                              <img
                                                src="../../assets/images/brands/11.html"
                                                alt="fb"
                                                className="ml-4 rounded-lg"
                                              />
                                            </a>
                                            <p className="text-sm dark:text-white text-black ">
                                              Google Plus
                                            </p>
                                          </li>
                                          <li className="relative block px-2 py-2 dark:text-secondary-600 text-black border-0 pb-0">
                                            <a href="#">
                                              <img
                                                src="../../assets/images/brands/13.html"
                                                alt="fb"
                                                className=" rounded-lg"
                                              />
                                            </a>
                                            <p className="text-sm dark:text-white text-black  ml-2">
                                              In
                                            </p>
                                          </li>
                                          <li className="relative block px-2 py-2 dark:text-secondary-600 text-black border-0 pb-0">
                                            <a href="#">
                                              <img
                                                src="../../assets/images/brands/12.html"
                                                alt="fb"
                                                className="ml-3 rounded-lg"
                                              />
                                            </a>
                                            <p className="text-sm dark:text-white text-black ">
                                              YouTube
                                            </p>
                                          </li>
                                        </ul>
                                      </div>
                                    </h3>
                                    <a
                                      x-on:click="scrollenable()"
                                      className="absolute mr-2 cursor-pointer top-1 right-5 text-4xl text-black dark:text-white"
                                    >
                                      &times;
                                    </a>
                                  </div>
                                </nav>
                              </div>

                              <svg
                                width="18"
                                className="me-1"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z"
                                ></path>
                              </svg>
                            </a>
                            <a href="#" x-on:click="scrolldisable()">
                              <span className="ml-1 rtl:mr-2">99 Share</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <hr className="my-4 text-secondary-500" />
                      <p className="pb-4 text-secondary-600 dark:text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi nulla dolor, ornare at commodo non, feugiat non
                        nisi. Phasellus faucibus mollis pharetra. Proin blandit
                        ac massa sed rhoncus
                      </p>
                      <ul className="p-0 m-0 pt-4">
                        <li className="mb-2">
                          <div className="flex">
                            <img
                              src="../../assets/images/avatars/03.html"
                              alt="userimg"
                              className="w-12 h-12  bg-primary-500/10 rounded-full mzx-w-full rtl:ml-4"
                            />
                            <div className="ml-4">
                              <h6 className="mb-1 font-medium dark:text-white">
                                Monty Carlo
                              </h6>
                              <p className="mb-1 text-secondary-600 dark:text-white">
                                Lorem ipsum dolor sit amet
                              </p>
                              <div className="flex flex-wrap items-center mb-1">
                                <a
                                  href="javascript:void(0);"
                                  className="mr-4 text-primary-500 hover:text-primary-600"
                                >
                                  <svg
                                    width="20"
                                    height="20"
                                    className="inline-block mr-1 text-secondary-600"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
                                    ></path>
                                  </svg>
                                  like
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="mr-4 text-primary-500 hover:text-primary-600"
                                >
                                  <svg
                                    width="20"
                                    height="20"
                                    className="inline-block mr-1"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M8,9.8V10.7L9.7,11C12.3,11.4 14.2,12.4 15.6,13.7C13.9,13.2 12.1,12.9 10,12.9H8V14.2L5.8,12L8,9.8M10,5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9"
                                    ></path>
                                  </svg>
                                  reply
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="mr-4 text-primary-600 hover:text-primary-600 rtl:ml-2"
                                >
                                  translate
                                </a>
                                <span className="dark:text-white"> 5 min </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="flex">
                            <img
                              src="../../assets/images/avatars/04.html"
                              alt="userimg"
                              className="w-12 h-12 max-w-full  bg-danger-500/10 rounded-full rtl:ml-4"
                            />
                            <div className="ml-4">
                              <h6 className="mb-1 font-medium  dark:text-white">
                                Paul Molive
                              </h6>
                              <p className="mb-1 text-secondary-600 dark:text-white">
                                Lorem ipsum dolor sit amet
                              </p>
                              <div className="flex flex-wrap items-center">
                                <a
                                  href="javascript:void(0);"
                                  className="mr-4 text-primary-500 hover:text-primary-600"
                                >
                                  <svg
                                    width="20"
                                    height="20"
                                    className="inline-block mr-1 text-secondary-600"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
                                    ></path>
                                  </svg>
                                  like
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="mr-4 text-primary-500 hover:text-primary-600"
                                >
                                  <svg
                                    width="20"
                                    height="20"
                                    className="inline-block mr-1"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M8,9.8V10.7L9.7,11C12.3,11.4 14.2,12.4 15.6,13.7C13.9,13.2 12.1,12.9 10,12.9H8V14.2L5.8,12L8,9.8M10,5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9"
                                    ></path>
                                  </svg>
                                  reply
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="mr-4 text-primary-600 hover:text-primary-600 rtl:ml-2"
                                >
                                  translate
                                </a>
                                <span className="dark:text-white"> 5 min </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <form
                        className="flex items-center mt-4 "
                        action="javascript:void(0);"
                      >
                        <input
                          type="text"
                          className="block w-full px-4 py-2  dark:bg-dark-card dark:border-secondary-800 border rounded outline-none focus:border-primary-500 dark:focus:border-primary-500 focus:shadow"
                          placeholder="Lovely!"
                        />
                        <div className="absolute flex pr-4 rtl:left-[1.25rem] ltr:right-[1.25rem]">
                          <a
                            href="javascript:void(0);"
                            className="mr-2 rtl:ml-2"
                          >
                            <svg
                              width="20"
                              height="20"
                              className="inline-block"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                              ></path>
                            </svg>
                          </a>
                          <a href="javascript:void(0);">
                            <svg
                              width="20"
                              height="20"
                              className="inline-block"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H8.05L9.88,4H14.12L15.95,6H20V18M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15Z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col mb-8 bg-white shadow rounded dark:bg-dark-card">
                  <div className="flex items-center justify-between flex-auto p-5 pb-4 border-b dark:border-secondary-800">
                    <div className="header-title">
                      <div className="flex flex-wrap">
                        <div className="mr-4">
                          <img
                            className="max-w-full  rounded-full bg-info-500/10 h-14 w-14 rtl:ml-4"
                            src="../../assets/images/avatars/05.html"
                          />
                        </div>
                        <div className="mt-2">
                          <h5 className="mb-0 text-xl font-medium  text-black dark:text-white">
                            Wade Warren
                          </h5>
                          <p className="mb-0 text-primary-500 dark:text-primary-500">
                            colleagues
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex items-center mr-4 cursor-pointer"
                      x-data="dropdown"
                    >
                      <div x-data="dropdown">
                        <span className="flex items-center justify-center">
                          {" "}
                          1 Hr
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            x-bind="checkArrow()"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                          >
                            <path d="M128 192l128 128 128-128z" />
                          </svg>
                        </span>
                        <div
                          className="absolute z-50 right-6 py-2 text-secondary-600 bg-white dark:bg-dark-bg rounded shadow-md"
                          x-bind="dropdownTransition"
                        >
                          <a
                            className="block  w-full px-4 py-1 whitespace-nowrap hover:text-primary-500 active:bg-primary-500 active:text-white"
                            href="javascript:void(0);"
                          >
                            Action
                          </a>
                          <a
                            className="block  w-full px-4 py-1 whitespace-nowrap hover:text-primary-500 active:bg-primary-500 active:text-white"
                            href="javascript:void(0);"
                          >
                            Another action
                          </a>
                          <a
                            className="block  w-full px-4 py-1 whitespace-nowrap hover:text-primary-500 active:bg-primary-500 active:text-white"
                            href="javascript:void(0);"
                          >
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-0">
                    <p className="p-4 mb-0 text-secondary-600 dark:text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi nulla dolor, ornare at commodo non, feugiat non
                      nisi. Phasellus faucibus mollis pharetra. Proin blandit ac
                      massa sed rhoncus
                    </p>
                    <div className="p-4">
                      <hr className="my-4 mt-0 text-secondary-500" />
                      <div className="flex flex-wrap items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex items-center mr-4">
                            <svg
                              width="20"
                              height="20"
                              className="inline-block rtl:ml-2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
                              ></path>
                            </svg>
                            <span className="ml-1 dark:text-white">140</span>
                          </div>
                          <div className="flex items-center">
                            <svg
                              width="20"
                              height="20"
                              className="inline-block rtl:ml-2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z"
                              ></path>
                            </svg>
                            <span className="ml-1 dark:text-white">140</span>
                          </div>
                        </div>

                        <div x-data="{ open: false }">
                          <div className="flex items-center mr-3 text-primary-500 hover:text-primary-600">
                            <a href="#" x-on:click="scrolldisable()">
                              <div
                                className="fixed w-full h-full botttom-0 z-50"
                                x-show="open"
                                style={{ display: "none" }}
                              >
                                <nav
                                  className="bottom-0 w-full fixed right-0 py-4 bg-white dark:bg-secondary-800 h-64 overflow-auto z-40"
                                  x-show="open"
                                  x-description="Mobile menu"
                                  role="menu"
                                  x-transition:enter="transform transition-transform duration-700"
                                  x-transition:enter-start="translate-y-full"
                                  x-transition:enter-end="translate-y-0"
                                  x-transition:leave="transform transition-transform duration-700"
                                  x-transition:leave-start="translate-y-0"
                                  x-transition:leave-end="translate-y-full"
                                >
                                  <div className="p-3">
                                    <h3 className="text-2xl font-semibold text-secondary-600">
                                      <div className="">
                                        <p className="text-lg mb-4 ml-3">
                                          Share
                                        </p>
                                        <ul className="flex">
                                          <li className="relative block px-2 py-2  dark:text-secondary-600 text-black  border-0 pb-0">
                                            <a href="#">
                                              <img
                                                src="../../assets/images/brands/08.html"
                                                alt="fb"
                                                className="ml-3 rounded-lg"
                                              />
                                            </a>
                                            <p className="text-sm dark:text-secondary-600 text-black ">
                                              Facebook
                                            </p>
                                          </li>
                                          <li className="relative block px-2 py-2  dark:text-secondary-600 text-black  border-0 pb-0">
                                            <a href="#">
                                              <img
                                                src="../../assets/images/brands/09.html"
                                                alt="fb"
                                                className="ml-1 rounded-lg"
                                              />
                                            </a>
                                            <p className="text-sm dark:text-secondary-600 text-black ">
                                              Twitter
                                            </p>
                                          </li>
                                          <li className="relative block px-2 py-2  dark:text-secondary-600 text-black  border-0 pb-0">
                                            <a href="#">
                                              <img
                                                src="../../assets/images/brands/10.html"
                                                alt="fb"
                                                className="ml-3 rounded-lg"
                                              />
                                            </a>
                                            <p className="text-sm dark:text-secondary-600 text-black ">
                                              Instagram
                                            </p>
                                          </li>
                                          <li className="relative block px-2 py-2  dark:text-secondary-600 text-black  border-0 pb-0">
                                            <a href="#">
                                              <img
                                                src="../../assets/images/brands/11.html"
                                                alt="fb"
                                                className="ml-4 rounded-lg"
                                              />
                                            </a>
                                            <p className="text-sm dark:text-secondary-600 text-black ">
                                              Google Plus
                                            </p>
                                          </li>
                                          <li className="relative block px-2 py-2  dark:text-secondary-600 text-black  border-0 pb-0">
                                            <a href="#">
                                              <img
                                                src="../../assets/images/brands/13.html"
                                                alt="fb"
                                                className=" rounded-lg"
                                              />
                                            </a>
                                            <p className="text-sm dark:text-secondary-600 text-black  ml-2">
                                              In
                                            </p>
                                          </li>
                                          <li className="relative block px-2 py-2  dark:text-secondary-600 text-black  border-0 pb-0">
                                            <a href="#">
                                              <img
                                                src="../../assets/images/brands/12.html"
                                                alt="fb"
                                                className="ml-3 rounded-lg"
                                              />
                                            </a>
                                            <p className="text-sm dark:text-secondary-600 text-black ">
                                              YouTube
                                            </p>
                                          </li>
                                        </ul>
                                      </div>
                                    </h3>
                                    <a
                                      x-on:click="scrollenable()"
                                      className="absolute mr-2 cursor-pointer top-1 right-5 text-4xl text-black dark:text-white"
                                    >
                                      &times;
                                    </a>
                                  </div>
                                </nav>
                              </div>

                              <svg
                                width="18"
                                className="me-1"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z"
                                ></path>
                              </svg>
                            </a>
                            <a href="#" x-on:click="scrolldisable()">
                              <span className="ml-1 rtl:mr-2">99 Share</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <form
                        className="flex items-center mt-4 "
                        action="javascript:void(0);"
                      >
                        <input
                          type="text"
                          className="block w-full px-4 py-2 dark:bg-dark-card dark:border-secondary-800 placeholder-secondary-600 border rounded outline-none block w-full px-4 py-2 dark:bg-dark-card dark:border-secondary-600 placeholder-secondary-600 border rounded outline-none focus:border-primary-500 dark:focus:border-primary-500  focus:shadow focus:shadow"
                          placeholder="Lovely!"
                        />
                        <div className="absolute flex pr-4 rtl:left-[1.25rem] ltr:right-[1.25rem]">
                          <a
                            href="javascript:void(0);"
                            className="mr-2 rtl:ml-2 text-secondary-500"
                          >
                            <svg
                              width="20"
                              height="20"
                              className="inline-block"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                              ></path>
                            </svg>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="text-secondary-500"
                          >
                            <svg
                              width="20"
                              height="20"
                              className="inline-block"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H8.05L9.88,4H14.12L15.95,6H20V18M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15Z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div x-show="openTab === 2">
                <div className="flex flex-col mb-8 overflow-hidden bg-white rounded shadow dark:bg-dark-card">
                  <div className="flex justify-between p-6 border-b dark:border-secondary-800">
                    <h4 className="text-2xl font-medium dark:text-white mb-0">
                      Activity
                    </h4>
                  </div>
                  <div className="flex-auto p-6">
                    <div className="relative flex items-center justify-between m-0">
                      <ul className="p-0 m-0 ">
                        <li className="relative float-left w-full mb-4 text-left pl-14">
                          <div className="absolute top-4 z-10 left-0 w-4 h-4 p-1 leading-6 text-center text-primary-500 bg-white dark:bg-dark-card border-2 border-primary-500 rounded-full"></div>
                          <div
                            className="border border-r bg-secondary-300 h-full w-0.5 absolute left-1.5 top-12 dark:border-secondary-800"
                            aria-hidden="true"
                          ></div>
                          <div
                            className="border border-r bg-secondary-300 dark:bg-secondary-800 h-full w-0.5 absolute left-1.5 -top-4 dark:border-secondary-800"
                            aria-hidden="true"
                          ></div>
                          <h6 className="block mb-2  font-medium dark:text-white">
                            Client Login
                          </h6>
                          <small className="block mb-1 dark:text-white">
                            24 November 2019
                          </small>
                          <div className="inline-block w-full">
                            <p className="mb-2 text-secondary-600 dark:text-white">
                              Bonbon macaroon jelly beans gummi bears jelly
                              lollipop apple
                            </p>
                          </div>
                        </li>
                        <li className="relative float-left w-full mb-4 text-left pl-14">
                          <div className="absolute z-10 top-4 left-0 w-4 h-4 p-1 leading-6 text-center text-success-500 bg-white dark:bg-dark-card border-2 border-success-500 rounded-full"></div>
                          <div
                            className="border border-r bg-secondary-300 h-full w-0.5 absolute left-1.5 top-5 dark:border-secondary-800"
                            aria-hidden="true"
                          ></div>
                          <h6 className="block mb-2  font-medium dark:text-white">
                            Scheduled Maintenance
                          </h6>
                          <small className="block mb-1 dark:text-white">
                            23 November 2019
                          </small>
                          <div className="inline-block w-full ">
                            <p className="mb-2 text-secondary-600 dark:text-white">
                              Bonbon macaroon jelly beans gummi bears jelly
                              lollipop apple
                            </p>
                          </div>
                        </li>
                        <li className="relative float-left w-full mb-4 text-left pl-14">
                          <div className="absolute z-10 top-4 left-0 w-4 h-4 p-1 leading-6 text-center text-danger-500 bg-white dark:bg-dark-card border-2 border-danger-500 rounded-full"></div>
                          <div
                            className="border border-r bg-secondary-300 h-full w-0.5 absolute left-1.5 top-20 z-10 dark:border-secondary-800"
                            aria-hidden="true"
                          ></div>
                          <div
                            className="border border-r bg-secondary-300 h-full w-0.5 absolute left-1.5 top-0 dark:border-secondary-800"
                            aria-hidden="true"
                          ></div>
                          <h6 className="block mb-2  font-medium dark:text-white">
                            Dev Meetup
                          </h6>
                          <small className="block mb-1 dark:text-white">
                            20 November 2019
                          </small>
                          <div className="inline-block w-full ">
                            <p className="mb-2 text-secondary-600 dark:text-white">
                              Bonbon macaroon jelly beans{" "}
                              <a
                                href="#"
                                className="text-primary-500 hover:text-primary-300 ease-in duration-300"
                              >
                                gummi bears
                              </a>
                              gummi bears jelly lollipop apple
                            </p>
                            <div className="iq-media-group iq-media-group-1">
                              <a
                                href="#"
                                className="relative inline-flex -ml-3 bg-no-repeat"
                              >
                                <div className="w-10 h-10 text-sm leading-10 text-center text-primary-500 bg-white dark:bg-dark-card border-2 border-primary-500 rounded-full hover:z-10">
                                  SP
                                </div>
                              </a>
                              <a
                                href="#"
                                className="relative inline-flex -ml-4 bg-no-repeat"
                              >
                                <div className="w-10 h-10 text-sm leading-10 text-center text-primary-500 bg-white dark:bg-dark-card border-2 border-primary-500 rounded-full hover:z-10">
                                  PP
                                </div>
                              </a>
                              <a
                                href="#"
                                className="relative inline-flex -ml-4 bg-no-repeat"
                              >
                                <div className="w-10 h-10 text-sm leading-10 text-center text-primary-500 bg-white dark:bg-dark-card border-2 border-primary-500 rounded-full hover:z-10">
                                  MM
                                </div>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="relative float-left w-full mb-4 text-left pl-14">
                          <div className="z-10 absolute top-6 left-0 w-4 h-4 p-1 leading-6 text-center text-primary-500 bg-white dark:bg-dark-card border-2 border-primary-500 rounded-full"></div>
                          <div
                            className="border border-r bg-secondary-300 h-full w-0.5 absolute left-1.5 top-12 z-10 dark:border-secondary-800"
                            aria-hidden="true"
                          ></div>
                          <h6 className="block mb-2  font-medium dark:text-white">
                            Client Call
                          </h6>
                          <small className="block mb-1 dark:text-white">
                            19 November 2019
                          </small>
                          <div className="inline-block w-full ">
                            <p className="mb-2 text-secondary-600 dark:text-white">
                              Bonbon macaroon jelly beans gummi bears jelly
                              lollipop apple
                            </p>
                          </div>
                        </li>
                        <li className="relative float-left w-full mb-4 text-left pl-14">
                          <div className="absolute z-50 top-6 left-0 w-4 h-4 p-1 leading-6 text-center text-warning-500 bg-white dark:bg-dark-card border-2 border-warning-500 rounded-full"></div>
                          <div
                            className="border border-r bg-secondary-300 h-full w-0.5 absolute left-1.5 top-4 z-10 dark:border-secondary-800"
                            aria-hidden="true"
                          ></div>
                          <h6 className="block mb-2  font-medium dark:text-white">
                            Mega event
                          </h6>
                          <small className="block mb-1 dark:text-white">
                            15 November 2019
                          </small>
                          <div className="inline-block w-full ">
                            <p className="mb-2 text-secondary-600 dark:text-white">
                              Bonbon macaroon jelly beans gummi bears jelly
                              lollipop apple
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div x-show="openTab === 3">
                <div className="relative flex flex-col mb-8  bg-white shadow rounded dark:bg-dark-card">
                  <div className="flex justify-between p-6 border-b dark:border-secondary-800">
                    <h4 className="mb-0 dark:text-white">Friends</h4>
                  </div>
                  <div className="p-6">
                    <ul className="p-0 m-0 list-inline">
                      <li className="flex items-center mb-6">
                        <img
                          src="../../assets/images/avatars/01.html"
                          alt="story-img"
                          className="w-10 h-10 rounded-full max-w-10 ml-4"
                        />
                        <div className="flex-grow ml-4">
                          <h6 className="mb-0 dark:text-white">Paul Molive</h6>
                          <p className="mb-0 dark:text-white">Web Designer</p>
                        </div>
                        <div
                          className="flex items-center"
                          x-data="{ open: false }"
                        >
                          <div className="" x-data="dropdown">
                            <span className="flex items-center text-base cursor-pointer text-secondary-600 dark:text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x-bind="checkArrow()"
                                className="w-5 h-7 duraion-500 transition-transform rotate-0"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                              >
                                <path d="M128 192l128 128 128-128z"></path>
                              </svg>
                            </span>
                            <div
                              className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 origin-top-right"
                              x-bind="dropdownTransition"
                              style={{ display: "none" }}
                            >
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                Unfollow
                              </a>
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                Unfriend
                              </a>
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                block
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-center mb-6">
                        <img
                          src="../../assets/images/avatars/05.html"
                          alt="story-img"
                          className="w-10 h-10 rounded-full max-w-10 ml-4"
                        />
                        <div className="flex-grow ml-4">
                          <h6 className="mb-0 dark:text-white">Paul Molive</h6>
                          <p className="mb-0 dark:text-white">trainee</p>
                        </div>
                        <div
                          className="flex items-center"
                          x-data="{ open: false }"
                        >
                          <div className="" x-data="dropdown">
                            <span className="flex items-center text-base cursor-pointer text-secondary-600 dark:text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x-bind="checkArrow()"
                                className="w-5 h-7 duraion-500 transition-transform rotate-0"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                              >
                                <path d="M128 192l128 128 128-128z"></path>
                              </svg>
                            </span>
                            <div
                              className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 origin-top-right"
                              x-bind="dropdownTransition"
                              style={{ display: "none" }}
                            >
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                Unfollow
                              </a>
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                Unfriend
                              </a>
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                block
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-center mb-6">
                        <img
                          src="../../assets/images/avatars/02.html"
                          alt="story-img"
                          className="w-10 h-10 rounded-full max-w-10 ml-4"
                        />
                        <div className="flex-grow ml-4">
                          <h6 className="mb-0 dark:text-white">Anna Mull</h6>
                          <p className="mb-0 dark:text-white">Web Developer</p>
                        </div>
                        <div
                          className="flex items-center"
                          x-data="{ open: false }"
                        >
                          <div className="" x-data="dropdown">
                            <span className="flex items-center text-base cursor-pointer text-secondary-600 dark:text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x-bind="checkArrow()"
                                className="w-5 h-7 duraion-500 transition-transform rotate-0"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                              >
                                <path d="M128 192l128 128 128-128z"></path>
                              </svg>
                            </span>
                            <div
                              className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 origin-top-right"
                              x-bind="dropdownTransition"
                              style={{ display: "none" }}
                            >
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                Unfollow
                              </a>
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                Unfriend
                              </a>
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                block
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-center mb-6">
                        <img
                          src="../../assets/images/avatars/03.html"
                          alt="story-img"
                          className="w-10 h-10 rounded-full max-w-10 ml-4"
                        />
                        <div className="flex-grow ml-4">
                          <h6 className="mb-0 dark:text-white">Paige Turner</h6>
                          <p className="mb-0 dark:text-white">trainee</p>
                        </div>
                        <div
                          className="flex items-center"
                          x-data="{ open: false }"
                        >
                          <div className="" x-data="dropdown">
                            <span className="flex items-center text-base cursor-pointer text-secondary-600 dark:text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x-bind="checkArrow()"
                                className="w-5 h-7 duraion-500 transition-transform rotate-0"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                              >
                                <path d="M128 192l128 128 128-128z"></path>
                              </svg>
                            </span>
                            <div
                              className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 origin-top-right"
                              x-bind="dropdownTransition"
                              style={{ display: "none" }}
                            >
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                Unfollow
                              </a>
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                Unfriend
                              </a>
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                block
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-center mb-6">
                        <img
                          src="../../assets/images/avatars/04.html"
                          alt="story-img"
                          className="w-10 h-10 rounded-full max-w-10 ml-4"
                        />
                        <div className="flex-grow ml-4">
                          <h6 className="mb-0 dark:text-white">Barb Ackue</h6>
                          <p className="mb-0 dark:text-white">Web Designer</p>
                        </div>
                        <div
                          className="flex items-center"
                          x-data="{ open: false }"
                        >
                          <div className="" x-data="dropdown">
                            <span className="flex items-center text-base cursor-pointer text-secondary-600 dark:text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x-bind="checkArrow()"
                                className="w-5 h-7 duraion-500 transition-transform rotate-0"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                              >
                                <path d="M128 192l128 128 128-128z"></path>
                              </svg>
                            </span>
                            <div
                              className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 origin-top-right"
                              x-bind="dropdownTransition"
                              style={{ display: "none" }}
                            >
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                Unfollow
                              </a>
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                Unfriend
                              </a>
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                block
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-center mb-6">
                        <img
                          src="../../assets/images/avatars/05.html"
                          alt="story-img"
                          className="w-10 h-10 rounded-full max-w-10 ml-4"
                        />
                        <div className="flex-grow ml-4">
                          <h6 className="mb-0 dark:text-white">Greta Life</h6>
                          <p className="mb-0 dark:text-white">Tester</p>
                        </div>
                        <div
                          className="flex items-center"
                          x-data="{ open: false }"
                        >
                          <div className="" x-data="dropdown">
                            <span className="flex items-center text-base cursor-pointer text-secondary-600 dark:text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x-bind="checkArrow()"
                                className="w-5 h-7 duraion-500 transition-transform rotate-0"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                              >
                                <path d="M128 192l128 128 128-128z"></path>
                              </svg>
                            </span>
                            <div
                              className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 origin-top-right"
                              x-bind="dropdownTransition"
                              style={{ display: "none" }}
                            >
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                Unfollow
                              </a>
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                Unfriend
                              </a>
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                block
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-center mb-6">
                        <img
                          src="../../assets/images/avatars/03.html"
                          alt="story-img"
                          className="w-10 h-10 rounded-full max-w-10 ml-4"
                        />
                        <div className="flex-grow ml-4">
                          <h6 className="mb-0 dark:text-white">Ira Membrit</h6>
                          <p className="mb-0 dark:text-white">
                            Android Developer
                          </p>
                        </div>
                        <div
                          className="flex items-center"
                          x-data="{ open: false }"
                        >
                          <div className="" x-data="dropdown">
                            <span className="flex items-center text-base cursor-pointer text-secondary-600 dark:text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x-bind="checkArrow()"
                                className="w-5 h-7 duraion-500 transition-transform rotate-0"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                              >
                                <path d="M128 192l128 128 128-128z"></path>
                              </svg>
                            </span>
                            <div
                              className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 origin-top-right"
                              x-bind="dropdownTransition"
                              style={{ display: "none" }}
                            >
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                Unfollow
                              </a>
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                Unfriend
                              </a>
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                block
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-center mb-6">
                        <img
                          src="../../assets/images/avatars/02.html"
                          alt="story-img"
                          className="w-10 h-10 rounded-full max-w-10 ml-4"
                        />
                        <div className="flex-grow ml-4">
                          <h6 className="mb-0 dark:text-white">Pete Sariya</h6>
                          <p className="mb-0 dark:text-white">Web Designer</p>
                        </div>
                        <div
                          className="flex items-center"
                          x-data="{ open: false }"
                        >
                          <div className="" x-data="dropdown">
                            <span className="flex items-center text-base cursor-pointer text-secondary-600 dark:text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x-bind="checkArrow()"
                                className="w-5 h-7 duraion-500 transition-transform rotate-0"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                              >
                                <path d="M128 192l128 128 128-128z"></path>
                              </svg>
                            </span>
                            <div
                              className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 origin-top-right"
                              x-bind="dropdownTransition"
                              style={{ display: "none" }}
                            >
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                Unfollow
                              </a>
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                Unfriend
                              </a>
                              <a
                                className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                href="javascript:void(0);"
                              >
                                block
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div x-show="openTab === 4">
                <div className="relative flex flex-col mb-8  bg-white shadow rounded dark:bg-dark-card">
                  <div className="p-6 border-b dark:border-secondary-800">
                    <h4 className="text-2xl font-medium  card-title mb-0 dark:text-white">
                      Profile
                    </h4>
                  </div>
                  <div className="p-6 ">
                    <div className="text-center">
                      <div className="user-profile">
                        <img
                          src="../../assets/images/avatars/01.html"
                          alt="profile-img"
                          className="inline-block w-32 h-32 max-w-full rounded-full img-fluid"
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="inline-block dark:text-white">
                          Austin Robertson
                        </h3>
                        <p className="inline-block dark:text-white">
                          -Web developer
                        </p>
                        <p className="mb-0 text-secondary-600 dark:text-white">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col mb-8  bg-white shadow rounded-xl dark:bg-dark-card">
                  <div className="p-5 border-b dark:border-secondary-800 dark:border-secondary-800">
                    <h4 className="card-title mb-0 dark:text-white">
                      About User
                    </h4>
                  </div>
                  <div className="p-6">
                    <div className="user-bio">
                      <p className="mb-3 text-secondary-600 dark:text-white">
                        Tart I love sugar plum I love oat cake. Sweet roll
                        caramels I love jujubes. Topping cake wafer.
                      </p>
                    </div>
                    <div className="mt-2">
                      <h6 className="mb-1 dark:text-white">Joined:</h6>
                      <p className="mb-3 dark:text-white">Feb 15, 2021</p>
                    </div>
                    <div className="mt-2">
                      <h6 className="mb-1 dark:text-white">Lives:</h6>
                      <p className="mb-3 dark:text-white">
                        United States of America
                      </p>
                    </div>
                    <div className="mt-2">
                      <h6 className="mb-1 dark:text-white">Email:</h6>
                      <p className="mb-3 dark:text-secondary-600">
                        <a href="#"> austin@gmail.com</a>
                      </p>
                    </div>
                    <div className="mt-2">
                      <h6 className="mb-1 dark:text-white">Url:</h6>
                      <p className="mb-3 dark:textsecondary-600">
                        <a href="#" target="_blank">
                          {" "}
                          www.tailwindui.com{" "}
                        </a>
                      </p>
                    </div>
                    <div className="mt-2">
                      <h6 className="mb-1 dark:text-white">Contact:</h6>
                      <p className="mb-3 dark:text-secondary-600">
                        <a href="#">(001) 4544 565 456</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-auto w-full lg:w-1/4">
              <div className="relative flex flex-col mb-8  bg-white shadow rounded dark:bg-dark-card">
                <div className="flex-auto p-5 border-b dark:border-secondary-800">
                  <h4 className="font-medium mb-0 dark:text-white">About</h4>
                </div>
                <div className="flex-auto p-5">
                  <p className="mb-4 text-secondary-600 dark:text-white">
                    Lorem ipsum dolor sit amet, contur adipiscing elit.
                  </p>
                  <div className="mb-1 text-secondary-600 dark:text-white">
                    Email:{" "}
                    <a
                      href="#"
                      className="ml-4 text-primary-500 hover:text-primary-600 rtl:ml-0"
                    >
                      nikjone@demoo.com
                    </a>
                  </div>
                  <div className="mb-1 text-secondary-600 dark:text-white   ">
                    Phone:{" "}
                    <a
                      href="#"
                      className="ml-4 text-primary-500 hover:text-primary-600 rtl:ml-0"
                    >
                      001 2351 256 12
                    </a>
                  </div>
                  <div className="text-secondary-600 dark:text-white">
                    Location: <span className="ml-4 rtl:ml-0">USA</span>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col mb-8  bg-white shadow rounded dark:bg-dark-card">
                <div className="flex-auto p-5 border-b dark:border-secondary-800 dark:border-secondary-800">
                  <h4 className="font-medium mb-0 dark:text-white">Stories</h4>
                </div>
                <div className="flex-auto p-6">
                  <ul className="p-0 m-0 list-inline">
                    <li className="flex items-center mb-6">
                      <img
                        src="../../assets/images/shapes/02.html"
                        alt="story-img"
                        className="w-16 h-16 max-w-full p-1 bg-secondary-500/10  rounded-full rtl:ml-4"
                      />
                      <div className="ml-4">
                        <h5 className=" font-medium mb-0 dark:text-white">
                          Web Design
                        </h5>
                        <p className="mb-0 dark:text-white">1 hour ago</p>
                      </div>
                    </li>
                    <li className="flex items-center mb-4">
                      <img
                        src="../../assets/images/shapes/04.html"
                        alt="story-img"
                        className="w-16 h-16 max-w-full p-1 bg-danger-500/10  rounded-full rtl:ml-4"
                      />
                      <div className="ml-4">
                        <h5 className="font-medium mb-0 dark:text-white">
                          App Design
                        </h5>
                        <p className="mb-0 dark:text-white">4 hour ago</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <img
                        src="../../assets/images/shapes/06.html"
                        alt="story-img"
                        className="w-16 h-16 max-w-full p-1 bg-primary-500/10  rounded-full rtl:ml-4"
                      />
                      <div className="ml-4">
                        <h5 className="font-medium mb-0 dark:text-white">
                          Abstract Design
                        </h5>
                        <p className="mb-0 dark:text-white">9 hour ago</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative flex flex-col mb-8  bg-white shadow rounded dark:bg-dark-card">
                <div className="flex-auto p-5 border-b dark:border-secondary-800">
                  <h4 className="text-2xl font-medium dark:text-white mb-0">
                    Suggestions
                  </h4>
                </div>
                <div className="p-5">
                  <ul className="p-0 m-0 list-inline">
                    <li className="flex items-center mb-6">
                      <div className="max-w-full bg-warning-500/10 rounded-full rtl:ml-4">
                        <img
                          src="../../assets/images/avatars/02.html"
                          alt="story-img"
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div className="flex-grow ml-4">
                        <h6 className="mb-0 dark:text-white">Paul Molive</h6>
                        <p className="mb-0 dark:text-white">4 mutual friends</p>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outlined btn-primary hover:bg-primary-500 hover:text-white inline-flex rounded-full btn-sm btn-icon"
                      >
                        <span>
                          <svg
                            width="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M19.2036 8.66919V12.6792"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M21.2497 10.6741H17.1597"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="flex items-center mb-6">
                      <div className="max-w-full bg-danger-500/10 rounded-full rtl:ml-4">
                        <img
                          src="../../assets/images/avatars/03.html"
                          alt="story-img"
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div className="flex-grow ml-4">
                        <h6 className="mb-0 dark:text-white">Robert Fox</h6>
                        <p className="mb-0 dark:text-white">4 mutual friends</p>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outlined btn-primary hover:bg-primary-500 hover:text-white inline-flex rounded-full btn-sm btn-icon"
                      >
                        <span>
                          <svg
                            width="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M19.2036 8.66919V12.6792"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M21.2497 10.6741H17.1597"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="flex items-center mb-6">
                      <div className="max-w-full bg-secondary-500/10 rounded-full rtl:ml-4">
                        <img
                          src="../../assets/images/avatars/04.html"
                          alt="story-img"
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div className="flex-grow ml-4">
                        <h6 className="mb-0 dark:text-white">Jenny Wilson</h6>
                        <p className="mb-0 dark:text-white">6 mutual friends</p>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outlined btn-primary hover:bg-primary-500 hover:text-white inline-flex rounded-full btn-sm btn-icon"
                      >
                        <span>
                          <svg
                            width="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M19.2036 8.66919V12.6792"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M21.2497 10.6741H17.1597"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="flex items-center mb-6">
                      <div className="max-w-full bg-primary-500/10 rounded-full rtl:ml-4">
                        <img
                          src="../../assets/images/avatars/05.html"
                          alt="story-img"
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div className="flex-grow ml-4">
                        <h6 className="mb-0 dark:text-white">Cody Fisher</h6>
                        <p className="mb-0 dark:text-white">8 mutual friends</p>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outlined btn-primary hover:bg-primary-500 hover:text-white inline-flex rounded-full btn-sm btn-icon"
                      >
                        <span>
                          <svg
                            width="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M19.2036 8.66919V12.6792"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M21.2497 10.6741H17.1597"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="flex items-center mb-6">
                      <div className="max-w-full rounded-full rtl:ml-4 bg-info-500/10">
                        <img
                          src="../../assets/images/avatars/06.html"
                          alt="story-img"
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div className="flex-grow ml-4">
                        <h6 className="mb-0 dark:text-white">Bessie Cooper</h6>
                        <p className="mb-0 dark:text-white">1 mutual friends</p>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outlined btn-primary hover:bg-primary-500 hover:text-white inline-flex rounded-full btn-sm btn-icon"
                      >
                        <span>
                          <svg
                            width="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M19.2036 8.66919V12.6792"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M21.2497 10.6741H17.1597"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="flex items-center mb-6">
                      <div className="max-w-full bg-warning-500/10 rounded-full rtl:ml-4">
                        <img
                          src="../../assets/images/avatars/07.html"
                          alt="story-img"
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div className="flex-grow ml-4">
                        <h6 className="mb-0 dark:text-white">Wade Warren</h6>
                        <p className="mb-0 dark:text-white">3 mutual friends</p>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outlined btn-primary hover:bg-primary-500 hover:text-white inline-flex rounded-full btn-sm btn-icon"
                      >
                        <span>
                          <svg
                            width="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M19.2036 8.66919V12.6792"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M21.2497 10.6741H17.1597"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="flex items-center mb-6">
                      <div className="max-w-full bg-success-500/10 rounded-full rtl:ml-4">
                        <img
                          src="../../assets/images/avatars/08.html"
                          alt="story-img"
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div className="flex-grow ml-4">
                        <h6 className="block  font-medium mb-0 dark:text-white">
                          Guy Hawkins
                        </h6>
                        <p className="mb-0 dark:text-white">
                          12 mutual friends
                        </p>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outlined btn-primary hover:bg-primary-500 hover:text-white inline-flex rounded-full btn-sm btn-icon"
                      >
                        <span>
                          <svg
                            width="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M19.2036 8.66919V12.6792"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M21.2497 10.6741H17.1597"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </li>
                    <li className="flex items-center">
                      <div className="max-w-full rounded-full rtl:ml-4 bg-info-500/10">
                        <img
                          src="../../assets/images/avatars/09.html"
                          alt="story-img"
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div className="flex-grow ml-4">
                        <h6 className="block  font-medium text-black mb-0 dark:text-white">
                          Floyd Miles
                        </h6>
                        <p className="mb-0 dark:text-white">2 mutual friends</p>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-outlined btn-primary hover:bg-primary-500 hover:text-white inline-flex rounded-full btn-sm btn-icon"
                      >
                        <span>
                          <svg
                            width="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M19.2036 8.66919V12.6792"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M21.2497 10.6741H17.1597"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminApplicantsNew;
