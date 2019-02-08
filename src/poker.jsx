import React, { Component } from 'react';
import ReactHintFactory from 'react-hint'
import 'react-hint/css/index.css'
import Card from './card';
import {Teams} from './teams';
import {Story} from './story';
import {Circle} from './dashboardPoint';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './circle.css';

const ReactHint = ReactHintFactory(React)

class Poker extends Component{
    constructor(){
        super();
        this.state = {
            user:'Manikandan',
            cards : [1,2,3,5,8,13,21],
            teams : [
                {
                    name:'Manikandanrajan',
                    estimated : false,
                    point : 0
                },
                {
                    name:'kumar',
                    estimated : false,
                    point : 0
                },
                {
                    name:'manoj',
                    estimated : false,
                    point : 0
                },
                {
                    name:'paul',
                    estimated : false,
                    point : 0
                },
                {
                    name:'emma',
                    estimated : false,
                    point : 0
                }
                ],
            estimated :false,
            point:0,
            pokers:['clubs','diams','hearts','spades'],
            stories: [
                {
                    title : 'Story A - Creating poker application with static SPA',
                    description : 'The requirement should cover initial state management, seperate division for title, description, pokercard, userlist and updated estimation details.'
                }
            ]
        }
    }

    onRenderContent = (target, content) => {
		const {catId} = target.dataset
		const width = 240
		const url = `https://images.pexels.com/photos/${catId}/pexels-photo-${catId}.jpeg?w=${width}`

		return <div className="custom-hint__content">
			<img src={url} width={width} />
			<button ref={(ref) => ref && ref.focus()}
				onClick={() => this.instance.toggleHint()}>Ok</button>
		</div>
    }
    
    handleCardSelected(cardNumber)
    {
        cardNumber>0 && 
        this.setState({estimated:true,point:cardNumber})
    }

    reset(){
        this.setState({estimated:false,point:0});
    }

    render(){
        let getRandomNameByMinimumPt = 'why ' +  this.state.teams[Math.floor(Math.random() * this.state.teams.length)].name + ' ?';
        let getRandomNameByMaximumPt = 'why ' + this.state.teams[Math.floor(Math.random() * this.state.teams.length)].name + ' ?';
        return(
            <div>
                <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                   <b>Let's Poke</b>
                   <b style={{marginLeft:'85%'}}>{this.state.user}</b>
                </nav>
                <div className="container-fluid m-t-5P load-page" style={{marginTop:'5px'}}>
                <div className='row justify-content-center align-content-center'>
                    <div className='col-10' style={{height:'500px'}}>
                        <div className='row'>
                        <Story stories={this.state.stories}/>
                        </div>
                        
                        <div className='row'>
                            <div className='col-4' style={{height:'auto'}}>
                                <div className='row'>
                                    <Teams 
                                    header='Team'
                                    teams={this.state.teams}
                                    user={this.state.user}
                                    estimated = {this.state.estimated}
                                    point = {this.state.point}
                                    />
                                </div>
                                <div className='row' style={{display:this.state.estimated ?'flex':'none'}}>
                                    <div className='col-3' data-rh={getRandomNameByMinimumPt} style={{textAlign:'center'}}>
                                    <Circle
                                    title='min'
                                    point={this.state.point}
                                    min/>
                                    </div>
                                    <div className='col-3' data-rh={getRandomNameByMaximumPt} style={{textAlign:'center'}}>
                                        <Circle 
                                        title='max'
                                        point={this.state.point}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-8' style={{height:'auto'}}>
                            <div className='row'>
                                <div className='col-12'>
                                    {
                                        this.state.cards.map(
                                            (card,index)=> 
                                            <Card 
                                            key={index} 
                                            number={card}
                                            cardSelected={(number)=>this.handleCardSelected(number)}
                                            pokers={this.state.pokers}
                                            point={this.state.point}/>)
                                    }
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <button
                                    className='btn btn-primary' 
                                    style={{float:'left',margin:'1%'}} 
                                    onClick={()=>this.reset()}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <ReactHint autoPosition events delay={100}></ReactHint>
                <ReactHint persist
                attribute="data-custom"
                className="custom-hint"
                events={{click: true}}
                onRenderContent={this.onRenderContent}
                ref={(ref) => this.instance = ref} />
            </div>
        )
    }
}

export default Poker;