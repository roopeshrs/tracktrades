import Basket from "./Basket";
import { CALLS, PUTS } from "../utils/constants";


const Table = ({isBasketOpen, setIsBasketOpen}) => {
  return (
    <div className='mx-12'>
        <div className='flex items-center justify-end gap-4 mb-5'>
            <button className='bg-blue-600 text-white py-2 rounded-lg w-20'>LTP</button>
            <button className='bg-gray-300 text-black py-2 rounded-lg w-20'>Greeks</button>
        </div>

        <div className="flex w-full justify-around font-semibold py-2">
            <p>CALLS</p>
            <p>PUTS</p>
        </div>

        <div className="flex relative">
            <table className="flex-1">
                <thead className="bg-blue-100">
                    <tr className="border-b border-b-blue-300">
                    <th><div className="py-2">OI buildup</div></th>
                    <th>IV</th>
                    <th>OI</th>
                    <th>Volume</th>
                    <th>Chng%</th>
                    <th>LTP</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody className="text-center bg-yellow-100">
                    {CALLS.map((call, index) => (
                    <tr key={index} className={`${(index===11 || index===12) ? 'bg-white border-b border-violet-300' : 'border-b border-b-yellow-300'}`}>
                        <td><div className="py-2">{call.oiBuildup}</div></td>
                        <td>{call.iv}</td>
                        <td>{call.oi}</td>
                        <td>{call.volume}</td>
                        <td className="text-green-600">{call.changePercentage}</td>
                        <td>{call.ltp}</td>
                        <td><div className="flex items-center justify-center"><div className="flex items-center justify-center w-5 bg-white border border-black text-xs font-semibold">B</div></div></td>
                        <td><div className="flex items-center justify-center"><div className="flex items-center justify-center w-5 bg-white border border-black text-xs font-semibold">S</div></div></td>
                    </tr>
                    ))}
                </tbody>
            </table>

            <table className="bg-violet-100 border-x border-violet-300 flex-[0.2]">
                <thead>
                    <tr className="border-b border-violet-300">
                    <th><div className="py-2">Strike</div></th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr className="border-b border-violet-300"><td>{17700}</td></tr>
                    <tr className="border-b border-violet-300"><td>{17750}</td></tr>
                    <tr className="border-b border-violet-300"><td>{17800}</td></tr>
                    <tr className="border-b border-violet-300"><td>{17850}</td></tr>
                    <tr className="border-b border-violet-300"><td>{17900}</td></tr>
                    <tr className="border-b border-violet-300"><td>{17950}</td></tr>
                    <tr className="border-b border-violet-300"><td>{18000}</td></tr>
                    <tr className="border-b border-violet-300"><td>{18050}</td></tr>
                    <tr className="border-b border-violet-300"><td>{18100}</td></tr>
                    <tr className="border-b border-violet-300"><td>{18150}</td></tr>
                    <tr className="border-b border-violet-300"><td>{18200}</td></tr>
                    <tr className="border-b border-violet-300"><td>{18250}</td></tr>
                    <tr className="border-b border-violet-300"><td>{18300}</td></tr>
                </tbody>
            </table>

            <table className="flex-1">
                <thead className="bg-blue-100">
                    <tr className="border-b border-b-blue-300">
                    <th></th>
                    <th></th>
                    <th><div className="py-2">LTP</div></th>
                    <th>Chng%</th>
                    <th>Volume</th>
                    <th>OI</th>
                    <th>IV</th>
                    <th>OI buildup</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {PUTS.map((put, index) => (
                    <tr key={index} className={`${(index===11 || index===12) ? 'bg-yellow-100 border-b border-yellow-300' : 'border-b border-b-violet-300'}`}>
                        <td><div className="flex items-center justify-center"><div className="flex items-center justify-center w-5 bg-white border border-black text-xs font-semibold">B</div></div></td>
                        <td><div className="flex items-center justify-center"><div className="flex items-center justify-center w-5 bg-white border border-black text-xs font-semibold">S</div></div></td>
                        <td>{put.ltp}</td>
                        <td className="text-red-600">{put.changePercentage}</td>
                        <td>{put.volume}</td>
                        <td>{put.oi}</td>
                        <td>{put.iv}</td>
                        <td>{put.oiBuildup}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            {isBasketOpen && (
                <Basket isBasketOpen={isBasketOpen} setIsBasketOpen={setIsBasketOpen}/>
            )}
        </div>
    </div>
  )
}

export default Table