// File: src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Users,
  ShoppingBag,
  Share2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useTheme } from '../context/ThemeContext';
import socialData from '../data/social.json';
import homeContent from '../data/home.json';

const Home: React.FC = () => {
  const { isCavemanMode } = useTheme();
  if (!homeContent.enabled) return null;

  const {
    hero,
    about,
    partnerships,
    storefronts,
    featuredMerch
  } = homeContent;

  return (
    <div className="bg-rev-light">
      {/* ================= Hero Section ================= */}
      {hero.enabled && (
        <section className="relative h-[40vh] min-h-[270px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-black"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.4)), url('${hero.backgroundImage}')`
            }}
          />
          <div className="container mx-auto px-4 relative z-20 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 font-heading">
                {hero.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-4 text-gray-200">
                {hero.subtitle}
              </p>
              <p className="text-base sm:text-lg mb-4 text-gray-200 max-w-2xl">
                {hero.description}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/links"
                  className="bg-rev-orange hover:bg-rev-yellow text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-colors inline-flex items-center text-sm sm:text-base"
                >
                  <Share2 className="mr-2" size={18} />
                  {hero.cta1Text}
                </Link>
                <Link
                  to="/partnerships"
                  className="bg-white hover:bg-rev-beige text-rev-brown font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-colors inline-flex items-center text-sm sm:text-base"
                >
                  <TrendingUp className="mr-2" size={18} />
                  {hero.cta2Text}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= About Section ================= */}
      {about.enabled && (
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <img
                  src={about.image}
                  alt={about.altText || 'About Image'}
                  className="rounded-lg shadow-lg w-full h-auto max-h-[500px] object-cover"
                />
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-rev-brown font-heading">
                  {about.title}
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {about.description}
                </p>

                {/* Social Stats (if enabled) */}
                {about.showSocialStats && (
                  <div className="mb-6">
                    <div className="hidden sm:grid sm:grid-cols-3 gap-4">
                      <div className="bg-rev-beige/20 p-4 rounded-lg text-center">
                        <h3 className="font-bold text-rev-orange text-xl mb-1">
                          TikTok
                        </h3>
                        <p className="text-2xl font-bold text-rev-brown">
                          {socialData.tiktok_followers}
                        </p>
                        <p className="text-gray-600 text-sm">followers</p>
                      </div>
                      <div className="bg-rev-beige/20 p-4 rounded-lg text-center">
                        <h3 className="font-bold text-rev-orange text-xl mb-1">
                          Instagram
                        </h3>
                        <p className="text-2xl font-bold text-rev-brown">
                          {socialData.instagram_followers}
                        </p>
                        <p className="text-gray-600 text-sm">followers</p>
                      </div>
                      <div className="bg-rev-beige/20 p-4 rounded-lg text-center">
                        <h3 className="font-bold text-rev-orange text-xl mb-1">
                          YouTube
                        </h3>
                        <p className="text-2xl font-bold text-rev-brown">
                          {socialData.youtube_followers}
                        </p>
                        <p className="text-gray-600 text-sm">followers</p>
                      </div>
                    </div>

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
                        <SwiperSlide>
                          <div className="bg-rev-beige/20 p-4 rounded-lg text-center">
                            <h3 className="font-bold text-rev-orange text-xl mb-1">
                              TikTok
                            </h3>
                            <p className="text-2xl font-bold text-rev-brown">
                              {socialData.tiktok_followers}
                            </p>
                            <p className="text-gray-600 text-sm">followers</p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="bg-rev-beige/20 p-4 rounded-lg text-center">
                            <h3 className="font-bold text-rev-orange text-xl mb-1">
                              Instagram
                            </h3>
                            <p className="text-2xl font-bold text-rev-brown">
                              {socialData.instagram_followers}
                            </p>
                            <p className="text-gray-600 text-sm">followers</p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="bg-rev-beige/20 p-4 rounded-lg text-center">
                            <h3 className="font-bold text-rev-orange text-xl mb-1">
                              YouTube
                            </h3>
                            <p className="text-2xl font-bold text-rev-brown">
                              {socialData.youtube_followers}
                            </p>
                            <p className="text-gray-600 text-sm">followers</p>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                      <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-rev-brown/50 rounded-full p-1 cursor-pointer text-white hover:bg-rev-brown transition-colors">
                        <ChevronLeft size={20} />
                      </div>
                      <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-rev-brown/50 rounded-full p-1 cursor-pointer text-white hover:bg-rev-brown transition-colors">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </div>
                )}

                <Link
                  to="/links"
                  className="inline-flex items-center text-rev-orange hover:text-rev-brown font-semibold"
                >
                  Follow me across platforms <Share2 className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= Featured Merchandise Section ================= */}
      {featuredMerch.enabled && featuredMerch.items.length > 0 && (
        <section className="py-16 bg-rev-beige/30">
          <div
            className="container mx-auto px-4"
            style={
              !isCavemanMode
                ? ({
                    '--rev-brown': '#3A2A1B',
                    '--rev-beige': '#D8C3A5',
                    '--rev-orange': '#E8871E',
                    '--rev-yellow': '#FFC107',
                    '--rev-dark': '#1E1810',
                    '--rev-light': '#F5F0E8'
                  } as React.CSSProperties)
                : undefined
            }
          >
            <h2 className="text-3xl font-bold mb-2 text-rev-brown text-center font-heading">
              {featuredMerch.title}
            </h2>
            <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
              {featuredMerch.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {featuredMerch.items.map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-80 bg-rev-brown flex justify-center items-center p-4">
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <img
                        src={item.image1}
                        alt={item.title + ' Design'}
                        className="h-full object-contain"
                      />
                      <img
                        src={item.image2}
                        alt={item.title + ' Model'}
                        className="h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-rev-brown">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <a
                      href={item.buyLink}
                      className="bg-rev-orange hover:bg-rev-yellow text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors"
                    >
                      <ShoppingBag className="mr-2" size={18} />
                      {item.ctaText || 'Buy Now'}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= Partnership Section ================= */}
      {partnerships.enabled && (
        <section className="py-16 bg-rev-brown text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 font-heading">
                  {partnerships.title}
                </h2>
                <p className="mb-6 text-gray-200 leading-relaxed">
                  {partnerships.description}
                </p>

                <div className="bg-rev-dark/50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3 text-rev-orange">
                    Key Engagement Stats
                  </h3>
                  <ul className="space-y-2 text-gray-200">
                    {partnerships.stats.map((stat, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="bg-rev-orange rounded-full p-1 mr-2"></span>
                        {stat}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/partnerships"
                  className="bg-rev-orange hover:bg-rev-yellow text-white font-bold py-3 px-6 rounded inline-flex items-center transition-colors"
                >
                  <Users className="mr-2" size={18} />
                  {partnerships.ctaText}
                </Link>
              </div>

              <div className="w-full md:w-1/2">
                <img
                  src={partnerships.image}
                  alt={partnerships.altText || 'Partnership Image'}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= Storefronts Section ================= */}
      {storefronts.enabled && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-rev-brown text-center font-heading">
              {storefronts.title}
            </h2>
            <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
              {storefronts.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {storefronts.items.map((card, idx) => (
                <div key={idx} className="bg-rev-beige/20 rounded-lg p-6 text-center">
                  <img
                    src={card.image}
                    alt={card.label}
                    className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2 text-rev-brown">{card.label}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <Link
                    to={card.linkTo}
                    className="bg-rev-brown hover:bg-rev-dark text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors"
                  >
                    {card.linkLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
