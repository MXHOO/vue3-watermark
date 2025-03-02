<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  text: { type: String, default: 'Watermark' },
  fontSize: { type: Number, default: 16 },
  color: { type: String, default: 'rgba(0,0,0,0.15)' },
  rotate: { type: Number, default: -20 }
})

const wrapperRef = ref<HTMLElement>()

const generateWatermark = () => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!

  // 计算文本宽度
  ctx.font = `${props.fontSize}px Arial`
  const textWidth = ctx.measureText(props.text).width

  // 设置画布尺寸
  canvas.width = textWidth * 2
  canvas.height = props.fontSize * 3

  // 绘制文本
  ctx.translate(canvas.width / 2, canvas.height / 2)
  ctx.rotate((Math.PI / 180) * props.rotate)
  ctx.fillStyle = props.color
  ctx.font = `${props.fontSize}px Arial`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(props.text, 0, 0)

  return canvas.toDataURL()
}

const setBackground = () => {
  if (!wrapperRef.value) return
  wrapperRef.value.style.backgroundImage = `url(${generateWatermark()})`
  wrapperRef.value.style.backgroundRepeat = 'repeat'
}

watch(() => [props.text, props.fontSize, props.color], setBackground)
onMounted(setBackground)
</script>

<template>
  <div
    ref="wrapperRef"
    class="watermark-wrapper"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.watermark-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>