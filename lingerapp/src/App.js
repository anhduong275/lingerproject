import './App.css';
import { Component } from 'react/cjs/react.production.min';
import Slider from './Slider';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loadingStatus: false,
    }
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then((response) => {
      this.setState({
        users: response.results,
        loadingStatus: true,
      })
    });
  }

  render() {
    let {users, loadingStatus} = this.state

    if (!loadingStatus) {
      return (
        <div>Loading user...</div>
      )
    } else {
      return (
          <div className='AppLayout'>
            <Slider userSlide = {users}></Slider>
          </div>
      );
    }
  }
}

/*
            {users.map(user => (
              <img src={user.picture.medium}/>
            ))}
            */

export default App;