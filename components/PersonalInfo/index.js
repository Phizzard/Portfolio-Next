import SectionTitle from '../SectionTitle';
import Item from './Item';
export default (props) => (
    <div className="page-block personal-info">
        <SectionTitle>Personal Info</SectionTitle>
        <div className="w-100">
            <Item attribute="Name:" value="Philip A. Tietjen" />
            <Item attribute="Birth Date:" value="31/07/1994" />
            <Item attribute="Phone:" value="905 251 4236" />
            <Item attribute="Email:" value="tietjen.philip@gmail.com" />
        </div>
    </div>
)
