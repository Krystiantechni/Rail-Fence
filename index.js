function encryption() {
  let message = document.getElementById("message").value;
  let key = parseInt(document.getElementById("key").value);
  let rail = Array(key)
    .fill()
    .map(() => Array(message.length));
  let dirDown = false;
  let row = 0;
  let col = 0;

  for (let i = 0; i < message.length; i++) {
    rail[row][col] = message[i];
    if (row === 0 || row === key - 1) dirDown = !dirDown;
    if (dirDown) row++;
    else row--;
    col++;
  }

  document.getElementById("output").innerText = rail.flat().join("");
}

function decryption() {
  let cipher = document.getElementById("message").value;
  let key = parseInt(document.getElementById("key").value);
  let rail = Array(key)
    .fill()
    .map(() => Array(cipher.length));
  let dirDown = null;
  let row = 0;
  let column = 0;
  let index = 0;

  for (let i = 0; i < cipher.length; i++) {
    if (row === 0) dirDown = true;
    if (row === key - 1) dirDown = false;
    rail[row][column] = "*";
    column++;
    if (dirDown) row++;
    else row--;
  }

  for (let i = 0; i < key; i++) {
    for (let j = 0; j < cipher.length; j++) {
      if (rail[i][j] === "*" && index < cipher.length) {
        rail[i][j] = cipher[index++];
      }
    }
  }

  let result = "";
  row = 0;
  column = 0;
  for (let i = 0; i < cipher.length; i++) {
    if (row === 0) dirDown = true;

    if (row === key - 1) dirDown = false;

    if (rail[row][column] !== "*") {
      result += rail[row][column];
      column++;
    }
    if (dirDown) row++;
    else row--;
  }

  document.getElementById("output").innerText = result;
}
