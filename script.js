function firstWord(s) {
  // your code here
  if(s.trim().length===0){
	  return s;
  }
  else{
	  let regex = /^\S+/;
	  return regex.exec(s.trim()); 
  } 
}   
// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
