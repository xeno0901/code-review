import React from 'react';

const TitleComponent = () => (
    <h2>강의목표</h2>
);

class Todos extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <li><input type={"checkbox"}/> {this.props.text}</li>;
  }
}

export const LectureGoal = ( props ) => (
  <div className="LectureGoal">
    <h2>{props.title}</h2>
    <ul>
      {props.items.map((item, index) =>{
        return <li key={index}><input type={"checkbox"}/> {item}</li>;
      })}
    </ul>
    </div>
);

export default LectureGoal;
