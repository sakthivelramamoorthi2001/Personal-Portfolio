import { Outlet } from "react-router";
import logo from "../assets/softwere developer logo.jpg";
const app = () => {
  return (
    <div className=" h-[100vh] flex justify-center">
      <div className="container [&>section]:mt-5 [&>section]:mt-[40px]">
        <div className=" flexingRowSpaceBt ">
          <div>
            <img src={logo} alt="" className="w-[12vh] " />
          </div>
          <ul className="flexingRowStart navigationLi [&>*]:mr-8">
            <li>home</li>
            <li>about</li>
            <li>project</li>
            <li>contact</li>
          </ul>
        </div>
        {/* home content */}
        <Outlet />
      </div>
     
    </div>
  );
};

export default app;
