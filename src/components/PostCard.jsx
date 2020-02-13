import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CircularIndeterminate from "./Loader";
import {useStyles} from "./styles/PostCard";
import {MAX_CHAR_LENGTH, MIN_CHAR_LENGTH} from "../config/constants";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState({});
    const [keyOpen, setOpen] = React.useState([]);

    const onRateUp = (key, value) => {
        localStorage.setItem(key, value)
    };

    const onRateDown = (key, value) => {
        localStorage.setItem(key, value)
    };

    const handleExpandClick = (key) => {
        setOpen(prevState => {
            const newExpanded = !prevState.includes(key);
            const idKeyOpenSet = new Set([...prevState, key]);
            if (!newExpanded) {
                idKeyOpenSet.delete(key);
            }
            setExpanded((prevState) => ({...prevState, [key]: newExpanded}));
            return [...idKeyOpenSet]
        })
    };

    if (props.posts.length === 0) {
        return <CircularIndeterminate/>
    }

    return props.posts.map((value) =>
        <Card color="secondary" className={classes.card} key={value.id}>
            <CardHeader
                title={value.post_title}
            />
            <CardContent>
                <Typography variant="body1" color="textSecondary" component="p" className={classes.noWrap}>
                    {value.post_body.length >= MIN_CHAR_LENGTH ?
                        value.post_body.substring(0, MIN_CHAR_LENGTH) + "..." :
                        value.post_body
                    }
                </Typography>
            </CardContent>
            <CardActions disableSpacing >
                {/*TODO highlight if already rated and send data to backend*/}
                {value.post_body.length < MAX_CHAR_LENGTH &&
                    <IconButton
                        className="rateDown"
                        onClick={() => onRateUp(value.id, value.likes + 1)}
                        aria-expanded={true}
                    >
                        <ThumbUpAltIcon className={classes.backgroundColor}/>
                    </IconButton>
                }
                {value.post_body.length < MAX_CHAR_LENGTH && value.likes}
            </CardActions>
            {value.post_body.length > MAX_CHAR_LENGTH &&
                <CardActions disableSpacing>
                    <IconButton
                        className="rateDown"
                        onClick={() => onRateUp(value.id, value.likes + 1)}
                        aria-expanded={true}
                    >
                        <ThumbUpAltIcon/>
                    </IconButton>
                    {value.likes}

                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded[value.id],
                        })}
                        onClick={() => handleExpandClick(value.id)}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </IconButton>
                </CardActions>
            }
            <Collapse in={expanded[value.id] && keyOpen.includes(value.id)} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph className={classes.breakWords}>
                        {value.post_body}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded[value.id],
                        })}
                        onClick={() => handleExpandClick(value.id)}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </IconButton>
                </CardActions>
            </Collapse>
        </Card>
    )
}