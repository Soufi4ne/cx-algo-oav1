//e01 avec methode regex

function HowManyCamelCase(str) {
    
    var count=0,len=str.length;
  for(var i=0;i<len;i++) {
    if(/[A-Z]/.test(str.charAt(i))) count++;
  }

  return count;

} 

console.log(HowManyCamelCase("bonjourToutLeMondeEfrei"));