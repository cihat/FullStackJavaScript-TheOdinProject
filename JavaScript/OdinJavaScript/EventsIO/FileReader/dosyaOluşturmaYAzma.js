/*
fs.appendFile() //olduğu gibi yazar hiçbir şeye dokunmaz sadece yazar
// hatta dosya yoksa eni bir tane o adda oluşturur.
fs.writeFile()  //ise içeriği siler ve yenisini yazar . Buda eğer dosya yoksa yenisi oluşturur.

*/

const fs = require('fs');
let text = '\nMerhaba Bunu buradaya yazıyorum';
fs.writeFile('dsdfsfosya.txt', text, (err) => {
  if (err) {
    throw err;
  }
  console.log('Dosyaya Ekleme Yapıldı');
})