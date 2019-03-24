const styles = theme => {
    console.log(theme.mixins.toolbar);
    return {
        root: {
            flexGrow: 1
        },
        table: {
            minWidth: 700,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing.unit * 3,
        },
        toolbar: theme.mixins.toolbar,
        row: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.background.default,
            },
        },
        paper: {
            padding: theme.spacing.unit * 2,
            textAlign: 'center',
            color: theme.palette.text.secondary,
            overflow: 'auto'
        }
    }
};

export default styles;