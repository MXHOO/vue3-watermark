# vue3水印组件

## 1.安装

`npm install vue3-watermark-test`

## 2.使用

```
import WaterMark from 'vue3-watermark-test'

 <Vue3Watermark
  text="Confidential"
  :font-size="24"
  color="rgba(255,0,0,0.2)"
>
  <div class="content">受保护的内容区域</div>
</Vue3Watermark>
```

## 3.属性

| 属性名    | 类型   | 默认值          | 说明         |
| --------- | ------ | --------------- | ------------ |
| text      | String | ''              | 水印文字     |
| font-size | Number | 16              | 水印文字大小 |
| color     | String | rgba(0,0,0,0.2) | 水印文字颜色 |
