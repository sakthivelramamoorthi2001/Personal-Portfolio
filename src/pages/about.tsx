import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Profile from "../assets/profilePic.jpg";
import { FiPlusSquare } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Victory from "../components/UIComponents/Victory";

const app = () => {
  const [follow, setfollow] = useState<Boolean>(false);

  return (
    <section className="flexingRowSpaceBt">
      <Victory piese={300} won={true} />
      <div className="  w-1/2 flexingColCenter h-[70vh]">
        <div className="profileborder">
          <img src={Profile} alt="" className="profileImg" />
          <div
            className=" profileFollowIcon flexingRowCenter [&>*]:mr-2 text-2xl"
            onClick={() => {
              setfollow(!follow);
            }}
          >
            <div>
              {!follow && <FiPlusSquare className="text-[3vh]" />}
              {follow && <TiTick className="text-[3vh]" />}
            </div>
            <h1>{!follow ? "Follow" : "Following"}</h1>
          </div>
        </div>
      </div>
      <div className="flexingColStart h-[70vh] w-1/2 ">
        <h1 className="text-[8vh] font-bold text-pink ">
          I'm Sakthivel Ramammoorthi. <span>BE</span>
        </h1>
        <p className="text-xl flex flex-col justify-start text-white bg-pink bg-opacity-80 rounded-lg p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis
          placeat impedit modi, laborum commodi eum ab amet, dignissimos numquam
          mollitia explicabo alias optio dolorem corrupti architecto facilis est
          officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
          odio alias iusto, provident quae ex maiores sed? Voluptatem quos quae
          temporibus enim laborum nesciunt quaerat consequatur itaque, culpa
          quibusdam.
          <button className="w-2/12 flexingRowCenter [&>*]:mr-2 rounded-md hover:scale-[1.1] hover:translate-x-1 mt-10 bg-white text-pink p-2">
            <h1>About..</h1>
            <h1>
              <BsFillArrowRightCircleFill />
            </h1>
          </button>
        </p>
      </div>
    </section>
  );
};

export default app;
