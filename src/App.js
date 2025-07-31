import React from 'react';
import axios from 'axios';
import './App.css';
class App extends React.Component {
    state = {
        advice: ''};

    componentDidMount() {
       
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then(response => {
                const { advice } = response.data.slip;
                this.setState({ advice });
            })
            .catch(error => {
                console.error("Error fetching advice:", error);
            });
    }

    render() {
        return (
            <div className="app">
                <h1>Random Advice Generator</h1>
                <div className="card">
                    <p>{this.state.advice || "Click the button to get advice!"}</p>
                </div>
                <button onClick={this.fetchAdvice}>Get Advice</button>
            </div>
        );
    }
}
export default App;