import {MovieCard} from './MovieCard';
import type {Weekinfo} from '../assets/interfaces';

function WeekCard({ weekInfo }: { weekInfo: Weekinfo }) {
    const {month,date,movieList,test} = weekInfo;

    return (
        <div className='mt-14 mx-10 flex flex-col items-stretch'>
            {/* 推荐日期 */}
            <div className='flex justify-center items-center text-4xl font-medium text-[#A4A4A4] font-mono'>
                <div className='rounded-xl px-3 py-1 bg-[#1E1E25]'>{month}</div>
                <div className='ml-2 rounded-xl px-3 py-1 bg-[#1E1E25]'>{date}</div>
            </div>

            <div className='mt-10'>
                <div className='grid grid-cols-2 gap-4'>
                    {
                        movieList.map((movieInfo:any,index:any)=>{
                            return(
                                <MovieCard movieInfo={movieInfo} key={index}></MovieCard>
                            );
                        })
                    }
                </div>
                <div className='mt-10'></div>
            </div>
        </div>
    );
}

export { WeekCard };