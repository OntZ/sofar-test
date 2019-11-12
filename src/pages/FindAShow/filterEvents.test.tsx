import { filterEvents } from './filterEvents';
import { ISofarEvent } from '../../models/SofarEvent';

const E1: ISofarEvent = {
  "id": 15061,
  "city": "London",
  "imageUrl": "//d3fslbhen56gw1.cloudfront.net/attachments/518f4a850a3a2208bc15a541c16aef16e65704bd/store/fill/991/500/77846cedf766eb0f64cedc78024bb95650bf0956041792eec8478df18631/event-image-30.jpg",
  "startTime": "2019-12-31T20:00:00.000Z",
  "arrivalTime": "19:30",
  "eventUrl": "http://sofar-staging.herokuapp.com/cities/london/events/15061"
}

const E2: ISofarEvent = {
  "id": 14803,
  "city": "London",
  "imageUrl": "//d3fslbhen56gw1.cloudfront.net/attachments/577f31f9fa1e1f89566dff38c4b49a1a2024e3d0/store/fill/991/500/bd3be51da5b8e3c35a97fe653c0d4193c61dbf79a8a94ab8899d68338744/event-image-22.jpg",
  "startTime": "2020-01-08T20:00:00.000Z",
  "arrivalTime": "19:30",
  "eventUrl": "http://sofar-staging.herokuapp.com/cities/london/events/14803"
}

const E3: ISofarEvent = {
  "id": 15076,
  "city": "NYC",
  "imageUrl": "//d3fslbhen56gw1.cloudfront.net/attachments/c69c84e529130587b76d407f22d436264d8a4a6b/store/fill/991/500/b642f867e7fec274ad7bf168a549202b44e9258c43ce40d9da0297cf75a1/event-image-32.jpg",
  "startTime": E2.startTime,
  "arrivalTime": " 7:30pm",
  "eventUrl": "http://sofar-staging.herokuapp.com/cities/nyc/events/15076"
}

const events: ISofarEvent[] = [E1, E2, E3];

describe('filterEvents', () => {
  it('returns the same array if filters are empty',  () => {
    expect(filterEvents(events, {})).toEqual(events);
  })
  it('filters by city properly',  () => {
    expect(filterEvents(events, {city: 'London'})).toEqual([E1, E2]);
  })
  it('filters by date properly',  () => {
    expect(filterEvents(events, {date: E2.startTime})).toEqual([E2, E3]);
  })
  it('filters by city and date properly',  () => {
    expect(filterEvents(events, {city: 'London', date: E2.startTime})).toEqual([E2]);
  })
});