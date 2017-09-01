<template>
  <div id="app">
    <jotang-logo/>
    <br>
    <mu-raised-button icon="subject" label="焦糖论坛" labelPosition="after">
    </mu-raised-button>
    <router-link to='/intro'>
      <mu-raised-button icon="subject" label="进入官网" labelPosition="after">
      </mu-raised-button>
    </router-link>
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

