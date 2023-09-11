import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

class App extends Component {
  state = {initialList: [], websiteName: '', name: '', password: ''}

  name1 = event => {
    this.setState({websiteName: event.target.value})
  }

  name2 = event => {
    this.setState({name: event.target.value})
  }

  pass1 = event => {
    this.setState({password: event.target.value})
  }

  getItem = () => {
    const {initialList} = this.state

    initialList.map(each => {
      const {websiteName} = each
      return (
        <li>
          <h1>{websiteName}</h1>
        </li>
      )
    })
  }

  start11 = event => {
    event.preventDefault()

    const {websiteName, name, password} = this.state

    const addN = {
      id: v4(),
      websiteName,
      name,
      password,
    }
    this.setState(prevState => ({
      initialList: [...prevState.initiaList, addN],
      websiteName: '',
      name: '',
      password: '',
    }))
  }

  render() {
    const {initialList} = this.state
    return (
      <div className="main1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="logo"
          alt="logo"
        />
        <div className="card1">
          <div className="innerCard">
            <form onSubmit={this.start11}>
              <h1 className="heading">Add New Password</h1>
              <div className="inner2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="website"
                  alt="website"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input"
                  onChange={this.name1}
                />
              </div>
              <div className="inner2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="website"
                  alt="username"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input"
                  onChange={this.name2}
                />
              </div>
              <div className="inner2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="website"
                  alt="password"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input"
                  onChange={this.pass1}
                />
              </div>

              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="image1"
          />
        </div>
        <div className="card2">
          <div className="inner3">
            <h1 className="heading">
              Your Passwords: <span>{initialList.length}</span>
            </h1>
            <div className="inner2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
                className="website"
              />
              <input type="text" className="input" placeholder="search" />
            </div>
          </div>
          <hr className="line" />
          <ul>{this.getItem()}</ul>
        </div>
      </div>
    )
  }
}

export default App
