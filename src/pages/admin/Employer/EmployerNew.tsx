import { ChevronRightIcon, Users, UserPlus } from "lucide-react";
import "../../../assets2/css/choices.min.css";
import "../../../assets2/css/flatpickr.min.css";
import "../../../assets2/css/libs.min.css";
import "../../../assets2/css/quill.snow.css";
import "../../../assets2/css/responsive.css";
import "../../../assets2/css/sheperd.css";
import "../../../assets2/css/sweetalert2.min.css";
import "../../../assets2/css/tailwind.css";
import "../../../assets2/css/uppy.min.css";
import "../../../assets2/js/choice.js";
import "../../../assets2/js/choices.min.js";
import "../../../assets2/js/dashboard.js";
import "../../../assets2/js/fslightbox.js";
import "../../../assets2/js/libs.min.js";
import "../../../assets2/js/slider-tabs.js";
import "../../../assets2/js/sweet-alert.js";
import "../../../assets2/js/swiper-slider.js";
import { NavLink } from "react-router-dom";
import { useState } from "react";
// import { createOrganization } from "../../../api/adminApi.js";
// import type { CreateOrganizationDto } from "../../../types/organization.js";
import api from "../../../api/axios.js";

function EmployersNew() {
  const [name, setName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [address, setAddress] = useState("");
  // const [organizationTypeId, setOrganizationTypeId] = useState(1);
  const [documents, setDocuments] = useState<
    { documentType: string; filePath: string }[]
  >([]);

  // const handleSubmit = async () => {
  //   const dto: CreateOrganizationDto = {
  //     organizationTypeId,
  //     name,
  //     registrationNumber,
  //     address,
  //     verificationDocuments: documents,
  //   };

  //   try {
  //     const createdOrg = await createOrganization(dto);
  //     console.log("Organization created:", createdOrg);
  //   } catch (error) {
  //     console.error("Error creating organization:", error);
  //   }
  // };

  // const addDocument = () => {
  //   setDocuments([...documents, { documentType: "", filePath: "" }]);
  // };

  // const handleDocumentChange = (
  //   index: number,
  //   field: "documentType" | "filePath",
  //   value: string
  // ) => {
  //   const updated = [...documents];
  //   updated[index][field] = value;
  //   setDocuments(updated);
  // };

  const addDocument = () => {
    setDocuments([...documents, { documentType: "", filePath: "" }]);
  };

  // Handle document type change
  const handleDocumentTypeChange = (index: number, value: string) => {
    const updated = [...documents];
    updated[index].documentType = value;
    setDocuments(updated);
  };

  // Handle file selection and upload
  const handleFileChange = async (index: number, file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      // Upload file to your backend or storage endpoint
      const response = await api.post<{ fileUrl: string }>(
        "/admin/files/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const updated = [...documents];
      updated[index].filePath = response.data.fileUrl; // store the URL returned by backend
      setDocuments(updated);
    } catch (error) {
      console.error("File upload failed:", error);
      alert("File upload failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full mb-8">
        <div className="row">
          <div className="col-md-12">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex">
                <UserPlus className="text-blue-600 mr-2" size={36} />
                <div>
                  <h3 className="mb-0 text-black">New Employer</h3>
                  <p className="text-secondary-600 text-black">
                    <NavLink to="/Dashboard">Dashboard</NavLink>{" "}
                    <ChevronRightIcon size={14} />{" "}
                    <NavLink to="/EmployersMgt">Employers</NavLink>{" "}
                    <ChevronRightIcon size={14} />{" "}
                    <NavLink to="EmployerNew">New Employer</NavLink>{" "}
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <NavLink
                  to="/EmployersMgt"
                  style={{ backgroundColor: "rgb(112 22 208 / 1)" }}
                  className="text-white btn shadow-md btn-soft-light hover:shadow-xl hover:bg-glass focus:bg-gray-200"
                >
                  <Users size={18} className="mr-2" />
                  All Employers
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-inner  mx-auto main-container  lg:py-0 py-0 "
        x-bind:class="setting.page_layout"
      >
        <div className="lg:flex lg:grid-cols-2 gap-8">
          {/* <div className="flex-auto w-full lg:w-1/4">
            <div className="relative flex flex-col mb-8 text-secondary-500 bg-white shadow rounded -mt-2 dark:bg-dark-card">
              <div className="flex justify-between flex-auto p-5 mb-4 border-b dark:border-secondary-800">
                <div className="header-title">
                  <h4 className="mb-0 dark:text-white">Add New Employer</h4>
                </div>
              </div>
              <div className="p-5">
                <form>
                  <div className="mb-4">
                    <div className="relative">
                      <img
                        className="w-24 h-24 rounded"
                        src="/company-avatar.png"
                        alt="profile-pic"
                      />
                      <div className="image-upload absolute cursor-pointer top-auto w-8 h-8 text-center bg-primary-500 border-4 border-white rounded-full left-20 rtl:right-20 rtl:left-0 -bottom-2">
                        <label htmlFor="file-input">
                          <svg
                            className="inline-block pb-1 m-0.5"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#ffffff"
                              d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
                            ></path>
                          </svg>
                        </label>
                        <input
                          id="file-input"
                          className="hidden file-upload"
                          type="file"
                          accept="image/*"
                        />
                      </div>
                    </div>
                    <div className="mt-4 ">
                      <div className="items-center inline-block">
                        <span className="text-secondary-600 dark:text-white">
                          Only{" "}
                        </span>
                        <a
                          href="javascript:void();"
                          className="text-primary-400 hover:text-primary-500"
                        >
                          .jpg{" "}
                        </a>
                        <a
                          href="javascript:void();"
                          className="text-primary-400 hover:text-primary-500"
                        >
                          .png{" "}
                        </a>
                        <a
                          href="javascript:void();"
                          className="text-primary-400 hover:text-primary-500"
                        >
                          .jpeg{" "}
                        </a>
                        <span className="text-secondary-600 dark:text-white">
                          allowed
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="inline-block mb-2 text-secondary-600 dark:text-white"
                      htmlFor="user_role"
                    >
                      School Website:
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 placeholder-secondary-400 dark:bg-dark-card dark:border-secondary-800 bg-white border rounded outline-none focus:border-primary-500 focus:shadow dark:focus:border-primary-500"
                      id="furl"
                      placeholder="Website Url"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="inline-block mb-2 text-secondary-600 dark:text-white"
                      htmlFor="furl"
                    >
                      Facebook Url:
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 placeholder-secondary-400 dark:bg-dark-card dark:border-secondary-800 bg-white border rounded outline-none focus:border-primary-500 focus:shadow dark:focus:border-primary-500"
                      id="furl"
                      placeholder="Facebook Url"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="inline-block mb-2 text-secondary-600 dark:text-white"
                      htmlFor="turl"
                    >
                      Twitter Url:
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 placeholder-secondary-400 dark:bg-dark-card dark:border-secondary-800 bg-white border rounded outline-none focus:border-primary-500 focus:shadow dark:focus:border-primary-500"
                      id="turl"
                      placeholder="Twitter Url"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="inline-block mb-2 text-secondary-600 dark:text-white"
                      htmlFor="instaurl"
                    >
                      Instagram Url:
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 placeholder-secondary-400 dark:bg-dark-card dark:border-secondary-800 bg-white border rounded outline-none focus:border-primary-500 focus:shadow dark:focus:border-primary-500"
                      id="instaurl"
                      placeholder="Instagram Url"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="inline-block mb-2 text-secondary-600 dark:text-white"
                      htmlFor="lurl"
                    >
                      Linkedin Url:
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 placeholder-secondary-400 dark:bg-dark-card dark:border-secondary-800 bg-white border rounded outline-none focus:border-primary-500 focus:shadow dark:focus:border-primary-500"
                      id="lurl"
                      placeholder="Linkedin Url"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div> */}
          <div className="flex-auto w-full lg:w-3/4">
            <div className="relative flex flex-col mb-8 text-secondary-500 bg-white shadow rounded -mt-2 dark:bg-dark-card">
              <div className="flex justify-between flex-auto p-6 border-b dark:border-secondary-800">
                <h4 className="mb-0 dark:text-white">Employer Information</h4>
              </div>
              <div className="p-6 ">
                <form>
                  <div className="grid lg:grid-cols-2 gap-x-8 gap-y-5">
                    <div className="col-span-2">
                      <label
                        className="inline-block mb-2 text-secondary-600 dark:text-white"
                        htmlFor="fname"
                      >
                        Business Name:
                      </label>
                      <input
                        type="text"
                        className="block w-full px-4 py-2 placeholder-secondary-400 dark:bg-dark-card dark:border-secondary-800 bg-white border rounded outline-none focus:border-primary-500 focus:shadow dark:focus:border-primary-500"
                        id="fname"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Business Name"
                      />
                    </div>
                    <div>
                      <label
                        className="inline-block mb-2 text-secondary-600 dark:text-white"
                        htmlFor="add1"
                      >
                        Business Address:
                      </label>
                      <input
                        type="text"
                        className="block w-full px-4 py-2 placeholder-secondary-400 dark:bg-dark-card dark:border-secondary-800 bg-white border rounded outline-none focus:border-primary-500 focus:shadow dark:focus:border-primary-500"
                        id="add1"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Street Address 1"
                      />
                    </div>
                    {/* <div className="col-span-2">
                      <label
                        className="inline-block mb-2 text-secondary-600 dark:text-white"
                        htmlFor="country"
                      >
                        Country:
                      </label>
                      <select
                        name="type"
                        className="block w-full px-4 py-2 text-secondary-400 dark:bg-dark-card dark:border-secondary-800 bg-white border rounded outline-none focus:border-primary-500 focus:shadow selectpicker appearance-none dark:focus:border-primary-500"
                        data-style="py-0"
                        id="country"
                      >
                        <option>Select Country</option>
                        <option>Nigeria</option>
                        <option>Canada</option>
                        <option>USA</option>
                        <option>India</option>
                        <option>United Kingdom</option>
                      </select>
                    </div> */}
                    <div>
                      <label
                        className="inline-block mb-2 text-secondary-600 dark:text-white"
                        htmlFor="BRegNo"
                      >
                        Business Reg Number:
                      </label>
                      <input
                        type="text"
                        className="block w-full px-4 py-2 placeholder-secondary-400 dark:bg-dark-card dark:border-secondary-800 bg-white border rounded outline-none focus:border-primary-500 focus:shadow dark:focus:border-primary-500"
                        id="BRegNo"
                        placeholder="Business Reg Number"
                        value={registrationNumber}
                        onChange={(e) => setRegistrationNumber(e.target.value)}
                      />
                    </div>

                    {/* <div>
                      <label
                        className="inline-block mb-2 text-secondary-600 dark:text-white"
                        htmlFor="pno"
                      >
                        Company Registration:
                      </label>
                      <input
                        type="text"
                        className="block w-full px-4 py-2 placeholder-secondary-400 dark:bg-dark-card dark:border-secondary-800 bg-white border rounded outline-none focus:border-primary-500 focus:shadow dark:focus:border-primary-500"
                        id="pno"
                        placeholder="Company Registration"
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        className="inline-block mb-2 text-secondary-600 dark:text-white"
                        htmlFor="city"
                      >
                        Town/City:
                      </label>
                      <input
                        type="text"
                        className="block w-full px-4 py-2 placeholder-secondary-400 dark:bg-dark-card dark:border-secondary-800 bg-white border rounded outline-none focus:border-primary-500 focus:shadow dark:focus:border-primary-500"
                        id="city"
                        placeholder="Town/City"
                      />
                    </div> */}

                    <div>
                      <h6>Verification Documents</h6>
                      {documents.map((doc, index) => (
                        <div key={index}>
                          <div>
                            <label
                              className="inline-block mb-2 text-secondary-600 dark:text-white"
                              htmlFor="BRegNo"
                            >
                              Document Type:
                            </label>
                            <input
                              placeholder="Document Type"
                              value={doc.documentType}
                              className="block w-full px-4 py-2 placeholder-secondary-400 dark:bg-dark-card dark:border-secondary-800 bg-white border rounded outline-none focus:border-primary-500 focus:shadow dark:focus:border-primary-500"
                              onChange={(e) =>
                                handleDocumentTypeChange(index, e.target.value)
                              }
                            />
                          </div>
                          <div>
                            <label
                              className="inline-block mb-2 text-secondary-600 dark:text-white"
                              htmlFor="BRegNo"
                            >
                              Upload Document:
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              onChange={(e) =>
                                e.target.files &&
                                handleFileChange(index, e.target.files[0])
                              }
                            />
                            {doc.filePath && (
                              <span>Uploaded: {doc.filePath}</span>
                            )}
                          </div>
                        </div>
                      ))}

                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={addDocument}
                      >
                        Add Document
                      </button>
                      <br />
                    </div>
                  </div>
                  <div className="flex justify-end mt-5">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployersNew;
