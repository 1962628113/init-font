<template>
  <div class="add-list">
    <input type="text" v-model="producparter.cName" />
    <input type="text" v-model="producparter.cCode" />
    <div class="inline">
      <input type="text" v-model="producparter.cPrice" />
      <input type="text" v-model="producparter.cStock" />
    </div>

    <input type="text" v-model="producparter.cPicture" />
    <button class="btn" @click="saveproducts">保存</button>
  </div>
</template>
<script>
export default {
  name: "editproducts",
  props: {
    isShowEdit: {
      type: Boolean,
      default: false
    },
    producparter: {
      type: Object
    }
  },
  methods: {
    saveproducts() {
      this.$emit("save", {
        product: this.producparter,
        isShowEdit: !this.isShowEdit
      });
    }
  }
};
</script>
<style>
.list {
  overflow-y: hidden;
  margin: 0 auto;
  border: 1px solid black;
  width: 375px;
  min-height: 680px;
  position: relative;
}
.inline {
  display: flex;
  justify-content: space-between;
}
.inline input {
  width: 111px;
}

.add-list {
  position: absolute;
  z-index: 2;
  bottom: 0;
  width: 315px !important;
  height: 315px;
  background-color: #ffffff;
  box-shadow: 0 -2px 5px #000000;
  width: 100%;
  display: flex;
  padding: 0 30px;
  flex-direction: column;
}
.add-list input {
  padding: 0 8px 0 10px;
  height: 42px;
  margin-top: 8px;
  outline: none;
  border: none;
  border-bottom: 1px solid #cfcfe2;
}
.btn {
  border: none;
  outline: none;
  margin-top: 27px;
  width: 301px;
  height: 44px;
  color: #ffffff;
  font-size: 14px;
  background: rgba(51, 102, 255, 1);
  cursor: pointer;
  border-radius: 4px;
}
</style>
