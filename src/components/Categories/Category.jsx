

const Category = ({category}) => {
    const{logo,category_name,availability} = category;
    return (
        <div>
            <div className="bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] py-10 pl-10 rounded-lg space-y-2">
                <img className="w-16" src={logo} alt="" />
                <h1 className="text-lg font-medium">{category_name}</h1>
                <p className="text-[#A3A3A3]">{availability}</p>
            </div>
        </div>
    );
};

export default Category;