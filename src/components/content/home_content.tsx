import React from "react";
import {useMediaQuery} from "react-responsive";
import HomeContentMD from "../responsive/md/content/home_content_md";
import HomeContentXXL from "../responsive/xxl/content/home_content_xxl";
import HomeContentXL from "../responsive/xl/content/home_content_xl";
import HomeContentLG from "../responsive/lg/content/home_content_lg";
import HomeContentSM from "../responsive/sm/content/home_content_sm";


export default function HomeContent() {
    const size_xxs = useMediaQuery({query: "(max-device-width: 479px)"});
    const size_xs = useMediaQuery({query: "(min-device-width: 480px) and (max-device-width: 575px)"});
    const size_sm = useMediaQuery({query: "(min-device-width: 576px) and (max-device-width: 767px)"});
    const size_md = useMediaQuery({query: "(min-device-width: 768px) and (max-device-width: 991px)" });
    const size_lg = useMediaQuery({query: "(min-device-width: 992px) and (max-device-width: 1199px)"});
    const size_xl = useMediaQuery({query: "(min-device-width: 1200px) and (max-device-width: 1599px)"});
    const size_xxl = useMediaQuery({query: "(min-device-width: 1600px)"});


    return (
        <div>
            {size_xxs && <HomeContentSM />}
            {size_xs && <HomeContentSM />}
            {size_sm && <HomeContentSM />}
            {size_md && <HomeContentMD />}
            {size_lg && <HomeContentLG />}
            {size_xl && <HomeContentXL />}
            {size_xxl && <HomeContentXXL />}
        </div>
    );
}