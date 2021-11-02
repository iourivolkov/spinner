const elements = ['\r|', '\r/', '\r-', '\r\\', '\r|']
let delay = 100;

for(let i = 0; i < elements.length; i++){
  setTimeout(() => {
    process.stdout.write(elements[i]);
    }, delay);
    delay += 200;
 };