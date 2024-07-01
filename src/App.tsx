
import React from "react";
import "./global.css";
import { MdPeopleAlt } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import BackEndStack from './assets/images/backendStack.svg'
import FrontEndStack from'./assets/images/frontendStack.jpg'
import DeployStack from './assets/images/deploy.jpg'
import CommunicationDevtools from './assets/images/communicationDevtools.jpg'
import Certificate  from "./assets/images/qnet.jpg";
import VersionControl from "./assets/images/versionControl.jpg"
import Github from './assets/images/githublongwidth.png'

function App() {
  return (
    <div className="flex flex-col justify-center items-center" >
      <div id="introduceContainer" className="h-[500px] w-screen bg-cover bg-developer">
        <div className="flex flex-col justify-center items-center my-28 mx-14">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="font-noto-sans font-black text-[50px] text-white">박상하 <br /> 프론트 엔드 개발자 포트폴리오 </h1>
            <hr className="w-24 h-0 border-t-[0.3rem] border-cyan-500 mx-auto my-6 opacity-100"/>
            <div className="font-noto-sans text-xl text-gray-100">안녕하세요. <br /> 화합하고 생각하는 프론트 엔드 개발자, 박상하입니다.</div>
          </div>
        </div>
      </div>
      <div id="aboutMeContainer" className="flex flex-col justify-center items-center m-10 max-w-6xl">
        <span className="font-tenada text-[50px] mb-8 border-b-4 border-black">ABOUT ME</span>
        <div className="flex flex-wrap justify-between">
          <div className="mb-8 w-[33%]">   
            <div className="flex flex-row flex-nowrap my-0 mx-auto  max-w-56  w-[100%]">
              <div className="w-8 min-w-8 h-8 mt-1 mr-8 block text-start">
              <MdPeopleAlt className="w-12 h-12 text-slate-800"/>
              </div>
              <div className="block"> 
                <div className="font-sans font-bold text-xl mb-2 text-slate-800">이름</div>
                <div className="font-sans font-normal text-gray-700">박상하</div>
              </div>
            </div>
          </div>
          <div className="mb-8 w-[33%]">   
            <div className="flex flex-row flex-nowrap my-0 mx-auto  max-w-56  w-[100%]">
              <div className="w-8 min-w-8 h-8 mt-1 mr-8 block text-start">
              <FaCalendar className="w-12 h-12 text-slate-800"/>
              </div>
              <div className="block"> 
                <div className="font-sans font-bold text-xl mb-2 text-slate-800">생년월일</div>
                <div className="font-sans font-normal text-gray-700">95.06.01</div>
              </div>
            </div>
          </div>
          <div className="mb-8 w-[33%]">   
            <div className="flex flex-row flex-nowrap my-0 mx-auto  max-w-56  w-[100%]">
              <div className="w-8 min-w-8 h-8 mt-1 mr-8 block text-start">
              <FaLocationDot className="w-12 h-12 text-slate-800"/>
              </div>
              <div className="block"> 
                <div className="font-sans font-bold text-xl mb-2 text-slate-800">주소지</div>
                <div className="font-sans font-normal text-gray-700">대구광역시 동구</div>
              </div>
            </div>
          </div>
          <div className="mb-8 w-[33%]">   
            <div className="flex flex-row flex-nowrap my-0 mx-auto  max-w-56  w-[100%]">
              <div className="w-8 min-w-8 h-8 mt-1 mr-8 block text-start">
              <IoCall  className="w-12 h-12 text-slate-800"/>
              </div>
              <div className="block"> 
                <div className="font-sans font-bold text-xl mb-2 text-slate-800">연락처</div>
                <div className="font-sans font-normal text-gray-700">010-5178-7098</div>
              </div>
            </div>
          </div>
          <div className="mb-8 w-[33%]">   
            <div className="flex flex-row flex-nowrap my-0 mx-auto  max-w-56  w-[100%]">
              <div className="w-8 min-w-8 h-8 mt-1 mr-8 block text-start">
              <MdEmail className="w-12 h-12 text-slate-800"/>
              </div>
              <div className="block"> 
                <div className="font-sans font-bold text-xl mb-2 text-slate-800">이메일</div>
                <div className="font-sans font-normal text-gray-700">geakura123@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="mb-8 w-[33%]">   
            <div className="flex flex-row flex-nowrap my-0 mx-auto  max-w-56  w-[100%]">
              <div className="w-8 min-w-8 h-8 mt-1 mr-8 block text-start">
              <BsPencilFill className="w-12 h-12 text-slate-800"/>
              </div>
              <div className="block"> 
                <div className="font-sans font-bold text-xl mb-2 text-slate-800">학력</div>
                <div className="font-sans font-normal text-gray-700">부산대학교 <br /> (무역학부)</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="bg-green-500 w-full flex flex-col justify-center items-center">
        <span className="font-tenada text-[50px] mb-8 mt-16 border-b-4 border-black">SKILLS</span>
        <div id="skillsContainer" className="max-w-7xl py-16 content-around flex flex-col flex-wrap h-screen">
    
              <div id="stackContainerFrontend" className="w-72 h-fit bg-white rounded-2xl shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 mb-8 mx-3 p-6">
                <div className="font-noto-sans text-2xl text-green-800 pb-2 mb-6 border-b border-slate-200">Frontend</div>
                <img src={FrontEndStack}  />
              </div>
              <div id="stackContainerBackend" className="w-72 h-fit bg-white rounded-2xl shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 mb-8 mx-3 p-6">
                <div className="font-noto-sans text-2xl text-green-800 pb-2 mb-6 border-b border-slate-200">Backend</div>
                <img src={BackEndStack}  />
              </div>
              <div  className="w-72 h-fit  bg-white rounded-2xl shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 mb-8 mx-3 p-6">
                <div className="font-noto-sans text-2xl text-green-800 pb-2 mb-6 border-b border-slate-200">Deploy</div>
                <img src={DeployStack}  />
              </div>
              <div  className="w-72 h-fit  bg-white rounded-2xl shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 mb-8 mx-3 p-6">
                <div className="font-noto-sans text-2xl text-green-800 pb-2 mb-6 border-b border-slate-200">Communication <br /> & Dev tools</div>
                <img src={CommunicationDevtools}  />
              </div>
              <div  className="w-72 h-fit bg-white rounded-2xl shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 mb-8 mx-3 p-6">
                <div className="font-noto-sans text-2xl text-green-800 pb-2 mb-6 border-b border-slate-200">Certificate</div>
                <img src={Certificate}  />
                <span className="font-bold font-tenada">정보처리기사(필기+실기)</span>
              </div>
              <div  className="w-72 h-fit  bg-white rounded-2xl shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 mb-8 mx-3 p-6">
                <div className="font-noto-sans text-2xl text-green-800 pb-2 mb-6 border-b border-slate-200">Version Control</div>
                <img src={VersionControl}  />
              </div>
            
             
         
        </div>
      </div>
      <div className="bg-yellow-500 w-full flex flex-col justify-center items-center">
        <span className="font-tenada text-[50px] mb-8 mt-16 border-b-4 border-black">ARCHIVING</span>
        <div id="skillsContainer" className="max-w-6xl py-16 px-8 content-around flex flex-col flex-wrap h-2/4">
              <div id="stackContainerFrontend" className="h-fit bg-white rounded-2xl shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 mb-8 mx-12 p-12">
                <img src={Github}  />
                <a href="https://github.com/UupDownPark?tab=repositories">
                <div className="font-noto-sans text-lg mb-4">https://github.com/UupDownPark?tab=repositories</div>
                <div>
                  <p className="font-noto-sans text-lg mb-4"> <b>소스 코드 저장소</b> 입니다.</p>
                  <li className="font-noto-sans text-lg"> 교육프로그램에서 진행한 프로젝트의 소스코드 </li>
                  <li className="font-noto-sans text-lg"> 교육프로그램에서 진행한 클론코딩의 소스코드</li>
                  <li className="font-noto-sans text-lg"> 코딩 연습을 위해 실습해본 소스 코드 </li>
                </div>
                </a>
              </div>
             
         
        </div>
      </div>
        
      </div>
  
  );
}

export default App;
 