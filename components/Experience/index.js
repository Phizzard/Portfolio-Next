import SectionTitle from '../SectionTitle';
import {Row} from 'reactstrap';
import Item from './Item';

export default (props) => (
    <div className="experience page-block">
        <SectionTitle>Professional Experience</SectionTitle>
        <Row>
            {
                Object.entries(props.experience).reverse().map(([key, item])=>{
                    return <Item key={key} title={item.title} id={key} />
                })
            }
        </Row>
    </div>
);
