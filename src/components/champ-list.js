import React from 'react'
import ChampionListItem from './champ-list-item'
const ChampionList = ({champNames, champTitles}) => {

    return (
        <ul className="row">
            <ChampionListItem champName={champNames} champTitle={champTitles} />
        </ul>
    )
}
export default ChampionList