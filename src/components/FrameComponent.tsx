import { FunctionComponent, useState } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[27px] box-border max-w-full ${className}`}
    >
      <form className="m-0 flex-1 bg-purple-3 flex flex-col items-center justify-start pt-[100px] px-5 pb-0 box-border gap-[24px] shrink-0 max-w-full z-[2] mq750:pt-[65px] mq750:box-border">
        <div className="w-[1440px] h-[678px] relative bg-purple-3 hidden max-w-full" />
        <div className="w-[1240px] flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
          <div className="w-[707px] flex flex-col items-start justify-start gap-[32px] min-w-[707px] max-w-full lg:flex-1 mq750:gap-[16px] mq1050:min-w-full">
            <h1 className="m-0 relative text-17xl tracking-[0.02em] inline-block italic font-semibold font-text-sm-semibold text-left max-w-full z-[1] mq1050:text-10xl mq450:text-3xl">
              <span className="text-base-black">Explore your</span>
              <span className="text-blue-1"> hobby</span>
              <span className="text-base-black"> or </span>
              <span className="text-purple-1">passion</span>
            </h1>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <div className="self-stretch relative text-sm tracking-[0.02em] leading-[30px] font-light font-text-sm-semibold text-base-black text-left z-[1]">
                Sign-in to interact with a community of fellow hobbyists and an
                eco-system of experts, teachers, suppliers, classes, workshops,
                and places to practice, participate or perform. Your hobby may
                be about visual or performing arts, sports, games, gardening,
                model making, cooking, indoor or outdoor activities…
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
                <div className="flex-1 relative text-sm tracking-[0.02em] leading-[30px] font-light font-text-sm-semibold text-base-black whitespace-pre-wrap text-left inline-block max-w-full z-[1]">
                  If you are an expert or a seller, you can Add your Listing and
                  promote yourself, your students, products, services or events.
                  Hop on your hobbyhorse and enjoy the ride.
                </div>
              </div>
            </div>
          </div>
          <div className="w-[410px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[410px] max-w-full lg:flex-1 mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
              <div className="w-[169px] flex flex-row items-start justify-between gap-[20px] z-[1]">
                <div className="w-[70px] flex flex-col items-start justify-start gap-[2px]">
                  <a
                    className={`[text-decoration:none] relative text-xl font-semibold font-text-sm-semibold ${
                      isSignIn ? "text-purple-1" : "text-grey-dark"
                    } text-left inline-block min-w-[69px] mq450:text-base cursor-pointer`}
                    onClick={() => setIsSignIn(true)}
                  >
                    Sign In
                  </a>
                  <div
                    className={`self-stretch h-0.5 relative ${
                      isSignIn ? "bg-purple-1" : "bg-transparent"
                    }`}
                  />
                </div>
                <div className="flex flex-row items-start justify-start">
                  <a
                    className={`relative text-xl font-semibold font-text-sm-semibold ${
                      !isSignIn ? "text-purple-1" : "text-grey-dark"
                    } text-left inline-block min-w-[67px] mq450:text-base cursor-pointer`}
                    onClick={() => setIsSignIn(false)}
                  >
                    Join In
                  </a>
                  <div
                    className={`self-stretch h-0.5 relative ${
                      !isSignIn ? "bg-purple-1" : "bg-transparent"
                    }`}
                  />
                </div>
              </div>

              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <button className="cursor-pointer py-2.5 px-6 bg-purple-3 self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-start gap-[88px] whitespace-nowrap z-[1] border-[1px] border-solid border-purple-1 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-plum mq450:gap-[44px]">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                    alt=""
                    src="/google.svg"
                  />
                  <div className="relative text-sm leading-[16px] font-semibold font-text-sm-semibold text-grey-darkest text-left">
                    Continue with Google
                  </div>
                </button>
                <button className="cursor-pointer py-2.5 px-6 bg-purple-3 self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-start gap-[79px] whitespace-nowrap z-[1] border-[1px] border-solid border-purple-1 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-plum mq450:gap-[39px]">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                    alt=""
                    src="/facebook.svg"
                  />
                  <div className="relative text-sm leading-[16px] font-semibold font-text-sm-semibold text-grey-darkest text-left">
                    Continue with Facebook
                  </div>
                </button>
              </div>

              <div className="self-stretch flex flex-row items-start justify-start gap-[8px] z-[1] mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[97px]">
                  <div className="self-stretch h-0.5 relative bg-grey-light" />
                </div>
                <div className="relative text-xs leading-[16px] font-semibold font-text-sm-semibold text-base-black text-left inline-block min-w-[97px]">
                  Or connect with
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[97px]">
                  <div className="self-stretch h-0.5 relative bg-grey-light" />
                </div>
              </div>

              {/* Common Input Fields */}
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch rounded-lg bg-grey-white overflow-hidden flex flex-row items-start justify-start py-2.5 px-3 z-[1] border-[1px] border-solid border-grey-lighter">
                  <input
                    className="w-[33px] [border:none] [outline:none] font-text-sm-semibold text-xs bg-[transparent] h-4 relative leading-[16px] text-grey-dark text-left inline-block p-0"
                    placeholder="Email"
                    type="text"
                  />
                </div>
                <div className="self-stretch rounded-lg bg-grey-white overflow-hidden flex flex-row items-start justify-between py-2.5 pr-[13px] pl-[11px] gap-[20px] z-[1] border-[1px] border-solid border-grey-lighter">
                  <div className="relative text-xs leading-[16px] font-text-sm-semibold text-grey-dark text-left inline-block min-w-[58px]">
                    Password
                  </div>
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                    alt=""
                    src="/password1.svg"
                  />
                </div>
              </div>

              {/* Conditional Form Fields */}
              {isSignIn ? (
                <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                      <input className="m-0" type="checkbox" />
                      <div className="relative text-xs leading-[16px] font-text-sm-semibold text-base-black text-left inline-block min-w-[78.4px] z-[1]">
                        Remember me
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[7.8px]">
                      <img
                        className="h-4 w-[15.8px] relative overflow-hidden shrink-0 min-h-[16px] z-[1]"
                        alt=""
                        src="/lock-black-24dp-1.svg"
                      />
                      <div className="relative text-xs leading-[16px] font-text-sm-semibold text-base-black text-left inline-block min-w-[107.4px] shrink-0 z-[1]">
                        Forgot password?
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer py-2.5 px-5 bg-[transparent] self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-center z-[1] border-[1px] border-solid border-base-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
                    <div className="relative text-sm leading-[16px] font-semibold font-text-sm-semibold text-base-black text-left inline-block min-w-[66px]">
                      Continue
                    </div>
                  </button>
                </div>
              ) : (
                <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                    <div className="self-stretch h-1 flex flex-row py-0 pr-0 pl-px box-border items-center justify-start relative gap-[2px]">
                      <div className="h-1 w-[60px] absolute !m-[0] top-[calc(50%_-_2px)] left-[0px] rounded-sm bg-grey-white" />
                      <div className="h-1 w-[60px] absolute !m-[0] top-[calc(50%_-_2px)] left-[62px] rounded-sm bg-grey-white" />
                      <div className="h-1 w-[60px] absolute !m-[0] top-[calc(50%_-_2px)] left-[124px] rounded-sm bg-grey-white" />
                      <div className="justify-end relative text-left text-3xs text-grey-dark font-text-sm-semibold leading-[16px] font-semibold inline-block min-w-[96px]">
                        Password strength
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-1">
                      <div className="relative text-xs tracking-[-0.05px] font-text-sm-semibold text-left z-[1]">
                        <span className="text-grey-darker">By continuing, you agree to our </span>
                        <span className="text-grey-darkest">Terms of Service</span>
                        <span className="text-grey-darker"> and </span>
                        <span className="text-grey-darkest">Privacy Policy</span>
                        <span className="text-grey-darker">.</span>
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-3 px-5 bg-purple-1 self-stretch rounded-lg flex flex-row items-start justify-center whitespace-nowrap z-[1] hover:bg-plum">
                    <div className="relative text-sm leading-[16px] font-semibold font-text-sm-semibold text-grey-white text-left">
                      Agree and Continue
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default FrameComponent;
