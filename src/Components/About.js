import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/profilepic.jpg"
              alt="Vincent Chau Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              Hello there! I'm a Software Engineer currently working at Classy, a San Diego-based startup working on providing nonprofit organizations with the best-in-class fundraising platform. Check out our company's mission at <a href="https://classy.org">Classy.org</a>!
            </p>
            <p>
              Some of my career interests include Augmented/Virtual Reality, Computer Vision, Web/Mobile development, and seeing what the metaverse has in store. 
            </p>
            <p>
              Outside of work, you can find me rock climbing, surfing, and shooting videos/photos.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
