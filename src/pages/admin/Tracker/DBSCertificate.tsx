import { ChevronRightIcon, ShieldCheck } from "lucide-react";
import { NavLink } from "react-router-dom";

type NIMCRecord = {
  nin: string;
  firstName: string;
  lastName: string;
  otherNames: string;
  dateOfBirth: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  state: string;
  lga: string;
  nationality: string;
};
 
type NPFCriminalRecord = {
  offenseType: string;
  offenseCategory: 'Felony' | 'Misdemeanor';
  caseStatus: 'Pending' | 'Convicted' | 'Dismissed' | 'Acquitted';
  arrestDate: string;
  courtName?: string;
};
 
type NPFProfile = {
  hasCriminalRecord: boolean;
  wanted: boolean;
  riskLevel: 'Low' | 'Medium' | 'High';
  records: NPFCriminalRecord[];
};
 
const nimcData: NIMCRecord = {
  nin: '69123492019',
  firstName: 'Olamide',
  lastName: 'Adegbite',
  otherNames: 'Felix',
  dateOfBirth: '1993-06-27',
  gender: 'Male',
  phone: '+2348012345678',
  email: 'olamide.adegbite@gmail.com',
  address: '5, Lateef Aregbe Street',
  state: 'Ogun',
  lga: 'Abeokuta',
  nationality: 'Nigerian',
};
 
const npfProfile: NPFProfile = {
  hasCriminalRecord: true,
  wanted: false,
  riskLevel: 'Medium',
  records: [
    {
      offenseType: 'Financial Fraud',
      offenseCategory: 'Felony',
      caseStatus: 'Convicted',
      arrestDate: '2019-03-22',
      courtName: 'Federal High Court, Lagos',
    },
    {
      offenseType: 'False Declaration',
      offenseCategory: 'Misdemeanor',
      caseStatus: 'Dismissed',
      arrestDate: '2021-08-10',
      courtName: 'Magistrate Court, Ikeja',
    },
  ],
};
 
const Badge = ({ text, color }: { text: string; color: string }) => (
  <span
    className={`px-3 py-1 rounded-full text-sm font-medium bg-${color}-100 text-${color}-700`}
  >
    {text}
  </span>
);
 

export default function DBSCertificate() {
    return (
        <div
            className="p-6 lg:p-8 footer-inner mx-auto main-container container"
            x-bind:className="setting.page_layout"
            >
            <div className="flex flex-wrap mb-8 items-center justify-between">
                <div className="flex">
                <ShieldCheck className="text-blue-600 mr-2" size={36} />
                <div>
                <h3 className="mb-0 text-black">
                    DBS Certificate
                </h3>
                <p className="text-secondary-600 text-black">
                    <NavLink to="/Dashboard">Dashboard</NavLink>{" "}
                    <ChevronRightIcon size={14} />{" "}
                    <NavLink to="/Tracker">DBS Tracker</NavLink>{" "}
                    <ChevronRightIcon size={14} />{" "}
                    <NavLink to={`/Tracker/l`}>DBS Details</NavLink>{" "}
                </p>
                </div>
            </div>
            </div>
        <div className="min-h-screen bg-gray-50 py-6">
            <div className="space-y-8">
        
                {/* Header */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-800">
                            DBS Basic Search
                        </h1>
                        <p className="text-gray-500 mt-1">
                            Nigerian Identity & Criminal Background Verification
                        </p>
                    </div>
                </div>
        
                {/* NIMC SECTION */}
                <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    NIMC Identity Information
                </h2>
        
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div><strong>NIN:</strong> {nimcData.nin}</div>
                    <div><strong>Full Name:</strong> {nimcData.firstName} {nimcData.otherNames} {nimcData.lastName}</div>
                    <div><strong>Date of Birth:</strong> {nimcData.dateOfBirth}</div>
                    <div><strong>Gender:</strong> {nimcData.gender}</div>
                    <div><strong>Phone:</strong> {nimcData.phone}</div>
                    <div><strong>Email:</strong> {nimcData.email}</div>
                    <div className="md:col-span-2">
                    <strong>Residential Address:</strong> {nimcData.address}
                    </div>
                    <div><strong>State:</strong> {nimcData.state}</div>
                    <div><strong>LGA:</strong> {nimcData.lga}</div>
                    <div><strong>Nationality:</strong> {nimcData.nationality}</div>
                </div>
                </div>
        
                {/* NPF SECTION */}
                <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Nigeria Police Force (NPF) Records
                </h2>
        
                <div className="flex flex-wrap gap-4 mb-6">
                    <Badge
                    text={npfProfile.hasCriminalRecord ? 'Criminal Record Found' : 'No Criminal Record'}
                    color={npfProfile.hasCriminalRecord ? 'red' : 'green'}
                    />
                    <Badge
                    text={npfProfile.wanted ? 'Wanted' : 'Not Wanted'}
                    color={npfProfile.wanted ? 'red' : 'green'}
                    />
                    <Badge
                    text={`Risk Level: ${npfProfile.riskLevel}`}
                    color={
                        npfProfile.riskLevel === 'High'
                        ? 'red'
                        : npfProfile.riskLevel === 'Medium'
                        ? 'yellow'
                        : 'green'
                    }
                    />
                </div>
        
                {/* Criminal Records Table */}
                {npfProfile.records.length > 0 && (
                    <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-gray-200 rounded">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">Offense</th>
                            <th className="p-3 text-left">Category</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Arrest Date</th>
                            <th className="p-3 text-left">Court</th>
                        </tr>
                        </thead>
                        <tbody>
                        {npfProfile.records.map((record, index) => (
                            <tr key={index} className="border-t">
                            <td className="p-3">{record.offenseType}</td>
                            <td className="p-3">{record.offenseCategory}</td>
                            <td className="p-3">{record.caseStatus}</td>
                            <td className="p-3">{record.arrestDate}</td>
                            <td className="p-3">{record.courtName ?? '—'}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                )}
                </div>
            </div>
        </div>
    </div>
    )
}