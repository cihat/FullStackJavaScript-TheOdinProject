const key = "marka";

const araba = {
  [key]: "BMW"
};

console.log(araba.marka);

//Bir nesneden 2 ve daha fazla farklı yolu vardır 2 si şu şekildedir,
//nokta ve köşeli parantez notasyonu

const myObject = {
  property: 'Value!',
  otherProperty: 77,
  "obnoxious property": function () {
    // do stuff!
    console.log("Merhaba");
  }
}
// dot notation
myObject.property // 'Value!'
var aki = myObject["obnoxious property"]// 'Value!'
console.log(aki);
// bracket notation
/* myObject["obnoxious property"] // [Function]
const variable = 'property'

myObject.variable // this gives us 'undefined' because it's looking for a property named 'variable' in our object

myObject[variable] // this is equivalent to myObject['property'] and returns 'Value!' */