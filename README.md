# movie-app-2020

React-JS Fundamentals Course (2020)

강의(https://academy.nomadcoders.co/courses/216871/lectures/12913618)  
- #5 conclusions 까지 수강.  
- (Routing Bonus 미수강)

### 필기

#### [터미널 명령어]
로컬앱 실행: npm start  
로컬앱 실행: npm stop  
배포: npm run deploy  

ide설치: node npm npx git vscode

프레임워크가 사라지면 내가 배운 지식이 사라진다  
리액트는 자바스크립트로 이뤄져있다. 리액트가 사라져도 훌륭한 자스 개발자  
웹팩 바벨: 현대적인 코드를 이해하지 못하는 브라우저를 위해  
근데 이제 대신에 create-react-app을 사용  
하나의 명령 실행해서 react-app set해줌  
  npm -v  
  npx create-react-app movie_app_2020  


react는 하나의 엘리먼트만 리턴할 수 있는데, 여러 개의 엘리먼트를 리턴하고 싶을때엔  
1. <div></div>로 감싸거나,  
2. <></>로 감싼다.  
   두번째 방법은 <React.Fragment></React.Fragment>의 축약표현이다.  

리액트는 html 안에 virtual dom 을 만들어 넣는다.  
(실제 소스코드에서는 빈 html뿐이지만 실제 화면에서는 만들어져 있음.)  

#### [component]  
component는 html을 반환하는 함수이다.  

#### [JSX]

	ReactDOM.render(<APP />, document.getElementById("potato"));  

<APP /> 과 같은 것을 컴포넌트라 하고, 이 방식을 JSX라고 한다.  
JSX란 JS와 HTML 을 조합한 것을 말하며, 리액트에서만 나오는 유일한 개념이다.  
주의)한 번에 하나의 컴포넌트만 렌더링 할 수 있다.  

#### [JSX 이해]
컴포넌트에 정보를 보낼 수 있다.  
컴포넌트를 재사용 가능  
모듈에서 <Test name="Testtt"> 처럼 프로퍼티를 작성하는 건 JSX로 정보를 보내는 방식이다  
html이 아니다.  

#### [prop-types]
설치  
  npm i prop-types  
내가 (컴포넌트에) 전달받은 타입이 원하는 props인지를 확인해줍니다.  
잘 성치됐는지 확인하려면 package.json 에서 dependencies에 prop-types가 추가됐는지 확인합니다.  
현재에는 언어, TypeScript가 대체 역할을 해줍니다.  

#### [prop-types]
- isRequired: 무조건 그 타입으로만 작성되어야 한다.  
   그렇지 않을 경우, 화면엔 티가 안 나지만, 콘솔에 에러를 발생  
- 문법: 함수이자 컴포넌트 뒤에 .propTypes 라고 작성한다.  
- 작성 가능한 타입은   
	array, bool, func, number, object,  
	string,symbol,node,element,elementType,instanceOf(Message),  
	oneOf(['News', 'Photos']),  
	oneOfType([  
		PropTypes.string,  
		PropTypes.number,  
		PropTypes.instanceOf(Message)  
	  ]),  
	  arrayOf(PropTypes.number),objectOf(PropTypes.number),  
	등등 ...  


#### [state]
값을 동적으로 변경하고 싶을 때!
setState를 사용합니다.  
그러면 render() 펑션이 자동실행되어 변경할 부분만 돔을 건드려서 화면이 깜박거리지 않습니다.  
매 순간 setState를 호출할 때마다 react 는 새로운 state와 함께 render function을 호출합니다.  

#### [module의 lifeCycle]
- Mounting  
- update  
- unmounting  
- ...  

#### [Axios]
설치: npm install axios   
http통신을 하는 JS library.  
피넛초콜릿의 코팅된 초콜릿 같은 애  
현 플젝에선 async await와 함께 쓰였다.  

#### [구동순서]
application은 render하는데  
처음에는 isLoading  true 값을 가진다.  
App이 마운트 된 이후에 getMovies가 실행되고  
async, await 세트가 axios가 값을 가져오는걸 기다려줘서 movies에 가져온다.  
<- 이걸 안 쓰면 더 많은 코드 줄 수가 늘어날 것이다.  

#### [의문점]
class component와 func component의 차이?

#### [react에서 css 주기]
1.(비추) 컴포넌트 리턴의 JSX에 style={{backgroundColor:"red"}}  
2. (추) css파일을 따로 만들어 임포트한다.

#### [JSX에서 프로퍼티명 작성]
Warning: Invalid DOM property `class`. Did you mean `className`?  
해당 에러가 터지면 컴포넌트 JSX안에 class를 classNane로 바꾼다.  
->그럼 그게 화면에서는 class가 된다  
예2: JSX의 label htmlFor는 화면에서 laber for가 된다.

#### [클라우드에 코드 올리기]
우선 gh-pages 설치(내 웹사이트를 도메인에 노출)  
npm i gh-pages  

 
#### [package.json에 추가]
1.   
  "homepage": "https://lsucret.github.io/movie_app_2020"  
2.     
    "deploy": "gh-pages -d build",  
    "predeploy": "npm run build"  
predeploy는 배포 전에 할 행동을 작성  


#### [Are We Done?]
더이상, state를 쓰기 위해 class component를 사용할 필요가 없다   
-> hooks 가 대체재

