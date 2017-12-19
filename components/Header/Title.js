import {Col} from 'reactstrap';

export default (props) =>(
    <Col xs="10" style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: props.backgroundColor,
        color: '#FFF',
        height: props.height
    }}>
        <div>
            {
                props.h1 ? (
                    <h1 style={{paddingLeft: '30px', textTransform:'capitalize'}}>{props.text}</h1>
                ):(
                    <h2 style={{paddingLeft: '30px', textTransform:'capitalize'}}>{props.text}</h2>
                )
            }
        </div>
    </Col>
);
