// generic
// - 선언할 때 타입을 지정하기 어려운 케이스 존재
// - 데이터 타입을 외부에서 지정
// - 생성시점에 타입 명시
// - 재사용성, 유연성 증가, 타입을 변수처럼 사용
// - <T> 형태로 주로 사용

// Ex1)
function numArrLen(arr: number[]): number {
  return arr.length;
}
console.log(numArrLen([1, 2, 3])); // 3

// Ex2)
function strArrLen(arr: string[]): number {
  return arr.length;
}
console.log(strArrLen(["1", "2", "3", "4"])); // 4

// - 리턴되는 값이 string, number, boolean ... 모든 값이 들어올 수 있는 함수면 좋을거같다
// 1. generic 기본 사용법
// <T> 을 이용해서 매개변수를 선언하는 공간을 하나 더 만듦 --> type만 올 수 있음
function arrLen<T>(arr: T[]): number {
  return arr.length;
}
// T[] : T에 대응되는 자료형의 배열
console.log(arrLen<string>(["1", "2", "3", "4"]));
console.log(arrLen<number>([1, 2, 3, 4]));
console.log(arrLen<string | number>(["1", 2, "3", 4]));
//////////////////////////////////////////////////////////////////////

function printSum<T>(x: T, y: T) {
  console.log(x, y);
}
printSum<string>("hi", "hello");
printSum<number>(100, 200);
printSum<Array<boolean>>([true, false], [false, false]);

// 2. 두 개의 서로 다른 타입 매개변수 generic
// 관례) T: type, U: usually
function printSum2<T, U>(x: T, y: U): void {
  console.log(x, y);
}
printSum2<string, number>("1", 1);

///////////////////////////////////////////////////////////////////////
// 인터페이스와 generic
// Ex1)
// Phone 인터페이스의 옵션이 여러 타입으로 정의될 수 있다면? generic
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}

// 사용자 정의 타입
type iphoneOption = {
  color: string;
  storage: number;
};

const iphone50: Phone<iphoneOption> = {
  company: "Apple",
  createAt: new Date("2024-08-21"),
  option: {
      // generic을 통해 option 속성 타입을 유연하게 지정
      color: "black",
      storage: 256,
    },
};
console.log(iphone50);

// Ex2)
type galaxyOption = {
    color:string
    isBuz:boolean
}

const galaxy50:Phone<galaxyOption> = {
    company:'Samsung',
    createAt: new Date("2024-09-21"),
    option:{
        color:'blue',
        isBuz:true
    }
}
console.log(galaxy50);
