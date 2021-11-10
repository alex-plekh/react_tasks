// import React, { Component } from 'react';
//
// class Clocks extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             time: new Date().toLocaleTimeString(),
//             timerOn: true
//         };
//         this.startBtn = this.startBtn.bind(this);
//         this.stopBtn = this.stopBtn.bind(this);
//     }
//     componentDidMount() {
//         if (this.state.timerOn) {
//             this.timerID = setInterval(() => {
//                 this.setState({
//                     time: new Date().toLocaleTimeString()
//                 });
//             }, 1000);
//         }
//     }
//
//     startBtn() {
//         this.timerID = setInterval(() => {
//             this.setState({
//                 time: new Date().toLocaleTimeString()
//             })
//         }, 1000);
//         this.setState({
//             timerOn: this.state.timerOn
//         })
//     }
//     stopBtn() {
//         clearInterval(this.timerID);
//         this.setState(({timerOn: false}))
//     }
//
//     render() {
//         return (
//             <div>
//             <p className="App-clock">Время: {this.state.time}.</p>
//         <button onClick={this.startBtn}>START</button>
//         <button onClick={this.stopBtn}>STOP</button>
//             </div>
//         )
//     }
// }
//
// export default Clocks;