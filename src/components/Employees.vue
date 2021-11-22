<template>
  <div class="employees">
    <div class="employees__selector">
      <div class="employees__selector__title">
        Сотрудник
      </div>

      <ui-select :modelValue="selectedEmployee" :options="employees" @update:modelValue="val => setSelectedEmployee(val)">
        <template #item="{ option }">
          <div class="employees__selector__item" v-if="!option">
            <div class="employees__selector__item__name">Ничего не выбрано</div>
          </div>
          <div class="employees__selector__item" v-else>
            <div class="employees__selector__item__img">
              <img :src="getImgUrl(option?.img)" alt="user-pic">
            </div>
            <div class="employees__selector__item__name">{{ option?.name }}</div>
          </div>
        </template>
      </ui-select>
    </div>

    <div class="employees__tasks-info" v-if="selectedEmployee?.tasks">
      <div class="employees__tasks-info__item">
        <div class="employees__tasks-info__item__count">{{ tasksCount }}</div>
        <div class="employees__tasks-info__item__name">поездки</div>
      </div>
      <div class="employees__tasks-info__item">
        <div class="employees__tasks-info__item__count">{{ tasksDuration }}</div>
        <div class="employees__tasks-info__item__name">дней командировки</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import moment from 'moment'

export default {
  name: "Employees",
  computed: {
    ...mapState({
      employees: state => state.employees.employees,
      selectedEmployee: state => state.employees.selectedEmployee
    }),
    tasksCount() {
      if (this.selectedEmployee?.tasks.length > 0) {
        return this.selectedEmployee?.tasks?.length
      }

      return 0
    },
    tasksDuration() {
      if (this.selectedEmployee?.tasks.length > 0) {
        let durationInDays = 0

        this.selectedEmployee.tasks.forEach(task => {
          const { start, end } = task.dates

          durationInDays += moment(end).diff(start, 'days') + 1
        })

        return durationInDays
      }

      return 0
    }
  },
  methods: {
    ...mapMutations({
      setSelectedEmployee: 'employees/setSelectedEmployee',
    }),
    getImgUrl(pic) {
      const images = require.context('../assets/', false, /\.jpg$/)
      return images('./' + pic + ".jpg")
    }
  }
}
</script>

<style scoped lang="scss">
.employees {
  width: 100%;

  &__selector {
    background: #FFFFFF;
    border-radius: 6px;
    padding: 26px 32px;
    height: fit-content;
    margin-bottom: 10px;

    &__title {
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      color: #002033;
      transform: scale(0.83, 1);
      transform-origin: left;
      margin-bottom: 17px;
    }

    &__item {
      display: flex;
      flex-direction: row;
      align-items: center;

      &__name {
        transform: scale(0.9, 1);
        transform-origin: left;
      }

      &__img {
        margin-right: 10px;

        & > img {
          border-radius: 50%;
        }
      }
    }
  }

  &__tasks-info {
    background: #FFFFFF;
    border-radius: 6px;
    padding: 48px 32px 20px;
    height: fit-content;

    &__item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      &:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        padding-bottom: 11px;
        margin-bottom: 13px;
      }

      &__count {
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        letter-spacing: -0.05em;
        color: #002033;
      }

      &__name {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        color: #002033;
      }
    }
  }
}
</style>