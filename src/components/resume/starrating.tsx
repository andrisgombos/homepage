import React from 'react';
import styled from 'styled-components';
import star from '../../assets/star.svg'
import halfstar from '../../assets/star_half_filled.svg'
import fullstar from '../../assets/star_filled.svg'
const StarContainer = styled.div`

padding: 0.7em;
`
const Star = styled.img`
width: 1.3em;
`;

const StarRating = (data : any ) => {

    const stars = [];

    for (let i=0; i <= 5; i++) {
        if (data.rating >= i) {
            stars.push(<Star src={fullstar} key={i} />)
        } else if (data.rating >= i -0.5) {
            stars.push(<Star src={halfstar} key={i} />)
        } else {stars.push(<Star src={star} key={i} />)
    }
    }

    return (
        <StarContainer>
            {gstars}
        </StarContainer>
    )
}

export default StarRating;
