import './css/ProjectCard.css';
import { useState } from "react";
import Carousel from './Carousel'


const ProjectCard = ({ title, desc, images, links, stack }) => {
  return (
    <div className="project-card">
      <p className="title">{title}</p>

<Carousel images={images} className="carousel"/>

      <p className="desc">{desc}</p>
      <div className="button-container">
        {links.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
            <button>{link.label}</button>
          </a>
        ))}
      </div>
      <p>Tech Stack: {stack.join(', ')}</p>
    </div>
  );
};



export default ProjectCard;