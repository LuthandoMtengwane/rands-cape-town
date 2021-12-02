import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;

    ${mobile({flexDirection:"column"})};
    ${mobile({textAlign:"center"})};
    ${mobile({marginTop:"50px"})};
`;
const LeftContainer = styled.div`
  
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    ${mobile({width:"100%"})};
`;



const RightContainer = styled.div`
    flex: 1;
    margin-right: 5px;
    ${mobile({padding:"20px"})};
`;


const CardBg = styled.div`
    width: 60%;
    height: 70vh;
    border-radius: 30px;
    position: absolute;
    top: 50px;
    left: 50px;
    background-color: red;
    ${mobile({display:"none"})};
`;

const Card = styled.div`
    width: 60%;
    height: 70vh;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    ${mobile({height:"30vh"})};

`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`;

const Name = styled.h1`

    font-weight: 400;
`;

const Desc = styled.p`
    font-weight: 300;
`;


export const About = ({
    name,
    paragraphOne
}) => {
    return (
        <Container>
            <LeftContainer>
                <CardBg></CardBg>
                <Card>
                    <Image src="https://image-prod.iol.co.za/resize/1456x145600/?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/ce7937cb-0ab9-589c-82a2-1ca1339555c5&operation=CROP&offset=0x0&resize=750x731" alt="about"/>
                </Card>

            </LeftContainer>
            
            <RightContainer>
            <Name>{name}</Name>
            <Desc>{paragraphOne}</Desc>

            </RightContainer>
        </Container>
    )
}

export default About
