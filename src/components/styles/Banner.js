import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    card: {
        minWidth: 275,
        maxWidth: '80%',
        margin: '10px 0px 10px 10%',
        backgroundColor: '#c9b2ba',
        color: 'white',
        textAlign: 'center',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});