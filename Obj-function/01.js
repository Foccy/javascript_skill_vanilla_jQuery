// 1- 객체 생성
var dog = new Object();
dog = {
  //property
  // key:value
  name: "망고",
  features: "말티즈",
};
var cat = Object();
cat = { name: "아리", features: "개냥이" };
//arr.length
console.log(dog.name);
document.write(`<h1>${dog.name}</h1>`);
document.write(`<h1>${cat.features}</h1>`);

//2- 객체 생성
const baby = { name: "망고", features: "말티즈" };
document.write(`<h1>${baby.features}</h1>`);

const doggi = { name: "행운", features: "충견" };
document.write(`<h1>${doggi.name}</h1>`);
//3- method
const pet = {
  name: "망고",
  eat: function (food) {
    document.write(`<h1>${this.name}는 ${food}를 좋아해요</h1>`);
  }, // 객체안에서의 'this'는 객체 자신을 말한다
};
const pet1 = {
  name: "리랑",
  play: function (hunt) {
    document.write(`<h1>${this.name}는 ${hunt}해요</h1>`);
  },
};
pet.eat("연어");
pet.eat("닭가슴살");
pet1.play("사냥");
pet1.play("밥");
pet1.play("간식");
