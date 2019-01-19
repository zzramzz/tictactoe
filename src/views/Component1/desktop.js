import React, { Component } from 'react'
import SquareBox from '../SquareBox/SquareBox';
import './style.scss';

let winnersMove = ['012','036','048','147','258','246','345','678'];

export default class Desktop extends Component {
  constructor(){
    super();
    this.state = {
      switch: true,
      values:{},
      winner:null,

    }
    this.handleClick = this.handleClick.bind(this);
    this.checkWinner =this.checkWinner.bind(this);
    this.getDiv = this.getDiv.bind(this);
  }

  handleClick(v){
    // console.log(v);
    let newValue;
    if(!this.state.values[v]){
    let value = this.state.switch?'X':'O';
     newValue = {...this.state.values,[v]:value};
    this.setState({values:newValue, switch: !this.state.switch});
    // console.log(this.state.switch)
    this.checkWinner(newValue);
    }
    // console.log(winnersMove,'sdagsfgsgafgafgfdgadfgas');
  }

  checkWinner(obj){
    // console.log(obj)
    
    // console.log(Object.entries(obj))
    let xarray= Object.entries(obj).filter(item=>item[1]==='X')
    // console.log(xarray)
    let oarray= Object.entries(obj).filter(item=>item[1]==='O')
    // console.log(oarray);

    let x = xarray.reduce((str,v)=>{return str+v[0]},'');
    let y = oarray.reduce((str,v)=>{return str+v[0]},'');

    let winner = winnersMove.find((value)=>{
            let win = new RegExp(`\\d*${value[0]}\\d*${value[1]}\\d*${value[2]}\\d*`);
            let v = win.test(x)?'X':win.test(y)?'Y':'No Winner';
            if(v==='X'||v==='Y'){
              return v;
            }
    });

    if(winner){
      console.log(winner)
      const value = this.state.values[winner.slice(0,1)]
      console.log(value,'O')
      let win = value ==='X'?'Player 1':'Player 2'; 
      

      this.setState({ winner:win});
      console.log(win);
    }


    console.log(x);
    console.log(y)
  }

  getDiv(){
    if(this.state.winner){
      return <div> winner {this.state.winner}</div>
    } else {
      return <div>Make Your Move {this.state.switch?'player 1':'player 2'}</div>
    }
  }

  render() {

    return (
      <div className="main-box-container">
     { this.getDiv()}
      
        <div className="row">
          <SquareBox position = {0}  value ={this.state.values} winner = {this.state.winner} handleClick = {this.handleClick} />
          <SquareBox position = {1} value ={this.state.values} winner = {this.state.winner} handleClick = {this.handleClick} />
          <SquareBox position = {2} value ={this.state.values} winner = {this.state.winner} handleClick = {this.handleClick} />
        </div>
        <div className="row">
          <SquareBox position = {3} value ={this.state.values} winner = {this.state.winner} handleClick = {this.handleClick} />
          <SquareBox position = {4} value ={this.state.values} winner = {this.state.winner} handleClick = {this.handleClick} />
          <SquareBox position = {5} value ={this.state.values} winner = {this.state.winner} handleClick = {this.handleClick} />
        </div>
        <div className="row">
          <SquareBox position = {6} value ={this.state.values} winner = {this.state.winner} handleClick = {this.handleClick} />
          <SquareBox position = {7} value ={this.state.values} winner = {this.state.winner} handleClick = {this.handleClick} />
          <SquareBox position = {8} value ={this.state.values} winner = {this.state.winner} handleClick = {this.handleClick} />
        </div>
      </div>
    )
  }
}
