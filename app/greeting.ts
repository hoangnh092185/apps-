class Greeter{
  constructor(public message: string){}
  greet(){
    return "Hello, " + this.message;
  }
}

var greeters: Greeter [] = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("how are you?"));
greeters.push(new Greeter("it's me, i was wondering if after all these years"));
console.log(greeters);
for(var greeter of greeters){
  alert(greeter.greet());
}
