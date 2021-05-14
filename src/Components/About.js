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
              Hi! I'm Vincent, a Mathematics - Computer Science grad from UCSD. I am currently working as a Systems Engineer at Motorola Solutions.
            </p>
            <p>
              I have a strong interest in software development, having done projects relating to Virtual and Augmented Reality, Mobile iOS and Android Development, and Game Development using Unity and Unreal Engine 4. Check out my projects below!
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
