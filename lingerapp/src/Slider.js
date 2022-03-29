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
    }

    render() {
        return (
            <div className='Slider'>
                <div className='UserSlide'>
                    <img src={this.userSlide[0].picture}></img>
                </div>
                <div className='UserInfo'>
                    User Name, User Age
                </div>
                <div className='Button'>
                    <button className='Heart'><FaHeart></FaHeart></button>
                    <button className='Cross'><ImCross></ImCross></button>
                </div>
            </div>
        );
    }
}