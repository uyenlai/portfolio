/* eslint-disable react/no-unescaped-entities */
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import avatar from "./assets/dev-ed-wave.png";
import design from "./assets/design.png";
import code from "./assets/code.png";
import consulting from "./assets/consulting.png";

function App() {
  return (
    <>
      <main className="px-10 md:px-20 lg:px-40 bg-white">
        {/* {About me section} */}
        <section className="min-h-screen">
          {/* {Navbar} */}
          <nav className="flex justify-between py-10 mb-12">
            <h1 className="text-xl font-burtons">Uyen Lai</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="text-2xl cursor-pointer" />
              </li>
              <li className="px-4 py-2 border-none rounded-md ml-8 bg-gradient-to-r from-cyan-500 to-teal-500 text-white">
                <a href="#">Resume</a>
              </li>
            </ul>
          </nav>

          {/* {Description} */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-5 text-teal-500 font-medium md:text-6xl">
              Lai Tu Uyen
            </h2>
            <h3 className="text-2xl md:text-3xl py-2">Font-end Developer</h3>
            <p className="py-5 font-medium text-gray-500 leading-8 max-w-xl md:text-xl mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              amet dignissimos quam consequatur. Quod maiores similique aut
              blanditiis nulla, minus culpa voluptatibus natus consequuntur ea
              enim porro, aliquid unde hic?
            </p>
          </div>

          {/* {Skills} */}
          <div className="flex justify-center gap-16 py-3 text-gray-600 text-4xl">
            <AiFillGithub className="cursor-pointer" />
            <AiFillHtml5 className="cursor-pointer" />
            <IoLogoCss3 className="cursor-pointer" />
            <IoLogoJavascript className="cursor-pointer" />
            <RiReactjsFill className="cursor-pointer" />
          </div>

          {/* {Avatar}*/}
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:h-96 md:w-96">
            <img src={avatar} alt="avatar" />
          </div>
        </section>

        {/* {Services section} */}
        <section>
          <div className="m-12">
            <h3 className="text-2xl md:text-3xl py-2 text-center ">
              Services I offer
            </h3>
            <p className="py-2 font-normal text-gray-500 leading-6 max-w-xl md:text-base mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              veniam quae rerum{" "}
              <span className="text-teal-500 cursor-pointer">error</span>{" "}
              facilis suscipit excepturi! Exercitationem quae tempora dolore
              perspiciatis sunt porro, minus nulla! Libero modi{" "}
              <span className="text-teal-500 cursor-pointer">ipsam</span>{" "}
              corporis odit?
            </p>
            <p className="py-2 font-normal text-gray-500 leading-6 max-w-xl md:text-base mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos, fugiat iste. Placeat debitis magni incidunt
              perspiciatis, iure praesentium commodi optio doloremque,
              reiciendis quaerat vel ratione distinctio consequuntur voluptates,
              nobis modi.
            </p>
          </div>

          <div className="lg:flex gap-10 text-center">
            <div className="p-10 rounded-md py-10 flex-1 flex justify-center items-center flex-col">
              <img src={design} alt="Design image" className="w-24 h-24" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>

            <div className="p-10 rounded-md py-10 flex-1 flex justify-center items-center flex-col">
              <img src={code} alt="Code image" className="w-24 h-24" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Code your dream projects
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>

            <div className="p-10 rounded-md py-10 flex-1 flex justify-center items-center flex-col">
              <img
                src={consulting}
                alt="Consulting image"
                className="w-24 h-24"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>

        {/* {Projects section} */}
        <section></section>
      </main>
    </>
  );
}

export default App;
