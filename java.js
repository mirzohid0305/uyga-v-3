var prompts = prompt("array enter method");

var arr = ["BMW", "Mers", "Jip", "Taxo", "Zaporj", "Traktor", "Orlando",  "Cobolt", "JC", "Maskuch"];

if (prompts == "length") {
  console.log(arr.length);
}else if (prompts == "splice()"){
  console.log(arr.splice(0 ,4,)); 
}else if (prompts == "push()"){
  console.log(arr.push("Nexya")); 
}else if (prompts == "pop()"){
  console.log(arr.pop("")); 
}else if (prompts == "toString()"){
  console.log(arr.toString());
}else if (prompts == "at()"){
  console.log(arr.at("4"));
}else if (prompts == "join()"){
  console.log(arr.join("#"));
}else if (prompts == "shift()"){
  console.log(arr.shift());
}else if (prompts == "unshift()"){
  console.log(arr.unshift("Treccer", "Nexiya3"));
}else if (prompts == "toSpliced()"){
  console.log(arr.toSpliced(2, 5));
}else if (prompts == "slice()"){
  console.log(arr.slice(4));
}else{
  console.log("error");
}
