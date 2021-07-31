// Write your code here
import {Component} from 'react'
import './index.css'

const heads = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tails = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
    newResult: heads,
  }

  onClickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState({newResult: heads})
      this.setState(prevCount => ({totalCount: prevCount.totalCount + 1}))
      this.setState(prevCount => ({headsCount: prevCount.headsCount + 1}))
    } else {
      this.setState({newResult: tails})
      this.setState(prevCount => ({totalCount: prevCount.totalCount + 1}))
      this.setState(prevCount => ({tailsCount: prevCount.tailsCount + 1}))
    }
  }

  render() {
    const {totalCount, headsCount, tailsCount, newResult} = this.state

    return (
      <div className="main-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={newResult} alt="toss result" className="image-edit" />
          <button
            className="toss-button"
            type="button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="total">Total:{totalCount}</p>
            <p className="total">Heads:{headsCount}</p>
            <p className="total">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
