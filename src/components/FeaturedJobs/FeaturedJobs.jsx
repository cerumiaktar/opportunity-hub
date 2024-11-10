import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className="mb-5">
                <h2 className="text-2xl font-medium text-center">Featured Jobs:{jobs.length}</h2>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-10 mb-10">
                {
                    jobs.slice(0, dataLength).map(job =><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="text-center mb-10n">
                <button onClick={() => setDataLength()} className="btn btn-primary ">See all Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;