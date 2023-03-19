<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const canvas = document.querySelector('canvas');
  const $ = canvas.getContext('2d');
  const W = (canvas.width = innerWidth);
  const H = (canvas.height = innerHeight);

  const str = 'А+Б0В-Г1Д=Е2І Ж3З И4Й К5Л М6Н О7П Р8С Т9У Ф!Х Ц?Ч Ш.Щ,Ї Ь:ЭЮ;Я';
  const matrix = str.split('');

  let font = 11;
  let col = W / font;
  let arr = [];

  for (let i = 0; i < col; i++) arr[i] = 1;

  function draw() {
    $.fillStyle = '#11182750';
    $.fillRect(0, 0, W, H);
    $.fillStyle = '#0f0';
    $.font = font + 'px system-ui';
    for (let i = 0; i < arr.length; i++) {
      let txt = matrix[Math.floor(Math.random() * matrix.length)];
      $.fillText(txt, i * font, arr[i] * font);
      if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
      arr[i]++;
    }
  }

  setInterval(draw, 123);
});
</script>

<template>
  <canvas class="fixed top-0 left-0 f-full h-full" style="z-index: -10"> </canvas>
</template>

<style scoped></style>
