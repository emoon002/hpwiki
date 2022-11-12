import React from 'react';
import styles from './CharacterCards.module.scss';
import placeholder from '../../../src/images/placeholder.png'

const SpellDetails = ({fetchedData}) => {

    let display;

        if (fetchedData) {
            display = (fetchedData).map((spell, i) => {
                let {name, description} = spell;
                    return (
                        <div className={`${styles.cards} d-flex flex-column justify-content-start col-lg-4`} key={i}>
                            <img src={placeholder} alt={name} className={`${styles.img} img-fluid`} />
                            <div className={`${styles.content} content mb-4`}>
                                <div className='fs-4 fw-bold mb-4 text-warning'>{name}</div>
                                <div className="fs-5 text-info">{description}</div>
                            </div>
                        </div>
                    );
            });
        } else {
            display = 'No spells found!'
        }
    
    return <>{display}</>
}

export default SpellDetails