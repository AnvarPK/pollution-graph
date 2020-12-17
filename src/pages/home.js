import DatePicker from '../component/date-picker';
import GraphContainer from '../component/graph-container';

import {
    Container
} from '@material-ui/core';

export const Home = ({ }) => {
    return (
        <Container maxWidth="lg">
            <DatePicker />
            <GraphContainer />
        </Container>
    )
}

export default Home
