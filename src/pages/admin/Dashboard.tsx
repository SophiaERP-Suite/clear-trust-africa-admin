import '../../assets2/css/choices.min.css';
import '../../assets2/css/flatpickr.min.css';
import '../../assets2/css/libs.min.css';
import '../../assets2/css/quill.snow.css';
import '../../assets2/css/responsive.css';
import '../../assets2/css/sheperd.css';
import '../../assets2/css/sweetalert2.min.css';
import '../../assets2/css/tailwind.css';
import '../../assets2/css/uppy.min.css';
import '../../assets2/js/choice.js';
import '../../assets2/js/choices.min.js';
import '../../assets2/js/dashboard.js';
import '../../assets2/js/fslightbox.js';
import '../../assets2/js/libs.min.js';
import '../../assets2/js/slider-tabs.js';
import '../../assets2/js/sweet-alert.js';
import '../../assets2/js/swiper-slider.js';

function AdminDashboard() {
  return (
    <>
        <aside style={{ display: "none" }}
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

            <div  className="relative">
                <nav  className="z-40 bg-white dark:bg-dark-card nav shadow-lg navbar navbar-expand-xl navbar-light iq-navbar py-0" x-data="{ selected: null }" x-bind:className="setting.header_navbar">
                    <div className="w-full px-7 py-2">
                        <div className="relative">
                            {/* Mobile menu button */}
                            <div className="absolute flex items-center px-2 py-1 text-xl border border-secondary-500 rounded lg:hidden right-0" x-bind:className="setting.theme_scheme_direction == 'ltr' ? 'right-0' : 'left-0'">
                                <button type="button" className="inline-flex items-center justify-center text-xl text-secondary-500 rounded">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="block w-8 h-8" id="mobileicon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                    <svg className="hidden w-6 h-6" id="cancel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="gray">
                                        <path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"></path>
                                    </svg>
                                </button>
                            </div>

                            <div className="flex">
                                <div className="flex items-center xl:hidden gap-2 display-none">
                                    <div className="btn btn-primary btn-icon btn-sm rounded-full" data-toggle="sidebar" x-on:click="sidebarMini" data-active="true">
                                        <span className="btn-inner">
                                            <svg width="20px" height="20px" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <a href="../dashboard/index.html" className="flex items-center whitespace-nowrap gap-4">
                                        {/* Logo start */}
                                        <svg width="30" className="text-primary-500 dark:text-primary-500 brand-logo" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.25333 2H22.0444L29.7244 15.2103L22.0444 28.1333H7.25333L0 15.2103L7.25333 2ZM11.2356 9.32316H18.0622L21.3334 15.2103L18.0622 20.9539H11.2356L8.10669 15.2103L11.2356 9.32316Z" fill="currentColor"></path>
                                            <path d="M23.751 30L13.2266 15.2103H21.4755L31.9999 30H23.751Z" fill="#3FF0B9"></path>
                                        </svg>
                                        {/* logo End */}
                                        <h4 className="mb-0" data-setting="app_name" x-text="setting.app_name">Qompac UI</h4>
                                    </a>
                                </div>

                                <div className="breadcrumb-title xl:flex sm:hidden justify-center items-center lg:flex ml-2">
                                    <small className="capitalize hidden md:block mr-3 pr-3 border-r border-secondary-300 dark:border-secondary-700 dark:text-white">Home</small>
                                </div>

                                <div className="offcanvas-body">
                                    <ul className="iq-nav-menu header-menu w-full lg:w-auto list-unstyled ml-2 rtl:mr-2 rtl:ml-0">
                                        <li className="nav-item active">
                                            <a className="menu-arrow justify-start text-secondary-600" href="javascript:void(0)" aria-controls="homeData">
                                                <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.14373 20.7821V17.7152C9.14372 16.9381 9.77567 16.3067 10.5584 16.3018H13.4326C14.2189 16.3018 14.8563 16.9346 14.8563 17.7152V20.7732C14.8562 21.4473 15.404 21.9951 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0007C21.1356 20.3586 21.5 19.4868 21.5 18.5775V9.86585C21.5 9.13139 21.1721 8.43471 20.6046 7.9635L13.943 2.67427C12.7785 1.74912 11.1154 1.77901 9.98539 2.74538L3.46701 7.9635C2.87274 8.42082 2.51755 9.11956 2.5 9.86585V18.5686C2.5 20.4637 4.04738 22 5.95617 22H7.87229C8.19917 22.0023 8.51349 21.8751 8.74547 21.6464C8.97746 21.4178 9.10793 21.1067 9.10792 20.7821H9.14373Z" fill="currentColor"></path>
                                                </svg>
                                                <span className="nav-text ml-2 rtl:ml-0 rtl:mr-2">Home</span>
                                            </a>
                                            <ul className="iq-header-sub-menu list-unstyled" id="homeData">
                                                <li className="nav-item"><a className="nav-link active" href="../dashboard/index.html">Dashboard</a></li>
                                                <li className="nav-item"><a className="nav-link" href="../dashboard/analytics.html">Analytics</a></li>
                                                <li className="nav-item"><a className="nav-link" href="../dashboard/crypto.html">Crypto</a></li>
                                                <li className="nav-item">
                                                    <a className="nav-link menu-arrow" href="#menuStyles" aria-controls="menuStyles">
                                                        Menu Style
                                                        <i className="right-icon">
                                                            <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </i>
                                                    </a>
                                                    <ul className="iq-header-sub-menu left list-unstyled" id="menuStyles">
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/index-horizontal.html">Horizontal Dashboard</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/index-dual-compact.html">Dual Compact</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/index-boxed.html">Boxed Horizontal</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link menu-arrow justify-start text-secondary-600" href="javascript:void(0)" aria-controls="allPagesData">
                                                <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2" fill="currentColor"></path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.07999 6.64999V6.65999C7.64899 6.65999 7.29999 7.00999 7.29999 7.43999C7.29999 7.86999 7.64899 8.21999 8.07999 8.21999H11.069C11.5 8.21999 11.85 7.86999 11.85 7.42899C11.85 6.99999 11.5 6.64999 11.069 6.64999H8.07999ZM15.92 12.74H8.07999C7.64899 12.74 7.29999 12.39 7.29999 11.96C7.29999 11.53 7.64899 11.179 8.07999 11.179H15.92C16.35 11.179 16.7 11.53 16.7 11.96C16.7 12.39 16.35 12.74 15.92 12.74ZM15.92 17.31H8.07999C7.77999 17.35 7.48999 17.2 7.32999 16.95C7.16999 16.69 7.16999 16.36 7.32999 16.11C7.48999 15.85 7.77999 15.71 8.07999 15.74H15.92C16.319 15.78 16.62 16.12 16.62 16.53C16.62 16.929 16.319 17.27 15.92 17.31Z" fill="currentColor"></path>
                                                </svg>
                                                <span className="nav-text ml-2 rtl:ml-0 rtl:mr-2">Pages</span>
                                            </a>
                                            <ul className="iq-header-sub-menu list-unstyled" id="allPagesData">
                                                <li className="nav-item">
                                                    <a className="nav-link menu-arrow" href="#specialPages" aria-controls="specialPages">
                                                        Special Pages
                                                        <i className="right-icon">
                                                            <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </i>
                                                    </a>
                                                    <ul className="iq-header-sub-menu left list-unstyled" id="specialPages">
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/special-pages/billing.html">Billing</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/special-pages/calender.html">Calender</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/special-pages/kanban.html">Kanban</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/special-pages/pricing.html">Pricing</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/special-pages/timeline.html">Timeline</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link menu-arrow" href="#authSkins" aria-controls="authSkins">
                                                        Auth skins
                                                        <i className="right-icon">
                                                            <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </i>
                                                    </a>
                                                    <ul className="iq-header-sub-menu left list-unstyled" id="authSkins">
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/auth/sign-in.html">Sign In</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/auth/sign-up.html">Sign Up</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/auth/confirm-mail.html">Email Verified</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/auth/recoverpw.html">Reset Password</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/auth/lock-screen.html">Lock Screen</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/auth/two-factors.html">Two Factors</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/auth/deactivate.html">Account Deactivate</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link menu-arrow" href="#userApps" aria-controls="userApps">
                                                        User
                                                        <i className="right-icon">
                                                            <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </i>
                                                    </a>
                                                    <ul className="iq-header-sub-menu left list-unstyled" id="userApps">
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/app/user-profile.html">User Profile</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/app/user-add.html">User Add</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/app/user-list.html">User List</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link menu-arrow" href="#utilities" aria-controls="utilities">
                                                        Utilities
                                                        <i className="right-icon">
                                                            <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </i>
                                                    </a>
                                                    <ul className="iq-header-sub-menu left list-unstyled" id="utilities">
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/errors/maintenance.html">Maintenance</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/errors/error404.html">404</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/errors/error500.html">505</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link menu-arrow" href="#extraPlugins" aria-controls="extraPlugins">
                                                        Plugins
                                                        <i className="right-icon">
                                                            <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </i>
                                                    </a>
                                                    <ul className="iq-header-sub-menu left list-unstyled" id="extraPlugins">
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/plugins/button-hover.html">Button Hover</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/plugins/choise-js.html">Choise JS</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/plugins/fslightbox.html">FSlightbox</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/plugins/sweet-alert.html">Sweetalert</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/plugins/flatpickr.html">flatpickr</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/plugins/apexcharts.html">Apexcharts</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/plugins/gallery-hover.html">Gallery Hover</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/plugins/loader.html">Loader</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/plugins/quill-editor.html">Quill</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/plugins/uppy.html">Uppy</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link menu-arrow justify-start text-secondary-600" href="javascript:void(0)" aria-controls="elementsData">
                                                <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.4" d="M11.9912 18.6215L5.49945 21.8641C5.00921 22.1302 4.39768 21.9525 4.12348 21.4643C4.0434 21.3108 4.00106 21.1402 4 20.9668V13.7088C4 14.4284 4.40573 14.8726 5.47299 15.3701L11.9912 18.6215Z" fill="currentColor"></path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.89526 2H15.0695C17.7773 2 19.9735 3.06605 20 5.79337V20.9668C19.9989 21.1374 19.9565 21.3051 19.8765 21.4554C19.7479 21.7007 19.5259 21.8827 19.2615 21.9598C18.997 22.0368 18.7128 22.0023 18.4741 21.8641L11.9912 18.6215L5.47299 15.3701C4.40573 14.8726 4 14.4284 4 13.7088V5.79337C4 3.06605 6.19625 2 8.89526 2ZM8.22492 9.62227H15.7486C16.1822 9.62227 16.5336 9.26828 16.5336 8.83162C16.5336 8.39495 16.1822 8.04096 15.7486 8.04096H8.22492C7.79137 8.04096 7.43991 8.39495 7.43991 8.83162C7.43991 9.26828 7.79137 9.62227 8.22492 9.62227Z" fill="currentColor"></path>
                                                </svg>
                                                <span className="nav-text ml-2 rtl:ml-0 rtl:mr-2">Elements</span>
                                            </a>
                                            <ul className="iq-header-sub-menu list-unstyled" id="elementsData">
                                                <li className="nav-item">
                                                    <a className="nav-link menu-arrow" href="#widgetsPage" aria-controls="widgetsPage">
                                                        <i className="right-icon">
                                                            <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </i>
                                                    </a>
                                                    <ul className="iq-header-sub-menu left list-unstyled" id="widgetsPage">
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/ui-elements/alerts.html">Alert</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/ui-elements/badges.html">Badges</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/ui-elements/offcanvas.html">Offcanvas</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/ui-elements/notification.html">Notification</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/ui-elements/list-group.html">List group</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/ui-elements/card.html">Card</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/ui-elements/video.html">Video</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/ui-elements/buttons-group.html">Button Group</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/ui-elements/breadcrumb.html">Breadcrumb</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/ui-elements/buttons.html">Buttons</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/ui-elements/pagination.html">Pagination</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/ui-elements/popovers.html">Popovers</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/ui-elements/tabpans.html">Tabpans</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/ui-elements/tooltips.html">Tooltips</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link menu-arrow" href="#widgetsPage2" aria-controls="widgetsPage2">
                                                        <i className="right-icon">
                                                            <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </i>
                                                    </a>
                                                    <ul className="iq-header-sub-menu left list-unstyled" id="widgetsPage2">
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/widget/widgetbasic.html">Widget Basic</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/widget/widgetchart.html">Widget Chart</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/widget/widgetcard.html">Widget Card</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link menu-arrow" href="#mapPages" aria-controls="mapPages">
                                                        Map
                                                        <i className="right-icon">
                                                            <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </i>
                                                    </a>
                                                    <ul className="iq-header-sub-menu left list-unstyled" id="mapPages">
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/map/google.html">Google</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/map/vector.html">Vector</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link menu-arrow" href="#formsPages" aria-controls="formsPages">
                                                        Form
                                                        <i className="right-icon">
                                                            <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </i>
                                                    </a>
                                                    <ul className="iq-header-sub-menu left list-unstyled" id="formsPages">
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/form/form-element.html">Element</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/form/form-wizard.html">Wizard</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/form/form-validation.html">Validation</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link menu-arrow" href="#tablesPages" aria-controls="tablesPages">
                                                        Table
                                                        <i className="right-icon">
                                                            <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            </svg>
                                                        </i>
                                                    </a>
                                                    <ul className="iq-header-sub-menu left list-unstyled" id="tablesPages">
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/table/data-table.html">Tailwind Table</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/table/bordered-table.html">Data Table</a></li>
                                                        <li className="nav-item"><a className="nav-link" href="../dashboard/table/fancy-table.html">Fancy Table</a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <a  className="nav-link menu-arrow" href="#iconsPages" aria-controls="iconsPages">
                                                            Icons
                                                        <i  className="right-icon">
                                                            <svg  className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M8.5 5L15.5 12L8.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </i>
                                                    </a>
                                                    <ul  className="iq-header-sub-menu left list-unstyled" id="iconsPages">
                                                        <li  className="nav-item"><a  className="nav-link " href="../dashboard/icon/solid.html">Solid</a></li>
                                                        <li  className="nav-item"><a  className="nav-link " href="../dashboard/icon/outlined.html">Outlined</a></li>
                                                        <li  className="nav-item"><a  className="nav-link " href="../dashboard/icon/dual-tone.html">Dual Tone</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
            
                                <div className="hidden lg:flex lg:flex-grow transition-all duration-700 ease-in-out">
                                    <ul  className="flex items-center mb-2 ml-auto rtl:ml-0 rtl:mr-auto lg:mb-0">
                                        <li  className="flex items-center pl-2" x-data="{ open: false }">
                                            <a href="#"  className="block p-2 group hover:text-primary-500 focusa text-secondary-600">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                                                    <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"></path>
                                                </svg>
                                            </a>
                                            <div x-show="open"  className="absolute z-40 rounded top-14 shadow w-80" x-transition:enter="transition ease-in duration-500" x-transition:enter-start="opacity-0 transform translate-y-16" x-transition:enter-end="opacity-100 transform translate-y-0" x-transition:leave="transition ease-out duration-500" x-transition:leave-start="opacity-100 transform translate-y-0" x-transition:leave-end="opacity-0 transform translate-y-0" style={{ display: 'none'}}>
                                                <div  className="bg-white dark:bg-dark-card shadow-lg  dark:text-secondary-600 ">
                                                    <div  className=" px-5 py-3  rounded-t">
                                                        <a href="#"  className="nav-link show" id="search-drop" data-bs-toggle="dropdown" aria-expanded="true">
                                                            <input type="text"  className="text-black w-full search-input form-control bg-primary-500/[0.1]" placeholder="Search here..." data-ms-editor="true"/>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a href="#"  className="flex justify-between w-full px-5  py-1 border-t border-b dark:border-secondary-700  group">
                                                            <div  className="flex items-center">
                                                                <div>
                                                                    <img className="w-14 h-14 p-1 text-primary-400  rounded-full dark:bg-primary-800 " src="../assets/images/avatar/01.png"/>
                                                                </div>
                                                                <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                                    <h5  className="mb-0  text-secondary-600 text-lg">Paige Turner</h5>
                                                                    <small  className="LR text-lg text-secondary-600 dark:text-secondary-600">paige001</small>
                                                                </div>
                
                                                            </div>
                
                                                        </a>
                                                        <a href="#"  className="flex justify-between w-full px-5 py-1 border-b dark:border-secondary-700  group">
                                                            <div  className="flex items-center">
                                                                <div>
                                                                    <img  className="w-14 h-14 p-1 text-primary-400  rounded-full dark:bg-primary-800 " src="../assets/images/avatar/02.png"/>
                                                                </div>
                                                                <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                                    <h5  className="mb-0  text-secondary-600 text-lg">Monty Carlo</h5>
                                                                    <small  className="text-lg text-secondary-600 dark:text-secondary-600">Carlo.m</small>
                                                                </div>
                                                            </div>
                
                                                        </a>
                                                        <a href="#"  className="flex justify-between w-full px-5 py-1 border-b dark:border-secondary-700  group">
                                                            <div  className="flex items-center">
                                                                <div>
                                                                    <img className="w-14 h-14 p-1 text-primary-400  rounded-full dark:bg-primary-800 " src="../assets/images/avatar/03.png"/>
                                                                </div>
                                                                <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                                    <h5  className="mb-0  text-secondary-600 text-lg">Paul Molive</h5>
                                                                    <small  className="text-lg text-secondary-600 dark:text-secondary-600">Paul45</small>
                                                                </div>
                                                            </div>
                
                                                        </a>
                                                        <a href="#"  className="flex justify-between w-full px-5 py-1 border-b dark:border-secondary-700  group">
                                                            <div  className="flex items-center">
                                                                <div>
                                                                    <img className="w-14 h-14 p-1 text-primary-400  rounded-full dark:bg-primary-800 " src="../assets/images/avatar/04.png"/>
                                                                </div>
                                                                <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                                    <h5  className="mb-0  text-lg text-secondary-600">Monty Carlo</h5>
                                                                    <small  className="text-lg text-secondary-600 dark:text-secondary-600">Carlo.m</small>
                                                                </div>
                                                            </div>
                
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li  className="flex items-center pl-2" x-data="{ open: false }">
                                            <a href="#"  className="block p-2 hover:text-primary-500 focusa text-secondary-600" id="mode-drop">
                                                <svg  className="icon-24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802">
                                                    </path>
                                                </svg>
                                            </a>
                                            <div x-show="open"  className="absolute z-40 drop-shadow-lg rounded top-14 w-40 " x-transition:enter="transition ease-in duration-500" x-transition:enter-start="opacity-0 transform translate-y-16" x-transition:enter-end="opacity-100 transform translate-y-0" x-transition:leave="transition ease-out duration-500" x-transition:leave-start="opacity-100 transform translate-y-0" x-transition:leave-end="opacity-0 transform translate-y-0" style={{ display: 'none'}}>
                                                <div  className="bg-white dark:bg-dark-card shadow-lg rounded p-2 dark:text-secondary-600 ">
                                                    <a href="#"  className="flex justify-between w-full py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group">
                                                        <input type="radio" value="ltr"  className="hidden" name="theme_scheme_direction" id="ltr" x-model="setting.theme_scheme_direction"/>
                                                        <label  className="flex items-center pl-4" htmlFor="ltr">
                                                            <div>
                                                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M18.9702 19.757L15.3502 5.27201C15.1884 4.62224 14.8136 4.04541 14.2856 3.63359C13.7576 3.22177 13.1068 2.99871 12.4372 3.00001H11.5602C10.8911 2.99938 10.2411 3.22275 9.71368 3.63452C9.18629 4.04628 8.81191 4.62274 8.65022 5.27201L5.03022 19.757C4.9679 20.0135 5.00954 20.2843 5.14605 20.5102C5.28257 20.7362 5.50288 20.899 5.75895 20.9631C6.01502 21.0273 6.28606 20.9875 6.51297 20.8527C6.73988 20.7178 6.90424 20.4986 6.97022 20.243L8.28022 15H15.7202L17.0302 20.243C17.0962 20.4986 17.2606 20.7178 17.4875 20.8527C17.7144 20.9875 17.9854 21.0273 18.2415 20.9631C18.4976 20.899 18.7179 20.7362 18.8544 20.5102C18.9909 20.2843 19.0325 20.0135 18.9702 19.757V19.757ZM8.78022 13L10.5912 5.75801C10.6449 5.5414 10.7696 5.34903 10.9454 5.21163C11.1213 5.07423 11.3381 4.99972 11.5612 5.00001H12.4392C12.6624 4.99972 12.8792 5.07423 13.055 5.21163C13.2308 5.34903 13.3556 5.5414 13.4092 5.75801L15.2192 13H8.78022Z" fill="currentColor"></path>
                                                                </svg>
                                                            </div>
                                                            <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                                <h6  className="mb-0 text-secondary-500 font-medium">LTR</h6>
                                                            </div>
                                                        </label>
                                                    </a>
                                                    <a href="#"  className="flex justify-between w-full py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group">
                                                        <input type="radio" value="rtl"  className="hidden" name="theme_scheme_direction" id="rtl" x-model="setting.theme_scheme_direction"/>
                                                        <label  className="flex items-center pl-4" htmlFor="rtl">
                                                            <div>
                                                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M12 4C10.08 4 8.5 5.58 8.5 7.5C8.5 8.43 8.88 9.28 9.5 9.91C7.97 10.91 7 12.62 7 14.5C7 17.53 9.47 20 12.5 20C14.26 20 16 19.54 17.5 18.66L16.5 16.93C15.28 17.63 13.9 18 12.5 18C10.56 18 9 16.45 9 14.5C8.99823 13.7298 9.2513 12.9806 9.71978 12.3692C10.1883 11.7578 10.8458 11.3186 11.59 11.12L16.8 9.72L16.28 7.79L11.83 9C11.08 8.9 10.5 8.28 10.5 7.5C10.5 6.66 11.16 6 12 6C12.26 6 12.5 6.07 12.75 6.2L13.75 4.47C13.22 4.16 12.61 4 12 4Z" fill="currentColor"></path>
                                                                </svg>
                                                            </div>
                                                            <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                                <h6  className="mb-0 text-secondary-500 font-medium">RTL</h6>
                                                            </div>
                                                        </label>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li  className="flex items-center pl-2" x-data="{ open: false }">
                                            <a href="#"  className="block p-2 group hover:text-primary-500 focusa text-secondary-600">
                                                <svg  className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.7695 11.6453C19.039 10.7923 18.7071 10.0531 18.7071 8.79716V8.37013C18.7071 6.73354 18.3304 5.67907 17.5115 4.62459C16.2493 2.98699 14.1244 2 12.0442 2H11.9558C9.91935 2 7.86106 2.94167 6.577 4.5128C5.71333 5.58842 5.29293 6.68822 5.29293 8.37013V8.79716C5.29293 10.0531 4.98284 10.7923 4.23049 11.6453C3.67691 12.2738 3.5 13.0815 3.5 13.9557C3.5 14.8309 3.78723 15.6598 4.36367 16.3336C5.11602 17.1413 6.17846 17.6569 7.26375 17.7466C8.83505 17.9258 10.4063 17.9933 12.0005 17.9933C13.5937 17.9933 15.165 17.8805 16.7372 17.7466C17.8215 17.6569 18.884 17.1413 19.6363 16.3336C20.2118 15.6598 20.5 14.8309 20.5 13.9557C20.5 13.0815 20.3231 12.2738 19.7695 11.6453Z" fill="currentColor"></path>
                                                    <path opacity="0.4" d="M14.0088 19.2283C13.5088 19.1215 10.4627 19.1215 9.96275 19.2283C9.53539 19.327 9.07324 19.5566 9.07324 20.0602C9.09809 20.5406 9.37935 20.9646 9.76895 21.2335L9.76795 21.2345C10.2718 21.6273 10.8632 21.877 11.4824 21.9667C11.8123 22.012 12.1482 22.01 12.4901 21.9667C13.1083 21.877 13.6997 21.6273 14.2036 21.2345L14.2026 21.2335C14.5922 20.9646 14.8734 20.5406 14.8983 20.0602C14.8983 19.5566 14.4361 19.327 14.0088 19.2283Z" fill="currentColor"></path>
                                                </svg>
                                            </a>
                                            <div x-show="open"  className="absolute z-40 rtl:right-2/3 rounded top-14 shadow w-80" x-transition:enter="transition ease-in duration-500" x-transition:enter-start="opacity-0 transform translate-y-16" x-transition:enter-end="opacity-100 transform translate-y-0" x-transition:leave="transition ease-out duration-500" x-transition:leave-start="opacity-100 transform translate-y-0" x-transition:leave-end="opacity-0 transform translate-y-0" style={{ display: 'none'}}>
                                                <div  className="bg-white dark:bg-dark-card shadow-lg rounded-t-lg rounded-b-lg dark:text-secondary-600 ">
                                                    <div  className="flex px-5 py-3 bg-primary-500 rounded-t">
                                                        <h5  className="text-xl font-medium text-white">All Notifications</h5>
                                                    </div>
                                                    <div>
                                                        <a href="#"  className="flex justify-between w-full px-5 py-3 border-b dark:border-secondary-700 hover:bg-primary-500/[0.1] group">
                                                            <div  className="flex items-center">
                                                                <div>
                                                                    <img  className="w-10 h-10 p-1 text-primary-400 bg-primary-500/10 rounded-full dark:bg-primary-500/10" src="../assets/images/shapes/01.png"/>
                                                                </div>
                                                                <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                                    <h6  className="mb-0 text-black font-medium">Emma Watson Bni</h6>
                                                                    <small  className="LR text-sm text-secondary-600 dark:text-secondary-600">95
                                                                        MB</small>
                                                                </div>
                
                                                            </div>
                                                            <div  className="flex items-end"><small  className="RL text-sm text-secondary-600 dark:text-secondary-600 ">Just
                                                                    Now</small></div>
                                                        </a>
                                                        <a href="#"  className="flex justify-between w-full px-5 py-3 border-b dark:border-secondary-700 hover:bg-primary-500/[0.1] group">
                                                            <div  className="flex items-center">
                                                                <div>
                                                                    <img  className="w-10 h-10 p-1 text-primary-400 bg-primary-500/10 rounded-full dark:bg-primary-500/10" src="../assets/images/shapes/02.png"/>
                                                                </div>
                                                                <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                                    <h6  className="mb-0 text-black font-medium">New customer is join</h6>
                                                                    <small  className="text-sm text-secondary-600 dark:text-secondary-600">Cyst
                                                                        Bni</small>
                                                                </div>
                                                            </div>
                                                            <div  className="flex items-end"><small  className="RL text-sm text-secondary-600 dark:text-secondary-600 ">5
                                                                    days ago</small></div>
                                                        </a>
                                                        <a href="#"  className="flex justify-between w-full px-5 py-3 border-b dark:border-secondary-700 hover:bg-primary-500/[0.1] group">
                                                            <div  className="flex items-center">
                                                                <div>
                                                                    <img  className="w-10 h-10 p-1 text-primary-400 bg-primary-500/10 rounded-full dark:bg-primary-500/10" src="../assets/images/shapes/03.png"/>
                                                                </div>
                                                                <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                                    <h6  className="mb-0 text-black font-medium">Two customer is left</h6>
                                                                    <small  className="text-sm text-secondary-600 dark:text-secondary-600">Cyst
                                                                        Bni</small>
                                                                </div>
                                                            </div>
                                                            <div  className="flex items-end"><small  className="RL text-sm text-secondary-600 dark:text-secondary-600 ">2
                                                                    days ago</small></div>
                                                        </a>
                                                        <a href="#"  className="flex justify-between w-full px-5 py-3 border-b dark:border-secondary-700 hover:bg-primary-500/[0.1] group">
                                                            <div  className="flex items-center">
                                                                <div>
                                                                    <img  className="w-10 h-10 p-1 text-primary-400 bg-primary-500/10 rounded-full dark:bg-primary-500/10" src="../assets/images/shapes/04.png"/>
                                                                </div>
                                                                <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                                    <h6  className="mb-0 text-black font-medium">New Mail from Fenny</h6>
                                                                    <small  className="text-sm text-secondary-600 dark:text-secondary-600">Cyst
                                                                        Bni</small>
                                                                </div>
                                                            </div>
                                                            <div  className="flex items-end"><small  className="RL text-sm text-secondary-600 dark:text-secondary-600 ">3
                                                                    days ago</small></div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li  className="flex items-center pl-2" x-data="{ open: false }">
                                            <a href="#"  className="block p-2 hover:text-primary-500 focusa text-secondary-600" id="mode-drop">
                                                <svg  className="icon-24 color-secondary" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z" fill="currentColor"></path>
                                                    <path d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z" fill="currentColor"></path>
                                                    <path d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z" fill="currentColor"></path>
                                                    <path d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z" fill="currentColor"></path>
                                                    <path d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z" fill="currentColor"></path>
                                                    <path d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z" fill="currentColor"></path>
                                                    <path d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z" fill="currentColor"></path>
                                                    <path d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z" fill="currentColor"></path>
                                                    <path d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z" fill="currentColor"></path>
                                                </svg>
                                            </a>
                                            <div x-show="open"  className="absolute z-40 drop-shadow-lg  top-14 w-40 " x-transition:enter="transition ease-in duration-500" x-transition:enter-start="opacity-0 transform translate-y-16" x-transition:enter-end="opacity-100 transform translate-y-0" x-transition:leave="transition ease-out duration-500" x-transition:leave-start="opacity-100 transform translate-y-0" x-transition:leave-end="opacity-0 transform translate-y-0" style={{ display: 'none'}}>
                                                <div  className="bg-white dark:bg-dark-bg shadow-lg p-2 rounded dark:text-white">
                                                    <a href="#"  className="flex justify-between w-full  py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300  dark:text-white dark:hover-text-primary-500 group">
                                                        <input type="radio" value="light"  className="hidden" name="theme_scheme" id="light-theme" x-model="setting.theme_scheme"/>
                                                        <label  className="flex items-center mb-0 ml-2" htmlFor="light-theme">
                                                            <div>
                                                                <svg  className="icon-24" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z" fill="currentColor"></path>
                                                                    <path d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z" fill="currentColor"></path>
                                                                    <path d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z" fill="currentColor"></path>
                                                                    <path d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z" fill="currentColor"></path>
                                                                    <path d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z" fill="currentColor"></path>
                                                                    <path d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z" fill="currentColor"></path>
                                                                    <path d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z" fill="currentColor"></path>
                                                                    <path d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z" fill="currentColor"></path>
                                                                    <path d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z" fill="currentColor"></path>
                                                                </svg>
                                                            </div>
                                                            <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                                <div  className="align-middle">
                                                                    <h6  className="pl-2 mb-0">Light</h6>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </a>
                                                    <a href="#"  className="flex justify-between w-full  py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 dark:text-white dark:hover-text-primary-500 group">
                                                        <input type="radio" value="dark"  className="hidden" name="theme_scheme" id="dark-theme" x-model="setting.theme_scheme"/>
                                                        <label  className="flex items-center mb-0 ml-2" htmlFor="dark-theme">
                                                            <div>
                                                                <svg  className="icon-24" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z" fill="currentColor"></path>
                                                                    <path d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z" fill="currentColor"></path>
                                                                    <path d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z" fill="currentColor"></path>
                                                                    <path d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z" fill="currentColor"></path>
                                                                </svg>
                                                            </div>
                                                            <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                                <h6  className="pl-2 mb-0">Dark</h6>
                                                            </div>
                                                        </label>
                                                    </a>
                                                    <a href="#"  className="flex justify-between w-full  py-1  hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 dark:text-white dark:hover-text-primary-500 group">
                                                        <input type="radio" value="auto"  className="hidden" name="theme_scheme" id="auto-theme" x-model="setting.theme_scheme"/>
                                                        <label  className="flex items-center mb-0 ml-2" htmlFor="auto-theme">
                                                            <div>
                                                                <svg  className="icon-24" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.34375 3.9463V15.2178C1.34375 16.119 2.08105 16.8563 2.98219 16.8563H8.65093V19.4594H6.15702C5.38853 19.4594 4.75981 19.9617 4.75981 20.5757V21.6921H19.2403V20.5757C19.2403 19.9617 18.6116 19.4594 17.8431 19.4594H15.3492V16.8563H21.0179C21.919 16.8563 22.6562 16.119 22.6562 15.2178V3.9463C22.6562 3.04516 21.9189 2.30786 21.0179 2.30786H2.98219C2.08105 2.30786 1.34375 3.04516 1.34375 3.9463ZM12.9034 9.9016C13.241 9.98792 13.5597 10.1216 13.852 10.2949L15.0393 9.4353L15.9893 10.3853L15.1297 11.5727C15.303 11.865 15.4366 12.1837 15.523 12.5212L16.97 12.7528V13.4089H13.9851C13.9766 12.3198 13.0912 11.4394 12 11.4394C10.9089 11.4394 10.0235 12.3198 10.015 13.4089H7.03006V12.7528L8.47712 12.5211C8.56345 12.1836 8.69703 11.8649 8.87037 11.5727L8.0107 10.3853L8.96078 9.4353L10.148 10.2949C10.4404 10.1215 10.759 9.98788 11.0966 9.9016L11.3282 8.45467H12.6718L12.9034 9.9016ZM16.1353 7.93758C15.6779 7.93758 15.3071 7.56681 15.3071 7.1094C15.3071 6.652 15.6779 6.28122 16.1353 6.28122C16.5926 6.28122 16.9634 6.652 16.9634 7.1094C16.9634 7.56681 16.5926 7.93758 16.1353 7.93758ZM2.71385 14.0964V3.90518C2.71385 3.78023 2.81612 3.67796 2.94107 3.67796H21.0589C21.1839 3.67796 21.2861 3.78023 21.2861 3.90518V14.0964C15.0954 14.0964 8.90462 14.0964 2.71385 14.0964Z" fill="currentColor"></path>
                                                                </svg>
                                                            </div>
                                                            <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                                <h6  className="pl-2 mb-0">Auto</h6>
                                                            </div>
                                                        </label>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li  className="nav-item iq-full-screen sm:hidden xl:block border-r" id="fullscreen-item">
                                            <a  className="flex items-center p-2 hover:text-primary-500 focusa text-secondary-600" x-data="fullscreen" href="#">
                                                <div  className="w-8 rounded-full">
                                                    <span  className="btn-inner">
                                                        <svg  className="normal-screen icon-32" width="32" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18.5528 5.99656L13.8595 10.8961" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                            </path>
                                                            <path d="M14.8016 5.97618L18.5524 5.99629L18.5176 9.96906" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M5.8574 18.896L10.5507 13.9964" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                            </path>
                                                            <path d="M9.60852 18.9164L5.85775 18.8963L5.89258 14.9235" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                        <svg  className="full-normal-screen icon-24 hidden" width="32" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.7542 10.1932L18.1867 5.79319" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M17.2976 10.212L13.7547 10.1934L13.7871 6.62518" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M10.4224 13.5726L5.82149 18.1398" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M6.74391 13.5535L10.4209 13.5723L10.3867 17.2755" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li x-data="{ open: false }" id="itemdropdown1">
                                            <a  className="py-0 flex items-center p-2 ml-2 hover:text-primary-500 active:text-primary-500 focus:text-primary-500 focus" href="#" id="profile-setting" aria-expanded="false">
                                                <img src="..//assets/images/avatars/01.png" alt="User-Profile"  className="h-12 w-12 rounded-full truncate" loading="lazy"/>
                                                <div  className="caption ml-3 d-none d-md-block ">
                                                    <h6  className="mb-0 caption-title mr-4">Austin Robertson</h6>
                                                    <p  className="mb-0 caption-sub-title focusa active:text-primary-500  focus:text-primary-500 hover:text-primary-500 text-black mr-4">Marketing Administrator</p>
                                                </div>
                                            </a>
                                            <ul x-show="open"  className="absolute z-40 w-40 p-2  rounded bg-white shadow-lg right-4 dark:bg-dark-card" x-transition:enter="transition ease-in duration-500" x-transition:enter-start="opacity-0 transform translate-y-16" x-transition:enter-end="opacity-100 transform translate-y-0" x-transition:leave="transition ease-out duration-500" x-transition:leave-start="opacity-100 transform translate-y-0" x-transition:leave-end="opacity-0 transform translate-y-0" style={{ display: 'none'}}>
                                                <li><a  className=" dropdown-item text-md text-secondary-600 p-1 dark:text-secondary-600 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 dark:hover:text-primary-500 rounded-t" href="../dashboard/app/user-profile.html">Profile</a></li>
                                                <li><a  className="dropdown-item text-md text-secondary-600 p-1 dark:text-secondary-600 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 dark:hover:text-primary-500" href="../dashboard/app/user-privacy-setting.html">Privacy Setting</a></li>
                                                <li>
                                                    <hr  className="dark:border-secondary-700 my-4 dark:m-0"/>
                                                </li>
                                                <li><a  className="dropdown-item text-md text-secondary-600 p-1 dark:text-secondary-600 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 dark:hover:text-primary-500 rounded-b" href="../dashboard/auth/sign-in.html">Logout</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="headsm"  className="md:mt-0 overflow-hidden  lg:hidden flex w-full bg-white top-12 px-7 transition-all duration-700 max-h-0 pb-2 dark:bg-dark-card" x-ref="container1" x-bind:style="selected == 1 ? 'max-height:' + $refs.container1.scrollHeight + 'px' : ''">
                        <ul className="flex items-center mb-4 mt-5 ml-auto rtl:ml-0 rtl:mr-auto lg:mb-0">
                            <li  className="flex items-center pl-2" x-data="{ open: false }">
                                <a href="#"  className="block p-2 group hover:text-primary-500 text-secondary-600">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                                        <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"></path>
                                    </svg>
                                </a>
                                <div x-show="open"  className=" rounded drops shadow w-80" x-transition:enter="transition ease-in duration-500" x-transition:enter-start="opacity-0 transform translate-y-16" x-transition:enter-end="opacity-100 transform translate-y-0" x-transition:leave="transition ease-out duration-500" x-transition:leave-start="opacity-100 transform translate-y-0" x-transition:leave-end="opacity-0 transform translate-y-0" style={{ display: 'none'}}>
                                    <div  className="bg-white dark:bg-dark-card shadow-lg  dark:text-secondary-600 ">
                                        <div  className="flex px-5 py-3  rounded-t">
                                            <a href="#"  className="nav-link show" id="search-drop" data-bs-toggle="dropdown" aria-expanded="true">
                                                <input type="text"  className="text-black  search-input form-control bg-primary-100/[0.1]" placeholder="Search here..." data-ms-editor="true"/>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="#"  className="flex justify-between w-full px-5  py-1 border-t border-b dark:border-secondary-700  group">
                                                <div  className="flex items-center">
                                                    <div>
                                                        <img className="w-14 h-14 p-1 text-primary-400  rounded-full dark:bg-primary-800 " src="../assets/images/avatar/01.png"/>
                                                    </div>
                                                    <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                        <h5  className="mb-0  text-secondary-600 text-lg">Paige Turner</h5>
                                                        <small  className="LR text-lg text-secondary-500 dark:text-secondary-600">paige001</small>
                                                    </div>
                            
                                                </div>
                                            </a>
                                            <a href="#"  className="flex justify-between w-full px-5 py-1 border-b dark:border-secondary-700  group">
                                                <div  className="flex items-center">
                                                    <div>
                                                        <img  className="w-14 h-14 p-1 text-primary-400  rounded-full dark:bg-primary-800 " src="../assets/images/avatar/02.png"/>
                                                    </div>
                                                    <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                        <h5  className="mb-0  text-secondary-600 text-lg">Monty Carlo</h5>
                                                        <small  className="text-lg text-secondary-500 dark:text-secondary-600">Carlo.m</small>
                                                    </div>
                                                </div>
                                                
                                            </a>
                                            <a href="#"  className="flex justify-between w-full px-5 py-1 border-b dark:border-secondary-700  group">
                                                <div  className="flex items-center">
                                                    <div>
                                                        <img  className="w-14 h-14 p-1 text-primary-400  rounded-full dark:bg-primary-800 " src="../assets/images/avatar/03.png"/>
                                                    </div>
                                                    <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                        <h5  className="mb-0  text-secondary-600 text-lg">Paul Molive</h5>
                                                        <small  className="text-lg text-secondary-500 dark:text-secondary-600">Paul45</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#"  className="flex justify-between w-full px-5 py-1 border-b dark:border-secondary-700  group">
                                                <div  className="flex items-center">
                                                    <div>
                                                        <img  className="w-14 h-14 p-1 text-primary-400  rounded-full dark:bg-primary-800 " src="../assets/images/avatar/04.png"/>
                                                    </div>
                                                    <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                        <h5  className="mb-0  text-lg text-secondary-600">Monty Carlo</h5>
                                                        <small  className="text-lg text-secondary-500 dark:text-secondary-600">Carlo.m</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li  className="flex items-center pl-2" x-data="{ open: false }">
                                <a href="#"  className="block p-2 hover:text-primary-500 text-secondary-600" id="mode-drop">
                                    <svg  className="icon-24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"></path>
                                    </svg>
                                </a>
                                <div x-show="open"  className="drop-shadow-lg rounded drops w-40 " x-transition:enter="transition ease-in duration-500" x-transition:enter-start="opacity-0 transform translate-y-16" x-transition:enter-end="opacity-100 transform translate-y-0" x-transition:leave="transition ease-out duration-500" x-transition:leave-start="opacity-100 transform translate-y-0" x-transition:leave-end="opacity-0 transform translate-y-0" style={{ display: 'none'}}>
                                    <div  className="bg-white dark:bg-dark-card shadow-lg rounded p-2 dark:text-secondary-600 ">
                                            <a href="#"  className="flex justify-between w-full py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group">
                                                <input type="radio" value="ltr"  className="hidden" name="theme_scheme_direction" id="ltr" x-model="setting.theme_scheme_direction"/>
                                                <label  className="flex items-center" htmlFor="ltr">
                                                    <div>
                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.9702 19.757L15.3502 5.27201C15.1884 4.62224 14.8136 4.04541 14.2856 3.63359C13.7576 3.22177 13.1068 2.99871 12.4372 3.00001H11.5602C10.8911 2.99938 10.2411 3.22275 9.71368 3.63452C9.18629 4.04628 8.81191 4.62274 8.65022 5.27201L5.03022 19.757C4.9679 20.0135 5.00954 20.2843 5.14605 20.5102C5.28257 20.7362 5.50288 20.899 5.75895 20.9631C6.01502 21.0273 6.28606 20.9875 6.51297 20.8527C6.73988 20.7178 6.90424 20.4986 6.97022 20.243L8.28022 15H15.7202L17.0302 20.243C17.0962 20.4986 17.2606 20.7178 17.4875 20.8527C17.7144 20.9875 17.9854 21.0273 18.2415 20.9631C18.4976 20.899 18.7179 20.7362 18.8544 20.5102C18.9909 20.2843 19.0325 20.0135 18.9702 19.757V19.757ZM8.78022 13L10.5912 5.75801C10.6449 5.5414 10.7696 5.34903 10.9454 5.21163C11.1213 5.07423 11.3381 4.99972 11.5612 5.00001H12.4392C12.6624 4.99972 12.8792 5.07423 13.055 5.21163C13.2308 5.34903 13.3556 5.5414 13.4092 5.75801L15.2192 13H8.78022Z" fill="currentColor"></path>
                                                    </svg>
                                                    </div>
                                                    <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                        <h6  className="mb-0 text-secondary-500 font-medium">LTR</h6>
                                                    </div>
                                                </label>
                                            </a>
                                            <a href="#"  className="flex justify-between w-full py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group">
                                                <input type="radio" value="rtl"  className="hidden" name="theme_scheme_direction" id="rtl" x-model="setting.theme_scheme_direction"/>
                                                <label  className="flex items-center" htmlFor="rtl">
                                                    <div>
                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 4C10.08 4 8.5 5.58 8.5 7.5C8.5 8.43 8.88 9.28 9.5 9.91C7.97 10.91 7 12.62 7 14.5C7 17.53 9.47 20 12.5 20C14.26 20 16 19.54 17.5 18.66L16.5 16.93C15.28 17.63 13.9 18 12.5 18C10.56 18 9 16.45 9 14.5C8.99823 13.7298 9.2513 12.9806 9.71978 12.3692C10.1883 11.7578 10.8458 11.3186 11.59 11.12L16.8 9.72L16.28 7.79L11.83 9C11.08 8.9 10.5 8.28 10.5 7.5C10.5 6.66 11.16 6 12 6C12.26 6 12.5 6.07 12.75 6.2L13.75 4.47C13.22 4.16 12.61 4 12 4Z" fill="currentColor"></path>
                                                        </svg>
                                                    </div>
                                                    <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                        <h6  className="mb-0 text-secondary-500 font-medium">RTL</h6>
                                                    </div>
                                                </label>
                                            </a>
                                    </div>
                                </div>
                            </li>
                            <li  className="flex items-center pl-2" x-data="{ open: false }">
                                <a href="#"  className="block p-2 group hover:text-primary-500 text-secondary-600">
                                    <svg  className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.7695 11.6453C19.039 10.7923 18.7071 10.0531 18.7071 8.79716V8.37013C18.7071 6.73354 18.3304 5.67907 17.5115 4.62459C16.2493 2.98699 14.1244 2 12.0442 2H11.9558C9.91935 2 7.86106 2.94167 6.577 4.5128C5.71333 5.58842 5.29293 6.68822 5.29293 8.37013V8.79716C5.29293 10.0531 4.98284 10.7923 4.23049 11.6453C3.67691 12.2738 3.5 13.0815 3.5 13.9557C3.5 14.8309 3.78723 15.6598 4.36367 16.3336C5.11602 17.1413 6.17846 17.6569 7.26375 17.7466C8.83505 17.9258 10.4063 17.9933 12.0005 17.9933C13.5937 17.9933 15.165 17.8805 16.7372 17.7466C17.8215 17.6569 18.884 17.1413 19.6363 16.3336C20.2118 15.6598 20.5 14.8309 20.5 13.9557C20.5 13.0815 20.3231 12.2738 19.7695 11.6453Z" fill="currentColor"></path>
                                        <path opacity="0.4" d="M14.0088 19.2283C13.5088 19.1215 10.4627 19.1215 9.96275 19.2283C9.53539 19.327 9.07324 19.5566 9.07324 20.0602C9.09809 20.5406 9.37935 20.9646 9.76895 21.2335L9.76795 21.2345C10.2718 21.6273 10.8632 21.877 11.4824 21.9667C11.8123 22.012 12.1482 22.01 12.4901 21.9667C13.1083 21.877 13.6997 21.6273 14.2036 21.2345L14.2026 21.2335C14.5922 20.9646 14.8734 20.5406 14.8983 20.0602C14.8983 19.5566 14.4361 19.327 14.0088 19.2283Z" fill="currentColor"></path>
                                    </svg>
                                </a>
                                <div x-show="open"  className="right-4 rounded drops shadow w-80" x-transition:enter="transition ease-in duration-500" x-transition:enter-start="opacity-0 transform translate-y-16" x-transition:enter-end="opacity-100 transform translate-y-0" x-transition:leave="transition ease-out duration-500" x-transition:leave-start="opacity-100 transform translate-y-0" x-transition:leave-end="opacity-0 transform translate-y-0" style={{ display: 'none'}}>
                                    <div  className="bg-white dark:bg-dark-card shadow-lg rounded-t-lg rounded-b-lg dark:text-secondary-600 ">
                                        <div  className="flex px-5 py-3 bg-primary-500 rounded-t">
                                            <h5  className="text-xl font-medium text-white">All Notifications</h5>
                                        </div>
                                        <div>
                                            <a href="#"  className="flex justify-between w-full px-5 py-3 border-b dark:border-secondary-700 hover:bg-primary-500/[0.1] group">
                                                <div  className="flex items-center">
                                                    <div>
                                                        <img  className="w-10 h-10 p-1 text-primary-400 bg-primary-100 rounded-full dark:bg-primary-800 group-hover:bg-primary-200" src="../assets/images/shapes/01.png"/>
                                                    </div>
                                                    <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                        <h6  className="mb-0  font-medium">Emma Watson Bni</h6>
                                                        <small  className="LR text-sm text-secondary-500 dark:text-secondary-600">95 MB</small>
                                                    </div>
                                                </div>
                                                <div className="flex items-end"><small  className="RL text-sm text-secondary-500 dark:text-secondary-600 ">Just Now</small></div>
                                            </a>
                                            <a href="#"  className="flex justify-between w-full px-5 py-3 border-b dark:border-secondary-700 hover:bg-primary-500/[0.1] group">
                                                <div  className="flex items-center">
                                                    <div>
                                                        <img  className="w-10 h-10 p-1 text-primary-400 bg-primary-100 rounded-full dark:bg-primary-800 group-hover:bg-primary-200" src="../assets/images/shapes/02.png"/>
                                                    </div>
                                                    <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                        <h6  className="mb-0  font-medium">New customer is join</h6>
                                                        <small  className="text-sm text-secondary-500 dark:text-secondary-600">Cyst Bni</small>
                                                    </div>
                                                </div>
                                                <div  className="flex items-end"><small  className="RL text-sm text-secondary-500 dark:text-secondary-600 ">5 days ago</small></div>
                                            </a>
                                            <a href="#"  className="flex justify-between w-full px-5 py-3 border-b dark:border-secondary-700 hover:bg-primary-500/[0.1] group">
                                                <div  className="flex items-center">
                                                    <div>
                                                        <img  className="w-10 h-10 p-1 text-primary-400 bg-primary-100 rounded-full dark:bg-primary-800 group-hover:bg-primary-200" src="../assets/images/shapes/03.png"/>
                                                    </div>
                                                    <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                        <h6  className="mb-0  font-medium">Two customer is left</h6>
                                                        <small  className="text-sm text-secondary-500 dark:text-secondary-600">Cyst Bni</small>
                                                    </div>
                                                </div>
                                                <div  className="flex items-end"><small  className="RL text-sm text-secondary-500 dark:text-secondary-600 ">2 days ago</small></div>
                                            </a>
                                            <a href="#"  className="flex justify-between w-full px-5 py-3 border-b dark:border-secondary-700 hover:bg-primary-500/[0.1] group">
                                                <div  className="flex items-center">
                                                    <div>
                                                        <img  className="w-10 h-10 p-1 text-primary-400 bg-primary-100 rounded-full dark:bg-primary-800 group-hover:bg-primary-200" src="../assets/images/shapes/04.png"/>
                                                    </div>
                                                    <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                        <h6  className="mb-0  font-medium">New Mail from Fenny</h6>
                                                        <small  className="text-sm text-secondary-500 dark:text-secondary-600">Cyst Bni</small>
                                                    </div>
                                                </div>
                                                <div className="flex items-end"><small  className="RL text-sm text-secondary-500 dark:text-secondary-600 ">3 days ago</small></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li  className="flex items-center pl-2" x-data="{ open: false }">
                                <a href="#"  className="block p-2 hover:text-primary-500 text-secondary-600" id="mode-drop">
                                    <svg  className="icon-24 color-secondary" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z" fill="currentColor"></path>
                                        <path d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z" fill="currentColor"></path>
                                        <path d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z" fill="currentColor"></path>
                                        <path d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z" fill="currentColor"></path>
                                        <path d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z" fill="currentColor"></path>
                                        <path d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z" fill="currentColor"></path>
                                        <path d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z" fill="currentColor"></path>
                                        <path d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z" fill="currentColor"></path>
                                        <path d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z" fill="currentColor"></path>
                                    </svg>
                                </a>
                                <div x-show="open"  className="drop-shadow-lg right-4 drops w-40 " x-transition:enter="transition ease-in duration-500" x-transition:enter-start="opacity-0 transform translate-y-16" x-transition:enter-end="opacity-100 transform translate-y-0" x-transition:leave="transition ease-out duration-500" x-transition:leave-start="opacity-100 transform translate-y-0" x-transition:leave-end="opacity-0 transform translate-y-0" style={{ display: 'none'}}>
                                    <div className="bg-white dark:bg-dark-bg shadow-lg p-2 rounded dark:text-white">
                                        <a href="#"  className="flex justify-between w-full  py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300  dark:text-white dark:hover-text-primary-500 group">
                                            <input type="radio" value="light"  className="hidden" name="theme_scheme" id="light-theme" x-model="setting.theme_scheme"/>
                                            <label  className="flex items-center mb-0 ml-2" htmlFor="light-theme">
                                                <div>
                                                    <svg  className="icon-24" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.9905 5.62598C10.7293 5.62574 9.49646 5.9995 8.44775 6.69997C7.39903 7.40045 6.58159 8.39619 6.09881 9.56126C5.61603 10.7263 5.48958 12.0084 5.73547 13.2453C5.98135 14.4823 6.58852 15.6185 7.48019 16.5104C8.37186 17.4022 9.50798 18.0096 10.7449 18.2557C11.9818 18.5019 13.2639 18.3757 14.429 17.8931C15.5942 17.4106 16.5901 16.5933 17.2908 15.5448C17.9915 14.4962 18.3655 13.2634 18.3655 12.0023C18.3637 10.3119 17.6916 8.69129 16.4964 7.49593C15.3013 6.30056 13.6808 5.62806 11.9905 5.62598Z" fill="currentColor"></path>
                                                        <path d="M22.1258 10.8771H20.627C20.3286 10.8771 20.0424 10.9956 19.8314 11.2066C19.6204 11.4176 19.5018 11.7038 19.5018 12.0023C19.5018 12.3007 19.6204 12.5869 19.8314 12.7979C20.0424 13.0089 20.3286 13.1274 20.627 13.1274H22.1258C22.4242 13.1274 22.7104 13.0089 22.9214 12.7979C23.1324 12.5869 23.2509 12.3007 23.2509 12.0023C23.2509 11.7038 23.1324 11.4176 22.9214 11.2066C22.7104 10.9956 22.4242 10.8771 22.1258 10.8771Z" fill="currentColor"></path>
                                                        <path d="M11.9905 19.4995C11.6923 19.5 11.4064 19.6187 11.1956 19.8296C10.9848 20.0405 10.8663 20.3265 10.866 20.6247V22.1249C10.866 22.4231 10.9845 22.7091 11.1953 22.9199C11.4062 23.1308 11.6922 23.2492 11.9904 23.2492C12.2886 23.2492 12.5746 23.1308 12.7854 22.9199C12.9963 22.7091 13.1147 22.4231 13.1147 22.1249V20.6247C13.1145 20.3265 12.996 20.0406 12.7853 19.8296C12.5745 19.6187 12.2887 19.5 11.9905 19.4995Z" fill="currentColor"></path>
                                                        <path d="M4.49743 12.0023C4.49718 11.704 4.37865 11.4181 4.16785 11.2072C3.95705 10.9962 3.67119 10.8775 3.37298 10.8771H1.87445C1.57603 10.8771 1.28984 10.9956 1.07883 11.2066C0.867812 11.4176 0.749266 11.7038 0.749266 12.0023C0.749266 12.3007 0.867812 12.5869 1.07883 12.7979C1.28984 13.0089 1.57603 13.1274 1.87445 13.1274H3.37299C3.6712 13.127 3.95706 13.0083 4.16785 12.7973C4.37865 12.5864 4.49718 12.3005 4.49743 12.0023Z" fill="currentColor"></path>
                                                        <path d="M11.9905 4.50058C12.2887 4.50012 12.5745 4.38141 12.7853 4.17048C12.9961 3.95954 13.1147 3.67361 13.1149 3.3754V1.87521C13.1149 1.57701 12.9965 1.29103 12.7856 1.08017C12.5748 0.869313 12.2888 0.750854 11.9906 0.750854C11.6924 0.750854 11.4064 0.869313 11.1955 1.08017C10.9847 1.29103 10.8662 1.57701 10.8662 1.87521V3.3754C10.8664 3.67359 10.9849 3.95952 11.1957 4.17046C11.4065 4.3814 11.6923 4.50012 11.9905 4.50058Z" fill="currentColor"></path>
                                                        <path d="M18.8857 6.6972L19.9465 5.63642C20.0512 5.53209 20.1343 5.40813 20.1911 5.27163C20.2479 5.13513 20.2772 4.98877 20.2774 4.84093C20.2775 4.69309 20.2485 4.54667 20.192 4.41006C20.1355 4.27344 20.0526 4.14932 19.948 4.04478C19.8435 3.94024 19.7194 3.85734 19.5828 3.80083C19.4462 3.74432 19.2997 3.71531 19.1519 3.71545C19.0041 3.7156 18.8577 3.7449 18.7212 3.80167C18.5847 3.85845 18.4607 3.94159 18.3564 4.04633L17.2956 5.10714C17.1909 5.21147 17.1077 5.33543 17.0509 5.47194C16.9942 5.60844 16.9649 5.7548 16.9647 5.90264C16.9646 6.05048 16.9936 6.19689 17.0501 6.33351C17.1066 6.47012 17.1895 6.59425 17.294 6.69878C17.3986 6.80332 17.5227 6.88621 17.6593 6.94272C17.7959 6.99923 17.9424 7.02824 18.0902 7.02809C18.238 7.02795 18.3844 6.99865 18.5209 6.94187C18.6574 6.88509 18.7814 6.80195 18.8857 6.6972Z" fill="currentColor"></path>
                                                        <path d="M18.8855 17.3073C18.7812 17.2026 18.6572 17.1195 18.5207 17.0627C18.3843 17.006 18.2379 16.9767 18.0901 16.9766C17.9423 16.9764 17.7959 17.0055 17.6593 17.062C17.5227 17.1185 17.3986 17.2014 17.2941 17.3059C17.1895 17.4104 17.1067 17.5345 17.0501 17.6711C16.9936 17.8077 16.9646 17.9541 16.9648 18.1019C16.9649 18.2497 16.9942 18.3961 17.0509 18.5326C17.1077 18.6691 17.1908 18.793 17.2955 18.8974L18.3563 19.9582C18.4606 20.0629 18.5846 20.146 18.721 20.2027C18.8575 20.2595 19.0039 20.2887 19.1517 20.2889C19.2995 20.289 19.4459 20.26 19.5825 20.2035C19.7191 20.147 19.8432 20.0641 19.9477 19.9595C20.0523 19.855 20.1351 19.7309 20.1916 19.5943C20.2482 19.4577 20.2772 19.3113 20.277 19.1635C20.2769 19.0157 20.2476 18.8694 20.1909 18.7329C20.1341 18.5964 20.051 18.4724 19.9463 18.3681L18.8855 17.3073Z" fill="currentColor"></path>
                                                        <path d="M5.09528 17.3072L4.0345 18.368C3.92972 18.4723 3.84655 18.5963 3.78974 18.7328C3.73294 18.8693 3.70362 19.0156 3.70346 19.1635C3.7033 19.3114 3.7323 19.4578 3.78881 19.5944C3.84532 19.7311 3.92822 19.8552 4.03277 19.9598C4.13732 20.0643 4.26147 20.1472 4.3981 20.2037C4.53473 20.2602 4.68117 20.2892 4.82902 20.2891C4.97688 20.2889 5.12325 20.2596 5.25976 20.2028C5.39627 20.146 5.52024 20.0628 5.62456 19.958L6.68536 18.8973C6.79007 18.7929 6.87318 18.6689 6.92993 18.5325C6.98667 18.396 7.01595 18.2496 7.01608 18.1018C7.01621 17.954 6.98719 17.8076 6.93068 17.671C6.87417 17.5344 6.79129 17.4103 6.68676 17.3058C6.58224 17.2012 6.45813 17.1183 6.32153 17.0618C6.18494 17.0053 6.03855 16.9763 5.89073 16.9764C5.74291 16.9766 5.59657 17.0058 5.46007 17.0626C5.32358 17.1193 5.19962 17.2024 5.09528 17.3072Z" fill="currentColor"></path>
                                                        <path d="M5.09541 6.69715C5.19979 6.8017 5.32374 6.88466 5.4602 6.94128C5.59665 6.9979 5.74292 7.02708 5.89065 7.02714C6.03839 7.0272 6.18469 6.99815 6.32119 6.94164C6.45769 6.88514 6.58171 6.80228 6.68618 6.69782C6.79064 6.59336 6.87349 6.46933 6.93 6.33283C6.9865 6.19633 7.01556 6.05003 7.01549 5.9023C7.01543 5.75457 6.98625 5.60829 6.92963 5.47184C6.87301 5.33539 6.79005 5.21143 6.6855 5.10706L5.6247 4.04626C5.5204 3.94137 5.39643 3.8581 5.25989 3.80121C5.12335 3.74432 4.97692 3.71493 4.82901 3.71472C4.68109 3.71452 4.53458 3.7435 4.39789 3.80001C4.26119 3.85652 4.13699 3.93945 4.03239 4.04404C3.9278 4.14864 3.84487 4.27284 3.78836 4.40954C3.73185 4.54624 3.70287 4.69274 3.70308 4.84066C3.70329 4.98858 3.73268 5.135 3.78957 5.27154C3.84646 5.40808 3.92974 5.53205 4.03462 5.63635L5.09541 6.69715Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                                <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                    <div  className="align-middle">
                                                        <h6  className="pl-2 mb-0">Light</h6>
                                                    </div>
                                                </div>
                                            </label>
                                        </a>
                                        <a href="#"  className="flex justify-between w-full  py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 dark:text-white dark:hover-text-primary-500 group">
                                            <input type="radio" value="dark"  className="hidden" name="theme_scheme" id="dark-theme" x-model="setting.theme_scheme"/>
                                            <label  className="flex items-center mb-0 ml-2" htmlFor="dark-theme">
                                                <div>
                                                    <svg  className="icon-24" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z" fill="currentColor"></path>
                                                        <path d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z" fill="currentColor"></path>
                                                        <path d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z" fill="currentColor"></path>
                                                        <path d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                                <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                    <h6  className="pl-2 mb-0">Dark</h6>
                                                </div>
                                            </label>
                                        </a>
                                        <a href="#"  className="flex justify-between w-full  py-1  hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 dark:text-white dark:hover-text-primary-500 group">
                                            <input type="radio" value="auto"  className="hidden" name="theme_scheme" id="auto-theme" x-model="setting.theme_scheme"/>
                                            <label  className="flex items-center mb-0 ml-2" htmlFor="auto-theme">
                                                <div>
                                                <svg  className="icon-24" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.34375 3.9463V15.2178C1.34375 16.119 2.08105 16.8563 2.98219 16.8563H8.65093V19.4594H6.15702C5.38853 19.4594 4.75981 19.9617 4.75981 20.5757V21.6921H19.2403V20.5757C19.2403 19.9617 18.6116 19.4594 17.8431 19.4594H15.3492V16.8563H21.0179C21.919 16.8563 22.6562 16.119 22.6562 15.2178V3.9463C22.6562 3.04516 21.9189 2.30786 21.0179 2.30786H2.98219C2.08105 2.30786 1.34375 3.04516 1.34375 3.9463ZM12.9034 9.9016C13.241 9.98792 13.5597 10.1216 13.852 10.2949L15.0393 9.4353L15.9893 10.3853L15.1297 11.5727C15.303 11.865 15.4366 12.1837 15.523 12.5212L16.97 12.7528V13.4089H13.9851C13.9766 12.3198 13.0912 11.4394 12 11.4394C10.9089 11.4394 10.0235 12.3198 10.015 13.4089H7.03006V12.7528L8.47712 12.5211C8.56345 12.1836 8.69703 11.8649 8.87037 11.5727L8.0107 10.3853L8.96078 9.4353L10.148 10.2949C10.4404 10.1215 10.759 9.98788 11.0966 9.9016L11.3282 8.45467H12.6718L12.9034 9.9016ZM16.1353 7.93758C15.6779 7.93758 15.3071 7.56681 15.3071 7.1094C15.3071 6.652 15.6779 6.28122 16.1353 6.28122C16.5926 6.28122 16.9634 6.652 16.9634 7.1094C16.9634 7.56681 16.5926 7.93758 16.1353 7.93758ZM2.71385 14.0964V3.90518C2.71385 3.78023 2.81612 3.67796 2.94107 3.67796H21.0589C21.1839 3.67796 21.2861 3.78023 21.2861 3.90518V14.0964C15.0954 14.0964 8.90462 14.0964 2.71385 14.0964Z" fill="currentColor"></path>
                                                </svg>
                                                </div>
                                                <div  className="ml-3 rtl:ml-0 rtl:mr-3 LR">
                                                    <h6  className="pl-2 mb-0">Auto</h6>
                                                </div>
                                            </label>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li x-data="{ open: false }" id="itemdropdown1">
                                <a  className="py-0 flex items-center p-1 hover:text-primary-500" href="#" id="profile-setting" aria-expanded="false">
                                    <img src="..//assets/images/avatars/01.png" alt="User-Profile"  className="h-12 w-12 rounded-full truncate" loading="lazy"/>
                                </a>
                                <ul x-show="open"  className="absolute z-40 w-40 p-2  rounded bg-white shadow-lg right-4 dark:bg-dark-card" x-transition:enter="transition ease-in duration-500" x-transition:enter-start="opacity-0 transform translate-y-16" x-transition:enter-end="opacity-100 transform translate-y-0" x-transition:leave="transition ease-out duration-500" x-transition:leave-start="opacity-100 transform translate-y-0" x-transition:leave-end="opacity-0 transform translate-y-0" style={{ display: 'none'}}>
                                    <li><a  className=" dropdown-item text-md text-secondary-600 p-1 dark:text-secondary-600 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 dark:hover:text-primary-500 rounded-t" href="../dashboard/app/user-profile.html">Profile</a></li>
                                    <li><a  className="dropdown-item text-md text-secondary-600 p-1 dark:text-secondary-600 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 dark:hover:text-primary-500" href="../dashboard/app/user-privacy-setting.html">Privacy Setting</a></li>
                                    <li>
                                        <hr  className="dark:border-secondary-700 m-0 dark:m-0"/>
                                    </li>
                                    <li><a  className="dropdown-item text-md text-secondary-600 p-1 dark:text-secondary-600 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 dark:hover:text-primary-500 rounded-b" href="../dashboard/auth/sign-in.html">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="p-6 lg:p-8 footer-inner mx-auto main-container container" x-bind:className="setting.page_layout">
                <div  className="flex flex-wrap justify-between mb-6 gap-4">
                    <div  className="">
                        <h3  className="mb-0 dark:text-white">Quick Insights</h3>
                        <p  className="text-secondary-600 dark:text-white">Financial Dashboard</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <div className="inline-block w-40 without-press-select">
                            <div className="choices" data-type="select-one" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                                <div className="choices__inner">
                                    <select id="choices-dropdown" name="form-control" className="form-control border border-secondary-500 dark:border-secondary-700 dark:bg-dark-card dark:text-white text-secondary-600 dark:focus:border-primary-500 choices__input" aria-label=".form-select-sm example" data-choice="active">
                                        <option value="Past 30 Days" data-custom-properties="[object Object]">Past 30 Days</option>
                                    </select>
                                    <div className="choices__list choices__list--single">
                                        <div  className="choices__item choices__item--selectable" data-item="" data-id="1" data-value="Past 30 Days" data-custom-properties="[object Object]" aria-selected="true">Past 30 Days</div>
                                    </div>
                                </div>
                                <div className="choices__list choices__list--dropdown" aria-expanded="false">
                                    <input type="text"  className="choices__input choices__input--cloned" autoComplete="off" autoCapitalize="off" spellCheck="false" role="textbox" aria-autocomplete="list" aria-label="null" placeholder=""/>
                                    <div  className="choices__list" role="listbox">
                                        <div id="choices--choices-dropdown-item-choice-1"  className="choices__item choices__item--choice choices__item--selectable is-highlighted" role="option" data-choice="" data-id="1" data-value="Past 1 year" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Past 1 year</div>
                                        <div id="choices--choices-dropdown-item-choice-2"  className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="Past 2 year" data-select-text="Press to select" data-choice-selectable="">Past 2 year</div>
                                        <div id="choices--choices-dropdown-item-choice-3"  className="choices__item choices__item--choice is-selected choices__item--selectable" role="option" data-choice="" data-id="3" data-value="Past 30 Days" data-select-text="Press to select" data-choice-selectable="">Past 30 Days</div>
                                        <div id="choices--choices-dropdown-item-choice-4"  className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="Past 60 Days" data-select-text="Press to select" data-choice-selectable="">Past 60 Days</div>
                                        <div id="choices--choices-dropdown-item-choice-5"  className="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="5" data-value="Past 90 Days" data-select-text="Press to select" data-choice-selectable="">Past 90 Days</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className="inline-block">
                            <div  className="w-full">
                                <input type="text"  className="range_flatpicker form-control flatpickr-input" placeholder="24 Jan 2022 to 23 Feb 2022"/>
                            </div>
                        </div>
                        <button  className="btn btn-primary">Analytics</button>
                    </div>
                </div>
                <div>
                    <div  className="grid gird-cols-1 lg:grid-cols-3 lg:gap-8">
                        <div  className="relative flex flex-col mb-8 bg-white rounded shadow-lg dark:bg-dark-card grid gird-cols-1 lg:col-span-2">
                            <div  className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-secondary-600">
                                <div  className="relative flex flex-wrap justify-between p-5 ">
                                    <h4  className="mb-2 sm:mb-0 dark:text-white">Sales Statistics</h4>
                                    <div  className="flex">
                                        <div  className="mx-3 mr-0 dark:text-white">
                                            <p  className="mb-0 dark:text-white flex items-center"><svg  className="text-primary-500 mx-2" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                                                </svg> Total Sales </p>
                                        </div>
                                        <div  className="mx-3 dark:taxt-white">
                                            <p  className="mb-0 dark:text-white flex items-center"><svg  className="text-secondary-500 mx-2" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                                                </svg> Total Expense</p>
                                        </div>
                                        <div  className="dark:taxt-white">
                                            <p  className="mb-0 dark:text-white flex items-center"><svg  className="text-success-500 mx-2" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                                                </svg> Total Profit</p>
                                        </div>
                                    </div>
                                </div>
                                <hr  className="m-0"/>
                                <div className="flex-auto p-5">
                                    <div id="dashboard-line-chart" className="dashboard-line-chart" style={{ minHeight: '355px'}}>
                                        <div id="apexchartsvduzsye6" className="apexcharts-canvas apexchartsvduzsye6 apexcharts-theme-light" style={{width: '662px', height: '340px'}}>
                                            <svg id="SvgjsSvg1193" width="662" height="340" xmlns="http://www.w3.org/2000/svg" version="1.1" className="apexcharts-svg apexcharts-zoomable hovering-zoom" transform="translate(0, 0)" style={{background: 'transparent'}}>
                                                <g id="SvgjsG1195"  className="apexcharts-inner apexcharts-graphical" transform="translate(45.359375, 30)">
                                                    <defs id="SvgjsDefs1194">
                                                        <clipPath id="gridRectMaskvduzsye6">
                                                            <rect id="SvgjsRect1201" width="601.8017578125" height="288" x="-3.5" y="-1.5" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff">
                                                            </rect>
                                                        </clipPath>
                                                        <clipPath id="forecastMaskvduzsye6">
                                                            <rect id="SvgjsRect1224" width="594.8017578125" height="285" x="371.7510986328125" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect>
                                                            <rect id="SvgjsRect1248" width="594.8017578125" height="285" x="371.7510986328125" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect>
                                                            <rect id="SvgjsRect1272" width="594.8017578125" height="285" x="371.7510986328125" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect>
                                                        </clipPath>
                                                        <clipPath id="nonForecastMaskvduzsye6">
                                                            <rect id="SvgjsRect1225" width="371.7510986328125" height="285" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect>
                                                            <rect id="SvgjsRect1249" width="371.7510986328125" height="285" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect>
                                                            <rect id="SvgjsRect1273" width="371.7510986328125" height="285" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect>
                                                        </clipPath>
                                                        <clipPath id="gridRectMarkerMaskvduzsye6">
                                                            <rect id="SvgjsRect1202" width="650.8017578125" height="341" x="-28" y="-28" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                                        </clipPath>
                                                    </defs>
                                                    <line id="SvgjsLine1200" x1="296.90087890625" y1="0" x2="296.90087890625" y2="285" stroke="#b6b6b6" stroke-dasharray="3" stroke-linecap="butt"  className="apexcharts-xcrosshairs" x="296.90087890625" y="0" width="1" height="285" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line>
                                                    <g id="SvgjsG1288"  className="apexcharts-xaxis" transform="translate(0, 0)">
                                                        <g id="SvgjsG1289"  className="apexcharts-xaxis-texts-g" transform="translate(0, -4)">
                                                            <text id="SvgjsText1291" font-family="Helvetica, Arial, sans-serif" x="0" y="314" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"  className="apexcharts-text apexcharts-xaxis-label " style={{fontFamily: 'Helvetica, Arial, sans-serif'}}>
                                                                <tspan id="SvgjsTspan1292">Jan</tspan>
                                                                <title>Jan</title>
                                                            </text>
                                                            <text id="SvgjsText1294" font-family="Helvetica, Arial, sans-serif" x="74.3502197265625" y="314" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"  className="apexcharts-text apexcharts-xaxis-label " style={{fontFamily: 'Helvetica, Arial, sans-serif'}}>
                                                                <tspan id="SvgjsTspan1295">Feb</tspan>
                                                                <title>Feb</title>
                                                            </text>
                                                            <text id="SvgjsText1297" font-family="Helvetica, Arial, sans-serif" x="148.700439453125" y="314" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"  className="apexcharts-text apexcharts-xaxis-label " style={{fontFamily: 'Helvetica, Arial, sans-serif'}}>
                                                                <tspan id="SvgjsTspan1298">Mar</tspan>
                                                                <title>Mar</title>
                                                            </text>
                                                            <text id="SvgjsText1300" font-family="Helvetica, Arial, sans-serif" x="223.0506591796875" y="314" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"  className="apexcharts-text apexcharts-xaxis-label " style={{fontFamily: 'Helvetica, Arial, sans-serif'}}>
                                                                <tspan id="SvgjsTspan1301">Apr</tspan>
                                                                <title>Apr</title>
                                                            </text>
                                                            <text id="SvgjsText1303" font-family="Helvetica, Arial, sans-serif" x="297.40087890625" y="314" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"  className="apexcharts-text apexcharts-xaxis-label " style={{fontFamily: 'Helvetica, Arial, sans-serif'}}>
                                                                <tspan id="SvgjsTspan1304">May</tspan>
                                                                <title>May</title>
                                                            </text>
                                                            <text id="SvgjsText1306" font-family="Helvetica, Arial, sans-serif" x="371.7510986328125" y="314" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"  className="apexcharts-text apexcharts-xaxis-label " style={{fontFamily: 'Helvetica, Arial, sans-serif'}}>
                                                                <tspan id="SvgjsTspan1307">Jun</tspan>
                                                                <title>Jun</title>
                                                            </text>
                                                            <text id="SvgjsText1309" font-family="Helvetica, Arial, sans-serif" x="446.101318359375" y="314" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"  className="apexcharts-text apexcharts-xaxis-label " style={{fontFamily: 'Helvetica, Arial, sans-serif'}}>
                                                                <tspan id="SvgjsTspan1310">Jul</tspan>
                                                                <title>Jul</title>
                                                            </text>
                                                            <text id="SvgjsText1312" font-family="Helvetica, Arial, sans-serif" x="520.4515380859375" y="314" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"  className="apexcharts-text apexcharts-xaxis-label " style={{fontFamily: 'Helvetica, Arial, sans-serif'}}>
                                                                <tspan id="SvgjsTspan1313">Aug</tspan>
                                                                <title>Aug</title>
                                                            </text>
                                                            <text id="SvgjsText1315" font-family="Helvetica, Arial, sans-serif" x="594.8017578125" y="314" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"  className="apexcharts-text apexcharts-xaxis-label " style={{fontFamily: 'Helvetica, Arial, sans-serif'}}>
                                                                <tspan id="SvgjsTspan1316">Sep</tspan>
                                                                <title>Sep</title>
                                                            </text>
                                                        </g>
                                                    </g>
                                                    <g id="SvgjsG1276"  className="apexcharts-grid">
                                                        <g id="SvgjsG1277"  className="apexcharts-gridlines-horizontal">
                                                            <line id="SvgjsLine1281" x1="0" y1="57" x2="594.8017578125" y2="57" stroke="#e0e0e0" stroke-dasharray="7" stroke-linecap="butt"  className="apexcharts-gridline"></line>
                                                            <line id="SvgjsLine1282" x1="0" y1="114" x2="594.8017578125" y2="114" stroke="#e0e0e0" stroke-dasharray="7" stroke-linecap="butt"  className="apexcharts-gridline"></line>
                                                            <line id="SvgjsLine1283" x1="0" y1="171" x2="594.8017578125" y2="171" stroke="#e0e0e0" stroke-dasharray="7" stroke-linecap="butt"  className="apexcharts-gridline"></line>
                                                            <line id="SvgjsLine1284" x1="0" y1="228" x2="594.8017578125" y2="228" stroke="#e0e0e0" stroke-dasharray="7" stroke-linecap="butt"  className="apexcharts-gridline"></line>
                                                        </g>
                                                        <g id="SvgjsG1278"  className="apexcharts-gridlines-vertical"></g>
                                                        <line id="SvgjsLine1287" x1="0" y1="285" x2="594.8017578125" y2="285" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line>
                                                        <line id="SvgjsLine1286" x1="0" y1="1" x2="0" y2="285" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line>
                                                    </g>
                                                    <g id="SvgjsG1203" className="apexcharts-line-series apexcharts-plot-series">
                                                        <g id="SvgjsG1204"  className="apexcharts-series">
                                                            <path id="SvgjsPath1226" d="M 0 266 L 74.3502197265625 207.1 L 148.700439453125 218.5 L 223.0506591796875 188.1 L 297.40087890625 191.89999999999998 L 371.7510986328125 148.2 L 446.101318359375 210.89999999999998 L 520.4515380859375 245.1 L 594.8017578125 3.8000000000000114" fill="none" fill-opacity="1" stroke="rgba(112,22,208,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="3" stroke-dasharray="0"  className="apexcharts-line" clip-path="url(#nonForecastMaskvduzsye6)" path="M 0 266 L 74.3502197265625 207.1 L 148.700439453125 218.5 L 223.0506591796875 188.1 L 297.40087890625 191.89999999999998 L 371.7510986328125 148.2 L 446.101318359375 210.89999999999998 L 520.4515380859375 245.1 L 594.8017578125 3.8000000000000114" fill-rule="evenodd"></path>
                                                            <path id="SvgjsPath1227" d="M 0 266 L 74.3502197265625 207.1 L 148.700439453125 218.5 L 223.0506591796875 188.1 L 297.40087890625 191.89999999999998 L 371.7510986328125 148.2 L 446.101318359375 210.89999999999998 L 520.4515380859375 245.1 L 594.8017578125 3.8000000000000114" fill="none" fill-opacity="1" stroke="rgba(112,22,208,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="3" stroke-dasharray="4"  className="apexcharts-line" clip-path="url(#forecastMaskvduzsye6)" path="M 0 266 L 74.3502197265625 207.1 L 148.700439453125 218.5 L 223.0506591796875 188.1 L 297.40087890625 191.89999999999998 L 371.7510986328125 148.2 L 446.101318359375 210.89999999999998 L 520.4515380859375 245.1 L 594.8017578125 3.8000000000000114"></path>
                                                            <g id="SvgjsG1205"  className="apexcharts-series-markers-wrap">
                                                                <g id="SvgjsG1207"  className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskvduzsye6)">
                                                                    <circle id="SvgjsCircle1208" r="6" cx="0" cy="266"  className="apexcharts-marker no-pointer-events weg26hpbd" stroke="#7016d0" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="6"></circle>
                                                                    <circle id="SvgjsCircle1209" r="6" cx="74.3502197265625" cy="207.1"  className="apexcharts-marker no-pointer-events wmnqc0yma" stroke="#7016d0" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="6"></circle>
                                                                </g>
                                                                <g id="SvgjsG1210"  className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskvduzsye6)">
                                                                    <circle id="SvgjsCircle1211" r="6" cx="148.700439453125" cy="218.5"  className="apexcharts-marker no-pointer-events w9mplat8i" stroke="#7016d0" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="6"></circle>
                                                                </g>
                                                                <g id="SvgjsG1212"  className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskvduzsye6)">
                                                                    <circle id="SvgjsCircle1213" r="6" cx="223.0506591796875" cy="188.1"  className="apexcharts-marker no-pointer-events wy7dm8gl5" stroke="#7016d0" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="6"></circle>
                                                                </g>
                                                                <g id="SvgjsG1214"  className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskvduzsye6)">
                                                                    <circle id="SvgjsCircle1215" r="6" cx="297.40087890625" cy="191.89999999999998"  className="apexcharts-marker no-pointer-events wvxkceqrk" stroke="#7016d0" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="6"></circle>
                                                                </g>
                                                                <g id="SvgjsG1216"  className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskvduzsye6)">
                                                                    <circle id="SvgjsCircle1217" r="6" cx="371.7510986328125" cy="148.2"  className="apexcharts-marker no-pointer-events w3byltvmxf" stroke="#7016d0" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="6"></circle>
                                                                </g>
                                                                <g id="SvgjsG1218"  className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskvduzsye6)">
                                                                    <circle id="SvgjsCircle1219" r="6" cx="446.101318359375" cy="210.89999999999998"  className="apexcharts-marker no-pointer-events wdsfym75g" stroke="#7016d0" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="6"></circle>
                                                                </g>
                                                                <g id="SvgjsG1220"  className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskvduzsye6)">
                                                                    <circle id="SvgjsCircle1221" r="6" cx="520.4515380859375" cy="245.1"  className="apexcharts-marker no-pointer-events wjscyc44w" stroke="#7016d0" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="6"></circle>
                                                                </g>
                                                                <g id="SvgjsG1222"  className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskvduzsye6)">
                                                                    <circle id="SvgjsCircle1223" r="6" cx="594.8017578125" cy="3.8000000000000114"  className="apexcharts-marker no-pointer-events wynhp3nov" stroke="#7016d0" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="6"></circle>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g id="SvgjsG1228"  className="apexcharts-series">
                                                            <path id="SvgjsPath1250" d="M 0 247 L 74.3502197265625 167.2 L 148.700439453125 152 L 223.0506591796875 117.79999999999998 L 297.40087890625 157.7 L 371.7510986328125 228 L 446.101318359375 95 L 520.4515380859375 188.1 L 594.8017578125 98.79999999999998" fill="none" fill-opacity="1" stroke="rgba(8,177,186,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="3" stroke-dasharray="0"  className="apexcharts-line" clip-path="url(#nonForecastMaskvduzsye6)" path="M 0 247 L 74.3502197265625 167.2 L 148.700439453125 152 L 223.0506591796875 117.79999999999998 L 297.40087890625 157.7 L 371.7510986328125 228 L 446.101318359375 95 L 520.4515380859375 188.1 L 594.8017578125 98.79999999999998" fill-rule="evenodd"></path>
                                                            <path id="SvgjsPath1251" d="M 0 247 L 74.3502197265625 167.2 L 148.700439453125 152 L 223.0506591796875 117.79999999999998 L 297.40087890625 157.7 L 371.7510986328125 228 L 446.101318359375 95 L 520.4515380859375 188.1 L 594.8017578125 98.79999999999998" fill="none" fill-opacity="1" stroke="rgba(8,177,186,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="3" stroke-dasharray="4"  className="apexcharts-line" clip-path="url(#forecastMaskvduzsye6)" path="M 0 247 L 74.3502197265625 167.2 L 148.700439453125 152 L 223.0506591796875 117.79999999999998 L 297.40087890625 157.7 L 371.7510986328125 228 L 446.101318359375 95 L 520.4515380859375 188.1 L 594.8017578125 98.79999999999998"></path>
                                                            <g id="SvgjsG1229"  className="apexcharts-series-markers-wrap">
                                                                <g id="SvgjsG1231"  className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskvduzsye6)">
                                                                    <circle id="SvgjsCircle1232" r="6" cx="0" cy="247"  className="apexcharts-marker no-pointer-events wfw4lm5kyh" stroke="#08b1ba" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="6"></circle>
                                                                    <circle id="SvgjsCircle1233" r="6" cx="74.3502197265625" cy="167.2"  className="apexcharts-marker no-pointer-events wb6civsdf" stroke="#08b1ba" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="6"></circle>
                                                                </g>
                                                                <g id="SvgjsG1234"  className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskvduzsye6)">
                                                                    <circle id="SvgjsCircle1235" r="6" cx="148.700439453125" cy="152"  className="apexcharts-marker no-pointer-events wmio0wfoy" stroke="#08b1ba" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="6"></circle>
                                                                </g>
                                                                <g id="SvgjsG1236"  className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskvduzsye6)">
                                                                    <circle id="SvgjsCircle1237" r="6" cx="223.0506591796875" cy="117.79999999999998"  className="apexcharts-marker no-pointer-events w01d9bm69" stroke="#08b1ba" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="6"></circle>
                                                                </g>
                                                                <g id="SvgjsG1238"  className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskvduzsye6)">
                                                                    <circle id="SvgjsCircle1239" r="6" cx="297.40087890625" cy="157.7"  className="apexcharts-marker no-pointer-events wm1ruwi72k" stroke="#08b1ba" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="6"></circle>
                                                                </g>
                                                                <g id="SvgjsG1240"  className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskvduzsye6)">
                                                                    <circle id="SvgjsCircle1241" r="6" cx="371.7510986328125" cy="228"  className="apexcharts-marker no-pointer-events waa0nnw6j" stroke="#08b1ba" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="6"></circle>
                                                                </g>
                                                                <g id="SvgjsG1242"  className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskvduzsye6)">
                                                                    <circle id="SvgjsCircle1243" r="6" cx="446.101318359375" cy="95"  className="apexcharts-marker no-pointer-events wouycpt1ch" stroke="#08b1ba" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="6"></circle>
                                                                </g>
                                                                <g id="SvgjsG1244"  className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskvduzsye6)">
                                                                    <circle id="SvgjsCircle1245" r="6" cx="520.4515380859375" cy="188.1"  className="apexcharts-marker no-pointer-events wjiof0rev" stroke="#08b1ba" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="6"></circle>
                                                                </g>
                                                                <g id="SvgjsG1246"  className="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskvduzsye6)">
                                                                    <circle id="SvgjsCircle1247" r="6" cx="594.8017578125" cy="98.79999999999998"  className="apexcharts-marker no-pointer-events wbxwnv851j" stroke="#08b1ba" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="6"></circle>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div  className="relative flex flex-col mb-8 bg-white rounded shadow-lg dark:bg-dark-card grid gird-cols-1">
                                    <div  className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-secondary-600">
                                        <div  className="relative p-5">
                                            <h4  className="mb-0 dark:text-white">Date</h4>
                                        </div>
                                        <hr  className="m-0"/>
                                        <div  className="course-picker p-5">
                                            <div className="inline_flatpickr dark:bg-dark-strip flatpickr-input"></div>
                                            <div className="flatpickr-calendar animate inline">
                                                <div className="flatpickr-months">
                                                    <span  className="flatpickr-prev-month flatpickr-disabled">
                                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17"><g></g>
                                                            <path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z"></path>
                                                        </svg>
                                                    </span>
                                                    <div className="flatpickr-month">
                                                        <div  className="flatpickr-current-month">
                                                            <select className="flatpickr-monthDropdown-months" aria-label="Month">
                                                                <option  className="flatpickr-monthDropdown-month" value="9">October</option>
                                                                <option  className="flatpickr-monthDropdown-month" value="10">November</option>
                                                                <option  className="flatpickr-monthDropdown-month" value="11">December</option>
                                                            </select>
                                                            <div  className="numInputWrapper">
                                                                <input  className="numInput cur-year" type="number" aria-label="Year" min="2025"/>
                                                                <span  className="arrowUp"></span>
                                                                <span  className="arrowDown"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="flatpickr-next-month">
                                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17"><g></g>
                                                            <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div  className="flatpickr-innerContainer">
                                                    <div  className="flatpickr-rContainer">
                                                        <div  className="flatpickr-weekdays">
                                                            <div  className="flatpickr-weekdaycontainer">
                                                                <span  className="flatpickr-weekday">
                                                                    Sun
                                                                </span>
                                                                <span  className="flatpickr-weekday">Mon</span>
                                                                <span  className="flatpickr-weekday">Tue</span>
                                                                <span  className="flatpickr-weekday">Wed</span>
                                                                <span  className="flatpickr-weekday">Thu</span>
                                                                <span  className="flatpickr-weekday">Fri</span>
                                                                <span  className="flatpickr-weekday">Sat</span>
                                                            </div>
                                                        </div>
                                                        <div className="flatpickr-days">
                                                            <div  className="dayContainer">
                                                                <span  className="flatpickr-day prevMonthDay flatpickr-disabled" aria-label="September 28, 2025">28</span>
                                                                <span  className="flatpickr-day prevMonthDay flatpickr-disabled" aria-label="September 29, 2025">29</span>
                                                                <span  className="flatpickr-day prevMonthDay flatpickr-disabled" aria-label="September 30, 2025">30</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 1, 2025">1</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 2, 2025">2</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 3, 2025">3</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 4, 2025">4</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 5, 2025">5</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 6, 2025">6</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 7, 2025">7</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 8, 2025">8</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 9, 2025">9</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 10, 2025">10</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 11, 2025">11</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 12, 2025">12</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 13, 2025">13</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 14, 2025">14</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 15, 2025">15</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 16, 2025">16</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 17, 2025">17</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 18, 2025">18</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 19, 2025">19</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 20, 2025">20</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 21, 2025">21</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 22, 2025">22</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 23, 2025">23</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 24, 2025">24</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 25, 2025">25</span>
                                                                <span  className="flatpickr-day flatpickr-disabled" aria-label="October 26, 2025">26</span>
                                                                <span  className="flatpickr-day today" aria-label="October 27, 2025" aria-current="date">27</span>
                                                                <span  className="flatpickr-day" aria-label="October 28, 2025">28</span>
                                                                <span  className="flatpickr-day" aria-label="October 29, 2025">29</span>
                                                                <span  className="flatpickr-day" aria-label="October 30, 2025">30</span>
                                                                <span  className="flatpickr-day" aria-label="October 31, 2025">31</span>
                                                                <span  className="flatpickr-day nextMonthDay" aria-label="November 1, 2025">1</span>
                                                                <span  className="flatpickr-day nextMonthDay" aria-label="November 2, 2025">2</span>
                                                                <span  className="flatpickr-day nextMonthDay" aria-label="November 3, 2025">3</span>
                                                                <span  className="flatpickr-day nextMonthDay" aria-label="November 4, 2025">4</span>
                                                                <span  className="flatpickr-day nextMonthDay" aria-label="November 5, 2025">5</span>
                                                                <span  className="flatpickr-day nextMonthDay" aria-label="November 6, 2025">6</span>
                                                                <span  className="flatpickr-day nextMonthDay" aria-label="November 7, 2025">7</span>
                                                                <span  className="flatpickr-day nextMonthDay" aria-label="November 8, 2025">8</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="grid gird-cols-1 lg:grid-cols-3 lg:gap-8">
                                <div  className="relative flex flex-col mb-8 bg-white rounded shadow-lg dark:bg-dark-card grid gird-cols-1">
                                    <div  className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-secondary-600">
                                        <div  className="p-5">
                                            <div  className="mb-8">
                                                <div  className="flex justify-between items-center pb-0 mb-2">
                                                    <p  className="text-heading dark:text-white">Last Transaction</p>
                                                    <div  className="flex self-center">
                                                        <a  className="text-primary-500 bg-primary-100/[0.2] hover:text-primary-600 hover:bg-primary-500/20 focus:text-primary-600 focus:bg-primary-500/20 text-xs leading-none rounded-full font-bold px-2 py-1 dark:bg-dark-strip" href="javascript:void(0);">
                                                            View Report
                                                        </a>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h2  className="dark:text-white text-black">$46,996</h2>
                                                    <small  className="dark:text-white text-secondary-700 text-base">This Month</small>
                                                </div>
                                            </div>
                                            <div>
                                                <div  className="flex items-center gap-4 mb-8">
                                                    <div  className="bg-primary-500/10 p-3 rounded text-primary-500">
                                                        <svg width="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9964 8.37513H17.7618C15.7911 8.37859 14.1947 9.93514 14.1911 11.8566C14.1884 13.7823 15.7867 15.3458 17.7618 15.3484H22V15.6543C22 19.0136 19.9636 21 16.5173 21H7.48356C4.03644 21 2 19.0136 2 15.6543V8.33786C2 4.97862 4.03644 3 7.48356 3H16.5138C19.96 3 21.9964 4.97862 21.9964 8.33786V8.37513ZM6.73956 8.36733H12.3796H12.3831H12.3902C12.8124 8.36559 13.1538 8.03019 13.152 7.61765C13.1502 7.20598 12.8053 6.87318 12.3831 6.87491H6.73956C6.32 6.87664 5.97956 7.20858 5.97778 7.61852C5.976 8.03019 6.31733 8.36559 6.73956 8.36733Z" fill="currentColor"></path>
                                                            <path opacity="0.4" d="M16.0374 12.2966C16.2465 13.2478 17.0805 13.917 18.0326 13.8996H21.2825C21.6787 13.8996 22 13.5715 22 13.166V10.6344C21.9991 10.2297 21.6787 9.90077 21.2825 9.8999H17.9561C16.8731 9.90338 15.9983 10.8024 16 11.9102C16 12.0398 16.0128 12.1695 16.0374 12.2966Z" fill="currentColor"></path>
                                                            <circle cx="18" cy="11.8999" r="1" fill="currentColor"></circle>
                                                        </svg>
                                                    </div>
                                                    <div  className="w-full">
                                                        <div  className="flex justify-between">
                                                            <h6  className="mb-0 dark:text-white">Balance</h6>
                                                            <p  className="leading-tight font-medium text-secondary-600">$2,386</p>
                                                        </div>
                                                        <div  className="flex w-full h-1.5 mt-2 align-middle bg-primary-500/10 dark:bg-dark-strip rounded-full">
                                                            <div  className="w-1/4 text-xs leading-none text-center text-white bg-primary-500 rounded-l-full">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="flex items-center gap-4 mb-8">
                                                    <div  className="bg-info-500/10 p-3 rounded text-info-500">
                                                        <svg width="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.4" d="M6.447 22C3.996 22 2 19.9698 2 17.4755V12.5144C2 10.0252 3.99 8 6.437 8L17.553 8C20.005 8 22 10.0302 22 12.5256V17.4846C22 19.9748 20.01 22 17.563 22H16.623H6.447Z" fill="currentColor"></path>
                                                            <path d="M11.455 2.22103L8.54604 5.06682C8.24604 5.36094 8.24604 5.83427 8.54804 6.12742C8.85004 6.41959 9.33704 6.41862 9.63704 6.12547L11.23 4.56623V6.06119V14.4515C11.23 14.8654 11.575 15.2014 12 15.2014C12.426 15.2014 12.77 14.8654 12.77 14.4515V4.56623L14.363 6.12547C14.663 6.41862 15.15 6.41959 15.452 6.12742C15.603 5.98036 15.679 5.78849 15.679 5.59566C15.679 5.40477 15.603 5.21291 15.454 5.06682L12.546 2.22103C12.401 2.07981 12.205 1.99995 12 1.99995C11.796 1.99995 11.6 2.07981 11.455 2.22103Z" fill="currentColor"></path>
                                                        </svg>
                                                    </div>
                                                    <div  className="w-full">
                                                        <div  className="flex justify-between">
                                                            <h6  className="mb-0 dark:text-white">Transfer</h6>
                                                            <p  className="leading-tight font-medium text-secondary-600">$4,765</p>
                                                        </div>
                                                        <div  className="flex w-full h-1.5 mt-2 align-middle bg-info-500/10 dark:bg-dark-strip rounded-full">
                                                            <div  className="w-3/5 text-xs leading-none text-center text-white bg-info-500 rounded-l-full">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="flex items-center gap-4 mb-8">
                                                    <div  className="bg-success-500/10 p-3 rounded text-success-500">
                                                        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.4" d="M17.554 7.29614C20.005 7.29614 22 9.35594 22 11.8876V16.9199C22 19.4453 20.01 21.5 17.564 21.5L6.448 21.5C3.996 21.5 2 19.4412 2 16.9096V11.8773C2 9.35181 3.991 7.29614 6.438 7.29614H7.378L17.554 7.29614Z" fill="currentColor"></path>
                                                            <path d="M12.5464 16.0374L15.4554 13.0695C15.7554 12.7627 15.7554 12.2691 15.4534 11.9634C15.1514 11.6587 14.6644 11.6597 14.3644 11.9654L12.7714 13.5905L12.7714 3.2821C12.7714 2.85042 12.4264 2.5 12.0004 2.5C11.5754 2.5 11.2314 2.85042 11.2314 3.2821L11.2314 13.5905L9.63742 11.9654C9.33742 11.6597 8.85043 11.6587 8.54843 11.9634C8.39743 12.1168 8.32142 12.3168 8.32142 12.518C8.32142 12.717 8.39743 12.9171 8.54643 13.0695L11.4554 16.0374C11.6004 16.1847 11.7964 16.268 12.0004 16.268C12.2054 16.268 12.4014 16.1847 12.5464 16.0374Z" fill="currentColor"></path>
                                                        </svg>
                                                    </div>
                                                    <div  className="w-full">
                                                        <div  className="flex justify-between">
                                                            <h6  className="mb-0 dark:text-white">Received</h6>
                                                            <p  className="leading-tight font-medium text-secondary-600">$8,224</p>
                                                        </div>
                                                        <div  className="flex w-full h-1.5 mt-2 align-middle bg-success-500/10 dark:bg-dark-strip rounded-full">
                                                            <div  className="w-4/5 text-xs leading-none text-center text-white bg-success-500 rounded-l-full">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className="flex items-center gap-4 ">
                                                    <div  className="bg-danger-500/10 p-3 rounded text-danger-500">
                                                        <svg width="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9964 8.37513H17.7618C15.7911 8.37859 14.1947 9.93514 14.1911 11.8566C14.1884 13.7823 15.7867 15.3458 17.7618 15.3484H22V15.6543C22 19.0136 19.9636 21 16.5173 21H7.48356C4.03644 21 2 19.0136 2 15.6543V8.33786C2 4.97862 4.03644 3 7.48356 3H16.5138C19.96 3 21.9964 4.97862 21.9964 8.33786V8.37513ZM6.73956 8.36733H12.3796H12.3831H12.3902C12.8124 8.36559 13.1538 8.03019 13.152 7.61765C13.1502 7.20598 12.8053 6.87318 12.3831 6.87491H6.73956C6.32 6.87664 5.97956 7.20858 5.97778 7.61852C5.976 8.03019 6.31733 8.36559 6.73956 8.36733Z" fill="currentColor"></path>
                                                            <path opacity="0.4" d="M16.0374 12.2966C16.2465 13.2478 17.0805 13.917 18.0326 13.8996H21.2825C21.6787 13.8996 22 13.5715 22 13.166V10.6344C21.9991 10.2297 21.6787 9.90077 21.2825 9.8999H17.9561C16.8731 9.90338 15.9983 10.8024 16 11.9102C16 12.0398 16.0128 12.1695 16.0374 12.2966Z" fill="currentColor"></path>
                                                            <circle cx="18" cy="11.8999" r="1" fill="currentColor"></circle>
                                                        </svg>
                                                    </div>
                                                    <div  className="w-full">
                                                        <div  className="flex justify-between">
                                                            <h6  className="mb-0 dark:text-white">Outstanding</h6>
                                                            <p  className="leading-tight font-medium text-secondary-600">$1,224</p>
                                                        </div>
                                                        <div  className="flex w-full h-1.5 mt-2 align-middle bg-danger-500/10 dark:bg-dark-strip rounded-full">
                                                            <div  className="w-1/5 text-xs leading-none text-center text-white bg-danger-500 rounded-l-full">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className="relative flex flex-col mb-8 bg-white rounded shadow-lg dark:bg-dark-card grid gird-cols-1 lg:col-span-2">
                                    <div  className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-white">
                                        <div  className="relative flex flex-wrap justify-between p-5">
                                            <h4  className="mb-0 dark:text-white">Sales Order</h4>
                                            <div  className="flex items-center" x-data="{ open: false }">
                                                <div  className="" x-data="dropdown">
                                                    <span  className="flex items-center text-base cursor-pointer text-black dark:text-white mr-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x-bind="checkArrow()"  className="w-5 h-7 duraion-500 transition-transform rotate-0" viewBox="0 0 512 512" fill="currentColor">
                                                            <path d="M128 192l128 128 128-128z"></path>
                                                        </svg>
                                                    </span>
                                                    <div className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-bg rounded shadow-lg dark:text-secondary-600 origin-top-right" x-bind="dropdownTransition" style={{ display: 'none'}}>
                                                        <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 text-secondary-600 dark:text-white dark:hover:text-primary-500 group" href="javascript:void(0);">This Week</a>
                                                        <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 text-secondary-600 dark:text-white dark:hover:text-primary-500 group" href="javascript:void(0);">This Month</a>
                                                        <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 text-secondary-600 dark:text-white dark:hover:text-primary-500 group" href="javascript:void(0);">This Year</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div  className="flex-auto p-6 pt-0">
                                            <div  className="border dark:border-secondary-800 rounded overflow-x-auto">
                                                <table id="basic-table"  className="min-w-full overflow-hidden divide-y divide-secondary-200 dark:divide-secondary-800">
                                                    <thead>
                                                        <tr  className="bg-secondary-200 dark:bg-dark-bg">
                                                            <th  className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                                                COMPANIES</th>
                                                            <th  className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                                                CONTACTS</th>
                                                            <th  className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                                                ORDER</th>
                                                            <th  className="px-6 py-3 text-left rtl:text-right text-secondary-600 whitespace-nowrap font-semibold dark:text-white">
                                                                COMPLETION</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody  className="divide-y divide-secondary-200 dark:divide-secondary-800 dark:bg-dark-card dark:text-white">
                                                        <tr>
                                                            <td  className="px-6 py-4 whitespace-nowrap">
                                                                <div  className="flex items-center">
                                                                    <img  className="w-10 h-10 p-1 mr-3 rtl:mr-0 rtl:ml-3 text-primary-400 bg-primary-500/10 rounded-xl" src="../assets/images/shapes/01.png" alt="profile"/>
                                                                    <h6  className="font-medium pl-1 mt-2 dark:text-white">Addidis Sportwear</h6>
                                                                </div>
                                                            </td>
                                                            <td  className="px-6 py-4 whitespace-nowrap">
                                                                <div  className="iq-media-group iq-media-group-1">
                                                                    <a href="#"  className="relative inline-flex ml-0 rtl:mr-0  bg-no-repeat">
                                                                        <div  className="w-10 h-10 text-sm leading-10 text-center text-primary-500 bg-white border-2 border-primary-500 dark:bg-dark-card rounded-full hover:z-10 mr-3">
                                                                            SP</div>
                                                                    </a>
                                                                    <a href="#"  className="relative inline-flex -ml-5 rtl:-ml-0 rtl:-mr-5 bg-no-repeat">
                                                                        <div  className="w-10 h-10 text-sm leading-10 text-center text-primary-500 bg-white border-2 border-primary-500 dark:bg-dark-card rounded-full hover:z-10 mr-3">
                                                                            PP</div>
                                                                    </a>
                                                                    <a href="#"  className="relative inline-flex -ml-5 rtl:-ml-0 rtl:-mr-5  bg-no-repeat">
                                                                        <div  className="w-10 h-10 text-sm leading-10 text-center text-primary-500 bg-white border-2 border-primary-500 dark:bg-dark-card rounded-full hover:z-10 mr-3">
                                                                            MM</div>
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td  className="px-6 py-4 whitespace-nowrap dark:text-secondary-500 text-secondary-600">
                                                                $14,000</td>
                                                            <td  className="px-6 py-4 whitespace-nowrap">
                                                                <div  className="flex items-center mb-2">
                                                                    <h6  className="font-medium dark:text-white">60%</h6>
                                                                </div>
                                                                <div  className="flex w-full h-1 align-middle bg-primary-500/10 dark:bg-dark-card rounded-full shadow-inner">
                                                                    <div  className="w-3/5 text-xs leading-none text-center text-white bg-primary-500 rounded-l-full">
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr  className="bg-secondary-200 dark:bg-dark-strip">
                                                            <td  className="px-6 py-4 whitespace-nowrap">
                                                                <div  className="flex items-center">
                                                                    <img  className="w-10 h-10 p-1 mr-3 rtl:mr-0 rtl:ml-3 text-primary-400 bg-primary-500/10 rounded-xl" src="../assets/images/shapes/05.png" alt="profile"/>
                                                                    <h6  className="font-medium pl-1 mt-2 dark:text-white">Netflixer Platforms</h6>
                                                                </div>
                                                            </td>
                                                            <td  className="px-6 py-4 whitespace-nowrap">
                                                                <div  className="iq-media-group iq-media-group-1">
                                                                    <a href="#"  className="relative inline-flex ml-0 rtl:mr-0 bg-no-repeat">
                                                                        <div  className="w-10 h-10 text-sm leading-10 text-center text-primary-500 bg-white border-2 border-primary-500 dark:bg-dark-card rounded-full hover:z-10 mr-2">
                                                                            SP
                                                                        </div>
                                                                    </a>
                                                                    <a href="#"  className="relative inline-flex -ml-5 rtl:-ml-0 rtl:-mr-5 bg-no-repeat">
                                                                        <div  className="w-10 h-10 text-sm leading-10 text-center text-primary-500 bg-white border-2 border-primary-500 dark:bg-dark-card rounded-full hover:z-10 mr-2">
                                                                            PP
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td  className="px-6 py-4 whitespace-nowrap dark:text-secondary-500 text-secondary-600">
                                                                $30,000
                                                            </td>
                                                            <td  className="px-6 py-4 whitespace-nowrap">
                                                                <div  className="flex items-center mb-2">
                                                                    <h6  className="font-medium dark:text-white">25%</h6>
                                                                </div>
                                                                <div  className="flex w-full h-1 align-middle bg-primary-500/10 dark:bg-dark-card rounded-full shadow-inner">
                                                                    <div  className="w-2/5 text-xs leading-none text-center text-white bg-primary-500 rounded-l-full ">
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td  className="px-6 py-4 whitespace-nowrap">
                                                                <div  className="flex items-center">
                                                                    <img  className="w-10 h-10 p-1 mr-3 rtl:mr-0 rtl:ml-3 text-primary-400 bg-primary-500/10 rounded-xl" src="../assets/images/shapes/02.png" alt="profile"/>
                                                                    <h6  className="font-medium pl-1 mt-2 dark:text-white">Shopifi Stores</h6>
                                                                </div>
                                                            </td>
                                                            <td  className="px-6 py-4 whitespace-nowrap">
                                                                <div  className="iq-media-group iq-media-group-1">
                                                                    <a href="#"  className="relative inline-flex ml-0 rtl:mr-0 bg-no-repeat">
                                                                        <div  className="w-10 h-10 text-sm leading-10 text-center text-primary-500 bg-white border-2 border-primary-500 dark:bg-dark-card rounded-full hover:z-10 mr-2">
                                                                            PP</div>
                                                                    </a>
                                                                    <a href="#"  className="relative inline-flex -ml-5 rtl:-ml-0 rtl:-mr-5 bg-no-repeat">
                                                                        <div  className="w-10 h-10 text-sm leading-10 text-center text-primary-500 bg-white border-2 border-primary-500 dark:bg-dark-card rounded-full hover:z-10 mr-2">
                                                                            TP</div>
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td  className="px-6 py-4 whitespace-nowrap  dark:text-secondary-500 text-secondary-600">
                                                                $8,500</td>
                                                            <td  className="px-6 py-4 whitespace-nowrap">
                                                                <div  className="flex items-center mb-2">
                                                                    <h6  className="font-medium dark:text-white">100%</h6>
                                                                </div>
                                                                <div  className="flex w-full h-1 align-middle bg-green-100 dark:bg-dark-card rounded-full shadow-inner">
                                                                    <div  className="w-full text-xs leading-none text-center text-white bg-green-500 rounded-full">
                                                                    </div>
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
                            <div  className="grid gird-cols-1 lg:grid-cols-3 lg:gap-8">
                                <div  className="relative flex flex-col mb-8 lg:mb-0 bg-white rounded shadow-lg dark:bg-dark-card grid grid-cols-1">
                                    <div  className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-secondary-600">
                                        <div  className="relative flex flex-wrap justify-between p-5 border-b dark:border-secondary-800">
                                            <h4  className="mb-0 dark:text-white">Sales Analysis</h4>
                                            <div  className="flex items-center" x-data="{ open: false }">
                                                <div  className="" x-data="dropdown">
                                                    <span  className="flex items-center text-base cursor-pointer dark:text-white text-secondary-700">All
                                                        Tasks
                                                        <svg xmlns="http://www.w3.org/2000/svg" x-bind="checkArrow()"  className="w-5 h-7 duraion-500 transition-transform rotate-0" viewBox="0 0 512 512" fill="currentColor">
                                                            <path d="M128 192l128 128 128-128z"></path>
                                                        </svg>
                                                    </span>
                                                    <div  className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 text-secondary-600 origin-top-right" x-bind="dropdownTransition" style={{ display: 'none'}}>
                                                        <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 text-secondary-600 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Week</a>
                                                        <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 text-secondary-600 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Month</a>
                                                        <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 text-seconary-600 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Year</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div  className="flex-auto p-5">
                                        </div>
                                    </div>
                                </div>
                                <div  className="relative flex flex-col mb-8 lg:mb-0 bg-white rounded shadow-lg dark:bg-dark-card grid grid-cols-1">
                                    <div  className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-white">
                                        <div  className="relative flex flex-wrap justify-between p-5 border-b dark:border-secondary-800">
                                            <h4  className="mb-0 dark:text-white">To-Do List</h4>
                                            <div  className="flex items-center" x-data="{ open: false }">
                                                <div  className="" x-data="dropdown">
                                                    <span  className="flex items-center text-secondary-700 text-base cursor-pointer">All Tasks
                                                        <svg xmlns="http://www.w3.org/2000/svg" x-bind="checkArrow()"  className="w-5 h-7 duraion-500 transition-transform rotate-0" viewBox="0 0 512 512" fill="currentColor">
                                                            <path d="M128 192l128 128 128-128z"></path>
                                                        </svg>
                                                    </span>
                                                    <div  className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 text-secondary-700 origin-top-right" x-bind="dropdownTransition" style={{ display: 'none'}}>
                                                        <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 text-secondary-700  hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Week</a>
                                                        <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 text-secondary-700 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Month</a>
                                                        <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 text-secondary-700 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Year</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div  className="p-5">
                                            <div  className="flex justify-between  mb-4">
                                                <div  className="w-full">
                                                    <div  className="flex justify-between items-center -mb-2">
                                                        <h6  className="mb-0 dark:text-white">School Dashboard</h6>
                                                        <div  className="flex items-center" x-data="{ open: false }">
                                                            <div  className="text-secondary-700 dark:text-white" x-data="dropdown">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="w-10 h-10">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                                                                </svg>
                                                                <div className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 origin-top-right" x-bind="dropdownTransition" style={{ display: 'none'}}>
                                                                    <a className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Week</a>
                                                                    <a className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Month</a>
                                                                    <a className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Year</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div  className="flex items-center -mb-2">
                                                        <div  className="flex w-2/5 h-1.5  align-middle bg-info-500/10 dark:bg-dark-strip rounded-full">
                                                            <div  className="w-4/5 text-xs leading-none text-center text-white bg-success-500 rounded-full">
                                                            </div>
                                                        </div>
                                                        <small  className="ms-2 text-secondary-600 dark:text-white mr-3 ml-3">80% completed</small>
                                                    </div>
                                                    <small  className="-mt-1 text-secondary-600 dark:text-white">Due in 3 Days</small>
                                                </div>
                                            </div>
                                            <div  className="flex justify-between  mb-4">
                                                <div  className="w-full">
                                                    <div  className="flex justify-between items-center -mb-2">
                                                        <h6  className="mb-0 dark:text-white">Fashion Theme</h6>
                                                        <div  className="flex items-center" x-data="{ open: false }">
                                                            <div  className="text-secondary-700 dark:text-white" x-data="dropdown">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="w-10 h-10">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                                                                </svg>
                                                                <div  className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 origin-top-right" x-bind="dropdownTransition" style={{ display: 'none'}}>
                                                                    <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Week</a>
                                                                    <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Month</a>
                                                                    <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Year</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div  className="flex items-center -mb-2">
                                                        <div  className="flex w-2/5 h-1.5  align-middle bg-danger-500/10 dark:bg-dark-strip rounded-full">
                                                            <div  className="w-8 text-xs leading-none text-center text-white bg-danger-500 rounded-full">
                                                            </div>
                                                        </div>
                                                        <small  className="ms-2 text-secondary-600 dark:text-white mr-2 ml-2">15% completed</small>
                                                    </div>
                                                    <small  className="-mt-1 text-secondary-600 dark:text-white">Due in 3 Days</small>
                                                </div>
                                            </div>
                                            <div  className="flex justify-between  mb-4">
                                                <div  className="w-full">
                                                    <div  className="flex justify-between items-center -mb-2">
                                                        <h6  className="mb-0 dark:text-white">Sidebar Patterns</h6>
                                                        <div  className="flex items-center" x-data="{ open: false }">
                                                            <div  className="text-secondary-700 dark:text-white" x-data="dropdown">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="w-10 h-10">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                                                                </svg>
                                                                <div  className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 origin-top-right" x-bind="dropdownTransition" style={{ display: 'none'}}>
                                                                    <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Week</a>
                                                                    <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Month</a>
                                                                    <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Year</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div  className="flex items-center -mb-2">
                                                        <div  className="flex w-2/5 h-1.5  align-middle bg-primary-500/10 dark:bg-dark-strip rounded-full">
                                                            <div  className="w-24 text-xs leading-none text-center text-white bg-primary-500 rounded-full">
                                                            </div>
                                                        </div>
                                                        <small  className="ms-2 text-secondary-600 dark:text-white mr-2 ml-2">50% completed</small>
                                                    </div>
                                                    <small  className="-mt-1 text-secondary-600 dark:text-white">Due in 3 Days</small>
                                                </div>
                                            </div>
                                            <div  className="flex justify-between  mb-4">
                                                <div  className="w-full">
                                                    <div  className="flex justify-between items-center -mb-2">
                                                        <h6  className="mb-0 dark:text-white">Menu Bar Update</h6>
                                                        <div  className="flex items-center" x-data="{ open: false }">
                                                            <div  className="text-secondary-700 dark:text-white" x-data="dropdown">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="w-10 h-10">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                                                                </svg>
                                                                <div  className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 origin-top-right" x-bind="dropdownTransition" style={{ display: 'none'}}>
                                                                    <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Week</a>
                                                                    <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Month</a>
                                                                    <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Year</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div  className="flex items-center -mb-2">
                                                        <div  className="flex w-2/5 h-1.5  align-middle bg-secondary-500/10 dark:bg-dark-strip rounded-full">
                                                            <div  className="w-20 text-xs leading-none text-center text-white bg-secondary-400 rounded-full">
                                                            </div>
                                                        </div>
                                                        <small className="ms-2 text-secondary-600 dark:text-white mr-2 ml-2">35% completed</small>
                                                    </div>
                                                    <small  className="-mt-1 text-secondary-600 dark:text-white">Due in 3 Days</small>
                                                </div>
                                            </div>
                                            <div  className="flex justify-between  mb-4">
                                                <div  className="w-full">
                                                    <div  className="flex justify-between items-center -mb-2">
                                                        <h6  className="mb-0 dark:text-white">Blog Theme</h6>
                                                        <div  className="flex items-center" x-data="{ open: false }">
                                                            <div  className="text-secondary-700 dark:text-white" x-data="dropdown">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="w-10 h-10">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                                                                </svg>
                                                                <div  className="absolute z-50 px-3 py-4 ease-in-out duration-300 right-8 rtl:right-[unset] rtl:left-4 text-left bg-white dark:bg-dark-card rounded shadow-dropdown shadow-lg dark:text-secondary-600 origin-top-right" x-bind="dropdownTransition" style={{ display: 'none'}}>
                                                                    <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Week</a>
                                                                    <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Month</a>
                                                                    <a  className="flex justify-between w-full pl-3 pr-7 mr-2 py-1 hover:bg-primary-500/[0.1] hover:text-primary-500 hover:rounded hover:ease-in-out duration-300 group" href="javascript:void(0);">This Year</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div  className="flex items-center -mb-2">
                                                        <div  className="flex w-2/5 h-1.5  align-middle bg-info-500/10 dark:bg-dark-strip rounded-full">
                                                            <div  className="w-full text-xs leading-none text-center text-white bg-success-500 rounded-full">
                                                            </div>
                                                        </div>
                                                        <small  className="ms-2 text-secondary-600 dark:text-white mr-2 ml-2">100% completed</small>
                                                    </div>
                                                    <small  className="-mt-1 text-secondary-600 dark:text-white">Due in 3 Days</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className="relative flex flex-col  lg:mb-0  bg-white rounded shadow-lg dark:bg-dark-card grid grid-cols-1">
                                    <div  className="flex flex-col overflow-hidden bg-white rounded-lg dark:bg-dark-card dark:text-white">
                                        <div  className="relative flex flex-wrap justify-between p-5 border-b dark:border-secondary-800">
                                            <h4  className="mb-0 dark:text-white">Activity Overview</h4>
                                        </div>
                                        <div  className="flex-auto p-5">
                                            <p  className="mb-6 text-success-500 dark:text-success-500 LR">
                                                <svg  className="inline-block mr-2 rtl:mr-0 rtl:ml-2" width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="#17904b" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z">
                                                    </path>
                                                </svg>
                                                16% this month
                                            </p>
                                            <div  className="flex">
                                                <div  className="">
                                                    <span  className="mb-0 text-black dark:text-white mr-3 rtl:ml-3">07:45</span>
                                                </div>
                                                <div  className="relative justify-between flex pb-6 items-top">
                                                    <div>
                                                        <div  className="border border-r rtl:border-l rtl:right-3 rtl:left-0 bg-secondary-100 h-3/5 w-px absolute dark:border-secondary-700 left-3 top-5 z-10">
                                                        </div>
                                                        <div  className="w-5 h-5  rtl:right-0 bg-white border-2 border-success-500 dark:bg-dark-card rounded-full z-10">
                                                        </div>
                                                    </div>
                                                    <div  className="ml-4 rtl:mr-4 LR">
                                                        <h6  className=" font-medium dark:text-white mb-0">$2400, Purchased a Wordpress Theme</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className="flex">
                                                <div  className="">
                                                    <span  className="mb-0 text-black dark:text-white mr-3 rtl:ml-3">08:50</span>
                                                </div>
                                                <div  className="relative justify-between flex pb-6 items-top">
                                                    <div>
                                                        <div  className="border border-r rtl:border-l rtl:right-3 rtl:left-0 bg-secondary-100 h-3/5 w-px absolute dark:border-secondary-700 left-3 top-5 z-10">
                                                        </div>
                                                        <div  className="w-5 h-5  rtl:right-0 bg-white border-2 border-warning-500 dark:bg-dark-card rounded-full z-10">
                                                        </div>
                                                    </div>
                                                    <div  className="ml-4 rtl:mr-4 LR">
                                                        <h6  className=" font-medium dark:text-white mb-0">New order placed #8744152 of 3D Icons</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className="flex">
                                                <div  className="">
                                                    <span  className="mb-0 text-black dark:text-white mr-3 rtl:ml-3">10:00</span>
                                                </div>
                                                <div  className="relative justify-between flex pb-8 items-top">
                                                    <div>
                                                        <div  className="border border-r rtl:border-l rtl:right-3 rtl:left-0 bg-secondary-100 h-3/5 w-px absolute dark:border-secondary-700 left-3 top-5 z-10">
                                                        </div>
                                                        <div  className="w-5 h-5  rtl:right-0 bg-white border-2 border-info-500 dark:bg-dark-card rounded-full z-10">
                                                        </div>
                                                    </div>
                                                    <div  className="ml-4 rtl:mr-4 LR">
                                                        <h6  className=" font-medium dark:text-white mb-0">Affilate Payout</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className="flex">
                                                <div  className="">
                                                    <span  className="mb-0 text-black dark:text-white mr-3 rtl:ml-3">13:15</span>
                                                </div>
                                                <div  className="relative justify-between flex pb-8 items-top">
                                                    <div>
                                                        <div  className="border border-r rtl:border-l rtl:right-3 rtl:left-0 bg-secondary-100 h-3/5 w-px absolute dark:border-secondary-700 left-3 top-5 z-10">
                                                        </div>
                                                        <div  className="w-5 h-5  rtl:right-0 bg-white border-2 border-black dark:bg-dark-card rounded-full z-10">
                                                        </div>
                                                    </div>
                                                    <div  className="ml-4 rtl:mr-4 LR">
                                                        <h6  className=" font-medium dark:text-white mb-0">New user added in Qompac UI</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className="flex">
                                                <div  className="">
                                                    <span  className="mb-0 text-black dark:text-white mr-3 rtl:ml-3">15:30</span>
                                                </div>
                                                <div  className="relative justify-between flex pb-8 items-top">
                                                    <div>
                                                        <div  className="border border-r rtl:border-l rtl:right-3 rtl:left-0 bg-secondary-100 h-3/5 w-px absolute dark:border-secondary-700 left-3 top-5 z-10">
                                                        </div>
                                                        <div  className="w-5 h-5  rtl:right-0 bg-white border-2 border-success-500 dark:bg-dark-card rounded-full z-10">
                                                        </div>
                                                    </div>
                                                    <div  className="ml-4 rtl:mr-4 LR">
                                                        <h6  className=" font-medium dark:text-white mb-0">$Product added in Wish List</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className="flex">
                                                <div  className="">
                                                    <span  className="mb-0 text-black dark:text-white mr-3 rtl:ml-3">18:40</span>
                                                </div>
                                                <div  className="relative justify-between flex pb-8 items-top">
                                                    <div>
                                                        <div  className="border border-r rtl:border-l rtl:right-3 rtl:left-0 bg-secondary-100 h-3/5 w-px absolute dark:border-secondary-700 left-3 top-5 z-10">
                                                        </div>
                                                        <div  className="w-5 h-5  rtl:right-0 bg-white border-2 border-warning-500 dark:bg-dark-card rounded-full z-10">
                                                        </div>
                                                    </div>
                                                    <div  className="ml-4 rtl:mr-4 LR">
                                                        <h6  className=" font-medium dark:text-white mb-0">New order Placed #87444892 of Dashboard</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer  className="footer w-full text-sm bg-white dark:bg-dark-card ">
                            <ul  className="p-0 mb-0 left-panel list-inline">
                                <li  className="inline-block mr-2 text-primary-500 dark:text-primary-500"><a href="../dashboard/extra/privacy-policy.html">Privacy Policy</a></li>
                                <li  className="inline-block mr-2 text-primary-500 dark:text-primary-500"><a href="../dashboard/extra/terms-of-use.html">Terms of Use</a></li>
                            </ul>
                            <div  className="footer-second text-secondary-700 flex flex-wrap dark:text-white text-sm">
                                ©<script>document.write(new Date().getFullYear())</script>2025 Qompac UI, Made with &nbsp;
                                <span>
                                    <svg width="15"  className="text-secondary-600 mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.85 2.50065C16.481 2.50065 17.111 2.58965 17.71 2.79065C21.401 3.99065 22.731 8.04065 21.62 11.5806C20.99 13.3896 19.96 15.0406 18.611 16.3896C16.68 18.2596 14.561 19.9196 12.28 21.3496L12.03 21.5006L11.77 21.3396C9.48102 19.9196 7.35002 18.2596 5.40102 16.3796C4.06102 15.0306 3.03002 13.3896 2.39002 11.5806C1.26002 8.04065 2.59002 3.99065 6.32102 2.76965C6.61102 2.66965 6.91002 2.59965 7.21002 2.56065H7.33002C7.61102 2.51965 7.89002 2.50065 8.17002 2.50065H8.28002C8.91002 2.51965 9.52002 2.62965 10.111 2.83065H10.17C10.21 2.84965 10.24 2.87065 10.26 2.88965C10.481 2.96065 10.69 3.04065 10.89 3.15065L11.27 3.32065C11.3618 3.36962 11.4649 3.44445 11.554 3.50912C11.6104 3.55009 11.6612 3.58699 11.7 3.61065C11.7163 3.62028 11.7329 3.62996 11.7496 3.63972C11.8354 3.68977 11.9247 3.74191 12 3.79965C13.111 2.95065 14.46 2.49065 15.85 2.50065ZM18.51 9.70065C18.92 9.68965 19.27 9.36065 19.3 8.93965V8.82065C19.33 7.41965 18.481 6.15065 17.19 5.66065C16.78 5.51965 16.33 5.74065 16.18 6.16065C16.04 6.58065 16.26 7.04065 16.68 7.18965C17.321 7.42965 17.75 8.06065 17.75 8.75965V8.79065C17.731 9.01965 17.8 9.24065 17.94 9.41065C18.08 9.58065 18.29 9.67965 18.51 9.70065Z" fill="currentColor"></path>
                                    </svg>
                                </span>&nbsp; by &nbsp;<a  className="text-primary-500 dark:text-primary-500" href="https://iqonic.design/"> IQONIC Design.</a>
                            </div>
                    </footer>
                </div>
            </div>
    </>
  )
    
}

export default AdminDashboard;
