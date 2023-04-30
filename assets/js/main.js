const App = {
    data() {
      return {
        title: 'Todo list',
        placeholder: 'Введите вашу задачу',
        todos: ['Firste task', 'Two task'],
        InputValue: '',
        disabled: true,
      }
    },
    methods: {
      InputFields(event) {
        this.InputValue = event.target.value
      },
      AddToDo() {
        if(this.InputValue !== '') {
          this.todos.push(this.InputValue)
          this.InputValue = ''
        }
      },
      DelToDo(index) {
        this.todos.splice(index, 1)
      },
      DelAllDoTo(index) {
        this.todos.splice(index)
      },
      VMode() {
        this.disabled = !this.disabled
      }
    },
    computed: {
      ChangesText() {
        return this.disabled ? 'Поменять цветовую тему' :  'Вернуть тему назад'
      }
    }

  }
  
  Vue.createApp(App).mount('#app')

