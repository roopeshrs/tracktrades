import {useState} from 'react'
import { TextField } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import Filter from './Filter';

const SecondaryHeader = ({setIsBasketOpen}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className='flex items-center gap-4 m-12'>
        <TextField 
            label="Scrip" 
            defaultValue={'NIFTY'} 
            inputProps={{ style: { padding: `8px 4px`, width: `150px` } }} 
            InputProps={{ style: { borderRadius: `0px`, paddingLeft: `4px` } }} 
            InputLabelProps={{ shrink: true }}
        />
        <TextField 
            label="Exp" 
            defaultValue={'18 May 2023'} 
            inputProps={{ style: { padding: `8px 4px`, width: `150px` } }} 
            InputProps={{ style: { borderRadius: `0px`, paddingLeft: `4px` } }}
            InputLabelProps={{ shrink: true }}
        />
        <div className='flex items-center justify-between flex-1'>
            <div className='flex gap-5 items-center'>
                <div className='flex flex-col'>
                    <div className='flex justify-start'>
                        <p className='text-xs'>Spot</p>
                    </div>
                    <div className='flex items-baseline gap-2'>
                        <p className='text-xl font-semibold'>18,245.32</p>
                        <span className='text-xs text-green-600'>0.35%</span>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex justify-start'>
                        <p className='text-xs'>Fut</p>
                    </div>
                    <div className='flex items-baseline gap-2'>
                        <p className='text-xl font-semibold'>18,251.1</p>
                        <span className='text-xs text-green-600'>0.35%</span>
                    </div>
                </div>
            </div>
            <div className='flex gap-8 items-center'>
                <div>
                    <p className='text-xs'>Max pain</p>
                    <p className='font-semibold'>18,200</p>
                </div>
                <div>
                    <p className='text-xs'>PCR</p>
                    <p className='font-semibold'>0.92</p>
                </div>
                <div>
                    <div className='flex items-center relative'>
                        <p className='text-xs'>Support 1</p> 
                        <div className='flex flex-col absolute -right-4'>
                            <KeyboardArrowUpIcon style={{height: '14px', width: '14px'}} />
                            <KeyboardArrowDownIcon style={{height: '14px', width: '14px'}} />
                        </div>
                    </div>
                    <p className='font-semibold'>18,100</p>
                </div>
                <div>
                    <div className='flex items-center relative'>
                        <p className='text-xs'>Resistance 1</p> 
                        <div className='flex flex-col absolute -right-4'>
                            <KeyboardArrowUpIcon style={{height: '14px', width: '14px'}} />
                            <KeyboardArrowDownIcon style={{height: '14px', width: '14px'}} />
                        </div>
                    </div>
                    <p className='font-semibold'>18,500</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex flex-col relative'>
                    <div className='flex items-center gap-2'>
                        <FilterListIcon onClick={() => setIsFilterOpen(true)}  className='cursor-pointer'/>
                        <p onClick={() => setIsFilterOpen(true)} className='cursor-pointer'>Filters</p>
                    </div>
                    <Filter isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} />
                </div>
                <button onClick={() => setIsBasketOpen(true)} className='bg-blue-600 text-white px-8 py-2 relative'>
                    Basket
                    <span className='bg-yellow-400 text-black font-semibold w-5 h-5 rounded-full flex items-center justify-center absolute top-0 right-0 translate-x-1/2 -translate-y-1/2'>3</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default SecondaryHeader