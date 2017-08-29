<template>
  <div class="brand">
    <div class="logo">
      <img src="../../static/images/logo-without-text.png">
    </div>
    <div class="name">
      <img src="../../static/images/text.png">
    </div>
  </div>

</template>
<style>

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.brand {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.logo {
  height: 200px;
  width: 200px;
  animation: spin 5s infinite linear;
}

.logo:hover {
  animation-duration: .1s;
}

img {
  width: 100%;
}

</style>

