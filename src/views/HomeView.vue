
<script src="src/components/todoapp.js"></script>
<template>
  <main >
    <div  class="todo-list">
      <h1>My To-Do List</h1>
      <div class="inputadd"><input type="text" v-model="newTask" placeholder="Add a new task" class="task-input">
      <button class="addinput" @click="addTask"><i class="fa-solid fa-plus"></i></button></div>
      
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <div v-if="task.done">
            <button   @click="toggleDone(task)"><i class="fa-solid fa-recycle" style="color: #0b419d;"></i></button>
            
          </div>
          <div v-else>
            <button   @click="toggleDone(task)"><i class="fa-solid fa-xmark" style="color: #e31635;"></i></button>
          </div>
          <span :class="{ completed: task.done }">{{ task.text }}</span>
          <span class="counter">{{ formatTime(task.count) }}</span>
          <button @click="removeTask(task.id)"><i class="fa-solid fa-trash-can" style="color: #090404;"></i></button>
        </li>
      </ul>
  </div>
    <!------FOOTER-->
    
  </main>
</template>
