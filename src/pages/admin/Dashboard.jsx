import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import StatisticsChart from "../../Components/StatisticsChart";
import BillingPayments from "../../Components/BillingPayments";
import { FaUserInjured, FaUserMd, FaCalendarCheck } from "react-icons/fa"; // Importing icons
import PatientsSummary from "../../Components/PatientsSummary";
import AppointmentsList from "../../Components/AppointmentsList";

const Dashboard = () => {
  const patientData = [
    6000, 12000, 8000, 5000, 22000, 16000, 3476, 22000, 27000, 32000, 17000,
    6000,
  ];

  const [doctorData, setDoctorData] = useState();

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await fetch("https://backend-2-myhm.onrender.com//admin/alldoctors", {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) throw new Error("Failed to fetch admin data");
        const data = await response.json();
        setDoctorData(data);
        console.log("data", data);
      } catch (err) {
        console.error("Error fetching profile data:", err.message);
      }
    };

    fetchDoctorData();
  }, []);

  console.log("doctorData?.length", doctorData);


  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow w-1/2 ">
        <Header />
        <div className="overflow-x-auto">
          <div className="gap-4 grid md:grid-cols-3 p-4">
            {/* left */}
            <div className="md:col-span-2">
              {/* Dashboard Cards */}

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                {/* Total Patients */}
                <div className="bg-white rounded-lg shadow-sm flex justify-between items-center min-h-[100px] p-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#2E779326] rounded-full p-4">
                      <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.72168 28.6111V24.7222C1.72168 23.9352 1.92423 23.2118 2.32932 22.5521C2.73441 21.8924 3.27261 21.3889 3.9439 21.0417C5.37909 20.3241 6.83742 19.7859 8.3189 19.4271C9.80038 19.0683 11.305 18.8889 12.8328 18.8889C14.3606 18.8889 15.8652 19.0683 17.3467 19.4271C18.8282 19.7859 20.2865 20.3241 21.7217 21.0417C22.393 21.3889 22.9312 21.8924 23.3363 22.5521C23.7414 23.2118 23.9439 23.9352 23.9439 24.7222V28.6111H1.72168ZM26.7217 28.6111V24.4445C26.7217 23.426 26.4381 22.4479 25.871 21.5104C25.3039 20.5729 24.4995 19.7685 23.4578 19.0972C24.6383 19.2361 25.7495 19.4734 26.7911 19.8091C27.8328 20.1447 28.805 20.5556 29.7078 21.0417C30.5411 21.5047 31.1777 22.0197 31.6175 22.5868C32.0573 23.154 32.2772 23.7732 32.2772 24.4445V28.6111H26.7217ZM12.8328 17.5C11.305 17.5 9.99714 16.956 8.90918 15.8681C7.82122 14.7801 7.27724 13.4722 7.27724 11.9445C7.27724 10.4167 7.82122 9.10882 8.90918 8.02086C9.99714 6.9329 11.305 6.38892 12.8328 6.38892C14.3606 6.38892 15.6684 6.9329 16.7564 8.02086C17.8444 9.10882 18.3883 10.4167 18.3883 11.9445C18.3883 13.4722 17.8444 14.7801 16.7564 15.8681C15.6684 16.956 14.3606 17.5 12.8328 17.5ZM26.7217 11.9445C26.7217 13.4722 26.1777 14.7801 25.0897 15.8681C24.0018 16.956 22.6939 17.5 21.1661 17.5C20.9115 17.5 20.5874 17.4711 20.1939 17.4132C19.8004 17.3554 19.4763 17.2917 19.2217 17.2222C19.8467 16.4815 20.327 15.6597 20.6627 14.757C20.9983 13.8542 21.1661 12.9167 21.1661 11.9445C21.1661 10.9722 20.9983 10.0347 20.6627 9.13197C20.327 8.22919 19.8467 7.40743 19.2217 6.66669C19.5458 6.55095 19.8698 6.47572 20.1939 6.441C20.518 6.40628 20.842 6.38892 21.1661 6.38892C22.6939 6.38892 24.0018 6.9329 25.0897 8.02086C26.1777 9.10882 26.7217 10.4167 26.7217 11.9445Z" fill="#2E7793" />
                      </svg>

                      {/* <FaUserInjured className="text-blue text-lg" /> */}
                    </div>
                    <div className="md:grid">
                      <span className="text-md font-bold text-gray-400">Total Patients</span>
                      <span className="font-bold mt-2">1500</span>
                    </div>
                  </div>
                </div>

                {/* Total Doctors */}
                <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center min-h-[100px]">
                  <div className="flex items-center gap-2">
                    <div className="p-4 bg-[#5E5E9E26] rounded-full ">
                      <svg width="34" height="35" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.5617 16.6606C20.8211 17.2593 20.972 17.992 21.0053 18.8392C21.8807 19.0398 22.5358 19.8228 22.5358 20.7579C22.5358 21.8439 21.6522 22.7275 20.5662 22.7275C19.4802 22.7275 18.5966 21.8439 18.5966 20.7579C18.5966 19.8334 19.2375 19.0586 20.0975 18.8468C20.0596 18.0054 19.8584 16.7251 19.0348 16.093C18.6098 15.9821 18.1765 15.9058 17.7391 15.8649C17.7064 17.339 12.8339 20.977 12.8339 20.977C12.8339 20.977 7.95997 17.3396 7.92694 15.8655C7.44183 15.9098 6.96178 15.9983 6.49278 16.13C5.8919 16.6057 5.58101 17.4921 5.56495 18.7805C5.74434 18.885 5.88661 19.043 5.9719 19.2323C6.61914 19.538 7.19092 20.181 7.62878 21.0964C7.70211 21.2503 7.7118 21.4243 7.65787 21.583C7.92028 22.2585 8.07027 22.9966 8.07027 23.6166C8.07027 24.4853 8.07027 25.3068 7.12335 25.5177C7.02068 25.6032 6.89124 25.6499 6.75761 25.6498H6.12492C5.97244 25.6495 5.82626 25.5889 5.71841 25.4811C5.61056 25.3733 5.54982 25.2271 5.5495 25.0747L5.5501 25.0522C5.55671 24.9039 5.62005 24.7638 5.72704 24.6609C5.83402 24.558 5.97647 24.5001 6.12492 24.4992H6.75761C6.82209 24.4993 6.88611 24.5101 6.947 24.5314C6.96481 24.5275 6.9819 24.5209 6.9976 24.5117C7.0679 24.3868 7.0679 23.8668 7.0679 23.6172C7.0679 23.1136 6.94184 22.5054 6.72095 21.9403C6.60612 21.8752 6.51392 21.7765 6.45672 21.6576C6.07311 20.8543 5.55132 20.3355 5.1277 20.3355C4.6944 20.3355 4.14655 20.8967 3.76445 21.7306C3.70118 21.8669 3.59304 21.9774 3.4581 22.0436C3.25841 22.5842 3.14872 23.1408 3.14872 23.6169C3.14872 23.8265 3.14872 24.3829 3.22872 24.5138C3.22963 24.5138 3.24751 24.5247 3.29781 24.5371C3.36326 24.512 3.43356 24.4989 3.50386 24.4989H4.13776C4.28021 24.4991 4.41755 24.5521 4.52321 24.6476C4.62888 24.7431 4.69538 24.8745 4.70985 25.0162L4.71288 25.0516C4.71288 25.3913 4.45471 25.6501 4.13776 25.6501H3.50386C3.3781 25.6501 3.2566 25.608 3.1566 25.5316C2.7945 25.4634 2.53936 25.3037 2.37786 25.0437C2.18211 24.7295 2.14636 24.3168 2.14636 23.6169C2.14636 23.003 2.28817 22.2957 2.54573 21.6203C2.50751 21.4765 2.52091 21.3238 2.5836 21.1888C2.85177 20.6022 3.19296 20.0998 3.56991 19.7365C3.7657 19.5449 3.9892 19.3839 4.23291 19.2589C4.31864 19.0579 4.46743 18.8903 4.65682 18.7814C4.66652 17.9738 4.79075 17.2766 5.02044 16.7018C2.39089 18.0357 0.588867 20.7637 0.588867 23.9141C0.588867 27.9399 3.53022 28.1369 7.38061 28.1369C7.80089 28.1369 8.23117 28.1345 8.67084 28.1345H16.9937C17.4328 28.1345 17.8631 28.1369 18.2833 28.1369C22.1343 28.1369 25.0769 27.9399 25.0769 23.9141C25.0766 20.7304 23.2361 17.9784 20.5617 16.6606Z" fill="#5E5E9E" />
                        <path d="M12.8344 16.9221C16.5566 16.9221 19.5737 11.3252 19.5737 7.60328C19.5737 3.88197 16.5566 0.864868 12.8344 0.864868C9.11281 0.864868 6.0957 3.88197 6.0957 7.60328C6.0957 11.3252 9.11281 16.9221 12.8344 16.9221Z" fill="#5E5E9E" />
                        <path d="M20.5663 21.666C21.0683 21.666 21.4753 21.259 21.4753 20.7569C21.4753 20.2549 21.0683 19.8479 20.5663 19.8479C20.0642 19.8479 19.6572 20.2549 19.6572 20.7569C19.6572 21.259 20.0642 21.666 20.5663 21.666Z" fill="#5E5E9E" />
                      </svg>

                      {/* <FaUserMd className="text-[#5E5E9E] text-2xl rounded-lg " /> */}
                    </div>
                    <div className="md:grid">
                      <span className="text-md font-bold text-gray-400">Total Doctors</span>
                      <span className="font-bold mt-2">{doctorData?.length}</span>
                    </div>
                  </div>
                </div>

                {/* Total Appointments */}
                <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center min-h-[100px]">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#41B16126] rounded-full p-4">
                      {/* <FaCalendarCheck className="text-purple-500 text-lg" /> */}
                      <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.5837 11.2501V8.12508C31.5837 7.29628 31.2544 6.50142 30.6684 5.91537C30.0823 5.32932 29.2875 5.00008 28.4587 5.00008H24.292V3.95841C24.292 3.68215 24.1822 3.4172 23.9869 3.22185C23.7915 3.02649 23.5266 2.91675 23.2503 2.91675C22.9741 2.91675 22.7091 3.02649 22.5138 3.22185C22.3184 3.4172 22.2087 3.68215 22.2087 3.95841V5.00008H11.792V3.95841C11.792 3.68215 11.6822 3.4172 11.4869 3.22185C11.2915 3.02649 11.0266 2.91675 10.7503 2.91675C10.4741 2.91675 10.2091 3.02649 10.0138 3.22185C9.81841 3.4172 9.70866 3.68215 9.70866 3.95841V5.00008H5.54199C4.71319 5.00008 3.91833 5.32932 3.33228 5.91537C2.74623 6.50142 2.41699 7.29628 2.41699 8.12508V11.2501H31.5837ZM2.41699 13.3334V28.9584C2.41699 29.7872 2.74623 30.5821 3.33228 31.1681C3.91833 31.7542 4.71319 32.0834 5.54199 32.0834H28.4587C29.2875 32.0834 30.0823 31.7542 30.6684 31.1681C31.2544 30.5821 31.5837 29.7872 31.5837 28.9584V13.3334H2.41699ZM22.8857 19.3324L15.5941 25.5824C15.3948 25.7528 15.1385 25.8417 14.8765 25.8315C14.6145 25.8213 14.3659 25.7126 14.1805 25.5272L11.0555 22.4022C10.8658 22.2057 10.7608 21.9426 10.7632 21.6695C10.7655 21.3963 10.8751 21.1351 11.0682 20.9419C11.2614 20.7488 11.5226 20.6393 11.7957 20.6369C12.0689 20.6345 12.332 20.7395 12.5285 20.9292L14.9722 23.373L21.5347 17.748C21.638 17.6549 21.7589 17.5834 21.8902 17.5378C22.0215 17.4922 22.1607 17.4733 22.2994 17.4823C22.4382 17.4912 22.5738 17.5279 22.6981 17.5901C22.8225 17.6523 22.9331 17.7388 23.0235 17.8444C23.1139 17.9501 23.1823 18.0728 23.2245 18.2052C23.2668 18.3377 23.2821 18.4773 23.2695 18.6158C23.257 18.7542 23.2168 18.8888 23.1515 19.0115C23.0861 19.1342 22.9968 19.2426 22.8889 19.3303L22.8857 19.3324Z" fill="#41B161" />
                      </svg>

                    </div>
                    <div className="md:grid">
                      <span className="text-md font-bold text-gray-400">Total Appointments</span>
                      <span className="font-bold mt-2">1080</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Patients Statistics with Graph */}
              <div className="grid">
                <StatisticsChart patientData={patientData} />
              </div>
            </div>

            {/* right */}
            <div className="grid min-h-full">
              {/* Billing & Payments */}
              <div className="bg-white p-4 rounded-lg shadow overflow-auto  ">
                <BillingPayments />
              </div>
            </div>
          </div>

          <div className="gap-2 grid md:grid-cols-3 overflow-x-auto p-4 ">
            <div className="md:col-span-2">
              {/* Today's Appointments List */}
              <div className="bg-white">
                <AppointmentsList />
              </div>
            </div>
            <div className="grid">
              {/* Patients Summary */}

              <PatientsSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
