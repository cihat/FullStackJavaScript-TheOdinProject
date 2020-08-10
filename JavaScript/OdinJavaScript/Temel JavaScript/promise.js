/* const asenkronFonksiyon = function (sayi, callback) {
  const sonuc = sayi + 2;
  callback(sonuc);
};
//hatalı bir kod örneği
asenkronFonksiyon(2, function (sonuc) {
  console.log(sonuc);
  asenkronFonksiyon(4, function (sonuc) {
    console.log(sonuc);
    asenkronFonksiyon(6, function (sonuc) {
      console.log(sonuc);
      asenkronFonksiyon(8, function (sonuc) {
        console.log(sonuc);
        asenkronFonksiyon(10, function (sonuc) {
          console.log(sonuc);
          asenkronFonksiyon(12, function (sonuc) {
            console.log(sonuc);
            asenkronFonksiyon(14, function (sonuc) {
              console.log(sonuc);
              asenkronFonksiyon(16, function (sonuc) {
                console.log(sonuc);
                asenkronFonksiyon(18, function (sonuc) {
                  console.log(sonuc);
                })
              })
            })
          })
        })
      })
    })
  })
}) */

//yukarıdaki işlemi promise ile yapacağız

const asenkronFonksiyon = (sayi) => {
  return new Promise((resolve, reject) => {
    if (sayi === 4) {
      resolve("Her şey yolunda !");
    }
    else {
      reject('Bİr sorun var !!!');
    }
  })
};
asenkronFonksiyon(3)
  .then((data) => {
    console.log(data);
    return 1;
  })
  .then((data) => {
    console.log(data);
    return 2;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })

  //promise reject olursa yani hatalı olursa direct catch bloğuna düşer