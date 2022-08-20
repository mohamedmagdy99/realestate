import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import './Projects.css';
const Projects = () => {
       const [Projects,setProjects] = useState(null);
       useEffect(() => {
              fetch('https://realestate99.herokuapp.com/Projects/')
                .then(res => {
                     return res.json();
                     })
                .then(data => {
                  setProjects(data);
                })
       }, [])
       return ( 
              <div className="Projects">
                     <Navbar />
                     <div className="flex-wrapper">
                     <div className="content">
                     
                     {Projects && Projects.map(project=>(
                                   <div className="preview" key={project.id}>
                                          <h2>{project.Name}</h2>
                                          <h4>{project.City}</h4>
                                          <p>{project.Details}</p>
                                          <img src={project.Picture} alt="projimg"/>
                                   </div>
                            ))}
                     </div>
                     </div>
                     <Footer />
              </div>
        );
}
 
export default Projects;