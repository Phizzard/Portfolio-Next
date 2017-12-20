export default (props)=>[
    <h3 style={{
        fontWeight: 400,
        paddingBottom: props.subTitle ? '0px' : '40px',
        textAlign: props.align || 'left'
    }}>{props.children}</h3>,
    <h4 style={{
        fontSize: '16px',
        textAlign: props.align || 'left',
        paddingBottom: props.subTitle ? '40px': '0px'
    }}>
        {props.subTitle}
    </h4>
]
