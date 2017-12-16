import {Row, Col} from 'reactstrap';
import Template from '../components/Template.js';
import Header from '../components/Header.js';
import PersonalInfo from '../components/PersonalInfo';
import ShortBio from '../components/ShortBio';
export default () =>(
    <Template>
        <Row>
            <Col md="8">
                <ShortBio />
            </Col>
            <Col md="4" style={{backgroundColor:"#efefef"}}>
                <PersonalInfo />
            </Col>
        </Row>

    </Template>
)
