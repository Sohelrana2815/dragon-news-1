import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="lg:max-w-[1440px] mx-auto font-poppins">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
