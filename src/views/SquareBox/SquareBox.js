import React, { Component } from 'react';
import './style.scss';

export default class SquareBox extends Component {

    click = () => {
        if (this.props.winner) { return }
        else { this.props.handleClick(this.props.position) }
    }

    render() {
        const { position, value } = this.props;

        return (
            <div className="square-box-container" onClick={this.click}>{value[position]}</div>
        )
    }
}