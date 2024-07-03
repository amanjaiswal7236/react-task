import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type GroupComponent1Type = {
  className?: string;
  groupsBlack24dp11?: string;
  people?: string;
  findATeacherCoachOrExpert?: string;
  connect?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  groupsBlack24dp11,
  people,
  findATeacherCoachOrExpert,
  connect,
  propGap,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className={`flex-1 rounded-lg bg-grey-white hover:bg-green-600 hover:text-white box-border flex flex-col items-start justify-start py-[38px] px-[43px] gap-[32px] max-w-full text-left text-5xl text-base-black font-text-sm-semibold border-[1px] border-solid border-grey-light mq750:gap-[16px] mq750:pl-[21px] mq750:pr-[21px] mq750:box-border ${className}`}
      style={groupDiv1Style}
    >
      <div className="w-[608px] h-[297px] relative rounded-lg bg-grey-white box-border hidden max-w-full border-[1px] border-solid border-grey-light" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="flex flex-row items-start justify-start gap-[24px] z-[1]">
          <img
            className="h-10 w-10 relative overflow-hidden shrink-0 min-h-[40px]"
            loading="lazy"
            alt=""
            src={groupsBlack24dp11}
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <h2 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[83px] mq450:text-lgi">
              {people}
            </h2>
          </div>
        </div>
        <div className="self-stretch relative text-lg font-light whitespace-pre-wrap z-[1]">
          {findATeacherCoachOrExpert}
        </div>
      </div>
      <button className="cursor-pointer py-2.5 pr-[29px] pl-[30px] bg-grey-white rounded-lg flex flex-row items-start justify-start z-[1] border-[1px] border-solid border-purple-1 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-plum">
        <div className="relative text-sm leading-[16px] font-semibold font-text-sm-semibold text-purple-1 text-left inline-block min-w-[61px]">
          {connect}
        </div>
      </button>
    </div>
  );
};

export default GroupComponent1;
