import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { BASKET_DATA } from '../utils/constants';

const Basket = ({isBasketOpen, setIsBasketOpen}) => {
  return (
    <>
      {isBasketOpen && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] shadow-lg bg-white">
          <div className="flex bg-blue-600 justify-between items-center px-5 py-3 text-white text-sm">
            <div>
              <p>Max profit</p>
              <p>24,000/-</p>
            </div>
            <div>
              <p>Max loss</p>
              <p>Unlimited</p>
            </div>
            <div>
              <p>Risk:Reward</p>
              <p>NA</p>
            </div>
            <div>
              <p>Probability</p>
              <p>32%</p>
            </div>
            <div>
              <p>Breakeven</p>
              <p>{`> 38124.2`}</p>
            </div>
          </div>

          <div className='bg-white mb-[120px]'>
            <table className='w-full'>
              <thead>
                  <tr>
                      <th className='text-left font-light text-sm py-1 px-5'>Instrument</th>
                      <th className='text-left font-light text-sm py-1 px-2'>B/S</th>
                      <th className='text-left font-light text-sm py-1 px-2'>Type</th>
                      <th className='text-left font-light text-sm py-1 px-2'>Qty</th>
                      <th className='text-left font-light text-sm py-1 px-2'>Price</th>
                      <th className='text-left font-light text-sm py-1 px-2'>Trigger</th>
                      <th></th>
                      <th></th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                  {BASKET_DATA.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 && 'bg-gray-100'}>
                      <td>
                        <div className='py-1 px-5 text-xs font-semibold'>{item.instrument}</div>
                      </td>
                      <td>
                        <div className='py-1 px-2 text-xs font-semibold'>
                          <div className={`${item.bs === 'B' ? 'bg-blue-300' : 'bg-pink-300'} flex items-center justify-center w-5`}>{item.bs}</div>
                        </div>
                      </td>
                      <td>
                        <div className='py-1 px-2 text-xs font-semibold'>
                          <div className='bg-blue-600 text-white text-center'>{item.type}</div>
                        </div>
                      </td>
                      <td>
                        <div className='py-1 px-2 text-xs font-semibold'>
                          <div className='border border-gray-300 bg-white w-[60px] pl-2'>{item.qty}</div>
                        </div>
                      </td>
                      <td>
                        <div className='py-1 px-2 text-xs font-semibold'>
                          <div className='border border-gray-300 bg-white w-[60px] pl-2'>{item.price}</div>
                        </div>
                      </td>
                      <td>
                        <div className='py-1 px-2 text-xs font-semibold'>
                          <div className='border border-gray-300 bg-white w-[60px] pl-2 h-4'>{item.trigger}</div>
                        </div>
                      </td>
                      <td className='text-blue-600 text-xs font-semibold'><AddCircleOutlineIcon style={{width: '14px'}}/> SL</td>
                      <td className='text-blue-600 text-xs font-semibold'><AddCircleOutlineIcon style={{width: '14px'}}/> Tgt</td>
                      <td><DeleteOutlineOutlinedIcon style={{color: 'lightgray'}}/></td>
                  </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between p-4 bg-white text-sm border border-t-gray-200">
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-2'>
                <div>
                  <p>Margin required:</p>
                  <p>Available funds:</p>
                </div>
                <div>
                  <p>&#x20B9; 2,43,630.3</p>
                  <p>&#x20B9; 12,00,000.00</p>
                </div>
              </div>
              <div>
                <button className='bg-yellow-300 text-black px-2 py-1 border border-yellow-300 flex items-center gap-2'>
                  <AddCircleOutlineIcon style={{width: '16px'}}/> 
                  Auto hedge
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={()=>setIsBasketOpen(false)} className='bg-white text-blue-600 px-4 py-2 border border-blue-600'>Close basket</button>
              <button className='bg-blue-600 text-white px-4 py-2 border border-blue-600'>Place order</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Basket