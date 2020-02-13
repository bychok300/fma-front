import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 200,
        maxWidth: '60%',
        width: '100%',
        margin: '2% 20% 2% 20%',
        position: 'relative',
        backgroundColor: '#fde1df',
        color: 'gray',
    },
    noWrap: {
        // overflow: 'hidden',
        // textOverflow: 'ellipsis',
        // whiteSpace: 'nowrap',
        wordBreak: 'break-word',
    },
    breakWords: {
        wordBreak: 'break-word',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    postRate : {
        '&$postRate': {
            justifyContent: 'flex-end'
        },
    },
    hide: {
        display: 'none'
    },
    redColor: {
      backgroundColor: 'red'
    }
}));
