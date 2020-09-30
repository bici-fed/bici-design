/**
 * @File: 日期筛选，高度可配，支持传入所有的 Ant Design DatePicker props
 */
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import BiciDatePicker from '@/components/BiciDatePicker';
import styles from '@/components/BiciTable/BiciTable.module.css';

const controlProps = [
  'title',
  'isRange',
  'clearFilters',
  'confirm',
  'dataIndex',
  'filterType',
  'filters',
  'prefixCls',
  'onFilter',
  'selectedKeys',
  'setSelectedKeys',
  'updateFilters',
  'value',
  'visible',
];

function DropdownDate(props) {
  const { size, isRange, value, showTime, updateFilters, onFilter } = props;
  const type = isRange ? 'range' : 'date';
  const controlValue = isRange ? value : value[0];
  // 强制挂载 Picker 浮层，防止因滑动导致的定位问题
  const containerId = uuidv4();
  const omitProps = _.omit(props, controlProps);

  const handleOk = (e, extra) => {
    // 范围值交互优化，需要同时选择起始值后确定回调才会生效
    const [start, end] = isRange ? e : [];
    const isOk = isRange ? start && end : !!e;
    if (isOk) updateFilters({ visible: false, value: isRange ? e : [e] });
    if (isOk && onFilter) onFilter(e, extra);
  };

  return (
    <div id={containerId} className={styles.filterDropdown}>
      <BiciDatePicker
        {...omitProps}
        type={type}
        size={size}
        allowClear={false}
        value={controlValue}
        getPopupContainer={() => document.getElementById(containerId)}
        onChange={(e, extra) => {
          updateFilters({ value: isRange ? e : [e], visible: !!showTime });
          if (!showTime && onFilter) onFilter(e, extra);
        }}
        onOk={handleOk}
      />
    </div>
  );
}

DropdownDate.defaultProps = {
  isRange: true,
  format: 'YYYY-MM-DD',
};

DropdownDate.propTypes = {
  isRange: PropTypes.bool,
};

export default DropdownDate;
