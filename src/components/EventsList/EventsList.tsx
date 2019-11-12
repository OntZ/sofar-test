import React from 'react';
import styled  from 'styled-components';
import EventItem from './components/EventItem';
import { ContentContainer } from '../ContentContainer';
import { EventsContext } from '../../pages/FindAShow/EventsContext';
import { Devices } from '../../theme/Breakpoints';

const EventsGrid = styled.div`
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-row-gap: 50px;
  justify-content: space-between;


  @media ${Devices.small} {
    grid-template-columns: repeat(1, 1fr) !important;
  }

  @media ${Devices.medium} {
    grid-template-columns: repeat(2, 300px);
    justify-content: space-around;
  }

  .event-container {
    grid-column: span 1;
    width: 100%;
    height: 250px;
  }
`;

export const EventsList = () => (
  <EventsContext.Consumer>
  {events => <ContentContainer>
      <EventsGrid>
        {events.map(event => <div key={event.id} className="event-container">
          <EventItem event={event} />
        </div>)}
      </EventsGrid>
    </ContentContainer>
  }
  </EventsContext.Consumer>
)