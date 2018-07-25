import fetch from '../services/fetch'

export default {
  namespace: 'products',
  state: {
    items: [],
  },
  reducers: {
    save(state, { payload: items }) {
      return {
        ...state,
        items: items,
      };
    },
    delete(state, { payload: id }) {
      return {
        ...state,
        items: state.items.filter(item => item.id !== id),
      };
    },
  },
  effects: {
    *fetchProducts({ payload: { limit, offset } }, { call, put }) {
      try {
        // limit and offset don't work for this api
        const response = yield call(fetch, `https://jsonplaceholder.typicode.com/photos?limit=${limit}&offset=${offset}`);
        yield put({ type: 'save', payload: response });
      }
      catch(error) {
        console.log(error);
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // todo
    },
  },
};
