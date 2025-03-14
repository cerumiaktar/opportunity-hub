import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { MdPhone,MdOutlineMail,MdLocationOn } from "react-icons/md";
import { GiHandBag } from "react-icons/gi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idiInt = parseInt(id);
    const job = jobs.find(job => job.id === idiInt)
    console.log(job, id);

    const handleToast = () => {
        saveJobApplication(idiInt);
        toast('You have Applied Successfully');
    }

    return (
        <div className="mt-10 mb-10 ">
            <h2 className="text-2xl font-medium text-center mb-3">Job Details</h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border-2 border-blue-300 md:col-span-3 p-4 rounded space-y-6">
                    <h4 className="leading-7 text-[#757575]" > <span className="text-xl font-medium text-black">Job Details:</span> {job.job_description}</h4>
                    <h4 className="mt-3 mb-3 leading-7 text-[#757575]"> <span className="text-xl font-medium text-black">Job Responsibility:</span> {job.job_responsibility}</h4>
                    <div>
                        <h4 className="text-xl font-medium">Educational Requirement:</h4>
                        <p className="text-[#757575]">{job.educational_requirements}</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-medium">Experience:</h4>
                        <p className="text-[#757575]">{job.experiences}</p>
                    </div>
                </div>
                <div className="border-2 border-blue-300 p-4 rounded bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D]">
                    <div>
                        <h2 className="text-xl font-medium pb-4">Job Details</h2>
                        <hr />
                        <div className="mt-4 space-y-4">
                            <h2 className="flex items-center gap-2"><CiDollar />Salary: {job.salary}</h2>
                            <h2 className="flex items-center gap-2"><GiHandBag />Job Title: {job.job_title}</h2>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-xl font-medium pb-4">Contact Information</h2>
                        <hr />
                        <div className="mt-4 space-y-4">
                            <h2 className="flex items-center gap-2"><MdPhone />Phone : 01750-00 00 00</h2>
                            <h2 className="flex items-center gap-2"><MdOutlineMail />Email : info@gmail.com</h2>
                            <h2 className="flex items-center gap-2"><MdLocationOn />Address : Dhaka, Bangladesh</h2>
                        </div>
                    </div>
                    {/* <h2 className="text-xl font-medium">Contact Information{job.contact_information.phone}</h2> */}
                </div>
            </div>
            <button onClick={handleToast} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white w-full mt-4">Apply Now</button>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;