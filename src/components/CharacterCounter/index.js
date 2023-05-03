import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

class CharacterCounter extends Component {
  state = {
    userInput: '',
    inputList: [],
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onSubmitInput = event => {
    event.preventDefault()
    this.setState(prevState => ({
      inputList: [
        ...prevState.inputList,
        {id: uuidv4(), input: prevState.userInput},
      ],
      userInput: '',
    }))
  }

  renderInputCard = () => {
    const {userInput} = this.state

    return (
      <div className="input-card">
        <h1 className="input-card-title">Character Counter</h1>
        <form className="input-and-button" onSubmit={this.onSubmitInput}>
          <input
            type="text"
            placeholder="Enter the Characters here"
            value={userInput}
            className="user-input"
            onChange={this.onChangeUserInput}
          />
          <button type="submit" className="custom-button">
            Add
          </button>
        </form>
      </div>
    )
  }

  renderOutputCard = () => {
    const {inputList} = this.state
    const showList = inputList.length !== 0

    return (
      <div className="output-card">
        <div className="output-title-container">
          <h1 className="output-title">Count the characters like a Boss...</h1>
        </div>
        {!showList && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
            className="no-input-image"
          />
        )}
        {showList && (
          <ul className="output-list-container">
            {inputList.map(eachItem => (
              <li key={eachItem.id}>
                <p className="output-item">{`${eachItem.input}: ${eachItem.input.length}`}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  render() {
    return (
      <div className="main-container">
        <div className="character-counter-card">
          {this.renderOutputCard()}
          {this.renderInputCard()}
        </div>
      </div>
    )
  }
}

export default CharacterCounter
