import { MapPin, Building2, Flag, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

function LocationManagement() {
  const navigate = useNavigate();

  const quickLinks = [
    {
      id: "countries",
      title: "Countries",
      description: "Manage country listings",
      icon: <Flag className="h-8 w-8" />,
      color: "bg-green-100 text-green-600",
      path: "/ControlPanel/locationMgt/countries",
    },
    {
      id: "states",
      title: "States/Provinces",
      description: "Manage state and province information",
      icon: <Building2 className="h-8 w-8" />,
      color: "bg-blue-100 text-blue-600",
      path: "/ControlPanel/locationMgt/states",
    },
    {
      id: "cities",
      title: "Cities/LGA",
      description: "Manage city listings and details",
      icon: <Globe className="h-8 w-8" />,
      color: "bg-purple-100 text-purple-600",
      path: "/ControlPanel/locationMgt/cities",
    },
  ];

  return (
    <div
      className="footer-inner mx-auto main-container container"
      x-bind:className="setting.page_layout"
    >
      <div className="flex flex-wrap contet-inner">
        <div className="flex-auto w-full">
          <div className="relative flex flex-col mb-8  bg-white dark:bg-dark-card shadow rounded">
            <div className="flex justify-between flex-auto p-5 border-b dark:border-secondary-800 rounded">
              <h4 className="mb-0 dark:text-secondary-200">
                <MapPin /> Location Management
              </h4>
            </div>
            <div className="py-2 px-3">
              <div className="overflow-x-auto">
                <div className=" overflow-x-auto p-5">
                  <div className="mt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {quickLinks.map((link) => (
                        <button
                          key={link.id}
                          onClick={() => navigate(link.path)}
                          className="bg-white p-5 rounded-sm border hover:shadow-md transition-shadow text-left group cursor-pointer"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className={`p-2 rounded-lg ${link.color}`}>
                              {link.icon}
                            </div>
                          </div>
                          <h3 className="font-semibold text-gray-800 mb-1">
                            {link.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3">
                            {link.description}
                          </p>
                          <span className="text-purple-600 text-sm font-medium group-hover:underline">
                            Go to section →
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationManagement;
