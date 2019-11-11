import React from 'react';
import styled  from 'styled-components';
import EventItem from './components/EventItem';
import { SofarEvent } from '../../models/SofarEvent';

const EventsGrid = styled.div`
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 50px;
  justify-items: center;

  .event-container {
    grid-column: span 1;
    width: 300px;
    height: 250px;
  }
`;

interface IEventsListProps {
  events: SofarEvent[];
}

export const EventsList = ({events}: IEventsListProps) => (
  <EventsGrid>
    {events.map(event => <div className="event-container">
      <EventItem event={event} />
    </div>)}
  </EventsGrid>
)