import React, { useState } from 'react';
import styled  from 'styled-components';
import { darken } from 'polished';
import { ContentContainer } from '../ContentContainer';
import { Autocomplete } from './components/AutoComplete';
import moment from 'moment';
import { EventsContext } from '../../pages/FindAShow/EventsContext';
import { AppColors } from '../../theme/AppColors';
import { SofarEventDateFormat } from '../../models/SofarEvent';
import { Devices } from '../../theme/Breakpoints';

const FilterSection = styled.div`
  width: 100%;
  background-color: #f5f5f5;

  .filters-container {
    display: flex;
    justify-content: space-between;
    padding-top: 12px;
    padding-bottom: 12px;

    @media ${Devices.small} {
      flex-direction: column;
    }
  }

  .filter-dropdowns {
    display: flex;

    @media ${Devices.small} {
      flex-direction: column;
    }
  }

  .filter-wrapper {
    margin-right: 40px;
    width: 270px;

    @media ${Devices.small} {
      width: 100%;;
      margin-top: 30px;
    }
  }

  .filter-controls {
    @media ${Devices.small} {
      display: flex;
      justify-content: space-around;
      margin-top: 30px;
    }

    .reset-filters {
      color: #555;
      margin-right: 30px;
    }

    /** could be a reusable button component */
    .search-button {
      width: 180px;
      height: 50px;
      background-color: ${AppColors.brand}
      color: white;

      &:hover {
        background-color: ${darken(0.05, AppColors.brand)}
      }
    }
  }
  `;

/**
 * Nicer: make filters generic and render autocompletes dynamically based on provided interface
 */
export interface IFilters {
  city?: string;
  date?: string
}

interface IFiltersProps {
  applyFilters: (by: IFilters) => void;
  isResetVisible?: boolean;
}

export const Filters = ({applyFilters, isResetVisible}: IFiltersProps) => {
  const [filters, setFilters] = useState({city: '', date: ''} as IFilters)

  return <EventsContext.Consumer>
    {events => (
      <FilterSection>
        <ContentContainer className="filters-container">
          <div className="filter-dropdowns">
            <div className="filter-wrapper">
              <Autocomplete
                placeholder="Filter by City"
                key={Math.random() /** Force rerendering - I know this is horrible, but time constraints */}
                options={Array.from(new Set(events.map(event => event.city))).sort()}
                value={filters.city}
                /** at runtime `selected` is actually an array, not a string, time should be spent to type this more nicely */
                valueSelected={(selected) => setFilters({...filters, city: selected[0]})}
                labelKey='id'
                id="filter-by-city"
                />
            </div>
            <div className="filter-wrapper">
              <Autocomplete
                key={Math.random() /** Force rerendering - I know this is horrible, but time constraints */}
                placeholder="Filter by Date"
                options={Array.from(new Set(events.map(event => event.startTime)))}
                value={filters.date}
                /** at runtime `selected` is actually an array, not a string, time should be spent to type this more nicely */
                valueSelected={(selected) => setFilters({...filters, date: selected[0]})}
                /** show the value formatted nicely, but use the actual date from the API response */
                labelKey={(value) => moment(value).format(SofarEventDateFormat)}
                id="filter-by-date"
              />
            </div>
          </div>
          <div className="filter-controls flex-center-content">
            {isResetVisible
              ? <a
                className="reset-filters no-decoration"
                href="#/"
                onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                  event.preventDefault();
                  setFilters({})
                  applyFilters({});
                }}
              >
                Reset filters
              </a>
              : null}
            <a
              className="search-button no-decoration flex-center-content"
              href="#/"
              onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                event.preventDefault();
                applyFilters(filters);
              }}
            >
              Search
            </a>
          </div>
        </ContentContainer>
      </FilterSection>
    )}
  </EventsContext.Consumer>
}