import { List, ListItem, ListSubheader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    listItem: {
        fontSize: 14
    }
});

const LocationList = ({ data }) => {
    const classes = useStyles();
    return (<div className={classes.demo} >
        <List className={classes.listItem}
            subheader={<ListSubheader component="div" >
                Delhi Locations:
                    </ListSubheader>}
        >
            {Object.keys(data).map((item, i) => {
                return (<ListItem key={item}>
                    {`${i + 1}- ${item}`}
                </ListItem>)
            })}
        </List>
    </div >)
}
export default LocationList;