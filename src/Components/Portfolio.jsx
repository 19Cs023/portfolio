/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/martin-shreder-5Xwaj9gaR0g-unsplash.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "E-commerce website with MERN stack 🎉",
    description:
      "this is an website that people can sell and buy items from this app with online transaction.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "ERP/CRM application with MERN stack 🚀",
    description:
      "this app for the companies that they want to grow. In this app you can manage your employees, customers, products, sales, and more.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://19cs023.github.io/portfolio/",
  },
  {
    title: "expense tracker app with MERN stack 🚀",
    description:
      "this app for the people that they want to track their expenses. In this app you can add your expenses and see your expenses in a chart.",
    url: "https://github.com/19Cs023/expense-tracker",
  },
  {
    title: "blog app with MERN stack 🚀",
    description:
      "this app for the people that they want to write their blogs. In this app you can write your blogs and see your blogs in a list.",
    url: "https://github.com/19Cs023/tech-blogs",
  },
  {
    title: "todo app with MERN stack 🚀",
    description:
      "this app for the people that they want to manage their tasks. In this app you can add your tasks and see your tasks in a list.",
    url: "https://github.com/19Cs023/todo-app",
  },
  {
    title: "AI Summerizer MERN stack 🚀",
    description:
      "this app for the people that they want to summerize their texts. In this app you can add your texts and see your summerized texts in a list.",
    url: "https://github.com/19Cs023/summeriser-app",
  },
  {
    title: "food delivery app with MERN stack 🚀",
    description:
      "this app for the people that they want to order food from their favorite restaurants. In this app you can browse restaurants, order food, and track your order.",
    url: "https://github.com/19Cs023/food-delivery",
  },
  {
    title: "skeleton code for MERN stack 🚀",
    description:
      "this is a skeleton code for the MERN stack. It includes the basic structure for a MERN application.",
    url: "https://github.com/19Cs023/mern-skeliton",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
