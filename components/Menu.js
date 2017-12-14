import Link from 'next/link';
import { Row, Col } from 'reactstrap'

export default (props) => (
    <Row style={{height: props.height}}>
        <Link href="/">
            <Col style={{backgroundColor: '#1abc9c'}}>
                Home
            </Col>
        </Link>
        <Link href="/about">
            <Col style={{backgroundColor: '#3498db'}}>
                About
            </Col>
        </Link>
        <Link href="/portfolio">
            <Col style={{backgroundColor: '#9b59b6'}}>
                Portfolio
            </Col>
        </Link>
        <Link href="/contacts">
            <Col style={{backgroundColor: '#e67e22'}}>
                Contacts
            </Col>
        </Link>
        <Link href="/feedback">
            <Col style={{backgroundColor: '#e74c3c'}}>
                Feedback
            </Col>
        </Link>
    </Row>
)
