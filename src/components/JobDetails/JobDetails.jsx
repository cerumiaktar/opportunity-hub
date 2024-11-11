import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idiInt = parseInt(id);
    const job = jobs.find(job => job.id === idiInt)
    console.log(job, id);

    const handleToast = () =>{
        toast('You have Applied Successfully');
    }

    return (
        <div>
            <h2 className="text-2xl font-medium text-center mb-3">Job Details</h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border-2 border-blue-300 md:col-span-3 p-4 rounded">
                    <h4 > <span className="text-xl font-medium">Job Details:</span> {job.job_description}</h4>
                    <h4 className="mt-3 mb-3"> <span className="text-xl font-medium ">Job Responsibility:</span> {job.job_responsibility}</h4>
                    <div>
                        <h4 className="text-xl font-medium">Educational Requirement:</h4>
                        <p>{job.educational_requirements}</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-medium">Experience:</h4>
                        <p>{job.experiences}</p>
                    </div>
                </div>
                <div className="border-2 border-blue-300 p-4 rounded">
                    <h2 className="text-2xl font-medium">Job Details</h2>
                    <hr/>
                    <div>
                        <h2 className="flex items-center gap-2"><CiDollar />Salary: {job.salary}</h2>
                        <h2 className="flex gap-2"><CiDollar />Job Title: {job.job_title}</h2>
                    </div>
                    {/* <h2 className="text-xl font-medium">Contact Information{job.contact_information.phone}</h2> */}
                    <button onClick={handleToast} className="btn btn-primary">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;