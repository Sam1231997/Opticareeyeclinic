
import AccordionList from "./Accordion";
import Service from "./Service";
import Others from "./Others";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Why from "./Why";

const Services =()=>{
    return(
        <>
        <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/images/image1.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-35"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-6xl text-center pt-60">
        Services
      </div>
    </div>
    <Gallery/>
    <Service/>
    <AccordionList/>
  
    <Others/>
   <Why/>
    <Footer/>
   
   </>
    )
}
export default Services;