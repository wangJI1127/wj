import React from "react";
import ReactDOM from "react-dom";

// 元素
const element = <h1>Hello, World</h1>;
ReactDOM.render(element, document.getElementById("root"));
//eslint-disable-next-line
function tick() {
  const element = (
    <div>
      <h1>hello world</h1>
      {/* React元素是不可变对象，一旦被创建，就无法更改其子元素或属性。 */}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  // 更新UI的唯一方式是创建一个全新的元素，并将其传入
  ReactDOM.render(element, document.getElementById("root"));
}

// setInterval(tick, 1000);

// 组件：由元素构成,  组件名称必须以大写字母开头
// React 会将以小写字母开头的组件视为原生 DOM 标签
// 函数组件
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

// class组件
class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

const element3 = <Welcome name="李闪" />;
ReactDOM.render(element3, document.getElementById("root"));

function Welcomes() {
  return (
    <div>
      <Welcome name="李闪" />
      <WelcomeClass name="李某闪" />
      <Welcome name="李臭狗" />
    </div>
  );
}
ReactDOM.render(<Welcomes />, document.getElementById("root"));

function Clok(props) {
  return (
    <div>
      <h1>hello 李闪</h1>
      <h2>现在是 {props.data.toLocaleTimeString()}</h2>
    </div>
  );
}
//eslint-disable-next-line
function tick2() {
  ReactDOM.render(
    <Clok data={new Date()} />,
    document.getElementById('root')
  )
}

// setInterval(tick2, 1000);


// props不可变，state可变
// 不要直接修改 state, state的值更新是异步的
class ClokClass extends React.Component{
  constructor(props){
    super(props);
    this.state = {data: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      data: new Date()
    })
  }

  render(){
    return(
      <div>
        <h1>hello 李臭狗</h1>
        <h2>现在是
        {this.state.data.toLocaleTimeString()}
        </h2>
      </div>
    );
  }
}

ReactDOM.render(
  <ClokClass/>,
  document.getElementById('root')
)

class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isToggleon: true
    };
    // 为了在回调中使用`this`，这个绑定是必不可少的 建议使用
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    // 注意 => 后面内容最外层的() ,
    this.setState(state => ({
      isToggleon: !state.isToggleon
    }))
  }

  render(){
    return(
      <button onClick={() => this.handleClick()}>
        {this.state.isToggleon ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle/>,
  document.getElementById('root')
)