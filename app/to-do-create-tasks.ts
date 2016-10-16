/// <reference path="./to-do-classes-interfaces.ts"/>
/// <reference path="./to-do-people.ts"/>
/// <reference path="./to-do-listing-functions.ts"/>

var people = ToDoList.people;

var tasks = [];
tasks.push(new ToDoList.HomeTask("Clean out Nemo litter box!!!!!", "High"));
tasks.push(new ToDoList.HomeTask("Pick apple for the apple pie.", "Low", people.lake));
tasks.push(new ToDoList.HomeTask("Wash the Laundry.", "High"));
tasks[0].markDone();

tasks.push(new ToDoList.HobbyTask("Make endgrain cutting board."));
tasks.push(new ToDoList.HobbyTask("Sharpen Gransfur Bruk axe."));

var today = new Date(); // get the current date and store it in the variable called 'today'
console.log(today.getDate());
var tomorrow = today; // set the variable tomorrow equal to the current date, but then reset it to today's date plus 1.
tomorrow.setDate(today.getDate() + 1);
console.log(tomorrow.getDate());
var nextDay = today; // create another date object and set it to today's date plus 2.
nextDay.setDate(today.getDate() + 2);
console.log(nextDay);

tasks.push(new ToDoList.WorkTask(today, "Update Linkin.", "High", people.lake));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.boy2men));
tasks.push(new ToDoList.WorkTask(tomorrow, "ghetto superstar.", "Medium", people.boy2men));
tasks.push(new ToDoList.WorkTask(tomorrow, "Sing at soldout show.", "Medium", people.boy2men));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean the front porch.", "Low", people.charlotte));

console.log(tasks);
