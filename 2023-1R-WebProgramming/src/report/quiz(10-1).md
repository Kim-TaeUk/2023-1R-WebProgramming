<h1>과제 Quiz (10-1)</h1>

<ul>
<h2><li>일반적인 function 작성과 arrow function의 차이를 조사하여 300자 이상, 예시 코드 1개 이상 포함하여 작성한다.</li></h2>
</ul>

Arrow function(화살표 함수)는 ES6에서 새로 추가된 내용이다.

기존의 함수 표현식에 비해 간결하다.

```javascript
function fun() {
    // 일반 함수
}

const arrowFun = () => {
    // 화살표 함수
};
```

<h3>1. this</h3>

<li>일반 함수</li>
javascript에서 모든 함수는 실행될 때마다 함수 내부에 this라는 객체가 추가된다.<br>
일반 함수에서 this가 바인딩(binding)되는 상황이다.
<ol>
<li>함수 실행 시, 전역 객체(window)를 가리킨다.</li>
<li>메소드 실행 시, 메소드를 소유하고 있는 객체를 가리킨다.</li>
<li>생성자 실행 시, 새롭게 만들어진 객체를 가리킨다.</li>
</ol>
이처럼 일반 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적(static)으로 결정되는 것이 아니고, 
함수를 호출할 때 함수가 어떻게 호출되었는 지에 따라서 <strong>this에 바인딩 할 객체가 동적(dynamic)</strong>으로 결정된다.
<br><br>
<li>화살표 함수</li>
화살표 함수는 선언할 때 this에 바인딩 할 객체가 정적으로 결정된다.<br>
화살표 함수의 this는 언제나 상위 scope의 this를 가리킨다.(lexical this)<br>
또한 call/apply/bind 메소드를 사용하여 this를 변경할 수 없다.

```javascript
function fun() {
    this.name = "hi";
    return {
        name: "bye",
        speak: function () {
            console.log(this.name);
        },
    };
}

function arrowFun() {
    this.name = "hi";
    return {
        name: "bye",
        speak: () => {
            console.log(this.name);
        },
    };
}

const fuc1 = new fun();
fun1.speak(); // bye

const fuc2 = new arrowFun();
fun2.speak(); // hi
```
위의 예시에서 확인해보면 일반 함수로 사용했을 때는 bye가, 화살표 함수를 사용했을 때는 hi가 출력된다.<br>
일반 함수는 자신이 종속된 객체를 this로 가리키고, 화살표 함수는 자신이 종속된 instance를 가리킨다.

<h3>2. 생성자 함수로 사용 가능 여부</h3>
<li>일반 함수</li>
일반 함수는 생성자 함수로 사용할 수 있다.<br><br>
<li>화살표 함수</li>
화살표 함수는 생성자 함수로 사용할 수 없다.<br>
<strong>prototype property를 가지고 있지 않기</strong> 때문이다.

```javascript
function fun() {
    this.num = 1234;
}

const arrowFun = () => {
    this.num = 1234;
};

const fun1 = new fun();
console.log(fun1.num); // 1234

const fun2 = new arrowFun();
console.log(fun2.num); // TypeError: arrowFun is not a constructor
```
위의 예시에서 확인해보면 일반 함수로 사용했을 때는 1234가 출력되지만, 화살표 함수를 사용했을 때는 TypeError가 발생한다.<br>


<h3>3. arguments 사용 가능 여부</h3>
<li>일반 함수</li>
일반 함수에서는 함수가 실행될 때 암묵적으로(implicitly) arguments 변수가 전달되어 사용 가능하다.<br><br>

<li>화살표 함수</li>
화살표 함수에서는 arguments 변수가 전달되지 않는다.

```javascript
function fun() {
    console.log(arguments); //Arguments(3) [[1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}

fun(1, 2, 3);

const arrowFun = () => {
    console.log(arguments); // ReferenceError: arguments is not defined
};
```
위의 예시에서 확인해보면 일반 함수에서는 arguments 변수가 전달되어 [1, 2, 3]이 출력되지만, 화살표 함수에서는 ReferenceError가 발생한다.<br>


