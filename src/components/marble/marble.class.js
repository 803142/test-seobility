import "./marbles.scss";
import { create } from '../../helper';
import { Component } from '../component';

class Marble extends Component{
  constructor(bgcolor,size,positionX,positionY){
    this.tag=create('div', 'app-marble');
    this.tag.style.background = bgcolor;
    this.tag.style.width = size;
    this.tag.style.heigth = size;
    this.setPosition(positionX, positionY);
    this.startPositionX = positionX;
    this.startPositionY = positionY
  }
  followPointer(x,y){
    this.setPosition(x,y);
  }
  setPosition(newpositionX,newpositionY){
    this.tag.style.left = newpositionX;
    this.tag.style.top = newpositionY;
  }
}

export { Marbles };