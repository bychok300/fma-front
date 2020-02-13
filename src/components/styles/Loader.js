import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        marginTop: '20px',
        justifyContent: 'center',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));