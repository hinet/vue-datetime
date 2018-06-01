# vue-datetime
A Vue.js component implementing the datetime picker control using the bootstrap style.
精简轻量的vue日期时间选择控件

【演示】 [vue-datetime-selector](https://hinet.github.io/vue-datetime-selector/demo/index.html)

<img src="https://raw.githubusercontent.com/hinet/vue-datetime-selector/gh-pages/demo/20180601193636.png"/>

# 安装

```shell
npm install vue-datetime-selector -s
# 如果您使用yarn安装
yarn add vue-datetime-selector
```

# 使用

```vue.js
<template>
  <datetime format="YYYY年MM月DD日 H时i分" v-model="defaultValue"></datetime>
</template>
<script>
    import datetime from 'vue-datetime-selector';
    export default {
        data(){
            return{
                defaultValue:null
            }
        }
  }
</script>
```

## 格式化

```javascript
YYYY/MM/DD
YYYY/MM/DD h:i:s //12小时制
YYYY/MM/DD H:i:s //24小时制
YYYY年MM月DD日
YYYY年MM月DD日 H时i分s秒
```
