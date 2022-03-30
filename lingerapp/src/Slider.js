import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import { FaHeart } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import './App.css';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUserIndex: this.props.currentUserIndex,
            liked: [],
        };
        this.heartUser = this.heartUser.bind(this); //bind to claim 'this' is Slider
    }

    heartUser() {
        this.props.userSlide[this.state.currentUserIndex].liked = true;
        this.props.peopleLikedFunc(this.props.userSlide[this.state.currentUserIndex]);
        this.setState({
            currentUserIndex: this.state.currentUserIndex + 1,
        });
        this.props.countingUserIndex();
    }
    //this.props.userSlide[this.state.currentUserIndex]

    passUser() {
        //do nothing to liked, aka liked == false //should we set it to false explicitly?
        this.props.userSlide[this.state.currentUserIndex].liked = false;
        this.setState({
            currentUserIndex: this.state.currentUserIndex + 1,
        })
        this.props.countingUserIndex();
    }

    render() {
        console.log(this.state.currentUserIndex);
        return (
            //<div className='AppLayout'>
            <div className='IndiPage'>
                <div className='UserSlide'>
                    <img src={this.props.userSlide[this.state.currentUserIndex].picture}></img>
                </div>
                <div className='UserInfo'>
                    {this.props.userSlide[this.state.currentUserIndex].name}, {this.props.userSlide[this.state.currentUserIndex].age}
                </div>
                <div className='Button'>
                    <button className='Heart' onClick={() => { this.heartUser() }}><FaHeart></FaHeart></button>
                    <button className='Cross' onClick={() => { this.passUser() }}><ImCross></ImCross></button>
                </div>
            </div>
            //</div>
        );
    }
}