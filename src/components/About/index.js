import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          
          I am a full stack developer looking to transform and define current and new applications and websites creating a more effective and dynamic user interaction. I am currently taking a full stack developing bootcamp at the University of Texas gaining knowledge on newly developed skills in JavaScript, CSS, React.js and responsive web design, MERN.
      </p>
      </div>
    </section>
  );
}

export default About;