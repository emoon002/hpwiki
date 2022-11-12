import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Houses.module.scss';

const Houses = () => {

    const houses = {
        Gryffindor: {
            name: 'Gryffindor',
            description: 'Gryffindor valued bravery, daring, nerve, and chivalry. Its emblematic animal was the lion, its representative gemstone was rubies, and its colours were scarlet and gold. Minerva McGonagall was the most recent Head of Gryffindor. Sir Nicholas de Mimsy-Porpington, also known as "Nearly Headless Nick", was the House Ghost. The founder of the House was Godric Gryffindor. Gryffindor corresponded to the element of fire. \n\nThe common room was located in one of the highest towers at Hogwarts, the entrance was situated on the seventh floor in the east wing of the castle and was guarded by a portrait of The Fat Lady. She permitted entrance if given the correct password, which was changed numerous times throughout the school year. \n\nFamous Gryffindors included Albus Dumbledore, Harry Potter, and Minerva McGonagall. \n\nThe significant object of Gryffindor was the Sword of Gryffindor.',
            motto: 'Their daring, nerve and chivalry set Gryffindors apart.',
            animal: 'Lion',
            element: 'Fire',
            houseColors: 'Scarlet and Gold',
            crest: 'https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/'
        },
        Hufflepuff: {
            name: 'Hufflepuff',
            description: 'Hufflepuff valued hard work, dedication, patience, loyalty, and fair play. Its emblematic animal was the badger, its representative gemstone was yellow diamonds, and yellow and black were its colours. Pomona Sprout was the Head of Hufflepuff during 1991-1998, Sprout left the post of Head of Hufflepuff and Herbology Professor sometime before 2017 and her successor for the position of Head of Hufflepuff was currently unknown. The Fat Friar was its ghost. The founder of the House was Helga Hufflepuff.  \n\nHufflepuff corresponded to the element of earth. The Hufflepuff dormitories and common room were located somewhere in the basement, near the castle\'s kitchens. It could be accessed by tapping the barrel two from the bottom, middle of the second row in the rhythm of "Helga Hufflepuff" and was described as being a cosy and welcoming place with yellow hangings, fat armchairs, and underground tunnels that led to the dormitories, which had perfectly round doors, similar to barrel tops. \n\nFamous Hufflepuffs included Hengist of Woodcroft (founder of Hogsmeade), Newt Scamander (author of Fantastic Beasts and Where to Find Them), and Artemisia Lufkin (first female Minister for Magic). \n\nThe significant object of Hufflepuff was Helga Hufflepuff\'s Cup, which was turned into a Horcrux by Tom Riddle.',
            motto: 'You might belong in Hufflepuff, where they are just and loyal, those patient Hufflepuff\'s are true and unafraid of toil.',
            animal: 'Badger',
            element: 'Earth',
            houseColors: 'Yellow and Black',
            crest: 'https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/'

        },
        Ravenclaw: {
            name: 'Ravenclaw',
            description: 'Ravenclaw valued intelligence, knowledge, curiosity, creativity and wit. Its emblematic animal was the eagle, its representative gemstone was sapphires, and its colours were blue and bronze. The Ravenclaw Head of House in the 1990s was Filius Flitwick. The ghost of Ravenclaw was the Grey Lady, who was the daughter of Rowena Ravenclaw, the House\'s founder. Ravenclaw corresponded to the element of air. The Ravenclaw common room and dormitories were located in a tower on the west side of the castle. Ravenclaw students must answer a riddle as opposed to giving a password to enter their dormitories. This riddle, however, could be answered by non-Ravenclaws. \n\nFamous Ravenclaws included Luna Lovegood, Gilderoy Lockhart, Ignatia Wildsmith (inventor of Floo powder), and Garrick Ollivander. \n\nThe significant object of Ravenclaw was Rowena Ravenclaw\'s diadem, which was turned into a Horcrux by Tom Riddle.',
            motto: 'Wit beyond measure is man\'s greatest treasure.',
            animal: 'Eagle',
            element: 'Air',
            houseColors: 'Blue and Bronze',
            crest: 'https://static.wikia.nocookie.net/harrypotter/images/7/71/Ravenclaw_ClearBG.png/'
        },
        Slytherin: {
            name: 'Slytherin',
            description: 'Slytherin valued ambition, leadership, self-preservation, cunning and resourcefulness and was founded by Salazar Slytherin. Its emblematic animal was the serpent, its representative gemstone was emeralds, and its colours were emerald green and silver. Professor Horace Slughorn was the Head of Slytherin during the 1997-1998 school year, replacing Severus Snape, who as well replaced Slughorn as Potions Professor when he retired for the first time several years prior. Slytherin had produced the most Death Eaters and Dark Wizards, including Tom Riddle, Bellatrix Lestrange and Lucius Malfoy, for example. But that does not mean that other Houses had not produced any; Peter Pettigrew was a Gryffindor, and Quirinus Quirrell was a Ravenclaw. \n\nThe Bloody Baron was the House ghost. The founder of the House was Salazar Slytherin. Slytherin corresponded roughly to the element of water. The Slytherin dormitories and common room were reached through a bare stone wall in the Dungeons. The Slytherin common room lay beneath the Black Lake. It was a long, low underground room with rough stone walls and silver lamps hanging from the ceiling. \n\nFamous Slytherins included Merlin, Tom Riddle, Draco Malfoy, and Dolores Umbridge. \n\nThe significant object of Slytherin was Salazar Slytherin\'s locket, which was turned into a Horcrux by Tom Riddle.',
            motto: 'Slytherin will help you on your way to greatness',
            animal: 'Serpent',
            element: 'Water',
            houseColors: 'Green and Silver',
            crest: 'https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/'

        } 
    }
    let display;

    display = Object.entries(houses).map((house, i) => {
        let {name, description, motto, animal, element, houseColors, crest} = house[1];
        return (
            <Link style={{textDecoration: 'none'}} to={`/${name}`} state={{houseName: name}} key={i} className='col-lg-6 col-md-6 col-12 mb-4 position-relative text-dark'>
                <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                    <img src={crest} alt={animal} className={`${styles.img} img-fluid`} />
                    <div className={`${styles.content} content`}>
                        <div className={`fs-4 fw-bold mb-4 text-warning ${styles.name}`}>{name}</div>
                        <div className={`fs-5 text-info mb-4 ${styles.description}`}>{description}</div>
                        <div className="fs-5 text-info mb-4"><span className='text-warning'>Motto: </span>{motto}</div>
                        <div className="fs-5 text-info mb-4"><span className='text-warning'>Animal: </span>{animal}</div>
                        <div className="fs-5 text-info mb-4"><span className='text-warning'>Element: </span>{element}</div>
                        <div className="fs-5 text-info mb-4"><span className='text-warning'>Colors: </span>{houseColors}</div>
                    </div>
                </div>
            </Link>
        )
    });

    return <>{display}</>
}

export default Houses