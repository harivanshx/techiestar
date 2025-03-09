import React from "react";
import vg from "../assets/2.webp";
// import {Google} from "React-icons-ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { SiMonica } from "react-icons/si";




const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TecheStar</h1>
          <p>Solutions to all your it needs</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="" />
        <div>
          <p>
            We're the only solution to the attack problems you face every day.
            We are the leading tech company whose aim is to increase the problem
            solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>
          At TechieStar, we are a passionate team dedicated to delivering innovative IT solutions. We specialize in web and mobile development, cloud services, cybersecurity, and AI applications — helping businesses grow and succeed.
<br />
<br />
Our collaborative approach ensures we understand your unique goals, crafting tailored digital products that drive results. More than just a service provider, we’re your trusted technology partner, committed to your long-term success.
<br />
<br />
Let’s build the future, together.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay:"0.3s",

            }}>
              <AiFillGoogleCircle/>
              <p>Google</p>

            </div>
         
            <div style={{animationDelay:"1s",

            }}>
              <SiX/>
              <p>Google</p>

            </div>
         
            <div style={{animationDelay:"0.6s",

            }}>
              <FaInstagramSquare/>
              <p>Instagram</p>

            </div>
         
            <div style={{animationDelay:"1.5s",

            }}>
              <SiMonica/>
              <p>Panda</p>

            </div>
         
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
