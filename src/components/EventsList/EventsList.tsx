import React from 'react';
import styled  from 'styled-components';
import EventItem from './components/EventItem';
import { SofarEvent } from '../../models/SofarEvent';
import { ContentContainer } from '../ContentContainer';

const EventsGrid = styled.div`
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-row-gap: 50px;
  justify-content: space-between;

  .event-container {
    grid-column: span 1;
    width: 100%;
    height: 250px;
  }
`;

interface IEventsListProps {
  events: SofarEvent[];
}

export const EventsList = ({events}: IEventsListProps) => (
  <ContentContainer>
    <EventsGrid>
      {events.map(event => <div className="event-container">
        <EventItem event={event} />
      </div>)}
    </EventsGrid>
  </ContentContainer>
)