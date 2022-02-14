import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },
    paper: {
        padding: theme.spacing(1),

        color: theme.palette.text.secondary,
    },
    container: {
        margin: '60px auto',
        justifyContent: 'center',
        width: 'auto'
    }
}));