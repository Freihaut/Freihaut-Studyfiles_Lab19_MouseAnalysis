import React, { Component } from 'react';


export default class PointClickTask1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskTimer: this.props.time,
        };

        this.tick = this.tick.bind(this);

    }

    componentDidMount() {
        // start the task
        this.countdown = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.countdown);
        clearTimeout(this.end);

    }


    tick() {
        if (this.state.taskTimer === 0) {
            clearInterval(this.countdown);
            clearTimeout(this.end);
            this.end = setTimeout(
                () => this.props.end(),
                100
            );
        } else{
            this.setState({
                taskTimer: this.state.taskTimer - 1
            });
        }
    }



    render() {
        return(<span>{this.state.taskTimer}</span>);
    }

}