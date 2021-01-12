const string = ["|", "/", "-", "\\"];
let timer = 500;
let count = 0;
let i = 0
while (timer * count <= 4500) {
  const symbol = string[i];
  setTimeout(function() {
    process.stdout.write(`\r${symbol}   `);
  }, timer * count);
  count++;
  i = (i + 1) % 4;
}