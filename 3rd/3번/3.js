const 배열 = ["예병수", "류제천", "이재상", "최원장"];

// ["예병수 튜터", "류제천 튜터", "이재상 튜터", "최원장 튜터"]

// 인덱스 사용
for (let i = 0; i < 배열.length; i++) {
  배열[i] = 배열[i] + " 튜터";
}
console.log(배열);

// map 사용
const 새배열 = 배열.map((item) => {
  return item + " 튜터";
});

console.log(새배열);
