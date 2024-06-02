import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import instagram from "../../../assets/Instagram.png";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
const RightSideNav = () => {
  return (
    <div>
      {/* btn section */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl">Login with</h2>
        <button className="btn btn-outline w-full text-lg font-medium text-blue-600">
          <FcGoogle className="text-2xl"></FcGoogle> Login with Google
        </button>
        <button className="btn btn-outline w-full text-lg font-medium">
          <FaGithub className="text-2xl"></FaGithub> Login with Github
        </button>
      </div>
      {/* find us section */}
      <div className="p-6  mb-8">
        <h2 className="text-2xl"> Find Us On</h2>
        <div className="mt-4">
          <a
            href="#"
            className="flex items-center font-medium text-base p-4 border rounded-t-lg"
          >
            <FaFacebookF className="text-xl mr-2 text-[#3B599C] bg-[#F3F3F3] rounded-md  "></FaFacebookF>
            Facebook
          </a>
          <a
            href="#"
            className="flex items-center font-medium text-base p-4 border-x "
          >
            <FaTwitter className="text-xl mr-2 text-[#58A7DE] bg-[#F3F3F3] rounded-md  rounded-b-lg  "></FaTwitter>
            Twitter
          </a>
          <a
            href="#"
            className="flex items-center font-medium text-base p-4 border rounded-b-lg "
          >
            <img className="bg-white" src={instagram} alt="" />
            Instagram
          </a>
        </div>
        {/* q zone */}
        <div className="p-4 space-y-2 mt-10">
          <h2 className="text-2xl">Q-zone</h2>
          <img src={qzone1} alt="" />
          <img src={qzone2} alt="" />
          <img src={qzone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
