<template>
  <div class="gridlist-demo-container">
    <mu-grid-list class="gridlist-demo">
      <mu-sub-header>图片展示</mu-sub-header>
      <mu-grid-tile v-for="(tile,index) in list" :key="index">
        <img v-bind:src="tile.image" />
        <span slot="title">{{tile.title}}</span>
        <span slot="subTitle">by
          <b>{{tile.author}}</b>
        </span>
        <mu-icon-button icon="star_border" slot="action" />
      </mu-grid-tile>
    </mu-grid-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        image: '/static/images/一起动手装饰现场.jpg',
        title: '一起装饰现场',
        author: '焦糖工作室'
      }, {
        image: '/static/images/互相讲解现场.jpg',
        title: '互相讲解',
        author: '焦糖工作室'
      }, {
        image: '/static/images/项目讨论中.jpg',
        title: '项目讨论',
        author: '焦糖工作室'
      }, {
        image: '/static/images/交流项目.jpg',
        title: '交流项目',
        author: '焦糖工作室'
      }, {
        image: '/static/images/SAP.jpeg',
        title: '项目展示',
        author: '焦糖工作室'
      }, {
        image: '/static/images/SAP.jpeg',
        title: 'Morning',
        author: 'mokayi'
      }, {
        image: '/static/images/SAP.jpeg',
        title: 'Vegetables',
        author: 'NUyyyyyyy'
      }, {
        image: '/static/images/SAP.jpeg',
        title: 'water',
        author: 'TDDyyyyyyy'
      }]
    }
  }
}
</script>

<style scope>
.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 70%;
}

.gridlist-demo{
  width: 500px;
  height: 450px;
  overflow-y: auto;
}
</style>