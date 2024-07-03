import { FunctionComponent } from "react";

export type FooterProps = {
  endClassName?: string;
  footerClassName?: string;
};

const Footer: FunctionComponent<FooterProps> = ({
  endClassName = "",
  footerClassName = "",
}) => {
  return (
    <div className={`self-stretch bg-blue-2 flex flex-col items-center justify-start pt-[100px] px-5 pb-[30px] box-border gap-[100px] max-w-full text-left text-17xl text-base-black font-text-sm-semibold mq750:gap-[50px] mq750:pt-[65px] mq750:pb-5 mq750:box-border mq450:gap-[25px] ${endClassName}`}>
      <div className="w-[1440px] h-[662px] relative bg-blue-2 hidden max-w-full" />
      <div className="w-[1240px] flex flex-row items-end justify-between max-w-full gap-[20px] mq750:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[30px] max-w-full z-[1]">
          <h1 className="m-0 h-[54px] relative text-inherit inline-block italic font-medium font-inherit mq1050:text-10xl mq450:text-3xl">
            <span>{`Your `}</span>
            <span className="text-purple-1">Hobby</span>
            <span>{`, Your `}</span>
            <span className="text-blue-1">Community...</span>
          </h1>
          <button className="cursor-pointer [border:none] py-2 px-4 bg-purple-1 rounded-lg overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-plum">
            <div className="relative text-xl font-semibold font-text-sm-semibold text-grey-white text-left inline-block min-w-[115px]">
              Get started
            </div>
          </button>
        </div>
        <div className="h-[47px] flex flex-col items-start justify-end pt-0 px-0 pb-[7px] box-border">
          <div className="w-10 h-10 relative z-[2] flex items-center justify-center">
            <img
              className="w-full h-full z-[2] object-contain absolute left-[0px] top-[8px] [transform:scale(1.6)]"
              loading="lazy"
              alt=""
              src="/group-77.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[1240px] flex flex-row items-end justify-start gap-[71px] max-w-full z-[1] mq750:gap-[35px] mq1050:flex-wrap mq450:gap-[18px]">
        <div className="h-[281px] w-[531px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[531px] max-w-full mq750:min-w-full mq1050:flex-1">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full mq1050:self-stretch mq1050:w-auto"
            loading="lazy"
            alt=""
            src="/footer-bottom.svg"
          />
        </div>
        <img
          className="h-[302px] flex-1 relative max-w-full overflow-hidden min-w-[415px] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/footer-top.svg"
        />
      </div>
      {/* Footer section */}
      <div
        className={`self-stretch bg-grey-white flex flex-col items-start justify-start pt-[60px] px-0 pb-0 box-border gap-[60px] max-w-full text-left text-sm text-grey-darkest font-text-sm-semibold mq750:gap-[30px] mq450:pt-[39px] mq450:box-border ${footerClassName}`}
      >
        <div className="self-stretch h-[380px] relative bg-grey-white hidden" />
        <div className="w-[1421px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1217px] flex flex-row items-start justify-between max-w-full gap-[20px] z-[1] mq750:flex-wrap">
            <div className="w-[90px] flex flex-col items-start justify-start gap-[16px]">
              <b className="w-[75px] h-[18px] relative tracking-[0.01em] leading-[18px] inline-block">
                Hobbycue
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="w-16 relative tracking-[0.01em] leading-[18px] inline-block">
                  About Us
                </div>
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Our Services
                </div>
                <div className="self-stretch h-[18px] relative tracking-[0.01em] leading-[18px] inline-block">
                  Work with Us
                </div>
                <a className="[text-decoration:none] w-7 h-[18px] relative tracking-[0.01em] leading-[18px] text-[inherit] inline-block">
                  FAQ
                </a>
                <div className="w-[79px] h-[18px] relative tracking-[0.01em] leading-[18px] inline-block">
                  Contact Us
                </div>
              </div>
            </div>
            <div className="w-[110px] flex flex-col items-start justify-start gap-[16px]">
              <b className="w-[62px] relative tracking-[0.01em] leading-[18px] inline-block">
                How Do I
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="w-[54px] h-[18px] relative tracking-[0.01em] leading-[18px] inline-block whitespace-nowrap">
                  Sign Up
                </div>
                <div className="w-[91px] relative tracking-[0.01em] leading-[18px] inline-block">
                  Add a Listing
                </div>
                <div className="w-[91px] relative tracking-[0.01em] leading-[18px] inline-block">
                  Claim Listing
                </div>
                <div className="w-[90px] relative tracking-[0.01em] leading-[18px] inline-block">
                  Post a Query
                </div>
                <div className="self-stretch relative tracking-[0.01em] leading-[18px] whitespace-nowrap">
                  Add a Blog Post
                </div>
                <div className="w-[98px] relative tracking-[0.01em] leading-[18px] inline-block">
                  Other Queries
                </div>
              </div>
            </div>
            <div className="w-[87px] flex flex-col items-start justify-start gap-[16px]">
              <b className="w-[83px] h-[18px] relative tracking-[0.01em] leading-[18px] inline-block">
                Quick Links
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="w-[53px] relative tracking-[0.01em] leading-[18px] inline-block">
                  Listings
                </div>
                <div className="w-[73px] relative tracking-[0.01em] leading-[18px] inline-block">
                  Blog Posts
                </div>
                <div className="self-stretch relative tracking-[0.01em] leading-[18px] whitespace-nowrap">
                  Shop / Store
                </div>
                <div className="w-[85px] relative tracking-[0.01em] leading-[18px] inline-block">
                  Community
                </div>
              </div>
            </div>
            <div className="w-[360px] flex flex-col items-start justify-start gap-[50px] max-w-full mq450:gap-[25px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <b className="w-[94px] relative tracking-[0.01em] leading-[18px] inline-block">
                  Social Media
                </b>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/group-60.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/group-61.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/group-62.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/group-63.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/group-59.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/group-58.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/group-57.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/group-56.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                <b className="w-[99px] relative tracking-[0.01em] leading-[18px] inline-block">
                  Invite Friends
                </b>
                <div className="self-stretch rounded-lg bg-grey-white box-border flex flex-row items-start justify-between py-0 pr-0.5 pl-3.5 max-w-full gap-[20px] text-xs text-grey-dark border-[1px] border-solid border-purple-1 mq450:flex-wrap">
                  <div className="self-stretch w-[360px] relative rounded-lg bg-grey-white box-border hidden max-w-full border-[1px] border-solid border-purple-1" />
                  <div className="w-12 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
                    <div className="self-stretch h-4 relative leading-[16px] inline-block z-[1]">
                      Email ID
                    </div>
                  </div>
                  <div className="h-10 w-[59px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-purple-1 flex flex-row items-start justify-start p-3 box-border z-[1] text-grey-white">
                    <div className="h-10 w-[59px] relative rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-purple-1 hidden" />
                    <div className="self-stretch flex-1 relative tracking-[0.01em] leading-[16px] font-semibold z-[2]">
                      Invite
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="self-stretch bg-purple-3 flex flex-row items-start justify-center py-[30px] pr-5 pl-[21px] box-border max-w-full z-[1] text-left text-sm text-grey-darkest font-text-sm-semibold">
          <div className="h-[78px] w-[1440px] relative bg-purple-3 hidden max-w-full" />
          <div className="w-[211px] relative tracking-[0.01em] leading-[18px] font-medium inline-block mix-blend-normal z-[1]">
            © Purple Cues Private Limited
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
