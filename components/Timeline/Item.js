import {Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';

export default (props) => (
    <Card style={{marginTop: '1rem', border: 'none'}}>
        <Row>
            <Col md="2">
                <CardImg src={`/static/${props.id}.png`} />
            </Col>
            <Col md="10">
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.position}</CardSubtitle>
                    <CardText>{props.summary}</CardText>
                </CardBody>
            </Col>
        </Row>
    </Card>
)
