import {createMuiTheme, makeStyles} from "@material-ui/core";

export const outerTheme = createMuiTheme({
    palette: {
        primary: {main: '#fce4ec'},
        secondary: {main: '#c51162'}
    },
    header: {
        backgroundColor: 'fce4ec',
    },
});

export const useStyles = makeStyles ({
    header: {
        backgroundColor: '#fce4ec',
    }
});

