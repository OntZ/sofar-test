export interface ISofarEvent {
  id: number,
  city: string,
  imageUrl: string,
  startTime: string,
  arrivalTime: string,
  eventUrl: string,
}

export const SofarEventDateFormat = 'dddd, Do MMMM YYYY';