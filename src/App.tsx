import React, { useEffect, useState } from 'react';
import styled  from 'styled-components';
import { Events } from './services/Events';
import { SofarEvent } from './models/SofarEvent';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default () => {
  const [events, setEvents] = useState([] as SofarEvent[])

  useEffect(() => {
    (async () => {
      setEvents(await Events.get())
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Title>Styled components works</Title>
      </header>
      <div>
        {events.map(event => (
          <pre>
            {JSON.stringify(event, null, 4)}
          </pre>
        ))
        }
      </div>
    </div>
  );
}

