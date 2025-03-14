import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl p-5 border space-y-3">
            <figure>
                <img src={logo} alt="logo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p className="text-[#757575]">{company_name}</p>
                <div>
                    <button className="px-5 py-2 border-2 border-blue-500 rounded-md text-base mr-5 font-medium text-blue-500">{remote_or_onsite}</button>
                    <button className="px-5 py-2 border-2 border-blue-500 rounded-md text-base font-medium text-blue-500">{job_type}</button>
                </div>
                <div className="flex items-center gap-4 text-[#757575]">
                    <h3 className="flex items-center gap-1 text-base"><IoLocationOutline />{location}</h3>
                    <h3 className="flex items-center gap-1 text-base"><CiDollar />{salary}</h3>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;