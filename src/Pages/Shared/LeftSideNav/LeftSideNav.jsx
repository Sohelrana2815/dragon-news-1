import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";

const LeftSideNav = () => {
  // all news data load

  const [categories, setCategories] = useState([]);

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);

  return (
    <>
      <div className="space-y-8 p-4">
        <h2 className="text-3xl">All Category</h2>
        {categories.map((category, idx) => (
          <>
            <Link
              to={`/category/${category.id}`}
              className="block text-xl font-semibold ml-4"
              key={idx}
            >
              {category.name}
            </Link>
          </>
        ))}

        <div className="space-y-10">
          {/*left news card */}
          <h2 className="text-2xl mt-20">All News</h2>
          {newsData.map((news) => (
            <>
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={news.author.img} />
                </figure>
                <div className="card-body">
                  <p>{news.title}</p>
                  <div className=" gap-6 space-y-2">
                    <p className="text-base w-full">{news.author.name}</p>

                    <p className="text-sm flex items-center">
                      <CiCalendar className="text-2xl mr-2"></CiCalendar>
                      {news.author.published_date}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default LeftSideNav;
