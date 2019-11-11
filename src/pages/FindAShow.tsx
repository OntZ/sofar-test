import React, { useEffect, useState }  from 'react';
import { Events } from '../services/Events';
import { SofarEvent } from '../models/SofarEvent';
import { Header } from '../components/Header';
import { ContentContainer } from '../components/ContentContainer';
import { EventsList } from '../components/EventsList/EventsList';

export const FindAShow = () => {
  const [events, setEvents] = useState([] as SofarEvent[])

  useEffect(() => {
    (async () => {
      setEvents(await Events.get())
    })();
  }, []);

  return (

    <div>
      <Header />
      <ContentContainer>
        <EventsList events={events} />
      </ContentContainer>
    </div>
  )
}