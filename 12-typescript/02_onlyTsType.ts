// only ts type(ts type)

// * 튜플(tuple)
// - 튜플은 고정된 개수의 요소를 가짐, 각 요소의 타입이 미리 지정된 배열, 각 요소의 순서가 중요, 순서에 따라 타입 다를 수 있음

// 튜플 타입 선언
let drink: [string, string];

// 튜플에 값 할당
drink = ["cola", "cocacola"];
console.log(drink);

// 튜플 타입 선언과 할당을 동시에 하는 법
let drink2: [string, string] = ["cola", "pepci"];
console.log(drink2);

// 튜플의 데이터를 변경할 때에도 배열의 데이터를 변경했던 것처럼 인덱스로 접근
// 배열의 메서드 사용 가능

// 인덱스로 접근해 값 변경 가능
drink2[0] = "zeroCola";
drink2[1] = "zeroPepci";
console.log(drink2);

drink2.push("good");
console.log(drink2);

/**
 * 튜플의 숨겨진 한계
 * - 길이와 타입이 정해진 것처럼 보이지만 push 메서드가 동작하므로 그 정의가 깨짐
 * - 튜플이라 고정된 개수가 변하면 안되는데 변해버림
 *
 * why?
 * - 이는 ts의 타입 시스템이 배열 메서드와 관련된 동작을 '완전히' 제한하지 않기 때문
 *
 * 이처럼 타입 시스템의 의도와 어긋나는 동작을 방지하려면
 * as const를 사용하거나 readonly 키워드를 사용해 튜플을 불변으로 만들기 가능
 */

// readonly - 요소의 타입 순서와 길이를 완벽히 고정
let drink3: readonly [string, number] = ["cider", 2000];
// drink3.push("hello");    // readonly를 붙이면 push 메서드가 적용되지 않음
console.log(drink3);

// type 별칭
// - type 별칭을 이용해 type 선언 가능
type campionInfo = [number, string, number];

// 엄격하고 명확히 데이터를 관리해야하는 작업일 경우 사용하면 이점
let most1: campionInfo = [1, "Yumi", 5000];
let most2: campionInfo = [2, "Timo", 3000];

///////////////////////////////////////////////////////////////////
// * Enum
// - 사용하는 이유
// 1. 분야별로 종류를 정의해 명확하게 사용
// 2. 하드코딩의 실수를 줄이기 위해

// - 숫자값 지정 가능(기본)
// enum Auth{
//     admin = 0,
//     user = 1,
//     guest = 2
// }

// -1. Enum 은 기본으로 0부터 1씩 증가하는 값을 가짐
enum Auth {
  admin,
  user,
  guest,
}
console.log(Auth.admin); // 0
console.log(Auth.user); // 1
console.log(Auth.guest); // 2

// -2. 정의되지 않은 값은 이전 값에 1씩 더해짐
enum Menu {
  pasta = 4000,
  pizza = 5000,
  chicken,
}
console.log(Menu.pasta);
console.log(Menu.pizza);
console.log(Menu.chicken); // 5001

// -3. 문자열 지정 가능
enum Cafe {
  americano = "아메리카노",
  latte = "카페라떼",
}
console.log(Cafe.americano);
console.log(Cafe.latte);

// -3.2 문자열 & 숫자 혼합 지정 가능
enum Cake {
  choco,
  vanilla = 200,
  mango,
  kiwi = "kiwi",
}
console.log(Cake.choco); // 0
console.log(Cake.vanilla); // 200
console.log(Cake.mango); // 201
console.log(Cake.kiwi); // 'kiwi'

///////////////////////////////////////////////////
// * Any
// 1. 명시적 타입 지정
let val: any;
val = true;
val = "dog";
console.log(val);

// 2. 암시적 타입 지정
let val2;
val2 = false;
val2 = "cat";
console.log(val2);

////////////////////////////////////////////////
// * interface
// 1. 객체 타입 정의
// - interface 키워드 사용
interface Crew {
  name: string;
  // age:number,
  readonly age: number; // 해당 속성을 읽기 전용으로 변경하고 싶을 때 'readonly'를 붙임
  exp: boolean;
}

const crew1: Crew = {
  name: "Tom",
  age: 21,
  exp: true,
};
// - 'Crew' 인터페이스는 세가지 속성 요구
// - crew1 객체는 이 구조를 따라야함
// - 객체 안의 순서는 상관없음
console.log(crew1);

// 2. 선택적 속성
// - 모든 속성이 필수는 아님
// - '?' 붙이기
interface Crew2 {
  name: string;
  age?: number; // age는 선택적 속성
}

const crew2: Crew2 = {
  name: "Ted",
};
console.log(crew2); // age 속성이 없어도 유효

// 3. readonly 읽기 전용 속성 - 객체가 초기화된 후에는 변경 불가
const crew3: Crew = {
  name: "Jerry",
  age: 25,
  exp: false,
};
crew3.name = "Son"; // 속성에 값 재할당
// crew3.age = 30
console.log(crew3);

// 4. 상속 가능
enum Score {
  Aplus = "A+",
  A = "A",
  B = "B",
  C = "C",
}

// 5. 인터페이스 확장 - 기존 인터페이스의 모든 속성 포함 및 속성 추가
interface Team extends Crew {
  position: string;
  readonly personal?: number;
  [grade: number]: Score;

  // ** 인덱스 시그니처
  // - 객체가 어떤 키로든 접근 가능하도록 허용하고 '키'와 '그에 대응하는 값의 타입' 정의 가능한 방법 제공
  // [grade: number] - 숫자인 키(key)
  // [grade: number]:string - 숫자 키를 가진 객체가 문자열 값을 가질 것을 명시
}

const first: Team = {
  name: "Miffy",
  age: 20,
  exp: true,
  position: "front",
  1: Score.Aplus,
};
console.log(first);

// 값 변경(점 접근법, 대괄호 법)
first.position = "back";
first["exp"] = false;
console.log(first);

// 6. 교차 타입 : 두개 이상의 interface를 합치는것
interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string; // 공통된 속성을 가져도 상관 없음
  color: string;
  price: number;
}

interface ToyCar extends Toy, Car {}
const toyCar: ToyCar = {
  name: "tayo",
  start() {
    console.log("출발!!"); // 함수도 가능
  },
  color: "blue",
  price: 50000,
};
console.log(toyCar);

///////////////////////////////////////////////////
// ** [번외] type 사용
type Gender = "F" | "M";
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender; // 위에서 정의한 Gender 타입을 가짐 -> 'F' or 'M' 둘중 하나
};

const IU: Person = {
  name: "IU",
  age: 30,
  gender: "F", // Gender 타입에 선언된 값만 대입 가능
};
console.log(IU);
