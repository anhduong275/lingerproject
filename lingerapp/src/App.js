import './App.css';
import { Component } from 'react/cjs/react.production.min';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Slider from './Slider';
import Liked from './Liked';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loadingStatus: false,
      liked: [],
      currentUserIndex: 0,
    }
    this.peopleLiked = this.peopleLiked.bind(this); //bind to claim 'this' is App
    this.countingUserIndex = this.countingUserIndex.bind(this); //bind to claim 'this' is App
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then((response) => {
      this.setState({
        users: response.results.map((user, index) => {
          return {
              picture: user.picture.large,
              name: user.name.first + ' ' + user.name.last, 
              age: user.dob.age,
              liked: false,
          };
      }),
        loadingStatus: true,
      })
    });
  }

  peopleLiked(likedUser) {
    const liked = this.state.liked.slice(0, this.state.liked.length + 1)
    //const emptyarr = [];
    this.setState(
      {liked: liked.concat([likedUser])},
    );
    console.log(this.state.liked);
  }
  
  //keeping track of user index
  countingUserIndex() {
    this.setState({
      currentUserIndex: this.state.currentUserIndex + 1,
    });
  }
  
  render() {
    let {users, loadingStatus} = this.state

    if (!loadingStatus) {
      return (
        <div className='AppLayout'>Loading user...</div>
      )
    } else {
      return (
        <div className='AppLayout'>
          <div className='AppScreen'>
            <Router>
              <Routes>
                <Route path="/" exact 
                element={<Slider 
                  userSlide = {users} 
                  peopleLikedFunc = {this.peopleLiked} 
                  currentUserIndex={this.state.currentUserIndex}
                  countingUserIndex={this.countingUserIndex}></Slider>} />
                <Route path='/liked' exact element={<Liked userSlide = {users} peopleLiked = {this.state.liked}></Liked>} />
              </Routes>
              
              <div id="Separator"></div>
              <div className='Routes'>
                <Link to="/" className='Link'><p>Discover</p></Link>
                <Link to="/liked" className='Link'><p>Liked</p></Link>
              </div>
            </Router>    
          </div>
        </div>
              
      );
    }
  }
}

export default App;