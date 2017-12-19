export default (props) => (
    <ul className="experience-item list-unstyled">
        <li style={{
            fontSize: '11px'
        }}>{props.date}</li>
        <li style={{
            fontFamily: '"Exo 2", sans-serif',
            fontWeight: 600,
            textTransform: 'uppercase'
        }}>{props.title}</li>
        <li style={{
            fontSize: '11px'
        }}>{props.position}</li>
    </ul>
);
