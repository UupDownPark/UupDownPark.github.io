import { MdPeopleAlt } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import React from "react";

const About = () => {
    return (
        <div
        id="aboutMeContainer"
        className="flex flex-col justify-center items-center m-10 max-w-6xl"
      >
        <span className="font-tenada text-[50px] mb-8 border-b-4 border-black">
          ABOUT ME
        </span>
        <div className="flex flex-wrap justify-between my-12">
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
    )
}

export default About;