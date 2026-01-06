import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { MapPin, Plus, Shield, Trash2, Pen } from "lucide-react";
import Modal from "../../utils/modal";
import type {
  CountryDto,
  StateDto,
} from "../../../types/controlPanel/location";
import {
  getAllCountry,
  // getStatesByCountry,
  // getCitiesByState,
  // createCountry,
  // updateCountry,
  // deleteCountry,
  createState,
  // updateState,
  // deleteState,
  // createCity,
  // updateCity,
  // deleteCity
} from "../../../api/locationApi";

type ModalType = "add" | "edit" | "delete" | null;
type EntityType = "country" | "state" | "city";

function LocationManagement() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState<CountryDto[]>([]);
  const [states, setStates] = useState<StateDto[]>([]);
  // const [cities, setCities] = useState<CityDto[]>([]);
  const [selectedCountryId, setSelectedCountryId] = useState<string>("");
  const [selectedStateId, setSelectedStateId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [entityType, setEntityType] = useState<EntityType>("country");
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  // useEffect(() => {
  //   if (selectedCountryId) {
  //     fetchStates(selectedCountryId);
  //   } else {
  //     setStates([]);
  //     setSelectedStateId("");
  //     setCities([]);
  //   }
  // }, [selectedCountryId]);

  // useEffect(() => {
  //   if (selectedStateId) {
  //     fetchCities(selectedStateId);
  //   } else {
  //     setCities([]);
  //   }
  // }, [selectedStateId]);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const data = await getAllCountry();
      setCountries(data);
    } catch (err: any) {
      console.error(err);
      setError("Failed to fetch countries");
      toast.error("Failed to fetch countries");
    } finally {
      setLoading(false);
    }
  };

  // const fetchStates = async (countryId: string) => {
  //   try {
  //     setLoading(true);
  //     const data = await getStatesByCountry(countryId);
  //     setStates(data);
  //   } catch (err: any) {
  //     console.error(err);
  //     setError("Failed to fetch states");
  //     toast.error("Failed to fetch states");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const fetchCities = async (stateId: string) => {
  //   try {
  //     setLoading(true);
  //     const data = await getCitiesByState(stateId);
  //     setCities(data);
  //   } catch (err: any) {
  //     console.error(err);
  //     setError("Failed to fetch cities");
  //     toast.error("Failed to fetch cities");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const refreshList = () => {
    switch (entityType) {
      case "country":
        fetchCountries();
        break;
      // case "state":
      //   if (selectedCountryId) fetchStates(selectedCountryId);
      //   break;
      // case "city":
      //   if (selectedStateId) fetchCities(selectedStateId);
      //   break;
    }
  };

  const openCreateModal = (type: EntityType) => {
    setEntityType(type);
    setModalType("add");
    setSelectedItem(null);
    setModalOpen(true);
  };

  const openEditModal = (type: EntityType, item: any) => {
    setEntityType(type);
    setModalType("edit");
    setSelectedItem(item);
    setModalOpen(true);
  };

  const openDeleteModal = (type: EntityType, item: any) => {
    setEntityType(type);
    setModalType("delete");
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
  };

  const createEntity = async (
    type: EntityType,
    data: { name?: string; code?: string; countryId: number }
  ) => {
    switch (type) {
      // case "country":
      //   await createState(data);
      //   toast.success("Country created successfully");
      //   break;
      // case "state":
      //   if (!selectedCountryId)
      //     throw new Error("Please select a country first");
      //   await createState(selectedCountryId, data);
      //   toast.success("State created successfully");
      //   break;
      // case "city":
      //   if (!selectedStateId) throw new Error("Please select a state first");
      //   await createCity(selectedStateId, data);
      //   toast.success("City created successfully");
      //   break;
    }
  };

  // const updateEntity = async (
  //   type: EntityType,
  //   id: string,
  //   data: { name?: string; code?: string }
  // ) => {
  //   switch (type) {
  //     case "country":
  //       await updateCountry(id, data);
  //       toast.success("Country updated successfully");
  //       break;
  //     case "state":
  //       await updateState(id, data);
  //       toast.success("State updated successfully");
  //       break;
  //     case "city":
  //       await updateCity(id, data);
  //       toast.success("City updated successfully");
  //       break;
  //   }
  // };

  // const deleteEntity = async (type: EntityType, id: string) => {
  //   switch (type) {
  //     case "country":
  //       await deleteCountry(id);
  //       toast.success("Country deleted successfully");
  //       break;
  //     case "state":
  //       await deleteState(id);
  //       toast.success("State deleted successfully");
  //       break;
  //     case "city":
  //       await deleteCity(id);
  //       toast.success("City deleted successfully");
  //       break;
  //   }
  // };

  const handleConfirm = async (name?: string, code?: string) => {
    try {
      setLoading(true);

      // if (modalType === "add") {
      //   await createEntity(entityType, { name, code });
      // } else if (modalType === "edit") {
      //   await updateEntity(entityType, selectedItem.id, { name, code });
      // } else if (modalType === "delete") {
      //   await deleteEntity(entityType, selectedItem.id);
      // }

      refreshList();
      closeModal();
    } catch (err: any) {
      toast.error(err.message || "Operation failed");
    } finally {
      setLoading(false);
    }
  };

  const getModalConfig = () => {
    const isDelete = modalType === "delete";

    const titles = {
      add: `Add ${entityType}`,
      edit: `Edit ${entityType}`,
      delete: `Delete ${entityType}`,
    };

    const messages = {
      add: `Enter details for the new ${entityType}`,
      edit: `Update the ${entityType} details`,
      delete: `Are you sure you want to delete "${selectedItem?.name}"? This action cannot be undone.`,
    };

    const confirmTexts = {
      add: "Create",
      edit: "Update",
      delete: "Delete",
    };

    const confirmColors = {
      add: "green" as const,
      edit: "yellow" as const,
      delete: "red" as const,
    };

    const icons = {
      add: <Plus size={16} />,
      edit: <Pen size={16} />,
      delete: <Trash2 size={16} />,
    };

    return {
      title: modalType ? titles[modalType] : "",
      message: modalType ? messages[modalType] : "",
      confirmText: modalType ? confirmTexts[modalType] : "",
      confirmColor: modalType ? confirmColors[modalType] : "green",
      butonIcon: modalType ? icons[modalType] : <Plus size={16} />,
      headerIcon: <Shield size={20} />,
      inputLabel: !isDelete ? "Name" : undefined,
      inputLabel2: !isDelete ? "Code" : undefined,
      defaultInputValue: !isDelete ? selectedItem?.name || "" : "",
      defaultInputValue2: !isDelete ? selectedItem?.code || "" : "",
    };
  };

  const modalConfig = getModalConfig();

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
                  <ToastContainer />

                  <Modal
                    isOpen={modalOpen}
                    title={modalConfig.title}
                    message={modalConfig.message}
                    confirmText={modalConfig.confirmText}
                    confirmColor={modalConfig.confirmColor}
                    inputLabel={modalConfig.inputLabel}
                    inputLabel2={modalConfig.inputLabel2}
                    defaultInputValue={modalConfig.defaultInputValue}
                    defaultInputValue2={modalConfig.defaultInputValue2}
                    loading={loading}
                    butonIcon={modalConfig.butonIcon}
                    headerIcon={modalConfig.headerIcon}
                    onConfirm={(name, code) => handleConfirm(name, code)}
                    onCancel={closeModal}
                  />

                  {/* Countries Section */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-sm font-bold">All Countries</h4>
                      {/* <button
                        className="btn btn-success btn-sm"
                        onClick={() => openCreateModal("country")}
                      >
                        <Plus size={16} /> Add Country
                      </button> */}
                    </div>

                    {loading && (
                      <div className="loading flex items-center justify-center gap-3 text-center mt-8">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 44 44"
                          stroke="currentColor"
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
                        <span className="text-gray-700">Please Wait...</span>
                      </div>
                    )}

                    {!loading && !error && countries.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        No countries found.
                      </div>
                    )}

                    {!loading && !error && countries.length > 0 && (
                      <div className="space-y-3 grid md:grid-cols-2">
                        {countries.map((country) => (
                          <div
                            key={country.CountryId}
                            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100"
                          >
                            <div>
                              <span className="font-medium">
                                {country.name}
                              </span>
                              {country.code && (
                                <span className="ml-2 text-sm text-gray-500">
                                  ({country.code})
                                </span>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <button
                                className="btn btn-warning btn-icon btn-sm"
                                onClick={() =>
                                  openEditModal("country", country)
                                }
                              >
                                <Pen size={14} />
                              </button>
                              <button
                                className="btn btn-danger btn-icon btn-sm"
                                onClick={() =>
                                  openDeleteModal("country", country)
                                }
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* States Section */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-sm font-bold">
                        All States By Country
                      </h4>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => openCreateModal("state")}
                        disabled={!selectedCountryId}
                      >
                        <Plus size={16} /> Add State
                      </button>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">
                          Find state a country
                        </label>
                        <select
                          className="form-control w-full"
                          value={selectedCountryId}
                          onChange={(e) => setSelectedCountryId(e.target.value)}
                        >
                          <option value="">Select Country</option>
                          {countries.map((country) => (
                            <option
                              key={country.CountryId}
                              value={country.CountryId}
                            >
                              {country.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {selectedCountryId && (
                      <>
                        {/* {loading && states.length === 0 ? (
                          <div className="loading flex items-center justify-center gap-3 text-center mt-8">
                            <span className="text-gray-700">
                              Loading states...
                            </span>
                          </div>
                        ) : states.length === 0 ? (
                          <div className="text-center py-8 text-gray-500">
                            No states found for this country.
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {states.map((state) => (
                              <div
                                key={state.StateId}
                                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100"
                              >
                                <div>
                                  <span className="font-medium">
                                    {state.name}
                                  </span>
                                  {state.code && (
                                    <span className="ml-2 text-sm text-gray-500">
                                      ({state.code})
                                    </span>
                                  )}
                                </div>
                                <div className="flex gap-2">
                                  <button
                                    className="btn btn-warning btn-icon btn-sm"
                                    onClick={() =>
                                      openEditModal("state", state)
                                    }
                                  >
                                    <Pen size={14} />
                                  </button>
                                  <button
                                    className="btn btn-danger btn-icon btn-sm"
                                    onClick={() =>
                                      openDeleteModal("state", state)
                                    }
                                  >
                                    <Trash2 size={14} />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )} */}
                      </>
                    )}
                  </div>

                  {/* Cities Section */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-sm font-bold">Cities</h4>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => openCreateModal("city")}
                        disabled={!selectedStateId}
                      >
                        <Plus size={16} /> Add City
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Select Country
                        </label>
                        <select
                          className="form-control w-full"
                          value={selectedCountryId}
                          onChange={(e) => setSelectedCountryId(e.target.value)}
                        >
                          <option value="">Select a country</option>
                          {countries.map((country) => (
                            <option
                              key={country.CountryId}
                              value={country.CountryId}
                            >
                              {country.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Select State
                        </label>
                        <select
                          className="form-control w-full"
                          value={selectedStateId}
                          onChange={(e) => setSelectedStateId(e.target.value)}
                          disabled={!selectedCountryId}
                        >
                          <option value="">Select a state</option>
                          {/* {states.map((state) => (
                            <option key={state.StateId} value={state.StateId}>
                              {state.name}
                            </option>
                          ))} */}
                        </select>
                      </div>
                    </div>

                    {selectedStateId && (
                      <>
                        {/* {loading && cities.length === 0 ? (
                          <div className="loading flex items-center justify-center gap-3 text-center mt-8">
                            <span className="text-gray-700">
                              Loading cities...
                            </span>
                          </div>
                        ) : cities.length === 0 ? (
                          <div className="text-center py-8 text-gray-500">
                            No cities found for this state.
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {cities.map((city) => (
                              <div
                                key={city.CityId}
                                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100"
                              >
                                <div>
                                  <span className="font-medium">
                                    {city.name}
                                  </span>
                                  {city.code && (
                                    <span className="ml-2 text-sm text-gray-500">
                                      ({city.code})
                                    </span>
                                  )}
                                </div>
                                <div className="flex gap-2">
                                  <button
                                    className="btn btn-warning btn-icon btn-sm"
                                    onClick={() => openEditModal("city", city)}
                                  >
                                    <Pen size={14} />
                                  </button>
                                  <button
                                    className="btn btn-danger btn-icon btn-sm"
                                    onClick={() =>
                                      openDeleteModal("city", city)
                                    }
                                  >
                                    <Trash2 size={14} />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )} */}
                      </>
                    )}
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
