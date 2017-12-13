import Link from 'next/link';
import { Row, Col } from 'reactstrap'

export default () => (
    <Row>
        <Col>
            <Link href="/">Home</Link>
        </Col>
        <Col>
            <Link href="/about">About</Link>
        </Col>
    </Row>
)
