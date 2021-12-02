import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import Phone from '../images/smartphone.png';
import Email from '../images/email.png';
import Address from '../images/map.png';
import emailjs from 'emailjs-com';
import { mobile } from "../responsive";

const Container = styled.div`
    height: 100vh;
    position: relative;
    
`;

const Background = styled.div`
    width: 20px;
    height: 100%;
    background-color: red;
    position: absolute;

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection:"column"})};
    ${mobile({padding:"0px 50px"})};
`;

const LeftContainer = styled.div`
    flex: 1;

`;

const Title = styled.h1`
    font-size: 60px;
    width: 80%;
    ${mobile({fontSize:"30px"})};
`;

const RightContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Info = styled.div`

`;

const InfoItem = styled.div`

    display: flex;
    align-items: center;
    margin: 50px 0px;
    font-weight: 300;
    width: 70%;
    ${mobile({margin:"20px 0px", width:"100%"})};
    
   
`;

const InfoIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 20px;

`;

const Desc = styled.p`
    font-weight: 200px;
    ${mobile({display:"none"})};
`;

const Form = styled.form`
    margin-top: 20px;
    ${mobile({marginTop:"0px", display:"flex", flexWrap:"wrap"})};
    
`;

const Input = styled.input`
    width: 50%;
    height: 50px;
    border: none;
    border-bottom: 1px solid black;
    margin: 10px 0px;
    font-size: 14px;
    padding-left: 10px;

    ${mobile({width:"35%", height:"40px", margin:"10px", marginLeft:"0"})};

`;

const SpecialRequirements = styled.textarea`
    width: 100%;
    margin: 10px 0px;
    font-size: 14px;
    padding-left: 10px;

`;

const Submit = styled.button`
     border: none;
     padding: 15px;
     background-color: red;
     color: white;
     font-weight: 500;
     cursor: pointer;
     ${mobile({marginTop:"10px"})};
`;

const Contact = () => {
    const formRef = useRef();

    const [done, setDone] = useState(false  )

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_yju4qei', 
            'template_qcmvs4a', 
            formRef.current, 
            'user_Y4w2gfmjkAXrdZWsSDitA')
      .then(
          (result) => {

        console.log(result.text);
        setDone(true)
      }, 
      (error) => {

          console.log(error.text);
      });
    }
    return (
        <Container>
            <Background></Background>
            <Wrapper>
                <LeftContainer>
                    <Title>For Table Bookings Contact Us</Title>
                    <Info>
                        <InfoItem>
                            <InfoIcon src={Phone}/> +27 71 914 1426
                        </InfoItem>

                        <InfoItem>
                        <InfoIcon src={Email}/> contact@rands.co.za
                        </InfoItem>

                        <InfoItem>
                            <InfoIcon src={Address}/> 6 Makhabeni Road, Khaya Bazzar, Khayelitsha, Cape Town, 7784
                        </InfoItem>
                    </Info>
                </LeftContainer>
                <RightContainer>
                    <Desc>
                        <b>Want to book a table?</b> Contact us and we will make sure that you are sorted out when you arrive.
                    </Desc>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Input type="text" placeholder="Name" name="user_name"/><br/>
                        <Input type="text" placeholder="Subject" name="user_subject"/><br/>
                        <Input type="text" placeholder="Email" name="user_email"/>
                        <SpecialRequirements rows="5" placeholder="Special Requirements" name="special_requirements"/>
                        <Submit>Submit</Submit><br/>
                        {done && "Thank You.."}
                    </Form>
                </RightContainer>
            </Wrapper>
        </Container>
    );
};

export default Contact
