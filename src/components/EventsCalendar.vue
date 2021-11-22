<template>
  <div class="events-calendar">
    <calendar
        class="custom-calendar"
        :masks="masks"
        :attributes="selectedEmployee?.tasks"
        is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="day-item">
          <span class="day-item__label">
            {{ day.day }}
          </span>

          <div class="day-item__event" v-if="holidays.some(holiday => holiday === day.id) || (day.weekday === 1 || day.weekday === 7)">
            <p
                class="day-item__event__text"
                :style="{'background-color': '#97B2C4'}"
            >
              {{ holidays.some(holiday => holiday === day.id) ? 'Праздник' : 'Выходной' }}
            </p>
          </div>
          <div class="day-item__event" v-else>
            <p
                v-for="attr in attributes"
                :key="attr.key"
                class="day-item__event__text day-item__event__text_task"
                :style="{'background-color': attr.customData.backgroundColor}"
            >
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </calendar>
  </div>
</template>

<script>
import { Calendar, DatePicker } from 'v-calendar'
import { mapState } from 'vuex'

export default {
  name: "EventsCalendar",
  data() {
    return {
      masks: {
        weekdays: 'WWWW',
      },
      holidays: [
        '2021-01-01',
        '2021-02-23',
        '2021-03-08',
        '2021-05-01',
        '2021-05-09',
        '2021-06-12',
        '2021-11-04',
        '2021-11-19',
        '2021-12-12'
      ]
    }
  },
  computed: {
    ...mapState({
      selectedEmployee: state => state.employees.selectedEmployee
    })
  },
  components: {
    Calendar,
    DatePicker,
  }
}
</script>

<style lang="scss">
.events-calendar {
  width: 100%;
  margin-left: 6px;
}

@import '../assets/styles/custom-calendar.scss';

</style>