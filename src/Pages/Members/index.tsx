import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { api } from '../../lib/axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Back, CardComponent, ImageComponent, ListMembers, PageMenber, Title } from './styles';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

interface Membro {
    name: string
    role: string
    description: string
    photoUrl: string

}

export function MemberCard(){
    const [membros, Setmembros] = useState<Membro[]>([])
    const state = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        console.log("state", state)

        Setmembros(state.state)
    },[])
    
    return(
        <>
            <PageMenber>
                    <Back>
                        <ArrowLeft color="royalblue" size={32} onClick={() => navigate('/')}/>
                    </Back>
               <Title> 
                    <h1>Membros</h1>
                </Title> 

                <ListMembers>

                {
                    membros.map((membro) => {
                    return  <CardComponent key={membro.name}>
                            <ImageComponent src={membro.photoUrl} />
                            <CardComponent.Body>
                                <CardComponent.Title>{membro.name}</CardComponent.Title>
                                <CardComponent.Text style={{whiteSpace: "wrap"}}>
                                    {membro.description}
                                </CardComponent.Text>
                            </CardComponent.Body>
                            {/* <Button variant="primary" onClick={() => GetMembersData(project.members)} style={{display:"flex", marginBottom: 16}}>MEMBROS</Button> */}
                        </CardComponent>
                    })
                }

                </ListMembers>
            </PageMenber>
        </>
    )
}