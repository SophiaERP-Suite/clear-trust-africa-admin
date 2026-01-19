import { ChevronRightIcon, Download, ShieldCheck } from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast, ToastContainer } from "react-toastify";
import Hashids from "hashids";
import { useEffect, useState } from "react";
import { fetcPaymentById } from "../../../utils/Requests/PaymentRequests";

interface PaymentData {
  paymentId: number;
  amount: number;
  currency: string;
  txRef: string;
  status: number;
  dateCreated: string;
}

interface UserData {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  organisationName: string;
}

interface ApplicationData {
  cost: number;
  typeName: string;
}

const Badge = ({ text, bgColor, textColor }: { text: string; bgColor: string; textColor: string; }) => (
  <div
    className={`px-2 rounded-md text-sm font-medium flex items-center h-6 w-fit`}
    style={{ backgroundColor: `${bgColor}`, color: `${textColor}`}}
  >
    {text}
  </div>
);
 
const statusName: Record<number, string> = {
  1: 'Pending',
  2: 'Success',
  3: 'Failed',
  4: 'Reversed',
};

export default function PaymentReceipt() {
    const { id } = useParams();
    const hashIds = new Hashids('ClearTrustAfricaEncode', 10);
    const hashedId = id ? Number(hashIds.decode(id)[0]) : 0;
    const [payment, setPayment] = useState<PaymentData | null>(null);
    const [user, setUser] = useState<UserData | null>(null);
    const [dbsType, setDbsType] = useState<ApplicationData | null>(null);

    useEffect(() => {
        fetcPaymentById(hashedId)
        .then(res => {
        if (res.status === 200) {
            res.json()
            .then(data => {
                console.log(data);
                setPayment(data.data.payment);
                setUser(data.data.user);
                setDbsType(data.data.application);
            })
        } else {
            res.text()
            .then(data => {
                console.log(JSON.parse(data));
            })
        }
        })
        .catch((err) => console.log(err))
    }, [hashedId]);

    const downloadCertificate = async () => {
        const loader = document.getElementById('query-loader');
        const text = document.getElementById('query-text');
        if (loader) {
            loader.style.display = 'flex';
        }
        if (text) {
            text.style.display = 'none';
        }
        try {
            const element = document.getElementById('cta-certificate');
            if (!element) return;

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#fff'
            });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [794, 1123],
            });
            pdf.addImage(imgData, 'PNG', 0, 0, 794, 1123);
            pdf.save(`receipt.pdf`);
            toast.success('Your file is being downloaded');
        } catch (err) {
            toast.warning("Download Failed");
            console.log(err);
        }
        if (loader) {
            loader.style.display = 'none';
        }
        if (text) {
            text.style.display = 'flex';
        }
    }

    return (
        <div
            className="p-6 lg:p-8 footer-inner mx-auto main-container container"
            x-bind:className="setting.page_layout"
            >
            <ToastContainer />
            <div className="flex flex-wrap mb-8 items-center justify-between">
                <div className="flex">
                    <ShieldCheck className="text-blue-600 mr-2" size={36} />
                    <div>
                        <h3 className="mb-0 text-black">
                            Payment Receipt
                        </h3>
                        <p className="text-secondary-600 text-black">
                            <NavLink to="/Dashboard">Dashboard</NavLink>{" "}
                            <ChevronRightIcon size={14} />{" "}
                            <NavLink to="/FinanceMgt">Finance MGT</NavLink>{" "}
                            <ChevronRightIcon size={14} />{" "}
                            <NavLink to={`/FinanceMgt/Receipt/${id}`}>Payment Receipt</NavLink>{" "}
                        </p>
                    </div>
                </div>
                <button className="btn btn-success mr-2 mb-2" onClick={() => downloadCertificate()}>
                    <div className="dots hidden" id="query-loader">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    <span id="query-text">
                        <Download size={18} className="mr-2" />
                        Download Receipt
                    </span>
                </button>
            </div>
            {
                payment && user && dbsType && (
                    <div className="overflow-x-auto flex justify-center">
                        <div className="py-2 rounded-lg shadow-lg w-[794px] h-[1123px] min-w-[794px] relative" id="cta-certificate" style={{ backgroundColor: 'rgb(255, 255, 255)'}}>
                            <div className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10"
                                style={{
                                    backgroundImage: "url('http://localhost:5173/xt/cta_adm/cleartrust_logo_mini.png')"
                                }}
                            />
                            <div className="space-y-4 relative z-10">
                        
                                {/* Header */}
                                <div className="p-6 flex justify-between">
                                    <div className="flex items-center">
                                        <div>
                                            <h1 className="text-2xl font-semibold" style={{ color: 'rgb(31, 41, 55)'}}>
                                                Payment Receipt
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="max-w-[180px] border-l pl-4 pt-2 items-center">
                                        <img
                                            src="http://localhost:5173/xt/cta_adm/src/assets2/img/cleartrust_logo.png"
                                            className="w-auto h-12 border-4 border-white mr-4"
                                            alt="profile-image"
                                        />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-5 gap-6 text-md">
                                        <div className="col-span-3 grid grid-cols-3 text-md gap-x-1">
                                            <b>Name:</b>
                                            <p className="col-span-2">{user.firstName} {user.lastName}</p>
                                            <b>Email:</b>
                                            <p className="col-span-2">{user.email}</p>
                                            <b>Phone:</b>
                                            <p className="col-span-2">{user.phone}</p>
                                            <b>Organization:</b>
                                            <p className="col-span-2">{user.organisationName}</p>
                                        </div>
                                        <div className="col-span-2 flex justify-end">
                                            <div className="grid grid-cols-2 text-md gap-2">
                                                <b>Receipt No:</b>
                                                <p>{hashIds.encode(payment.paymentId)}</p>
                                                <b>Payment Date:</b>
                                                <p>{(new Date(payment.dateCreated)).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                                                <b>Status:</b>
                                                <Badge
                                                    text={`${statusName[payment.status]}`}
                                                    bgColor={
                                                        payment.status == 2
                                                            ? 'rgb(209, 250, 229)'
                                                            : payment.status == 1
                                                                ? 'rgb(254, 243, 199)'
                                                                : payment.status == 3
                                                                    ? 'rgb(254, 226, 226)'
                                                                    : 'rgb(232, 217, 242)'
                                                    }
                                                    textColor={
                                                        payment.status == 2
                                                            ? 'rgb(4, 120, 87)'
                                                            : payment.status == 1
                                                                ? 'rgb(180, 83, 9)'
                                                                : payment.status == 3
                                                                    ? 'rgb(185, 28, 28)'
                                                                    : 'rgb(163, 0, 255)'
                                                    }
                                                />
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="border rounded">
                                        <table
                                            id="basic-table"
                                            className="min-w-full overflow-hidden divide-y divide-secondary-200 dark:divide-secondary-800"
                                            >
                                            <thead>
                                            <tr className="bg-gray-200" style={{ backgroundColor: 'rgb(235, 236, 238)'}}>
                                                <th className="px-6 py-3 text-left rtl:text-right whitespace-nowrap font-semibold" style={{color: '#000000'}}>
                                                    Description
                                                </th>
                                                <th className="px-6 py-3 text-left rtl:text-right whitespace-nowrap font-semibold" style={{color: '#000000'}}>
                                                    Date
                                                </th>
                                                <th className="px-6 py-3 text-left rtl:text-right whitespace-nowrap font-semibold flex justify-end" style={{color: '#000000'}}>
                                                    Amount Paid
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800 dark:bg-dark-card">
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {`${dbsType.typeName} CTA Check`}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {(new Date(payment.dateCreated)).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                                                        { `${payment.currency} ${dbsType.cost.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2})}` }
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="px-6 flex justify-end">
                                    <div className="grid grid-cols-3 text-lg">
                                        <b>Total Amount:</b>
                                        <p className="col-span-2 flex justify-end ml-2 px-4 ">{ `${payment.currency} ${dbsType.cost.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2})}` }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
    </div>
    )
}