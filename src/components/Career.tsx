import React from "react"
import daeu from '../assets/images/Daeu.png'


const Career= () => {
    return (
        <div className="bg-cyan-300 w-full flex flex-col justify-center items-center">
        <span className="font-tenada text-[50px] mb-8 mt-16 border-b-4 border-black">
          CAREER
        </span>
        <div className="flex flex-row max-w-6xl mb-24">
           <div>
            <img
              src={daeu}
              className="w-[20rem] h-[20rem]  border mr-24 border-gray-400"
              alt=""
            />
          </div>
          <div className="flex flex-col  p-12">
            <div className="font-noto-sans font-bold text-2xl mb-2">
              대유 C & A(인턴)
            </div>
            <div className="font-noto-sans text-sm text-gray-500">
              2024.10 - 2024.12
            </div>
            <div className="font-noto-sans text-sm text-gray-500">
              FTA 솔루션 유지보수 및 FTA 컨설팅
            </div>
            <ul className="list-disc p-6 space-y-2">
              <li className="font-noto-sans">
                HTML, CSS, JSP, Easy-ui 를 활용한 화면 개발
              </li>
              <li className="font-noto-sans">프론트엔드(React, TypeScript)</li>
              <li className="font-noto-sans">
                MsSQL, PostgreSQL, Oracle 쿼리 수정(iBatis)
              </li>
              <li className="font-noto-sans">SVN를 활용한 개발 이력 관리</li>
              <li className="font-noto-sans">
                Spring framework 개발 방식
              </li>
              <li className="font-noto-sans">
                 고객사 컴플레인 처리
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
    
}

export default Career