import tcb from '@cloudbase/node-sdk';
import cloudConfig from './cloudConfig';

const { env, secretId, secretKey, collectionA, collectionB, collectionC } = cloudConfig;
const app = tcb.init({
  env,
  secretId,
  secretKey
});

const db = app.database();

async function callDataBase() {

  const collection = db.collection(collectionA);

  let { data } = await collection.aggregate()
    .lookup({
      from: collectionB,
      localField: 'movieList',
      foreignField: '_id',
      as: 'movieList'
    })
    // .replaceRoot({
    //   newRoot:'movieList'
    // })
    // .lookup({
    //   from:collectionC,
    //   localField: 'movieList',
    //   foreignField: 'agantId',
    //   as: 'recommender'
    // })
    // .lookup({
    //   from:'collectionC',
    //   let:{
    //     agantId:'$agantId'
    //   },
    //   pipeline:db.command.aggregate.pipeline().match({
    //     agantId:'$$agantId'
    //   }),
    //   as:'test'
    // })
    .end()

  console.log(JSON.stringify(data));

  return data;
}


export { callDataBase };