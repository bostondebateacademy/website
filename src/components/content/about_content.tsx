import React from "react";
import {useMediaQuery} from "react-responsive";
import AboutContentXXL from "../responsive/xxl/content/about_content_xxl";
import AboutContentLG from "../responsive/lg/content/about_content_lg";
import AboutContentMD from "../responsive/md/content/about_content_md";
import AboutContentSM from "../responsive/sm/content/about_content_sm";


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
            {size_xxs && <AboutContentSM />}
            {size_xs && <AboutContentSM />}
            {size_sm && <AboutContentSM />}
            {size_md && <AboutContentMD />}
            {size_lg && <AboutContentLG />}
            {size_xl && <AboutContentXXL />}
            {size_xxl && <AboutContentXXL />}
        </div>
    );
}