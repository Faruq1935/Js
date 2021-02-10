var tanya = true;
while ( tanya ){
// menentukan pilihan player
var p = prompt ('Pilih: gajah, semut, orang');
// membangkitkan pilihan computer
// membangkitkan bilangan random
var comp = Math.random();

if ( comp < 0.34 ){
    comp = 'gajah';
 }else if ( comp >= 0.34 && comp < 0.67 ){
    comp = 'orang';
 }else {
    comp = 'semut';
 }
 
 var hasil ='';
// mententukan rules
if(p == comp) {
hasil = 'SERI NGTD!';
} else if( p == 'gajah' ) {
//  if( comp = 'orang' ) {
//   hasil = 'MENANG YAHHHHA WAHYUU';
//}else {
//    hasil = 'KALAH AWOKAWOKAWOK';
//  }
  hasil = (comp == 'orang') ? 'MENANG YAHHHHA WAHYUU' : 'KALAH AWOKAWOKAWOK';
}else if ( comp == 'orang') {
  hasil = (comp == 'gajah') ? 'KALAH AWOKAWOKAWOK' : 'MENANG YAHHHHA WAHYUU ';
}else if ( p == 'semut') {
  hasil = (comp == 'orang') ? 'KALAH AWOKAWOKAWOK' : 'MENANG YAHHHHA WAHYUU ';
}else {
  hasil = 'Memasukan Pilihan Yang Salah Ngentod';
}

// mentukan hasilnya
alert('Kamu memilih : ' + p + ' Dan komputer memilih : ' + comp + '/nMaka hasilnya : Kamu ' + hasil);

tanya = confirm('lagi gak?');
}
alert('Terima Kasih Sudah Bermain Slurr');