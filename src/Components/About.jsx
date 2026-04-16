/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/daniel-josef-AMssSjUaTY4-unsplash.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). I thrive on building scalable, user-friendly web applications and am constantly eager to learn and adopt new technologies to solve complex problems.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "MERN Stack Development",
  "User Interface Design",
  "Responsive Web Design",
  "Representational State Transfer (REST)",
  "API Integration",
  "Database Management",
  "GraphQL",
  "Containerization",
  "Version Control",
  "Serverless Architecture",
  "Ai/ML Integration",
  "testing and debugging",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems that are in the way of my development. I am passionate about the things i love the most, so I will keep progrssing more and more in the feuture.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          width: "90%",
          maxWidth: "800px",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: "auto 300px",
            fontSize: "1.15rem",
            margin: "2rem auto",
            gap: "2rem",
            maxWidth: "600px",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
