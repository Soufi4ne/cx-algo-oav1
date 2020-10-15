//e01 avec la table ascii


function isUpperCase(code) {
    return (code >= 65 && code <= 90)
  }
  
  function howManyCamelCase(str) {
    if (!str) {
      return 0
    }
  
    let count = 1 // je
  
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i)
  
      if (isUpperCase(charCode)) {
        count++
      }
    }
  
    return count
  }
















// function HowManyCamelCase(str) {
    
//     var count=0;
//     var longueur=str.length;
//   for(var i=0;i<longueur;i++) {
//     if(/[A-Z]/.test(str.charAt(i))) count++;
//   }

//   return count;

// } 

// console.log(HowManyCamelCase("BonjourToutLeMondeEfrei"));