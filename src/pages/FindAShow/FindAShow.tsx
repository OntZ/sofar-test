import React, { useEffect, useState } from 'react';

import { Events } from '../../services/Events';
import { ISofarEvent } from '../../models/SofarEvent';
import { Header } from '../../components/Header';
import { EventsList } from '../../components/EventsList/EventsList';
import { Filters, IFilters } from '../../components/Filters/Filters';

import { EventsContext } from './EventsContext';
import { filterEvents } from './filterEvents';

export const FindAShow = () => {
  const [events, setEvents] = useState([] as ISofarEvent[]);
  const [filteredEvents, setFilteredEvents] = useState([] as ISofarEvent[]);
  const [isAtLeastOneFilterActive, setIsAtLeastOneFilterActive] = useState(false);

  /** sort of like componentDidMount */
  useEffect(() => {
    (async () => {
      const events = await Events.get();
      setEvents(events);
      setFilteredEvents(events);
    })();
  }, []);

  return (
    <div>
      <EventsContext.Provider value={filteredEvents}>
        <Header />
        <Filters applyFilters={(by: IFilters) => {
          setFilteredEvents(filterEvents(events, by));
          setIsAtLeastOneFilterActive(!!by.city || !!by.date)
        }}
          isResetVisible={isAtLeastOneFilterActive}
        />
        <EventsList />
      </EventsContext.Provider>
    </div>
  )
}
