import React from "react";
import Box from "components/Box";
import { FaCheck } from "react-icons/fa";
import SuggestionAndPopular1 from "../assets/images/SuggestionPopularFirst.jpg";
import SuggestionAndPopular2 from "../assets/images/suggestionPopular.jpg";
import FindPassword from "../assets/images/loginFindPassword.jpg";
import SignUp from "../assets/images/signup.jpg";
import Login from "../assets/images/loginFindPassword.jpg";
import Chatting from "../assets/images/chatting.jpg";
import Chatting2 from "../assets/images/chatting2.jpg";
import myPage from "../assets/images/myPage.jpg";
import myPage2 from "../assets/images/myPage2.jpg";
import nostandingLogin from "../assets/images/nostandingLogin.gif";
import nostandingMainpage from "../assets/images/nostandingMainpage.gif";
import nostandingOwnder from "../assets/images/nostandingOwner.gif";
import nostandingUser from "../assets/images/nostandingUser.gif";
import nostandingStructure from "../assets/images/nostandingStructure.png";
const imgSrcArr = [
  [SignUp, "회원가입"],
  [Login, "로그인(유효성검사), 비밀번호 찾기"],
  [SuggestionAndPopular1, "일기 작성 & 일기 정렬 & 일기 내용,태그 수정"],
  [SuggestionAndPopular2, "추천일기와 인기일기열람"],
  [Chatting, "매칭이후 채팅"],
  [Chatting2, "상대프로필 사진 클릭시 상대의 일기 확인 가능"],
  [myPage, "마이페이지 & 프로필 수정"],
  [myPage2, "내 선호도 수정"],
  [FindPassword, "비밀번호 찾기"],
];

const imgSrcArr2 = [
  [nostandingStructure, "Nostanding 구조"],
  [nostandingLogin, "Oauth 로그인"],
  [nostandingMainpage, "메인페이지"],
  [nostandingOwnder, "점주 회원가입 및 작동 시현"],
  [nostandingUser, "유저 회원가입 및 작동시현"],
];

