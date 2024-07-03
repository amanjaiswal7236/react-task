import { FunctionComponent } from "react";
import GroupComponent1 from "./GroupComponent1";

export type FeaturesTestimonialsType = {
  className?: string;
};

const FeaturesTestimonials: FunctionComponent<FeaturesTestimonialsType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[17px] box-border max-w-full mt-[-33px] text-left text-5xl text-base-black font-text-sm-semibold ${className}`}
    >
      <div className="flex-1 bg-grey-white flex flex-row items-start justify-center py-[100px] px-5 box-border shrink-0 max-w-full mq1050:pt-[53px] mq1050:pb-[65px] mq1050:box-border mq450:pb-[42px] mq450:box-border">
        <div className="h-[818px] w-[1440px] relative bg-grey-white hidden max-w-full" />
        <div className="w-[1240px] flex flex-col items-start justify-start gap-[24px] max-w-full z-[1]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full mq1050:flex-wrap">
            <GroupComponent1
              groupsBlack24dp11="/groups-black-24dp-1-1.svg"
              people="People"
              findATeacherCoachOrExpert="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
              connect="Connect"
            />
            <GroupComponent1
              groupsBlack24dp11="/location-on-black-24dp-1.svg"
              people="Place"
              findATeacherCoachOrExpert="Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."
              connect="Meet up"
              propGap="32px"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full mq1050:flex-wrap">
            <GroupComponent1
              groupsBlack24dp11="/shopping-basket-black-24dp-2-1.svg"
              people="Product"
              findATeacherCoachOrExpert="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."
              connect="Get it"
              propGap="32px"
            />
            <GroupComponent1
              groupsBlack24dp11="/event-available-black-24dp-2.svg"
              people="Program"
              findATeacherCoachOrExpert="Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
              connect="Attend"
              propGap="59px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTestimonials;
