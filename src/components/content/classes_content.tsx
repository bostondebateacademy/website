import React from "react";
import {useMediaQuery} from "react-responsive";
import ClassesContentXXL from "../responsive/xxl/content/classes_content_xxl";
import ClassesContentLG from "../responsive/lg/content/classes_content_lg";


export default function ClassesContent() {
    const size_xxs = useMediaQuery({query: "(max-device-width: 479px)"});
    const size_xs = useMediaQuery({query: "(min-device-width: 480px) and (max-device-width: 575px)"});
    const size_sm = useMediaQuery({query: "(min-device-width: 576px) and (max-device-width: 767px)"});
    const size_md = useMediaQuery({query: "(min-device-width: 768px) and (max-device-width: 991px)" });
    const size_lg = useMediaQuery({query: "(min-device-width: 992px) and (max-device-width: 1199px)"});
    const size_xl = useMediaQuery({query: "(min-device-width: 1200px) and (max-device-width: 1599px)"});
    const size_xxl = useMediaQuery({query: "(min-device-width: 1600px)"});


    return (
        <div>
            {size_xxs && <ClassesContentLG />}
            {size_xs && <ClassesContentLG />}
            {size_sm && <ClassesContentLG />}
            {size_md && <ClassesContentLG />}
            {size_lg && <ClassesContentLG />}
            {size_xl && <ClassesContentXXL />}
            {size_xxl && <ClassesContentXXL />}
        </div>
    );
}