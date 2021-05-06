<template>
    <div
        :class="['alike-line', 'alike-line--' + type]"
        :style="[{ height: height }, customStyle]"
    ></div>
</template>

<script>
/**
 * alike-line
 * @describe 块级占位行
 * @website http://alike.galloping.xyz
 * @property customStyle {Object} 自定义根组件样式
 * @property type {String} 行的类型
 * @property height {String} 行的高度
 */

export default {
    name: "alike-line",
    props: {
        customStyle: {
            type: Object,
            default: () => {},
        },
        type: {
            type: String,
            default: "default",
        },
        height: {
            type: String,
            default: "10px",
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../index.scss";
.alike-line {
    width: 100%;
}
.alike-line--white {
    background-color: $alike-color-white;
}
.alike-line--default {
    background-color: $alike-color-default;
}
.alike-line--primary {
    background-color: $alike-color-primary;
}
.alike-line--success {
    background-color: $alike-color-success;
}
.alike-line--fail {
    background-color: $alike-color-fail;
}
.alike-line--warn {
    background-color: $alike-color-warn;
}
.alike-line--info {
    background-color: $alike-color-info;
}
</style>
