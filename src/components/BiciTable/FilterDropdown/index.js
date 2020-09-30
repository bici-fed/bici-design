/**
 * @File: 整合所有支持的自定义筛选器
 */
import React from 'react';
import { FilterTypes } from '@/components/BiciTable/constants';
import DropdownSearch from './DropdownSearch';
import DropdownSelect from './DropdownSelect';
import DropdownDate from './DropdownDate';
import DropdownRange from './DropdownRange';

function FilterDropdown(props) {
  const { filterType: type } = props;
  const filterType = type.toUpperCase();

  const supportedTypes = Object.keys(FilterTypes);
  if (filterType && !supportedTypes.includes(filterType)) {
    console.error(
      `filterType '${filterType}' is not supported, expect one of ${supportedTypes.toString()}.`,
    );
  }

  let Dropdown = React.Fragment;

  switch (filterType) {
    case FilterTypes.SEARCH:
      Dropdown = DropdownSearch;
      break;
    case FilterTypes.SELECT:
      Dropdown = DropdownSelect;
      break;
    case FilterTypes.DATE:
      Dropdown = DropdownDate;
      break;
    case FilterTypes.RANGE:
      Dropdown = DropdownRange;
      break;
    default:
      break;
  }

  return <Dropdown {...props} />;
}

export default FilterDropdown;
