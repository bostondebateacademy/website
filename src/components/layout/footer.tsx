import React from "react";
import {useMediaQuery} from "react-responsive";
import PageFooterLG from "../responsive/lg/layout/footer";
import PageFooterXXL from "../responsive/xxl/layout/footer";
import PageFooterMD from "../responsive/md/layout/footer";
import PageFooterXS from "../responsive/xs/layout/footer";


export default function PageFooter() {
    const size_xxs = useMediaQuery({query: "(max-device-width: 479px)"});
    const size_xs = useMediaQuery({query: "(min-device-width: 480px) and (max-device-width: 575px)"});
    const size_sm = useMediaQuery({query: "(min-device-width: 576px) and (max-device-width: 767px)"});
    const size_md = useMediaQuery({query: "(min-device-width: 768px) and (max-device-width: 991px)" });
    const size_lg = useMediaQuery({query: "(min-device-width: 992px) and (max-device-width: 1199px)"});
    const size_xl = useMediaQuery({query: "(min-device-width: 1200px) and (max-device-width: 1599px)"});
    const size_xxl = useMediaQuery({query: "(min-device-width: 1600px)"});

    return (
        <div>
            {size_xxs && <PageFooterXS />}
            {size_xs && <PageFooterXS />}
            {size_sm && <PageFooterMD />}
            {size_md && <PageFooterMD />}
            {size_lg && <PageFooterLG />}
            {size_xl && <PageFooterXXL />}
            {size_xxl && <PageFooterXXL />}
        </div>
    );
}