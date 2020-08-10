try {
  var sayi1 = 4;
  var sayi2 = 0;
  var sonuc = sayi1 / sayi2;
  if (sayi2 === 0) {
    throw Error('sayi2 sıfır olamaz hatalıdır')
  }
  else {
    console.log(sonuc);
  }
} catch (error) {
  console.log(error);
}finally{
  console.log('Burası finally bloğu');
}