<template>
  <li :class="{'completed':val1.checked,'editing':!val1.onoff,'axctive':val1.onoff}">
    <!-- {{val1}} -->
    <div class="view" @change="pData">
      <input class="toggle" type="checkbox" v-model="val1.checked" />
      <label @dblclick="retxt">{{val1.txt}}</label>
      <button class="destroy"></button>
    </div>
    <!-- 动态的value是要加:的 -->
    <input class="edit" :value="val1.txt" v-selet @keyup.esc="retxt" @blur="blur" />
  </li>
</template>

<script>
/* 
  在这涉及到操作父级的数据单向数据流的问题：正常来说是在这操作父级的数据不会进行改变，但是父级的数据同样会改变会不严谨，
  所以在这先变成自己的数据强行达到单向数据流的效果，会更严谨
*/
export default {
  props: {
    // 接受父级的数据是一个一个的小对象
    val1: {
      // 规定数据类型
      type: Object,
      required: true,
      onof:true
    }
  },
  // data() {
  //   return {
  //     // 把父级的数据变成自己的数据
  //     zval: Object.assign({}, this.val1)
  //   };
  // },
  methods: {
    // 父子同步数据函数
    pData(ev) {
      // 事件源得到checked的值
      const { checked } = ev.target;
      // 结构id的值
      const { id } = this.val1;
      // 改变子级的数据
      this.val1.checked = checked;
      // 改变父级的数据
      this.$emit("cData", id, checked);
    },
    // 双击可以更改内容
    retxt() {
      this.onof = !this.onof;
      const { onoff, id } = this.val1;
      this.$emit("reT", id, !onoff);
    },
    // 失焦改变
    blur(ev) {
      if(!this.onof) return
      this.onof = !this.onof;
      const { value:txt } = ev.target;
      const { id ,onoff } = this.val1;
      this.$emit("reText", id,txt,!onoff);
    }
  },
  // 自定义指令：聚焦的效果
  directives: {
    selet(ele) {
      ele.select();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>