var jmlAngkot = 10;
var angkotMogok  = 5;
 for ( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
   if( noAngkot <= 5 ) {
     console.log(' Angkot No. ' + noAngkot + ' Angkot Mogok. ')
   } else if ( noAngkot === 8 ) {
     console.log( 'Angkot No. ' + noAngkot + ' Angkot Lembur. ')
   }
 else {
     console.log(' Angkot No. ' + noAngkot + ' Angkot Tidak Mogok. ')
   }
 }