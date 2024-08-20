
import ChooseUs from "@/Components/ChooseUs";

import Hero from "@/Components/HeroSection";
import HomeAbout from "@/Components/HomeAbout";
import ImageGallery from "@/Components/ImageGallery";

import Map from "@/Components/Map";
import Progress from "@/Components/Progress";
import Service from "@/Components/Service";

import Testimonial from "@/Components/Testimonial";





export default function Home() {
  return (
    <div >

    
     <Hero/>
     <HomeAbout/>
     <Service/>
     <ChooseUs/>
     <Progress/>
<ImageGallery limit={5}/>
     <Testimonial/>
     <Map/>
    


      </div>
  );
}
