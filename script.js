function firstWord(s) {
  // // your code here
  // if(s.trim().length===0){
	 //  return s;
  // }
  // else{
	 //  let regex = /^\S+/;
	 //  return regex.exec(s.trim()); 
  // } 


	let str = s.trim();
	let index = s.indexof(" ");
	if(index === -1){
		return str;
	}
	else{
		return str.slice(0,index);
	}
}   
// Do not change the code below
// const s = prompt("Enter String:");
// alert(firstWord(s));
