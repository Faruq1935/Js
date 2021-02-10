var jmlAngkot = 10;
var angkotMogok  = 5;
var noAngkot = 1;

while (noAngkot <= angkotMogok) {
  console.log('Angkot No. ' + noAngkot + ' Angkot mogok. ')
  noAngkot++;
}
for (noAngkot = angkotMogok + 1; noAngkot <= jmlAngkot; noAngkot ++ ) {
  console.log('Angkot No. ' + noAngkot + ' Angkot tidak mogok ')
}