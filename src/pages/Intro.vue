<template>

  <div class="nav">

  <mu-appbar :zDepth="1" title="介绍" class="appbar" :class="{'nav-hide': !open}">
    
  <mu-icon-button @click.native="toggleNav" icon="menu" slot="left" />

    <mu-icon-button slot="right" href="https://github.com/museui/muse-ui" icon=":mudocs-icon-custom-github" />
  </mu-appbar>


    <mu-drawer @hide="handleHide" @close="toggleNav" :open="open" :docked="docked" :overlay="docked" class="app-drawer" :zDepth="1">
        <img src="../../static/images/text.png"/>
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
    handleHide () {
      if (!this.changeHref) return
      window.location.hash = this.menuVal
      this.changeHref = false
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
