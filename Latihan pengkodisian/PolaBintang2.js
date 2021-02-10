var s = ''; 
for( var i = 20; i > 0; i--) {
  for( var f = 0; f < i; f++) {
  s += '*';
  // s = s + '*';
  }
  s += '\n';
}
console.log(s);