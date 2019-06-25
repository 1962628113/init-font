<template>
  <div class="product">
    <img :src="product.cPicture" alt="" class="img" @click="update" />
    <div class="right">
      <div class="top">
        <span class="product-name">{{ product.cName }}</span>
        <span class="money">￥{{ product.cPrice }}元</span>
      </div>
      <div class="bottom">
        <span class="amount">库存</span>
        <span class="operation">
          <img
            class="img-add"
            src="../../assets/addtwo.png"
            @click="addamount"
          />
          <span class="amounts">{{ product.cStock }}</span>
          <img
            class="img-decripe"
            src="../../assets/decripe.png"
            @click="descramount"
          />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "prodcutItem",
  props: {
    product: {
      type: Object
    }
  },
  methods: {
    descramount() {
      if (this.product.cStock > 0) {
        this.$emit("amount-change", Number(this.product.cStock) - 1);
      }
    },
    addamount() {
      this.$emit("amount-change", Number(this.product.cStock) + 1);
    },
    update() {
      this.$emit("update-product", this.product.cCode);
    }
  }
};
</script>

<style scoped>
.product {
  padding: 0 0 20px 20px;
  width: 355px;
  height: 120px;
  display: flex;
  justify-content: flex-start;
}
.product-name {
  font-size: 14px;
  font-family: Helvetica;
  color: #000000;
  line-height: 17px;
}
.money {
  color: #2f69f8;
  font-size: 12px;
}
.img {
  width: 100px;
  height: 100px;
}
.right {
  display: flex;
  width: 238px;
  padding-right: 17px;
  margin-left: 20px;
  flex-direction: column;
  justify-content: space-around;
}
.top {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.bottom {
  display: flex;
  width: 100%;
  justify-content: flex-start;
}
.amount {
  align-self: center;
  font-size: 17px;
  color: #2e2e2e;
  line-height: 24px;
}
.amounts {
  margin-left: 14px;
}
.operation {
  align-self: center;
  display: flex;
}
.img-add {
  margin-left: 14px;
  width: 14px;
  height: 14px;
  cursor: pointer;
}
.img-decripe {
  margin-left: 14px;
  margin-top: 7px;
  height: 3px;
  width: 14px;
  cursor: pointer;
}
</style>
