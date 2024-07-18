
import React from "react";
import "./global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdPeopleAlt } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import BackEndStack from './assets/images/backendStack.svg'
import FrontEndStack from'./assets/images/frontendStack.png'
import DeployStack from './assets/images/deploy.jpg'
import CommunicationDevtools from './assets/images/communicationDevtools.jpg'
import Certificate  from "./assets/images/qnet.jpg";
import VersionControl from "./assets/images/versionControl.jpg"
import Github from './assets/images/githublongwidth.png'
import Box from "components/Box";
import SuggestionAndPopular1 from './assets/images/SuggestionPopularFirst.jpg'
import SuggestionAndPopular2 from './assets/images/suggestionPopular.jpg'
import FindPassword from './assets/images/loginFindPassword.jpg'
import SignUp from './assets/images/signup.jpg'
import Login from './assets/images/loginFindPassword.jpg'
import Chatting from './assets/images/chatting.jpg'
import Chatting2 from './assets/images/chatting2.jpg'
import myPage from './assets/images/myPage.jpg'
import myPage2 from './assets/images/myPage2.jpg'
import { FaCheck } from "react-icons/fa";
import nostandingLogin from './assets/images/nostandingLogin.gif'
import nostandingMainpage from './assets/images/nostandingMainpage.gif'
import nostandingOwnder from './assets/images/nostandingOwner.gif'
import nostandingUser from './assets/images/nostandingUser.gif'
import codestates from './assets/images/codestats.png'
import programmers from './assets/images/programmers.png'


const imgSrcArr = [[SignUp, "회원가입"], [Login, "로그인(유효성검사), 비밀번호 찾기"],[SuggestionAndPopular1 , "일기 작성 & 일기 정렬 & 일기 내용,태그 수정"],[SuggestionAndPopular2,"추천일기와 인기일기열람"],
[Chatting, "매칭이후 채팅"],[Chatting2, "상대프로필 사진 클릭시 상대의 일기 확인 가능"],[myPage, "마이페이지 & 프로필 수정"],[myPage2, "내 선호도 수정"],[FindPassword,"비밀번호 찾기"]
]

