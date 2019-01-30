import React from 'react';

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      send: '',
    };
  }

  handleSubmit(event) {
    alert(this.state.send);
    event.preventDefault();
  }

  handleInputChange = ({target}) => {
    this.setState({
      send: target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name :
          <input defaultValue="" type={'text'} onChange={this.handleInputChange} />
        </label>
        <input type={'submit'} value={'Submit'} />
      </form>
    );
  }
}

export default ControlledForm;
