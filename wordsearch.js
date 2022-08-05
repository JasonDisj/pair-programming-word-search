const wordSearch = (letters, word) => { 

    const horizontalJoin = letters.map(ls => ls.join(''));

    let arr = [];
    let verticalWord = "";
    for (let i = 0; i < letters[0].length - 1; i++) {
      for (let j = 0; j < letters.length - 1; j++) {
        verticalWord += letters[j][i];
      }
      arr.push(verticalWord);
      verticalWord = "";
    }

    for (let l of arr) {
        if (l.includes(word))
        return true;
    }

    for (let m of horizontalJoin) {
        if (m.includes(word))
        return true;
    }
    return false;
}

module.exports = wordSearch

// const result = wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'FRANK')