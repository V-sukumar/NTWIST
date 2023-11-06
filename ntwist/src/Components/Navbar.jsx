import React, { useEffect, useState } from "react";
import './Style.css';

export const Navbar=()=>{
    const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(scrolling);
    return(
        <div id="cont">
        <div className= {scrolling?"parent_active":"parent"}>
            <div className="logo" >
                <img  src={scrolling?"https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png":"https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"} alt="err" />
            </div>
            <div className={scrolling?"side1 side1_active":"side1"}>
                <h3>Home</h3>
                <h3>Industries</h3>
                <h3>AI Software</h3>
                <h3>Blog</h3>
                <h3>Contact Us</h3>
            </div>
        </div>
    </div>
    )
      
    
}
