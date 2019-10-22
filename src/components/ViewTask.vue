<template>
  <div id="title">
    <h1>Your Task Board</h1>
    <p
      id="desc"
    >Use your Board to organize your priorities and add collaborators! Your tasks will appear below.</p>
    <button id="add" v-on:click="modify">New Task</button>

    <div id="sticky_board">
      <div id="red_board">
        <h3>Top Priority Tasks</h3>

        <div class="task_info" v-if="String(this.taskList['priority']) === 'High'">
          <h4 id="highlight3">Finish in: {{this.hours}}</h4>
          <h4>{{ this.taskList['task'] }}</h4>

          <ul>
            <li class="properties">Priority: {{this.taskList['priority']}}</li>
            <li class="properties">Due: {{this.dueDate}}</li>
            <li class="properties">Finished On: {{this.completion}}</li>
            <li class="properties">Assigned To: {{this.taskList['assignee']}}</li>
            <li class="properties">Assigned By: {{this.taskList['assigner']}}</li>
          </ul>
        </div>
      </div>

      <div id="yellow_board">
        <h3>Medium Priority Tasks</h3>

        <div class="task_info" v-if="(String(this.taskList['priority']) === 'Medium')">
          <h4 id="highlight2">Finish in: {{this.hours}}</h4>
          <h4>{{ this.taskList['task'] }}</h4>

          <ul>
            <li class="properties">Priority: {{this.taskList['priority']}}</li>
            <li class="properties">Due: {{this.dueDate}}</li>
            <li class="properties">Finished On: {{this.completion}}</li>
            <li class="properties">Assigned To: {{this.taskList['assignee']}}</li>
            <li class="properties">Assigned By: {{this.taskList['assigner']}}</li>
          </ul>
        </div>
      </div>

      <div id="green_board">
        <h3>Low Priority Tasks</h3>
        <div class="task_info" v-if="String(this.taskList['priority']) === 'Low'">
          <h4 id="highlight">Finish in: {{this.hours}}</h4>
          <h4>{{ this.taskList['task'] }}</h4>
          <ul>
            <li class="properties">Finished On: {{this.completion}}</li>
            <li class="properties">Due: {{this.dueDate}}</li>

            <li class="properties">Priority: {{this.taskList['priority']}}</li>

            <li class="properties">Assigned To: {{this.taskList['assignee']}}</li>
            <li class="properties">Assigned By: {{this.taskList['assigner']}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "ViewTask",
  data: function() {
    return {
      taskList: {
        task: "",
        priority: "",
        dueDate: "",
        completion: "",
        assignee: "",
        assigner: ""
      },
      completion: "",
      hours: "",
      dueDate: ""
    };
  },

  props: {
    taskPassed: {
      task: String,
      priority: String,
      dueDate: String,
      completion: String,
      assignee: String,
      assigner: String,
      pre_completion: String,
      pre_filled: Boolean
    }
  },

  watch: {
    taskPassed: function() {
      var timeLeft = moment(this.taskPassed[1]).toNow(true);

      var receivedData = {
        task: this.taskPassed[0],
        priority: this.taskPassed[2],
        dueDate: this.taskPassed[1],
        completion: this.taskPassed[3],
        assignee: this.taskPassed[4],
        assigner: this.taskPassed[5]
      };

      this.taskList = receivedData;
      this.hours = String(timeLeft);
      this.dueDate = moment(this.taskList["dueDate"]).format("MM/DD");
      this.completion = moment(this.taskList["completion"]).format("MM/DD");
    }
  },

  methods: {
    modify: function() {
      var been_filled = true;
      var array2 = [
        this.taskList["task"],
        this.taskList["priority"],
        this.taskList["due"],
        this.taskList["completion"],
        this.taskList["assignee"],
        this.taskList["assigner"],
        been_filled
      ];
      this.$emit("inputDataTwo", array2);
    },
    isEmpty: function(s) {
      return s == '""';
    }
  }
};
</script>

<style>
#sticky_board {
  display: flex;
}

#add {
  margin-bottom: 30px;
  width: 150px;
}

#add:hover {
  background-color: black;
  color: white;
  transition: 0.3s ease;
}

#desc {
  margin-bottom: 50px;
}
#highlight {
  background-color: rgb(218, 255, 218);
}

#highlight2 {
  background-color: rgb(253, 237, 145);
}

#highlight3 {
  background-color: rgb(253, 199, 98);
}

h3 {
  margin-top: 20px;
  font-size: 20pt;
  font-weight: 900;
  color: rgb(0, 0, 0);
}

.task_info {
  border: 1px solid black;
  margin-top: 15px;
  background-color: rgb(255, 255, 255);
  width: 60%;
  margin-left: 40px;
  box-shadow: 3px 7px #888888;
}
ul {
  padding-left: 0;
}
#red_board {
  background-color: rgba(245, 38, 38, 0.781);
  width: 30%;
  height: 400px;
  margin-right: 30px;
  margin-left: 35px;
  box-shadow: 5px 10px #888888;
}

#yellow_board {
  background-color: yellow;
  width: 30%;
  margin-right: 30px;
  box-shadow: 5px 10px #888888;
}

#green_board {
  background-color: greenyellow;
  width: 30%;
  box-shadow: 5px 10px #888888;
}

.properties {
  list-style-type: none;
  margin-bottom: 15px;
  text-align: left;
  margin-left: 20px;
}

#edit_button {
  height: 20px;
  width: 20px;
}

table,
th,
td {
  border: 0.5px solid black;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  width: 300px;
}
</style>
