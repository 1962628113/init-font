<template>
  <div class="add-list">
    <input
      type="text"
      v-model="producparter.cName"
      placeholder="请输入商品名称"
    />
    <input
      type="text"
      v-model="producparter.cCode"
      @blur="check()"
      placeholder="请输入商品编码"
    />
    <div class="inline">
      <input
        type="text"
        v-model="producparter.cPrice"
        placeholder="请输入商品价格"
      />
      <input
        type="text"
        v-model="producparter.cStock"
        placeholder="请输入商品库存"
      />
    </div>
    <div>
      <img :src="picUrl" alt="" class="img-show" />
      <el-upload
        class="upload-demo"
        :limit="1"
        accept="image/x-png,image/jpeg,image/jpg"
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :file-list="fileList"
        :show-file-list="false"
        :on-success="handleSuccess"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
    </div>
    <!--<input-->
    <!--type="text"-->
    <!--v-model="producparter.cPicture"-->
    <!--placeholder="请输入商品图片"-->
    <!--/>-->
    <button class="btn" @click="addproducts">加入库存</button>
  </div>
</template>
<script>
export default {
  name: "addproducts",
  data() {
    return {
      picUrl:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560491028842&di=9973a5294bb12872016625db7a6ddf12&imgtype=0&src=http%3A%2F%2Farticle.fd.zol-img.com.cn%2Ft_s640x2000%2Fg1%2FM07%2F06%2F06%2FCg-4jVSUAdaIWn5hAAB6vS0LogUAAPG3wPZkuEAAHrV108.jpg",
      producparter: {
        cName: "",
        cPrice: "",
        cCode: "",
        cPicture:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560491028842&di=9973a5294bb12872016625db7a6ddf12&imgtype=0&src=http%3A%2F%2Farticle.fd.zol-img.com.cn%2Ft_s640x2000%2Fg1%2FM07%2F06%2F06%2FCg-4jVSUAdaIWn5hAAB6vS0LogUAAPG3wPZkuEAAHrV108.jpg",
        cStock: ""
      },
      fileList: []
    };
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    productLists: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    addproducts() {
      if (this.producparter) {
        this.producparter.price = Number(this.producparter.cPrice);
        this.producparter.amount = Number(this.producparter.cPrice);
        this.$emit("add", { product: this.producparter, isShow: !this.isShow });
        this.producparter = {};
        this.producparter.cPicture = this.picUrl;
      }
    },
    handleSuccess(file, fileList) {
      this.picUrl = fileList.url;
      this.producparter.cPicture = fileList.url;
      console.log(fileList.url);
    },
    check() {
      const index = this.productLists.findIndex(
        product => product.cCode === this.producparter.cCode
      );
      console.log(index);
    }
  }
};
</script>
<style>
.img-show {
  margin-top: 8px;
  margin-right: 16px;
  width: 64px;
  height: 64px;
}
.upload-demo {
  display: inline;
}
.list {
  overflow-y: hidden;
  margin: 0 auto;
  border: 1px solid black;
  width: 375px;
  min-height: 680px;
  position: relative;
}
.el-upload--picture-card {
  margin-top: 8px;
  margin-left: 0;
  width: 64px !important;
  height: 64px !important;
  line-height: 64px !important;
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
