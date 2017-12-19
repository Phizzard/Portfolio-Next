import SectionTitle from '../SectionTitle';
import Item from './Item';

export default (props) => (
    <div className="employment page-block">
        <SectionTitle>Employment</SectionTitle>
        {
            Object.entries(props.employment).reverse().map(([key, item])=>{
                return <Item date={item.date} title={item.title} position={item.position} />
            })
        }
    </div>
);
