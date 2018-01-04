import {Col} from 'reactstrap';
export default (props) => (
    <Col style={{
        textAlign: 'center'
    }}>
        <img style={{height: '100px'}} src={`/static/${props.id}.png`} />
        <h4>{props.title}</h4>
        <p>blah blah blah blah blah blah blah blah</p>
    </Col>
);
