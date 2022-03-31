import './App.css';
import { Component } from 'react/cjs/react.production.min';

export default class Liked extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='IndiPage'>
                <div className='Title'>Liked users:</div>
                <div className='IndiList'>
                {this.props.peopleLiked.map((user, index) => {
                    return (
                        <div className='IndiUser'>
                         <div className='IndiPic'><img src={user.picture}></img></div>
                         <div className='IndiInfo'><p>{user.name}, {user.age}</p></div>
                        </div>
                    )
                })}
                </div>
            </div>
        );
    }
}