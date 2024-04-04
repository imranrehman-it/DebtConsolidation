import React from 'react'
import {CustomSlider} from '../common/CustomSlider'

export const TermConfiguration = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <text className="text-[12px] font-semibold text-slate-900">
          DESIRED LOAN TERM
        </text>
        <text className="text-[24px] font-semibold text-[#06A9DB]">
          24 months
        </text>
      </div>
      <CustomSlider min={12} max={64} value={24} unit=" mo" startValue={24} set={() => {}} />
    </div>
  );
}
