import React from 'react';
import styled  from 'styled-components';
import moment from 'moment';
import { AppColors } from '../../../theme/AppColors';
import { ISofarEvent, SofarEventDateFormat } from '../../../models/SofarEvent';

const EventPanel = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid ${AppColors.border}
  border-radius: 4px;
  color: ${AppColors.black}
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 10px ${AppColors.border};
  }

  .event-image {
    width: 100%;
    height: 50%;
    /* assumes image urls work */
    background: url(${props => props.image}) no-repeat center;
    background-size: cover;
  }

  .event-description {
    padding: 12px;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      line-height: 2;
      margin: 0;
    }
  }

`;

interface IEventItemProps {
  event: ISofarEvent;
}

export default ({event}: IEventItemProps) => <EventPanel
  image={event.imageUrl}
  href={event.eventUrl}
  target="_blank"
  className="no-decoration"
>
  <div className="event-image" />
  <div className="event-description">
    <div>
      <p>
        <b>{moment(event.startTime).format(SofarEventDateFormat)}</b>
      </p>
      <p>Doors open at {moment(event.arrivalTime, 'HH:mm').format('h:mmA')}</p>
    </div>
    <div>{event.city}</div>
  </div>
</EventPanel>