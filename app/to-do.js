var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Task = (function () {
    function Task(description, priority, assignedTo) {
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var HomeTask = (function (_super) {
    __extends(HomeTask, _super);
    function HomeTask(description, priority, assignedTo) {
        _super.call(this, description, priority, assignedTo);
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
    }
    return HomeTask;
}(Task));
var WorkTask = (function (_super) {
    __extends(WorkTask, _super);
    function WorkTask(dueDate, description, priority, assignedTo) {
        _super.call(this, description, priority, assignedTo);
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
    }
    return WorkTask;
}(Task));
var HobbyTask = (function (_super) {
    __extends(HobbyTask, _super);
    function HobbyTask(description) {
        _super.call(this, description, "Low");
        this.description = description;
    }
    return HobbyTask;
}(Task));
var lake = {
    name: "Lake Street Dive",
    email: "lakesidedive@gmail.com"
};
var boy2men = {
    name: "Boy 2 Men",
    email: "boy2men@gmail.com"
};
var charlotte = {
    name: "charlotte day wilson",
    email: "charlottedaywilson@gmail.com"
};
var tasks = [];
tasks.push(new Task("Clean out Nemo litter box!!!!!", "High"));
tasks.push(new Task("Pick apple for the apple pie.", "Low", lake));
tasks.push(new Task("Wash the Laundry.", "High"));
tasks[0, 1].markDone();
tasks.push(new HobbyTask("Make endgrain cutting board."));
tasks.push(new HobbyTask("Sharpen Gransfur Bruk axe."));
var today = new Date(); // get the current date and store it in the variable called 'today'
console.log(today.getDate());
var tomorrow = today; // set the variable tomorrow equal to the current date, but then reset it to today's date plus 1.
tomorrow.setDate(today.getDate() + 1);
console.log(tomorrow.getDate());
var nextDay = today; // create another date object and set it to today's date plus 2.
nextDay.setDate(today.getDate() + 2);
console.log(nextDay);
tasks.push(new WorkTask(today, "Update Linkin.", "High", lake));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium", boy2men));
tasks.push(new WorkTask(nextDay, "Clean the front porch.", "Low", charlotte));
console.log(tasks);
console.log(WorkTask);
