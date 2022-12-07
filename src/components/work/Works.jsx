import React,{useState,useEffect} from 'react'
import { projectsData, projectsNav } from './Data'
import WorkItems from './WorkItems'
import { motion } from 'framer-motion';

const Works = ({variants}) => {
    const [item, setItem] = useState({name: 'web'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0)

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData);
            }else {
                const newProjects = projectsData.filter((project) => {
                    return project.category.toLowerCase() === item.name;
                });
                setProjects(newProjects);
            }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index)
    };
    

  return (
    <motion.div>
    <motion.div variants={variants} className="work__filters">
        {projectsNav.map((item, index) => (
                <span onClick={(e)=> handleClick(e, index)} 
                className={`${active === index ? 'active-work' : ''} work__item`} key={index}>
                    {item.name}
                </span>
                )
        )}
    </motion.div>

    <motion.div variants={variants} className="work__container container grid">
        {projects.map((item) => {
            return <WorkItems item={item} key={item.id} />
        })}


    </motion.div>
    </motion.div>
  )
}

export default Works