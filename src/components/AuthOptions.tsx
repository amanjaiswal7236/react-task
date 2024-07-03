import { FunctionComponent } from "react";

export type AuthOptionsType = {
  className?: string;
};

const AuthOptions: FunctionComponent<AuthOptionsType> = ({
  className = "",
}) => {
  return (
    <form
      className={`m-0 self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full ${className}`}
    >
      <div className="w-[168px] flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border">
        <div className="flex-1 flex flex-row items-start justify-between gap-[20px] z-[1]">
          <div className="flex flex-row items-start justify-start">
            <a className="[text-decoration:none] relative text-xl font-semibold font-text-sm-semibold text-grey-dark text-left inline-block min-w-[69px] mq450:text-base">
              Sign In
            </a>
            <div className="h-0.5 w-[69px] relative bg-purple-1 hidden" />
          </div>
          <div className="w-[67px] flex flex-col items-start justify-start gap-[2px]">
            <input
              className="w-full [border:none] [outline:none] font-semibold font-text-sm-semibold text-xl bg-[transparent] self-stretch h-[30px] relative text-purple-1 text-left inline-block min-w-[40px] p-0 mq450:text-base"
              placeholder="Join In"
              type="text"
            />
            <div className="self-stretch h-0.5 relative bg-purple-1" />
          </div>
        </div>
      </div>
      <div
      className={`self-stretch flex flex-col items-start justify-start gap-[16px] ${className}`}
    >
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
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full">
          <div className="flex-1 rounded-lg bg-grey-white box-border overflow-hidden flex flex-row items-start justify-start py-2.5 px-3 max-w-full z-[1] border-[1px] border-solid border-grey-lighter">
            <input
              className="w-[33px] [border:none] [outline:none] font-text-sm-semibold text-xs bg-[transparent] h-4 relative leading-[16px] text-grey-dark text-left inline-block p-0"
              placeholder="Email"
              type="text"
            />
          </div>

        </div>
        <div className="self-stretch rounded-lg bg-grey-white overflow-hidden flex flex-row items-start justify-between py-2.5 pr-[13px] pl-[11px] gap-[20px] border-[1px] border-solid border-grey-lighter">
          <input
            className="w-[58px] [border:none] [outline:none] font-text-sm-semibold text-xs bg-[transparent] h-4 relative leading-[16px] text-grey1 text-left inline-block p-0"
            placeholder="Password"
            type="text"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/password.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-end relative text-left text-3xs text-grey-dark font-text-sm-semibold">
          <div className="h-1 w-[60px] absolute !m-[0] top-[calc(50%_-_2px)] left-[0px] rounded-sm bg-grey-white" />
          <div className="h-1 w-[60px] absolute !m-[0] top-[calc(50%_-_2px)] left-[62px] rounded-sm bg-grey-white" />
          <div className="h-1 w-[60px] absolute !m-[0] top-[calc(50%_-_2px)] left-[124px] rounded-sm bg-grey-white" />
          <div className="relative leading-[16px] font-semibold inline-block min-w-[96px]">
            Password strength
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-1">
          <div className="relative text-xs tracking-[-0.05px] font-text-sm-semibold text-left z-[1]">
            <span className="text-grey-darker">{`By continuing, you agree to our `}</span>
            <span className="text-grey-darkest">Terms of Service</span>
            <span className="text-grey-darker">{` and `}</span>
            <span className="text-grey-darkest">Privacy Policy</span>
            <span className="text-grey-darker">.</span>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-3 px-5 bg-purple-1 self-stretch rounded-lg flex flex-row items-start justify-center whitespace-nowrap z-[1] hover:bg-plum">
          <div className="relative text-sm leading-[16px] font-semibold font-text-sm-semibold text-grey-white text-left">
            Agree and Continue
          </div>
        </button>
      </div>
    </form>
  );
};

export default AuthOptions;
