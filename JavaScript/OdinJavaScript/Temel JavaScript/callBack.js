function soyle(text, callback) {
  console.log(text);
  callback();
}

function cayDemle() {
  console.log("Cay DEmleniyor ");
}

soyle("Merhaba", cayDemle);
// 2. yöntem

function soyle(text, callback) {
  console.log(text);
  callback();
}

soyle("Merhaba", function () {
  console.log("Cay DEmleniyor ");
});

setTimeout(function () {
  console.log("Selam");
}, 3000)
//2. yontem

var fnc = function () {
  console.log(" Naber ?");
}
setTimeout(fnc, 2000)

var sayi = 1;
var interval = setInterval(function () {
  if (sayi == 5) {
    clearInterval(interval);
  }
  console.log("Selam " + sayi);
  sayi++;
}, 2000);