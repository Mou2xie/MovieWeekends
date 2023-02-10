import Image from 'next/image';
import type { MovieInfo } from '../assets/interfaces';

function MovieCard({ movieInfo }: { movieInfo: MovieInfo }) {

    const { movie, recommender } = movieInfo;

    return (
        <div className='flex odd:justify-end even:justify-start'>
            <div className='w-11/12 h-[30rem] bg-[#343440] rounded-xl flex flex-col items-stretch p-5'>
                <div className='flex shrink-0 grow-0'>
                    <div className='grow-0 w-[10rem] h-[15rem] relative shrink-0'>
                        <Image src={movie.moviePoster} layout='fill' objectFit='cover' objectPosition='center' className='rounded-xl'></Image>
                    </div>
                    <div className='grow pl-5 flex flex-col items-stretch'>
                        <div className='text-[#DFDFDF] text-3xl font-light line-clamp-2'>{movie.movieNameCN}</div>
                        <div className='text-[#A4A4A4] text-lg line-clamp-1'>{`${movie.movieNameEN}(${movie.realseYear})`}</div>
                        <div className='flex space-x-1.5 mt-1'>
                            {
                                movie.movieType.map((type) => {
                                    return (
                                        <div className='text-[#FF922F] px-3 text-md font-light border border-[#FF922F] rounded-md' key={type}>{type}</div>
                                    );
                                })
                            }
                        </div>
                        <div className='mt-2 text-white flex space-x-2 font-light'>
                            <div className='h-6 w-6 relative grow-0 shrink-0'>
                                <Image src='/director.svg' layout='fill'></Image>
                            </div>
                            <div className='line-clamp-1 grow font-light'>{movie.director}</div>
                        </div>
                        <div className='mt-2 text-white flex space-x-2 items-start font-light'>
                            <div className='h-6 w-6 relative grow-0 shrink-0'>
                                <Image src='/actor.svg' layout='fill'></Image>
                            </div>
                            <div className='line-clamp-2 grow font-light'>{movie.actors}</div>
                        </div>
                        <div className='flex grow items-end'>
                            {
                                (() => {
                                    switch (movie.sourceType) {
                                        case 1:
                                            return (
                                                <div className=' py-1.5 px-5 bg-[#FF922F] flex justify-center items-center rounded-full' 
                                                onClick={() => {
                                                    alert('本站暂不支持网盘资源，请支持正版');
                                                }}>
                                                    <div className='h-[1.5rem] w-[6rem] relative'>
                                                        <Image src='/ali.svg' layout='fill' objectFit='cover' objectPosition='center'></Image>
                                                    </div>
                                                </div>
                                            );
                                            break;
                                        case 2:
                                            return (
                                                <div className=' py-1.5 px-5 bg-[#FF922F] flex justify-center items-center rounded-full' 
                                                onClick={() => {
                                                    alert('本站暂不支持网盘资源，请支持正版');
                                                }}>
                                                    <div className='h-[1.5rem] w-[6rem] relative'>
                                                        <Image src='/ali.svg' layout='fill' objectFit='cover' objectPosition='center'></Image>
                                                    </div>
                                                </div>
                                            );
                                            break;
                                        case 3:
                                            return (
                                                <div className=' py-1.5 px-5 bg-[#FF922F] flex justify-center items-center rounded-full'  onClick={() => {
                                                    alert('本站暂不支持网盘资源，请支持正版');
                                                }}>
                                                    <div className='h-[1.5rem] w-[6rem] relative'>
                                                        <Image src='/ali.svg' layout='fill' objectFit='cover' objectPosition='center'></Image>
                                                    </div>
                                                </div>
                                            );
                                            break;
                                        default:
                                            return null;
                                    }
                                })()
                            }
                        </div>
                    </div>
                </div>
                <div className='grow mt-5 flex flex-col items-stretch'>
                    <div className='flex items-center space-x-2'>
                        <div className='h-[2.5rem] w-[2.5rem] relative'>
                            <Image layout='fill' objectFit='cover' objectPosition='center' className='rounded-full' src={recommender.avatar}></Image>
                        </div>
                        <div className='text-white font-light'>{recommender.name}</div>
                        <div className='font-black text-[#48485B] text-xl italic'>RECONMMEND</div>
                    </div>
                    <div className='ml-14'>
                        <div className='text-[#C5C5C5] font-light line-clamp-5'>{recommender.reconmmendWords}</div>
                    </div>
                    <div className='grow flex justify-end'>
                        <div className='w-[2.5rem] h-[2.5rem] relative'>
                            <Image src='/quotation.svg' layout='fill'></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { MovieCard };