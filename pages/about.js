import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';

import { Row, Col } from 'reactstrap';
import Template from '../components/Template';
import Header from '../components/Header';
import Technologies from '../components/Technologies';
import FactsAboutMe from '../components/FactsAboutMe';
import SectionTitle from '../components/SectionTitle';
import Lorem from 'react-lorem-component';

export default class About extends Component{
    static async getInitialProps({ req }) {
        const res = await fetch('https://philip-tietjen.firebaseio.com/content/facts.json')
        const facts = await res.json()
        return {
            facts: facts.items
        }
    }
    render(){
        return(
            <Template>
                <Row>
                    <Col style={{backgroundColor:"#3498db", color: '#FFF'}}>
                        <div className="page-block">
                            <h2 style={{
                                fontSize: '48px',
                                textTransform: 'capitalize',
                                fontWeight: 700
                            }}>Resume</h2>
                            <Lorem count="1" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FactsAboutMe items={this.props.facts} />
                    </Col>
                </Row>
                <Row>
                    <Col style={{backgroundColor:"#f7f7f7"}}>
                        <Technologies />
                    </Col>
                </Row>
            </Template>
        );
    }
}
