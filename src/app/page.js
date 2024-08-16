import AboutUs from "@/Components/About";
import ChooseUs from "@/Components/ChooseUs";
import Footer from "@/Components/footer";
import Header from "@/Components/Header";
import Hero from "@/Components/HeroSection";
import ImageGallery from "@/Components/ImageGallery";

import Map from "@/Components/Map";
import Progress from "@/Components/Progress";
import Service from "@/Components/Service";

import Testimonial from "@/Components/Testimonial";
import TopHeader from "@/Components/topHeader";




export default function Home() {
  return (
    <div >
     <TopHeader/>
     <Header/>
     <Hero/>
     <Service/>
     <ChooseUs/>
     <Progress/>
<ImageGallery limit={5}/>
     <Testimonial/>
     <Map/>
     <Footer/>


      </div>
  );
}