const imgSrcArr2 = [[nostandingLogin , "Oauth 로그인"], [nostandingMainpage, "메인페이지"],[nostandingOwnder , "점주 회원가입 및 작동 시현"],[ nostandingUser,"유저 회원가입 및 작동시현"]]


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
        <div className="flex flex-wrap justify-between my-12">
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
                <div className="font-noto-sans text-lg mb-4 text-blue-600 hover:underline hover:underline-offset-1">https://github.com/UupDownPark?tab=repositories</div>
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
      <div className="bg-gray-800 w-full flex flex-col justify-center items-center">
        <span className="font-tenada text-[50px] mb-8 mt-16 border-b-4 border-black">PROJECTS</span>
        <div id="skillsContainer" className="max-w-8xl py-16 px-8 content-around flex flex-col flex-wrap h-2/4">
              <div id="stackContainerFrontend" className="h-fit bg-white rounded-2xl shadow-2xl mb-8 mx-12 p-12 ">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-noto-sans font-black text-black text-4xl mb-6">Yeonda</h1>
                  <div className="font-noto-sans text-gray-300 mb-2">2024.04 ~ 2024.05 (6인 프로젝트)</div>
                </div>
                <div className="flex flex-rows mt-6">
                  <Box className="w-[1200px] h-auto" imgSrc={imgSrcArr}/>
                  <div className="flex flex-col">
                    <div className="m-6 max-w-xl min-w-80 border-b-[1px] mb-2">
                          <b>사진과 성향으로 매칭하는 기존 소개팅 어플과 달리 유저가 쓴 일기만 보고 서로 매칭을 해주는 일기 매칭 어플 시스템입니다. </b>
                          외모보다는 사람의 성향이나 취향을 위주로 매칭해주기 위해서 만든
                          <span className="text-red-600 font-bold"> 이색 매칭 어플</span>입니다.
                          <div className="h-5"></div>
                          평소 공부하던
                          <span className="text-red-600 font-bold"> TypeScript</span>
                          를 이용하여 공용컴포넌트를 구현하였고 동료들이 자유롭게 컴포넌트를 활용하기 위해서 기존의 태그 Props를 확장하여 커스텀 공용 컴포넌트를 만들었습니다.
                          <br />
                          그 외에 마이페이지, 개인정보 수정, 선호도 수정, 회원탈퇴, 로그아웃 ,일기 태그 수정 등을 구현하였습니다.
                          <div className="h-5"></div>
                          <span className="text-red-600 font-bold">
                            Zustand</span>를 처음으로 익히면서 Redux와의 차이를 알 수 있었습니다. 그 외에 마이페이지와 주소지 API와 MUI를 이용하여 프로필 수정페이지도 구현하였습니다.
                            <div className="h-5"></div>
                            <a href="https://github.com/UupDownPark/Yeonda">
                              <button className="mb-4 p-3 rounded-md bg-gray-800 hover:bg-gray-600 text-white font-noto-sans">자세히 보기 ▶ README</button>
                            </a>
                          
                      </div >
                      <div className="m-6 max-w-xl">
                        <div className="flex flex-col">
                          <div className="flex flex-row space-x-3 items-start m-2">
                            <div className="flex flex-row text-nowrap space-x-2 items-center">
                              <FaCheck/>
                              <div className="font-noto-sans font-bold w-28">주요 기능</div>
                            </div>
                            <div>추천일기 좋아요와 싫어요 이후 서로 매칭시 채팅기능 제공, 본인이 원하는 취향 선정가능</div>
                          </div>
                          <div className="flex flex-row space-x-3 m-2 items-start">
                            <div className="flex flex-row text-nowrap space-x-2 items-center">
                              <FaCheck/>
                              <div className="font-noto-sans font-bold w-28">GitHub</div>
                            </div>
                            <a className="text-blue-600 hover:underline-offset-1 hover:underline" href="https://github.com/UupDownPark/Yeonda">https://github.com/UupDownPark/Yeonda</a>
                          </div>
                          <div className="flex flex-row space-x-3 m-2 items-start">
                            <div className="flex flex-row text-nowrap space-x-2 items-center">
                              <FaCheck/>
                              <div className="font-noto-sans font-bold w-28">Frontend</div>
                            </div>
                            <div>TypeScript, React, Zustand, Tailwind CSS, Axios, Tanstack Query, Socket.io, React Hook Form, Vite</div>
                          </div>
                          <div className="flex flex-row space-x-3 m-2 items-start">
                            <div className="flex flex-row text-nowrap space-x-2 items-center">
                              <FaCheck/>
                              <div className="font-noto-sans font-bold w-28">Backend</div>
                            </div>
                            <div>Express, Socket.io, OpenAI, JWT, NodeMailer, Joi, aws-sdk/client-s3, multer</div>
                          </div>
                          <div className="flex flex-row space-x-3 m-2 items-start">
                            <div className="flex flex-row text-nowrap space-x-2 items-center">
                              <FaCheck/>
                              <div className="font-noto-sans font-bold w-28">Database</div>
                            </div>
                            <div>Mysql</div>
                          </div>
                        </div>
                      </div>
                  </div>
                   
                 
                </div>
              
              </div>
        </div>
        <div id="skillsContainer" className="max-w-8xl py-16 px-8 content-around flex flex-col flex-wrap h-2/4">
              <div id="stackContainerFrontend" className="h-fit bg-white rounded-2xl shadow-2xl mb-8 mx-12 p-12 ">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-noto-sans font-black text-black text-4xl mb-6">NoStanding</h1>
                  <div className="font-noto-sans text-gray-300 mb-2">2022.05 ~ 2022.06 (4인 프로젝트)</div>
                </div>
                <div className="flex flex-rows mt-6">
                  <Box className="w-[1200px] h-auto" imgSrc={imgSrcArr2}/>
                  <div className="flex flex-col">
                    <div className="m-6 max-w-xl min-w-80 border-b-[1px] mb-2">
                          <b>사용자가 여러 방면의 가게를 서비스 하나로 모두 예약 할 수 있고 점주는 예약을 받을 수 있는</b>
                          <span className="text-red-600 font-bold"> 종합 예약 서비스</span>입니다.
                          <div className="h-5"></div>
                          코드스테이츠에서 배운
                          <span className="text-red-600 font-bold"> Javascript, React, Node.js, AWS</span>
                          를 이용하여 프로젝트를 진행하였고 Wireframe, flowchart, Api Docs, DB Schema 도 함께 작성하면서
                          개발의 일련의 과정이 어떻게 진행되는지를 배우게 되었습니다.
                          <br />
                          <div className="h-5"></div>
                          <span className="text-red-600 font-bold">
                            Redux, Redux-toolkit, Slick-slider, Axios, daum-postcode</span> 등 여러 라이브러리를 활용해보면서 적재적소에 라이브러리를 잘 활용하는 것이 중요하다는 것을 배웠습니다.
                            <div className="h-5"></div>
                            라우팅 구성 및 중첩 라우팅 구성, React-Redux를 통한 State 관리, react-slick 이용한 메인페이지 자동 슬라이드 구현 및 디자인, 매장 상세 페이지 매장 위치 기반 카카오 지도, 마이페이지 (점주회원), 로그인/로그아웃/회원정보 수정/회원탈퇴 등을 구현
                            <div className="h-5"></div>
                            <a href="https://github.com/UupDownPark/NoStanding">
                              <button className="mb-4 p-3 rounded-md bg-gray-800 hover:bg-gray-600 text-white font-noto-sans" >자세히 보기 ▶ README</button>
                            </a>
                          
                      </div >
                      <div className="m-6 max-w-xl">
                        <div className="flex flex-col">
                          <div className="flex flex-row space-x-3 items-start m-2">
                            <div className="flex flex-row text-nowrap space-x-2 items-center">
                              <FaCheck/>
                              <div className="font-noto-sans font-bold w-28">주요 기능</div>
                            </div>
                            <div>사용자는 가게목록 조회와 예약, 점주는 가게의 정보와 예약 내역등을 확인 가능</div>
                          </div>

                          <div className="flex flex-row space-x-3 m-2 items-start">
                            <div className="flex flex-row text-nowrap space-x-2 items-center">
                              <FaCheck/>
                              <div className="font-noto-sans font-bold w-28">Frontend</div>
                            </div>
                            <div>JavaScript, React, Redux, Redux Toolkit, Axios, React Router, Styled Component</div>
                          </div>
                          <div className="flex flex-row space-x-3 m-2 items-start">
                            <div className="flex flex-row text-nowrap space-x-2 items-center">
                              <FaCheck/>
                              <div className="font-noto-sans font-bold w-28">Backend</div>
                            </div>
                            <div>Express, Sequelize, Node.js, JWT</div>
                          </div>
                          <div className="flex flex-row space-x-3 m-2 items-start">
                            <div className="flex flex-row text-nowrap space-x-2 items-center">
                              <FaCheck/>
                              <div className="font-noto-sans font-bold w-28">Database</div>
                            </div>
                            <div>Mysql</div>
                          </div>
                          <div className="flex flex-row space-x-3 m-2 items-start">
                            <div className="flex flex-row text-nowrap space-x-2 items-center">
                              <FaCheck/>
                              <div className="font-noto-sans font-bold w-28">Deploy</div>
                            </div>
                            <div>S3, CloudFront, EC2, RDS, Loadbalancer, Route53</div>
                          </div>
                        </div>
                      </div>
                  </div>
                   
                 
                </div>
              
              </div>
        </div>
      </div> 
      <div className="bg-gray-200 w-full flex flex-col justify-center items-center">
        <span className="font-tenada text-[50px] mb-8 mt-16 border-b-4 border-black">EDUCATION</span>
        <div className="flex flex-row max-w-6xl mb-24">
          <div>
           <img src={programmers} className="w-[15rem] h-[15rem] rounded-full border mr-24 border-gray-400" alt="" />
          </div>
          <div className="flex flex-col border border-l-gray-400 p-12">
            <div className="font-noto-sans font-bold text-2xl mb-2">프로그래머스</div>
            <div className="font-noto-sans text-sm text-gray-500">2023.11 - 2024.05</div>
            <div className="font-noto-sans text-sm text-gray-500">타입스크립트로 함께하는 웹 풀 사이클 개발(React, Node.js) (1기)</div>
            <ul className="list-disc p-6 space-y-2">
              <li className="font-noto-sans" >TypeScript 기반 Full stack 과정(React, Node.js, AWS 등)</li>
              <li className="font-noto-sans">프론트엔드(React, TypeScript)</li>
              <li className="font-noto-sans">프론트엔드 심화(상태 관리와 비동기 처리)</li>
              <li className="font-noto-sans">백엔드 기초(Node.js, Express)</li>
              <li className="font-noto-sans">백엔드 심화(인증과 비동기 처리)</li>
              <li className="font-noto-sans">웹 개발 파이프라인 구축(Jenkins, k8s)</li>
              <li className="font-noto-sans">실무에 쓰이는 CS 지식 기초</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row max-w-6xl">
          <div>
           <img src={codestates} className="w-[15rem] h-[15rem] rounded-full border border-gray-400 mr-24" alt="" />
          </div>
          <div className="flex flex-col border border-l-gray-400 p-12">
            <div className="font-noto-sans font-bold text-2xl mb-2">코드스테이츠</div>
            <div className="font-noto-sans text-sm text-gray-500">2021.12 - 2022.06</div>
            <div className="font-noto-sans text-sm text-gray-500">Advanced software engineering, Immersive program (38기)</div>
            <ul className="list-disc p-6 space-y-2">
              <li className="font-noto-sans">20주 동안 매일 알고리즘 문제 풀이</li>
              <li className="font-noto-sans" >Javascript 기반 Full stack 과정(React, Node.js, AWS 등)</li>
              <li className="font-noto-sans">git workflow</li>
              <li className="font-noto-sans">자료구조/알고리즘</li>
              <li className="font-noto-sans">2인 페어 프로그래밍 /4인 스터디 진행</li>
              <li className="font-noto-sans">First project , Final project 진행</li>
              <li className="font-noto-sans">HTTP/네트워크 기초 및 비동기 처리 학습</li>
              <li className="font-noto-sans">HTML/CSS , Styled-component 학습</li>
            </ul>
          </div>
        </div>
      </div>   
      </div>
  
  );
}

export default App;
 