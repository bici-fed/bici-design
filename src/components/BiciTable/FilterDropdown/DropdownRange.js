/**
 * @File: 范围筛选
 */
import React, { useEffect, useRef } from 'react';
import { InputNumber, Button } from 'antd';
import _ from 'lodash';
import styles from '@/components/BiciTable/BiciTable.module.css';

function DropdownRange(props) {
  const { size, visible, confirm, value, _value, updateFilters, onFilter } = props;
  const [min, max] = value;
  const disabled = _.isNumber(min) && _.isNumber(max) && min > max;
  const ref = useRef(null);

  const handleSubmit = () => {
    // 关闭面板触发提交的条件为：缓存值变化且范围值合法
    const shouldSubmit = onFilter && !disabled && !_.isEqual(_value, value);
    if (shouldSubmit) onFilter(value);
  };

  useEffect(() => {
    if (visible) {
      // 缓存值用于提交判断做节流，如果值未变化不触发 onFilter
      updateFilters({ _value: value });
      setTimeout(() => ref.current.select(), 100);
    } else {
      handleSubmit();
    }
  }, [visible]);

  return (
    <div className={styles.filterDropdown}>
      <InputNumber
        ref={ref}
        size={size}
        placeholder="开始数值"
        value={min}
        onChange={e => {
          const reset = !_.isNumber(e) && !_.isNumber(max);
          updateFilters({ value: reset ? [] : [e, max] });
        }}
      />
      ~
      <InputNumber
        size={size}
        placeholder="结束数值"
        value={max}
        onChange={e => {
          const reset = !_.isNumber(e) && !_.isNumber(min);
          updateFilters({ value: reset ? [] : [min, e] });
        }}
      />
      <Button
        size={size}
        type="primary"
        disabled={disabled}
        onClick={() => {
          confirm();
          handleSubmit();
        }}
      >
        查询
      </Button>
    </div>
  );
}

export default DropdownRange;
