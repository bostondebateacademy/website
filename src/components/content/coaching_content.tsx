import React from "react";
import {useMediaQuery} from "react-responsive";
import CoachingContentXXL from "../responsive/xxl/content/coaching_content_xxl";
import CoachingContentXL from "../responsive/xl/content/coaching_content_xl";
import CoachingContentMD from "../responsive/md/content/coaching_content_md";


export default function CoachingContent() {
    const size_xxs = useMediaQuery({query: "(max-device-width: 479px)"});
    const size_xs = useMediaQuery({query: "(min-device-width: 480px) and (max-device-width: 575px)"});
    const size_sm = useMediaQuery({query: "(min-device-width: 576px) and (max-device-width: 767px)"});
    const size_md = useMediaQuery({query: "(min-device-width: 768px) and (max-device-width: 991px)" });
    const size_lg = useMediaQuery({query: "(min-device-width: 992px) and (max-device-width: 1199px)"});
    const size_xl = useMediaQuery({query: "(min-device-width: 1200px) and (max-device-width: 1599px)"});
    const size_xxl = useMediaQuery({query: "(min-device-width: 1600px)"});


    return (
        <div>
            {size_xxs && <CoachingContentMD />}
            {size_xs && <CoachingContentMD />}
            {size_sm && <CoachingContentMD />}
            {size_md && <CoachingContentMD />}
            {size_lg && <CoachingContentXL />}
            {size_xl && <CoachingContentXL />}
            {size_xxl && <CoachingContentXXL />}
        </div>
    );
}