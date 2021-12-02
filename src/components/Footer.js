// import { Facebook, Instagram, MailOutline,  Phone, Room, Twitter } from "@material-ui/icons";
import { FaFacebook, FaInstagram, FaLocationArrow, FaPhone, FaTwitter } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
    display: flex;
    background: #000d1a;
    ${mobile({flexDirection:"column"})};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: white;
`;

const Logo = styled.a`
    text-decoration: none;
    color: white;
    font-size: 32pt;
    cursor: pointer;
`;

const Desc = styled.div`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.h1`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
    color: white;
    ${mobile({display:"none"})};
`;

const Title = styled.h3`
    margin-bottom:30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.a`
    width: 50%;
    margin-bottom: 10px;
    text-decoration: none;
    color: white;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    color: white;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    

`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Rands Cape Town</Logo>
                <Desc>Situated in the heart of Khayelitsha. Best braai, secure dining and quality entertainment.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FaFacebook/>
                    </SocialIcon>

                    <SocialIcon color="E4405F">
                        <FaInstagram/>
                    </SocialIcon>

                    <SocialIcon color="55ACEE">
                        <FaTwitter/>
                    </SocialIcon>
                    </SocialContainer>
            </Left>

            <Center>
                <Title>Use Links</Title>
                <List>
                    <ListItem href="#">Home</ListItem>
                    <ListItem>About</ListItem>
                    <ListItem>Events</ListItem>
                    <ListItem>Gallery</ListItem>
                    <ListItem>Contact</ListItem>
                    <ListItem>Food Menu</ListItem>
                     
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem><FaLocationArrow style={{marginRight:"10px"}}/> 6 Makhabeni Road, Khaya Bazzar, Khayelitsha, Cape Town, 7784</ContactItem>
                <ContactItem><FaPhone style={{marginRight:"10px"}}/>+27 71 914 1426</ContactItem>
                <ContactItem><IoMailOutline style={{marginRight:"10px"}}/>contact@rands.co.za</ContactItem>
                
            </Right>
        </Container>
    )
}

export default Footer
