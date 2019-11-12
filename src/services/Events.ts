import { http } from './Http';
import { ISofarEvent } from '../models/SofarEvent'

interface IEventResponse {
  id: number,
  city: string;
  image_url: string;
  start_time: string;
  arrival_time: string;
  event_url: string;
}

export class Events {
  public static get = async ():Promise<ISofarEvent[]> => {
    const eventResponse: IEventResponse[] = await http<IEventResponse[]>('https://app.staging.sofarsounds.com/api/v1/events');

    return eventResponse.map(event => ({
      id: event.id,
      city: event.city,
      imageUrl: event.image_url,
      startTime: event.start_time,
      arrivalTime: event.arrival_time,
      eventUrl: event.event_url,
    }))
  }
}