import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import {Row, Col} from 'reactstrap';
import Template from '../components/Template.js';
import Header from '../components/Header.js';
import PersonalInfo from '../components/PersonalInfo';
import ShortBio from '../components/ShortBio';

export default class Index extends Component {
    static async getInitialProps({ req }) {
        const res = await Promise.all([
            fetch('https://philip-tietjen.firebaseio.com/content/personal%20info.json'),
            fetch('https://philip-tietjen.firebaseio.com/content/short%20bio.json')
        ]);
        const   data = await res[0].json(),
                bio = await res[1].json()
        return {
            personalInfo: data,
            shortBio: bio
        }
    }
    render(){
        return(
            <Template>
                <Row>
                    <Col md="8">
                        <ShortBio
                            title={this.props.shortBio.title}
                            subTitle={this.props.shortBio.subtitle}
                            content={this.props.shortBio.content}
                        />
                    </Col>
                    <Col md="4" style={{backgroundColor:"#efefef"}}>
                        <PersonalInfo
                            title={this.props.personalInfo.title}
                            name={this.props.personalInfo.fullname}
                            birthDate={this.props.personalInfo.birthdate}
                            phone={this.props.personalInfo.phone}
                            email={this.props.personalInfo.email}
                        />
                    </Col>
                </Row>

            </Template>
        );
    }
}
