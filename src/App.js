import React from 'react';
import axios from 'axios';
import './App.css';
import { FiCopy } from 'react-icons/fi';

class App extends React.Component {
  state = {
    advice: 'Want Random Gyaan?',
    loading: false,
    copied: false
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    this.setState({ loading: true, advice: 'Fetching Random Gyaan for you :)', copied: false });

    axios.get('https://api.adviceslip.com/advice')
      .then(response => {
        const { advice } = response.data.slip;
        this.setState({ advice, loading: false });
      })
      .catch(error => {
        console.error("Error fetching advice:", error);
        this.setState({ advice: 'Failed to fetch advice. Try again!', loading: false });
      });
  }

  handleCopy = () => {
    navigator.clipboard.writeText(this.state.advice).then(() => {
      this.setState({ copied: true });
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { advice, loading, copied } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <div className="copy-icon" onClick={this.handleCopy} title="Copy Advice">
            <FiCopy size={20} />
            {copied && <span className="copied-msg">Copied!</span>}
          </div>
        </div>

        <button className="button" onClick={this.fetchAdvice} disabled={loading}>
          <span><strong>Get Advice</strong></span>
        </button>
      </div>
    );
  }
}

export default App;


