function firstWord(s) {
  // your code here
  if(s.trim().length===0){
	  return "";
  }
  else{
	  let str = s.trim();
	  let regex = /[a-z]+\s/;
	  return regex.exec(str);
  }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
