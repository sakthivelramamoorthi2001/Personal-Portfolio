import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router";
const app: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    gsap.fromTo(
      ".name",
      { x: 1800, opacity: 0 },
      { x: 0, opacity: 1, duration: 2.5 }
    );
    gsap.fromTo(".role", { opacity: 0 }, { opacity: 1, duration: 3.5 });
    gsap.fromTo(".bgpink", { opacity: 0 }, { opacity: 1, duration: 3 });

    window.setTimeout(() => {
      navigate("/profile");
    }, 4000);
  }, []);

  return (
    <div className="flexingColCenter h-screen">
      <h1 className="text-[13vh] uppercase mb-5 text-green-900  name">
        sakthivel Ramamoorthi.R
      </h1>
      <h3 className="text-[5vh]  text-green-600 uppercase role text-center ">
        Full stack Softwere Developer
      </h3>
    </div>
  );
};

export default app;
