const styles = theme => ({
    media: {
        height: 265,
        margin: '1em',
        borderRadius: 5,
    },
    container: {
        marginBottom: 56,
        padding: 0
    },
    title: {
        color: '#4E5356',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '0.875rem'
    },
    btn: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '-webkit-fill-available',
        marginTop: 0,
        marginRight: '1em'
    },
    unit: {
        color: '#C7C7C9',
        fontSize: '0.875rem',
        fontWeight: 'bold'
    },
    buttonMin: {
        color: '#153b50',
        borderRadius: 4,
        minWidth: '40px',
        height: '30px'
    },
    count: {
        border: '0',
        fontWeight: 'bold',
        fontSize: 16,
        minWidth: '40px',
        height: '30px'
    },
    buttonPlus: {
        color: '#ffffff',

        borderRadius: 4,
        minWidth: '40px',
        height: '30px'
    },
    gridItemLeft: {
        display: 'flex', paddingLeft: '1em'

    },
    gridDeskrip: {
        paddingLeft: '1em',
        paddingTop: '2em'

    },
    deskrip: {
        fontSize: '0.875rem',
        color: '#4E5356'
    },
    gridMedia: {
        paddingTop: 50
    },
    gridPrice: {
        display: 'flex', paddingLeft: '1em'
    }
});

export default styles;
