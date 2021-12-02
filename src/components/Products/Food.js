import React from 'react'
import styled from 'styled-components';

const FoodContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);

`;

const FoodWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;

const FoodCard = styled.div`
    margin: 0 1rem;
    line-height: 2;
    width: 300px;
    
    
`;

const FoodImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    border-radius: 30px;
    
    &:hover{
        transform: translateY(-2px);
    }
`;

const FoodHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`;

const FoodTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`;

const FoodInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`;

const FoodDesc = styled.p`
    margin-bottom: 1rem;
`;

const FoodPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`;

const Food = ({heading, data}) => {
    return (
        <FoodContainer>
            <FoodHeading>{heading}</FoodHeading>
            <FoodWrapper>
                {data.map((food, index) =>{
                    return(
                        <FoodCard key={index}>
                            <FoodImg src={food.img} alt={food.alt} />
                            <FoodInfo>
                                <FoodTitle>{food.name}</FoodTitle>
                                <FoodDesc>{food.desc}</FoodDesc>
                                <FoodPrice>{food.price}</FoodPrice>
                            </FoodInfo>
                        </FoodCard>
                    )
                })}
            </FoodWrapper>
        </FoodContainer>
    )
}

export default Food
