import React, { Component } from 'react';
import './style.scss';

export default class SquareBox extends Component {
  
    render() {
        const {position,value} = this.props;

        // console.log(position)
        return (
            <div className="square-box-container" onClick = {()=>this.props.handleClick(position)}>{value[position]}</div>
        )
    }
}