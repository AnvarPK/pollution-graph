// get array of filtered data by location
export const getPollutionDataFilteredByLocation = (data) => {
    let mulArr = [];

    data.map(({ location }, i) => {
        mulArr[location] = []
    })
    for (let item of data) {
        for (let key in mulArr) {
            if (item.location === key) {
                mulArr[key].push(item);
            }
        }
    }
    return mulArr;
}
