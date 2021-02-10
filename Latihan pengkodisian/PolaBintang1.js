var s = ''; 
for( var i = 0; i < 20; i++) {
  for( var f = 0; f < i; f++) {
  s += '*';
  // s = s + '*';
  }
  s += '\n';
}
console.log(s);