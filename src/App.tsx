import React from "react";
import "./global.css";
import { MdPeopleAlt } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        id="introduceContainer"
        className="h-[500px] w-screen bg-cover bg-developer"
      >
        <div className="flex flex-col justify-center items-center my-28 mx-14">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="font-noto-sans font-black text-[50px] text-white">
              박상하 <br /> 프론트 엔드 개발자 포트폴리오{" "}
            </h1>
            <hr className="w-24 h-0 border-t-[0.3rem] border-cyan-500 mx-auto my-6 opacity-100" />
            <div className="font-noto-sans text-xl text-gray-100">
              안녕하세요. <br /> 화합하고 생각하는 프론트 엔드 개발자,
              박상하입니다.
            </div>
          </div>
        </div>
      </div>
      <div
        id="aboutMeContainer"
        className="flex flex-col justify-center items-center m-10 max-w-6xl"
      >
        <span className="font-tenada text-[50px] mb-8">ABOUT ME</span>
        <div className="flex flex-wrap justify-between w-full">
          <div className="mb-8 w-[33%]">
            <div className="flex flex-row flex-nowrap my-0 mx-auto  max-w-56  w-[100%]">
              <div className="w-8 min-w-8 h-8 mt-1 mr-8 block text-start">
                <MdPeopleAlt className="w-12 h-12 text-slate-800" />
              </div>
              <div className="block">
                <div className="font-sans font-bold text-xl mb-2 text-slate-800">
                  이름
                </div>
                <div className="font-sans font-normal text-gray-700">
                  박상하
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 w-[33%]">
            <div className="flex flex-row flex-nowrap my-0 mx-auto  max-w-56  w-[100%]">
              <div className="w-8 min-w-8 h-8 mt-1 mr-8 block text-start">
                <FaCalendar className="w-12 h-12 text-slate-800" />
              </div>
              <div className="block">
                <div className="font-sans font-bold text-xl mb-2 text-slate-800">
                  생년월일
                </div>
                <div className="font-sans font-normal text-gray-700">
                  95.06.01
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 w-[33%]">
            <div className="flex flex-row flex-nowrap my-0 mx-auto  max-w-56  w-[100%]">
              <div className="w-8 min-w-8 h-8 mt-1 mr-8 block text-start">
                <FaLocationDot className="w-12 h-12 text-slate-800" />
              </div>
              <div className="block">
                <div className="font-sans font-bold text-xl mb-2 text-slate-800">
                  주소지
                </div>
                <div className="font-sans font-normal text-gray-700">
                  대구광역시 동구
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 w-[33%]">
            <div className="flex flex-row flex-nowrap my-0 mx-auto  max-w-56  w-[100%]">
              <div className="w-8 min-w-8 h-8 mt-1 mr-8 block text-start">
                <IoCall className="w-12 h-12 text-slate-800" />
              </div>
              <div className="block">
                <div className="font-sans font-bold text-xl mb-2 text-slate-800">
                  연락처
                </div>
                <div className="font-sans font-normal text-gray-700">
                  010-5178-7098
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 w-[33%]">
            <div className="flex flex-row flex-nowrap my-0 mx-auto  max-w-56  w-[100%]">
              <div className="w-8 min-w-8 h-8 mt-1 mr-8 block text-start">
                <MdEmail className="w-12 h-12 text-slate-800" />
              </div>
              <div className="block">
                <div className="font-sans font-bold text-xl mb-2 text-slate-800">
                  이메일
                </div>
                <div className="font-sans font-normal text-gray-700">
                  geakura123@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 w-[33%]">
            <div className="flex flex-row flex-nowrap my-0 mx-auto  max-w-56  w-[100%]">
              <div className="w-8 min-w-8 h-8 mt-1 mr-8 block text-start">
                <BsPencilFill className="w-12 h-12 text-slate-800" />
              </div>
              <div className="block">
                <div className="font-sans font-bold text-xl mb-2 text-slate-800">
                  학력
                </div>
                <div className="font-sans font-normal text-gray-700">
                  부산대학교 <br /> (무역학부)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-500 w-full flex flex-col justify-center items-center">
        <div
          id="skillsContainer"
          className="flex flex-col justify-center items-center m-10"
        >
          <span className="font-tenada text-[50px] mb-8">SKILLS</span>
          <div className="flex flex-wrap flex-col justify-around max-w-6xl h-content">
            <div
              id="stackContainerFrontend"
              className="flex flex-col w-64 bg-white rounded-lg shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 mb-8 mx-12 p-6"
            >
              <div className="w-full h-full font-noto-sans text-2xl text-green-800 pb-2 mb-6 border-b border-slate-200">
                Frontend
              </div>
              <img
                src="./assets/images/frontendStack.png"
                className="w-[256px] h-24"
              />
            </div>
            <div
              id="stackContainerBackend"
              className="w-64 bg-white rounded-lg shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 mb-8 mx-12 p-6"
            >
              <div className="w-full h-full font-noto-sans text-2xl text-green-800 pb-2 mb-6 border-b border-slate-200">
                Frontend
              </div>
            </div>
            <div className="w-64  bg-white rounded-lg shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 mb-8 mx-12 p-6">
              <div className="w-full h-full font-noto-sans text-2xl text-green-800 pb-2 mb-6 border-b border-slate-200">
                Frontend
              </div>
            </div>
            <div className="w-64  bg-white rounded-lg shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 mb-8 mx-12 p-6">
              <div className="w-full h-full font-noto-sans text-2xl text-green-800 pb-2 mb-6 border-b border-slate-200">
                Frontend
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
