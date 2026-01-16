import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Building2, Pen, Plus, Trash2, Flag, CheckCheck } from "lucide-react";
import type {
  StateDto,
  CountryDto,
  CityDto,
} from "../../../types/controlPanel/location";
import {
  createCity,
  deleteCity,
  getAllCities,
  getAllCountries,
  getAllStates,
  updateCity,
} from "../../../api/locationApi";
import { useSearchParams, useNavigate } from "react-router-dom";
import Loading from "../../utils/Loading";
import Modal from "../../../components/modal";

type ModalType = "add" | "edit" | "delete" | null;

function CitiesManagement() {
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState<CityDto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedStateId, setSelectedStateId] = useState<number | null>(null);
  const [selectedCityId, setSelectedCityId] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityDto | null>(null);
  const [selectedCountryId, setSelectedCountryId] = useState<number | null>(
    null
  );
  const [countries, setCountries] = useState<CountryDto[]>([]);
  const [states, setStates] = useState<StateDto[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const stateIdParam = searchParams.get("stateId") || searchParams.get("sd");
  const initialStateId = stateIdParam ? Number(stateIdParam) : null;

  const countryIdParam =
    searchParams.get("countryId") || searchParams.get("cd");
  const initialCountryId = countryIdParam ? Number(countryIdParam) : null;

  useEffect(() => {
    fetchCountries();

    if (initialStateId) {
      fetchCities(initialStateId);

      fetchStateAndCountry(initialStateId);
    } else {
      setLoading(false);
    }
  }, [initialStateId]);

  const fetchStateAndCountry = async (stateId: number) => {
    try {
      if (initialCountryId) {
        const allStates = await getAllStates(initialCountryId);
        const state = allStates.find((s) => s.stateId === stateId);
        if (state) {
          setSelectedStateId(stateId);
          setSelectedCountryId(state.countryId);
        }
      }
    } catch (err) {
      console.error("Error fetching state:", err);
    }
  };

  const fetchCountries = async () => {
    try {
      const data = await getAllCountries();
      setCountries(data);
    } catch (err: any) {
      console.error(err);
      toast.error("Failed to fetch countries");
    }
  };

  const fetchStates = async (countryId: number) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllStates(countryId);
      setStates(data);
    } catch (err: any) {
      console.error(err);
      setError("Failed to fetch States");
      toast.error("Failed to fetch states");
    } finally {
      setLoading(false);
    }
  };

  const fetchCities = async (stateId: number) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllCities(stateId);
      setCities(data);
    } catch (err: any) {
      console.error(err);
      setError("Failed to fetch Cities");
      toast.error("Failed to fetch cities");
    } finally {
      setLoading(false);
    }
  };

  const handleCountrySelect = (countryId: number) => {
    setSelectedCountryId(countryId);
    setSelectedStateId(null);
    setCities([]);

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("cd", countryId.toString());
    newSearchParams.delete("stateId");
    setSearchParams(newSearchParams);

    fetchStates(countryId);
  };

  const handleClearCountry = () => {
    setSelectedCountryId(null);
    setSelectedStateId(null);
    setStates([]);
    setCities([]);

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("countryId");
    newSearchParams.delete("stateId");
    setSearchParams(newSearchParams);
  };

  const handleStateSelect = (stateId: number) => {
    setSelectedStateId(stateId);

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("sd", stateId.toString());
    setSearchParams(newSearchParams);

    fetchCities(stateId);
  };

  const handleClearState = () => {
    setSelectedStateId(null);
    setCities([]);

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("stateId");
    setSearchParams(newSearchParams);
  };

  const openAddModal = () => {
    if (!selectedStateId) {
      toast.error("Please select a state first");
      return;
    }
    setSelectedCity(null);
    setModalType("add");
  };

  const openDeleteModal = (cityId: number) => {
    const city = cities.find((c) => c.cityId === cityId);
    setSelectedCityId(cityId);
    setSelectedCity(city || null);
    setModalType("delete");
  };

  const openEditModal = (cityId: number) => {
    const city = cities.find((c) => c.cityId === cityId);
    setSelectedCityId(cityId);
    setSelectedCity(city || null);
    setModalType("edit");
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedCityId(null);
    setSelectedCity(null);
  };

  const handleNewCity = async (cityName?: string, cityCode?: string) => {
    try {
      setLoading(true);

      if (!cityName?.trim()) {
        toast.error("Please enter city name");
        setLoading(false);
        return;
      }

      if (!selectedStateId) {
        toast.error("State ID is missing. Please select a state first.");
        setLoading(false);
        return;
      }

      const payload = {
        name: cityName.trim(),
        code: cityCode?.trim() || "",
        stateId: selectedStateId,
      };

      await createCity(payload);
      toast.success("City created successfully");
      closeModal();
      fetchCities(selectedStateId);
    } catch (err: any) {
      console.error("Error creating city:", err);
      toast.error(err.message || "Failed to create city");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateCity = async (cityName?: string, cityCode?: string) => {
    try {
      setLoading(true);

      if (!cityName?.trim()) {
        toast.error("Please enter city name");
        setLoading(false);
        return;
      }

      if (!selectedCityId) return;

      const payload = {
        name: cityName.trim(),
        code: cityCode?.trim() || "",
      };

      await updateCity(selectedCityId, payload);
      toast.success("City updated successfully");
      closeModal();
      if (selectedStateId) {
        fetchCities(selectedStateId);
      }
    } catch (err: any) {
      console.error("Error updating city:", err);
      toast.error(err.message || "Failed to update city");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCity = async () => {
    try {
      setLoading(true);
      if (!selectedCityId) return;

      await deleteCity(selectedCityId);
      toast.success("City deleted successfully");
      closeModal();

      if (selectedStateId) {
        fetchCities(selectedStateId);
      }
    } catch (err: any) {
      console.error("Error deleting city:", err);
      toast.error(err.message || "Failed to delete city");
    } finally {
      setLoading(false);
    }
  };

  const renderSelectionInterface = () => {
    if (selectedCountryId && !selectedStateId) {
      return (
        <div className="bg-white mb-6">
          <div className="flex items-center mb-4">
            <Building2 className="h-6 w-6 text-blue-600 mr-2" />
            <div>
              <h3 className="text-lg font-semibold">
                Select a State in{" "}
                {countries.find((c) => c.countryId === selectedCountryId)?.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Choose a state to view its cities
              </p>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select State
            </label>
            <select
              className="form-control w-full"
              value={selectedStateId || ""}
              onChange={(e) => {
                const stateId = e.target.value ? Number(e.target.value) : null;
                if (stateId) handleStateSelect(stateId);
              }}
            >
              <option value="">-- Select a state --</option>
              {states.map((state) => (
                <option key={state.stateId} value={state.stateId}>
                  {state.name} {state.code && `(${state.code})`}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-between mt-4">
            <button onClick={handleClearCountry} className="btn btn-info">
              Change Country
            </button>

            {loading && (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                <span className="text-gray-600">Loading states...</span>
              </div>
            )}
          </div>

          {states.length === 0 && !loading && (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
              <p className="text-yellow-700">
                No states found for this country. Add states first.
              </p>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="bg-white mb-6">
        <div className="flex items-center mb-4">
          <Flag className="h-6 w-6 text-blue-600 mr-2" />
          <h3 className="text-lg font-semibold">Select a Country</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Please select a country first, then choose a state to view its cities
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Choose Country
          </label>
          <select
            className="form-control w-full"
            value={selectedCountryId || ""}
            onChange={(e) => {
              const countryId = e.target.value ? Number(e.target.value) : null;
              if (countryId) handleCountrySelect(countryId);
            }}
          >
            <option value="">-- Select a country --</option>
            {countries.map((country) => (
              <option key={country.countryId} value={country.countryId}>
                {country.name} {country.code && `(${country.code})`}
              </option>
            ))}
          </select>
        </div>

        {loading && (
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600">Loading countries...</span>
          </div>
        )}

        {countries.length === 0 && !loading && (
          <div className="text-center py-4 text-gray-500">
            No countries available. Please add countries first.
          </div>
        )}
      </div>
    );
  };

  const renderCitiesContent = () => {
    const selectedState = states.find((s) => s.stateId === selectedStateId);
    const selectedCountry = countries.find(
      (c) => c.countryId === selectedCountryId
    );

    return (
      <>
        {/* Header with selected country and state */}
        <div className="bg-blue-50 border border-blue-200 rounded-sm p-4 mb-6">
          <div className="flex items-center flex-wrap justify-between">
            <div className="flex items-center">
              <div className="flex items-center">
                <Flag className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium text-blue-800">
                  {selectedCountry?.name}
                </span>
                <span className="mx-2 text-gray-400">→</span>
                <Building2 className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium text-blue-800">
                  {selectedState?.name}
                </span>
              </div>
            </div>
            <div className="flex gap-2 mt-5 mb-3 lb:mb-3 lg:mt-0">
              <button
                onClick={handleClearState}
                className="btn btn-info btn-sm"
              >
                Change State
              </button>
              {/* <button
                onClick={handleClearCountry}
                className="btn btn-secondary btn-sm"
              >
                Change Country
              </button> */}
            </div>
          </div>
          <p className="text-sm text-blue-600 mt-2">
            Viewing cities for {selectedState?.name}, {selectedCountry?.name}
          </p>
        </div>

        {/* Cities Header with Add Button */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">
            Cities {cities.length > 0 && `(${cities.length})`}
          </h3>
          <button
            className="btn btn-success"
            onClick={openAddModal}
            disabled={!selectedStateId}
          >
            <Plus className="h-4 w-4 mr-1" /> Add New City
          </button>
        </div>

        {/* Loading State */}
        {loading && <Loading />}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-sm p-4 mb-4">
            <h4 className="font-bold text-red-800">Error</h4>
            <p className="text-red-600">{error}</p>
            <button
              onClick={() => selectedStateId && fetchCities(selectedStateId)}
              className="mt-2 btn btn-outline btn-sm"
            >
              Retry
            </button>
          </div>
        )}

        {/* Empty Cities */}
        {!loading && !error && cities.length === 0 && (
          <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-sm">
            <Building2 className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">
              No cities found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {selectedState?.name} doesn't have any cities yet.
            </p>
            <button
              onClick={openAddModal}
              className="mt-6 btn btn-success"
              disabled={!selectedStateId}
            >
              <Plus className="-ml-1 mr-2 h-5 w-5" />
              Add First City
            </button>
          </div>
        )}

        {/* Cities List */}
        {!loading && !error && cities.length > 0 && (
          <div className="grid md:grid-cols-2 gap-3">
            {cities.map((city) => (
              <div
                key={city.cityId}
                className="flex items-center justify-between bg-white border border-gray-200 p-4 rounded-sm hover:bg-gray-50 transition-colors"
              >
                <div>
                  <div className="font-medium text-gray-900">{city.name}</div>
                  {city.code && (
                    <div className="text-sm text-gray-500 mt-1">
                      Code:{" "}
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                        {city.code}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    className="btn btn-warning btn-icon btn-sm"
                    type="button"
                    onClick={() => openEditModal(city.cityId)}
                  >
                    <Pen className="h-4 w-4" />
                  </button>
                  <button
                    className="btn btn-danger btn-icon btn-sm"
                    type="button"
                    onClick={() => openDeleteModal(city.cityId)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <div className="footer-inner mx-auto main-container container">
      <div className="flex flex-wrap contet-inner">
        <div className="flex-auto w-full">
          <div className="relative flex flex-col mb-8 bg-white dark:bg-dark-card shadow ">
            <div className="flex justify-between flex-auto p-5 border-b dark:border-secondary-800 ">
              <h4 className="mb-0 dark:text-secondary-200">
                <Building2 /> Cities Management
              </h4>
              {selectedStateId && (
                <span className="text-sm text-gray-500">
                  State ID: {selectedStateId}
                </span>
              )}
            </div>
            <div className="py-2 px-3">
              <div className="overflow-x-auto">
                <div className="overflow-x-auto p-5">
                  <ToastContainer />

                  {/* Modals */}
                  <Modal
                    isOpen={modalType === "add"}
                    title="Add New City"
                    message=""
                    confirmText="Add City"
                    confirmColor="green"
                    loading={loading}
                    inputLabel="City Name"
                    inputPlaceholder="Enter city name..."
                    inputLabel2="City Code (Optional)"
                    inputPlaceholder2="Enter city code..."
                    headerIcon={<Building2 />}
                    butonIcon={<CheckCheck />}
                    onConfirm={({ inputValue }) => handleNewCity(inputValue)}
                    onCancel={closeModal}
                  />

                  <Modal
                    isOpen={modalType === "delete"}
                    title="Delete City"
                    message={`Are you sure you want to delete "${selectedCity?.name}"? This action cannot be undone.`}
                    confirmText="Delete City"
                    confirmColor="red"
                    loading={loading}
                    headerIcon={<Trash2 />}
                    butonIcon={<Trash2 />}
                    onConfirm={handleDeleteCity}
                    onCancel={closeModal}
                  />

                  <Modal
                    isOpen={modalType === "edit"}
                    title="Edit City"
                    message=""
                    confirmText="Confirm Changes"
                    confirmColor="yellow"
                    loading={loading}
                    inputLabel="City Name"
                    inputPlaceholder="Enter city name..."
                    inputLabel2="City Code (Optional)"
                    inputPlaceholder2="Enter city code..."
                    defaultInputValue={selectedCity?.name || ""}
                    defaultInputValue2={selectedCity?.code || ""}
                    headerIcon={<Pen />}
                    butonIcon={<Pen />}
                    onConfirm={({ inputValue }) => handleUpdateCity(inputValue)}
                    onCancel={closeModal}
                  />

                  {/* Conditional Rendering */}
                  {!selectedStateId
                    ? renderSelectionInterface()
                    : renderCitiesContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CitiesManagement;
