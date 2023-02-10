import Head from 'next/head';
import { WeekCard } from '../components/WeekCard';
import type { Weekinfo } from '../assets/interfaces';
import { weekinfo1, weekinfo2 } from '../assets/data';
// import { callDataBase } from '../assets/callDataBase';

function Index({ data }: { data: Weekinfo[] }) {

  return (
    <>
      <Head>
        <title>周末映画</title>
      </Head>

      {/* 顶部菜单预留区 */}
      <div className='h-10'></div>

      {/* 页面头部 */}
      <div className='flex flex-col items-center relative mt-5'>
        <div className='text-[#1E1E25] text-9xl tracking-tighter font-extrabold select-none'>MOVIEWEEKENDS</div>
        <div className='text-white absolute bottom-8 text-6xl tracking-widest select-none'>周末映画</div>
      </div>
      <div className='text-center italic font-light text-[#FF922F] text-xl select-none'>每周五为你推荐电影，美好的周末值得佳片相伴</div>

      {/* 每周推荐模块 */}
      {
        data.map((data) => {
          return (
            <WeekCard weekInfo={data} key={data.timestamp}></WeekCard>
          );

        })
      }
      <style global jsx>{`
        body {
          background: #22222B;
          display:flex;
          flex-direction:column;
          align-items:stretch;
        }
      `}</style>
    </>
  );
};

export async function getServerSideProps() {

  let data = [weekinfo1, weekinfo2];

  // let data  = await callDataBase();

  return { props: { data } }

};

export default Index;