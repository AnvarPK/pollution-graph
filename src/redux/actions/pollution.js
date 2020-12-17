export const SET_POLLUTION_DATA = "SET_POLLUTION_DATA";

//save loaded date to store
export const setPollutionData = (data) => ({
    type: SET_POLLUTION_DATA,
    payload: data
});

//to load pollution data by date
//dispatched from componets/date-picker.js
export const loadPollutionDataByDate = ({ date_from, date_to }) => {
    const url = `https://api.openaq.org/v1/measurements?city=Delhi&date_from=${date_from}&date_to=${date_to}`;
    return (dispatch) => {
        return fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                //default data -  date : { utc:"", local:""}, parameter, value,unit, location,country, city,coordinates, sourceName
                data = data.results.map(({ date: { utc: date }, location, value }, i) => {
                    return { date, location, value };
                });
                dispatch(setPollutionData(data));
            });
    };
}