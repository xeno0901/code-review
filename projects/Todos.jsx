import React from 'react';

const TitleComponent = () => (
    <h2>강의목표</h2>
);

class TodosTemp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <li><input type={"checkbox"}/> {this.props.text}</li>;
  }
}

export const Todos = ( props ) => (
  <div className="Todos">
    <h2>{props.title}</h2>
    <ul>
      {props.items.map((item, index) =>{
        return <li key={index}><input type={"checkbox"} checked={item.completed}/> {item.name}</li>;
      })}
    </ul>
    </div>
);

export default Todos;
