// Write your code here
import {Component} from 'react'

import './index.css'

import Suggestion from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResult = suggestionsList.fliter(each =>
      each.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="goggle-logo"
        />

        <div className="card">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="input"
              placeholder="Search Google"
            />
          </div>
          <ul>
            {searchResult.map(each => (
              <Suggestion value={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
