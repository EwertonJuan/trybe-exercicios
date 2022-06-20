import React from 'react';

class PokemonCard extends React.Component {
    render() {
        const { name, source, type, avgWeight, measurementUnit } = this.props;
        return (
        <div className='card'>
            <span><strong>{name}</strong></span>
            <img src={source} alt={name} />
            <span>{type}</span>
            <span>Average Weight: {avgWeight}{measurementUnit}</span>
        </div>
        )
    }
}

export default PokemonCard;