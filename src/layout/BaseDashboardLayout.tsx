// src/layouts/BaseDashboardLayout.tsx
import { Outlet, NavLink } from "react-router-dom";
import { useState, useRef, useEffect, type JSX } from "react";
import DashboardHead from "../components/DashboardHead";
import { Bell, Search } from 'lucide-react';
import tcrn_image from "../assets2/img/TRCN.jpg"

interface NavItem {
  path: string;
  icon?: JSX.Element;
  label: string;
}

interface BaseDashboardLayoutProps {
  navItems: NavItem[];
}


function BaseDashboardLayout({ navItems }: BaseDashboardLayoutProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // Initialize Alpine.js if it's loaded
    if (window.Alpine) {
      window.Alpine.start();
    }
  }, []);

  return (
    <>
      <DashboardHead />

      <div
        className="scroll-smooth selection:text-white selection:bg-primary-500"
        style={{ overflowX: "hidden" }}
        x-data="settingInit"
      >
        {/* Sidebar */}
        <aside
          x-data="sidebar"
          className="z-50 sidebar shadow-lg sidebar-base sidebar-default w-60 bg-gray-800 text-white min-h-screen"
          data-toggle="main-sidebar"
        >
          <div className="sidebar-header relative flex items-center justify-start mb-3 border-b dark:border-gray-700 z-0">
            <a
              href="/admin/dashboard"
              className="flex px-5 py-4 mr-4 rtl:ml-4 rtl:mr-0 text-xl whitespace-nowrap"
            >
              <span className="sidebar-logo ml-2" style={{ width: "170px"}}>
                <img src="/clear-logo.png" alt="logo" />
              </span>
            </a>
          </div>

          <div className="sidebar-body data-scrollbar">
            <div className="nav-item static-item">
              <p className="nav-link static-item disabled">
                <span className="default-icon">Admin</span>
                <span className="mini-icon">-</span>
              </p>
            </div>
            <ul className="sidebar-main-menu">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""} text-black`
                    }
                  >
                    {item.icon}
                    <span className="item-name">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content" x-data="{ data: true }">
          <div className="relative">
            <nav
              className="z-40 bg-white dark:bg-dark-card nav shadow-lg navbar navbar-expand-xl navbar-light iq-navbar py-0"
              x-data="{ selected: null }"
              x-bind:className="setting.header_navbar"
            >
              <div className="w-full px-7 py-2">
                <div className="relative">
                  {/* Mobile menu button */}
                  <div
                    className="absolute flex items-center px-2 py-1 text-xl border border-secondary-500 rounded lg:hidden right-0"
                    x-bind:className="setting.theme_scheme_direction == 'ltr' ? 'right-0' : 'left-0'"
                  >
                    <button
                      type="button"
                      className="inline-flex items-center justify-center text-xl text-secondary-500 rounded"
                    >
                      <span className="sr-only">Open main menu</span>
                      <svg
                        className="block w-8 h-8"
                        id="mobileicon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                      <svg
                        className="hidden w-6 h-6"
                        id="cancel"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="gray"
                      >
                        <path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"></path>
                      </svg>
                    </button>
                  </div>

                  <div className="flex h-16">
                    <div className="breadcrumb-title xl:flex sm:hidden justify-center items-center lg:flex ml-2 mt-3">
                      <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        ADMIN PORTAL
                      </h1>
                    </div>
                    <div className="flex mx-2 items-center">
                      
                    </div>

                    <div className="hidden lg:flex lg:flex-grow transition-all duration-700 ease-in-out">
                      
                      <ul className="flex items-center mb-2 ml-auto rtl:ml-0 rtl:mr-auto lg:mb-0">
                        <li
                          className="flex justify-end items-center pl-2"
                          x-data="{ open: false }"
                        >
                          <input className="h-9 hidden lg:flex rounded-l-2xl w-110 p-4 border-2 rounded-r-none border-black " style={{ borderRight: '0px'}} />
                          <a
                            href="#"
                            className="block group hover:text-primary-500 border-2 border-black border-l-0 focusa text-secondary-600 py-1 pr-1 rounded-r-2xl"
                            style={{ borderLeft: '0px'}}
                          >
                            <Search className="text-black" size={22} />
                          </a>
                        </li>
                        <li
                          className="flex items-center pl-2 border-r"
                          x-data="{ open: false }"
                        >
                          <a
                            href="#"
                            className="block p-2 group hover:text-primary-500 focusa text-secondary-600"
                          >
                            <Bell className="text-black" size={22} />
                          </a>
                          <div
                            x-show="open"
                            className="absolute z-40 rtl:right-2/3 rounded top-14 shadow w-80"
                            x-transition:enter="transition ease-in duration-500"
                            x-transition:enter-start="opacity-0 transform translate-y-16"
                            x-transition:enter-end="opacity-100 transform translate-y-0"
                            x-transition:leave="transition ease-out duration-500"
                            x-transition:leave-start="opacity-100 transform translate-y-0"
                            x-transition:leave-end="opacity-0 transform translate-y-0"
                            style={{ display: "none" }}
                          >
                            <div className="bg-white dark:bg-dark-card shadow-lg rounded-t-lg rounded-b-lg dark:text-secondary-600 ">
                              <div className="flex px-5 py-3 bg-primary-500 rounded-t">
                                <h5 className="text-xl font-medium text-white">
                                  All Notifications
                                </h5>
                              </div>
                              <div>
                                <a
                                  href="#"
                                  className="flex justify-between w-full px-5 py-3 border-b dark:border-secondary-700 hover:bg-primary-500/[0.1] group"
                                >
                                  <div className="flex items-center">
                                    <div>
                                      <img
                                        className="w-10 h-10 p-1 text-primary-400 bg-primary-500/10 rounded-full dark:bg-primary-500/10"
                                        src="../assets/images/shapes/01.png"
                                      />
                                    </div>
                                    <div className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                      <h6 className="mb-0 text-black font-medium">
                                        Emma Watson Bni
                                      </h6>
                                      <small className="LR text-sm text-secondary-600 dark:text-secondary-600">
                                        95 MB
                                      </small>
                                    </div>
                                  </div>
                                  <div className="flex items-end">
                                    <small className="RL text-sm text-secondary-600 dark:text-secondary-600 ">
                                      Just Now
                                    </small>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="flex justify-between w-full px-5 py-3 border-b dark:border-secondary-700 hover:bg-primary-500/[0.1] group"
                                >
                                  <div className="flex items-center">
                                    <div>
                                      <img
                                        className="w-10 h-10 p-1 text-primary-400 bg-primary-500/10 rounded-full dark:bg-primary-500/10"
                                        src="../assets/images/shapes/02.png"
                                      />
                                    </div>
                                    <div className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                      <h6 className="mb-0 text-black font-medium">
                                        New customer is join
                                      </h6>
                                      <small className="text-sm text-secondary-600 dark:text-secondary-600">
                                        Cyst Bni
                                      </small>
                                    </div>
                                  </div>
                                  <div className="flex items-end">
                                    <small className="RL text-sm text-secondary-600 dark:text-secondary-600 ">
                                      5 days ago
                                    </small>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="flex justify-between w-full px-5 py-3 border-b dark:border-secondary-700 hover:bg-primary-500/[0.1] group"
                                >
                                  <div className="flex items-center">
                                    <div>
                                      <img
                                        className="w-10 h-10 p-1 text-primary-400 bg-primary-500/10 rounded-full dark:bg-primary-500/10"
                                        src="../assets/images/shapes/03.png"
                                      />
                                    </div>
                                    <div className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                      <h6 className="mb-0 text-black font-medium">
                                        Two customer is left
                                      </h6>
                                      <small className="text-sm text-secondary-600 dark:text-secondary-600">
                                        Cyst Bni
                                      </small>
                                    </div>
                                  </div>
                                  <div className="flex items-end">
                                    <small className="RL text-sm text-secondary-600 dark:text-secondary-600 ">
                                      2 days ago
                                    </small>
                                  </div>
                                </a>
                                <a
                                  href="#"
                                  className="flex justify-between w-full px-5 py-3 border-b dark:border-secondary-700 hover:bg-primary-500/[0.1] group"
                                >
                                  <div className="flex items-center">
                                    <div>
                                      <img
                                        className="w-10 h-10 p-1 text-primary-400 bg-primary-500/10 rounded-full dark:bg-primary-500/10"
                                        src="../assets/images/shapes/04.png"
                                      />
                                    </div>
                                    <div className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                      <h6 className="mb-0 text-black font-medium">
                                        New Mail from Fenny
                                      </h6>
                                      <small className="text-sm text-secondary-600 dark:text-secondary-600">
                                        Cyst Bni
                                      </small>
                                    </div>
                                  </div>
                                  <div className="flex items-end">
                                    <small className="RL text-sm text-secondary-600 dark:text-secondary-600 ">
                                      3 days ago
                                    </small>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          className="nav-item iq-full-screen sm:hidden xl:block border-r"
                          id="fullscreen-item"
                          style={{ display: "none" }}
                        >
                          <a
                            className="flex items-center p-2 hover:text-primary-500 focusa text-secondary-600"
                            x-data="fullscreen"
                            href="#"
                          >
                            <div className="w-8 rounded-full">
                              <span className="btn-inner">
                                <Search className="text-black" size={22} />
                              </span>
                            </div>
                          </a>
                        </li>
                        
                        <li x-data="{ open: false }" id="itemdropdown1">
                          <div className="relative inline-block text-left" ref={dropdownRef}>
                            <a
                              className="py-0 flex items-center p-2 ml-2 hover:text-primary-500 active:text-primary-500 focus:text-primary-500 focus"
                              href="#"
                             onClick={() => setOpen(!open)}
                            >
                              <img
                                src={tcrn_image}
                                alt="User-Profile"
                                className="h-12 w-12 rounded-full truncate"
                                style={{ objectFit: "cover" }}
                                loading="lazy"
                              />
                              <div className="caption ml-3 d-none d-md-block ">
                                <h6
                                  className="mb-0 caption-title mr-4"
                                  style={{}}
                                >
                                  Austin Robertson
                                </h6>
                                <p className="mb-0 caption-sub-title focusa active:text-primary-500  focus:text-primary-500 hover:text-primary-500 text-black mr-4">
                                  DBS Admin
                                </p>
                              </div>
                            </a>
                            {open && (
                              <div className="absolute right-0 z-10 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-lg shadow-lg">
                                <div className="py-1 px-2">
                                  <p className="w-full px-4 py-2 text-left text-md font-bold text-gray-700 hover:bg-gray-100">
                                    Teachers Registration Council of Nigeria
                                  </p>
                                  <hr />
                                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                                    Profile
                                  </button>
                                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                                    Settings
                                  </button>
                                  <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100">
                                    Logout
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* Page Content */}
          <div className="">
            <Outlet />
          </div>

          {/* Footer */}
          <footer className="footer w-full text-sm bg-white dark:bg-dark-card ">
            <ul className="p-0 mb-0 left-panel list-inline">
              <li className="inline-block mr-2 text-primary-500 dark:text-primary-500">
                <a href="../dashboard/extra/privacy-policy.html">
                  Privacy Policy
                </a>
              </li>
              <li className="inline-block mr-2 text-primary-500 dark:text-primary-500">
                <a href="../dashboard/extra/terms-of-use.html">Terms of Use</a>
              </li>
            </ul>
            <div className="footer-second text-secondary-700 flex flex-wrap dark:text-white text-sm">
              ©<script>document.write(new Date().getFullYear())</script>
              <a
                className="text-primary-500 dark:text-primary-500"
                href="https://iqonic.design/"
              >
                {" "}
                SophiaERP
              </a>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

export default BaseDashboardLayout;
