import {Card, Carousel, Col, Row} from "antd";
import React, {useLayoutEffect, useRef, useState} from "react";
import image1 from "../../../../images/bda1.png";
import image2 from "../../../../images/bda2.png";
import image3 from "../../../../images/bda3.png";
import image4 from "../../../../images/about1.png"
import image5 from "../../../../images/about2.png"
import image6 from "../../../../images/about3.png"
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {
    IconBicep,
    IconLogic,
    IconNerd,
    IconPrivacyPolicy,
    IconSnowboarding,
    IconTranslation
} from "../../../../icons/icons";


export default function AboutContentXXL() {
    const [height, setHeight] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if(ref.current) {
            setHeight(ref.current.clientHeight);
        }
    }, []);

    return (
        <div style={{background: "#F2F2F2"}}>
            <Row style={{paddingTop: "100px", paddingBottom: "100px", background: "#F2F2F2"}}>
                <Col
                    xxl={{span: 18, offset: 3}}
                    xl={{span: 20, offset: 2}}
                    lg={{span: 20, offset: 2}}
                >
                    <Row>
                        <h1 className="h1-centered">
                            Debate is needed now more than ever.
                        </h1>
                        <h2 className="h2-centered" style={{marginTop: "-50px"}}>
                            Don't believe us? Take a look for yourself:
                        </h2>
                    </Row>
                    <Row>
                        <Col
                            xxl={{span: 12, offset: 6}}
                            xl={{span: 14, offset: 5}}
                            lg={{span: 16, offset: 4}}
                        >
                            <Carousel dots={false}
                                      dotPosition="bottom"
                                      effect="scrollx"
                                      autoplaySpeed={3000}
                                      arrows={true}
                                      autoplay={true}
                                      nextArrow={<RightOutlined />}
                                      prevArrow={<LeftOutlined/>}
                                      style={{marginTop: "50px"}}
                            >
                                <div>
                                    <CarouselContent1 />
                                </div>
                                <div>
                                    <CarouselContent2 />
                                </div>
                                <div>
                                    <CarouselContent3 />
                                </div>
                            </Carousel>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row id="program" style={{paddingTop: "100px", paddingBottom: "100px", background: "#F2F2F2"}}>
                <Col
                    xxl={{span: 18, offset: 3}}
                    xl={{span: 20, offset: 2}}
                    lg={{span: 20, offset: 2}}
                >
                    <h1 className="h1-centered">
                        A better program for a better you.
                    </h1>
                    <h3 className="h3-content" style={{textAlign: "center", marginTop: "-50px"}}>
                        At BDA, we have spent the last decade perfecting the optimal education for every student.
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col
                    xxl={{span: 6, offset: 5}}
                    xl={{span: 9, offset: 2}}
                    lg={{span: 9, offset: 2}}
                >
                    <h1 className="h1-content">
                        Experience
                    </h1>
                    <p className="p-content3">
                        It’s said that it takes ten-thousand hours to master a skill. Over the last decade,
                        Ben Carson and Max Albert have spent more than <b>fifty-thousand hours</b> on debate instruction.
                        At BDA, we pride ourselves on ensuring every student is working with experienced,
                        hard-working staff, who understand not just how to debate, but how to <i>teach</i>.
                    </p>
                </Col>
                <Col
                    xxl={{span: 6, offset: 2}}
                    xl={{span: 9, offset: 2}}
                    lg={{span: 9, offset: 2}}
                >
                    <img src={image4} style={{width: "100%", paddingTop: "10%"}} alt=""/>
                </Col>
            </Row>
            <Row style={{paddingTop: "100px"}}>
                <Col
                    xxl={{span: 6, offset: 5}}
                    xl={{span: 9, offset: 2}}
                    lg={{span: 9, offset: 2}}
                >
                    <img src={image5} style={{width: "100%", paddingTop: "12%"}} alt=""/>
                </Col>
                <Col
                    xxl={{span: 6, offset: 2}}
                    xl={{span: 9, offset: 2}}
                    lg={{span: 9, offset: 2}}
                >
                    <h1 className="h1-content">
                        Cost
                    </h1>
                    <p className="p-content3">
                        Boston Debate Academy is proud of our small team. By getting rid of bloated staff and needless
                        overhead, we simultaneously keep our program affordable and ensure that every student is
                        receiving an education from the best of the best. An hour with us is <b>20% cheaper</b> than nearby
                        Academies, while still maintaining our unparalleled results!
                    </p>
                </Col>
            </Row>
            <Row style={{paddingTop: "100px"}}>
                <Col
                    xxl={{span: 6, offset: 5}}
                    xl={{span: 9, offset: 2}}
                    lg={{span: 9, offset: 2}}
                >
                    <h1 className="h1-content">
                        Curriculum
                    </h1>
                    <p className="p-content3">
                        Other debate academies use the same curriculum for classes online and in-person. When teachers
                        adopt a one-size fits-all approach their students suffer. At Boston Debate Academy,
                        we recognize that online education requires a unique approach centered around continual
                        student engagement, technology-integrated interaction, and group-oriented activities.
                    </p>
                </Col>
                <Col
                    xxl={{span: 6, offset: 2}}
                    xl={{span: 9, offset: 2}}
                    lg={{span: 9, offset: 2}}
                >
                    <img src={image6} style={{width: "100%", paddingTop: "12%"}} alt=""/>
                </Col>
            </Row>
            <Row style={{paddingTop: "200px"}}>
                <h1 className="h1-centered">
                    Thinkers Are The New Rock Stars.
                </h1>
                <Col
                    xxl={{span: 14, offset: 5}}
                    xl={{span: 20, offset: 2}}
                    lg={{span: 20, offset: 2}}
                >
                    <p className="p-content" style={{textAlign: "center", marginTop: "-50px"}}>
                        Today's economy and popular culture is driven by those who excel in academia.
                        At BDA, we equip students with the proper tools to maximize their potential.
                    </p>
                </Col>
            </Row>
            <Row style={{paddingTop: "50px"}}>
                <Col
                    xxl={{span: 4, offset: 5}}
                    xl={{span: 6, offset: 2}}
                    lg={{span: 6, offset: 2}}
                >
                    <Card
                        title={
                            <div style={{marginBottom: "-10px"}}>
                                <IconLogic style={{display: "inline"}}/>
                                <h3 className="h3-content" style={{display: "inline", fontWeight: "bold", marginLeft: "10px"}}>Critical Thinking</h3>
                            </div>
                        }
                        bordered={false}
                        // eslint-disable-next-line
                        style={{background: "#FFFFFF", borderColor: "black", height: height, borderRadius: "20px",
                            overflow: "hidden", boxShadow: "5px 8px 24px 5px rgba(255, 209, 81, 0.2)" }}
                    >
                        <p className="p-content3">
                            As the world becomes more complex, students must learn to think critically.
                            Former debaters, like Supreme Court Justice Stephen Breyer, put these skills
                            to the test daily. At BDA, students are trained to think logically and deeply.
                        </p>
                    </Card>
                </Col>
                <Col
                    xxl={{span: 4, offset: 1}}
                    xl={{span: 6, offset: 1}}
                    lg={{span: 6, offset: 1}}
                >
                    <Card
                        title={
                            <div style={{marginBottom: "-10px"}}>
                                <IconNerd style={{display: "inline"}}/>
                                <h3 className="h3-content" style={{display: "inline", fontWeight: "bold", marginLeft: "10px"}}>Confidence</h3>
                            </div>
                        }
                        bordered={false}
                        // eslint-disable-next-line
                        style={{background: "#FFFFFF", borderColor: "black", height: "auto", borderRadius: "20px",
                            overflow: "hidden", boxShadow: "5px 8px 24px 5px rgba(255, 209, 81, 0.2)" }}
                        ref={ref}
                    >
                        <p className="p-content3">
                            To follow your dreams, you need confidence. That’s why so many cultural icons, like Oprah
                            Winfrey and BD Wong,  participated in debate. At BDA, we transform every student into
                            confident young adults, ready to take on the world.
                        </p>
                    </Card>
                </Col>
                <Col
                    xxl={{span: 4, offset: 1}}
                    xl={{span: 6, offset: 1}}
                    lg={{span: 6, offset: 1}}
                >
                    <Card
                        title={
                            <div style={{marginBottom: "-10px"}}>
                                <IconSnowboarding style={{display: "inline"}}/>
                                <h3 className="h3-content" style={{display: "inline", fontWeight: "bold", marginLeft: "10px"}}>Creativity</h3>
                            </div>
                        }
                        bordered={false}
                        // eslint-disable-next-line
                        style={{background: "#FFFFFF", borderColor: "black", height: height, borderRadius: "20px",
                            overflow: "hidden", boxShadow: "5px 8px 24px 5px rgba(255, 209, 81, 0.2)" }}
                    >
                        <p className="p-content3">
                            One of the most overlooked facets of education is creativity, the backbone behind successful
                            innovators of the world, like former debaters Indra Nooyi and Jack Dorsey. At BDA,
                            students learn how to think differently and creatively.
                        </p>
                    </Card>
                </Col>
            </Row>
            <Row style={{paddingTop: "50px", paddingBottom: "100px"}}>
                <Col
                    xxl={{span: 4, offset: 5}}
                    xl={{span: 6, offset: 2}}
                    lg={{span: 6, offset: 2}}
                >
                    <Card
                        title={
                            <div style={{marginBottom: "-10px"}}>
                                <IconTranslation style={{display: "inline"}}/>
                                <h3 className="h3-content" style={{display: "inline", fontWeight: "bold", marginLeft: "10px"}}>Communication</h3>
                            </div>
                        }
                        bordered={false}
                        // eslint-disable-next-line
                        style={{background: "#FFFFFF", borderColor: "black", height: height, borderRadius: "20px",
                            overflow: "hidden", boxShadow: "5px 8px 24px 5px rgba(255, 209, 81, 0.2)" }}
                    >
                        <p className="p-content3">
                            The 21st century has brought everything closer together, making communication skills highly
                            valuable in the world for former debaters, like Min Jin Lee and Celeste Ng.
                            At BDA, students learn the art of persuasive writing and speaking.
                        </p>
                    </Card>
                </Col>
                <Col
                    xxl={{span: 4, offset: 1}}
                    xl={{span: 6, offset: 1}}
                    lg={{span: 6, offset: 1}}
                >
                    <Card
                        title={
                            <div style={{marginBottom: "-10px"}}>
                                <IconBicep style={{display: "inline"}}/>
                                <h3 className="h3-content" style={{display: "inline", fontWeight: "bold", marginLeft: "10px"}}>Competitiveness</h3>
                            </div>
                        }
                        bordered={false}
                        // eslint-disable-next-line
                        style={{background: "#FFFFFF", borderColor: "black", height: height, borderRadius: "20px",
                            overflow: "hidden", boxShadow: "5px 8px 24px 5px rgba(255, 209, 81, 0.2)" }}
                    >
                        <p className="p-content3">
                            Behind every success story is the drive to get there. That’s why former debaters like Elizabeth
                            Warren know how to work hard to achieve results. At BDA, students are placed in constructive,
                            competitive settings to overcome anything.
                        </p>
                    </Card>
                </Col>
                <Col
                    xxl={{span: 4, offset: 1}}
                    xl={{span: 6, offset: 1}}
                    lg={{span: 6, offset: 1}}
                >
                    <Card
                        title={
                            <div style={{marginBottom: "-10px"}}>
                                <IconPrivacyPolicy style={{display: "inline"}}/>
                                <h3 className="h3-content" style={{display: "inline", fontWeight: "bold", marginLeft: "10px"}}>Cooperation</h3>
                            </div>
                        }
                        bordered={false}
                        // eslint-disable-next-line
                        style={{background: "#FFFFFF", borderColor: "black", height: height, borderRadius: "20px",
                            overflow: "hidden", boxShadow: "5px 8px 24px 5px rgba(255, 209, 81, 0.2)" }}
                    >
                        <p className="p-content3">
                            In today’s landscape, cooperation is a must-have for any occupation. Former debaters like
                            Nelson Mandela prove just how valuable this is. At BDA, students learn how to
                            synergize with their peers in ways schools fail to teach adequately.
                        </p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}


export function CarouselContent1() {
    return (
        <div>
            <Row>
                <Col>
                    <img src={image1} className="img-centered-carousel" alt=""/>
                </Col>
            </Row>
        </div>
    )
}

export function CarouselContent2() {
    return (
        <div>
            <Row>
                <Col>
                    <img src={image2} className="img-centered-carousel" alt=""/>
                </Col>
            </Row>
        </div>
    )
}

export function CarouselContent3() {
    return (
        <div>
            <Row>
                <Col>
                    <img src={image3} className="img-centered-carousel" alt=""/>
                </Col>
            </Row>
        </div>
    )
}

