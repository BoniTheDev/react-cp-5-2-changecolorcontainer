// Write your code here
import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onLightBtn = () => {
    this.setState(prevSate => ({isDarkMode: !prevSate.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const containerColor = isDarkMode ? 'dark-back-ground' : 'light-back-ground'
    const heading = isDarkMode ? 'light-heading' : 'dark-heading'

    return (
      <div className="app-container">
        <div className={`text-card ${containerColor}`}>
          <h1 className={heading}>Click to Change Mode</h1>
          <button type="button" className="btnEl" onClick={this.onLightBtn}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
