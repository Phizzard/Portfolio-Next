import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import {Row, Col} from 'reactstrap';
import Template from '../components/Template.js';
import Header from '../components/Header.js';
import PersonalInfo from '../components/PersonalInfo';
import ShortBio from '../components/ShortBio';
import Employment from '../components/Employment';
import Experience from '../components/Experience';

export default class Index extends Component {
    static async getInitialProps({ req }) {
        const res = await Promise.all([
            fetch('https://philip-tietjen.firebaseio.com/content/personal%20info.json'),
            fetch('https://philip-tietjen.firebaseio.com/content/short%20bio.json'),
            fetch('https://philip-tietjen.firebaseio.com/content/employment.json'),
            fetch('https://philip-tietjen.firebaseio.com/content/experience.json')
        ]);
        const   data = await res[0].json(),
                bio = await res[1].json(),
                employment = await res[2].json(),
                experience = await res[3].json()
        return {
            personalInfo: data,
            shortBio: bio,
            employment: employment.items,
            experience: experience.items
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
                <Row>
                    <Col md="4" style={{backgroundColor:"#9b59b6", color: '#FFF'}}>
                        <Employment employment={this.props.employment} />
                    </Col>
                    <Col md="8" style={{backgroundColor:"#3498db", color: '#FFF'}}>
                        <Experience experience={this.props.experience} />
                    </Col>
                </Row>
            </Template>
        );
    }
}
