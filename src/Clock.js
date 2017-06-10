import React, { Component } from 'react'
import './App.css';

class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            days: 0,
            hours: 0,
            minutes:0,
            seconds:0
        }
    }

    leading0(num){
        return num<10?'0'+num:num
    }

    getTimeUntil(deadline){
        console.log('Clock: getTimeUntil')
        const miliseconds = Date.parse(deadline) - Date.parse(new Date())
        const seconds = Math.floor((miliseconds/1000)%60)
        const minutes = Math.floor((miliseconds/1000/60)%60)
        const hours = Math.floor((miliseconds/1000/60/60)%24)
        const days = Math.floor((miliseconds/1000/60/60/24))
        this.setState({
            seconds,
            minutes,
            hours,
            days
        })
    }

    componentWillMount(deadline){
        console.log('Clock: componentWillMount')
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount(){
        console.log('Clock: componentDidMount')
        setInterval(()=>{
            this.componentWillMount(this.props.deadline)
        }, 1000)
    }

    render(){
        console.log('Clock: render Clock')
        return (
            <div>
                <div>
                    <span>{this.leading0(this.state.days)} days</span>
                    <span>{this.leading0(this.state.hours)} hours</span>
                    <span>{this.leading0(this.state.minutes)} minutes</span>
                    <span>{this.leading0(this.state.seconds)} seconds</span>
                </div>
        </div>
        )
    }
}

export default Clock