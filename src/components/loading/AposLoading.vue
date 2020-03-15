<template>
  <div class="apos-loading">
    <div class="apos-loading__circle apos-loading__circle--1"></div>
    <div class="apos-loading__circle apos-loading__circle--2"></div>
    <div class="apos-loading__circle apos-loading__circle--3"></div>
    <div class="apos-loading__circle apos-loading__circle--4"></div>
    <div class="apos-loading__circle apos-loading__circle--5"></div>
    <div class="apos-loading__circle apos-loading__circle--6"></div>
    <div class="apos-loading__circle apos-loading__circle--7"></div>
    <div class="apos-loading__circle apos-loading__circle--8"></div>
    <div class="apos-loading__circle apos-loading__circle--9"></div>
    <div class="apos-loading__circle apos-loading__circle--10"></div>
    <div class="apos-loading__circle apos-loading__circle--11"></div>
    <div class="apos-loading__circle apos-loading__circle--12"></div>
  </div>
</template>

<script>
module.exports = {
  name: 'AposLoading'
}
</script>

<style lang="scss">
  .apos-loading {
    width: 17px;
    height: 17px;
    position: relative;
  }

  .apos-loading__circle {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .apos-loading__circle:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 16%;
    height: 16%;
    background-color: var(--a-base-1);
    border-radius: 100%;
    -webkit-animation: apos-bounce-delay 1.2s infinite ease-in-out both;
            animation: apos-bounce-delay 1.2s infinite ease-in-out both;
  }
  .apos-loading__circle--2 {
    -webkit-transform: rotate(30deg);
        -ms-transform: rotate(30deg);
            transform: rotate(30deg); }
  .apos-loading__circle--3 {
    -webkit-transform: rotate(60deg);
        -ms-transform: rotate(60deg);
            transform: rotate(60deg); }
  .apos-loading__circle--4 {
    -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
            transform: rotate(90deg); }
  .apos-loading__circle--5 {
    -webkit-transform: rotate(120deg);
        -ms-transform: rotate(120deg);
            transform: rotate(120deg); }
  .apos-loading__circle--6 {
    -webkit-transform: rotate(150deg);
        -ms-transform: rotate(150deg);
            transform: rotate(150deg); }
  .apos-loading__circle--7 {
    -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
            transform: rotate(180deg); }
  .apos-loading__circle--8 {
    -webkit-transform: rotate(210deg);
        -ms-transform: rotate(210deg);
            transform: rotate(210deg); }
  .apos-loading__circle--9 {
    -webkit-transform: rotate(240deg);
        -ms-transform: rotate(240deg);
            transform: rotate(240deg); }
  .apos-loading__circle--10 {
    -webkit-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
            transform: rotate(270deg); }
  .apos-loading__circle--11 {
    -webkit-transform: rotate(300deg);
        -ms-transform: rotate(300deg);
            transform: rotate(300deg); }
  .apos-loading__circle--12 {
    -webkit-transform: rotate(330deg);
        -ms-transform: rotate(330deg);
            transform: rotate(330deg); }
  .apos-loading__circle--2:before {
    -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s; }
  .apos-loading__circle--3:before {
    -webkit-animation-delay: -1s;
            animation-delay: -1s; }
  .apos-loading__circle--4:before {
    -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s; }
  .apos-loading__circle--5:before {
    -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s; }
  .apos-loading__circle--6:before {
    -webkit-animation-delay: -0.7s;
            animation-delay: -0.7s; }
  .apos-loading__circle--7:before {
    -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s; }
  .apos-loading__circle--8:before {
    -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s; }
  .apos-loading__circle--9:before {
    -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s; }
  .apos-loading__circle--10:before {
    -webkit-animation-delay: -0.3s;
            animation-delay: -0.3s; }
  .apos-loading__circle--11:before {
    -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s; }
  .apos-loading__circle--12:before {
    -webkit-animation-delay: -0.1s;
            animation-delay: -0.1s; }

  @-webkit-keyframes apos-bounce-delay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
              transform: scale(0);
    } 40% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }

  @keyframes apos-bounce-delay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
              transform: scale(0);
    } 40% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }
</style>
