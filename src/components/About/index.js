import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          I am a full stack developer instructed by the University of Texas with their  bootcamp coding program. This program helped me setting knowledge on newly development skills in JavaScript, CSS, React.js and responsive web design, MERN. With this knowledge I am looking to transform and define current and new applications, creating a more effective and dynamic user interaction. I am looking forward to join a developer company that would appreciate innovation, interactivity and desirable web design which is one of my biggest passions.  Altogether with this company, I would look to setup better solutions to a competitive and rapid changing developer world.
      </p>
      </div>
    </section>
  );
}

export default About;