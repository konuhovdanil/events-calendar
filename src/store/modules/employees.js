export const employees = {
	state() {
		const CURRENT_YEAR = new Date().getFullYear()
		const CURRENT_MONTH = new Date().getMonth()

		return {
			employees: [
				{
					id: 0,
					img: 'user-pic',
					name: 'Алексей Лечащий',
					tasks: [
						{
							key: 1,
							customData: {
								title: 'Москва',
								backgroundColor: '#59A646'
							},
							dates: {start: new Date(CURRENT_YEAR, CURRENT_MONTH, 5), end: new Date(CURRENT_YEAR, CURRENT_MONTH, 8)},
						},
						{
							key: 2,
							customData: {
								title: 'Екатеринбург',
								backgroundColor: '#0071B3'
							},
							dates: {start: new Date(CURRENT_YEAR, CURRENT_MONTH, 2), end: new Date(CURRENT_YEAR, CURRENT_MONTH, 3)},
						},
						{
							key: 3,
							customData: {
								title: "Санкт-Петербург",
								backgroundColor: '#AF032C'
							},
							dates: {start: new Date(CURRENT_YEAR, CURRENT_MONTH, 18), end: new Date(CURRENT_YEAR, CURRENT_MONTH, 19)},
						},
						{
							key: 4,
							customData: {
								title: 'Сочи',
								backgroundColor: '#DE911D'
							},
							dates: {start: new Date(CURRENT_YEAR, CURRENT_MONTH, 28), end: new Date(CURRENT_YEAR, CURRENT_MONTH, 30)},
						}
					]
				},
				{
					id: 1,
					img: 'user-pic',
					name: '1 Алексей Лечащий',
					tasks: [
						{
							key: 1,
							customData: {
								title: 'Москва',
								backgroundColor: '#59A646'
							},
							dates: {start: new Date(CURRENT_YEAR, CURRENT_MONTH, 18), end: new Date(CURRENT_YEAR, CURRENT_MONTH, 18)},
						},
						{
							key: 2,
							customData: {
								title: 'Екатеринбург',
								backgroundColor: '#0071B3'
							},
							dates: {start: new Date(CURRENT_YEAR, CURRENT_MONTH, 16), end: new Date(CURRENT_YEAR, CURRENT_MONTH, 17)},
						},
						{
							key: 3,
							customData: {
								title: "Санкт-Петербург",
								backgroundColor: '#AF032C'
							},
							dates: {start: new Date(CURRENT_YEAR, CURRENT_MONTH, 2), end: new Date(CURRENT_YEAR, CURRENT_MONTH, 5)},
						},
						{
							key: 4,
							customData: {
								title: 'Сочи',
								backgroundColor: '#DE911D'
							},
							dates: {start: new Date(CURRENT_YEAR, CURRENT_MONTH, 7), end: new Date(CURRENT_YEAR, CURRENT_MONTH, 10)},
						}
					]
				},
				{
					id: 2,
					img: 'user-pic',
					name: '2 Алексей Лечащий',
					tasks: [
						{
							key: 1,
							customData: {
								title: 'Москва',
								backgroundColor: '#59A646'
							},
							dates: {
								start: new Date(CURRENT_YEAR, CURRENT_MONTH - 1, 3),
								end: new Date(CURRENT_YEAR, CURRENT_MONTH - 1, 3)
							},
						},
						{
							key: 2,
							customData: {
								title: 'Екатеринбург',
								backgroundColor: '#0071B3'
							},
							dates: {
								start: new Date(CURRENT_YEAR, CURRENT_MONTH - 1, 9),
								end: new Date(CURRENT_YEAR, CURRENT_MONTH - 1, 11)
							},
						},
						{
							key: 3,
							customData: {
								title: 'Сочи',
								backgroundColor: '#DE911D'
							},
							dates: {
								start: new Date(CURRENT_YEAR, CURRENT_MONTH - 1, 25),
								end: new Date(CURRENT_YEAR, CURRENT_MONTH - 1, 28)
							},
						}
					]
				},
				{
					id: 3,
					img: 'user-pic',
					name: '3 Алексей Лечащий',
					tasks: [
						{
							key: 1,
							customData: {
								title: 'Екатеринбург',
								backgroundColor: '#0071B3'
							},
							dates: {
								start: new Date(CURRENT_YEAR, CURRENT_MONTH - 2, 2),
								end: new Date(CURRENT_YEAR, CURRENT_MONTH - 2, 3)
							},
						},
						{
							key: 2,
							customData: {
								title: "Санкт-Петербург",
								backgroundColor: '#AF032C'
							},
							dates: {
								start: new Date(CURRENT_YEAR, CURRENT_MONTH - 2, 15),
								end: new Date(CURRENT_YEAR, CURRENT_MONTH - 2, 17)
							},
						},
						{
							key: 3,
							customData: {
								title: 'Сочи',
								backgroundColor: '#DE911D'
							},
							dates: {
								start: new Date(CURRENT_YEAR, CURRENT_MONTH - 2, 28),
								end: new Date(CURRENT_YEAR, CURRENT_MONTH - 2, 30)
							},
						}
					]
				},
			],
			selectedEmployee: null
		}
	},
	mutations: {
		setSelectedEmployee(state, selectedEmployee) {
			state.selectedEmployee = selectedEmployee
		}
	},
	namespaced: true
}