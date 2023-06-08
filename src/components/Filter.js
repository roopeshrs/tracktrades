import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckIcon from '@mui/icons-material/Check';

const Filter = ({isFilterOpen, setIsFilterOpen}) => {
  return (
    <>
      {
        isFilterOpen && (
          <div className='absolute top-[120%] right-0 min-w-[280px] bg-white shadow-lg z-10'>
            <div className='flex flex-col gap-4 p-4'>
              <div className='flex items-center justify-between'>
                <h2 className='font-semibold'>Filters</h2>
                <CloseIcon onClick={() => setIsFilterOpen(false)} className='cursor-pointer'/>
              </div>
              <div>
                <p className='mb-1'>LTP range</p>
                <div className='flex items-center justify-between gap-2'>
                  <input className='border border-gray-400 py-2 px-1 w-32' value={'Minimum LTP'} onChange={()=>{}}/>
                  <div>-</div>
                  <input className='border border-gray-400 py-2 px-1 w-32' value={'Maximum LTP'} onChange={()=>{}}/>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <p>LTP change % by</p>
                <div className='relative'>
                  <input className='border border-gray-400 py-2 px-1 w-32' value={'Today Open'} onChange={()=>{}}/>
                  <ArrowDropDownIcon className='absolute top-1/2 -translate-y-1/2 right-0'/>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <p>Specific strike</p>
                <div>
                  <input className='border border-gray-400 py-2 px-1 w-32' />
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <p>Display</p>
                <div className='flex w-32 items-center justify-between'>
                  <div className='flex items-center gap-1'>
                    <div className='relative flex items-center'>
                      <input type='checkbox'/>
                      <div className='absolute bg-purple-900 top-0 bottom-0 right-0 left-0 pointer-events-none flex items-center justify-center'>
                        <CheckIcon style={{width: '100%', height: '100%', color: '#fff', fontWeight: 'bold'}}/>
                      </div>
                    </div>
                    Calls
                  </div>
                  <div className='flex items-center gap-1'>
                    <div className='relative flex items-center'>
                      <input type='checkbox'/>
                      <div className='absolute bg-purple-900 top-0 bottom-0 right-0 left-0 pointer-events-none flex items-center justify-center'>
                        <CheckIcon style={{width: '100%', height: '100%', color: '#fff', fontWeight: 'bold'}}/>
                      </div>
                    </div>
                    Puts
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-end gap-4 p-4 border border-t-gray-300'>
              <button onClick={() => setIsFilterOpen(false)} className='text-blue-600 bg-white px-4 py-1 text-sm border border-blue-600 cursor-pointer'>Reset</button>
              <button onClick={() => setIsFilterOpen(false)} className='bg-blue-600 text-white px-4 py-1 text-sm border border-blue-600 cursor-pointer'>Apply</button>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Filter