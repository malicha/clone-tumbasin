const styles = theme => ({
    media: {
        height: 265,
        margin: '1em',
        borderRadius: 5,
    },
    container: {
        marginTop: 48,
        marginBottom: 56,
        padding: 0
    },
    title: {
        display: 'flex',
    },
    list: {
        margin: '1em',
        marginTop: 20,
        display: 'flex',
        justifyContent: 'space-between'
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: '#F15B5D',
        color: '#ffffff',
        borderRadius: 8,
        justifyContent: 'center',
        width: '-webkit-fill-available',
        marginTop: 8,
        marginRight: 8,
        marginLeft: 8,
        minWidth: '40px',
        fontWeight: 'bold'
    },
});

export default styles;
