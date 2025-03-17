import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import { MdKeyboardArrowDown } from "react-icons/md";
import AppliedJob from "./AppliedJob";


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const[displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobApplied);
            setDisplayJobs(jobApplied);
            // console.log(jobs, storedJobIds, jobApplied)
        }
    }, [])
    return (
        <div className="mb-10">
            <h1 className="text-2xl font-medium text-center mt-8 mb-8 bg-gradient-to-r from-[#7E90FE1F] to-[#9873FF1F] py-10 rounded-2xl">Applied Jobs: {appliedJobs.length}</h1>
            <details className="dropdown flex justify-end">
                <summary className="btn m-1">Filter By<MdKeyboardArrowDown /></summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul className="space-y-6 mt-4">
                {
                    displayJobs.map(job => <AppliedJob job={job}></AppliedJob>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;