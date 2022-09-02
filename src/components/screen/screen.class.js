import { create } from '../../helper';
import { Component } from '../component';
import { Marble } from '../marble'

class Screen extends Component{
  constructor(heading, marbles, infoblock, computer){
    this.marbles=marbles.map(marble => {
      const itemMarble = new Marble(marble);
      return itemMarble.tag;
    })
    this.tag=create('div', 'app-slider-screen', [...this.marbles, this.infoblock, this.computer]);
  }
  changeState(){
    
  }
}


export { Screen };