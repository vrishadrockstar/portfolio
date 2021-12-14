import React from "react";
import avtar from ".././images/avtar.jpg";
import { SocialIcon } from "react-social-icons";

export default function About() {
  return (
    <section id="about" className="mt-10 sh:h-700">
      <div className="about flex flex-col flex-initial md:flex-col items-center space-y-10 ">
        <div id="avtar" className="grow shrink flex justify-center w-1/4 h-1/4">
          <img
            className="inline rounded-full  object-contain"
            alt="hero"
            src={avtar}
          />
        </div>
        <div className="about flex space-y-10 sh:space-x-20 sh:space-y-0 flex-col flex-initial md:flex-col items-center sh:flex-row">
          <div className="grow shrink">
            <h2 className="sm:text-3xl font-small title-font text-white">
              Enthusiast Software Developer
            </h2>
          </div>
          <div className="grow shrink">
            <h2 className="sm:text-3xl font-small title-font text-white">
              Amateur Photographer
            </h2>
          </div>
          <div className="grow shrink">
            <h2 className="sm:text-3xl font-small title-font text-white">
              Blogger
            </h2>
          </div>
        </div>

        <div
          id="social"
          className="flex flex-row flex-wrap space-x-10 grow shrink items-end sh:justify-center sh:space-x-5 sh:h-1/2"
        >
          <div className="">
            <SocialIcon
              url="https://github.com/vrishadrockstar"
              bgColor="#808080"
              fgColor="#FFFFFF"
              target="_blank"
            />
          </div>
          <div className="">
            <SocialIcon
              url="https://www.linkedin.com/in/vrushali-joshi-969946aa/"
              bgColor="#808080"
              fgColor="#FFFFFF"
              target="_blank"
            />
          </div>
          <div className="">
            <SocialIcon
              url="https://www.facebook.com/vrishadrockstar"
              bgColor="#808080"
              fgColor="#FFFFFF"
              target="_blank"
            />
          </div>
          <div className="">
            <SocialIcon
              url="https://twitter.com/joshivrushalis"
              bgColor="#808080"
              fgColor="#FFFFFF"
              target="_blank"
            />
          </div>
          <div className="">
            <SocialIcon
              url="https://www.instagram.com/vrushalijoshi/"
              bgColor="#808080"
              fgColor="#FFFFFF"
              target="_blank"
            />
          </div>
          <div className="">
            <SocialIcon
              url="https://marmikwords.blogspot.com/"
              bgColor="#808080"
              fgColor="#FFFFFF"
              target="_blank"
              network="google"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
