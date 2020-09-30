/**
 * @File: BiciDatePiker
 */
import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import _ from 'lodash';
import 'dayjs/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

const { RangePicker } = DatePicker;

function BiciDatePicker(props) {
  const { type } = props;
  const omitProps = _.omit(props, ['type']);
  const Picker = type === 'range' ? RangePicker : DatePicker;

  return <Picker locale={locale} {...omitProps} />;
}

BiciDatePicker.defaultProps = {
  type: 'date',
};

BiciDatePicker.propTypes = {
  type: PropTypes.oneOf(['date', 'range']),
};

export default BiciDatePicker;
