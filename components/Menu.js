import React, { Component } from 'react';
import { Row } from 'reactstrap'
import HomeIcon from 'react-icons/lib/md/account-box';
import AboutIcon from 'react-icons/lib/md/info-outline';
import PortfolioIcon from 'react-icons/lib/md/developer-board';
import ContactsIcon from 'react-icons/lib/md/group';
import FeedbackIcon from 'react-icons/lib/md/forum';

import { LightenDarkenColor } from '../utils/colour';
import Item from './Menu/Item';

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            home: {
                background: '#1abc9c'
            },
            about: {
                background: '#3498db'
            },
            portfolio: {
                background: '#9b59b6'
            },
            contacts: {
                background: '#e67e22'
            },
            feedback: {
                background: '#e74c3c'
            },
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }
    render(){
        return(
            <Row style={{height: this.props.height, textAlign: 'center', color: '#FFFFFF'}}>
                <Item
                    key="home"
                    id="home"
                    title="Home"
                    path="/"
                    icon={<HomeIcon style={{fontSize: '3rem'}}/>}
                    background={this.state.home.background}
                    cursor={this.state.home.cursor}
                    mouseOver={this.handleMouseOver}
                    mouseOut={this.handleMouseOut}
                />
                <Item
                    key="about"
                    id="about"
                    title="About"
                    path="/about"
                    icon={<AboutIcon style={{fontSize: '3rem'}}/>}
                    background={this.state.about.background}
                    cursor={this.state.about.cursor}
                    mouseOver={this.handleMouseOver}
                    mouseOut={this.handleMouseOut}
                />
                <Item
                    key="portfolio"
                    id="portfolio"
                    title="Portfolio"
                    path="/portfolio"
                    icon={<PortfolioIcon style={{fontSize: '3rem'}}/>}
                    background={this.state.portfolio.background}
                    cursor={this.state.portfolio.cursor}
                    mouseOver={this.handleMouseOver}
                    mouseOut={this.handleMouseOut}
                />
                <Item
                    key="feedback"
                    id="feedback"
                    title="Feedback"
                    path="/feedback"
                    icon={<FeedbackIcon style={{fontSize: '3rem'}}/>}
                    background={this.state.feedback.background}
                    cursor={this.state.feedback.cursor}
                    mouseOver={this.handleMouseOver}
                    mouseOut={this.handleMouseOut}
                />
            </Row>
        );
    }
    handleMouseOver(id){
        if(this.state[id]){
            this.setState({
                [id] : {
                    background: LightenDarkenColor(this.state[id].background, -10),
                    cursor: 'pointer'
                }
            })
        }

    }
    handleMouseOut(id){
        if(this.state[id]){
            this.setState({
                [id] : {
                    background: LightenDarkenColor(this.state[id].background, 10),
                    cursor: 'default'
                }
            })
        }
    }
}
