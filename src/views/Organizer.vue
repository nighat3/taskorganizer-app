<template>
  <div id="app">
    <ViewTask v-show="this.showInput" @inputDataTwo="modifyTask" :taskPassed="taskData" />
    <EditTask v-show="!this.showInput" @inputData="addTask" :infoPassed="editData" />
  </div>
</template>


<script>
import EditTask from "@/components/EditTask.vue";
import ViewTask from "@/components/ViewTask.vue";

export default {
  name: "organizer",
  components: {
    ViewTask,
    EditTask
  },

  data: function() {
    return {
      taskData: "",
      editData: "",
      showInput: true,
      inputData: false,
      inputDataTwo: false
    };
  },

  methods: {
    addTask(variable) {
      if (localStorage.getItem("task")) {
        this.taskData = [
          localStorage.getItem("task"),
          localStorage.getItem("due"),
          localStorage.getItem("priority"),
          localStorage.getItem("completion"),
          localStorage.getItem("assignee"),
          localStorage.getItem("assigner")
        ];
        console.log(localStorage.getItem("task"));
        console.log(localStorage.getItem("due"));
      } else {
        this.taskData = variable;
      }
      this.showInput = true;
    },

    modifyTask(variable) {
      this.editData = variable;
      this.showInput = false;
    }
  },
  mounted() {
    this.taskData = [
      localStorage.getItem("task"),
      localStorage.getItem("due"),
      localStorage.getItem("priority"),
      localStorage.getItem("completion"),
      localStorage.getItem("assignee"),
      localStorage.getItem("assigner")
    ];
    console.log(this.taskData);
    this.interval = setInterval(this.time, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}

#welcome {
  text-align: center;
}

html,
body {
  height: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 0.7777485994397759) 0%,
    rgba(239, 251, 255, 1) 0%,
    rgba(203, 240, 247, 0.644) 100%,
    rgba(214, 248, 255, 0.527) 100%
  );
}

#app_title {
  font-size: 30pt;
  font-weight: 500;
}
</style>
