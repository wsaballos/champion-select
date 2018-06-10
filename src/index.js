import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import RIOT_KEY from './apiKeys'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import ChampionList from './components/champ-list';

class App extends Component {
    constructor (props) {
        super(props)

        this.state = {
            champs: [],
            champsObj: {}
        }
        let champsObj = {}
        const champs = []
        axios.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
            .then(result => {
                champsObj = result.data.data
                this.setState({champsObj})
                for (let i in champsObj) {
                    champs.push(i)
                }
                this.setState({ champs })
            })

        
    }

    render () {
        return(
            <div className="container">
                <ChampionList champNames={this.state.champs} champTitles={this.state.champsObj}/>
            </div>   
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
