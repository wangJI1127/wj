import React from "react";
import ReactDOM from "react-dom";

// 元素
const element = <h1>Hello, World</h1>;
ReactDOM.render(element, document.getElementById('root'));

function tick(){
  const element = (
    <div>
      <h1>hello world</h1>
      {/* React元素是不可变对象，一旦被创建，就无法更改其子元素或属性。 */}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  // 更新UI的唯一方式是创建一个全新的元素，并将其传入
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000)


// 组件：由元素构成
// 函数组件
function Welcome(props){
  return <h1>Hello {props.name}</h1>
}

// class组件
class WelcomeClass extends React.Component{
  render(){
    return <h1>Hello {this.props.name}</h1>
  }
}