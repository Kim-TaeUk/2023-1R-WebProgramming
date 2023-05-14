<h1>과제 Quiz (9-2)</h1>

<ol>
<li>main.jsx의 실제 js 모습은 어떨까? 예상해서 작성해보시오</li>
<ul>
<li>
JSX 문법을 사용하여 작성된 React 코드는 browser에서 실행되기 전 bundling 작업을 거치고 JSX -> JS로 변환된다


이때 bundling 작업을 해주는 것이 bundler(Vite)이다 -> Vite는 bundling 작업을 위해 필요한 파일을 미리 불러온다
JS로 변환된 코드는 아래와 같다

```javascript
ReactDOM.createRoot(document.getElementById('root')).render(
    React.createElement(React.StrictMode, null, React.createElement(App, null))
);
```

</li>
</ul>
<li>어떻게 하면 그 결과를 얻어올 수 있을까?</li>
<ul>
<li>
React.createElement()함수는 JSX -> JS로 변환한다


3개의 인자를 받는데, 첫번째 인자는 component 타입, 두번째 인자는 props(컴포넌트 속성), 세번째 인자는 children이다
React element(요소)를 반환하는데, 이 요소는 Virtual DOM에 렌더링된다
</li>
</ul>
</ol>