const Project = () => {
  return (
    <section
      id="project"
      className="bg-gray-800 w-full flex flex-col justify-center items-center"
    >
      <span className="font-tenada text-[50px] mb-8 mt-16 border-b-4 border-black">
        PROJECTS
      </span>
      <div
        id="projectContainer"
        className="max-w-8xl min-w-6xl py-16 px-8 content-around flex flex-col flex-wrap h-content"
      >
        <div
          id="stackContainerFrontend"
          className="h-fit bg-white rounded-2xl shadow-2xl mb-8 mx-12 p-12 "
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-noto-sans font-black text-black text-4xl mb-6">
              Yeonda
            </h1>
            <div className="font-noto-sans text-gray-300 mb-2">
              2024.04 ~ 2024.05 (6인 프로젝트)
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <Box className="w-[80vw] 2xl:w-[50vw] h-auto" imgSrc={imgSrcArr} />
            <div className="flex flex-col justify-center items-center">
              <div className="m-6 max-w-2xl min-w-80 border-b-[1px] mb-2">
                <b>
                  사진과 성향으로 매칭하는 기존 소개팅 어플과 달리 유저가 쓴
                  일기만 보고 서로 매칭을 해주는 일기 매칭 어플 시스템입니다.{" "}
                </b>
                외모보다는 사람의 성향이나 취향을 위주로 매칭해주기 위해서 만든
                <span className="text-red-600 font-bold"> 이색 매칭 어플</span>
                입니다.
                <div className="h-5"></div>
                평소 공부하던
                <span className="text-red-600 font-bold"> TypeScript</span>를
                이용하여 공용컴포넌트를 구현하였고 동료들이 자유롭게 컴포넌트를
                활용하기 위해서 기존의 HTML 태그 Props를 확장하여 커스텀 공용
                컴포넌트를 만들었습니다. 팀원 모두가 재사용하고 커스텀하기
                용이하기 위한 공용 컴포넌트를 고민하게 되면서 공용으로 사용하는
                컴포넌트들을 어떻게 설계해야되는지 알게되었습니다.
                <div className="h-5"></div>
                <br />
                <div>
                  <span className="text-red-600 font-bold">마이페이지</span> -
                  본인이 설정한 프로필사진과 개인정보를 표시합니다.
                  <span className="text-red-600 font-bold">Zustand</span>를
                  통해서 받아온 전역상태를 토대로 렌더링합니다.
                </div>
                <div className="h-5"></div>
                <div>
                  <span className="text-red-600 font-bold">개인정보 수정</span>{" "}
                  - 프로필 사진 등록과 삭제, 주소지 api를 통한 주소지 설정
                </div>
                <div className="h-5"></div>
                <div>
                  <span className="text-red-600 font-bold">선호도 수정</span> -
                  상대 성별, 상대와의 거리 , 선호나이, 관심사 태그는 최대
                  5개까지 선택가능하게 구현하였습니다. Material UI 라이브러리를
                  이용하여 Range Slider 구현하였습니다. 완료 버튼 클릭시
                  전역상태의 state 갱신
                </div>
                <div className="h-5"></div>
                <div>
                  <span className="text-red-600 font-bold">회원 탈퇴</span> -
                  백단에서 만들어준 회원탈퇴 api를 포스트맨으로 작동여부 확인 후
                  기능 구현하였습니다.
                </div>
                <div className="h-5"></div>
                <div>
                  <span className="text-red-600 font-bold">로그아웃</span> -
                  zustand 의 useAuthStore 함수를 통해 로그아웃 구현
                </div>
                <div className="h-5"></div>
                <div>
                  <span className="text-red-600 font-bold">일기 태그 수정</span>{" "}
                  - 일기 쓰기, 수정쪽을 담당하는 팀원을 도와 일기에 자동
                  태깅되는 태그를 수정할 수 있는 기능을 구현했습니다.
                </div>
                <div className="h-5"></div>
                <a href="https://github.com/UupDownPark/Yeonda">
                  <button className="mb-4 p-3 rounded-md bg-gray-800 hover:bg-gray-600 text-white font-noto-sans">
                    자세히 보기 ▶ README
                  </button>
                </a>
              </div>
              <div className="m-6 max-w-xl">
                <div className="flex flex-col">
                  <div className="flex flex-row space-x-3 items-start m-2">
                    <div className="flex flex-row text-nowrap space-x-2 items-center">
                      <FaCheck />
                      <div className="font-noto-sans font-bold w-28">
                        주요 기능
                      </div>
                    </div>
                    <div>
                      추천일기 좋아요와 싫어요 이후 서로 매칭시 채팅기능 제공,
                      본인이 원하는 취향 선정가능
                    </div>
                  </div>
                  <div className="flex flex-row space-x-3 m-2 items-start">
                    <div className="flex flex-row text-nowrap space-x-2 items-center">
                      <FaCheck />
                      <div className="font-noto-sans font-bold w-28">
                        GitHub
                      </div>
                    </div>
                    <a
                      className="text-blue-600 hover:underline-offset-1 hover:underline"
                      href="https://github.com/UupDownPark/Yeonda"
                    >
                      https://github.com/UupDownPark/Yeonda
                    </a>
                  </div>
                  <div className="flex flex-row space-x-3 m-2 items-start">
                    <div className="flex flex-row text-nowrap space-x-2 items-center">
                      <FaCheck />
                      <div className="font-noto-sans font-bold w-28">
                        Frontend
                      </div>
                    </div>
                    <div>
                      TypeScript, React, Zustand, Tailwind CSS, Axios, Tanstack
                      Query, Socket.io, React Hook Form, Vite
                    </div>
                  </div>
                  <div className="flex flex-row space-x-3 m-2 items-start">
                    <div className="flex flex-row text-nowrap space-x-2 items-center">
                      <FaCheck />
                      <div className="font-noto-sans font-bold w-28">
                        Backend
                      </div>
                    </div>
                    <div>
                      Express, Socket.io, OpenAI, JWT, NodeMailer, Joi,
                      aws-sdk/client-s3, multer
                    </div>
                  </div>
                  <div className="flex flex-row space-x-3 m-2 items-start">
                    <div className="flex flex-row text-nowrap space-x-2 items-center">
                      <FaCheck />
                      <div className="font-noto-sans font-bold w-28">
                        Database
                      </div>
                    </div>
                    <div>Mysql</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="projectContainer"
        className="max-w-8xl min-w-6xl py-16 px-8 content-around flex flex-col flex-wrap h-2/4"
      >
        <div
          id="stackContainerFrontend"
          className="h-fit bg-white rounded-2xl shadow-2xl mb-8 mx-12 p-12 "
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-noto-sans font-black text-black text-4xl mb-6">
              NoStanding
            </h1>
            <div className="font-noto-sans text-gray-300 mb-2">
              2022.05 ~ 2022.06 (4인 프로젝트)
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <Box className="w-[80vw] 2xl:w-[50vw] h-auto" imgSrc={imgSrcArr2} />
            <div className="flex flex-col justify-center items-center">
              <div className="m-6 max-w-2xl min-w-80 border-b-[1px] mb-2">
                <b>
                  사용자가 여러 방면의 가게를 서비스 하나로 모두 예약 할 수 있고
                  점주는 예약을 받을 수 있는
                </b>
                <span className="text-red-600 font-bold">
                  {" "}
                  종합 예약 서비스
                </span>
                입니다.
                <div className="h-5"></div>
                코드스테이츠에서 배운
                <span className="text-red-600 font-bold">
                  {" "}
                  Javascript, React, Node.js, AWS
                </span>
                를 이용하여 프로젝트를 진행하였고 Wireframe, flowchart, Api
                Docs, DB Schema 도 함께 작성하면서 개발의 일련의 과정이 어떻게
                진행되는지를 배우게 되었습니다.
                <br />
                <div className="h-5"></div>
                <span className="text-red-600 font-bold">
                  Redux, Redux-toolkit, Slick-slider, Axios, daum-postcode
                </span>{" "}
                등 여러 라이브러리를 활용해보면서 적재적소에 라이브러리를 잘
                활용하는 것이 중요하다는 것을 배웠습니다.
                <div className="h-5"></div>
                <div>
                  <span className="text-red-600 font-bold">
                    라우팅 구성 및 중첩 라우팅 구성
                  </span>{" "}
                  - React-Router-Dom 의 Link 태그를 이용한 페이지 라우팅
                </div>
                <div className="h-5"></div>
                <div>
                  <span className="text-red-600 font-bold">
                    React-Redux toolkit을 통한 State 관리
                  </span>{" "}
                  - 전역 상태 관리, redux-persist를 활용한 로그인 유지 기능 구현
                </div>
                <div className="h-5"></div>
                <div>
                  <span className="text-red-600 font-bold">
                    메인페이지 자동 슬라이드 구현 및 디자인
                  </span>{" "}
                  - react-slick 라이브러리를 이용하여 메인페이지의 배너를 구현
                </div>
                <div className="h-5"></div>
                <div>
                  <span className="text-red-600 font-bold">
                    매장 상세 페이지 매장 위치 기반 카카오 지도
                  </span>{" "}
                  - 카카오 지도 api 를 이용하여서 경도,위도 정보를 토대로 매장
                  위치를 표시함
                </div>
                <div className="h-5"></div>
                <div>
                  <span className="text-red-600 font-bold">
                    마이페이지 (점주회원)
                  </span>{" "}
                  - 점주회원에 해당하는 마이페이지 구현, 정보 변경시에 전역변수
                  변경
                </div>
                <div className="h-5"></div>
                <div>
                  <span className="text-red-600 font-bold">
                    로그인/로그아웃/회원정보 수정/회원탈퇴 등을 구현
                  </span>{" "}
                  - 백엔드단에서 만들어준 api를 postman을 통해 작동 여부
                  확인후에 axios로 위 기능 구현
                </div>
                <div className="h-5"></div>
                <a href="https://github.com/UupDownPark/NoStanding">
                  <button className="mb-4 p-3 rounded-md bg-gray-800 hover:bg-gray-600 text-white font-noto-sans">
                    자세히 보기 ▶ README
                  </button>
                </a>
              </div>
              <div className="m-6 max-w-xl">
                <div className="flex flex-col">
                  <div className="flex flex-row space-x-3 items-start m-2">
                    <div className="flex flex-row text-nowrap space-x-2 items-center">
                      <FaCheck />
                      <div className="font-noto-sans font-bold w-28">
                        주요 기능
                      </div>
                    </div>
                    <div>
                      사용자는 가게목록 조회와 예약, 점주는 가게의 정보와 예약
                      내역등을 확인 가능
                    </div>
                  </div>
                  <div className="flex flex-row space-x-3 m-2 items-start">
                    <div className="flex flex-row text-nowrap space-x-2 items-center">
                      <FaCheck />
                      <div className="font-noto-sans font-bold w-28">
                        Frontend
                      </div>
                    </div>
                    <div>
                      JavaScript, React, Redux, Redux Toolkit, Axios, React
                      Router, Styled Component
                    </div>
                  </div>
                  <div className="flex flex-row space-x-3 m-2 items-start">
                    <div className="flex flex-row text-nowrap space-x-2 items-center">
                      <FaCheck />
                      <div className="font-noto-sans font-bold w-28">
                        Backend
                      </div>
                    </div>
                    <div>Express, Sequelize, Node.js, JWT</div>
                  </div>
                  <div className="flex flex-row space-x-3 m-2 items-start">
                    <div className="flex flex-row text-nowrap space-x-2 items-center">
                      <FaCheck />
                      <div className="font-noto-sans font-bold w-28">
                        Database
                      </div>
                    </div>
                    <div>Mysql</div>
                  </div>
                  <div className="flex flex-row space-x-3 m-2 items-start">
                    <div className="flex flex-row text-nowrap space-x-2 items-center">
                      <FaCheck />
                      <div className="font-noto-sans font-bold w-28">
                        Deploy
                      </div>
                    </div>
                    <div>S3, CloudFront, EC2, RDS, Loadbalancer, Route53</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
