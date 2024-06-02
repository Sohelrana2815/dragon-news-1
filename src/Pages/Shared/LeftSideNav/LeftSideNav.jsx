import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import News from "./news";

const LeftSideNav = () => {
  // all news data load

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="space-y-8 p-4">
      <h2 className="text-3xl">All Category</h2>
      {categories.map((category) => (
        <>
          <Link
            to={`/category/${category.id}`}
            className="block text-xl font-semibold ml-4"
            key={category.id}
          >
            {category.name}
          </Link>
        </>
      ))}

      <div>
        <h2 className="text-2xl">All News</h2>
        {/*left news card */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className="card-actions space-x-10">
              <div>Fashion</div>
              <div>Products</div>
            </div>
          </div>
        </div>
      </div>
      <News></News>
    </div>
  );
};

export default LeftSideNav;
