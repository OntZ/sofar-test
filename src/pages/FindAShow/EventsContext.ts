import React from 'react';

import { ISofarEvent } from '../../models/SofarEvent';

export const EventsContext = React.createContext<ISofarEvent[]>([]);
