class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this._searchPrefix(word);
    return node !== null && node.isEndOfWord;
  }

  startsWith(prefix) {
    return this._searchPrefix(prefix) !== null;
  }

  _searchPrefix(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node.children[ch]) return null;
      node = node.children[ch];
    }
    return node;
  }
}
