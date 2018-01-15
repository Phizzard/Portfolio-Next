import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

export default (props) => (
    <Card style={{
        boxShadow: "5px 2px 10px 1px rgba(0,0,0,0.1)",
        backgroundColor: "transparent",
        border: "none",
        borderRadius: "0px"
    }}>
        <CardImg top src={`/static/${props.id}.png`} />
        <CardBody style={{textAlign: "center"}}>
            <CardTitle>{props.title}</CardTitle>
            <CardText>{props.blurb}</CardText>
        </CardBody>
    </Card>
)
