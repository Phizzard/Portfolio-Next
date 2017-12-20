import { Row, Col} from 'reactstrap';

export default (props) => [
    <Col sm="4">
        <span style={{
            fontWeight: 700,
            textTransform: 'uppercase',
            fontFamily: '"Exo 2", sans-serif'
        }}>{props.attribute}:</span>
    </Col>,
    <Col sm="8">
        <p>{props.value}</p>
    </Col>
];
