/**
 * Maybe if this becomes less specific in the future, move it to a common module
 */

import { ISofarEvent } from '../../models/SofarEvent';
import { IFilters } from '../../components/Filters/Filters';
import moment from 'moment';

export const filterEvents = (events: ISofarEvent[], by: IFilters) => {
  let result = events;

  if (by.city) {
    result = result.filter(event => event.city === by.city);
  }

  if (by.date) {
    result = result.filter(event => moment(event.startTime).isSame(by.date, 'day'));
  }

  return result;
}
