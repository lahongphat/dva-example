import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout, Spin } from 'antd';
import ProductList from '../components/ProductList';

class Products extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'products/fetchProducts',
      payload: {
        limit: 100,
        offset: 0,
      },
    });
  }

  handleDelete = (id) => {
    this.props.dispatch({
      type: 'products/delete',
      payload: id,
    });
  }

  render() {
    const { items, loading } = this.props

    return (
      <Layout.Content
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 60px)',
          margin: '30px auto',
          width: 996,
        }}
      >
        {loading
          ? <Spin size="large" />
          : <ProductList onDelete={this.handleDelete} products={items} />}
      </Layout.Content>
    );
  }
}

const mapStateToProps = ({
  loading,
  products: { items },
}) => ({
  items,
  loading: loading.models.products,
})

export default connect(mapStateToProps)(Products);
