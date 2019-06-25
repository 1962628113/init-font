<template>
  <div class="bottom">
    <div class="left">
      <div class="total">
        总数量<span class="amounts">{{ TotalAmounts }}个</span>
      </div>
      <div class="pandian">库存盘点</div>
    </div>
    <div class="right">￥{{ TotalPrice }}</div>
  </div>
</template>
<script>
export default {
  name: "bottom",
  props: {
    TotalPrice: {
      type: Number,
      default: 0
    },
    TotalAmounts: {
      type: Number,
      default: 0
    }
  }
};
</script>
<style scoped>
.bottom {
  display: flex;
  justify-content: space-between;
}
.left {
  margin-left: 20px;
  margin-top: 13px;
  width: 150px;
  text-align: left;
}
.total {
  font-size: 12px;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  line-height: 16px;
}
.amounts {
  color: #2f69f8;
  margin-left: 5px;
}
.pandian {
  color: #6a6a6a;
  font-size: 12px;
}
.right {
  height: 28px;
  font-size: 20px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: rgba(47, 105, 248, 1);
  line-height: 28px;
  margin-right: 36px;
  align-self: center;
}
</style>
