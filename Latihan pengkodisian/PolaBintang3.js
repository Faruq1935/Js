var s = ''; 
for( var i = 0; i < 10; i++) {
for( var f = 0; f < i; f++) {
  s += '*';
}
  s += '\n';
} 
for( var i = 10; i > 0; i--) {
for( var f = 0; f < i; f++) {
  s += '*';
}
  s += '\n';
}
console.log(s);