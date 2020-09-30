/**
 * @File: 筛选条件
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';
import _ from 'lodash';
import { FilterTypes } from '@/components/BiciTable/constants';

function isEmpty(arr) {
  return !arr.length || arr.every(v => !_.isNumber(v) && _.isEmpty(v));
}

function renderSeachTag(value) {
  const searchText = value[0];
  return searchText;
}

function renderSelectTag(value, tag) {
  const { multiple } = tag;
  const options = value.map(option => option.name);
  return multiple ? options.join('，') : options[0];
}

function renderRangeTag(value) {
  const [start, end] = value;
  return `${start || ''} ~ ${end || ''}`;
}

function renderDateTag(value, tag) {
  const { format, isRange } = tag;
  const [begin, end] = value;
  const dateRangeStr = isRange ? `${begin.format(format)} ~ ${end.format(format)}` : '';
  const dateStr = value[0].format(format);
  return isRange ? dateRangeStr : dateStr;
}

function renderTag(value, tag) {
  const { filterType } = tag;

  switch (filterType.toUpperCase()) {
    case FilterTypes.SEARCH:
      return renderSeachTag(value, tag);
    case FilterTypes.SELECT:
      return renderSelectTag(value, tag);
    case FilterTypes.RANGE:
      return renderRangeTag(value, tag);
    case FilterTypes.DATE:
      return renderDateTag(value, tag);
    default:
      return '';
  }
}

function FilterTags(props) {
  const { filters, setFilters } = props;
  const renderTags = filters.filter(filter => !isEmpty(filter.value));
  const tags = renderTags.map(tag => {
    const { title, key, value } = tag;
    return (
      <Tag
        key={key}
        closable
        onClose={() => {
          const updatedFilters = filters.map(f =>
            f.key === key ? { ...f, value: [], visible: false } : f,
          );
          if (setFilters) setFilters(updatedFilters);
        }}
      >
        {title}：{renderTag(value, tag)}
      </Tag>
    );
  });
  return <div>筛选条件：{tags}</div>;
}

FilterTags.defaultProps = {
  filters: [],
};

FilterTags.propTypes = {
  filters: PropTypes.array,
  setFilters: PropTypes.func,
};

export default FilterTags;
