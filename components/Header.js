import { Row, Col, Button, CardGroup, Card, CardBody } from 'reactstrap';
import Menu from './Menu';
const headerHeight = 470;
const headerSegmentHeight = (headerHeight / 3);

export default () => (
    <Row>
        <style jsx>{`
            .header-headshot {
                background-image: url("/static/intro-headshot.jpg");
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                min-height: ${headerHeight}px;
            }
            .header-title {
                background-color: #4f4f4f;
                color: #ffffff;
                height: ${headerSegmentHeight}px;
            }
            .header-title-action{
                background-color: #474747;
                color: #a6a6a6;
                height: ${headerSegmentHeight}px;
            }
            .header-subtitle{
                background-color: #3f3f3f;
                color: #ffffff;
                height: ${headerSegmentHeight}px;
            }
            .header-subtitle-action{
                background-color: #3b3b3b;
                color: #a6a6a6;
                height: ${headerSegmentHeight}px;
            }
        `}</style>
        <Col sm="3">
            <img className="w-100 header-headshot" />
        </Col>
        <Col sm="9">
            <Row>
                <Col xs="10">
                    <div className="header-title">
                        <h1>Philip Tietjen</h1>
                    </div>
                </Col>
                <Col xs="2">
                    <div className="header-title-action">
                        <Button outline color="primary">Download</Button>
                    </div>
                </Col>
                <Col xs="10">
                    <div className="header-subtitle">
                        <h2>Web Developer</h2>
                    </div>
                </Col>
                <Col xs="2">
                    <div className="header-subtitle-action">
                        <Button outline color="primary">Contact</Button>
                    </div>
                </Col>
                <Col xs="12">
                    <Menu height={headerSegmentHeight} />
                </Col>
            </Row>
        </Col>
    </Row>
)
