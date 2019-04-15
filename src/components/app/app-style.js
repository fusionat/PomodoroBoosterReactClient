const styles = theme => ({
    root: {
        display: 'flex',
        'flex-wrap': 'wrap',
        flexDirection: 'column',
        maxWidth: '500px',
        minWidth: '400px',
    },
    margin:{
        margin: '5px'
    },
    main: theme.mixins.toolbar,
});
export default styles;