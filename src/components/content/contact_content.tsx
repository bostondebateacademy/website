import React from "react";

export default function ContactContent() {


    React.useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://paperform.co/__embed.min.js";
        document.body.appendChild(script);
    }, []);

    return (
        <div
            data-paperform-id="qfetm5ey"
            data-spinner="1"
            style={{paddingTop: "50px"}}
        />
    );
}

