import React from 'react'
import{
    EventsContainer,
    EventWrapper,
    EventsHeading,
    EventTitle,
    EventCard,
    EventImg,
    EventInfo,
    EventDesc,
    

} from "./ProductElements"

const Events = ({heading, data}) => {
    return (
        <EventsContainer>
            <EventsHeading>{heading}</EventsHeading>
            <EventWrapper>
                {data.map((event, index) =>{
                    return(
                        <EventCard key={index}>
                            <EventImg src={event.img} alt={event.alt} />
                            <EventInfo>
                                <EventTitle>{event.name}</EventTitle>
                                <EventDesc>{event.desc}</EventDesc>
                                
                            </EventInfo>
                        </EventCard>
                    )
                })}
            </EventWrapper>
        </EventsContainer>
    )
}

export default Events
