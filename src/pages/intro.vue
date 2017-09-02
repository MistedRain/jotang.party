<template>
  <div class="wrapper">
    <jotang-logo/>
    <h1>焦糖（ JoTang ）工作室目前位于电子科大沙河校区三教507，是一个倡导以工程师文化、极客文化为核心的 JSM 精神的工作室。</h1>
    <h2>Just do it：即想即做，敢于大胆尝试</h2>
    <h2>Share new imports：善于总结，喜欢分享</h2>
    <h2>Make things beautiful：享受捣鼓，爱折腾，匠人之心</h2>
  </div>
</template>

<script>
import logo from '../components/logo'
export default {
  components: {
    'jotang-logo': logo
  }
}
</script>

<style lang="css">
h1,h2{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  vertical-align: center;
  color: #1F2D3D;
  margin-top: 40px;
}
</style>
