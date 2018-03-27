<template>
    <button type="button" class="btn" :class="[buttonType, buttonSize, buttonBlock]">{{btnText}}</button>
</template>
<script>
  export default {
    name: "Button",
    props: [
      "btnText",
      "btnType",
      "btnBlock",
      "btnSize"
    ],
    computed: {
      buttonType: function(){
        return this.btnType ? `btn-${this.btnType}` : ''
      },
      buttonSize: function(){
        return this.btnSize ? `btn-${this.btnSize}` : ''
      },
      buttonBlock: function(){
        return this.btnBlock ? `btn-${this.btnBlock}` : ''
      }
    }
  }
</script>
<style>
.btn{
  display: inline-block;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  line-height: 1.42857143;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 4px;
  background-image: none;
  margin-top: 5px;
  margin-bottom: 5px;
  transition: all .5s ease;
}
.btn-default{
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
.btn-default:hover{
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.btn-primary{
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
}
.btn-primary:hover{
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}
.btn-success{
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success:hover{
  color: #fff;
  background-color: #449d44;
  border-color: #398439;
}
.btn-info{
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info:hover{
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
}
.btn-waring{
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-waring:hover{
  color: #fff;
  background-color: #ec971f;
  border-color: #d58512;
}
.btn-danger{
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger:hover{
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925;
}
.btn-block{
  display: block;
  width: 100%;
}
.btn-lg{
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.333333;
  border-radius: 6px;
}
.btn-sm{
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
</style>