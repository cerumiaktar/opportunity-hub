import { useEffect, useState } from "react";
import Category from "./Category";


const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="mb-10">
            <div className="space-y-2">
                <h2 className="text-2xl font-medium text-center">Job Category List</h2>
                <p className="text-center">Explore thousands of job opportunities with all the information you need.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {
                    categories.map(category =><Category category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;