interface ITask {
  description: string;
  done: boolean;
  priority: string;
  markDone(): void;
  assignedTo?: IPerson;
}

interface IPerson {
  name: string;
  email: string;
}


class Task implements ITask {
  done: boolean = false;
  constructor(public description: string, public priority: string, public assignedTo?: IPerson){}
  markDone(){
    this.done = true;
  }
}
class HomeTask extends Task {
  constructor(public description: string, public priority: string, public assignedTo?: IPerson){
    super(description, priority, assignedTo);
  }
}

class WorkTask extends Task{
  constructor(public dueDate: Date, public description: string, public priority: string, public assignedTo?: IPerson){
    super(description, priority, assignedTo);
  }
}

class HobbyTask extends Task{
  constructor(public description: string){
    super(description, "Low");
  }
}

var lake: IPerson = {
  name: "Lake Street Dive",
  email: "lakesidedive@gmail.com"
}

var boy2men: IPerson = {
  name: "Boy 2 Men",
  email: "boy2men@gmail.com"
}

var charlotte: IPerson = {
  name: "charlotte day wilson",
  email: "charlottedaywilson@gmail.com"
}

var tasks = [];
tasks.push (new Task("Clean out Nemo litter box!!!!!", "High"));
tasks.push (new Task("Pick apple for the apple pie.", "Low", lake));
tasks.push (new Task("Wash the Laundry.", "High"));
tasks[0,1].markDone();

tasks.push(new HobbyTask("Make endgrain cutting board."));
tasks.push(new HobbyTask("Sharpen Gransfur Bruk axe."));

var today = new Date();  // get the current date and store it in the variable called 'today'
console.log(today.getDate());
var tomorrow = today;   // set the variable tomorrow equal to the current date, but then reset it to today's date plus 1.
tomorrow.setDate(today.getDate() + 1);
console.log(tomorrow.getDate());
var nextDay = today;  // create another date object and set it to today's date plus 2.
nextDay.setDate(today.getDate() + 2);
console.log(nextDay);

tasks.push(new WorkTask(today, "Update Linkin.", "High", lake));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium", boy2men));
tasks.push(new WorkTask(nextDay, "Clean the front porch.", "Low", charlotte));

console.log(tasks);
console.log(WorkTask);
