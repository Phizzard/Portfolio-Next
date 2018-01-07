import {Row, Col, CardColumns} from 'reactstrap';
import SectionTitle from '../SectionTitle';
import Item from './Item';

export default (props) => (
    <div className="technologies page-block">
        <SectionTitle align="center" subTitle="Things I've worked with">Technologies</SectionTitle>
        <CardColumns>
            {
                Object.entries(props.items).map(([key, item])=>{
                    return (
                            <Item key={key} title={item.title} blurb={item.blurb} id={key} />
                    );
                })
            }
        </CardColumns>
    </div>
)
