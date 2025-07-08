import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section id="about" className="about-section desktop-scroll-margin">
      <div className="about-title">
        <span>ABOUT US</span>
      </div>
      <div className="about-boxes">
        <div className="about-box venue-box">
          <div className="box-title">VENUE</div>
          <div className="box-content">
            <p>
              <a
                href="https://maps.app.goo.gl/gWoxgNcNxHMZJ4VS7"
                target="_blank"
                rel="noopener noreferrer"
                className="venue-link"
                style={{}}
              >
                Thadomal Shahani Engineering College, Bandra
              </a>
            </p>
            <address className="venue-address">
              W, P. G. Kher Marg
              <br />
              (32nd Road, Marg, Off Linking Rd, TPS III,
              <br />
              Bandra West, Mumbai,
              <br />
              Maharashtra 400050
            </address>
          </div>
        </div>
        <div className="about-box codetantra-box">
          <div className="box-title">CODETANTRA</div>
          <div className="box-content">
            <p>
              CodeTantra is the official committee of the AI &amp; DS department
              at TSEC, dedicated to helping students improve their technical
              skills, foster innovation, and build a strong coding community. We
              organize workshops, hackathons, and events to empower aspiring
              technologists and support their journey from beginner to pro!
            </p>
          </div>
        </div>
        <div className="about-box event-box">
          <div className="box-title">NFC 4.0</div>
          <div className="box-content">
            <p>
              NFC 4.0 is a hybrid hackathon that brings together creative minds
              to solve real-world problems. Compete online or on campus,
              collaborate with peers, and showcase your skills for a chance to
              win big. Whether you code from home or join us at the venue, the
              challenge is on!
            </p>
          </div>
        </div>
      </div>

      <div className="about-title" style={{ marginTop: "48px" }}>
        <span>PRIZES</span>
      </div>
      <div className="about-boxes">
        <div className="about-box prize-box">
          <div className="box-title">
            1<sup>st</sup> Place
          </div>
          <div className="box-content">
            <p className="prize-amount">₹ 30,000</p>
          </div>
        </div>
        <div className="about-box prize-box">
          <div className="box-title">
            2<sup>nd</sup> Place
          </div>
          <div className="box-content">
            <p className="prize-amount">₹ 15,000</p>
          </div>
        </div>
        <div className="about-box prize-box">
          <div className="box-title">
            3<sup>rd</sup> Place
          </div>
          <div className="box-content">
            <p className="prize-amount">₹ 10,000</p>
          </div>
        </div>
        <div className="about-box prize-box">
          <div className="box-title">Online Prize</div>
          <div className="box-content">
            <p className="prize-amount">₹ 15,000</p>
          </div>
        </div>
      </div>
      <div className="about-bg-pixels"></div>
    </section>
  );
}

export default AboutUs;
