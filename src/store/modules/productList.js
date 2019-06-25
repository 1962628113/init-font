const state = {
  productList: [],
  products: {}
};
const getters = {
  TotalPrice: state =>
    state.productList.reduce((prev, item) => {
      return prev + item.cPrice * item.cStock;
    }, 0),
  TotalAmounts: state =>
    state.productList.reduce((prev, item) => {
      return prev + Number(item.cStock);
    }, 0)
};
const actions = {
  AddProducts({ commit, state }, producparter) {
    const index = state.productList.findIndex(
      product => product.cCode === producparter.cCode
    );
    console.log(index, 2222);
    if (index >= 0) {
      commit("product_count", {
        index: index,
        amount: state.productList[index].cStock + 1
      });
    } else {
      commit("product_add", producparter);
    }
  },
  getProduct({ commit, state }, code) {
    const index = state.productList.findIndex(
      product => product.cCode === code
    );
    console.log(state.productList[index]);
    commit("product", {
      products: state.productList[index]
    });
  },
  saveProducts({ commit, state }, products) {
    const index = state.productList.findIndex(
      product => product.code === products.code
    );
    commit("saveproduct", {
      index: index,
      product: products
    });
  },
  ChangeCount({ commit }, payload) {
    commit("product_count", payload);
  }
};
export const mutations = {
  product_count(state, { index, amount }) {
    const product = state.productList[index];
    if (product) {
      product.cStock = amount;
    }
  },
  product_add(state, product) {
    state.productList.push(product);
  },
  product(state, product) {
    let temp = Object.assign({}, product.products);
    state.products = temp;
  },
  saveproduct(state, obj) {
    const index = obj.index;
    state.productList[index] = obj.product;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
