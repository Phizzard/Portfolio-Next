import {Row, Col} from 'reactstrap';
import SectionTitle from '../SectionTitle';
import List from './List';

export default (props) => (
    <div className="facts-about-me page-block">
        <SectionTitle align="center" subTitle="Just a few things about me">Facts About Me</SectionTitle>
        <Row>
            <Col md="6" sm="12">
                <List items={{
                    status: props.items.status,
                    educationLevel: props.items['education-level'],
                    specialty: props.items.specialty
                }} />
            </Col>
            <Col md="6" sm="12">
                <List items={{
                    languages: props.items.languages,
                    position: props.items.position,
                    hobbies: props.items.hobbies
                }} />
            </Col>
        </Row>

    </div>
)
