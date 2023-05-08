import React from "react";
import HeaderTop from "../common/header/HeaderTop";
import HeaderBottomOne from "../common/header/HeaderBottomOne";
import HeroStyleOne from "../components/hero/HeroStyleOne";
import ServiceStyleOne from "../components/services/ServiceStyleOne";
import HomeOneAbout from "../components/home1/HomeOneAbout";
import HomeOneService from "../components/home1/HomeOneService";
import FunFact from "../components/fun-fact/FunFact";
import HomeOneBookAppointment from "../components/home1/HomeOneBookAppointment";
import FooterOne from "../common/footer/FooterOne";

const HomeDefault = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBottomOne />
      <HeroStyleOne />
      <ServiceStyleOne />
      <HomeOneAbout />
      <HomeOneService />
      <FunFact />
      <HomeOneBookAppointment />
      <FooterOne />
    </>
  );
};

export default HomeDefault;
