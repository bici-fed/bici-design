/**
 * @File: 下拉筛选
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Select, Button } from 'antd';
import _ from 'lodash';
import styles from '@/components/BiciTable/BiciTable.module.css';

const { Option } = Select;

function renderOptions(options = []) {
  return options.map(option => {
    const { id, name, dataStatus } = option;
    const hasRemoved = dataStatus === -1;
    const disabled = dataStatus === 2;
    const prefixStyle = { display: hasRemoved ? 'none' : 'block' };
    return (
      <Option style={prefixStyle} key={id} value={id} disabled={disabled}>
        {name}
      </Option>
    );
  });
}

function DropdownSelect(props) {
  const {
    size,
    title,
    visible,
    selectData,
    multiple,
    confirm,
    value,
    _value,
    updateFilters,
    onFilter,
  } = props;
  const controlValue = multiple ? value.map(op => op.id) : (value[0] || {}).id;
  const extraProps = multiple ? { mode: 'multiple' } : {};
  const shouldSubmit = onFilter && !_.isEqual(value, _value);

  useEffect(() => {
    // 缓存值用于提交判断做节流，如果值未变化不触发 onFilter
    if (visible) updateFilters({ _value: value });
    // 多选模式下对面板关闭做提交判断
    if (multiple && !visible && shouldSubmit) onFilter(controlValue, value);
  }, [visible]);

  return (
    <div className={styles.filterDropdown}>
      <Select
        {...extraProps}
        showSearch
        size={size}
        allowClear={multiple}
        optionFilterProp="children"
        className={styles.filterDropdownSelect}
        placeholder={`查询${title}`}
        value={controlValue}
        onChange={e => {
          const option = selectData.filter(op => op.id === e);
          const options = selectData.filter(op => _.isArray(e) && e.includes(op.id));
          const selectedValue = multiple ? options : option;
          updateFilters({ value: selectedValue, visible: multiple });
          if (onFilter && !multiple) onFilter(e, selectedValue[0]);
        }}
      >
        {renderOptions(selectData)}
      </Select>
      {multiple && (
        <Button
          type="primary"
          size={size}
          onClick={() => {
            confirm();
            if (shouldSubmit) onFilter(controlValue, value);
          }}
        >
          查询
        </Button>
      )}
    </div>
  );
}

DropdownSelect.defaultProps = {
  selectData: [],
  multiple: false,
};

DropdownSelect.propTypes = {
  multiple: PropTypes.bool,
};

export default DropdownSelect;
