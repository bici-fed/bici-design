/**
 * @File: 模糊筛选
 */
import React, { useEffect, useRef } from 'react';
import { Input, Button } from 'antd';
import _ from 'lodash';
import styles from '@/components/BiciTable/BiciTable.module.css';

function DropdownSearch(props) {
  const { size, title, value, _value, visible, confirm, updateFilters, onFilter } = props;
  const inputRef = useRef(null);

  const handleSubmit = () => {
    confirm();
    const shouldSubmit = onFilter && !_.isEqual(value, _value);
    if (shouldSubmit) onFilter(value[0]);
  };

  // @optimize，体验优化，
  // 输入框筛选面板显示时自动聚焦
  useEffect(() => {
    if (visible) {
      // 缓存值用于提交判断做节流，如果值未变化不触发 onFilter
      updateFilters({ _value: value });
      setTimeout(() => inputRef.current.select(), 100);
    } else {
      // 关闭面板时判断是否需要触发提交
      handleSubmit();
    }
  }, [visible]);

  return (
    <div className={styles.filterDropdown}>
      <Input
        allowClear
        size={size}
        ref={inputRef}
        placeholder={`查询${title}`}
        value={value[0]}
        onChange={e => updateFilters({ value: e.target.value ? [e.target.value] : [] })}
        onPressEnter={handleSubmit}
      />
      <Button size={size} type="primary" className="ml8" onClick={handleSubmit}>
        查询
      </Button>
    </div>
  );
}

export default DropdownSearch;
