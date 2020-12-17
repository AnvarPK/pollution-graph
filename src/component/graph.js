
import { Card, CardContent } from '@material-ui/core';
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTheme,
    VictoryStack
} from 'victory';

const Graph = ({ data }) => <Card  >
    <CardContent>
        <VictoryChart
            domainPadding={20}
            theme={VictoryTheme.material}
        >
            <VictoryAxis
                tickFormat={(x, i) => (i + 1)}
                style={{ tickLabels: {fontSize:8 },axisLabel: { fill: "#5462c7"  ,fontSize:8, padding: 30 } }}
                label="Locations ( See the Location list )"
            />
            <VictoryAxis
                dependentAxis
                style={{ tickLabels: { fontSize:8 },axisLabel: { fill: "#5462c7"  ,fontSize:8, padding: 35} }}
                label="Pollution messurement in µg/m3"
            />
            <VictoryStack
                colorScale={"warm"}
            >
                {Object.keys(data).map((item, i) => {
                    return (<VictoryBar
                        data={data[item]}
                        key={item}
                        x="location"
                        y="value"

                    />)
                })}
            </VictoryStack>
        </VictoryChart>
    </CardContent>
</Card>

export default Graph;