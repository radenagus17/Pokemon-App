function isPalindrom(string) {
  let temp = "";

  for (let i = string.length - 1; i >= 0; i--) {
    temp += string[i];
  }

  return temp == string;
}

// console.log(isPalindrom("civic"));
// civic     => 'palindrom'
// leveling  => 'not palindrom'
// nababan   => 'palindrom

// let input=[13, 5, 7, 19, 6, -3, 3, 18, 1]

function sorting(array) {
  let flag = "belum";
  let ke2 = [];
  while (flag == "belum") {
    flag = "sudah";
    for (let i = 0; i < array.length; i++) {
      const kiri = array[i];
      const kanan = array[i + 1];
      if (kiri > kanan) {
        array[i + 1] = kiri;
        array[i] = kanan;
        ke2 = array[1];
        flag = "belum";
      }
    }
  }
  console.log("indeks ke 2 adalah " + ke2);
  return array;
}

console.log(sorting([13, 5, 7, 19, 6, -3, 3, 18, 1]));
