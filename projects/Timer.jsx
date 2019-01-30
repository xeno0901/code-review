import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import './Timer.css';

moment.locale('ko');

class Timer extends React.Component {
  constructor(props) {
    super(props);

    const {expireDate} = this.props;
    const mtExpire = moment(expireDate);

    this.state = {
      mtNow: moment(),
      mtExpireStr: `${mtExpire.fromNow()}에 강의를 종료합니다.`,
    };
  }

  componentDidMount() {
    this.nTimer = setInterval(() => {
      const mtNow = moment();
      const {expireDate} = this.props;
      const mtExpire = moment(expireDate);

      this.setState({
        mtNow: moment(),
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    const mtNow = moment();
    const {expireDate, onExpired} = this.props;
    const mtExpire = moment(expireDate);

    if (mtNow > mtExpire) {
      clearInterval(this.nTimer);
      onExpired(': Timeout');
    }
  }

  render() {
    const mtNow = moment();
    const {expireDate, onExpired} = this.props;
    const mtExpire = moment(expireDate);
    const isExpired = mtExpire < mtNow;

    return (
      <div className="Timer">
        <div>{`현재 시간은 ${mtNow.format('A h:mm:ss')}`}</div>
        {isExpired ? <div>{'강의가 종료되었습니다.'} </div> : <div>{`${mtExpire.fromNow()}에 강의를 종료합니다.`} </div>}
      </div>
    );
  }
}

export default Timer;
