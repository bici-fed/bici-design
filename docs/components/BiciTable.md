---
title: BiciTable
order: 1
group:
  title: 组件
  order: 5
---

# BiciTable

抽象至博智云创大量数据中后台产品的表格，用于展示行列数据。

## 何时使用

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## 代码演示

### 基础表格

```jsx
import React from 'react';
import { Tag, Space } from 'antd';
import { BiciTable } from '../../dist/bici-design.js';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    filterType: 'search',
    onFilter: val => console.log(val),
    render: text => <a>{text}</a>,
  },
  {
    title: 'Select',
    dataIndex: 'select',
    filterType: 'select',
    multiple: false,
    selectData: [
      { id: 1, name: 'Bici' },
      { id: 2, name: 'FED' },
      { id: 3, name: 'Table', dataStatus: -1 },
      { id: 4, name: 'BiciTable', dataStatus: 2 },
    ],
    onFilter: (val, extra) => console.log(val, extra),
    key: 'select',
  },
  {
    title: 'Multiple',
    dataIndex: 'multiple',
    filterType: 'select',
    multiple: true,
    selectData: [
      { id: 1, name: 'Bici' },
      { id: 2, name: 'FED' },
      { id: 3, name: 'Table', dataStatus: -1 },
      { id: 4, name: 'BiciTable', dataStatus: 2 },
    ],
    onFilter: (val, extra) => console.log(val, extra),
    key: 'multiple',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    filterType: 'range',
    onFilter: val => console.log(val),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    filterType: 'date',
    isRange: true,
    picker: 'date',
    format: 'YYYY-MM-DD HH:mm:ss',
    showTime: { format: 'HH:mm:ss' },
    onFilter: val => console.log(val),
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    select: 'Bici',
    multiple: 'FED',
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    date: '2020-05-20',
  },
  {
    key: '2',
    name: 'Jim Green',
    select: 'Bici',
    multiple: 'FED',
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    date: '2020-05-20',
  },
  {
    key: '3',
    name: 'Joe Black',
    select: 'Bici',
    multiple: 'FED',
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    date: '2020-05-20',
  },
];

export default () => (
  <BiciTable
    size="small"
    columns={columns}
    dataSource={data}
    pagination={{ current: 1, pageSize: 10 }}
  />
);
```
