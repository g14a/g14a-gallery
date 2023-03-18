import React from "react";
import "./About.css";

const AboutPage = () => {
  return (
    <>
      <section className="about">
        <div className="main">
          <img src="https://picsum.photos/500/500"></img>
          <div className="about-text">
            <h1>Hello!</h1>
            <h5>Software Engineer<span> & Photographer </span></h5>
            <p>
              I am Rahul Yaduvanshi works at Css3 Transition since last 3 years.
              We are here to provide touch notch solution for your website or
              web application that helps you to make your website look
              attractive & efficient in handling by creating usefull plugins
              thats you need. We are here to serve you next level tutorial that
              currently in trend to match you with your expertise. Css3
              transition is a learning website. where you can find many good
              quality content related to web development and tutorials about
              plugins. here we are using html, html5, css, css3, jquery &
              javascript along with inspirational UI design layout by
              professionals by using Photoshop and adobe allustrator.
            </p>
            <button type="button">Reach out</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
