import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadPollutionDataByDate } from '../redux/actions/pollution';
import moment from 'moment';


import { makeStyles } from '@material-ui/core/styles';
import {
    TextField
} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        margin: theme.spacing(1),
        width: 200,
    },
}));


const DatePicker = ({ dispatch }) => {

    let _today = moment().format('YYYY-MM-DD');
    let _nextDay = moment(_today).add(1, "days").format('YYYY-MM-DD');
    const [selectedDate, setSelectedDate] = useState({ date_from: _today, date_to: _nextDay });
    const classes = useStyles();

    useEffect(() => {
        dispatch(loadPollutionDataByDate(selectedDate));
    }, [selectedDate]);

    //date picker date chage handler
    //to load pollution data by selected date
    const handleDateChange = (event) => {
        let selected = event.target.value;
        let dateObj = {
            date_from: selected,
            date_to: moment(selected).add(1, "days").format('YYYY-MM-DD')
        }
        setSelectedDate(dateObj);
    };

    return <form className={classes.container} noValidate>
        <TextField
            id="date"
            label="Select Date"
            type="date"
            defaultValue={selectedDate.date_from}
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
            onChange={handleDateChange}
        />
    </form>

}

export default connect()(DatePicker)