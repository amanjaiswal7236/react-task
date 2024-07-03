import React, { FunctionComponent } from "react";

export type TestimonialsType = {
  className?: string;
};

const Testimonials: FunctionComponent<TestimonialsType> = ({
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-start justify-center ${className}`}>
      <div
        className={`flex-1 bg-blue-2 flex flex-row items-start justify-center py-[100px] px-5 box-border max-w-full z-[3] text-left text-lg text-grey-darkest font-text-sm-semibold mq750:pt-4 mq750:pb-[65px] mq750:box-border`}
      >
        <div className="w-[1240px] flex flex-row items-start justify-start p-10 box-border relative max-w-full">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-grey-white box-border border-[1px] border-solid border-grey-light" />
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full z-[1] mq750:gap-[16px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[24px]">
              <img
                className="h-10 w-10 relative overflow-hidden shrink-0 min-h-[40px]"
                alt=""
                src="/add-1.svg"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <h2 className="m-0 relative text-5xl font-semibold font-text-sm-semibold text-grey-darkest text-left mq450:text-lgi">
                  Add your own
                </h2>
              </div>
            </button>
            <div className="self-stretch relative tracking-[0.02em] leading-[30px] font-light whitespace-pre-wrap">
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
            </div>
            <button className="cursor-pointer py-2.5 px-7 bg-grey-white rounded-lg flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-purple-1 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-plum">
              <div className="relative text-sm leading-[16px] font-semibold font-text-sm-semibold text-purple-1 text-left inline-block min-w-[63px]">
                Add new
              </div>
            </button>
          </div>
        </div>
      </div>

      <section
        className={`self-stretch bg-grey-white flex flex-row items-start justify-center py-[100px] px-5 box-border shrink-0 max-w-full z-[4] mt-[-33px] text-left text-5xl text-grey-darkest font-text-sm-semibold mq750:pb-[65px] mq750:box-border`}
      >
        <div className="w-[1240px] rounded-lg bg-purple-3 flex flex-col items-start justify-start p-10 box-border gap-[32px] max-w-full mq750:gap-[16px] mq750:pt-[100px] mq750:pb-[26px] mq750:box-border">
          <div className="w-[1240px] h-[472px] relative rounded-lg bg-purple-3 hidden max-w-full" />
          <div className="flex flex-row items-start justify-start z-[1]">
            <div className="flex flex-row items-start justify-start gap-[24px]">
              <img
                className="h-10 w-10 relative overflow-hidden shrink-0 object-contain min-h-[40px]"
                loading="lazy"
                alt=""
                src="/quote@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <h2 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi">
                  Testimonials
                </h2>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-lg text-grey-darker mq750:gap-[20px]">
            <div className="self-stretch relative tracking-[0.02em] leading-[30px] font-light z-[1]">
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like minded
              people. Websites like hobbycue.com is a great service which helps me
              get in touch with, communicate, connect, and exchange ideas with
              other dancers. It also provides the extra benefit of finding
              products and services that I can avail, which I can be assured is
              going to be of great quality as it comes recommended by people of
              the hobbycue community. To have discussions, to get visibility, and
              to be able to safely explore various hobbies and activities in my
              city, all under one roof, is an excellent idea and I highly
              recommend it.
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[80px] max-w-full text-xs text-purple-1 lg:gap-[40px] mq750:gap-[20px] mq1050:flex-wrap">
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
                <img
                  className="absolute top-[19px] left-[684px] rounded-[50%] w-[60px] h-[60px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/progress-dot@2x.png"
                />
                <img
                  className="absolute top-[47px] left-[672px] w-8 h-8 overflow-hidden z-[2]"
                  alt=""
                  src="/mic-black-24dp-1.svg"
                />
                <div className="absolute top-[42px] left-[118px] w-[506px] flex flex-row items-start justify-start gap-[12px] max-w-full mq750:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[304px] max-w-full">
                    <div className="self-stretch h-0.5 relative rounded-sm bg-grey-white z-[1]" />
                  </div>
                  <div className="relative leading-[16px] inline-block min-w-[26px] z-[1]">
                    0:00
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[24px] min-w-[304px] z-[1] text-lg mq1050:flex-1 mq450:flex-wrap">
                <img
                  className="h-[100px] w-[100px] relative rounded-[50%] object-cover mq450:flex-1"
                  loading="lazy"
                  alt=""
                  src="/speaker-icon@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-6 px-0 pb-0">
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.02em] font-semibold">
                      Shubha Nagarajan
                    </div>
                    <div className="relative text-sm tracking-[0.02em] text-blue-1 inline-block min-w-[123px]">
                      Classical Dancer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
