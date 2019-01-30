import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import './Timer.css';

moment.locale('ko');

class Timer extends React.Component {
  constructor(props) {
    super(props);

    const mtNow = moment();
    const {expireDate} = this.props;
    const mtExpire = moment(expireDate);

    this.state = {
      mtNowStr: `현재 시간은 ${mtNow.format('A h:mm:ss')}`,
      mtExpireStr: `${mtExpire.fromNow()}에 강의를 종료합니다.`,
    };
  }

  componentDidMount() {
    const Timehandler = setInterval(() => {
      const mtNow = moment();
      const {expireDate} = this.props;
      const mtExpire = moment(expireDate);

      this.setState({
        mtNowStr: `현재 시간은 ${mtNow.format('A h:mm:ss')}`,
      });

      if (mtNow > mtExpire) {
        clearInterval(Timehandler);
        this.setState({
          mtExpireStr: `강의가 종료되었습니다.`,
        });
      }
    }, 1000);
  }

  render() {
    return (
      <div className="Timer">
        <div>{this.state.mtNowStr}</div>
        <div>{this.state.mtExpireStr} </div>
      </div>
    );
  }
}

export default Timer;
