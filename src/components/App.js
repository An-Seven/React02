import React from 'react' ; //定义一个React组件必不可少

// class语法类的组件定义、
// 通过render钩子函数可以渲染出组件的结构
// class App extends React.Component {
//   render () { // 负责渲染相应的页面 --- return一段html代码，用()包含Html代码
//     return (
//       <div>Hello shadiao</div>
//     )
//   }
// }

//函数式语法
const App= () => (<div>Hello shadiao +1</div>)
export default App;
// 暴露组件