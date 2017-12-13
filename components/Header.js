import { Row, Col, Button } from 'reactstrap';
import Menu from './Menu';

export default () => (
    <Row>
        <Col xs="3">
            <img className="w-100" src="/static/intro-headshot.jpg" />
        </Col>
        <Col xs="9">
            <Row>
                <Col xs="10">
                    <h1>Philip Tietjen</h1>
                </Col>
                <Col xs="2">
                    <Button outline color="primary">Download</Button>
                </Col>
                <Col xs="10">
                    <h2>Web Developer</h2>
                </Col>
                <Col xs="2">
                    <Button outline color="primary">Contact</Button>
                </Col>
                <Col xs="12">
                    <Menu />
                </Col>
            </Row>
        </Col>
    </Row>
)
