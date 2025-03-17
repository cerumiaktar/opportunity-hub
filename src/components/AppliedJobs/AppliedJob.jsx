

const AppliedJob = ({ job }) => {
    const { job_title, company_name,logo } = job;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img className="px-8 bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] py-10 ml-8 rounded-2xl" src={logo} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;
