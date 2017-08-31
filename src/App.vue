<template>
  <div id="app">
    <div class="nav">
      <mu-appbar title="" class="appbar" :class="{'nav-hide': !open}">
      <mu-icon-button @click.native="toggleNav" icon="menu" slot="left" />
      <mu-icon-button slot="right" href="https://github.com/jotang/jotang.party" icon=":icon-custom-github" />
      </mu-appbar>
    </div>
      <mu-drawer @close="toggleNav" :open="open" :docked="docked" :overlay="docked" class="app-drawer" :zDepth="1">
        <h1>求合适的图片</h1>
        <mu-list>
          <mu-list-item title="关于焦糖">
            <mu-icon slot="left" value="info_outline"/>
          </mu-list-item>
          <mu-list-item title="成员介绍">
            <mu-icon slot="left" value="people"/>
          </mu-list-item>
        </mu-list>
          <mu-sub-header>友情链接</mu-sub-header>
        <mu-list>
          <mu-list-item href="https://github.com/JoTang" target="_blank" title="JoTang on GitHub"/>
          <mu-list-item href="http://www.zuozuovera.cn" target="_blank" title="薇拉航线"/>
          <mu-list-item href="http://vuejs.org/" target="_blank" title="Vue"/>
          <mu-list-item href="https://material.google.com/" target="_blank" title="Material Design"/>
          <mu-divider shallowInset/>
          <mu-list-item v-if="docked" @click.native="open = false" title="Close" />
        </mu-list>
      </mu-drawer>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    const desktop = isDesktop()
    return {
      open: desktop,
      docked: desktop,
      desktop: desktop,
      title: ''
    }
  },
  mounted () {
    this.changeNav()
    window.addEventListener('resize', this.changeNav)
  },
  methods: {
    toggleNav () {
      this.open = !this.open
    },
    changeNav () {
      const desktop = isDesktop()
      this.docked = desktop
      if (desktop === this.desktop) return
      if (!desktop && this.desktop && this.open) {
        this.open = false
      }
      if (desktop && !this.desktop && !this.open) {
        this.open = true
      }
      this.desktop = desktop
    }
  }
}
function isDesktop () {
  return window.innerWidth > 993
}
</script>

<style lang="less">
@import "assets/jotang.less";
#app {
  font-family: -apple-system,
  "Helvetica Neue", "Arial",
  "PingFang SC", "Hiragino Sans GB", "STHeiti", "Microsoft YaHei", "Microsoft JhengHei",
  "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC",
  "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
}
.appbar {
  position: fixed;
  left: 256px;
  right: 0;
  top: 0;
  width: auto;
  transition: all .45s cubic-bezier(0.23, 1, 0.32, 1);
  &.nav-hide {
    left: 0;
  }
}

.app-drawer {
  display: flex;
  flex-direction: column;
}

img {
  height: 2cm;
}

</style>