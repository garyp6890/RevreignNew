import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { SocialStats } from '../../types';
import 'swiper/css';
import 'swiper/css/navigation';

interface SocialStatsSliderProps {
  socialData: SocialStats;
}

const SocialStatsSlider: React.FC<SocialStatsSliderProps> = ({ socialData }) => {
  const stats = [
    { platform: 'TikTok', followers: socialData.tiktok_followers },
    { platform: 'Instagram', followers: socialData.instagram_followers },
    { platform: 'YouTube', followers: socialData.youtube_followers }
  ];

  return (
    <div className="mb-6">
      {/* Desktop Grid */}
      <div className="hidden sm:grid sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.platform} className="bg-rev-beige/20 p-4 rounded-lg text-center">
            <h3 className="font-bold text-rev-orange text-xl mb-1">
              {stat.platform}
            </h3>
            <p className="text-2xl font-bold text-rev-brown">
              {stat.followers}
            </p>
            <p className="text-gray-600 text-sm">followers</p>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="sm:hidden relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
          }}
          className="w-full"
        >
          {stats.map((stat) => (
            <SwiperSlide key={stat.platform}>
              <div className="bg-rev-beige/20 p-4 rounded-lg text-center">
                <h3 className="font-bold text-rev-orange text-xl mb-1">
                  {stat.platform}
                </h3>
                <p className="text-2xl font-bold text-rev-brown">
                  {stat.followers}
                </p>
                <p className="text-gray-600 text-sm">followers</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-rev-brown/50 rounded-full p-1 cursor-pointer text-white hover:bg-rev-brown transition-colors">
          <ChevronLeft size={20} />
        </div>
        <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-rev-brown/50 rounded-full p-1 cursor-pointer text-white hover:bg-rev-brown transition-colors">
          <ChevronRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(SocialStatsSlider);