import React from 'react'
import ProjectImage1 from '../assets/ProjectImage1.png'
import Portfolio from '../assets/Portfolio.png'
import ncnews from '../assets/ncnews.png'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
        <p className='project'>My Projects</p>

        <div className='project-display'>
            <div className='project-card'>
            <img src={ProjectImage1} alt="" className='project-img' />
            <p className='para-title'>NC-News</p>
            <p className='para'>A news blog where you find engaging articles to stay keep you updated</p>
            <button className='btn'>See Here</button>
            </div>

            <div className='project-card'>
            <img src={ncnews} alt="" className='project-img'/>
            <p className='para-title'>Backend Project</p>
            <p className='para'>A news blog where you find engaging articles to stay keep you updated</p>
            <a href="https://nc-news-db.onrender.com/api"><button className='btn'>See Here</button></a>
            </div>

            <div className='project-card'>
            <img src={Portfolio} alt="" className='project-img'/>
            <p className='para-title'>Portfolio</p>
            <p className='para'>A Portfolio designed with react and css used to showcase my skills and project</p>
            <a href=""><button className='btn'>See Here</button></a>
            </div>

        </div>

       

    </div>
  )
}

export default Projects