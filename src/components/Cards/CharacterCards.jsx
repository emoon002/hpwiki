import React from 'react'
import { Link } from 'react-router-dom';
import styles from './CharacterCards.module.scss';
import placeholder from '../../../src/images/placeholder.png';

const CharacterCards = ({fetchedData}) => {

    let display;

    if(fetchedData) {
        display = fetchedData.map((character, i) => {
            let {name, alternate_names, species, gender, house, dateOfBirth, yearOfBirth, wizard, ancestry, eyeColour, hairColour, wand, patronus, hogwartsStudent, hogwartsStaff, actor, alive, image} = character;

            return (
                <Link style={{textDecoration: 'none'}} to={`/${i}`} key={i} className='col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark'>
                    <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                        <img src={image !== '' ? image : placeholder} alt={name} className={`${styles.img} img-fluid`} />
                        <div className={`${styles.content} content`}>
                            <div className='fs-4 fw-bold mb-4 text-warning'>{name}</div>
                            <div className="fs-5 fw-bold card-footer text-info">{house}</div>
                        </div>
                        <div className="fs-5">{alive}</div>
                    </div>

                    {(() => {
                        if(alive === false){
                            return(
                                <div className={`${styles.badge} badge bg-danger position-absolute`}>Dead</div>
                            );
                        }
                        else {
                            return(
                                <div className={`${styles.badge} badge bg-success position-absolute`}>Alive</div>
                            );
                        }
                    })()}
                </Link>
            );
        });
    } else {
        display = "No characters found!"
    }

    return <>{display}</>
}

export default CharacterCards