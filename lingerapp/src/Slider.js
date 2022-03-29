import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import { FaHeart } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import './App.css';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.userSlide = 
            this.props.userSlide.map((user, index) => {
                return {
                    picture: user.picture.large,
                    name: user.name.first + ' ' + user.name.last, 
                    age: user.dob.age,
                    liked: false,
                };
            }); //this.props.userSlide is in fact already array of users.
            //should i move this map to upper level, aka app.js?
        this.state = {
            currentUserIndex: 0,
            currentUser: this.userSlide[0],
        };
    }

    heartUser() {
        this.userSlide[this.state.currentUserIndex].liked = true;
        this.setState({
            currentUserIndex: this.state.currentUserIndex + 1,
        })
    }

    passUser() {
        //do nothing to liked, aka liked == false //should we set it to false explicitly?
        this.setState({
            currentUserIndex: this.state.currentUserIndex + 1,
        })
    }

    render() {
        console.log(this.state.currentUserIndex);
        return (
            <div className='Slider'>
                <div className='UserSlide'>
                    <img src={this.userSlide[this.state.currentUserIndex].picture}></img>
                </div>
                <div className='UserInfo'>
                    User Name, User Age
                </div>
                <div className='Button'>
                    <button className='Heart' onClick={() => { this.heartUser() }}><FaHeart></FaHeart></button>
                    <button className='Cross' onClick={() => { this.passUser() }}><ImCross></ImCross></button>
                </div>
            </div>
        );
    }
}/*
                {this.userSlide.map((user, index) => {
                    return (
                        <div className={index === this.state.currentUserIndex ? 'UserSlide Active' : 'UserSlide'} key={index}>
                            {index === this.state.currentUserIndex && (
                                <img src={user.picture}></img>
                            )}
                            {this.state.currentUserIndex}
                        </div>
                    );
                })}
                */