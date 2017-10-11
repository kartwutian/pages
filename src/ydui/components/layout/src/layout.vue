<template>
    <section class="yd-flexview">
        <slot name="navbar" ></slot>

        <slot name="top"></slot>

        <section class="yd-scrollview" ref="scrollView" id="scrollView">
            <slot></slot>
        </section>

        <slot name="bottom"></slot>

        <slot name="tabbar"></slot>
    </section>
</template>

<script type="text/babel">
    export default {
        name: 'yd-layout',
    }
</script>

<style lang="less">
    @import "../../../styles/components/layout.less";
</style>
