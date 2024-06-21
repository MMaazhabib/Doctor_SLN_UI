import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        
      >
        
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              {/* <img src={patientAvatar} alt="patient-avatar" /> */}
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  M.Maaz Habib
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I have taken medical services from them. They treat so well and
              they are providing the best medical services.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              {/* <img src={patientAvatar} alt="patient-avatar" /> */}
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Umar Sarwar
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I have taken medical services from them. They treat so well and
              they are providing the best medical services.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              {/* <img src={patientAvatar} alt="patient-avatar" /> */}
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Ali Rehman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I have taken medical services from them. They treat so well and
              they are providing the best medical services.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              {/* <img src={patientAvatar} alt="patient-avatar" /> */}
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Zman amin
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I have taken medical services from them. They treat so well and
              they are providing the best medical services.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              {/* <img src={patientAvatar} alt="patient-avatar" /> */}
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Hammad
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I have taken medical services from them. They treat so well and
              they are providing the best medical services.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              {/* <img src={patientAvatar} alt="patient-avatar" /> */}
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Waqar
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              I have taken medical services from them. They treat so well and
              they are providing the best medical services.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
