import React, {useState, useEffect} from 'react';
import "./TinderCards.css";
import TinderCard  from 'react-tinder-card';
import Axios from '../../axios';

const TinderCards = () => {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fecchData() {
      const req = await Axios.get("/tinder/cards");
      setPeople(req.data);
    }
    fecchData();
  }, []);

  
  // {
  //   id: 1,
  //   name: 'John',
  //   url: 'https://static.independent.co.uk/2020/10/30/08/newFile-2.jpg?width=640&auto=webp&quality=75'
  // },
  // {
  //   id: 2,
  //   name: 'Max',
  //   url: 'https://static.independent.co.uk/2021/11/10/08/ESP-CEL_PEOPLE-PAUL_RUUD_73783.jpg?width=990&auto=webp&quality=75&crop=982:726,smart'
  // },
  // {
  //   id: 3,
  //   name: 'Anna',
  //   url: 'https://i.insider.com/5cb8b133b8342c1b45130629?width=1000&format=jpeg&auto=webp'
  // }

  const swiped = (nameToDelete) => {
    console.log('removing' + nameToDelete);
    // setLastDirection(direction);
  }

  const outOfframe = (name) => {
    console.log(name + 'left the screen')
  }
  return (
    <div className="TinderCards">
      <div className='cardContainer'>
        {people.map((person) => 
          <TinderCard
            className = "swipe"
            key={person.id}
            preventSwipe = {["up", "down"]}
            onSwipe = {(dir)=>{
              swiped(person.name)
            }}
            onCardLeftScreen = {(dir)=>{
              outOfframe(person.name)
            }}
          >
            <div style={{backgroundImage: 'url(' + person.imgUrl + ')'}} className="card">
              {person.name}
            </div>
          </TinderCard> 
        )}
      </div>
    </div>
  )
}

export default TinderCards
