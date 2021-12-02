import styled from "styled-components";

export const FoodContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    background: #fff;

`;

export const FoodWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;

export const FoodCard = styled.div`
    margin: 0 1rem;
    line-height: 2;
    width: 300px;

    &:hover{
        transform: translateY(-2px);
    }
`;

export const FoodImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    
`;

export const FoodHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`;

export const FoodEventTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`;

export const FoodInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`;

export const FoodDesc = styled.p`
    margin-bottom: 1rem;
`;

export const FoodPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`;