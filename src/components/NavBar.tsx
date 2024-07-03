import { FunctionComponent, useState } from "react";
import Dropdown from "./Dropdown";

export type NavBarType = {
  className?: string;
};

const NavBar: FunctionComponent<NavBarType> = ({
  className = "",
}) => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isHobbiesOpen, setIsHobbiesOpen] = useState(false);

  const exploreItems = [
    "People - Community",
    "Places - Venues",
    "Programs - Events",
    "Products - Store",
    "Blogs",
  ];

  const hobbiesItems = [
    "Hobby 1",
    "Hobby 2",
    "Hobby 3",
    "Hobby 4",
    "Hobby 5",
  ];

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border top-[0] z-[99] sticky max-w-full ${className}`}
    >
      <header className="flex-1 flex flex-row items-start justify-center py-2.5 px-5 box-border relative gap-[90px] max-w-full text-left text-xs text-grey-dark font-text-sm-semibold mq750:gap-[45px] mq450:gap-[22px] h-[80px] overflow-visible">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_2px_12px_rgba(0,_0,_0,_0.08)] bg-grey-white" />
        <div className="w-[628px] flex flex-row items-start justify-start gap-[34.7px] max-w-full mq750:gap-[17px]">
          <img
            className="h-[60px] w-[293.3px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/hobbycue-logo-v2-1@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <div className="self-stretch flex flex-row items-start justify-between py-0 pr-0 pl-3 relative gap-[20px] z-[1]">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-grey-hover box-border mix-blend-normal border-[1px] border-solid border-grey-lighter" />
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="[text-decoration:none] relative leading-[16px] font-light text-[inherit] inline-block min-w-[79px] whitespace-nowrap z-[1]"
                />
              </div>
              <div className="h-10 w-10 relative z-[1]">
                <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-purple-1 w-full h-full" />
                <img
                  className="absolute top-[12px] left-[12px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none w-4 h-4 overflow-hidden z-[1]"
                  alt=""
                  src="/icons8-search-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[525px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full text-sm text-base-black">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]">
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 relative">
              <div
                className="flex flex-row items-start justify-start gap-[4px] cursor-pointer"
                onClick={() => setIsExploreOpen(!isExploreOpen)}
              >
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/explore.svg"
                />
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <a className="[text-decoration:none] relative leading-[22px] font-medium text-[inherit] inline-block min-w-[51px]">
                    Explore
                  </a>
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/icons8-expand-arrow-1.svg"
                />
              </div>
              {isExploreOpen && (
                <div className="absolute top-full left-0 z-10">
                  <Dropdown items={exploreItems} />
                </div>
              )}
            </div>
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 relative">
              <div
                className="flex flex-row items-start justify-start gap-[4px] cursor-pointer"
                onClick={() => setIsHobbiesOpen(!isHobbiesOpen)}
              >
                <div className="h-6 w-6 relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
                    alt=""
                    src="/hobbies.svg"
                  />
                  <div className="absolute top-[0px] left-[0px] w-full h-full flex flex-row items-center justify-center gap-[10px] z-[1]">
                    <img
                      className="h-[19px] w-[19px] relative"
                      alt=""
                      src="/polygon-3.svg"
                    />
                    <img
                      className="h-3 w-3 absolute !m-[0] top-[6px] left-[6px] rounded-12xs-4 z-[1]"
                      alt=""
                      src="/star-1.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <a className="[text-decoration:none] relative leading-[22px] font-medium text-[inherit] inline-block min-w-[58px]">
                    Hobbies
                  </a>
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src="/icons8-expand-arrow-1.svg"
                />
              </div>
              {isHobbiesOpen && (
                <div className="absolute top-full left-0 z-10">
                  <Dropdown items={hobbiesItems} />
                </div>
              )}
            </div>
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/bookmark-black-24dp-1.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/notifications-black-24dp-1.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/product-3.svg"
              />
            </div>
            <div className="flex flex-row items-start justify-start text-purple-1">
              <div className="flex flex-row items-start justify-start pt-2.5 px-8 pb-3.5 relative whitespace-nowrap">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-grey-white box-border border-[1px] border-solid border-purple-1" />
                <a className="[text-decoration:none] relative leading-[16px] font-semibold text-[inherit] inline-block min-w-[48px] z-[1]">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
