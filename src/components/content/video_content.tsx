import React from "react";
import ReactPlayer from "react-player";
import video_sam from "../../videos/sam_testimonial_final.mp4";
import video_alyssa from "../../videos/alyssa_testimonial_final.mp4";


export function VidSam() {
    return (
        <div>
            <ReactPlayer
                className='react-player fixed-bottom'
                url= {video_sam}
                width="140%"
                height="500px"
                volume={0.5}
                controls = {true}
                config={{ file: {
                        attributes: {
                            controlsList: 'nodownload nofullscreen noremoteplayback'
                        }}}}
                style={{objectFit: "cover"}}
            />
        </div>
    );
}

export function VidAlyssa() {
    return (
        <div>
            <ReactPlayer
                className='react-player fixed-bottom'
                url= {video_alyssa}
                width="140%"
                height="500px"
                volume={0.5}
                controls = {true}
                config={{ file: {
                        attributes: {
                            controlsList: 'nodownload nofullscreen noremoteplayback'
                        }}}}
                style={{objectFit: "cover"}}
            />
        </div>
    );
}