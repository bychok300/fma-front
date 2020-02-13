import React from 'react';
import RecipeReviewCard from './PostCard'
import FormDialog from "./TextModal";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import {ThemeProvider} from '@material-ui/core/styles';
import {outerTheme} from "./styles/ThemeProviderStyles";
import BannerCard from "./BannerCard";
import AppBar from "@material-ui/core/AppBar";

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <ThemeProvider theme={outerTheme}>
                    <AppBar position="static" color="primary">
                        <Toolbar>
                            <Typography variant="h6">
                                FMA | FUCK THEM ALL
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <BannerCard/>
                    <FormDialog {...{onSave: this.props.onSave}} />
                    <RecipeReviewCard posts={this.props.posts} />
                </ThemeProvider>
            </div>
        );
    };
}
