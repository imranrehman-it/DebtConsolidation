import React from 'react'
import {CustomSlider} from '../common/CustomSlider'

export const AprConfiguration = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <text className="text-[12px] font-semibold text-slate-900">
          DESIRED APR
        </text>
        <text className="text-[24px] font-semibold text-[#06A9DB]">8.00%</text>
      </div>
      <CustomSlider min={8} max={36} value={8} unit="%" startValue={8} set={() => {}} />
    </div>
  );
}
