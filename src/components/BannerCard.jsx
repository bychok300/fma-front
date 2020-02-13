import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {useStyles} from "./styles/Banner";
import {locale} from "./locale/locale";

export default function BannerCard() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent color="secondary">
                <Typography variant="h5" component="h2">
                    {locale.en.banner.main}
                </Typography>
                <Typography variant="body2" component="p">
                    {locale.en.banner.second}
                </Typography>
            </CardContent>
        </Card>
    );
}