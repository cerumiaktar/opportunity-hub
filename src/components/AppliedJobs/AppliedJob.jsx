

const AppliedJob = ({ job }) => {
    const { job_title, company_name,logo,remote_or_onsite,job_type } = job;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl border">
                <figure>
                    <img className="px-8 bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] py-10 ml-8 rounded-2xl" src={logo} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="space-x-4">
                        <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
                        <button className="btn btn-outline btn-primary">{job_type}</button>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;
