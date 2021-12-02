import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    height: 20px;
    background-color: red;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 7;
    font-weight: 500;
    ${mobile({flexDirection:"column", textAlign:"center", paddingTop:"5px"})};
`;

const Link = styled.a`
    color: white;
    text-decoration: none;
`;

const CovidLink = () => {
    return (
        <Container>
           COVID-19 Corona Virus South African Resource Portal &nbsp; <Link href="https://sacoronavirus.co.za/">Read More</Link>
        </Container>
    )
}

export default CovidLink
