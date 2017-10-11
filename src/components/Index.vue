<template>
  <yd-layout>
    <h1 class="demo-logo"><img src="http://static.ydcss.com/ydui/img/logo.png"></h1>
    <h2 class="demo-detail-title" style="height: 2000px;">一只基于Vue2.x的移动端&微信UI。 -YDUI Touch</h2>
    <h2 class="demo-detail-title">一只基于Vue2.x的移动端&微信UI。 -YDUI Touch</h2>
    <h2 class="demo-detail-title">一只基于Vue2.x的移动端&微信UI。 -YDUI Touch</h2>
    <h2 class="demo-detail-title">一只基于Vue2.x的移动端&微信UI。 -YDUI Touch</h2>
    <h2 class="demo-detail-title">一只基于Vue2.x的移动端&微信UI。 -YDUI Touch</h2>
    <h2 class="demo-detail-title">一只基于Vue2.x的移动端&微信UI。 -YDUI Touch</h2>

    <div slot="top">
      123
    </div>
    <div slot="bottom">
      <yd-tabbar slot="tabbar">
        <yd-tabbar-item title="微信" link="/tabbar" dot>
          <yd-icon slot="icon" name="discover"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="发现" link="/asidebar" dot>
          <yd-icon slot="icon" name="star-outline"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="我" link="/asidebar" active>
          <yd-icon slot="icon" name="home"></yd-icon>
          <yd-badge slot="badge" type="danger">2</yd-badge>
        </yd-tabbar-item>
        <yd-tabbar-item title="图片" link="/asidebar">
          <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png" />
        </yd-tabbar-item>
      </yd-tabbar>
    </div>
  </yd-layout>
</template>

<script type="text/babel">
  import { Layout } from '../ydui/components/layout'
  import {TabBar, TabBarItem} from '../ydui/components/tabbar'
  import {Icons} from '../ydui/components/icons';
  export default {
    components: {
        'yd-layout': Layout,
        'yd-tabbar': TabBar,
        'yd-tabbar-item': TabBarItem,
        'yd-icon': Icons
    }
  }
</script>

<style lang="less">
  @import "../ydui/styles/common/variables";
  @import "../ydui/styles/common/mixins";
  @import "../ydui/styles/common/reset";
</style>
