export default {
  data() {
    return {
      newTask: '',
      tasks: [
        { id: 1, text: 'Learn Vue.js', done: false, count: 0 },
        { id: 2, text: 'Build a to-do list app', done: true, count: 0 }
      ]
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        const newTaskObj = {
            id: Date.now(), // Unique identifier for each task
            text: this.newTask,
            done: false,
            count: 0,
            intervalId: null // Initialize intervalId property
          };
        this.tasks.push(newTaskObj);
        this.startTimer(newTaskObj);
        this.newTask = '';
      }
    },
    removeTask(id) {
      const index = this.tasks.findIndex(task => task.id === id);
      if (index > -1) {
        clearInterval(this.tasks[index].intervalId); 
        this.tasks.splice(index, 1);
      }
    },
    toggleDone(task) {
        
      task.done = !task.done;
      if (task.done) {
        clearInterval(task.intervalId); // Stop timer when task is marked as done
      } else {
        this.startTimer(task); // Start or resume timer when task is expanded
      }
    },
    startTimer(task) {
        task.intervalId = setInterval(() => {
          task.count++;
        }, 1000); // Update count every second
      },
      formatTime(count) {
        const hours = Math.floor(count / 3600);
        const minutes = Math.floor((count % 3600) / 60);
        const seconds = count % 60;
        return `${hours}:${minutes}:${seconds}`;
      },
    beforeDestroy() {
      // Clear timers when component is destroyed (e.g., page unload)
      this.tasks.forEach(task => clearInterval(task.intervalId));
    }
  
    
  }
};
