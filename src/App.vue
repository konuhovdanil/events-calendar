<template>
  <div class="app">
    <div class="app__container">
      <header class="header">
        <breadcrumbs :breadcrumbs="breadcrumbs"/>
      </header>

      <div class="app__container__planning">
        <div class="app__container__planning__title">
          Планирование
        </div>

        <div class="app__container__planning__container">
          <events-calendar/>
          <employees/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from './components/Breadcrumbs'
import EventsCalendar from './components/EventsCalendar'
import Employees from './components/Employees'

export default {
  name: 'App',
  components: {
    Breadcrumbs,
    EventsCalendar,
    Employees
  },
  data() {
    return {
      breadcrumbs: [
        {
          name: 'Главная',
          url: '/'
        },
        {
          name: 'Сервисы',
          url: '/'
        },
        {
          name: 'Планирование',
          url: '/'
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: RobotoCondensed;
  src: url('./fonts/RobotoCondensed-Regular.ttf') format('ttf');
}

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  font-family: RobotoCondensed, sans-serif;
}

.app {
  background: #E5E5E5;
  min-height: 100vh;
  padding-bottom: 290px;

  &__container {
    max-width: 1374px;
    margin: 0 auto;

    &__planning {

      &__title {
        font-style: normal;
        font-weight: bold;
        font-size: 72px;
        color: #002033;
        padding-left: 10px;
        transform: scale(0.83, 1);
        transform-origin: left;
        margin-bottom: 42px;
      }

      &__container {
        display: grid;
        grid-template-columns: 66% 1fr;
        gap: 37px;
        grid-auto-rows: auto;
      }
    }
  }
}
</style>
