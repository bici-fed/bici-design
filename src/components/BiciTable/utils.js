/**
 * @File: 表格相关工具函数
 */
import React from 'react';
import { Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import _ from 'lodash';
import FilterDropdown from '@/components/BiciTable/FilterDropdown';
import { FilterTypes } from '@/components/BiciTable/constants';

// 表格 size 映射，作用于内部组件
// 默认 middle & small 会应用到到内部组件的 small size
const sizeMap = { default: 'default', middle: 'small', small: 'small' };

function checkSupported(type) {
  const supportedTypes = Object.keys(FilterTypes);
  return type && supportedTypes.includes(type.toUpperCase());
}

export function getTablePresets(antPagination) {
  const showTotal = (total, range) => `${range[0]} - ${range[1]}条，共 ${total} 条`;
  const presetPagination = {
    showTotal,
    showQuickJumper: true,
    showSizeChanger: true,
    ...antPagination,
  };
  const pagination = !antPagination ? false : presetPagination;
  const presets = { bordered: true, pagination };
  return presets;
}

export function getInitialFilters(columns) {
  return columns.map(column => {
    const { dataIndex: key } = column;
    const omitProps = _.omit(column, ['render']);
    // 扩展筛选项需要的属性，visible，值，缓存值，Diff 更新需要的 key 等
    // 筛选项的值初始化为 Array 类型，易于扩展
    // visible 用于控制表格自定义 Dropdown 的显隐
    const extendsProps = { key, value: [], _value: [], visible: false };
    return { ...omitProps, ...extendsProps };
  });
}

export function getEnhanceColumns(size, columns, filters, setFilters) {
  return columns.map(column => {
    const { dataIndex: key, filterType, render } = column;
    const matchFilter = filters.filter(filter => filter.key === key)[0] || {};
    const { value, visible } = matchFilter;
    // 提供一个快捷更新 filters 的闭包函数
    const updateFilters = updateProps => {
      setFilters(filters.map(f => (f.key === key ? { ...f, ...updateProps } : f)));
    };
    const filterIcon = filtered => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    );
    const filterDropdown = props => {
      const filterDropdownProps = {
        size: sizeMap[size],
        ...props,
        ...column,
        ...matchFilter,
        updateFilters,
      };
      return <FilterDropdown {...filterDropdownProps} />;
    };
    const onFilterDropdownVisibleChange = v => {
      // @hack，范围数值筛选时，范围值不合法不允许关闭浮层
      const [min, max] = value;
      const invalid = _.isNumber(min) && _.isNumber(max) && min > max;
      const dropdownVisible = filterType.toUpperCase() === FilterTypes.RANGE && invalid ? true : v;
      updateFilters({ visible: dropdownVisible });
    };
    const filterOptions = {
      filterIcon,
      filterDropdown,
      filteredValue: value,
      filterDropdownVisible: visible,
      onFilterDropdownVisibleChange,
    };
    // 只对支持的筛选做扩展
    const isSupport = checkSupported(filterType);
    const extraOptions = isSupport ? filterOptions : {};
    // 扩展表格列支持溢出展示
    const ellipseRender = text => {
      return (
        <Tooltip title={text} placement="topLeft">
          <div className="ellipse width100">{text}</div>
        </Tooltip>
      );
    };
    const enhanceColumn = {
      ..._.omit(column, ['onFilter', 'render']),
      ...extraOptions,
      render: render || ellipseRender,
    };
    return enhanceColumn;
  });
}

export default { getInitialFilters, getEnhanceColumns, getTablePresets };
