import styled from 'styled-components'
import {makeStyles} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';


export const CreatePost = styled.div`
    text-align:center;
    margin-top: 30px;
`;

export const useStyles = makeStyles({
    dialog: {
        minWidth: '500px',
    }
});

export const StyledTextField = styled(TextField)`
    width: 100%;
`;

export const InputTitle = styled(StyledTextField)`
    margin-bottom: 10px;
`;

export const StyledDialog = styled(Dialog)`
    .MuiDialog-paperWidthSm {
        width: 100%;
        height: 500px;
    }
    border-bottom-color: gray;
`;