import SectionTitle from '../SectionTitle';
import Lorem from 'react-lorem-component'
export default (props)=>(
    <div className="page-block short-bio">
        <SectionTitle>{props.title}</SectionTitle>
        <h4>{props.subTitle}</h4>
        <p>{props.content}</p>
    </div>
)
