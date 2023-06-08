import { LOGO } from '../utils/constants'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
  return (
    <div className='flex items-center px-6 gap-10 h-[10vh] shadow-lg'>
        <div>
            <img className='h-10' src={LOGO} />
        </div>
        <div className='flex-1 flex items-center justify-between'>
            <ul className='flex gap-4'>
                <li>Dashboard</li>
                <li className='text-blue-600'>Option chain</li>
                <li>Strategy builder</li>
                <li>Positions</li>
                <li>Order book</li>
            </ul>

            <div className='flex gap-5'>
                <div className='flex flex-col'>
                    <div className='flex justify-end'>
                        <p className='text-xs'>NIFTY</p>
                    </div>
                    <div className='flex items-baseline gap-2'>
                        <span className='text-xs text-green-600'>0.35%</span>
                        <p className='text-xl font-semibold'>18,245.32</p>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex justify-end'>
                        <p className='text-xs'>BANKNIFTY</p>
                    </div>
                    <div className='flex items-baseline gap-2'>
                        <span className='text-xs text-green-600'>0.7%</span>
                        <p className='text-xl font-semibold'>39,156.1</p>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex justify-end'>
                        <p className='text-xs'>INDIA VIX</p>
                    </div>
                    <div className='flex items-baseline gap-2'>
                        <span className='text-xs text-red-600'>10.9%</span>
                        <p className='text-xl font-semibold'>12.12</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex items-center'>
            <p>Profile</p>
            <ExpandMoreIcon />
        </div>
    </div>
  )
}

export default Header