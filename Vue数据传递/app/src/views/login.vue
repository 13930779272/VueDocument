<template>
  <div>
    <div @click="getCode">
      <button v-if="flag">获取短信</button>
      <button v-if="!flag">重新获取{{second}}s</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
      second: 60,
      timer: null
    };
  },
  methods: {
    getCode() {
      let that = this;
      if (that.flag) {
        that.flag = false;
        let interval = window.setInterval(() => {
          that.second--;
          that.setStorage(that.second);
          if (that.second <= 0) {
            that.second = 60;
            that.flag = true;
            window.clearInterval(interval);
          }
        }, 1000);
      }
    },
    setStorage(time) {
      console.log(1);
      localStorage.setItem("time", time);
      localStorage.setItem("_time", new Date().getTime());
    },
    getStorage() {
      let localDelay = {};
      localDelay.tiem = localStorage.getItem("time");
      localDelay._time = localStorage.getItem("_time");
      return localDelay;
    },
    judgeCode() {
      let that = this;
      let localDelay = that.getStorage();
      let secTime = parseInt((new Date().getTime() - localDelay._time) / 1000);
      if (secTime > localDelay.tiem) {
        that.flag = true;
        console.log("已经过期");
      } else {
        that.flag = false;
        let _delay = localDelay.tiem - secTime;
        that.second = _delay
        that.timer = setInterval(() => {
          if (_delay > 1) {
            _delay--;
            that.setStorage(_delay);
            that.second = _delay;
            that.flag = false;
          } else {
            // 此处赋值时为了让浏览器打开的时候,直接就显示剩余的时间
            that.flag = true;
            window.clearInterval(that.timer);
          }
        }, 1000);
      }
    }
  },
  mounted() {
    this.judgeCode()
  },
};
</script>

<style lang="scss" scoped>
</style>