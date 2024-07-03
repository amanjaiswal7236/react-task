import { FunctionComponent } from "react";

export type CityDescriptionType = {
  className?: string;
};

const CityDescription: FunctionComponent<CityDescriptionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-left text-lg text-grey-darker font-text-sm-semibold mq750:gap-[20px] ${className}`}
    >
      <div className="self-stretch relative tracking-[0.02em] leading-[30px] font-light z-[1]">
        In a fast growing and ever changing city like Bangalore, it sometimes
        becomes very difficult to find or connect with like minded people.
        Websites like hobbycue.com is a great service which helps me get in
        touch with, communicate, connect, and exchange ideas with other dancers.
        It also provides the extra benefit of finding products and services that
        I can avail, which I can be assured is going to be of great quality as
        it comes recommended by people of the hobbycue community. To have
        discussions, to get visibility, and to be able to safely explore various
        hobbies and activities in my city, all under one roof, is an excellent
        idea and I highly recommend it.
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[80px] max-w-full text-xs text-purple-1 mq750:gap-[20px] mq1125:flex-wrap mq1125:gap-[40px]">
        <div className="h-[100px] flex-1 relative rounded-lg bg-purple-2 min-w-[504px] max-w-full z-[1] mq750:h-auto mq750:min-h-[100] mq750:min-w-full">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-purple-2 w-full h-full hidden" />
          <div className="absolute top-[30px] left-[32px] w-10 h-10">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-grey-white w-full h-full z-[1]" />
            <img
              className="absolute top-[8px] left-[8px] w-6 h-6 overflow-hidden z-[2]"
              loading="lazy"
              alt=""
              src="/play-arrow-black-24dp-1.svg"
            />
          </div>
          <div className="absolute top-[44px] left-[112px] rounded-[50%] bg-purple-1 w-3 h-3 z-[2]" />
          <div className="absolute top-[19px] left-[672px] w-[72px] h-[60px]">
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[12px] rounded-[50%] max-h-full w-[60px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/progress-dot@2x.png"
            />
            <img
              className="absolute top-[28px] left-[0px] w-8 h-8 overflow-hidden z-[2]"
              alt=""
              src="/mic-black-24dp-1.svg"
            />
          </div>
          <div className="absolute top-[42px] left-[118px] w-[506px] flex flex-row items-start justify-start gap-[12px] max-w-full mq750:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[304px] max-w-full">
              <div className="self-stretch h-0.5 relative rounded-sm bg-grey-white z-[1]" />
            </div>
            <div className="relative leading-[16px] inline-block min-w-[26px] z-[1]">
              0:00
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[24px] min-w-[304px] text-lg mq450:flex-wrap mq1125:flex-1">
          <img
            className="h-[100px] w-[100px] relative rounded-[50%] object-cover z-[1] mq450:flex-1"
            loading="lazy"
            alt=""
            src="/speaker-icon@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-6 px-0 pb-0">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative tracking-[0.02em] font-semibold z-[1]">
                Shubha Nagarajan
              </div>
              <div className="relative text-sm tracking-[0.02em] text-blue-1 inline-block min-w-[123px] z-[1]">
                Classical Dancer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityDescription;
