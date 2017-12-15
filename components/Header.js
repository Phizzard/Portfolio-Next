import React, { Component } from 'react';
import { Row, Col, Button, CardGroup, Card, CardBody } from 'reactstrap';
import Menu from './Menu';
import Item from './Menu/Item';
import Title from './Header/Title';
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
import DownloadIcon from 'react-icons/lib/md/file-download';
import {LightenDarkenColor} from '../utils/colour';
const headerHeight = 470;
const headerSegmentHeight = (headerHeight / 3);

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            linkedIn: {
                background: '#3b3b3b',
                cursor: 'default'
            },
            download: {
                background: '#474747',
                cursor: 'default'
            }
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }
    render(){
        return(
            <Row>
                <style jsx>{`
                    .header-headshot {
                        background-image: url("/static/intro-headshot.jpg");
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                        min-height: ${headerHeight}px;
                    }
                `}</style>
                <Col md="3">
                    <img className="w-100 header-headshot" />
                </Col>
                <Col md="9">
                    <Row>
                        <Title
                            key="main-title"
                            h1
                            backgroundColor="#4f4f4f"
                            height={`${headerSegmentHeight}px`}
                            text="Philip Tietjen"
                        />
                        <Item
                            key="download-cv"
                            icon={<DownloadIcon style={{fontSize: '3rem', color: '#a6a6a6'}} />}
                            id="download"
                            path="/"
                            background={this.state.download.background}
                            cursor={this.state.download.cursor}
                            mouseOver={this.handleMouseOver}
                            mouseOut={this.handleMouseOut}
                        />
                        <Title
                            key="main-title"
                            backgroundColor="#3f3f3f"
                            height={`${headerSegmentHeight}px`}
                            text="Web Developer"
                        />
                        <Item
                            key="linkedin"
                            icon={<LinkedInIcon style={{fontSize: '3rem', color: '#a6a6a6'}} />}
                            id="linkedIn"
                            path="https://www.linkedin.com/in/philip-tietjen-3a746851"
                            background={this.state.linkedIn.background}
                            cursor={this.state.linkedIn.cursor}
                            mouseOver={this.handleMouseOver}
                            mouseOut={this.handleMouseOut}
                        />
                        <Col xs="12">
                            <Menu height={headerSegmentHeight} />
                        </Col>
                    </Row>
                </Col>
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
