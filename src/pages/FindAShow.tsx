import React, { useEffect, useState }  from 'react';
import { Events } from '../services/Events';
import { SofarEvent } from '../models/SofarEvent';
import { Header } from '../components/Header';

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
      <div>
        {events.map(event => (
          <pre>
            {JSON.stringify(event, null, 4)}
          </pre>
        ))
        }
      </div>
    </div>
  )
}