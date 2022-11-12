import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import '../../App.css';
import placeholder from '../../../src/images/placeholder.png';

const HouseDetails = () => {
    const location = useLocation();
    const { api } = location.state;
    let {id} = useParams();
    const [fetchedData, setFetchedData] = useState([]);
    const character = fetchedData.filter((char, index) => index === Number(id));
    const [characterData] = character ?? {};
    let {name, species, gender, house, dateOfBirth, wizard, ancestry, eyeColour, hairColour, wand, patronus, actor, alive, image} = characterData ?? {};
    let {wood, core, length} = wand ?? {};
    
    useEffect(() => {
        (async () => {
          let data = await fetch(api).then(res => res.json());
          setFetchedData(data);
        })()
      }, [api]);  

    return (
        <div className='details-container d-flex justify-content-center'>
            <div className="details d-flex flex-column gap-3 mb-5">
                <h1 className="text-center text-warning fw-bold bg-dark test">{name}</h1>
                <img src={image !== '' ? image : placeholder} alt="" className="img-fluid" />
                {(() => {
                    if(alive === false){
                        return(
                            <div className={`bg-danger fs-4 fw-bold text-center text-light`}>Dead</div>
                        );
                    }
                    else {
                        return(
                            <div className={`bg-success fs-4 fw-bold text-center text-light`}>Alive</div>
                        );
                    }
                })()}
                <div className="content fs-5 fw-bold bg-dark text-info p-3">
                    <div className="">
                        <div className=""><span className='fw-bold text-warning'>Gender: </span>{gender}</div>
                    </div>
                    <div className="">
                        <div className=""><span className='fw-bold text-warning'>Species: </span>{species === '' ? 'Unknown' : species}</div>
                    </div>
                    <div className="">
                        <div className=""><span className='fw-bold text-warning'>House: </span>{house === '' ? "Unknown" : house}</div>
                    </div>
                    <div className="">
                        <div className=""><span className='fw-bold text-warning'>Birthday: </span>{dateOfBirth === '' ? 'Unknown' : dateOfBirth}</div>
                    </div>
                    <div className="">
                        <div className=""><span className='fw-bold text-warning'>Wizard: </span>{wizard === true ? 'Yes' : 'No'}</div>
                    </div>
                    <div className="">
                        <div className=""><span className='fw-bold text-warning'>Ancestry: </span>{ancestry === '' ? 'Unknown' : ancestry}</div>
                    </div>
                    <div className="">
                        <div className=""><span className='fw-bold text-warning'>Wand: </span>{wood === '' ? 'wood: unknown' : 'wood: ' + wood}{core === '' ? ' | core: unknown' : ' | core: ' + core}{length === null ? ' | length: unknown' : ' | length: ' + length}</div>
                    </div>
                    <div className="">
                        <div className=""><span className='fw-bold text-warning'>Patronus: </span>{patronus === '' ? 'Unknown' : patronus}</div>
                    </div>
                    <div className="">
                        <div className=""><span className='fw-bold text-warning'>Eye Color: </span>{eyeColour === '' ? 'Unknown' : eyeColour}</div>
                    </div>
                    <div className="">
                        <div className=""><span className='fw-bold text-warning'>Hair Color: </span>{hairColour === '' ? 'Unknown' : hairColour}</div>
                    </div>
                    <div className="">
                        <div className=""><span className='fw-bold text-warning'>Actor: </span>{actor === '' ? 'Unknown' : actor}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HouseDetails