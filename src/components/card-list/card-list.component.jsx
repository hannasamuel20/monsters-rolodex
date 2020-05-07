import React from 'react';
import './card-lis.style.css';
import {Card} from '../card/card.component';


 export const  CardList=(props)=>{
return <div className='card-list'>       {
   props.monsters.map(function(monster){
       return <Card key={monster.id} monster={monster}/>
    })
  }</div>;
}