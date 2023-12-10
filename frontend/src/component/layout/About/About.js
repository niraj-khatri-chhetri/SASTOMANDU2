import React from 'react';
import './aboutSection.css';
import NirajImg from '../../../images/niraj.jpg';
import SudipImg from '../../../images/sudip.jpg';
import DipendraImg from '../../../images/dipendra.jpg';

const About = () => {
  return (
    <>
      <h2 className="about-us">About Us</h2>
      <div className="underline-about"></div>
      <section id="about">
        <div className="person">
          <div className="container-about">
            <div className="container-inner">
              <img className="circle" src={NirajImg} alt="Person 1" />
            </div>
          </div>
          <div className="divider"></div>
          <div className="name">Niraj</div>
          <div className="title-about">Backend Developer</div>
        </div>
        <div className="person">
          <div className="container-about">
            <div className="container-inner">
              <img className="circle" src={SudipImg} alt="Person 2" />
            </div>
          </div>
          <div className="divider"></div>
          <div className="name">Sudeep</div>
          <div className="title-about">Frontend Developer</div>
        </div>
        <div className="person">
          <div className="container-about">
            <div className="container-inner">
              <img className="circle" src={DipendraImg} alt="Person 3" />
            </div>
          </div>
          <div className="divider"></div>
          <div className="name">Dipendra</div>
          <div className="title-about">API design and testing</div>
        </div>
      </section>
    </>
  );
};

export default About;
