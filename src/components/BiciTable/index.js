/**
 * @File: 提炼至企业级中后台场景的复杂表格，
 * 基于 Ant Design Table & 博智云创 PC 端设计规范，
 * 支持分页预设，列表选项，快捷筛选（模糊搜索，下拉搜索，范围数值搜索，时间范围搜索）等大量可扩展功能
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import _ from 'lodash';
import FilterTags from '@/components/BiciTable/FilterTags';
import {
  getInitialFilters,
  getEnhanceColumns,
  getTablePresets,
} from '@/components/BiciTable/utils';
import { controlledProps } from '@/components/BiciTable/constants';

function BiciTable(props) {
  const { size, columns: antColumns, pagination } = props;
  const [filters, setFilters] = useState(getInitialFilters(antColumns));
  const enhanceColumns = getEnhanceColumns(size, antColumns, filters, setFilters);
  const presets = getTablePresets(pagination);
  const omitProps = _.omit(props, controlledProps);

  return (
    <div>
      <FilterTags filters={filters} setFilters={setFilters} />
      <Table {...presets} {...omitProps} columns={enhanceColumns} />;
    </div>
  );
}

BiciTable.defaultProps = {
  columns: [],
  pagination: false,
};

BiciTable.propTypes = {
  columns: PropTypes.array,
  pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

export default BiciTable;
