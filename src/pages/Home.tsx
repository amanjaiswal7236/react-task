import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import FeaturesTestimonials from "../components/FeaturesTestimonials";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Home: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-grey-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <NavBar/>
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">
        <FrameComponent />
        <FeaturesTestimonials />
        <section className="self-stretch bg-grey-white flex flex-row items-start justify-start pt-4 px-0 pb-[30px] box-border shrink-0 max-w-full z-[2] mt-[-33px] text-left text-lg text-grey-darkest font-text-sm-semibold mq750:pb-5 mq750:box-border">
          <div className="h-[330px] w-[1240px] relative hidden max-w-full">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-grey-white box-border w-full h-full border-[1px] border-solid border-grey-light" />
            <div className="absolute top-[174px] left-[40px] tracking-[0.02em] leading-[30px] font-light whitespace-pre-wrap inline-block w-[1160px]">
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
            </div>
            <div className="absolute top-[40px] left-[459px] w-[322px] h-[54px] text-17xl">
              <div className="absolute top-[0px] left-[70px] font-semibold mq1050:text-10xl mq450:text-3xl">
                Add your own
              </div>
              <img
                className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[54px] overflow-hidden"
                alt=""
                src="/add.svg"
              />
            </div>
            <div className="absolute top-[250px] left-[40px] rounded-lg bg-grey-white box-border w-[122px] h-10 whitespace-nowrap text-sm text-purple-1 border-[1px] border-solid border-purple-1">
              <div className="absolute top-[12px] left-[29px] leading-[16px] font-semibold inline-block min-w-[63px]">
                Add new
              </div>
            </div>
          </div>
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
