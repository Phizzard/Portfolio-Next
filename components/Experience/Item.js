import {Col} from 'reactstrap';
export default (props) => (
    <Col style={{
        textAlign: 'center'
    }}>
        <h4>{props.title}</h4>
        <img style={{height: '100px'}} src={`/static/${props.id}.png`} />
    </Col>
);
