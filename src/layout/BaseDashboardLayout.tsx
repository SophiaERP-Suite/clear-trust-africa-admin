// src/layouts/BaseDashboardLayout.tsx
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DashboardHead from "../components/DashboardHead";

interface NavItem {
  path: string;
  icon: string;
  label: string;
}

interface BaseDashboardLayoutProps {
  navItems: NavItem[];
  title: string;
}

function BaseDashboardLayout({ navItems, title }: BaseDashboardLayoutProps) {
  const navigate = useNavigate();

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
        x-data="settingInit"
      >
        {/* Sidebar */}
        <aside
          x-data="sidebar"
          className="z-50 sidebar shadow-lg sidebar-base sidebar-default"
          data-toggle="main-sidebar"
        >
          <div className="sidebar-header relative flex items-center justify-start mb-3 border-b dark:border-gray-700 z-0">
            <a
              href="/admin/dashboard"
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
                />
                <path
                  d="M23.751 30L13.2266 15.2103H21.4755L31.9999 30H23.751Z"
                  fill="#3FF0B9"
                />
              </svg>
              <h4 className="sidebar-logo ml-2">{title}</h4>
            </a>
          </div>

          <div className="sidebar-body data-scrollbar">
            <ul className="sidebar-main-menu">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    <i
                      className="icon"
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    />
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
            {/* Top Navigation */}
            <nav className="z-40 bg-white dark:bg-dark-card nav shadow-lg navbar navbar-expand-xl navbar-light iq-navbar py-0">
              <div className="w-full px-7 py-2">
                <div className="flex justify-between items-center">
                  <div className="breadcrumb-title">
                    <small className="capitalize hidden md:block">
                      Dashboard
                    </small>
                  </div>

                  {/* User Profile */}
                  <div className="flex items-center gap-4">
                    <button className="relative text-gray-500 hover:text-primary-500">
                      <svg
                        className="icon-24"
                        width="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.7695 11.6453C19.039 10.7923 18.7071 10.0531 18.7071 8.79716V8.37013C18.7071 6.73354 18.3304 5.67907 17.5115 4.62459C16.2493 2.98699 14.1244 2 12.0442 2H11.9558C9.91935 2 7.86106 2.94167 6.577 4.5128C5.71333 5.58842 5.29293 6.68822 5.29293 8.37013V8.79716C5.29293 10.0531 4.98284 10.7923 4.23049 11.6453C3.67691 12.2738 3.5 13.0815 3.5 13.9557C3.5 14.8309 3.78723 15.6598 4.36367 16.3336C5.11602 17.1413 6.17846 17.6569 7.26375 17.7466C8.83505 17.9258 10.4063 17.9933 12.0005 17.9933C13.5937 17.9933 15.165 17.8805 16.7372 17.7466C17.8215 17.6569 18.884 17.1413 19.6363 16.3336C20.2118 15.6598 20.5 14.8309 20.5 13.9557C20.5 13.0815 20.3231 12.2738 19.7695 11.6453Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>

                    <div className="flex items-center">
                      <img
                        src="/assets/images/avatars/01.png"
                        alt="User Profile"
                        className="h-12 w-12 rounded-full"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://ui-avatars.com/api/?name=User&background=3b82f6&color=fff";
                        }}
                      />
                      <div className="ml-3">
                        <h6 className="mb-0 font-medium">Admin User</h6>
                        <button
                          onClick={() => navigate("/")}
                          className="text-sm text-gray-500 hover:text-primary-500"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* Page Content */}
            <div className="p-6 lg:p-8 footer-inner mx-auto main-container">
              <Outlet />
            </div>
          </div>

          {/* Footer */}
          <footer className="footer w-full text-sm bg-white dark:bg-dark-card p-4">
            <div className="flex justify-between items-center">
              <ul className="flex gap-4">
                <li>
                  <a href="#" className="text-primary-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-500">
                    Terms of Use
                  </a>
                </li>
              </ul>
              <div className="text-secondary-700 dark:text-white">
                © {new Date().getFullYear()} Qompac UI
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

export default BaseDashboardLayout;
