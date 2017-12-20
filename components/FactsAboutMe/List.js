import { Row, Col} from 'reactstrap';
import ListItem from './ListItem';

export default (props) => (
    <Row>
        {
            Object.entries(props.items).map(([key, item])=>{
                return <ListItem key={key} attribute={item.attribute} value={item.value} />
            })
        }
    </Row>
);
