const operations = ["Trie", "insert", "search", "search", "startsWith", "insert", "search"];
const inputs = [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]];

let trie;
const results = [];

for (let i = 0; i < operations.length; i++) {
  const op = operations[i];
  const arg = inputs[i];

  if (op === "Trie") {
    trie = new Trie();
    results.push(null);
  } else if (op === "insert") {
    trie.insert(arg[0]);
    results.push(null);
  } else if (op === "search") {
    results.push(trie.search(arg[0]));
  } else if (op === "startsWith") {
    results.push(trie.startsWith(arg[0]));
  }
}

console.log("Output:");
console.log(results);
