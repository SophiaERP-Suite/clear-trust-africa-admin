import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  Building2,
  Pen,
  Plus,
  Shield,
  Trash2,
  Globe,
  Eye,
  CheckCheck,
} from "lucide-react";
import type {
  StateDto,
  CountryDto,
} from "../../../types/controlPanel/location";
import {
  createState,
  deleteState,
  getAllCountries,
  getAllStates,
  updateState,
} from "../../../api/locationApi";
import { useSearchParams, useNavigate } from "react-router-dom";
import Loading from "../../utils/Loading";
import Modal from "../../../components/modal";

type ModalType = "add" | "edit" | "delete" | null;

function StatesManagement() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState<CountryDto[]>([]);
  const [states, setStates] = useState<StateDto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedStateId, setSelectedStateId] = useState<number | null>(null);
  const [selectedState, setSelectedState] = useState<StateDto | null>(null);
  const [selectedCountryId, setSelectedCountryId] = useState<number | null>(
    null
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const countryIdParam = searchParams.get("cd");
  const initialCountryId = countryIdParam ? Number(countryIdParam) : null;

  useEffect(() => {
    fetchCountries();

    if (initialCountryId) {
      setSelectedCountryId(initialCountryId);
      fetchStates(initialCountryId);
    } else {
      setLoading(false);
    }
  }, [initialCountryId]);

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

  const handleCountrySelect = (countryId: number) => {
    setSelectedCountryId(countryId);

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("cd", countryId.toString());
    setSearchParams(newSearchParams);

    fetchStates(countryId);
  };

  const handleClearCountry = () => {
    setSelectedCountryId(null);
    setStates([]);

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("cd");
    setSearchParams(newSearchParams);
  };

  // Toast messages
  const notifySuccess = () => toast.success("Action successful");
  const notifyError = () => toast.error("Action Failed");

  // Call modals
  const openAddModal = () => {
    if (!selectedCountryId) {
      toast.error("Please select a country first");
      return;
    }
    setSelectedState(null);
    setModalType("add");
  };

  const openDeleteModal = (StateId: number) => {
    const State = states.find((s) => s.stateId === StateId);
    setSelectedStateId(StateId);
    setSelectedState(State || null);
    setModalType("delete");
  };

  const openEditModal = (StateId: number) => {
    const State = states.find((r) => r.stateId === StateId);
    setSelectedStateId(StateId);
    setSelectedState(State || null);
    setModalType("edit");
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedStateId(null);
    setSelectedState(null);
  };

  const handleNewState = async (StateInput?: string, StateInput2?: string) => {
    try {
      setLoading(true);

      if (!StateInput?.trim() || !StateInput2?.trim()) {
        toast.error("Please fill all fields");
        setLoading(false);
        return;
      }

      if (!selectedCountryId) {
        toast.error("Country ID is missing. Please select a country first.");
        setLoading(false);
        return;
      }

      const payload = {
        name: StateInput.trim(),
        code: StateInput2.trim(),
        countryId: selectedCountryId,
      };

      await createState(payload);

      notifySuccess();
      closeModal();
      fetchStates(selectedCountryId);
    } catch (err: any) {
      notifyError();
      console.error("Create state error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateState = async (
    StateInput?: string,
    StateInput2?: string
  ) => {
    try {
      setLoading(true);

      if (!StateInput?.trim() || !StateInput2?.trim()) {
        toast.error("Please fill all fields");
        setLoading(false);
        return;
      }

      if (!selectedStateId) return;
      const StateId = selectedStateId;

      const payload = {
        name: StateInput.trim(),
        code: StateInput2.trim(),
      };

      await updateState(StateId, payload);

      notifySuccess();
      closeModal();
      if (selectedCountryId) {
        fetchStates(selectedCountryId);
      }
    } catch (err: any) {
      notifyError();
      console.error("Update state error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteState = async () => {
    try {
      setLoading(true);
      if (!selectedStateId) return;
      const StateId = selectedStateId;

      await deleteState(StateId);

      notifySuccess();
      closeModal();
      if (selectedCountryId) {
        fetchStates(selectedCountryId);
      }
    } catch (err: any) {
      notifyError();
      console.error("Delete state error:", err);
    } finally {
      setLoading(false);
    }
  };

  const renderCountrySelector = () => (
    <div className="bg-white mb-6">
      <div className="flex items-center mb-4">
        <Globe className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold">Select a Country</h3>
      </div>
      <p className="text-gray-600 mb-4">
        Please select a country to view its states
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

  const renderStatesContent = () => (
    <>
      {/* Country Header */}
      <div className="bg-blue-50 border border-blue-200 rounded-sm p-4 mb-6">
        <div className="flex items-center flex-wrap justify-between">
          <div className="flex items-center">
            <Globe className="h-5 w-5 text-blue-600 mr-2" />
            <div>
              <h4 className="font-semibold text-blue-800">
                {countries.find((c) => c.countryId === selectedCountryId)?.name}
              </h4>
              <p className="text-sm text-blue-600">
                Viewing states for selected country
              </p>
            </div>
          </div>
          <button
            onClick={handleClearCountry}
            className="btn btn-warning btn-sm mt-4 md:mt-0"
          >
            Change Country
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">
          States {states.length > 0 && `(${states.length})`}
        </h3>
        <button className="btn btn-success" onClick={openAddModal}>
          <Plus className="h-4 w-4 mr-1" /> Add New State
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
            onClick={() => selectedCountryId && fetchStates(selectedCountryId)}
            className="mt-2 btn btn-outline btn-sm"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && states.length === 0 && (
        <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-sm">
          <Building2 className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No states found</h3>
          <p className="mt-1 text-sm text-gray-500">
            This country doesn't have any states yet.
          </p>
          <button onClick={openAddModal} className="mt-6 btn btn-primary">
            <Plus className="-ml-1 mr-2 h-5 w-5" />
            Add First State
          </button>
        </div>
      )}

      {/* States List */}
      {!loading && !error && states.length > 0 && (
        <div className="grid md:grid-cols-2 gap-3">
          {states.map((state) => (
            <div
              key={state.stateId}
              className="flex items-center justify-between bg-white border border-gray-200 p-4 rounded-sm hover:bg-gray-50 transition-colors"
            >
              <div>
                <div className="font-medium text-gray-900">{state.name}</div>
                {state.code && (
                  <div className="text-sm text-gray-500 mt-1">
                    Code:{" "}
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                      {state.code}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  className="btn btn-info btn-icon btn-sm"
                  onClick={() =>
                    navigate(
                      `/ControlPanel/locationMgt/cities?sd=${state.stateId}&cd=${countryIdParam}`
                    )
                  }
                >
                  <Eye className="h-4 w-4" />
                </button>
                <button
                  className="btn btn-warning btn-icon btn-sm"
                  type="button"
                  onClick={() => openEditModal(state.stateId)}
                >
                  <Pen className="h-4 w-4" />
                </button>
                <button
                  className="btn btn-danger btn-icon btn-sm"
                  type="button"
                  onClick={() => openDeleteModal(state.stateId)}
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

  return (
    <div className="footer-inner mx-auto main-container container">
      <div className="flex flex-wrap contet-inner">
        <div className="flex-auto w-full">
          <div className="relative flex flex-col mb-8 bg-white dark:bg-dark-card shadow rounded">
            <div className="flex justify-between flex-auto p-5 border-b dark:border-secondary-800">
              <h4 className="mb-0 dark:text-secondary-200">
                <Building2 /> States Management
              </h4>
              {selectedCountryId && (
                <span className="text-sm text-gray-500">
                  Country ID: {selectedCountryId}
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
                    title="Add New State"
                    message=""
                    confirmText="Add State"
                    confirmColor="green"
                    loading={loading}
                    inputLabel="State Name"
                    inputPlaceholder="Enter state name..."
                    inputLabel2="State Code"
                    inputPlaceholder2="Enter state code..."
                    headerIcon={<Building2 />}
                    butonIcon={<CheckCheck />}
                    onConfirm={({
                      inputValue,
                      inputValue2
                    }: {
                      inputValue?: string;
                      inputValue2?: string;
                    }) =>
                      handleNewState(
                        inputValue,
                        inputValue2
                      )
                    }
                    onCancel={closeModal}
                  />

                  <Modal
                    isOpen={modalType === "delete"}
                    title="Delete State"
                    message={`Are you sure you want to delete "${selectedState?.name}"? This action cannot be undone.`}
                    confirmText="Delete State"
                    confirmColor="red"
                    loading={loading}
                    headerIcon={<Trash2 />}
                    butonIcon={<Trash2 />}
                    onConfirm={handleDeleteState}
                    onCancel={closeModal}
                  />

                  <Modal
                    isOpen={modalType === "edit"}
                    title="Edit State"
                    message=""
                    confirmText="Confirm Changes"
                    confirmColor="yellow"
                    loading={loading}
                    inputLabel="State Name"
                    inputPlaceholder="Enter state name..."
                    inputLabel2="State Code"
                    inputPlaceholder2="Enter state code..."
                    defaultInputValue={selectedState?.name || ""}
                    defaultInputValue2={selectedState?.code || ""}
                    headerIcon={<Shield />}
                    butonIcon={<Pen />}
                    onConfirm={({ inputValue }) =>
                      handleUpdateState(inputValue)
                    }
                    onCancel={closeModal}
                  />

                  {/* Conditional Rendering */}
                  {!selectedCountryId
                    ? renderCountrySelector()
                    : renderStatesContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatesManagement;
