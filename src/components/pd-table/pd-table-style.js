const styles = theme => {
    console.log(theme.mixins.toolbar);
    return {
        root: {
            width: '100%',
            marginTop: theme.spacing.unit * 3,
            overflowX: 'auto',
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
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }
};

export default styles;