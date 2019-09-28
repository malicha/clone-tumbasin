const styles = theme => ({
    bottomBox: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        bottom: 0,
        marginTop: 50,
        borderTop: '1px solid #DFE4E9',
        position: 'fixed',
        maxWidth: 448,
    },
    gridItemRight: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    gridItemTop: {
        marginTop: 15,
        paddingRight: 10,
        paddingLeft: 10
    },
    total: {
        color: '#4E5356',
        fontSize: '0.875rem',
        lineHeight: '15px',
        fontFamily: 'Montserrat, sans-serif',
    },
    price: {
        color: '#14181B',
        fontSize: '0.875rem',
        fontWeight: 'bold'
    },
    icon: {
        color: '#9FA3A6',
    },
    info: {
        color: '#9FA3A6',
        fontSize: '11px'
    }
});

export default styles