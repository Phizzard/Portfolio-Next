import {Row, Col} from 'reactstrap';
import SectionTitle from '../SectionTitle';
import Item from './Item';

export default (props) => (
    <div className="timeline page-block">
        <SectionTitle align="center" subTitle="Places I've worked">Professional Timeline</SectionTitle>
        <Row>
            {
                Object.entries(props.items).map(([key, item])=>{
                    return (
                            <Col key={key} xs="12">
                                <Item title={item.title} position={item.position} summary={item.summary} id={key} />
                            </Col>
                    );
                })
            }
        </Row>
    </div>
)
