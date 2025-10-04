"use client";

import AnimatedParagraph from "@/components/AnimatedParagraph";
import Image from "next/image";

const About = () => {
  const paragraphs = [
    "Yeah, that’s a fckn future right here.",
    "That’s your assistant, teacher, photographer, security guard, pet, morning alarm or whatever else you want Tbot to be.",
    "We are eager to see what ways you guys will find to use this white cute ball in your hands*.",
    "This surely feels illegal to you. But mostly you won’t end up in jail with this thing, at least we hope so**.",
    "And yeah, it does have a cute voice and makes less sound than your microwave, so you’ll probably like it :)",
    "Stay tuned for next updates on Tbot, release date, etc."
  ];
  return (
    <div className="w-full h-full flex xl:justify-between xl:flex-row flex-col-reverse xl:gap-[130px] gap-[65px] relative xl:mt-5 md:mt-40 mt-30 z-[5]">
      <div className="xl:w-[70%] w-full h-max flex flex-col xl:sticky xl:top-10 relative md:gap-16 gap-8">
        <div className="w-full xl:h-[340px] h-auto bg-[#E3E3E3] border-[2px] pl-[18px] pr-[30px] pt-[6px] pb-[18px] border-white rounded-[13px] flex justify-center items-center">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/4_1.png"
            alt="drone_shadow"
            className="w-full h-auto object-contain"
            draggable={false}
            priority
          />
        </div>
        <div className="flex justify-between w-full md:gap-18 gap-10 text-[#545454]">
          <p className="font-secondary italic font-medium w-full md:text-base text-xs">
            *you can actually adapt it to your needs, all by yourself, imagine
            that.
          </p>
          <p className="font-secondary italic font-medium w-full md:text-base text-xs">
            **good luck trying to harm someone with it, we’ve thought it
            through.
          </p>
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-12 font-secondary font-medium xl:text-[38px] md:text-2xl text-lg text-[#323232]">
        {paragraphs.map((item, index) => <AnimatedParagraph key={index} text={item} index={index} />)}
      </div>
    </div>
  );
};

export default About;
