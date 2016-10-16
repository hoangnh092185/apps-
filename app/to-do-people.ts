/// <reference path="to-do-classes-interfaces.ts"/>

module ToDoList {
  var lake: ToDoList.IPerson = {
    name: "Lake Street Dive",
    email: "lakesidedive@gmail.com"
  }

  var boy2men: ToDoList.IPerson ={
    name: "Boy 2 Men",
    email: "boy2men@gmail.com"
  }

  var charlotte: ToDoList.IPerson = {
    name: "charlotte day wilson",
    email: "charlottedaywilson@gmail.com",
    phone: "503-123-4567"
  }

  export var people = {
    "lake": lake,
    "boy2men": boy2men,
    "charlotte": charlotte
  };
}
