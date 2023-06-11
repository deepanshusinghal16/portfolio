import React from 'react'
  import Title from '../layouts/Title'
import { Card } from './Card'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";


export const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20   border-b-[1px]">
      <Title title="Features" des="What I do"/>
      
    <div className='grid grid-cols-3 gap-20'>
       <Card id={1} title="Business Stratagy" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" />

       <Card id={2} title="App Development" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" icon={<AiFillAppstore />}/>
    
       <Card id={3} title="SEO Optimisation" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" icon={<SiProgress />}/>
    
       <Card id={4} title="Mobile Development" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" icon={<FaMobile />}/>
    
       <Card id={5} title="UX Design" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" icon={<SiAntdesign />}/>
    
       <Card id={6} title="Hosting Websites" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad" icon={<FaGlobe />}/>
    </div>

    

     
     
     
     </section>
  )
}
