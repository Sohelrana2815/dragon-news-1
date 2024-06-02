import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex  bg-[#F3F3F3] mt-8 py-5 px-4  ">
      <button className="bg-[#D72050] py-3 px-6 text-white ">Latest</button>
      <Marquee pauseOnHover={true} direction="right" speed={80}>
        <Link className="mr-12 text-lg font-semibold" to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link className="mr-12 text-lg font-semibold" to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link className="mr-12 text-lg font-semibold" to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
