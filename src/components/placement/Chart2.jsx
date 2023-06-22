import { ResponsiveLine } from '@nivo/line'
import { useState } from 'react'
import { useWindowSize } from 'usehooks-ts'

const data = [
    {
      "id": "Total No. of Students Admitted",
      "color": "hsl(230, 70%, 50%)",
      "data": [
        {
          "x": "2020-21",
          "y": 794
        },
        {
          "x": "2021-22",
          "y": 804
        },
        {
          "x": "2022-23",
          "y": 852
        },
      ]
    },
    {
      "id": "Students Intreseted in Placement",
      "color": "hsl(151, 70%, 50%)",
      "data": [
        {
          "x": "2020-21",
          "y": 537
        },
        {
          "x": "2021-22",
          "y": 512
        },
        {
          "x": "2022-23",
          "y": 541
        },
      ]
    },
    {
      "id": "Total no of Students Placed",
      "color": "hsl(360, 40%, 50%)",
      "data": [
        {
          "x": "2020-21",
          "y": 440
        },
        {
          "x": "2021-22",
          "y": 426
        },
        {
          "x": "2022-23",
          "y": 374
        },
      ]
    },
    
  ]
  
const Chart2 = ({  /* see data tab */ }) => {
    const { width } = useWindowSize()
    const [direction, _] =  useState(width > 768 ? 'row' : 'column')
    // const direction = 
    return (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="natural"

        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Academic Years',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Number Of Students Placed',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        enableGridY={false}
        colors={{ scheme: 'accent' }}
        lineWidth={1}
        pointSize={7}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderColor={{ from: 'color', modifiers: [] }}
        pointLabelYOffset={-14}
        enableSlices="x"
        className="overflow-visible"
        enableArea={true}
        areaBaselineValue={374}
        // areaBlendMode="normal"
        areaOpacity={0.25}
        useMesh={true}
        legends={[
            {
                anchor: 'top',
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: -50,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 200,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)}

export default Chart2;
