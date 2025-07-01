const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let timer = 100;

for (const lines of spinner){
  setTimeout(() => {
    process.stdout.write(`\r${lines}    `);
  }, timer);
  timer += 200;
}

setTimeout(() => {
  console.log();
}, timer);