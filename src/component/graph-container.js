import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Graph from './graph';
import LocationList from './location-list';

//importing selectors to show filtered data
import { getPollutionDataFilteredByLocation } from '../redux/selectors/polution';

const useStyles = makeStyles({
    root: {
        marginTop: 20
    }
});


const GraphContainer = ({ pollutionData }) => {
    const classes = useStyles();

    return <Grid container  className={classes.root}>
        <Grid item xs={12} md={7}>
            <Graph data={pollutionData} />
        </Grid>
        <Grid item xs={12} md={3}>
            <LocationList data={pollutionData} />
        </Grid>
    </Grid>
}


const mapStateToProps = (state) => ({
    pollutionData: getPollutionDataFilteredByLocation(state.pollution)
})

export default connect(mapStateToProps)(GraphContainer);