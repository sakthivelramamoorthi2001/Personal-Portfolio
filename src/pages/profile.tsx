import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Profile from "../assets/profilePic.jpg";
import { FiPlusSquare } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Victory from "../components/UIComponents/Victory";
import { useNavigate } from "react-router";
import { GrReactjs } from "react-icons/gr";
import {
  AiFillDatabase,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaVuejs, FaJava, FaNodeJs, FaWhatsappSquare } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BsDatabaseFillGear, BsFiletypeHtml } from "react-icons/bs";
import { SiNestjs, SiTailwindcss, SiPostgresql } from "react-icons/si";
import sideHiremeImg from "../assets/developer-dark.3f07bd13.svg";
import Forms from "../pages/Hireform";

const app = () => {
  const navigate = useNavigate();
  const [follow, setfollow] = useState<Boolean>(false);
  const [techskills, setTechSkills] = useState<Array<any>>([
    {
      icon: <BsFiletypeHtml size={100} className="text-green-600" />,
      skillName: "Htm & css",
      percentage: "100%",
      content: "I'm strong in Node js with Express things",
      certificate: true,
    },
    {
      icon: <TbBrandJavascript size={100} className="text-green-600" />,
      skillName: "Java Script",
      percentage: "90%",
      content: "I'm strong in js extend with react and vue",
      certificate: true,
    },
    {
      icon: <TbBrandJavascript size={100} className="text-green-600" />,
      skillName: "Tailwind css",
      percentage: "90%",
      content: "I'm strong in Tailwind css extend with react",
      certificate: false,
    },
    {
      icon: <GrReactjs size={100} className="text-green-600" />,
      skillName: "React Js",
      percentage: "90%",
      content: "I'm strong in Tailwind css extend with react",
      certificate: false,
    },
    {
      icon: <FaVuejs size={100} className="text-green-600" />,
      skillName: "Vue js",
      percentage: "60%",
      content: "I'm learing vue right now",
      certificate: false,
    },
    {
      icon: <FaNodeJs size={100} className="text-green-600" />,
      skillName: "Node Js",
      percentage: "85%",
      content: "I'm strong in Node js with Express things",
      certificate: false,
    },
    {
      icon: <SiNestjs size={100} className="text-green-600" />,
      skillName: "Nest Js",
      percentage: "85%",
      content: "I'm strong in Nest js with Express things",
      certificate: false,
    },
    {
      icon: <SiPostgresql size={100} className="text-green-600" />,
      skillName: "Postgresql",
      percentage: "85%",
      content: "I'm strong in Postgresql with node js",
      certificate: false,
    },
    {
      icon: <FaJava size={100} className="text-green-600" />,
      skillName: "JAVA",
      percentage: "75%",
      content: "I'm strong in react hooks things",
      certificate: true,
    },
    {
      icon: <BsDatabaseFillGear size={100} className="text-green-600" />,
      skillName: "Mysql ",
      percentage: "95%",
      content: "I'm strong in Mysql js with Jdbc things",
      certificate: true,
    },
    {
      icon: <AiFillDatabase size={100} className="text-green-600" />,
      skillName: "Data Structure ",
      percentage: "40%",
      content: "I'm recently learnig data strcure ",
      certificate: false,
    },
  ]);
  const [project, setProject] = useState<Array<any>>([
    {
      imgUrl:
        "https://t4.ftcdn.net/jpg/01/82/36/49/360_F_182364926_S3VFLSIOse7MlLd26ox1hWJIhf3Njsn1.jpg",
      title: "Turtle Egg Collection",
      content:
        "Collection the egg of turtle and store the collection data in database with current location",
      link: "",
      completeStatus: true,
    },
    {
      imgUrl:
        "https://balue75f94cab30.files.wordpress.com/2022/09/jpg_20220911_090152_00001.jpg?w=1024",
      title: "Curium Life Website",
      content:
        "The curium life is the surgery clienic. In this project I created (web and Mobile view) static web site for them. ",
      link: "",
      completeStatus: true,
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TamilNadu_Logo.svg/800px-TamilNadu_Logo.svg.png",
      title: "Village Services Trust Group of Skill Training Institutions",
      content:
        "This project is Goverment skill training insitution. I created static web site (mobile and web view) ",
      link: "",
      completeStatus: true,
    },
    {
      imgUrl:
        "https://png.pngtree.com/png-clipart/20221011/original/pngtree-badminton-player-with-shuttle-on-court-in-flat-style-cartoon-illustration-png-image_8674495.png",
      link: "",
      title: "The SpringFit Batmitton Court",
      content:
        "This Project is Batmitton court managment, I worked as front end developer in this project ",
      completeStatus: true,
    },
    {
      imgUrl:
        "https://media.licdn.com/dms/image/D4E03AQGF-X8s_Pb6ig/profile-displayphoto-shrink_800_800/0/1678870896059?e=2147483647&v=beta&t=QxF3r5_zUbm_pLVbxV93sCAahUbAgzcSDOOyM5Znvp4",
      link: "",
      title: "The Mortimer Green ",
      content:
        "This Project is Mortimer Green study metrial management, I worked as front end developer in this project",
      completeStatus: true,
    },
    {
      imgUrl:
        "https://play-lh.googleusercontent.com/HiaZvWmZ8XUSW14oFaCkR3Ej5O47zbMXk5SRC07orO4VVkvnP0G9OHSFRT1rVRyGa4E=w416-h235-rw",
      link: "",
      title: "The Surgtest",
      content:
        "This Project is Surgtest is Neet and medical study metrial management , I worked as front end developer in this project",
      completeStatus: false,
    },
    {
      imgUrl:
        "data:image/jpeg;base64,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C1mH1r5iWSbjpbRb3RfB3VdQyJo6t9px4Bo3378h4qeaanbGxsbRZrQGgdgFlotC9G20UNjnM+xee34R2LpFYgjyNudytPidZ+oks36W7deZ9uiIiKda1ERERERERERERabSXAY6yExPydvY7i1w3FQhjOFy0sroZW2I3HgRzB4r6IWl0k0firI9iQWcPZeN7T+ygmhz6jdbTDsQNOcj9WH06jpzHiFAqLZaQYFLRydHIMjucPZPd29i1qo7aFdU1wc0Oabg8UREXi9Xix30rSSTmTxO/LdmslF6vCAd1IugOmzbCkq3Z7o5HZhw3bLjwK6XGtBqKp63Rhj94fH1d/Hq2uoTe0EWK6vRrT2opAI5bzQiwz9to7/esFZjmBGV60lZhz2O7amNjxA08vbyWyrtV8zPwZg5vJ+R7sgufqdDsQZe9PtDmwtPoSFLOB6X0dWPu5W7fFhIDh3hb8G6kNPGdQqTcWqozZ9j3jX0svnmTA6tu+ml8Bf5FexYDWOzFNL4tt8yvoWyWWP6Uc1N/jktvoHr7qCqXQqvfb7jZHN5b8gSugoNVsp/GmDRyZmfMhSqStFjullJRtvNM0Hg0EXPcFmKdg3UL8Yqn6NsO4a+t1j4NoXR03WEYc/i5/WPfnuXJaydPWsDqGjdeVws+Ru6MG4sCPe7loNKdZFRWB0NMDDAci/33Dsv7N1y1DQnaDWgue47t7nE/NYPlawWYpaegmqH9pOT47/2VqlorWA2ts5dW+06/DLfdTBq40LFM0VEzR07vZac+jb/AFFXdCtCBBaeoAdPa4b7rL/Mru17DEfqd5LHEK5hvFBtxPPoOn37kREVlaZERERERERERERERERERERYWJYdFPGYpWBzDwPzHaot0m1fywkyU/3kW/Z99v7hS+ijkia/dW6Wtlpj8h04g7ft3hfNbwQbEEEcDkUU445ohS1WbmbD/jZ1T4gZHxCj7G9XtTFd0X3ke/KwcB3cfBU3wPb1XR0+KU82hOU8j77fZceiu1NJJEdmRj2O5Oa4H/yCsKG62PVVIiIisy0zH77X5rLp8SrIrdHVSADgTceStIvQSNlG+JkmjwCtw3TbFGiwnae9pv8AzI/TfFSLdMz+E/1LToBfIC55DNZ9s8cVX/w6mP8AoVyqxaul/EqpLHgDYLXQ4exufHnxXVYVohWT7onNb8UgLLjmA61132BauoIiHzEyvHDcweA3+KyDZJFBJUUdLfa/IWJ9h4lR5o9opUVZAYzZj4vdk3w4lS3oxorBRtu0bUp3vIz7hyC3kMLWANa0NaNwaAAPAK6rUcAZrxWkq8SlqPlHyt5Dj3n+w6IiIplrkRERERERERERERERERERERERERERERERFi1VDFILPY1wPMLncQ0Ao5DdrOjP5LBdYixLQ7cKWOaSL6HEdxUdVOq6M/hzOH6hdYT9Vr+FQ097SFKSKMwRngrjcVqmi2a/eAVFjNVsnGdo7gT9Ffh1WZ9afLsapMRP08fJenFqoi2YeQXEUurakaQXF7+YcRYrpKDAqaH8OFje4LZosxG1uwVSSqnk+t5PivALL1EWagREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREX/2Q==",
      link: "",
      title: "The Vee to Care",
      content:
        "This Project is vee2care is school student management, I worked as front end developer in this project",
      completeStatus: false,
    },
  ]);

  const techSkillList = techskills.map((item) => {
    return (
      <div className="flex justify-center w-[32%]">
        <div className=" w-full flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <div className="w-3/12 flexingRowCenter">{item.icon}</div>
          <div className=" w-8/12 p-6 flex flex-col items-start justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {item.skillName}
            </h5>
            {item.certificate && (
              <h4 className="flexingRowCenter text-blue-600 mb-1">
                certified certificate <TiTick className="text-blue-600" />
              </h4>
            )}
            <p className="text-gray-700 text-base mb-4 ">{item.content}</p>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: item.percentage }}
              >
                {item.percentage}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const [pernoalProject, setPernoalProject] = useState<Array<any>>([
    {
      imgUrl: "https://jobscruze.com/images/infogra/03.jpg",
      title: "The Resume Builder",
      content:
        "This project is build resume with own idea, I was start this project from scratch",
      link: "",
      completeStatus: false,
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlwNJKO1KFxbms4b_tbhTaPX8mRJ3yK625A&usqp=CAU",
      title: "Persnoal Portfolio",
      content: "persnoal portfolio own code with vercel hosting",
      link: "",
      completeStatus: true,
    },
  ]);
  const projectsList = project.map((item) => {
    return (
      <div className="w-[23%] c  mr-[1%] ml-[1%] block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <a href="#!">
          <img
            className="rounded-t-lg h-[18vh] w-full"
            src={item.imgUrl}
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {item.title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {String(item.content).length <= 100
              ? item.content
              : `${String(item.content).slice(0, 80)}...`}
          </p>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Project Status :{" "}
            {item.completeStatus ? (
              <span className="text-green-600">completed</span>
            ) : (
              <span className="text-blue-600">On-Progress</span>
            )}
          </p>
          <button
            type="button"
            className="inline-block mt-2 rounded bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            details
          </button>
        </div>
      </div>
    );
  });

  const personalProjectsList = pernoalProject.map((item) => {
    return (
      <div className="w-[23%] mr-[1%] ml-[1%] block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <a href="#!">
          <img
            className="rounded-t-lg h-[20vh] w-full"
            src={item.imgUrl}
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {item.title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {String(item.content).length <= 100 ? item.content : ""}
          </p>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Project Status :{" "}
            {item.completeStatus ? (
              <span className="text-green-600">completed</span>
            ) : (
              <span className="text-blue-600">On-Progress</span>
            )}
          </p>
          <button
            type="button"
            className="inline-block mt-2 rounded bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            details
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <section className="flexingRowSpaceBt">
        <div className="flexingColStart h-[70vh] w-1/2 p-2 ">
          <h1 className="text-[7vh] font-bold text-green-600 uppercase  ">
            I'm Sakthivel Ramammoorthi. <span>BE</span>
          </h1>
          <p className="text-xl flex flex-col justify-start text-greylight ">
            To get an opportunity where I can make the best of my potential and
            contribute to the organization's growth. Seeking a position in a
            company where I can launch my career and build a valuable skill set.
            Seeking a role in an MNC where I can upgrade my skills with time and
            take the company to the next level
          </p>
          <button
            onClick={() => navigate("about")}
            className="[&>*]:mr-2 flexingRowCenter bg-green-600 text-white p-3 rounded-md mt-5 hover:bg-green-700 hover:scale-[1.1] hover:transition-transform"
          >
            <h1 className="text-xl">View Resume..</h1>
            <h1>
              <BsFillArrowRightCircleFill />
            </h1>
          </button>
        </div>
        <div className=" w-1/2 flexingRowLast h-[70vh]">
          <div className="">
            <img
              src={Profile}
              className=" xl:w-[45vh] lg:w-[33vh] rounded-3xl"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* skilss */}

      <section className=" mobileViewNone h-[33vh] ">
        <div className="title">Worked Technolgys</div>
        <div className="toolTop">
          <ul className="tools mt-3">
            <li className="tool flexingColCenter">
              <h2>React Js</h2>
              <GrReactjs size={40} className="text-green-600" />
            </li>
            <li className="tool flexingColCenter">
              <h2>Vue Js</h2>
              <FaVuejs size={40} className="text-green-600" />
            </li>
            <li className="tool flexingColCenter">
              <h2>Java Script</h2>
              <TbBrandJavascript size={40} className="text-green-600" />
            </li>

            <li className="tool flexingColCenter">
              <h2>Node js</h2>
              <FaNodeJs size={40} className="text-green-600" />
            </li>

            <li className="tool flexingColCenter">
              <h2>Tailwind css</h2>
              <SiTailwindcss size={40} className="text-green-600" />
            </li>
          </ul>
        </div>
      </section>

      {/* skill */}

      <section>
        <div className="title">Technolgys Skills</div>
        <div className="flex flex-row flex-wrap [&>*]:mb-5 w-full [&>*]:mr-[1%] tems-center justify-start">
          {techSkillList}
        </div>
      </section>

      <section>
        <div className="title">Worked Projects</div>
        <div className=" flex flex-row flex-wrap  items-center justify-start">
          {projectsList}
        </div>
      </section>

      <section>
        <div className="title">Worked Personal Projects</div>
        <div className=" flex flex-row flex-wrap  items-center justify-start">
          {personalProjectsList}
        </div>
      </section>

      {/* hire me */}

      <section className="">
        <div className="title">Hire Me</div>
        <div className="flex flex-row justify-center">
          <div className="w-1/2 flexingRowCenter">
            <img src={sideHiremeImg} alt="" className="w-full" />
          </div>
          <div className="w-1/2 flex flex-col justify-start items-center contact ">
            <Forms />
          </div>
        </div>
      </section>

      <section>
        <div className="h-[32vh] bg-gray-100 flexingColCenter">
          <h1 className="text-2xl text-green-600 font-semibold">
            let Connect with us
          </h1>
          <ul className="flexingRowCenter [&>*]:mr-2 mt-2">
            <li>
              <AiFillTwitterSquare size={40} />
            </li>
            <li>
              <AiFillFacebook size={40} />
            </li>
            <li>
              <FaWhatsappSquare size={40} />
               
            </li>
            <li>
              <AiFillLinkedin size={40} />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default app;
