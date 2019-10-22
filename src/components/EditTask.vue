<template>
  <div id="intro">
    <h1 id="app_title">Welcome to the Organizer App.</h1>
    <p id="welcome">Ready to get organized? Enter a task below!</p>

    <div id="box">
      <div class="taskInput">
        <h4>Task Name:</h4>

        <input id="task" placeholder="Enter Text Here" v-model="tempTask" @keyup.enter="submit" />
      </div>
      <div id="priority">
        <h4>Task Priority:</h4>
        <input
          class="radios"
          type="radio"
          name="priority"
          value="High"
          v-model="taskPriority"
          @keyup.enter="submit"
        /> High
        <input
          class="radios"
          type="radio"
          name="priority"
          value="Medium"
          v-model="taskPriority"
          @keyup.enter="submit"
        /> Medium
        <input
          class="radios"
          type="radio"
          name="priority"
          value="Low"
          v-model="taskPriority"
          @keyup.enter="submit"
        /> Low
      </div>
      <div id="entry_date">
        <h4>Due Date:</h4>
        <input class="entry_time" type="date" v-model="dueDate" @keyup.enter="submit" />
      </div>

      <div id="completion_date">
        <h4>Completed:</h4>
        <input class="entry_time" type="date" v-model="completionDate" @keyup.enter="submit" />
      </div>

      <div class="collaborators">
        <h4>Assign To:</h4>
        <select v-model="taskAssignee">
          <option disabled value>Assign To:</option>
          <option>Husband</option>
          <option>Daughter</option>
          <option>Mother</option>
        </select>
      </div>
      <div class="collaborators">
        <h4>Assigned By:</h4>
        <select v-model="taskAssignedBy">
          <option disabled value>Assigned By:</option>
          <option>Husband</option>
          <option>Daughter</option>
          <option>Mother</option>
        </select>
      </div>

      <button id="submit_button" v-on:click="submit">Add Task</button>
    </div>
  </div>
</template>

<script>
const STORAGE_KEY1 = "task";
const STORAGE_KEY2 = "due";
const STORAGE_KEY3 = "priority";
const STORAGE_KEY4 = "completion";
const STORAGE_KEY5 = "assignee";
const STORAGE_KEY6 = "assigner";

export default {
  name: "EditTask",
  data: function() {
    return {
      tempTask: "",
      dueDate: "",
      taskPriority: "",
      completionDate: "",
      taskAssignee: "",
      taskAssignedBy: ""
    };
  },
  props: {
    infoPassed: {
      tempTask: String,
      taskPriority: String,
      dueDate: String,
      completionDate: String,
      taskAsignee: String,
      taskAssignedBy: String
    }
  },

  watch: {
    infoPassed: function() {
      var prefill_data = {
        pre_task: this.infoPassed[0],
        pre_priority: this.infoPassed[1],
        pre_due: this.infoPassed[2],
        pre_assignee: this.infoPassed[3],
        pre_assigner: this.infoPassed[4],
        pre_filled: this.infoPassed[6]
      };
      this.editList = prefill_data;
    }
  },
  methods: {
    submit: function() {
      var array1 = [
        this.tempTask,
        this.dueDate,
        this.taskPriority,
        this.completionDate,
        this.taskAssignee,
        this.taskAssignedBy
      ];

      localStorage.setItem(STORAGE_KEY1, array1[0]);
      localStorage.setItem(STORAGE_KEY2, array1[1]);
      localStorage.setItem(STORAGE_KEY3, array1[2]);
      localStorage.setItem(STORAGE_KEY4, array1[3]);
      localStorage.setItem(STORAGE_KEY5, array1[4]);
      localStorage.setItem(STORAGE_KEY6, array1[5]);
      this.$emit("inputData", array1);

      this.tempTask = "";
      this.dueDate = "";
      this.taskPriority = "";
      this.completionDate = "";
      this.taskAssignee = "";
      this.taskAssignedBy = "";
      this.preFilled = false;
    },

    mounted() {
      this.interval = setInterval(this.time, 1000);
    },
    beforeDestroy() {
      clearInterval(this.interval);
    }
  }
};
</script>

<style>
h4 {
  font-weight: 900;
  margin-top: 0px;
  padding: 0;
  margin-bottom: 8px;
}

.entry_time {
  width: 205px;
  margin-left: 13px;
  height: 20px;
}
#completion_date {
  display: flex;
  height: 20px;
  margin-bottom: 20px;
  padding: 3px;
  width: 400px;
}

#submit_button:hover {
  background-color: black;
  color: white;
  width: 150px;
  transition: 0.3s ease;
}
#time {
  margin: 0;
  padding: 0;
  margin-left: 15px;
}
#box {
  border: 1px solid black;
  width: 350px;
  padding-left: 20px;
  display: inline-block;
}

#box2 {
  border: 1px solid black;
  width: 350px;
  padding-left: 20px;
  display: inline-block;
}

#task {
  margin-left: 18px;
  height: 35px;
  margin-bottom: 20px;
  padding: 6px;
  border: 1px solid black;
  border-radius: 3px;
  flex-wrap: wrap;
  font-size: 10pt;
  width: 195px;
}

.taskInput {
  display: flex;
  margin-top: 20px;
}
input {
  border: 1px solid black;
  border-radius: 3px;
  font-size: 17px;
  margin-right: 9px;
}

.collaborators {
  display: flex;
}

.collab {
  height: 16px;
  font-size: 11pt;
  padding: 3px;
  margin-left: 28px;
  width: 200px;
}

.collab2 {
  height: 16px;
  font-size: 11pt;
  padding: 3px;
  margin-left: 7px;
  width: 200px;
}

#entry_date {
  display: flex;
}
.radios {
  color: black;
  border: 2px black solid;
}

#priority {
  text-align: left;
  display: flex;
}
button {
  border: 1px solid black;
  border-radius: 3px;
  padding: 5px;
  font-size: 18px;
  margin-bottom: 15px;
  margin-top: 20px;
  width: 150px;
}
</style>
