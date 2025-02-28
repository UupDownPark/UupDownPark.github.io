import React from "react";
import BackEndStack from "../assets/images/backendStack.png";
import FrontEndStack from "../assets/images/frontendStack.png";
import DeployStack from "../assets/images/deploy.jpg";
import CommunicationDevtools from "../assets/images/communicationDevtools.jpg";
import Certificate from "../assets/images/qnet.jpg";
import VersionControl from "../assets/images/versionControl.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-green-500 w-full flex flex-col justify-center items-center h-content min-h-[100vh]"
    >
      <span className="font-tenada text-[50px] mb-8 mt-16 border-b-4 border-black">
        SKILLS
      </span>
      <div
        id="skillsContainer"
        className="max-w-6xl flex flex-col flex-wrap h-content w-full xl:h-[170vh] 2xl:h-[150vh]"
      >
        <div
          id="stackContainerFrontend"
          className="w-[18vw] bg-white rounded-2xl shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 mb-8 mx-3 p-6"
        >
          <div className="font-noto-sans text-2xl text-green-800 pb-2 mb-6 border-b border-slate-200">
            Frontend
          </div>
          <img src={FrontEndStack} />
        </div>
        <div
          id="stackContainerBackend"
          className="w-[18vw] bg-white rounded-2xl shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 mb-8 mx-3 p-6"
        >
          <div className="font-noto-sans text-2xl text-green-800 pb-2 mb-6 border-b border-slate-200">
            Backend
          </div>
          <img src={BackEndStack} />
        </div>

        <div className="w-[18vw] bg-white rounded-2xl shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 mb-8 mx-3 p-6">
          <div className="font-noto-sans text-2xl text-green-800 pb-2 mb-6 border-b border-slate-200">
            Communication <br /> & Dev tools
          </div>
          <img src={CommunicationDevtools} />
        </div>
        <div className="w-[18vw] bg-white rounded-2xl shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 mb-8 mx-3 p-6">
          <div className="font-noto-sans text-2xl text-green-800 pb-2 mb-6 border-b border-slate-200">
            Certificate
          </div>
          <img src={Certificate} />
          <span className="font-bold font-tenada">정보처리기사(필기+실기)</span>
        </div>
        <div className="w-[18vw] bg-white rounded-2xl shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 mb-8 mx-3 p-6">
          <div className="font-noto-sans text-2xl text-green-800 pb-2 mb-6 border-b border-slate-200">
            Version Control
          </div>
          <img src={VersionControl} />
        </div>
        <div className="w-[18vw] bg-white rounded-2xl shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 mb-8 mx-3 p-6">
          <div className="font-noto-sans text-2xl text-green-800 pb-2 mb-6 border-b border-slate-200">
            Deploy
          </div>
          <img src={DeployStack} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
