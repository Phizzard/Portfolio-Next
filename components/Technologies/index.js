import {Row, Col, CardDeck} from 'reactstrap';
import SectionTitle from '../SectionTitle';
import Item from './Item';

export default (props) => (
    <div className="technologies page-block">
        <SectionTitle align="center" subTitle="Things I've worked with">Technologies</SectionTitle>
        <Row>
            {
                Object.entries(props.items).reverse().map(([key, item])=>{
                    return (
                        <Col xs="3" style={{padding:"20px"}}>
                            <Item key={key} title={item.title} blurb={item.blurb} id={key} />
                        </Col>
                    );
                })
            }
        </Row>
    </div>
)
