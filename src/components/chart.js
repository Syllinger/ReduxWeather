import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines svgHeight={150} svgWidth={250} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  )
}
