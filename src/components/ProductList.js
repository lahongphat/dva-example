import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {
  const columns = [{
    title: 'Title',
    dataIndex: 'title',
  }, {
    title: 'Thumb',
    render: (text, record) => {
      return (
        <img
          src={record.url}
          alt={record.title}
          style={{ width: 80, height: 80, }}
        />
      )
    }
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];
  return (
    <div>
      <h2>List of Products</h2>
      <Table
        dataSource={products}
        columns={columns}
      />
    </div>
  );
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;
