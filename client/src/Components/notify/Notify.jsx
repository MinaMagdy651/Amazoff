
import "./style.css"
import MuiAlert from '@mui/material/Alert';

function Notify(){
    return <p id="notify"><MuiAlert severity="success">Added To The Cart</MuiAlert></p>;
}

export default Notify;