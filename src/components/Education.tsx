import React from "react";
import codestates from "./assets/images/codestats.png";
import programmers from "./assets/images/programmers.png";


const Education = () => {
    return (
        <div className="bg-gray-200 w-full flex flex-col justify-center items-center">
        <span className="font-tenada text-[50px] mb-8 mt-16 border-b-4 border-black">
          EDUCATION
        </span>
        <div className="flex flex-row max-w-6xl mb-24">
          <div>
            <img
              src={programmers}
              className="w-[15rem] h-[15rem] rounded-full border mr-24 border-gray-400"
              alt=""
            />
          </div>
          <div className="flex flex-col border border-l-gray-400 p-12">
            <div className="font-noto-sans font-bold text-2xl mb-2">
              프로그래머스
            </div>
            <div className="font-noto-sans text-sm text-gray-500">
              2023.11 - 2024.05
            </div>
            <div className="font-noto-sans text-sm text-gray-500">
              타입스크립트로 함께하는 웹 풀 사이클 개발(React, Node.js) (1기)
            </div>
            <ul className="list-disc p-6 space-y-2">
              <li className="font-noto-sans">
                TypeScript 기반 Full stack 과정(React, Node.js, AWS 등)
              </li>
              <li className="font-noto-sans">프론트엔드(React, TypeScript)</li>
              <li className="font-noto-sans">
                프론트엔드 심화(상태 관리와 비동기 처리)
              </li>
              <li className="font-noto-sans">백엔드 기초(Node.js, Express)</li>
              <li className="font-noto-sans">
                백엔드 심화(인증과 비동기 처리)
              </li>
              <li className="font-noto-sans">
                웹 개발 파이프라인 구축(Jenkins, k8s)
              </li>
              <li className="font-noto-sans">실무에 쓰이는 CS 지식 기초</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row max-w-6xl">
          <div>
            <img
              src={codestates}
              className="w-[15rem] h-[15rem] rounded-full border border-gray-400 mr-24"
              alt=""
            />
          </div>
          <div className="flex flex-col border border-l-gray-400 p-12">
            <div className="font-noto-sans font-bold text-2xl mb-2">
              코드스테이츠
            </div>
            <div className="font-noto-sans text-sm text-gray-500">
              2021.12 - 2022.06
            </div>
            <div className="font-noto-sans text-sm text-gray-500">
              Advanced software engineering, Immersive program (38기)
            </div>
            <ul className="list-disc p-6 space-y-2">
              <li className="font-noto-sans">
                20주 동안 매일 알고리즘 문제 풀이
              </li>
              <li className="font-noto-sans">
                Javascript 기반 Full stack 과정(React, Node.js, AWS 등)
              </li>
              <li className="font-noto-sans">git workflow</li>
              <li className="font-noto-sans">자료구조/알고리즘</li>
              <li className="font-noto-sans">
                2인 페어 프로그래밍 /4인 스터디 진행
              </li>
              <li className="font-noto-sans">
                First project , Final project 진행
              </li>
              <li className="font-noto-sans">
                HTTP/네트워크 기초 및 비동기 처리 학습
              </li>
              <li className="font-noto-sans">
                HTML/CSS , Styled-component 학습
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Education 