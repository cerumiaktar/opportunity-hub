

const Banner = () => {
    return (
        <div className="hero bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] h-[400px] rounded-lg mt-10 mb-10 py-8 px-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co.com/0c8whfQ/profile1.jpg"

                    className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1>
                    <p className="py-6">
                        Explore thousands of job opportunities with all the information <br /> you need. Its your future. Come find it. 
                    </p>
                    <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;