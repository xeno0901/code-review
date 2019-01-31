import React from 'react';
import {Input} from 'antd';
import './Counter.less';

const Search = Input.Search;

class Counter extends React.PureComponent {
  counter = 0;
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      list: [1, 2, 3, 4, 5],
    };
  }
  handleClick = e => {
    // this.setState(prevState => {
    //   return {count: prevState.count + 1};
    // });
    // this.setState(prevState => {
    //   return {count: prevState.count + 1};
    // });
    // this.setState(prevState => {
    //   return {count: prevState.count + 1};
    // });
    // this.setState(prevState => {
    //   return {count: prevState.count + 1};
    // });
    const {list} = this.state;
    let num = Math.random() * 1000;
    num = Math.ceil(num);

    const templist = [...list];
    templist.push(num);

    this.setState({
      list: templist,
    });
  };

  render() {
    console.log('render....');
    return (
      <div className={'Counter'}>
        <header className={'Counter-Header'}>
          {this.state.list.map((item, index) => {
            return <div key={`list-item-${index}`}>{item}</div>;
          })}
          <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
          <button onClick={this.handleClick}>카운터</button>
        </header>
      </div>
    );
  }
}

export default Counter;
