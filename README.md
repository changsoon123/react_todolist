## 1. Node.js 설치

React.js 프로젝트를 개발하기 위해서는 Node.js가 필요합니다.

Node.js는 JavaScript 런타임 환경으로, npm(Node Package Manager)을 포함하고 있어

React.js 프로젝트의 종속성을 관리할 수 있습니다.

Node.js를 설치하기 위해 공식 웹사이트(**[https://nodejs.org)에서](https://nodejs.xn--org%29-105zg9y/)** 다운로드하여 설치해주세요.

(LTS 버전을 받아 주세요.)

설치가 완료되면 터미널 또는 명령 프롬프트에서 **`node -v`** 명령을 실행하여 버전을

확인할 수 있습니다.

## 2. Create React App 설치

Create React App은 React.js 프로젝트를 손쉽게 생성하고 구성할 수 있는 도구입니다. 터미널 또는 명령 프롬프트를 열고 다음 명령을 실행하여 Create React App을 글로벌로 설치해주세요:

```
npm install -g create-react-app
```

## 3. 새로운 React.js 프로젝트 생성

터미널 또는 명령 프롬프트에서 React.js 프로젝트를 생성할 디렉토리로 이동한 후, 다음 명령을 실행하여 새로운 React.js 프로젝트를 생성해주세요

```powershell
npx create-react-app my-app
```

위 명령에서 "my-app"은 프로젝트의 이름으로 원하는 이름으로 변경할 수 있습니다. 프로젝트 생성이 완료되면 해당 디렉토리로 이동하여 개발을 진행할 수 있습니다.

## 이제 React.js 개발을 위한 설정이 완료되었습니다.

이제 Visual Studio Code에서 프로젝트를 열고 **`src`** 폴더 내의 파일들을 수정하여

React 컴포넌트를 작성하고 개발을 시작할 수 있습니다.

예를 들어, **`src/App.js`** 파일을 열어 기본적인 React 컴포넌트를 작성하고,

**`src/index.js`** 파일에서 해당 컴포넌트를 렌더링하는 코드를 작성할 수 있습니다.

프로젝트 개발을 시작하기 전에 **`npm start`** 명령을 실행하여 개발 서버를 시작해주세요.

이렇게 하면 변경 사항이 저장될 때마다 프로젝트가 자동으로 다시 로드됩니다.

개발 서버는 기본적으로 **`http://localhost:3000`**에서 실행됩니다.

---

react 깃허브 clone 시 주의사항

```

$npm install

```

---

vscode 확장 추천

Korean Language Pack for Visual Studio Code,
Auto Close Tag,
prettier,
ES7+ React/Redux/React-Native snippets,
Live Server,
Power Mode <---개인 취향 ,
vscode-styled-components,
Material Icon Theme,
Auto Rename Tag,

F1키를 누르고 setting.json 입력후

```

"emmet.syntaxProfiles": {
     "javascript": "jsx"
 },
 "emmet.includeLanguages": {
    "javascript": "html"
}

```
---------------------
추가 라이브러리
---------------------

```

$ npm install react-icons  // 아이콘
$ npm install classnames   // 클래스 add/remove 편리한거
$ npm install sass // scss 문법 사용
$ npm install reactstrap bootstrap
$ npm install @mui/material @emotion/react @emotion/styled
$ npm install @mui/icons-material
$ npm install react-router-dom

```

## 리액트 라우터 설정
    -index.js에 BrowserRouter 컴포넌트로 App 감싸기.

```javascript

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);

```