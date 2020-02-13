import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {CreatePost, InputTitle, StyledDialog, StyledTextField} from "./styles/CreatePost";
import {locale} from "./locale/locale";

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [postBody, setPostBody] = React.useState('');
    const [postTitle, setPostTitle] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        props.onSave({post_body: postBody, post_title: postTitle});
        setOpen(false)
    };

    const onBodyChange = (event) => {
        const {value} = event.target;
        setPostBody(value);
    };

    const onTitleChange = (event) => {
        const {value} = event.target;
        setPostTitle(value)
    };


    return (
        <CreatePost>
            <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
                {locale.en.createPost.createBtn}
            </Button>
            <StyledDialog open={open} onClose={props.onClose} aria-labelledby="form-dialog-title">
                <DialogContent >
                    <InputTitle id="standard-basic" label={locale.en.createPost.modal.titleLabel} variant="outlined" onChange={onTitleChange}/>
                    <StyledTextField
                        id="outlined-multiline-static post_body"
                        label={locale.en.createPost.modal.postLabel}
                        multiline
                        rows="15"
                        variant="outlined"
                        onChange={onBodyChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        {locale.en.createPost.modal.modalCloseBtn}
                    </Button>
                    <Button onClick={handleSave} color="secondary">
                        {locale.en.createPost.modal.modalSaveBtn}
                    </Button>
                </DialogActions>
            </StyledDialog>
        </CreatePost>
    );
}