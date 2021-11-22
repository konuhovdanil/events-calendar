<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__item" v-for="(breadcrumb, idx) in breadcrumbs">
      <a :href="breadcrumb.url" class="breadcrumbs__item__link" :class="{'breadcrumbs__item__link_latest': breadcrumbs.length - 1 === idx}">
        {{ breadcrumb.name }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    breadcrumbs: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.breadcrumbs {
  padding: 45px 10px 19px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 48px;

  &__item {
    position: relative;


    &:not(&:last-child) {
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        width: 7px;
        height: 11px;
        right: -28px;
        transform: translateY(-50%);
        background-image: url("../assets/breadcrumbs-arrow.svg");
      }
    }

    &__link {
      text-decoration: none;
      color: rgba(0, 32, 51, 0.6);

      &_latest {
        pointer-events: none;
        color: #002033;
      }
    }
  }
}
</style>