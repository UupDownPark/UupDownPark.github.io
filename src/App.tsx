import React from "react";
import "./global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "components/About";
import Skills from "components/Skills";
import Achiving from "components/Achiving";
import Project from "components/Project";
import Education from "components/Education";
import Career from "components/Career";
import Nav from "components/Nav";

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
              안녕하세요. <br /> 팀원과 융화를 잘하고 화기애애한 분위기를 잘
              이끌어가는 개발자 박상하입니다.
              <br /> 문제가 주어지면 어려운 문제라도 반드시 끝까지 해낼 자신이
              있습니다.
              <br /> 고민하는 것을 즐기는 편이며, 오랜 고민 끝에 풀어내는 문제를
              좋아합니다.
            </div>
          </div>
        </div>
      </div>
      <Nav />
      <About />
      <Skills />
      <Achiving />
      <Project />
      <Education />
      <Career />
    </div>
  );
}

export default App;
