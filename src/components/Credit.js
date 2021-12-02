import { AiOutlineCopyright } from "react-icons/ai";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    height: 30px;
    background-color: #fff;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14;
    font-weight: 500;
    ${mobile({flexDirection:"column", textAlign:"center", paddingTop:"5px"})};
`;

const Credit = () => {
    return (
        <Container>
           Rands Cape Town 2021 &nbsp; <AiOutlineCopyright/> &nbsp; Created by Luthando Mtengwane
        </Container>
    )
}

export default Credit
