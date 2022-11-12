import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './CharacterCards.module.scss';
import placeholder from '../../../src/images/placeholder.png';

const HouseCharacters = () => {

    const location = useLocation();
    const { houseName } = location.state;
    let [fetchedData, setFetchedData] = useState([]);
    let display;
    const API_URL = `https://hp-api.herokuapp.com/api/characters/house/${houseName}`;

    useEffect(() => {
        (async ()=> {
            let data = await fetch(API_URL).then(res => res.json());
            setFetchedData(data);
        })()
    }, [API_URL]);

    display = fetchedData.map((character, i) => {
        let {name, house, alive, image} = character;
        return (
            <Link style={{textDecoration: 'none'}} to={`/${house}/${i}`} state={{api: API_URL}} key={i} className='col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark'>
                    <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                        <img src={image !== '' ? image : placeholder} alt={name} className={`${styles.img} img-fluid`} />
                        <div className={`${styles.content} content`}>
                            <div className='fs-4 fw-bold mb-4 text-warning'>{name}</div>
                            <div className="fs-5 text-info">{house}</div>
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
          )
    })
    
    return <>{display}</>
}

export default HouseCharacters