var board = "";
var size = 11;

for (var height = 0; height < size; height++) {
  for (var width = 0; width < size; width++) {
    if ((height + width) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += '\n';
}

console.log(board);
