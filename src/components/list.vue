<template>
  <div class="list">
    <div class="header">
      <div class="head-tx">
        <div class="left-text">商品列表</div>
        <img
          src="../assets/add.png"
          alt="显示错误"
          class="add-img"
          @click="addproduct"
        />
      </div>
      <div class="product-list">
        <prodcut-item
          v-for="(product, index) in productLists"
          :key="index"
          :product="product"
          @amount-change="handleAmountChange(index, arguments)"
          @update-product="updatedata"
        />
      </div>
      <addproducts
        v-show="isShow"
        :isShow="isShow"
        @add="AddProduct"
        :productLists="productLists"
      />
      <editproducts
        v-show="isShowEdit"
        :isShowEdit="isShowEdit"
        :producparter="products"
        @save="saveProduct"
      />
      <div class="bottom">
        <bottombar :TotalPrice="TotalPrice" :TotalAmounts="TotalAmounts" />
      </div>
    </div>
  </div>
</template>
<script>
import { getproductApi, updateApi, addApi } from "../store/modules/get";
import { mapState, mapActions, mapGetters } from "vuex";
import prodcutItem from "./productitem/prodcut";
import bottombar from "./bottom/bottom";
import addproducts from "./addproducts/addproducts";
import editproducts from "./editproducts/editprodcuts";
export default {
  name: "list",
  components: {
    prodcutItem,
    bottombar,
    addproducts,
    editproducts
  },
  data() {
    return {
      isShow: false,
      isShowEdit: false,
      pageNum: 2
    };
  },
  created() {
    this.get();
  },
  computed: {
    ...mapState({
      productLists: state => {
        return state.product.productList;
      },
      products: state => {
        return state.product.products;
      }
    }),
    ...mapGetters(["TotalPrice", "TotalAmounts"])
  },
  methods: {
    ...mapActions(["AddProducts", "ChangeCount", "getProduct", "saveProducts"]),
    addproduct() {
      this.isShow = !this.isShow;
    },
    async get() {
      await getproductApi(this.pageNum).then(res => {
        this.$store.state.product.productList = res.data.content;
      });
    },
    updatedata(code) {
      this.getProduct(code);
      this.isShowEdit = !this.isShowEdit;
    },
    AddProduct(obj) {
      this.isShow = obj.isShow;
      this.add(obj.product);
      // this.AddProducts(obj.product);
    },
    saveProduct(obj) {
      this.post(obj.product);
      this.isShowEdit = obj.isShowEdit;
    },
    async post(obj) {
      await updateApi(obj)
        .then(res => {
          if (res.data == "Success") {
            alert("修改商品成功");
          }
          this.get();
        })
        .catch(err => {
          alert(err);
        });
    },
    async add(obj) {
      await addApi(obj)
        .then(res => {
          if (res.data == "Success") {
            alert("添加商品成功！");
            this.get();
          }
        })
        .catch(err => {
          alert(err);
        });
    },
    handleAmountChange(index, agrs) {
      const amount = agrs[0];
      this.ChangeCount({ index, amount });
      this.post(this.productLists[index]);
    }
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 107px;
  background-color: #3366ff;
  box-shadow: 0 1px 4px 1px #000000;
}
.head-tx {
  height: 33px;
  padding: 63px 20px 0;
  display: flex;
  justify-content: space-between;
}
.add-img {
  width: 20px;
  height: 20px;
  align-self: center;
  cursor: pointer;
}

.bottom {
  position: absolute;
  bottom: 0;
  width: 375px;
  height: 59px;
  z-index: 1;
  border-top: 1px #e8e8e8 solid;
}
.product-list {
  margin-top: 20px;
  overflow: hidden;
  overflow-y: auto;
  height: 500px;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-track {
  background-color: #fff;
}
.left-text {
  color: #ffffff;
  font-size: 24px;
}
</style>
