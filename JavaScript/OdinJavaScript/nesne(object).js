var insan = {};
insan.yas = 12;
insan.isim = "Cihat";
insan.yuru = function () {
  console.log('Yürüyorum ....');
};

console.log(insan);

//2. yöntem

var insan2 = {
  yas: 12,
  isim: "Cihat",
  yuru: function () {
    console.log('Yürüyorum ....');
  }
};
insan2.kilo = 75;
console.log(insan2);
