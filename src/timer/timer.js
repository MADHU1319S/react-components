import { PureComponent } from "react";

class Timer extends PureComponent {
  state = {
    Time: 0,
    Text: "Timer Stopped",
    Id:0
  };
  static getDerivedStateFromProps() {
    var k = new Date();
    // console.log(JSON.stringify(k))
    return { Time: JSON.stringify(k) };
  }
  handleClcik1 = (val) => {
        if(val==='start'){
          var a=setInterval(()=>{
            var k = new Date();
            var l = JSON.stringify(k);
            this.setState({
              Time: l,
              Text: "Timer is Running",
              Id:a
            });
          },1000)
        }
        else{
          clearInterval(this.state.Id)
          this.setState({
            Time: 0,
            Text: "Timer stopped",
            Id:a
          });
        }
  };
  render() {
    return (
      <>
        <h1>{JSON.parse(this.state.Time)}</h1>
        <h1>{this.state.Text}</h1>
        <button
          onClick={() => {
            this.handleClcik1("start");
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            this.handleClcik1("stop");
          }}
        >
          Stop
        </button>
      </>
    );
  }
}
export default Timer;
