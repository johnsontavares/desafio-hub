import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { api } from '../../lib/axios';
import { ProjectCard } from '../../Components/ProjectCard';
import { ComponenteList, Title } from './styles';

export function ListProject(){
    const [projects, SetProjects] = useState([])

    async function fetchProjects(){
        const response = await api.get("/projects", {
    
        })
        SetProjects(response.data)
    }
    
      useEffect(() => {
        fetchProjects()
      },[])

    return(
        <>
            <Title>Lista de Projetos</Title>
            <ComponenteList>{

                    projects.map((project) => 
                        <ProjectCard project={project} />
                    )
            }
            </ComponenteList>
            
        </>
    )
}