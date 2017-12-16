import {Row, Col} from 'reactstrap';

export default(props)=>(
    <Row>
        <Col xs="4">
            <p style={{fontWeight: 700, textTransform: 'uppercase'}}>{props.attribute}</p>
        </Col>
        <Col xs="8">
            <p>{props.value}</p>
        </Col>
    </Row>
)
