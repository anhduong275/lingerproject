import './App.css';
import { Component } from 'react/cjs/react.production.min';
import Slider from './Slider';

export default class Liked extends Component {
    constructor(props) {
        super(props);
        /*
        this.props.liked = this.props.userSlide.filter(
            this.ifLiked,
        );
        */
        /*map((user, index) => {
            if (user.liked) {
                return (
                    <img src={user.picture}></img>
                );
            } else {
                return;
            }});
            */
    }

    /*
    displayLikedUser() {
        this.props.peopleLiked.map((user, index) => {
            return (
                <image src={user.picture}></image>
            )
        });
    }
    */

    render() {
        return (
            <div className='IndiPage'>
                {this.props.peopleLiked.map((user, index) => {
                    return (
                        <img src={user.picture}></img>
                    )
                })}
            </div>
        );
    }
}
//{this.props.userSlide[0].picture}
//<img src={this.props.peopleLiked[0].picture}/>
//<img src={this.props.liked.picture}></img>