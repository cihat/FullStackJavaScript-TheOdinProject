const degerler = {
  deger1: "deger1",
  deger2: 'deger2',
  deger3: {
    isim: 'Cihat'
  }
};

const { deger3: { isim: name}} = degerler;
console.log(name);