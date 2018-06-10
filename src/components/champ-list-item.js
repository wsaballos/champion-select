import React, {Component} from 'react'
import ChampionListItemDetail from './champ-list-item-detail'

class ChampionListItem extends Component {
    constructor (props) {
        super(props)
        this.state = {
            active: 'd-none'
        }
    }
    activate(e){
        this.state.active === 'd-none' ? this.setState({ active: 'd-block' }) : this.setState({ active: 'd-none' }) 
    }
    render(){
        const chanpo =  this.props.champName.map((champ) => {
            return (
                <li onClick={(e) => this.activate(e)} className="col-sm-6 col-md-3" style={{ listStyleType: 'none', textAlign: 'center' }} key={champ}>
                    <img
                        src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${champ}.png`} />
                    <p style={{ fontWeight: 900 }}>{this.props.champTitle[champ].name}: {this.props.champTitle[champ].title}</p>
                    <ChampionListItemDetail

                        champBlurb={this.props.champTitle[champ].blurb} 
                        champTag={this.props.champTitle[champ].tags[0]} 
                        champInfo={this.props.champTitle[champ].info}
                        activeState={this.state.active}/>
                </li>
            )
        })
        return chanpo
    }
}

export default ChampionListItem