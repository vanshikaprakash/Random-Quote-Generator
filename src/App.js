import React from 'react';
import axios from 'axios';
import './App.css';
class App extends React.Component {
    state = { advice: ''};

    componentDidMount() {
       
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then(response => {
                const { advice } = response.data.slip;
                this.setState({ advice: advice });
            })
            .catch(error => {
                console.error("Error fetching advice:", error);
            });
    }

    render() {
        const { advice } = this.state;

        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading"> {advice} </h1>
                </div>
                <button onClick={this.fetchAdvice}>Get Advice</button>
            </div>
        );
    }
}
export default App;