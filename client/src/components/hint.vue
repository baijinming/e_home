<template>
    <div class="hint">
      {{title}}
    </div>
</template>

<script>
    export default {
        props: {
          title: ''
        }
    }
</script>

<style scoped lang="scss">
  .hint {
    height: 20px;
    padding: 5px 10px;
    margin: 0 auto;
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    border-radius: 4px;
    background-color: #666;
    position: fixed;
    bottom: -50px;
    left: 50%;
    z-index: 1000;
    transform: translateX(-50%);
    animation: hint 2s;
  }

  @keyframes hint {
    0%{
      opacity: 0;
    }
    50% {
      opacity: 1;
      bottom: 50%;
    }
    100% {
      opacity: 1;
      bottom: 50%;
    }
  }
</style>
