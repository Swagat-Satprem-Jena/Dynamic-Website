import React, { useState } from "react";
import './AssetComponent.css';

const AssetComponent = (props) => {
    const [icon, updIcon] = useState('fa-caret-down');
    const [inptext, updinpText] = useState('');
    let audio_details_arr=null, audio_url_id =null, modified_audio_url_to_play=null;
    const txtChanged = (event) => {
        updinpText(event.target.value);
    }
    const txtarSubmit = () => {
        console.log(inptext);
    }
    const toggleCollapse = () => {
        console.log('clicked')
        const content = document.getElementById(`${props.asset_id}`).getElementsByClassName('w')[0];
        if (content.style.display === "block") {
            content.style.display = "none"
            updIcon('fa-caret-down');
        } else {
            content.style.display = "block";
            updIcon('fa-caret-up');
        }
    }

    let obj = {
        audio_class: 'display-none',
        image_class: 'display-none',
        video_class: 'display-none',
        docs_class: 'display-none',
        reflexive_class: 'display-none',
        input_class: 'display-none'
    }


    if (props.asset_type === "input_asset") {
        obj.input_class = '';
    }
    else if (props.asset_type === "display_asset") {
        if (props.audio_url !== null && props.audio_url.length !== 0) {
            obj.audio_class = '';
            audio_details_arr = (props.audio_url).split("/");
            audio_url_id = audio_details_arr[5];
            console.log(audio_url_id);
            modified_audio_url_to_play = `https://docs.google.com/uc?export=download&id=${audio_url_id}`
        }
        if (props.video_url !== null && props.video_url.length !== 0)
            obj.video_class = '';
        if (props.docs_url !== null && props.docs_url.length !== 0)
            obj.docs_class = '';
        if (props.image_url !== null && props.image_url.length !== 0)
            obj.image_class = '';
        if (props.reflexive_text !== null && props.reflexive_text.length !== 0)
            obj.reflexive_class = '';
    }

    return (
        <>
            <div className="card-fit-div" id={props.asset_id}>
                <div className="card-heading">{props.asset_heading}</div>
                <div className={`audio-div ${obj.audio_class}`}>
                    <audio controls className="audio-element">
                        <source src={modified_audio_url_to_play} type="audio/mpeg"></source>
                    </audio>
                </div>
                <div className={`image-div ${obj.image_class}`}>
                    <img className="image-element" src={props.image_url} alt="img" />
                </div>
                <div className={`video-div ${obj.video_class}`}>
                    <iframe width="330" height="300" src={props.video_url} title="video-element"></iframe>
                </div>
                <div className={`docs-div ${obj.docs_class}`}>
                    <iframe src={props.docs_url} title="document-element" alt='doc-file' width="100%" height="500px"></iframe>
                </div>
                <div className={`reflection-div ${obj.reflexive_class}`}>
                    <p className="reflection-text">{props.reflexive_text}</p>
                </div>

                <div className={`input-div ${obj.input_class}`}>
                    <textarea name={`input-data-${props.asset_id}`} onChange={txtChanged} className='text-area' placeholder={`${props.asset_content} as per given guidelines`} />
                    <button className="submit-button" onClick={txtarSubmit}>Submit</button>
                </div>

                <div className="description-div w">
                    <p className="description-text">{props.description_text}</p>
                </div>

                <div className="collapse-btn-div">
                    <i className={`fa-solid ${icon}`} onClick={toggleCollapse}></i>
                </div>
            </div>
        </>
    );
}

export default AssetComponent;