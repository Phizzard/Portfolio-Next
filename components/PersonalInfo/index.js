import SectionTitle from '../SectionTitle';
import Item from './Item';
export default (props) => (
    <div className="page-block personal-info">
        <SectionTitle>{props.title}</SectionTitle>
        <div className="w-100">
            <Item attribute="Name:" value={props.name} />
            <Item attribute="Birth Date:" value={props.birthDate} />
            <Item attribute="Phone:" value={props.phone} />
            <Item attribute="Email:" value={props.email} />
        </div>
    </div>
)
