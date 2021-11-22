<template>
  <div class="ui-select" @click="isShowSelector = !isShowSelector">
    <div class="ui-select__value">
      <div class="ui-select__value__text">
        <slot name="item" :option="modelValue"/>
      </div>
      <div class="ui-select__value__icon">

      </div>
    </div>
    <div class="ui-select__selector" :class="{'ui-select__selector_is-show': isShowSelector}">
      <div class="ui-select__selector__item" v-for="option in options" @click="$emit('update:modelValue', option)">
        <slot name="item" :option="option" v-if="option"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiSelect",
  props: {
    modelValue: Object,
    options: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      isShowSelector: false
    }
  }
}
</script>

<style scoped lang="scss">
.ui-select {
  width: 100%;
  position: relative;
  --select-border: 1px solid rgba(0, 66, 105, 0.28);
  border: var(--select-border);
  border-radius: 3px;
  background: #fff;
  cursor: pointer;
  height: 48px;

  &__value {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #002033;
    height: 100%;
    width: 100%;
    justify-content: space-between;

    &__text {
      padding: 7px 17px;
    }

    &__icon {
      position: relative;
      width: 48px;
      height: 100%;
      border-left: var(--select-border);

      &::before {
        position: absolute;
        content: '';
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 5px solid rgba(0, 32, 51, 0.35);
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }


  &__selector {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: var(--select-border);
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    background: #fff;
    display: none;

    &_is-show {
      display: block;
    }

    &__item {
      padding: 7px 17px;

      &:hover {
        background: rgba(0, 32, 51, 0.1);
      }
    }
  }
}
</style>