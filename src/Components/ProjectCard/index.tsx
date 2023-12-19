import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import { CentralizeButton, ContainerDateProject, DateProject, LabelProject, Tag, TagsView, TimeProject } from './styles';

export function ProjectCard({project}: any){
    console.log("project", project)
    const [tags, SetTags] = useState([...project.tags])

    console.log("tags", tags)

    const navigate = useNavigate();
    var StartParsedDate = parseISO(project.startDate);

    var EndParsedDate = parseISO(project.endDate);

    
    const formattedStartDate = format(
        StartParsedDate, 
        "dd/MM/yyyy"
    );

    const formattedEndDate = format(
        EndParsedDate, 
        "dd/MM/yyyy"
    );



    console.log("formattedDate", formattedStartDate)

    function GetMembersData(data: any){
        SetTags(data.tags)
        navigate('/membros', {"state" : data});
        // console.log("tags", tags)
    }

    return(
        <>
        <Card style={{ width: '24rem', height: "48rem", display: 'flex', alignItems:"center"}}>
            <img src={project.iconUrl} style={{width: 160, height: 'auto'}}/>
            <Card.Body>

                <Card.Text>
                    {project.companyName}
                </Card.Text>

                <Card.Title>{project.name}</Card.Title>
                
                <Card.Text>
                    {project.description}
                </Card.Text>

                <TagsView>
                {
                    tags.map((tag) => {
                    return  <Tag>{tag}</Tag>
                    })
                }
                </TagsView>
                
                <TimeProject>
                    <ContainerDateProject>
                        <LabelProject>Data de início</LabelProject>
                        <DateProject>{formattedStartDate}</DateProject>
                    </ContainerDateProject>

                    <ContainerDateProject>
                        <LabelProject>Data de término</LabelProject>
                        <DateProject>{formattedEndDate}</DateProject>
                    </ContainerDateProject>

                </TimeProject>
                    <CentralizeButton>
                        <Button variant="primary" onClick={() => GetMembersData(project.members)} style={{display:"flex", marginBottom: 16}}>MEMBROS</Button>
                    </CentralizeButton>
            </Card.Body>
        </Card>
        </>
    )
}