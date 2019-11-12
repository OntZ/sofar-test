/**
 * Adapted from a different test a few months ago to save time
 */

import * as React from 'react';
import { Typeahead, TypeaheadModel, TypeaheadLabelKey, TypeaheadProps } from 'react-bootstrap-typeahead';
import styled  from 'styled-components';
import { AppColors } from '../../../theme/AppColors';

const Dropdown = styled.div` {
  width: 100%;
  position: relative;

  .arrow-down {
    position: absolute;
    right: 15px;
    top: 25px;
    z-index: 1;

    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #000;
  }

  .label {
    display: block;
    margin-bottom: 10px;
  }

  .rbt {
    font-family: 'Open Sans', sans-serif;
    width: 100%;

    .rbt-input-main {
      width: 100%;
      height: 60px;
      padding: 10px;
      font-size: 16px;
      border: 1px solid ${AppColors.border};
      border-radius: 4px;

      &::placeholder {
        color: #bbb;
      }
    }

    .rbt-menu {
      z-index: 1;
      margin: 0;
      border: 1px solid ${AppColors.border};
      padding: 0;
      background-color: ${AppColors.white};
      list-style: none;

      li a {
        display: block;
        padding: 10px;
        color: #000;
        text-decoration: none;

        &:hover, &:focus, &.active {
          color: #000;
          background-color: #eee;
        }

        .rbt-highlight-text {
          background: none;
          font-weight: bold;
        }
      }
    }
    .rbt-sr-status {
      display: none !important;
    }
  }
}`

interface IAutocompleteProps<T extends TypeaheadModel> {
  options: T[];
  value?: T;
  labelKey: TypeaheadLabelKey<T>;
  label?: string;
  valueSelected: (value: T) => void;
  id?: string;
  placeholder?: string;
}

export function Autocomplete<T>(props: IAutocompleteProps<T>) {
  const tpeaheadProps: TypeaheadProps<T> = {
    options: props.options,
    onChange: props.valueSelected,
    labelKey: props.labelKey,
    /** It "needs an ID for accessibility purposes", doesn't let you opt out */
    id: props.id || Math.random(),
    placeholder: props.placeholder,
    flip: true
  };

  if (props.value) {
    tpeaheadProps.selected = [props.value];
  }

  return (
    <Dropdown>
      {props.label && <label className="label">{props.label}</label>}
      <div className="arrow-down"/>
      <Typeahead {...tpeaheadProps}/>
    </Dropdown>
  )
}
