import React from "react";
import Github from "../assets/images/githublongwidth.png";

const Achiving = () => {
  return (
    <section
      id="archiving"
      className="bg-yellow-500 w-full flex flex-col justify-around items-center h-[100vh]"
    >
      <span className="font-tenada mt-16 text-[50px] border-b-4 border-black">
        ARCHIVING
      </span>
        <div
          id="stackContainerFrontend"
          className="h-1/2 w-1/3 flex flex-col items-center justify-center bg-white rounded-2xl shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 mb-8 mx-12 p-8"
        >
          <img src={Github} className="h-1/2 w-3/4" />
          <a href="https://github.com/UupDownPark?tab=repositories">
            <div className="font-noto-sans text-lg mb-4 text-blue-600 hover:underline hover:underline-offset-1">
              https://github.com/UupDownPark?tab=repositories
            </div>
            <div>
              <p className="font-noto-sans text-lg mb-4">
                {" "}
                <b>소스 코드 저장소</b> 입니다.
              </p>
              <li className="font-noto-sans text-lg">
                {" "}
                교육프로그램에서 진행한 프로젝트의 소스코드{" "}
              </li>
              <li className="font-noto-sans text-lg">
                {" "}
                교육프로그램에서 진행한 클론코딩의 소스코드
              </li>
              <li className="font-noto-sans text-lg">
                {" "}
                코딩 연습을 위해 실습해본 소스 코드{" "}
              </li>
            </div>
          </a>
        </div>
    </section>
  );
};

export default Achiving;
