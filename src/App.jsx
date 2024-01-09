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
import web1 from "./assets/web1.png";
import web2 from "./assets/web2.png";
import web3 from "./assets/web3.png";
import web4 from "./assets/web4.png";
import web5 from "./assets/web5.png";
import web6 from "./assets/web6.png";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="px-10 md:px-20 lg:px-40 bg-white dark:bg-slate-800">
        {/* {About me section} */}
        <section className="min-h-screen">
          {/* {Navbar} */}
          <nav className="flex justify-between py-10 mb-12">
            <h1 className="text-xl font-burtons dark:text-white">Uyen Lai</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="text-2xl cursor-pointer dark:text-white hover:opacity-70"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li className="px-4 py-2 border-none rounded-md ml-8 bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:opacity-80">
                <a href="#">Resume</a>
              </li>
            </ul>
          </nav>

          {/* {Description} */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-5 text-teal-500 font-medium md:text-6xl">
              Lai Tu Uyen
            </h2>
            <h3 className="text-2xl md:text-3xl py-2 dark:text-white">
              Font-end Developer
            </h3>
            <p className="py-5 font-medium text-gray-500 leading-8 max-w-xl md:text-xl mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              amet dignissimos quam consequatur. Quod maiores similique aut
              blanditiis nulla, minus culpa voluptatibus natus consequuntur ea
              enim porro, aliquid unde hic?
            </p>
          </div>

          {/* {Skills} */}
          <div className="flex justify-center gap-16 py-3 text-gray-600 text-4xl">
            <AiFillGithub className="cursor-pointer hover:opacity-50" />
            <AiFillHtml5 className="cursor-pointer hover:opacity-50" />
            <IoLogoCss3 className="cursor-pointer hover:opacity-50" />
            <IoLogoJavascript className="cursor-pointer hover:opacity-50" />
            <RiReactjsFill className="cursor-pointer hover:opacity-50" />
          </div>

          {/* {Avatar}*/}
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:h-96 md:w-96">
            <img src={avatar} alt="avatar" />
          </div>
        </section>

        {/* {Services section} */}
        <section>
          <div className="m-12">
            <h3 className="text-2xl md:text-3xl py-2 text-center dark:text-white">
              Services I offer
            </h3>
            <p className="py-2 font-normal text-gray-500 leading-6 max-w-xl md:text-base mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              veniam quae rerum{" "}
              <span className="text-teal-500 cursor-pointer">error</span>
              facilis suscipit excepturi! Exercitationem quae tempora dolore
              perspiciatis sunt porro, minus nulla! Libero modi
              <span className="text-teal-500 cursor-pointer">ipsam</span>
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
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">Indesign</p>
            </div>

            <div className="p-10 rounded-md py-10 flex-1 flex justify-center items-center flex-col">
              <img src={code} alt="Code image" className="w-24 h-24" />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Code your dream projects
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">Indesign</p>
            </div>

            <div className="p-10 rounded-md py-10 flex-1 flex justify-center items-center flex-col">
              <img
                src={consulting}
                alt="Consulting image"
                className="w-24 h-24"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Consulting
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">Indesign</p>
            </div>
          </div>
        </section>

        {/* {Projects section} */}
        <section className="py-10">
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl py-2 text-center dark:text-white">
              Portfolio
            </h3>
            <p className="py-2 font-normal text-gray-500 leading-6 max-w-xl md:text-base mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam blanditiis nihil beatae facilis culpa recusandae,
              voluptatibus laboriosam commodi molestiae modi libero cum sed,
              quia alias eligendi ipsum sit totam odit.
            </p>
            <p className="py-2 font-normal text-gray-500 leading-6 max-w-xl md:text-base mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam blanditiis nihil beatae facilis culpa recusandae,
              voluptatibus laboriosam commodi molestiae modi libero cum sed,
              quia alias eligendi ipsum sit totam odit.
            </p>
            <p className="py-2 font-normal text-gray-500 leading-6 max-w-xl md:text-base mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam blanditiis nihil beatae facilis culpa recusandae,
              voluptatibus laboriosam commodi molestiae modi libero cum sed,
              quia alias eligendi ipsum sit totam odit.
            </p>
          </div>

          <h2 className="text-5xl pb-5 font-medium md:text-2xl text-center dark:text-white">
            Projects
          </h2>
          <div className="flex flex-col gap-20">
            <div className="flex gap-3">
              <div className="basis-1/3">
                <img
                  src={web1}
                  alt="web1"
                  className="w-full h-full cursor-pointer hover:opacity-80"
                />
              </div>
              <div className="basis-1/3">
                <img
                  src={web2}
                  alt="web2"
                  className="w-full h-full cursor-pointer hover:opacity-80"
                />
              </div>
              <div className="basis-1/3">
                <img
                  src={web3}
                  alt="web3"
                  className="w-full h-full cursor-pointer hover:opacity-80"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="basis-1/3">
                <img
                  src={web4}
                  alt="web4"
                  className="w-full h-full cursor-pointer hover:opacity-80"
                />
              </div>
              <div className="basis-1/3">
                <img
                  src={web5}
                  alt="web5"
                  className="w-full h-full cursor-pointer hover:opacity-80"
                />
              </div>
              <div className="basis-1/3">
                <img
                  src={web6}
                  alt="web6"
                  className="w-full h-full cursor-pointer hover:opacity-80"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
