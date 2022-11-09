

//palindrome 

var input = 12321;
var sum=0;
var num = input
while(input>0){
  let value = (input%10);
  input =((input-value)/10) 
  sum = sum*10+value
}
console.log(sum);
if(num == sum){
  console.log("this is palindrome");
}else{
  console.log("this is not palindrome");
}

