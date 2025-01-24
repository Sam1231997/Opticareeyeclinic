import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Cards = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Animates every time it comes into view
    threshold: 0.2,     // Animation triggers when 20% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1.5 }, // Adjust speed if needed
      });
    } else {
      controls.start({
        opacity: 0,
        x: inView ? 0 : -100, // Reset when out of view
      });
    }
  }, [controls, inView]);

  return (
    <section id="feature" ref={ref}>
      <div className="relative container flex flex-col max-w-6xl mx-auto my-32 md:space-y-0 px-6 text-gray-900 md:flex-row md:px-0 space-y-10">
        {/* Image */}
        
        <motion.img
          src="/images/mbah1.png "
          alt=""
          initial={{ opacity: 0, x: -100 }}  // Starts from the left
          animate={controls}
          className="md:w-1/2 h-auto border-purple-400 border-2 rounded-full shadow-2xl shadow-purple-400"
       
       
       />
        

        {/* Text Container */}
        <motion.div
          className="md:absolute md:right-0 top-28 border-purple-400 border-2 px-4 pt-4 pb-5 rounded-md shadow-2xl shadow-purple-400"
          initial={{ opacity: 0, x: 100 }}  // Starts from the right
          animate={controls}
        >
          <h2 className="max-w-lg  font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-4 md:text-left">
            About us
          </h2>
          <h4 className="max-w-lg   font-sans text-xl text-center text-gray-900 font-bold md:text-xl md:mt-4 md:text-left">
          The Best Eye Clinic Service for Your Eyes.
          </h4>

<p className="max-w-md text-center md:text-left">
Vision plays a vital role throughout our lives, taking this into account, OptiCare exist to deliver world class eye care services.
Recognized among one of the best Eye care centers in Port Harcourt, Nigeria. OptiCare Eye Clinic offers you excellent eye services and treatments under the guidance of qualified consultants.
<p>Our facility is equipped with the most up-to-date technology to ensure the best eye care possible.</p>
            </p>
            
            <Link to="/about"> <button className="p-2  mt-4 font-bold text-white mx-auto rounded-full w-40 bg-black hover:scale-95">
          See more
        </button> </Link>
        
        </motion.div>
      </div>
    </section>
  );
};

export default Cards;
