import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import mongodb from '../assets/mongodb.png'
import node from '../assets/node.png'

import reactimg from '../assets/reactimg.png'
import typescript from '../assets/typescript.png'

const Tech = () => {
  return (
    <div id='skills'className='tech-session'>
        <h2 className='project'>My Tech Skills</h2>
        
        <div className='tech-container'>

        <div className='techskills'>
            <div> 
                <img src={css} alt="" className='tech-img'/>
                <p className='tech-name'>CSS3</p>
            </div>

            <div>
         <img src={typescript} alt="" className='tech-img'/>
       <p className='tech-name'>TypeScript</p>
       </div> 

       <div>
        <img src={html} alt="" className='tech-img'/>
        <p className='tech-name'>HTML</p>
       </div>
       
       <div>
        <img src={javascript} alt="" className='tech-img'/>
       <p className='tech-name'>Javascript</p>
       </div>
        

        <div>
             <img src={mongodb} alt="" className='tech-img'/>
        <p className='tech-name'>MongoDb</p>
        </div>
       
       <div>
       <img src={node} alt="" className='tech-img'/>
       <p className='tech-name'>Node.js</p>
       </div>
       
        <div> 
            <img src={reactimg} alt="" className='tech-img' id='tech-img-react'/>
        <p className='tech-name-react'>React</p>
        </div>
       
       
       
        </div>

        </div>
        
        
    </div>
  )
}

export default Tech