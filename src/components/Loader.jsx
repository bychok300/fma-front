import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useStyles} from "./styles/Loader";

export default function CircularIndeterminate() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress color="secondary" />
        </div>
    );
}