/* eslint-disable react/no-unescaped-entities */
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import avatar from "./assets/dev-ed-wave.png";

function App() {
  return (
    <>
      <main className="px-10 md:px-20 lg:px-40 bg-white">
        {/* {Introducing section} */}
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
            <AiFillGithub />
            <AiFillHtml5 />
            <IoLogoCss3 />
            <IoLogoJavascript />
            <RiReactjsFill />
          </div>

          {/* {avatar}*/}
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:h-96 md:w-96">
            <img src={avatar} alt="avatar" />
          </div>
        </section>
        <section></section>
        <section></section>
      </main>
    </>
  );
}

export default App;
