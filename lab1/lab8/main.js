function processSet(set, callback) {
  if (!(set instanceof Set)) {
    throw new Error("Перший аргумент має бути Set");
  }
  

  for (let item of set) {
    callback(item);
  }
}
const mySet = new Set([1, 2, 3, 4]);
processSet(mySet, (el) => {
  console.log(el * 2);
});
