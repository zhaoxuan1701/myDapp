import React from "react";


const Video = (props: any) => {
    let bgImg = 'https://axolittles.io/' + props['data-poster-url'];
    let backGroundPic = {
        backgroundImage: "url('"+ bgImg + "')",
        backgroundSize: '100%, 100%',
        borderRadius: '40px',
    };
    let videoUrlArr = props['data-video-urls'].split(',');
    return (
        <video  style={backGroundPic} width='100%' height="100%" loop muted playsInline autoPlay>
            {
            videoUrlArr.map((person: any, index: any) => {
                let url = 'https://axolittles.io/' + person;
              return (
                <source src={url} key={index}/>
              )
            })
          }
           
        </video>
    );
}

export default Video;