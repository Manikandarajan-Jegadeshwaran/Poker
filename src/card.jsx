import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Card extends Component{

    onCardClicked(number){
        this.props.cardSelected(number);
    }
    
    render(){
        let pokers = this.props.pokers;
        let randomPoker = pokers[Math.floor(Math.random() * pokers.length)];
        let poker;
        switch(randomPoker){
            case 'clubs':
            poker = (<span>&clubs;</span>);
            break;

            case 'diams':
            poker = (<span>&diams;</span>);
            break;

            case 'hearts':
            poker = (<span>&hearts;</span>);
            break;

            default:
            poker = (<span>&spades;</span>);
            break;
        }
        return(
            <div 
            className={this.props.point === this.props.number ? 'card-cus card-picked' : 'card-cus'} 
            onClick={()=>this.onCardClicked(this.props.number)}>
                <div className='poker-img-l'>
                {
                    poker
                }
                </div>
                <span className='card-data'>{this.props.number}</span>
                <div className='poker-img-r'>
                {
                    poker
                }
                </div>
            </div>
        )
    }
}

export default Card;