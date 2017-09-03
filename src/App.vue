<template>
  <div id="app">
    <div class="nav">
      <mu-appbar title="" class="appbar" :class="{'nav-hide': !open}">
        <mu-icon-button @click.native="toggleNav" icon="menu" slot="left" />
        <mu-icon-button slot="right" href="https://github.com/jotang/jotang.party" icon=":icon-custom-github" />
      </mu-appbar>
    </div>

    <mu-drawer @close="toggleNav" :open="open" :docked="docked" :overlay="docked" class="app-drawer" :zDepth="1">
      <mu-list>
        <router-link to="/">
          <mu-list-item @click="toggleNav()" title="关于焦糖">
            <mu-icon slot="left" value="home" />
          </mu-list-item>
        </router-link>
        <router-link to="jotangers">
          <mu-list-item @click="toggleNav()" title="成员介绍">
            <mu-icon slot="left" value="people" />
          </mu-list-item>
        </router-link>
        <router-link to="timeshaft">
          <mu-list-item @click="toggleNav()" title="时间轴">
            <mu-icon slot="left" value="timeline" />
          </mu-list-item>
        </router-link>
      </mu-list>
      <mu-sub-header>友情链接</mu-sub-header>
      <mu-list>
        <mu-list-item href="https://github.com/JoTang" target="_blank" title="JoTang on GitHub" />
        <mu-list-item href="http://www.zuozuovera.cn" target="_blank" title="薇拉航线" />
        <mu-divider shallowInset/>
        <mu-list-item v-if="docked" @click.native="open = false" title="Close" />
      </mu-list>
    </mu-drawer>

    <div class="content">
      <router-view/>
    </div>

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
  overflow: hidden;
}

.appbar {
  position: fixed;
  left: 256px;
  right: 0;
  top: 0;
  width: auto;
  transition: all .45s cubic-bezier(0.23, 1, 0.32, 1);
  background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
  &.nav-hide {
    left: 0;
  }
}

.content {
  padding-top: 56px;
  padding-left: 256px;
  overflow: auto;
}

.wrapper {
  padding: 48px 72px;
  display: flex;
  flex-direction: column;
}
@media (max-width: 480px) {
  .content{
    padding-top: 64px;
  }
}

@media (max-width: 993px) {
  .appbar {
    left: 0;
    height: 48px;
  }
  .content {
    padding-left: 0;
  }
  .wrapper {
    padding: 24px 36px;
  }
  .app-drawer{
    width: 196px;
  }
}


.app-drawer {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
  .mu-item-title {
    color: #355c7d;
  }
  .mu-list {
    .mu-icon {
      color: #355c7d;
    }
  }
}

</style>