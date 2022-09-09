import {Col, Row, Carousel, Button, Divider, Card} from "antd";
import {RightOutlined, LeftOutlined, ArrowLeftOutlined} from '@ant-design/icons';
import React, {useState} from "react";
import ReactPlayer from "react-player";
import ReactCardFlip from "react-card-flip";
import image_ben from "../../../../images/aboutben2.png";
import {BioBen, BioMax} from "../../../content/text_content";
import image_max from "../../../../images/aboutmax2.png";
import video_sam from "../../../../videos/sam_testimonial_final.mp4";
import video_alyssa from "../../../../videos/alyssa_testimonial_final.mp4";
import image1 from "../../../../images/home1.png"
import img_awards from "../../../../images/awards.png"


export default function HomeContentXL() {

    const [flippedBen, setFlippedBen] = useState(false);
    const [flippedMax, setFlippedMax] = useState(false);

    const FlipBen = () => {
        setFlippedBen(!flippedBen)
    };

    const FlipMax = () => {
        setFlippedMax(!flippedMax)
    };

    return (
        <div style={{marginTop: "100px"}}>
            <Row style={{paddingBottom: "150px"}}>
                <Col
                    xl={{span: 10, offset: 1}}
                >
                    <Carousel1Text />
                </Col>
                <Col
                    xl={{span: 11, offset: 1}}
                >
                    <Carousel dots={true}
                              dotPosition="bottom"
                              effect="scrollx"
                              autoplaySpeed={5000}
                              arrows={false}
                              autoplay={false}
                              nextArrow={<RightOutlined/>}
                              prevArrow={<LeftOutlined/>}
                              className="ant-carousel-home"
                    >
                        <div>
                            <Carousel1Content1 />
                        </div>
                    </Carousel>
                </Col>
            </Row>
            <Row style={{paddingBottom: "200px"}}>
                <Col
                    xl={{span: 22, offset: 1}}
                >
                    <img src={img_awards} className="img-centered" style={{width: "70%"}} alt=""/>
                </Col>
            </Row>

            <Row style={{paddingTop: "100px", background: "#F2F2F2"}}>
                <Col
                    xl={{span: 22, offset: 1}}
                >
                    <h1 className="h1-content" style={{paddingTop: "30px"}}>
                        The best team for the best students.
                    </h1>
                    <p className="p-content3">
                        Only two coaches have ever won the Middle School Debate Trifecta.
                        Both teach at Boston Debate Academy.
                    </p>
                    <p className="p-content3">
                        In 2022, our staff  coached the winners of The Georgetown Invitational,
                        The Harvard Invitational, and The Tournament of Champions.
                    </p>
                    <p className="p-content3">
                        Click our coaches to learn more about them!
                    </p>
                </Col>
            </Row>
            <Row style={{paddingTop: "50px", paddingBottom: "100px", background: "#F2F2F2"}}>
                <Col
                    xl={{span: 8, offset: 3}}
                >
                    <ReactCardFlip isFlipped={flippedBen} flipDirection="horizontal">
                        <img src={image_ben} onClick={FlipBen} style={{width: "100%", objectFit: "cover", cursor: "pointer"}} alt=""/>
                        <Card
                            title={<h3 className="h3-content">Ben Carson</h3>}
                            // eslint-disable-next-line
                            extra={<a onClick={FlipBen}><ArrowLeftOutlined/> back</a>}
                            style={{background: "#F2F2F2", borderColor: "black", height: "auto"}}
                        >
                            <BioBen />
                        </Card>
                    </ReactCardFlip>
                </Col>
                <Col
                    xl={{span: 8, offset: 2}}
                >
                    <ReactCardFlip isFlipped={flippedMax} flipDirection="horizontal">
                        <img src={image_max} onClick={FlipMax} style={{width: "100%", objectFit: "cover", cursor: "pointer"}} alt=""/>
                        <Card
                            title={<h3 className="h3-content">Max Albert</h3>}
                            // eslint-disable-next-line
                            extra={<a onClick={FlipMax}><ArrowLeftOutlined/> back</a>}
                            style={{background: "#F2F2F2", borderColor: "black", height: "auto"}}
                        >
                            <BioMax />
                        </Card>
                    </ReactCardFlip>
                </Col>
                <Divider style={{borderColor: "#2B2D42", borderWidth: 3, marginTop: "100px"}}/>
            </Row>

            <Row style={{paddingBottom: "100px", background: "#F2F2F2"}}>
                <Col
                    xl={{span: 22, offset: 1}}
                >
                    <h1 className="h1-content">
                        Student tested, Student approved.
                    </h1>
                    <Carousel dots={false}
                              dotPosition="bottom"
                              effect="scrollx"
                              autoplaySpeed={5000}
                              arrows={true}
                              autoplay={true}
                              nextArrow={<RightOutlined />}
                              prevArrow={<LeftOutlined/>}
                    >
                        <div>
                            <Carousel2Content1 />
                        </div>
                        <div>
                            <Carousel2Content2 />
                        </div>
                    </Carousel>
                </Col>
                <Divider style={{borderColor: "#2B2D42", borderWidth: 3, marginTop: "100px"}}/>
            </Row>
            <Row style={{paddingBottom: "100px", background: "#F2F2F2"}}>
                <Col
                    xl={{span: 22, offset: 1}}
                >
                    <Row>
                        <h1 className="h1-centered">
                            10 years of proven results.
                        </h1>
                    </Row>
                    <Row>
                        <img src={image1} className="img-centered" style={{width: "70%"}} alt=""/>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export function Carousel2Content1() {
    return (
        <div>
            <Row>
                <Col span={8} offset={0}>
                    <ReactPlayer
                        className='react-player fixed-bottom'
                        url= {video_sam}
                        width="140%"
                        height="100%"
                        volume={0.5}
                        controls = {true}
                        config={{ file: {
                                attributes: {
                                    controlsList: 'nodownload nofullscreen noremoteplayback'
                                }}}}
                        style={{objectFit: "cover"}}
                    />
                </Col>
                <Col span={12} offset={4}>
                    <p className="p-carousel-2" style={{paddingTop: "35px"}}>
                        Meet Sam, <b>winner of the 2022 Silver Tournament of Champions.</b>
                    </p>
                    <p className="p-carousel-2">
                        Through our coaching and curriculum, countless students have unlocked their true potential,
                        winning some of the most prestigious debate tournaments around the country against teams around the world.
                    </p>
                    <p className="p-carousel-2">
                        Boston Debate Academy offers your child a life-changing opportunity.
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export function Carousel2Content2() {
    return (
        <div>
            <Row>
                <Col span={8}>
                    <ReactPlayer
                        className='react-player fixed-bottom'
                        url= {video_alyssa}
                        width="140%"
                        height="100%"
                        volume={0.5}
                        controls = {true}
                        config={{ file: {
                                attributes: {
                                    controlsList: 'nodownload nofullscreen noremoteplayback'
                                }}}}
                        style={{objectFit: "cover"}}
                    />
                </Col>
                <Col span={12} offset={4}>
                    <p className="p-carousel-2" style={{paddingTop: "50px"}}>
                        Meet Alyssa, a <b>Computer Science major at Cornell University.</b>
                    </p>
                    <p className="p-carousel-2">
                        Debate instruction enhances critical thinking, builds a reservoir of worldly knowledge,
                        and prepares students for the University of their dreams.
                    </p>
                    <p className="p-carousel-2">
                        Boston Debate Academy offers your child unshakable confidence to be the best they can be.
                    </p>
                </Col>
            </Row>
        </div>
    )
}


export function Carousel1Text() {

    return (
        <div>
            <Row>
                <h1 className="h1-carousel">
                    The world's most rigorous debate education.
                </h1>
            </Row>
            <Row>
                <p className="p-carousel">
                    To succeed in the 21st century, students require more than traditional schooling.
                    At Boston Debate Academy, your child will develop talents that prepare them to thrive
                    in an increasingly competitive world.
                </p>
            </Row>
            <Row>
                <Col span={8}>
                    <Button type="primary" block onClick={event =>  window.location.href='/classes'}
                    >
                        Join Us!
                    </Button>
                </Col>
            </Row>
        </div>
    )
}


export function Carousel1Content1() {
    return (
        <div>
            <iframe
                width="100%"
                height="505px"
                src={"https://www.youtube.com/embed/KYNO7cAzuYQ?autoplay=1&start=5&end=59&cc_load_policy=1&cc_lang_pref=en&mute=1"}
                frameBorder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    )
}