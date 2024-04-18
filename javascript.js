var myString = "Ovo je moj \"string\".";
console.log(myString);

var duljina = myString.length;
console.log(`Duljina teksta je: ` + duljina + ` znakova.`);

console.log(`Znak na mjestu 12 je: ` + myString.charAt(12) + `.`);

console.log(myString.trim()); // trim() removes whitespace from both sides of a string.

console.log(myString.trimEnd()); //.trimStart()

console.log(myString.indexOf(`j`));

console.log(myString.replace(`moj`, `naš`)); //.replaceAll()

console.log(myString.toLocaleUpperCase());

console.log(myString.substring(7, myString.length));

var myNiz = myString.split(` `);
console.log(myNiz.length);
console.log(myNiz);

// za breakpointove: F10 je red po red, a F5 je do sljedećeg breakpointa.