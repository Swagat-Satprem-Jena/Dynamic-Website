import React from 'react';
import './App.css';
import AssetComponent from './AssetComponent';

const App = () => {
  let objdata, task_array;
  const getJsonData = () => {
    objdata = require('./Asset.json');
    // console.log(objdata)
  }

  getJsonData();

  task_array = objdata.tasks;
  // console.log(task_array)

  const renderAsset = (eachAsset) => {
    // console.log(eachAsset)
    return (<AssetComponent key={eachAsset.asset_id} asset_heading={eachAsset.asset_title} asset_content={eachAsset.asset_content} asset_id={eachAsset.asset_id} audio_url={eachAsset.display_asset_url} image_url={eachAsset.display_asset_image} video_url={eachAsset.display_asset_video} docs_url={eachAsset.display_asset_docs} reflexive_text={eachAsset.display_asset_reflection} description_text={eachAsset.asset_description} asset_type={eachAsset.asset_type}></AssetComponent>);
  }
  const renderTask = (value) => {
    return (<div className='task-div' id={`${value.task_id}`} key={value.task_id}>
      {(value.assets).map(renderAsset)}
    </div>);
  }
  return (
    <>
      {task_array.map(renderTask)}
    </>
  );
}
export default App;
