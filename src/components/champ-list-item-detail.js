import React, {Component} from 'react';

class ChampionListItemDetail extends Component {
    
    render(){
        return (
            <div className={this.props.activeState} style={{ textAlign: 'left' }}>
                <p>
                    {this.props.champBlurb}
                </p>
                <p style={{ fontWeight: 900 }}>
                    {this.props.champTag}
                </p>
                <p>
                    Attack: {this.props.champInfo['attack']}
                    Defense: {this.props.champInfo['defense']}
                    Magic: {this.props.champInfo['magic']}
                    Difficulty: {this.props.champInfo['difficulty']}
                </p>
            </div>
        )
    }
}
export default ChampionListItemDetail