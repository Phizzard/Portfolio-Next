import Link from 'next/link';
import {Col} from 'reactstrap';
export default (props)=> (
    <Link href={props.path}>
        <Col
            id={props.id}
            style={{
                backgroundColor: props.background,
                cursor: props.cursor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            onMouseOver={()=>{props.mouseOver(props.id)}}
            onMouseOut={()=>{props.mouseOut(props.id)}}
        >
            <div>
                {props.icon}
                <h4>{props.title}</h4>
            </div>
        </Col>
    </Link>
);
