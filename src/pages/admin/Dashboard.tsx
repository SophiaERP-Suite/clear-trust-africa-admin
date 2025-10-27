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

function AdminDashboard() {
  return (
    <>
      <aside
        style={{ display: "none" }}
        x-data="sidebar"
        x-bind:className="[setting.sidebar_menu_style, setting.sidebar_color, setting.sidebar_type.join(' ')]"
        className="z-50 sidebar shadow-lg sidebar-base sidebar-default shepherd-enabled shepherd-target"
        data-toggle="main-sidebar"
        id="first-tour"
      >
        <div className="sidebar-header relative flex items-center justify-start mb-3 border-b dark:border-gray-700 z-0">
          <a
            href="../dashboard/index.html"
            className="flex px-5 py-4 mr-4 rtl:ml-4 rtl:mr-0 text-xl whitespace-nowrap"
          >
            <svg
              width="30"
              className="text-primary-500 dark:text-primary-500 brand-logo"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.25333 2H22.0444L29.7244 15.2103L22.0444 28.1333H7.25333L0 15.2103L7.25333 2ZM11.2356 9.32316H18.0622L21.3334 15.2103L18.0622 20.9539H11.2356L8.10669 15.2103L11.2356 9.32316Z"
                fill="currentColor"
              ></path>
              <path
                d="M23.751 30L13.2266 15.2103H21.4755L31.9999 30H23.751Z"
                fill="#3FF0B9"
              ></path>
            </svg>
            <h4
              className="sidebar-logo"
              data-setting="app_name"
              x-text="setting.app_name"
            >
              Qompac UI
            </h4>
          </a>
          <div
            className="sidebar-toggle p-2"
            x-on:click="sidebarMini"
            data-toggle="sidebar"
            data-active="true"
          >
            <i className="icon">
              <svg
                className="icon-10"
                width="10"
                height="10"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.29853 8C7.11974 8 6.94002 7.93083 6.80335 7.79248L3.53927 4.50446C3.40728 4.37085 3.33333 4.18987 3.33333 4.00036C3.33333 3.81179 3.40728 3.63081 3.53927 3.4972L6.80335 0.207279C7.07762 -0.069408 7.52132 -0.069408 7.79558 0.209174C8.06892 0.487756 8.06798 0.937847 7.79371 1.21453L5.02949 4.00036L7.79371 6.78618C8.06798 7.06286 8.06892 7.51201 7.79558 7.79059C7.65892 7.93083 7.47826 8 7.29853 8Z"
                  fill="white"
                ></path>
                <path
                  d="M3.96552 8C3.78673 8 3.60701 7.93083 3.47034 7.79248L0.206261 4.50446C0.0742745 4.37085 0.000325203 4.18987 0.000325203 4.00036C0.000325203 3.81179 0.0742745 3.63081 0.206261 3.4972L3.47034 0.207279C3.74461 -0.069408 4.18831 -0.069408 4.46258 0.209174C4.73591 0.487756 4.73497 0.937847 4.4607 1.21453L1.69649 4.00036L4.4607 6.78618C4.73497 7.06286 4.73591 7.51201 4.46258 7.79059C4.32591 7.93083 4.14525 8 3.96552 8Z"
                  fill="white"
                ></path>
              </svg>
            </i>
          </div>
        </div>
        <div className="sidebar-body data-scrollbar">
          <ul className="sidebar-main-menu">
            <li className="nav-item static-item">
              <a className="nav-link static-item disabled" tabIndex={-1}>
                <span className="default-icon">Home</span>
                <span className="mini-icon">-</span>
              </a>
            </li>
            <li className="nav-item active">
              <a
                className="nav-link active"
                aria-current="page"
                href="../dashboard/index.html"
              >
                <i
                  className="icon"
                  data-tp-toggle="tooltip"
                  data-tp-placement="left"
                  data-tp-title="Dashboard"
                >
                  <svg
                    width="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </i>
                <span className="item-name">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="../dashboard/analytics.html"
              >
                <i
                  className="icon"
                  data-tp-toggle="tooltip"
                  data-tp-placement="left"
                  data-tp-title="analytics"
                >
                  <svg
                    width="20"
                    height="20"
                    className="icon-20"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.1615 3.15833C10.1615 4.639 11.3636 5.83931 12.8464 5.83931C13.0097 5.83851 13.1726 5.82283 13.333 5.79248V11.1076C13.333 13.3437 12.014 14.6666 9.77463 14.6666H4.89725C2.65201 14.6666 1.33301 13.3437 1.33301 11.1076V6.23736C1.33301 4.00126 2.65201 2.66663 4.89725 2.66663H10.2084C10.1769 2.82863 10.1612 2.9933 10.1615 3.15833ZM8.76632 9.93102L10.6716 7.47248V7.46077C10.8347 7.2416 10.793 6.93255 10.5778 6.76419C10.4736 6.68375 10.3411 6.64893 10.2108 6.66768C10.0804 6.68644 9.96324 6.75716 9.88601 6.8637L8.27976 8.93004L6.45074 7.49004C6.34632 7.40869 6.21348 7.37277 6.08221 7.39039C5.95095 7.40802 5.83233 7.47769 5.75313 7.5837L3.78342 10.1242C3.71419 10.2105 3.67691 10.318 3.6779 10.4286C3.66647 10.6521 3.80759 10.855 4.02126 10.9225C4.23493 10.9899 4.46726 10.9048 4.58655 10.7154L6.23384 8.58467L8.06286 10.0188C8.16689 10.1027 8.3006 10.1407 8.43327 10.1242C8.56594 10.1076 8.68617 10.0379 8.76632 9.93102Z"
                      fill="currentColor"
                    ></path>
                    <ellipse
                      opacity="0.4"
                      cx="12.9997"
                      cy="2.99998"
                      rx="1.66667"
                      ry="1.66667"
                      fill="currentColor"
                    ></ellipse>
                  </svg>
                </i>
                <span className="item-name">Analytics</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="../dashboard/crypto.html"
              >
                <i
                  className="icon"
                  data-tp-toggle="tooltip"
                  data-tp-placement="left"
                  data-tp-title="Crypto"
                >
                  <svg
                    className="icon-20"
                    width="20"
                    height="20"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M10.1167 0.333496H3.88856C1.61893 0.333496 0.333008 1.61942 0.333008 3.88905V10.1113C0.333008 12.3809 1.61893 13.6668 3.88856 13.6668H10.1167C12.3863 13.6668 13.6663 12.3809 13.6663 10.1113V3.88905C13.6663 1.61942 12.3863 0.333496 10.1167 0.333496Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M3.91244 5.24609C3.61022 5.24609 3.36133 5.49498 3.36133 5.80313V10.3839C3.36133 10.6861 3.61022 10.935 3.91244 10.935C4.22059 10.935 4.46948 10.6861 4.46948 10.3839V5.80313C4.46948 5.49498 4.22059 5.24609 3.91244 5.24609Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M7.02279 3.05957C6.72057 3.05957 6.47168 3.30846 6.47168 3.61661V10.384C6.47168 10.6862 6.72057 10.9351 7.02279 10.9351C7.33094 10.9351 7.57983 10.6862 7.57983 10.384V3.61661C7.57983 3.30846 7.33094 3.05957 7.02279 3.05957Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M10.0932 7.66406C9.78502 7.66406 9.53613 7.91295 9.53613 8.2211V10.3841C9.53613 10.6863 9.78502 10.9352 10.0872 10.9352C10.3954 10.9352 10.6443 10.6863 10.6443 10.3841V8.2211C10.6443 7.91295 10.3954 7.66406 10.0932 7.66406Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </i>
                <span className="item-name">Crypto</span>
              </a>
            </li>
            <li
              className="nav-item"
              x-bind:className="selected.includes('menu_style') ? 'active' : ''"
            >
              <a
                className="nav-link"
                x-bind:className="selected.includes('menu_style') ? 'active' : ''"
                x-on:click="toggle('menu_style')"
              >
                <i
                  className="icon"
                  data-tp-toggle="tooltip"
                  data-tp-placement="left"
                  data-tp-title="Menu Style"
                >
                  <svg
                    width="20"
                    className="icon-20"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M13.6663 6.99992C13.6663 10.6826 10.6817 13.6666 6.99967 13.6666C3.31767 13.6666 0.333008 10.6826 0.333008 6.99992C0.333008 3.31859 3.31767 0.333252 6.99967 0.333252C10.6817 0.333252 13.6663 3.31859 13.6663 6.99992Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.01351 6.20239C3.57284 6.20239 3.21484 6.56039 3.21484 6.99973C3.21484 7.43973 3.57284 7.79839 4.01351 7.79839C4.45418 7.79839 4.81218 7.43973 4.81218 6.99973C4.81218 6.56039 4.45418 6.20239 4.01351 6.20239ZM6.99958 6.20239C6.55891 6.20239 6.20091 6.56039 6.20091 6.99973C6.20091 7.43973 6.55891 7.79839 6.99958 7.79839C7.44024 7.79839 7.79824 7.43973 7.79824 6.99973C7.79824 6.56039 7.44024 6.20239 6.99958 6.20239ZM9.18718 6.99973C9.18718 6.56039 9.54518 6.20239 9.98584 6.20239C10.4265 6.20239 10.7845 6.56039 10.7845 6.99973C10.7845 7.43973 10.4265 7.79839 9.98584 7.79839C9.54518 7.79839 9.18718 7.43973 9.18718 6.99973Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </i>
                <span className="item-name">Menu Style</span>
                <i
                  className="rtl:rotate-180 right-icon dark:text-white dark:text-white"
                  x-bind:style="selected.includes('menu_style') ? 'transform:  rotate(90deg)' : ''"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </i>
              </a>
              <ul
                className="sub-menu"
                id="horizontal-menu"
                x-ref="menu_style"
                x-bind:style="selected.includes('menu_style') ? 'max-height: ' + $refs.menu_style.scrollHeight + 'px' : ''"
              >
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../dashboard/index-horizontal.html"
                  >
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i
                      className="sidenav-mini-icon"
                      data-tp-toggle="tooltip"
                      data-tp-placement="left"
                      data-tp-title="Horizontal"
                    >
                      H
                    </i>
                    <span className="item-name">Horizontal</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="../dashboard/index-dual-compact.html"
                  >
                    <i className="icon svg-icon text-secondary-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i
                      className="sidenav-mini-icon"
                      data-tp-toggle="tooltip"
                      data-tp-placement="left"
                      data-tp-title="Dual Compact"
                    >
                      D
                    </i>
                    <span className="item-name">Dual Compact</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../dashboard/index-boxed.html">
                    <i className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i
                      className="sidenav-mini-icon"
                      data-tp-toggle="tooltip"
                      data-tp-placement="left"
                      data-tp-title="Boxed Horizontal"
                    >
                      B
                    </i>
                    <span className="item-name">Boxed Horizontal</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <hr className="hr-horizontal" />
            </li>
            <li className="nav-item static-item">
              <a className="nav-link static-item disabled" tabIndex={-1}>
                <span className="default-icon">PAGES</span>
                <span className="mini-icon">-</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div
        className="p-6 lg:p-8 footer-inner mx-auto main-container container"
        x-bind:className="setting.page_layout"
      >
        <div className="flex flex-wrap justify-between mb-6 gap-4">
          <div className="">
            <h3 className="mb-0 dark:text-white">Quick Insights</h3>
            <p className="text-secondary-600 dark:text-white">
              Financial Dashboard
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-block w-40 without-press-select">
              <div
                className="choices"
                data-type="select-one"
                role="combobox"
                aria-autocomplete="list"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="choices__inner">
                  <select
                    id="choices-dropdown"
                    name="form-control"
                    className="form-control border border-secondary-500 dark:border-secondary-700 dark:bg-dark-card dark:text-white text-secondary-600 dark:focus:border-primary-500 choices__input"
                    aria-label=".form-select-sm example"
                    data-choice="active"
                  >
                    <option
                      value="Past 30 Days"
                      data-custom-properties="[object Object]"
                    >
                      Past 30 Days
                    </option>
                  </select>
                  <div className="choices__list choices__list--single">
                    <div
                      className="choices__item choices__item--selectable"
                      data-item=""
                      data-id="1"
                      data-value="Past 30 Days"
                      data-custom-properties="[object Object]"
                      aria-selected="true"
                    >
                      Past 30 Days
                    </div>
                  </div>
                </div>
                <div
                  className="choices__list choices__list--dropdown"
                  aria-expanded="false"
                >
                  <input
                    type="text"
                    className="choices__input choices__input--cloned"
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    role="textbox"
                    aria-autocomplete="list"
                    aria-label="null"
                    placeholder=""
                  />
                  <div className="choices__list" role="listbox">
                    <div
                      id="choices--choices-dropdown-item-choice-1"
                      className="choices__item choices__item--choice choices__item--selectable is-highlighted"
                      role="option"
                      data-choice=""
                      data-id="1"
                      data-value="Past 1 year"
                      data-select-text="Press to select"
                      data-choice-selectable=""
                      aria-selected="true"
                    >
                      Past 1 year
                    </div>
                    <div
                      id="choices--choices-dropdown-item-choice-2"
                      className="choices__item choices__item--choice choices__item--selectable"
                      role="option"
                      data-choice=""
                      data-id="2"
                      data-value="Past 2 year"
                      data-select-text="Press to select"
                      data-choice-selectable=""
                    >
                      Past 2 year
                    </div>
                    <div
                      id="choices--choices-dropdown-item-choice-3"
                      className="choices__item choices__item--choice is-selected choices__item--selectable"
                      role="option"
                      data-choice=""
                      data-id="3"
                      data-value="Past 30 Days"
                      data-select-text="Press to select"
                      data-choice-selectable=""
                    >
                      Past 30 Days
                    </div>
                    <div
                      id="choices--choices-dropdown-item-choice-4"
                      className="choices__item choices__item--choice choices__item--selectable"
                      role="option"
                      data-choice=""
                      data-id="4"
                      data-value="Past 60 Days"
                      data-select-text="Press to select"
                      data-choice-selectable=""
                    >
                      Past 60 Days
                    </div>
                    <div
                      id="choices--choices-dropdown-item-choice-5"
                      className="choices__item choices__item--choice choices__item--selectable"
                      role="option"
                      data-choice=""
                      data-id="5"
                      data-value="Past 90 Days"
                      data-select-text="Press to select"
                      data-choice-selectable=""
                    >
                      Past 90 Days
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-block">
              <div className="w-full">
                <input
                  type="text"
                  className="range_flatpicker form-control flatpickr-input"
                  placeholder="24 Jan 2022 to 23 Feb 2022"
                />
              </div>
            </div>
            <button className="btn btn-primary">Analytics</button>
          </div>
        </div>
        <div>
          <div className="grid gird-cols-1 lg:grid-cols-3 lg:gap-8">
            <div className="relative flex flex-col mb-8 bg-white rounded shadow-lg dark:bg-dark-card grid gird-cols-1 lg:col-span-2">
              <div className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-secondary-600">
                <div className="relative flex flex-wrap justify-between p-5 ">
                  <h4 className="mb-2 sm:mb-0 dark:text-white">
                    Sales Statistics
                  </h4>
                  <div className="flex">
                    <div className="mx-3 mr-0 dark:text-white">
                      <p className="mb-0 dark:text-white flex items-center">
                        <svg
                          className="text-primary-500 mx-2"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="5"
                            cy="5"
                            r="5"
                            fill="currentColor"
                          ></circle>
                        </svg>{" "}
                        Total Sales{" "}
                      </p>
                    </div>
                    <div className="mx-3 dark:taxt-white">
                      <p className="mb-0 dark:text-white flex items-center">
                        <svg
                          className="text-secondary-500 mx-2"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="5"
                            cy="5"
                            r="5"
                            fill="currentColor"
                          ></circle>
                        </svg>{" "}
                        Total Expense
                      </p>
                    </div>
                    <div className="dark:taxt-white">
                      <p className="mb-0 dark:text-white flex items-center">
                        <svg
                          className="text-success-500 mx-2"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="5"
                            cy="5"
                            r="5"
                            fill="currentColor"
                          ></circle>
                        </svg>{" "}
                        Total Profit
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="m-0" />
                <div className="flex-auto p-5">
                  <div
                    id="dashboard-line-chart"
                    className="dashboard-line-chart"
                    style={{ minHeight: "355px" }}
                  >
                    <div
                      id="apexchartsvduzsye6"
                      className="apexcharts-canvas apexchartsvduzsye6 apexcharts-theme-light"
                      style={{ width: "662px", height: "340px" }}
                    >
                      <svg
                        id="SvgjsSvg1193"
                        width="662"
                        height="340"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        className="apexcharts-svg apexcharts-zoomable hovering-zoom"
                        transform="translate(0, 0)"
                        style={{ background: "transparent" }}
                      >
                        <g
                          id="SvgjsG1195"
                          className="apexcharts-inner apexcharts-graphical"
                          transform="translate(45.359375, 30)"
                        >
                          <defs id="SvgjsDefs1194">
                            <clipPath id="gridRectMaskvduzsye6">
                              <rect
                                id="SvgjsRect1201"
                                width="601.8017578125"
                                height="288"
                                x="-3.5"
                                y="-1.5"
                                rx="0"
                                ry="0"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#fff"
                              ></rect>
                            </clipPath>
                            <clipPath id="forecastMaskvduzsye6">
                              <rect
                                id="SvgjsRect1224"
                                width="594.8017578125"
                                height="285"
                                x="371.7510986328125"
                                y="0"
                                rx="0"
                                ry="0"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#fefefe"
                              ></rect>
                              <rect
                                id="SvgjsRect1248"
                                width="594.8017578125"
                                height="285"
                                x="371.7510986328125"
                                y="0"
                                rx="0"
                                ry="0"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#fefefe"
                              ></rect>
                              <rect
                                id="SvgjsRect1272"
                                width="594.8017578125"
                                height="285"
                                x="371.7510986328125"
                                y="0"
                                rx="0"
                                ry="0"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#fefefe"
                              ></rect>
                            </clipPath>
                            <clipPath id="nonForecastMaskvduzsye6">
                              <rect
                                id="SvgjsRect1225"
                                width="371.7510986328125"
                                height="285"
                                x="0"
                                y="0"
                                rx="0"
                                ry="0"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#fefefe"
                              ></rect>
                              <rect
                                id="SvgjsRect1249"
                                width="371.7510986328125"
                                height="285"
                                x="0"
                                y="0"
                                rx="0"
                                ry="0"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#fefefe"
                              ></rect>
                              <rect
                                id="SvgjsRect1273"
                                width="371.7510986328125"
                                height="285"
                                x="0"
                                y="0"
                                rx="0"
                                ry="0"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#fefefe"
                              ></rect>
                            </clipPath>
                            <clipPath id="gridRectMarkerMaskvduzsye6">
                              <rect
                                id="SvgjsRect1202"
                                width="650.8017578125"
                                height="341"
                                x="-28"
                                y="-28"
                                rx="0"
                                ry="0"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#fff"
                              ></rect>
                            </clipPath>
                          </defs>
                          <line
                            id="SvgjsLine1200"
                            x1="296.90087890625"
                            y1="0"
                            x2="296.90087890625"
                            y2="285"
                            stroke="#b6b6b6"
                            stroke-dasharray="3"
                            stroke-linecap="butt"
                            className="apexcharts-xcrosshairs"
                            x="296.90087890625"
                            y="0"
                            width="1"
                            height="285"
                            fill="#b1b9c4"
                            filter="none"
                            fill-opacity="0.9"
                            stroke-width="1"
                          ></line>
                          <g
                            id="SvgjsG1288"
                            className="apexcharts-xaxis"
                            transform="translate(0, 0)"
                          >
                            <g
                              id="SvgjsG1289"
                              className="apexcharts-xaxis-texts-g"
                              transform="translate(0, -4)"
                            >
                              <text
                                id="SvgjsText1291"
                                font-family="Helvetica, Arial, sans-serif"
                                x="0"
                                y="314"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="400"
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1292">Jan</tspan>
                                <title>Jan</title>
                              </text>
                              <text
                                id="SvgjsText1294"
                                font-family="Helvetica, Arial, sans-serif"
                                x="74.3502197265625"
                                y="314"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="400"
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1295">Feb</tspan>
                                <title>Feb</title>
                              </text>
                              <text
                                id="SvgjsText1297"
                                font-family="Helvetica, Arial, sans-serif"
                                x="148.700439453125"
                                y="314"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="400"
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1298">Mar</tspan>
                                <title>Mar</title>
                              </text>
                              <text
                                id="SvgjsText1300"
                                font-family="Helvetica, Arial, sans-serif"
                                x="223.0506591796875"
                                y="314"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="400"
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1301">Apr</tspan>
                                <title>Apr</title>
                              </text>
                              <text
                                id="SvgjsText1303"
                                font-family="Helvetica, Arial, sans-serif"
                                x="297.40087890625"
                                y="314"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="400"
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1304">May</tspan>
                                <title>May</title>
                              </text>
                              <text
                                id="SvgjsText1306"
                                font-family="Helvetica, Arial, sans-serif"
                                x="371.7510986328125"
                                y="314"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="400"
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1307">Jun</tspan>
                                <title>Jun</title>
                              </text>
                              <text
                                id="SvgjsText1309"
                                font-family="Helvetica, Arial, sans-serif"
                                x="446.101318359375"
                                y="314"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="400"
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1310">Jul</tspan>
                                <title>Jul</title>
                              </text>
                              <text
                                id="SvgjsText1312"
                                font-family="Helvetica, Arial, sans-serif"
                                x="520.4515380859375"
                                y="314"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="400"
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1313">Aug</tspan>
                                <title>Aug</title>
                              </text>
                              <text
                                id="SvgjsText1315"
                                font-family="Helvetica, Arial, sans-serif"
                                x="594.8017578125"
                                y="314"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="12px"
                                font-weight="400"
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                <tspan id="SvgjsTspan1316">Sep</tspan>
                                <title>Sep</title>
                              </text>
                            </g>
                          </g>
                          <g id="SvgjsG1276" className="apexcharts-grid">
                            <g
                              id="SvgjsG1277"
                              className="apexcharts-gridlines-horizontal"
                            >
                              <line
                                id="SvgjsLine1281"
                                x1="0"
                                y1="57"
                                x2="594.8017578125"
                                y2="57"
                                stroke="#e0e0e0"
                                stroke-dasharray="7"
                                stroke-linecap="butt"
                                className="apexcharts-gridline"
                              ></line>
                              <line
                                id="SvgjsLine1282"
                                x1="0"
                                y1="114"
                                x2="594.8017578125"
                                y2="114"
                                stroke="#e0e0e0"
                                stroke-dasharray="7"
                                stroke-linecap="butt"
                                className="apexcharts-gridline"
                              ></line>
                              <line
                                id="SvgjsLine1283"
                                x1="0"
                                y1="171"
                                x2="594.8017578125"
                                y2="171"
                                stroke="#e0e0e0"
                                stroke-dasharray="7"
                                stroke-linecap="butt"
                                className="apexcharts-gridline"
                              ></line>
                              <line
                                id="SvgjsLine1284"
                                x1="0"
                                y1="228"
                                x2="594.8017578125"
                                y2="228"
                                stroke="#e0e0e0"
                                stroke-dasharray="7"
                                stroke-linecap="butt"
                                className="apexcharts-gridline"
                              ></line>
                            </g>
                            <g
                              id="SvgjsG1278"
                              className="apexcharts-gridlines-vertical"
                            ></g>
                            <line
                              id="SvgjsLine1287"
                              x1="0"
                              y1="285"
                              x2="594.8017578125"
                              y2="285"
                              stroke="transparent"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                            ></line>
                            <line
                              id="SvgjsLine1286"
                              x1="0"
                              y1="1"
                              x2="0"
                              y2="285"
                              stroke="transparent"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                            ></line>
                          </g>
                          <g
                            id="SvgjsG1203"
                            className="apexcharts-line-series apexcharts-plot-series"
                          >
                            <g id="SvgjsG1204" className="apexcharts-series">
                              <path
                                id="SvgjsPath1226"
                                d="M 0 266 L 74.3502197265625 207.1 L 148.700439453125 218.5 L 223.0506591796875 188.1 L 297.40087890625 191.89999999999998 L 371.7510986328125 148.2 L 446.101318359375 210.89999999999998 L 520.4515380859375 245.1 L 594.8017578125 3.8000000000000114"
                                fill="none"
                                fill-opacity="1"
                                stroke="rgba(112,22,208,0.85)"
                                stroke-opacity="1"
                                stroke-linecap="butt"
                                stroke-width="3"
                                stroke-dasharray="0"
                                className="apexcharts-line"
                                clip-path="url(#nonForecastMaskvduzsye6)"
                                path="M 0 266 L 74.3502197265625 207.1 L 148.700439453125 218.5 L 223.0506591796875 188.1 L 297.40087890625 191.89999999999998 L 371.7510986328125 148.2 L 446.101318359375 210.89999999999998 L 520.4515380859375 245.1 L 594.8017578125 3.8000000000000114"
                                fill-rule="evenodd"
                              ></path>
                              <path
                                id="SvgjsPath1227"
                                d="M 0 266 L 74.3502197265625 207.1 L 148.700439453125 218.5 L 223.0506591796875 188.1 L 297.40087890625 191.89999999999998 L 371.7510986328125 148.2 L 446.101318359375 210.89999999999998 L 520.4515380859375 245.1 L 594.8017578125 3.8000000000000114"
                                fill="none"
                                fill-opacity="1"
                                stroke="rgba(112,22,208,0.85)"
                                stroke-opacity="1"
                                stroke-linecap="butt"
                                stroke-width="3"
                                stroke-dasharray="4"
                                className="apexcharts-line"
                                clip-path="url(#forecastMaskvduzsye6)"
                                path="M 0 266 L 74.3502197265625 207.1 L 148.700439453125 218.5 L 223.0506591796875 188.1 L 297.40087890625 191.89999999999998 L 371.7510986328125 148.2 L 446.101318359375 210.89999999999998 L 520.4515380859375 245.1 L 594.8017578125 3.8000000000000114"
                              ></path>
                              <g
                                id="SvgjsG1205"
                                className="apexcharts-series-markers-wrap"
                              >
                                <g
                                  id="SvgjsG1207"
                                  className="apexcharts-series-markers"
                                  clip-path="url(#gridRectMarkerMaskvduzsye6)"
                                >
                                  <circle
                                    id="SvgjsCircle1208"
                                    r="6"
                                    cx="0"
                                    cy="266"
                                    className="apexcharts-marker no-pointer-events weg26hpbd"
                                    stroke="#7016d0"
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="6"
                                  ></circle>
                                  <circle
                                    id="SvgjsCircle1209"
                                    r="6"
                                    cx="74.3502197265625"
                                    cy="207.1"
                                    className="apexcharts-marker no-pointer-events wmnqc0yma"
                                    stroke="#7016d0"
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="6"
                                  ></circle>
                                </g>
                                <g
                                  id="SvgjsG1210"
                                  className="apexcharts-series-markers"
                                  clip-path="url(#gridRectMarkerMaskvduzsye6)"
                                >
                                  <circle
                                    id="SvgjsCircle1211"
                                    r="6"
                                    cx="148.700439453125"
                                    cy="218.5"
                                    className="apexcharts-marker no-pointer-events w9mplat8i"
                                    stroke="#7016d0"
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="6"
                                  ></circle>
                                </g>
                                <g
                                  id="SvgjsG1212"
                                  className="apexcharts-series-markers"
                                  clip-path="url(#gridRectMarkerMaskvduzsye6)"
                                >
                                  <circle
                                    id="SvgjsCircle1213"
                                    r="6"
                                    cx="223.0506591796875"
                                    cy="188.1"
                                    className="apexcharts-marker no-pointer-events wy7dm8gl5"
                                    stroke="#7016d0"
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="6"
                                  ></circle>
                                </g>
                                <g
                                  id="SvgjsG1214"
                                  className="apexcharts-series-markers"
                                  clip-path="url(#gridRectMarkerMaskvduzsye6)"
                                >
                                  <circle
                                    id="SvgjsCircle1215"
                                    r="6"
                                    cx="297.40087890625"
                                    cy="191.89999999999998"
                                    className="apexcharts-marker no-pointer-events wvxkceqrk"
                                    stroke="#7016d0"
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="6"
                                  ></circle>
                                </g>
                                <g
                                  id="SvgjsG1216"
                                  className="apexcharts-series-markers"
                                  clip-path="url(#gridRectMarkerMaskvduzsye6)"
                                >
                                  <circle
                                    id="SvgjsCircle1217"
                                    r="6"
                                    cx="371.7510986328125"
                                    cy="148.2"
                                    className="apexcharts-marker no-pointer-events w3byltvmxf"
                                    stroke="#7016d0"
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="6"
                                  ></circle>
                                </g>
                                <g
                                  id="SvgjsG1218"
                                  className="apexcharts-series-markers"
                                  clip-path="url(#gridRectMarkerMaskvduzsye6)"
                                >
                                  <circle
                                    id="SvgjsCircle1219"
                                    r="6"
                                    cx="446.101318359375"
                                    cy="210.89999999999998"
                                    className="apexcharts-marker no-pointer-events wdsfym75g"
                                    stroke="#7016d0"
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="6"
                                  ></circle>
                                </g>
                                <g
                                  id="SvgjsG1220"
                                  className="apexcharts-series-markers"
                                  clip-path="url(#gridRectMarkerMaskvduzsye6)"
                                >
                                  <circle
                                    id="SvgjsCircle1221"
                                    r="6"
                                    cx="520.4515380859375"
                                    cy="245.1"
                                    className="apexcharts-marker no-pointer-events wjscyc44w"
                                    stroke="#7016d0"
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="6"
                                  ></circle>
                                </g>
                                <g
                                  id="SvgjsG1222"
                                  className="apexcharts-series-markers"
                                  clip-path="url(#gridRectMarkerMaskvduzsye6)"
                                >
                                  <circle
                                    id="SvgjsCircle1223"
                                    r="6"
                                    cx="594.8017578125"
                                    cy="3.8000000000000114"
                                    className="apexcharts-marker no-pointer-events wynhp3nov"
                                    stroke="#7016d0"
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="6"
                                  ></circle>
                                </g>
                              </g>
                            </g>
                            <g id="SvgjsG1228" className="apexcharts-series">
                              <path
                                id="SvgjsPath1250"
                                d="M 0 247 L 74.3502197265625 167.2 L 148.700439453125 152 L 223.0506591796875 117.79999999999998 L 297.40087890625 157.7 L 371.7510986328125 228 L 446.101318359375 95 L 520.4515380859375 188.1 L 594.8017578125 98.79999999999998"
                                fill="none"
                                fill-opacity="1"
                                stroke="rgba(8,177,186,0.85)"
                                stroke-opacity="1"
                                stroke-linecap="butt"
                                stroke-width="3"
                                stroke-dasharray="0"
                                className="apexcharts-line"
                                clip-path="url(#nonForecastMaskvduzsye6)"
                                path="M 0 247 L 74.3502197265625 167.2 L 148.700439453125 152 L 223.0506591796875 117.79999999999998 L 297.40087890625 157.7 L 371.7510986328125 228 L 446.101318359375 95 L 520.4515380859375 188.1 L 594.8017578125 98.79999999999998"
                                fill-rule="evenodd"
                              ></path>
                              <path
                                id="SvgjsPath1251"
                                d="M 0 247 L 74.3502197265625 167.2 L 148.700439453125 152 L 223.0506591796875 117.79999999999998 L 297.40087890625 157.7 L 371.7510986328125 228 L 446.101318359375 95 L 520.4515380859375 188.1 L 594.8017578125 98.79999999999998"
                                fill="none"
                                fill-opacity="1"
                                stroke="rgba(8,177,186,0.85)"
                                stroke-opacity="1"
                                stroke-linecap="butt"
                                stroke-width="3"
                                stroke-dasharray="4"
                                className="apexcharts-line"
                                clip-path="url(#forecastMaskvduzsye6)"
                                path="M 0 247 L 74.3502197265625 167.2 L 148.700439453125 152 L 223.0506591796875 117.79999999999998 L 297.40087890625 157.7 L 371.7510986328125 228 L 446.101318359375 95 L 520.4515380859375 188.1 L 594.8017578125 98.79999999999998"
                              ></path>
                              <g
                                id="SvgjsG1229"
                                className="apexcharts-series-markers-wrap"
                              >
                                <g
                                  id="SvgjsG1231"
                                  className="apexcharts-series-markers"
                                  clip-path="url(#gridRectMarkerMaskvduzsye6)"
                                >
                                  <circle
                                    id="SvgjsCircle1232"
                                    r="6"
                                    cx="0"
                                    cy="247"
                                    className="apexcharts-marker no-pointer-events wfw4lm5kyh"
                                    stroke="#08b1ba"
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="6"
                                  ></circle>
                                  <circle
                                    id="SvgjsCircle1233"
                                    r="6"
                                    cx="74.3502197265625"
                                    cy="167.2"
                                    className="apexcharts-marker no-pointer-events wb6civsdf"
                                    stroke="#08b1ba"
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="6"
                                  ></circle>
                                </g>
                                <g
                                  id="SvgjsG1234"
                                  className="apexcharts-series-markers"
                                  clip-path="url(#gridRectMarkerMaskvduzsye6)"
                                >
                                  <circle
                                    id="SvgjsCircle1235"
                                    r="6"
                                    cx="148.700439453125"
                                    cy="152"
                                    className="apexcharts-marker no-pointer-events wmio0wfoy"
                                    stroke="#08b1ba"
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="6"
                                  ></circle>
                                </g>
                                <g
                                  id="SvgjsG1236"
                                  className="apexcharts-series-markers"
                                  clip-path="url(#gridRectMarkerMaskvduzsye6)"
                                >
                                  <circle
                                    id="SvgjsCircle1237"
                                    r="6"
                                    cx="223.0506591796875"
                                    cy="117.79999999999998"
                                    className="apexcharts-marker no-pointer-events w01d9bm69"
                                    stroke="#08b1ba"
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="6"
                                  ></circle>
                                </g>
                                <g
                                  id="SvgjsG1238"
                                  className="apexcharts-series-markers"
                                  clip-path="url(#gridRectMarkerMaskvduzsye6)"
                                >
                                  <circle
                                    id="SvgjsCircle1239"
                                    r="6"
                                    cx="297.40087890625"
                                    cy="157.7"
                                    className="apexcharts-marker no-pointer-events wm1ruwi72k"
                                    stroke="#08b1ba"
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="6"
                                  ></circle>
                                </g>
                                <g
                                  id="SvgjsG1240"
                                  className="apexcharts-series-markers"
                                  clip-path="url(#gridRectMarkerMaskvduzsye6)"
                                >
                                  <circle
                                    id="SvgjsCircle1241"
                                    r="6"
                                    cx="371.7510986328125"
                                    cy="228"
                                    className="apexcharts-marker no-pointer-events waa0nnw6j"
                                    stroke="#08b1ba"
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="6"
                                  ></circle>
                                </g>
                                <g
                                  id="SvgjsG1242"
                                  className="apexcharts-series-markers"
                                  clip-path="url(#gridRectMarkerMaskvduzsye6)"
                                >
                                  <circle
                                    id="SvgjsCircle1243"
                                    r="6"
                                    cx="446.101318359375"
                                    cy="95"
                                    className="apexcharts-marker no-pointer-events wouycpt1ch"
                                    stroke="#08b1ba"
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="6"
                                  ></circle>
                                </g>
                                <g
                                  id="SvgjsG1244"
                                  className="apexcharts-series-markers"
                                  clip-path="url(#gridRectMarkerMaskvduzsye6)"
                                >
                                  <circle
                                    id="SvgjsCircle1245"
                                    r="6"
                                    cx="520.4515380859375"
                                    cy="188.1"
                                    className="apexcharts-marker no-pointer-events wjiof0rev"
                                    stroke="#08b1ba"
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="6"
                                  ></circle>
                                </g>
                                <g
                                  id="SvgjsG1246"
                                  className="apexcharts-series-markers"
                                  clip-path="url(#gridRectMarkerMaskvduzsye6)"
                                >
                                  <circle
                                    id="SvgjsCircle1247"
                                    r="6"
                                    cx="594.8017578125"
                                    cy="98.79999999999998"
                                    className="apexcharts-marker no-pointer-events wbxwnv851j"
                                    stroke="#08b1ba"
                                    fill="#ffffff"
                                    fill-opacity="1"
                                    stroke-width="2"
                                    stroke-opacity="0.9"
                                    default-marker-size="6"
                                  ></circle>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col mb-8 bg-white rounded shadow-lg dark:bg-dark-card grid gird-cols-1">
                  <div className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-secondary-600">
                    <div className="relative p-5">
                      <h4 className="mb-0 dark:text-white">Date</h4>
                    </div>
                    <hr className="m-0" />
                    <div className="course-picker p-5">
                      <div className="inline_flatpickr dark:bg-dark-strip flatpickr-input"></div>
                      <div className="flatpickr-calendar animate inline">
                        <div className="flatpickr-months">
                          <span className="flatpickr-prev-month flatpickr-disabled">
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 17 17"
                            >
                              <g></g>
                              <path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z"></path>
                            </svg>
                          </span>
                          <div className="flatpickr-month">
                            <div className="flatpickr-current-month">
                              <select
                                className="flatpickr-monthDropdown-months"
                                aria-label="Month"
                              >
                                <option
                                  className="flatpickr-monthDropdown-month"
                                  value="9"
                                >
                                  October
                                </option>
                                <option
                                  className="flatpickr-monthDropdown-month"
                                  value="10"
                                >
                                  November
                                </option>
                                <option
                                  className="flatpickr-monthDropdown-month"
                                  value="11"
                                >
                                  December
                                </option>
                              </select>
                              <div className="numInputWrapper">
                                <input
                                  className="numInput cur-year"
                                  type="number"
                                  aria-label="Year"
                                  min="2025"
                                />
                                <span className="arrowUp"></span>
                                <span className="arrowDown"></span>
                              </div>
                            </div>
                          </div>
                          <span className="flatpickr-next-month">
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 17 17"
                            >
                              <g></g>
                              <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="flatpickr-innerContainer">
                          <div className="flatpickr-rContainer">
                            <div className="flatpickr-weekdays">
                              <div className="flatpickr-weekdaycontainer">
                                <span className="flatpickr-weekday">Sun</span>
                                <span className="flatpickr-weekday">Mon</span>
                                <span className="flatpickr-weekday">Tue</span>
                                <span className="flatpickr-weekday">Wed</span>
                                <span className="flatpickr-weekday">Thu</span>
                                <span className="flatpickr-weekday">Fri</span>
                                <span className="flatpickr-weekday">Sat</span>
                              </div>
                            </div>
                            <div className="flatpickr-days">
                              <div className="dayContainer">
                                <span
                                  className="flatpickr-day prevMonthDay flatpickr-disabled"
                                  aria-label="September 28, 2025"
                                >
                                  28
                                </span>
                                <span
                                  className="flatpickr-day prevMonthDay flatpickr-disabled"
                                  aria-label="September 29, 2025"
                                >
                                  29
                                </span>
                                <span
                                  className="flatpickr-day prevMonthDay flatpickr-disabled"
                                  aria-label="September 30, 2025"
                                >
                                  30
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 1, 2025"
                                >
                                  1
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 2, 2025"
                                >
                                  2
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 3, 2025"
                                >
                                  3
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 4, 2025"
                                >
                                  4
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 5, 2025"
                                >
                                  5
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 6, 2025"
                                >
                                  6
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 7, 2025"
                                >
                                  7
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 8, 2025"
                                >
                                  8
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 9, 2025"
                                >
                                  9
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 10, 2025"
                                >
                                  10
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 11, 2025"
                                >
                                  11
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 12, 2025"
                                >
                                  12
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 13, 2025"
                                >
                                  13
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 14, 2025"
                                >
                                  14
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 15, 2025"
                                >
                                  15
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 16, 2025"
                                >
                                  16
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 17, 2025"
                                >
                                  17
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 18, 2025"
                                >
                                  18
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 19, 2025"
                                >
                                  19
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 20, 2025"
                                >
                                  20
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 21, 2025"
                                >
                                  21
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 22, 2025"
                                >
                                  22
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 23, 2025"
                                >
                                  23
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 24, 2025"
                                >
                                  24
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 25, 2025"
                                >
                                  25
                                </span>
                                <span
                                  className="flatpickr-day flatpickr-disabled"
                                  aria-label="October 26, 2025"
                                >
                                  26
                                </span>
                                <span
                                  className="flatpickr-day today"
                                  aria-label="October 27, 2025"
                                  aria-current="date"
                                >
                                  27
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="October 28, 2025"
                                >
                                  28
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="October 29, 2025"
                                >
                                  29
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="October 30, 2025"
                                >
                                  30
                                </span>
                                <span
                                  className="flatpickr-day"
                                  aria-label="October 31, 2025"
                                >
                                  31
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="November 1, 2025"
                                >
                                  1
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="November 2, 2025"
                                >
                                  2
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="November 3, 2025"
                                >
                                  3
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="November 4, 2025"
                                >
                                  4
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="November 5, 2025"
                                >
                                  5
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="November 6, 2025"
                                >
                                  6
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="November 7, 2025"
                                >
                                  7
                                </span>
                                <span
                                  className="flatpickr-day nextMonthDay"
                                  aria-label="November 8, 2025"
                                >
                                  8
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gird-cols-1 lg:grid-cols-3 lg:gap-8">
                <div className="relative flex flex-col mb-8 bg-white rounded shadow-lg dark:bg-dark-card grid gird-cols-1">
                  <div className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-secondary-600">
                    <div className="p-5">
                      <div className="mb-8">
                        <div className="flex justify-between items-center pb-0 mb-2">
                          <p className="text-heading dark:text-white">
                            Last Transaction
                          </p>
                          <div className="flex self-center">
                            <a
                              className="text-primary-500 bg-primary-100/[0.2] hover:text-primary-600 hover:bg-primary-500/20 focus:text-primary-600 focus:bg-primary-500/20 text-xs leading-none rounded-full font-bold px-2 py-1 dark:bg-dark-strip"
                              href="javascript:void(0);"
                            >
                              View Report
                            </a>
                          </div>
                        </div>
                        <div>
                          <h2 className="dark:text-white text-black">
                            $46,996
                          </h2>
                          <small className="dark:text-white text-secondary-700 text-base">
                            This Month
                          </small>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="bg-primary-500/10 p-3 rounded text-primary-500">
                            <svg
                              width="35"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M21.9964 8.37513H17.7618C15.7911 8.37859 14.1947 9.93514 14.1911 11.8566C14.1884 13.7823 15.7867 15.3458 17.7618 15.3484H22V15.6543C22 19.0136 19.9636 21 16.5173 21H7.48356C4.03644 21 2 19.0136 2 15.6543V8.33786C2 4.97862 4.03644 3 7.48356 3H16.5138C19.96 3 21.9964 4.97862 21.9964 8.33786V8.37513ZM6.73956 8.36733H12.3796H12.3831H12.3902C12.8124 8.36559 13.1538 8.03019 13.152 7.61765C13.1502 7.20598 12.8053 6.87318 12.3831 6.87491H6.73956C6.32 6.87664 5.97956 7.20858 5.97778 7.61852C5.976 8.03019 6.31733 8.36559 6.73956 8.36733Z"
                                fill="currentColor"
                              ></path>
                              <path
                                opacity="0.4"
                                d="M16.0374 12.2966C16.2465 13.2478 17.0805 13.917 18.0326 13.8996H21.2825C21.6787 13.8996 22 13.5715 22 13.166V10.6344C21.9991 10.2297 21.6787 9.90077 21.2825 9.8999H17.9561C16.8731 9.90338 15.9983 10.8024 16 11.9102C16 12.0398 16.0128 12.1695 16.0374 12.2966Z"
                                fill="currentColor"
                              ></path>
                              <circle
                                cx="18"
                                cy="11.8999"
                                r="1"
                                fill="currentColor"
                              ></circle>
                            </svg>
                          </div>
                          <div className="w-full">
                            <div className="flex justify-between">
                              <h6 className="mb-0 dark:text-white">Balance</h6>
                              <p className="leading-tight font-medium text-secondary-600">
                                $2,386
                              </p>
                            </div>
                            <div className="flex w-full h-1.5 mt-2 align-middle bg-primary-500/10 dark:bg-dark-strip rounded-full">
                              <div className="w-1/4 text-xs leading-none text-center text-white bg-primary-500 rounded-l-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="bg-info-500/10 p-3 rounded text-info-500">
                            <svg
                              width="35"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M6.447 22C3.996 22 2 19.9698 2 17.4755V12.5144C2 10.0252 3.99 8 6.437 8L17.553 8C20.005 8 22 10.0302 22 12.5256V17.4846C22 19.9748 20.01 22 17.563 22H16.623H6.447Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M11.455 2.22103L8.54604 5.06682C8.24604 5.36094 8.24604 5.83427 8.54804 6.12742C8.85004 6.41959 9.33704 6.41862 9.63704 6.12547L11.23 4.56623V6.06119V14.4515C11.23 14.8654 11.575 15.2014 12 15.2014C12.426 15.2014 12.77 14.8654 12.77 14.4515V4.56623L14.363 6.12547C14.663 6.41862 15.15 6.41959 15.452 6.12742C15.603 5.98036 15.679 5.78849 15.679 5.59566C15.679 5.40477 15.603 5.21291 15.454 5.06682L12.546 2.22103C12.401 2.07981 12.205 1.99995 12 1.99995C11.796 1.99995 11.6 2.07981 11.455 2.22103Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                          <div className="w-full">
                            <div className="flex justify-between">
                              <h6 className="mb-0 dark:text-white">Transfer</h6>
                              <p className="leading-tight font-medium text-secondary-600">
                                $4,765
                              </p>
                            </div>
                            <div className="flex w-full h-1.5 mt-2 align-middle bg-info-500/10 dark:bg-dark-strip rounded-full">
                              <div className="w-3/5 text-xs leading-none text-center text-white bg-info-500 rounded-l-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="bg-success-500/10 p-3 rounded text-success-500">
                            <svg
                              width="35"
                              height="35"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M17.554 7.29614C20.005 7.29614 22 9.35594 22 11.8876V16.9199C22 19.4453 20.01 21.5 17.564 21.5L6.448 21.5C3.996 21.5 2 19.4412 2 16.9096V11.8773C2 9.35181 3.991 7.29614 6.438 7.29614H7.378L17.554 7.29614Z"
                                fill="currentColor"
                              ></path>
                              <path
                                d="M12.5464 16.0374L15.4554 13.0695C15.7554 12.7627 15.7554 12.2691 15.4534 11.9634C15.1514 11.6587 14.6644 11.6597 14.3644 11.9654L12.7714 13.5905L12.7714 3.2821C12.7714 2.85042 12.4264 2.5 12.0004 2.5C11.5754 2.5 11.2314 2.85042 11.2314 3.2821L11.2314 13.5905L9.63742 11.9654C9.33742 11.6597 8.85043 11.6587 8.54843 11.9634C8.39743 12.1168 8.32142 12.3168 8.32142 12.518C8.32142 12.717 8.39743 12.9171 8.54643 13.0695L11.4554 16.0374C11.6004 16.1847 11.7964 16.268 12.0004 16.268C12.2054 16.268 12.4014 16.1847 12.5464 16.0374Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                          <div className="w-full">
                            <div className="flex justify-between">
                              <h6 className="mb-0 dark:text-white">Received</h6>
                              <p className="leading-tight font-medium text-secondary-600">
                                $8,224
                              </p>
                            </div>
                            <div className="flex w-full h-1.5 mt-2 align-middle bg-success-500/10 dark:bg-dark-strip rounded-full">
                              <div className="w-4/5 text-xs leading-none text-center text-white bg-success-500 rounded-l-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 ">
                          <div className="bg-danger-500/10 p-3 rounded text-danger-500">
                            <svg
                              width="35"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M21.9964 8.37513H17.7618C15.7911 8.37859 14.1947 9.93514 14.1911 11.8566C14.1884 13.7823 15.7867 15.3458 17.7618 15.3484H22V15.6543C22 19.0136 19.9636 21 16.5173 21H7.48356C4.03644 21 2 19.0136 2 15.6543V8.33786C2 4.97862 4.03644 3 7.48356 3H16.5138C19.96 3 21.9964 4.97862 21.9964 8.33786V8.37513ZM6.73956 8.36733H12.3796H12.3831H12.3902C12.8124 8.36559 13.1538 8.03019 13.152 7.61765C13.1502 7.20598 12.8053 6.87318 12.3831 6.87491H6.73956C6.32 6.87664 5.97956 7.20858 5.97778 7.61852C5.976 8.03019 6.31733 8.36559 6.73956 8.36733Z"
                                fill="currentColor"
                              ></path>
                              <path
                                opacity="0.4"
                                d="M16.0374 12.2966C16.2465 13.2478 17.0805 13.917 18.0326 13.8996H21.2825C21.6787 13.8996 22 13.5715 22 13.166V10.6344C21.9991 10.2297 21.6787 9.90077 21.2825 9.8999H17.9561C16.8731 9.90338 15.9983 10.8024 16 11.9102C16 12.0398 16.0128 12.1695 16.0374 12.2966Z"
                                fill="currentColor"
                              ></path>
                              <circle
                                cx="18"
                                cy="11.8999"
                                r="1"
                                fill="currentColor"
                              ></circle>
                            </svg>
                          </div>
                          <div className="w-full">
                            <div className="flex justify-between">
                              <h6 className="mb-0 dark:text-white">
                                Outstanding
                              </h6>
                              <p className="leading-tight font-medium text-secondary-600">
                                $1,224
                              </p>
                            </div>
                            <div className="flex w-full h-1.5 mt-2 align-middle bg-danger-500/10 dark:bg-dark-strip rounded-full">
                              <div className="w-1/5 text-xs leading-none text-center text-white bg-danger-500 rounded-l-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col mb-8 bg-white rounded shadow-lg dark:bg-dark-card grid gird-cols-1 lg:col-span-2">
                  <div className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-white">
                    <div className="relative flex flex-wrap justify-between p-5">
                      <h4 className="mb-0 dark:text-white">Sales Order</h4>
                      <div
                        className="flex items-center"
                        x-data="{ open: false }"
                      >
                        <div className="" x-data="dropdown">
                          <span className="flex items-center text-base cursor-pointer text-black dark:text-white mr-2">
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
                              className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 text-secondary-600 dark:text-white dark:hover:text-primary-500 group"
                              href="javascript:void(0);"
                            >
                              This Week
                            </a>
                            <a
                              className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 text-secondary-600 dark:text-white dark:hover:text-primary-500 group"
                              href="javascript:void(0);"
                            >
                              This Month
                            </a>
                            <a
                              className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 text-secondary-600 dark:text-white dark:hover:text-primary-500 group"
                              href="javascript:void(0);"
                            >
                              This Year
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-auto p-6 pt-0">
                      <div className="border dark:border-secondary-800 rounded overflow-x-auto">
                        <table
                          id="basic-table"
                          className="min-w-full overflow-hidden divide-y divide-secondary-200 dark:divide-secondary-800"
                        >
                          <thead>
                            <tr className="bg-secondary-200 dark:bg-dark-bg">
                              <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                COMPANIES
                              </th>
                              <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                CONTACTS
                              </th>
                              <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                ORDER
                              </th>
                              <th className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                COMPLETION
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800 dark:bg-dark-card dark:text-white">
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <img
                                    className="w-10 h-10 p-1 mr-3 rtl:mr-0 rtl:ml-3 text-primary-400 bg-primary-500/10 rounded-xl"
                                    src="../assets/images/shapes/01.png"
                                    alt="profile"
                                  />
                                  <h6 className="font-medium pl-1 mt-2 dark:text-white">
                                    Addidis Sportwear
                                  </h6>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="iq-media-group iq-media-group-1">
                                  <a
                                    href="#"
                                    className="relative inline-flex ml-0 rtl:mr-0  bg-no-repeat"
                                  >
                                    <div className="w-10 h-10 text-sm leading-10 text-center text-primary-500 bg-white border-2 border-primary-500 dark:bg-dark-card rounded-full hover:z-10 mr-3">
                                      SP
                                    </div>
                                  </a>
                                  <a
                                    href="#"
                                    className="relative inline-flex -ml-5 rtl:-ml-0 rtl:-mr-5 bg-no-repeat"
                                  >
                                    <div className="w-10 h-10 text-sm leading-10 text-center text-primary-500 bg-white border-2 border-primary-500 dark:bg-dark-card rounded-full hover:z-10 mr-3">
                                      PP
                                    </div>
                                  </a>
                                  <a
                                    href="#"
                                    className="relative inline-flex -ml-5 rtl:-ml-0 rtl:-mr-5  bg-no-repeat"
                                  >
                                    <div className="w-10 h-10 text-sm leading-10 text-center text-primary-500 bg-white border-2 border-primary-500 dark:bg-dark-card rounded-full hover:z-10 mr-3">
                                      MM
                                    </div>
                                  </a>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap dark:text-secondary-500 text-secondary-600">
                                $14,000
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center mb-2">
                                  <h6 className="font-medium dark:text-white">
                                    60%
                                  </h6>
                                </div>
                                <div className="flex w-full h-1 align-middle bg-primary-500/10 dark:bg-dark-card rounded-full shadow-inner">
                                  <div className="w-3/5 text-xs leading-none text-center text-white bg-primary-500 rounded-l-full"></div>
                                </div>
                              </td>
                            </tr>
                            <tr className="bg-secondary-200 dark:bg-dark-strip">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <img
                                    className="w-10 h-10 p-1 mr-3 rtl:mr-0 rtl:ml-3 text-primary-400 bg-primary-500/10 rounded-xl"
                                    src="../assets/images/shapes/05.png"
                                    alt="profile"
                                  />
                                  <h6 className="font-medium pl-1 mt-2 dark:text-white">
                                    Netflixer Platforms
                                  </h6>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="iq-media-group iq-media-group-1">
                                  <a
                                    href="#"
                                    className="relative inline-flex ml-0 rtl:mr-0 bg-no-repeat"
                                  >
                                    <div className="w-10 h-10 text-sm leading-10 text-center text-primary-500 bg-white border-2 border-primary-500 dark:bg-dark-card rounded-full hover:z-10 mr-2">
                                      SP
                                    </div>
                                  </a>
                                  <a
                                    href="#"
                                    className="relative inline-flex -ml-5 rtl:-ml-0 rtl:-mr-5 bg-no-repeat"
                                  >
                                    <div className="w-10 h-10 text-sm leading-10 text-center text-primary-500 bg-white border-2 border-primary-500 dark:bg-dark-card rounded-full hover:z-10 mr-2">
                                      PP
                                    </div>
                                  </a>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap dark:text-secondary-500 text-secondary-600">
                                $30,000
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center mb-2">
                                  <h6 className="font-medium dark:text-white">
                                    25%
                                  </h6>
                                </div>
                                <div className="flex w-full h-1 align-middle bg-primary-500/10 dark:bg-dark-card rounded-full shadow-inner">
                                  <div className="w-2/5 text-xs leading-none text-center text-white bg-primary-500 rounded-l-full "></div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <img
                                    className="w-10 h-10 p-1 mr-3 rtl:mr-0 rtl:ml-3 text-primary-400 bg-primary-500/10 rounded-xl"
                                    src="../assets/images/shapes/02.png"
                                    alt="profile"
                                  />
                                  <h6 className="font-medium pl-1 mt-2 dark:text-white">
                                    Shopifi Stores
                                  </h6>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="iq-media-group iq-media-group-1">
                                  <a
                                    href="#"
                                    className="relative inline-flex ml-0 rtl:mr-0 bg-no-repeat"
                                  >
                                    <div className="w-10 h-10 text-sm leading-10 text-center text-primary-500 bg-white border-2 border-primary-500 dark:bg-dark-card rounded-full hover:z-10 mr-2">
                                      PP
                                    </div>
                                  </a>
                                  <a
                                    href="#"
                                    className="relative inline-flex -ml-5 rtl:-ml-0 rtl:-mr-5 bg-no-repeat"
                                  >
                                    <div className="w-10 h-10 text-sm leading-10 text-center text-primary-500 bg-white border-2 border-primary-500 dark:bg-dark-card rounded-full hover:z-10 mr-2">
                                      TP
                                    </div>
                                  </a>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap  dark:text-secondary-500 text-secondary-600">
                                $8,500
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center mb-2">
                                  <h6 className="font-medium dark:text-white">
                                    100%
                                  </h6>
                                </div>
                                <div className="flex w-full h-1 align-middle bg-green-100 dark:bg-dark-card rounded-full shadow-inner">
                                  <div className="w-full text-xs leading-none text-center text-white bg-green-500 rounded-full"></div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gird-cols-1 lg:grid-cols-3 lg:gap-8">
                <div className="relative flex flex-col mb-8 lg:mb-0 bg-white rounded shadow-lg dark:bg-dark-card grid grid-cols-1">
                  <div className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-secondary-600">
                    <div className="relative flex flex-wrap justify-between p-5 border-b dark:border-secondary-800">
                      <h4 className="mb-0 dark:text-white">Sales Analysis</h4>
                      <div
                        className="flex items-center"
                        x-data="{ open: false }"
                      >
                        <div className="" x-data="dropdown">
                          <span className="flex items-center text-base cursor-pointer dark:text-white text-secondary-700">
                            All Tasks
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
                            className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 text-secondary-600 origin-top-right"
                            x-bind="dropdownTransition"
                            style={{ display: "none" }}
                          >
                            <a
                              className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 text-secondary-600 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                              href="javascript:void(0);"
                            >
                              This Week
                            </a>
                            <a
                              className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 text-secondary-600 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                              href="javascript:void(0);"
                            >
                              This Month
                            </a>
                            <a
                              className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 text-seconary-600 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                              href="javascript:void(0);"
                            >
                              This Year
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-auto p-5"></div>
                  </div>
                </div>
                <div className="relative flex flex-col mb-8 lg:mb-0 bg-white rounded shadow-lg dark:bg-dark-card grid grid-cols-1">
                  <div className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-white">
                    <div className="relative flex flex-wrap justify-between p-5 border-b dark:border-secondary-800">
                      <h4 className="mb-0 dark:text-white">To-Do List</h4>
                      <div
                        className="flex items-center"
                        x-data="{ open: false }"
                      >
                        <div className="" x-data="dropdown">
                          <span className="flex items-center text-secondary-700 text-base cursor-pointer">
                            All Tasks
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
                            className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 text-secondary-700 origin-top-right"
                            x-bind="dropdownTransition"
                            style={{ display: "none" }}
                          >
                            <a
                              className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 text-secondary-700  hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                              href="javascript:void(0);"
                            >
                              This Week
                            </a>
                            <a
                              className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 text-secondary-700 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                              href="javascript:void(0);"
                            >
                              This Month
                            </a>
                            <a
                              className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 text-secondary-700 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                              href="javascript:void(0);"
                            >
                              This Year
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between  mb-4">
                        <div className="w-full">
                          <div className="flex justify-between items-center -mb-2">
                            <h6 className="mb-0 dark:text-white">
                              School Dashboard
                            </h6>
                            <div
                              className="flex items-center"
                              x-data="{ open: false }"
                            >
                              <div
                                className="text-secondary-700 dark:text-white"
                                x-data="dropdown"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="w-10 h-10"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                  ></path>
                                </svg>
                                <div
                                  className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 origin-top-right"
                                  x-bind="dropdownTransition"
                                  style={{ display: "none" }}
                                >
                                  <a
                                    className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                    href="javascript:void(0);"
                                  >
                                    This Week
                                  </a>
                                  <a
                                    className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                    href="javascript:void(0);"
                                  >
                                    This Month
                                  </a>
                                  <a
                                    className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                    href="javascript:void(0);"
                                  >
                                    This Year
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center -mb-2">
                            <div className="flex w-2/5 h-1.5  align-middle bg-info-500/10 dark:bg-dark-strip rounded-full">
                              <div className="w-4/5 text-xs leading-none text-center text-white bg-success-500 rounded-full"></div>
                            </div>
                            <small className="ms-2 text-secondary-600 dark:text-white mr-3 ml-3">
                              80% completed
                            </small>
                          </div>
                          <small className="-mt-1 text-secondary-600 dark:text-white">
                            Due in 3 Days
                          </small>
                        </div>
                      </div>
                      <div className="flex justify-between  mb-4">
                        <div className="w-full">
                          <div className="flex justify-between items-center -mb-2">
                            <h6 className="mb-0 dark:text-white">
                              Fashion Theme
                            </h6>
                            <div
                              className="flex items-center"
                              x-data="{ open: false }"
                            >
                              <div
                                className="text-secondary-700 dark:text-white"
                                x-data="dropdown"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="w-10 h-10"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                  ></path>
                                </svg>
                                <div
                                  className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 origin-top-right"
                                  x-bind="dropdownTransition"
                                  style={{ display: "none" }}
                                >
                                  <a
                                    className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                    href="javascript:void(0);"
                                  >
                                    This Week
                                  </a>
                                  <a
                                    className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                    href="javascript:void(0);"
                                  >
                                    This Month
                                  </a>
                                  <a
                                    className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                    href="javascript:void(0);"
                                  >
                                    This Year
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center -mb-2">
                            <div className="flex w-2/5 h-1.5  align-middle bg-danger-500/10 dark:bg-dark-strip rounded-full">
                              <div className="w-8 text-xs leading-none text-center text-white bg-danger-500 rounded-full"></div>
                            </div>
                            <small className="ms-2 text-secondary-600 dark:text-white mr-2 ml-2">
                              15% completed
                            </small>
                          </div>
                          <small className="-mt-1 text-secondary-600 dark:text-white">
                            Due in 3 Days
                          </small>
                        </div>
                      </div>
                      <div className="flex justify-between  mb-4">
                        <div className="w-full">
                          <div className="flex justify-between items-center -mb-2">
                            <h6 className="mb-0 dark:text-white">
                              Sidebar Patterns
                            </h6>
                            <div
                              className="flex items-center"
                              x-data="{ open: false }"
                            >
                              <div
                                className="text-secondary-700 dark:text-white"
                                x-data="dropdown"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="w-10 h-10"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                  ></path>
                                </svg>
                                <div
                                  className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 origin-top-right"
                                  x-bind="dropdownTransition"
                                  style={{ display: "none" }}
                                >
                                  <a
                                    className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                    href="javascript:void(0);"
                                  >
                                    This Week
                                  </a>
                                  <a
                                    className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                    href="javascript:void(0);"
                                  >
                                    This Month
                                  </a>
                                  <a
                                    className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                    href="javascript:void(0);"
                                  >
                                    This Year
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center -mb-2">
                            <div className="flex w-2/5 h-1.5  align-middle bg-primary-500/10 dark:bg-dark-strip rounded-full">
                              <div className="w-24 text-xs leading-none text-center text-white bg-primary-500 rounded-full"></div>
                            </div>
                            <small className="ms-2 text-secondary-600 dark:text-white mr-2 ml-2">
                              50% completed
                            </small>
                          </div>
                          <small className="-mt-1 text-secondary-600 dark:text-white">
                            Due in 3 Days
                          </small>
                        </div>
                      </div>
                      <div className="flex justify-between  mb-4">
                        <div className="w-full">
                          <div className="flex justify-between items-center -mb-2">
                            <h6 className="mb-0 dark:text-white">
                              Menu Bar Update
                            </h6>
                            <div
                              className="flex items-center"
                              x-data="{ open: false }"
                            >
                              <div
                                className="text-secondary-700 dark:text-white"
                                x-data="dropdown"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="w-10 h-10"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                  ></path>
                                </svg>
                                <div
                                  className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 origin-top-right"
                                  x-bind="dropdownTransition"
                                  style={{ display: "none" }}
                                >
                                  <a
                                    className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                    href="javascript:void(0);"
                                  >
                                    This Week
                                  </a>
                                  <a
                                    className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                    href="javascript:void(0);"
                                  >
                                    This Month
                                  </a>
                                  <a
                                    className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                    href="javascript:void(0);"
                                  >
                                    This Year
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center -mb-2">
                            <div className="flex w-2/5 h-1.5  align-middle bg-secondary-500/10 dark:bg-dark-strip rounded-full">
                              <div className="w-20 text-xs leading-none text-center text-white bg-secondary-400 rounded-full"></div>
                            </div>
                            <small className="ms-2 text-secondary-600 dark:text-white mr-2 ml-2">
                              35% completed
                            </small>
                          </div>
                          <small className="-mt-1 text-secondary-600 dark:text-white">
                            Due in 3 Days
                          </small>
                        </div>
                      </div>
                      <div className="flex justify-between  mb-4">
                        <div className="w-full">
                          <div className="flex justify-between items-center -mb-2">
                            <h6 className="mb-0 dark:text-white">Blog Theme</h6>
                            <div
                              className="flex items-center"
                              x-data="{ open: false }"
                            >
                              <div
                                className="text-secondary-700 dark:text-white"
                                x-data="dropdown"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="w-10 h-10"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                  ></path>
                                </svg>
                                <div
                                  className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 origin-top-right"
                                  x-bind="dropdownTransition"
                                  style={{ display: "none" }}
                                >
                                  <a
                                    className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                    href="javascript:void(0);"
                                  >
                                    This Week
                                  </a>
                                  <a
                                    className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                    href="javascript:void(0);"
                                  >
                                    This Month
                                  </a>
                                  <a
                                    className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group"
                                    href="javascript:void(0);"
                                  >
                                    This Year
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center -mb-2">
                            <div className="flex w-2/5 h-1.5  align-middle bg-info-500/10 dark:bg-dark-strip rounded-full">
                              <div className="w-full text-xs leading-none text-center text-white bg-success-500 rounded-full"></div>
                            </div>
                            <small className="ms-2 text-secondary-600 dark:text-white mr-2 ml-2">
                              100% completed
                            </small>
                          </div>
                          <small className="-mt-1 text-secondary-600 dark:text-white">
                            Due in 3 Days
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col  lg:mb-0  bg-white rounded shadow-lg dark:bg-dark-card grid grid-cols-1">
                  <div className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-white">
                    <div className="relative flex flex-wrap justify-between p-5 border-b dark:border-secondary-800">
                      <h4 className="mb-0 dark:text-white">
                        Activity Overview
                      </h4>
                    </div>
                    <div className="flex-auto p-5">
                      <p className="mb-6 text-success-500 dark:text-success-500 LR">
                        <svg
                          className="inline-block mr-2 rtl:mr-0 rtl:ml-2"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#17904b"
                            d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"
                          ></path>
                        </svg>
                        16% this month
                      </p>
                      <div className="flex">
                        <div className="">
                          <span className="mb-0 text-black dark:text-white mr-3 rtl:ml-3">
                            07:45
                          </span>
                        </div>
                        <div className="relative justify-between flex pb-6 items-top">
                          <div>
                            <div className="border border-r rtl:border-l rtl:right-3 rtl:left-0 bg-secondary-100 h-3/5 w-px absolute dark:border-secondary-700 left-3 top-5 z-10"></div>
                            <div className="w-5 h-5  rtl:right-0 bg-white border-2 border-success-500 dark:bg-dark-card rounded-full z-10"></div>
                          </div>
                          <div className="ml-4 rtl:mr-4 LR">
                            <h6 className=" font-medium dark:text-white mb-0">
                              $2400, Purchased a Wordpress Theme
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="">
                          <span className="mb-0 text-black dark:text-white mr-3 rtl:ml-3">
                            08:50
                          </span>
                        </div>
                        <div className="relative justify-between flex pb-6 items-top">
                          <div>
                            <div className="border border-r rtl:border-l rtl:right-3 rtl:left-0 bg-secondary-100 h-3/5 w-px absolute dark:border-secondary-700 left-3 top-5 z-10"></div>
                            <div className="w-5 h-5  rtl:right-0 bg-white border-2 border-warning-500 dark:bg-dark-card rounded-full z-10"></div>
                          </div>
                          <div className="ml-4 rtl:mr-4 LR">
                            <h6 className=" font-medium dark:text-white mb-0">
                              New order placed #8744152 of 3D Icons
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="">
                          <span className="mb-0 text-black dark:text-white mr-3 rtl:ml-3">
                            10:00
                          </span>
                        </div>
                        <div className="relative justify-between flex pb-8 items-top">
                          <div>
                            <div className="border border-r rtl:border-l rtl:right-3 rtl:left-0 bg-secondary-100 h-3/5 w-px absolute dark:border-secondary-700 left-3 top-5 z-10"></div>
                            <div className="w-5 h-5  rtl:right-0 bg-white border-2 border-info-500 dark:bg-dark-card rounded-full z-10"></div>
                          </div>
                          <div className="ml-4 rtl:mr-4 LR">
                            <h6 className=" font-medium dark:text-white mb-0">
                              Affilate Payout
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="">
                          <span className="mb-0 text-black dark:text-white mr-3 rtl:ml-3">
                            13:15
                          </span>
                        </div>
                        <div className="relative justify-between flex pb-8 items-top">
                          <div>
                            <div className="border border-r rtl:border-l rtl:right-3 rtl:left-0 bg-secondary-100 h-3/5 w-px absolute dark:border-secondary-700 left-3 top-5 z-10"></div>
                            <div className="w-5 h-5  rtl:right-0 bg-white border-2 border-black dark:bg-dark-card rounded-full z-10"></div>
                          </div>
                          <div className="ml-4 rtl:mr-4 LR">
                            <h6 className=" font-medium dark:text-white mb-0">
                              New user added in Qompac UI
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="">
                          <span className="mb-0 text-black dark:text-white mr-3 rtl:ml-3">
                            15:30
                          </span>
                        </div>
                        <div className="relative justify-between flex pb-8 items-top">
                          <div>
                            <div className="border border-r rtl:border-l rtl:right-3 rtl:left-0 bg-secondary-100 h-3/5 w-px absolute dark:border-secondary-700 left-3 top-5 z-10"></div>
                            <div className="w-5 h-5  rtl:right-0 bg-white border-2 border-success-500 dark:bg-dark-card rounded-full z-10"></div>
                          </div>
                          <div className="ml-4 rtl:mr-4 LR">
                            <h6 className=" font-medium dark:text-white mb-0">
                              $Product added in Wish List
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="">
                          <span className="mb-0 text-black dark:text-white mr-3 rtl:ml-3">
                            18:40
                          </span>
                        </div>
                        <div className="relative justify-between flex pb-8 items-top">
                          <div>
                            <div className="border border-r rtl:border-l rtl:right-3 rtl:left-0 bg-secondary-100 h-3/5 w-px absolute dark:border-secondary-700 left-3 top-5 z-10"></div>
                            <div className="w-5 h-5  rtl:right-0 bg-white border-2 border-warning-500 dark:bg-dark-card rounded-full z-10"></div>
                          </div>
                          <div className="ml-4 rtl:mr-4 LR">
                            <h6 className=" font-medium dark:text-white mb-0">
                              New order Placed #87444892 of Dashboard
                            </h6>
                          </div>
                        </div>
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

export default AdminDashboard;
