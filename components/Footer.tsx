"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { FaTelegram, FaLinkedinIn } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="w-full pt-20 pb-10 " id="contact">
        {/* background grid */}
        <div className="w-full ">
          {/* <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full opacity-50 "
          /> */}
        </div>
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Contact <span className="text-purple">Me</span>
          </h1>
          <p className="text-white-200 md:mt-10 mb-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you.
          </p>
          <form className=" flex flex-col items-start gap-3 justify-between w-1/2">
            {/* <Toaster position="top-center" reverseOrder={false}></Toaster> */}
            <label>Names</label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              className="text-[16px] rounded-lg border-4 w-full  text-white-100 px-3 py-2 bg-gray-900"
              // {...formik.getFieldProps("name")}
            ></input>
            <label>Email</label>
            <input
              type="email"
              placeholder="Your Email"
              required
              className="text-[16px] rounded-lg w-full border-4 text-white-100 px-3 py-2 bg-gray-900"
              name="email"
              // {...formik.getFieldProps("email")}
            />
            <label>Message</label>
            <textarea
              // type="text"
              placeholder="Your Message"
              // name="message"
              required
              className="text-[16px] rounded-lg w-full border-4 text-white-100 px-3 py-2 bg-gray-900"
              style={{ resize: "none" }}
              rows={5}
              // {...formik.getFieldProps("message")}
            />
            <MagicButton
              title="Send Message"
              icon={<FaLocationArrow />}
              position="right"
            />
            {/* <button type="submit" className="formButton">
            Send Message
          </button> */}
          </form>
          {/* <div className="flex flex-col gap-2">
          <span className="flex align-center text-xl ">
            <FaEnvelope className="mt-2 mr-1 text-purple" /> :
            elsabethadugna0294@gmail.com
          </span>
          <span className="flex align-center text-xl  ">
            <FaPhone className="mt-1 mr-1 text-purple" /> : +251 948790956
          </span>
        </div> */}
          {/* <a href="mailto:elsabethadugna0294@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a> */}
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Elsabeth Adugna
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
{/*               <FaTelegram width={20} height={20} /> */}
            </div>
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <a hre='https://www.linkedin.com/in/elsabeth-adugna-462077171/' target='_blank' >
              <FaLinkedinIn width={20} height={20} />
              
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
