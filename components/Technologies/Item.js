import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

export default (props) => (
    <Card>
        <CardImg top src={`/static/${props.id}.png`} />
        <CardBody style={{textAlign: "center"}}>
            <CardTitle>{props.title}</CardTitle>
            <CardText>{props.blurb}</CardText>
        </CardBody>
    </Card>
)
