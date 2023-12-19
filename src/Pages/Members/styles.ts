import Card from 'react-bootstrap/Card';
import styled from "styled-components";

export const PageMenber = styled.div`

    display: flex;
    flex-wrap: wrap;
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const Back = styled.div`
    display: flex;
    align-items: flex-end;
    left: 120%;
    width: 50%;
`

export const ListMembers = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;

`

export const CardComponent = styled(Card)`
    display: flex;
    align-items:center; 
    min-height: 360px;
    max-width: 320px;
`

export const ImageComponent = styled.img`
    width: 80px;
    height: auto;
`

