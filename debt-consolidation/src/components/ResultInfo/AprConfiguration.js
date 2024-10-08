import React from 'react'
import {CustomSlider} from '../common/CustomSlider'

export const AprConfiguration = ({apr, setApr}) => {
  //component to render the APR slider and desired APR value
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <text className="text-[12px] font-semibold text-slate-900">
          DESIRED APR
        </text>
        <text className="text-[24px] font-semibold text-[#06A9DB]">{parseFloat(apr).toFixed(2)}%</text>
      </div>
      <CustomSlider min={4} max={36} value={apr} unit="%" startValue={8} set={setApr} />
    </div>
  );
}
