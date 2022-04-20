// to show current day
// adapted from https://medium.com/@aleks.roslyakov/using-css-grid-jquery-making-a-daily-scheduler-pt-ii-7af7d239a55d
let d = new Date();

let year = d.getFullYear();
let month = d.getMonth()+1;
let day = d.getDate();

let output = (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day + '/' + year;

$("#currentDay").text(`${output}`);


setInterval(checkTime(), (1000 * 60) * 5);


// save tasks

var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));

  // if nothing in localStorage, create a new object to track all task status arrays
  if (!tasks) {
    tasks = {
      toDo: [],
      inProgress: [],
      inReview: [],
      done: []
    };
  }

  // loop over object properties
  $.each(tasks, function(list, arr) {
    // then loop over sub-array
    arr.forEach(function(task) {
      createTask(task.text, task.date, list);
    });
  });
};

var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}; 