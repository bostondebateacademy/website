import type {RadioChangeEvent, BadgeProps} from 'antd';
import {Col, Row, Button, Radio, Badge, Calendar} from "antd";
import type { Moment } from 'moment';
import React, {useState} from "react";
import image1 from "../../../../images/classes1.png";
import {Link} from "react-router-dom";


export default function ClassesContentLG() {
    const [slide, setSlide] = useState(0);

    const handleSlideChange = ({ target: { value } }: RadioChangeEvent) => {
        console.log(value)
        setSlide(parseInt(value));
    };


    const getListData = (value: Moment) => {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    { type: 'warning', content: 'Only 5 slots left' },
                    { type: 'success', content: 'Class is available' },
                ];
                break;
            case 9:
                listData = [
                    { type: 'success', content: 'All slots free' },
                ];
                break;
            case 10:
                listData = [
                    { type: 'warning', content: 'Only 5 slots left' },
                    { type: 'success', content: 'Class is available' },
                    { type: 'error', content: 'Class is full' },
                ];
                break;
            case 15:
                listData = [
                    { type: 'warning', content: 'Only 5 slots left' },
                    { type: 'success', content: 'Class is available' },
                    { type: 'error', content: 'Class is full' },
                    { type: 'error', content: 'Class is full' },
                    { type: 'error', content: 'Class is full' },
                    { type: 'error', content: 'Class is full' },
                ];
                break;
            default:
        }
        return listData || [];
    };

    const getMonthData = (value: Moment) => {
        if (value.month() === 8) {
            return 1394;
        }
    };

    const CalFunc: React.FC = () => {
        const monthCellRender = (value: Moment) => {
            const num = getMonthData(value);
            return num ? (
                <div className="notes-month">
                    <section>{num}</section>
                    <span>Backlog number</span>
                </div>
            ) : null;
        };

        const dateCellRender = (value: Moment) => {
            const listData = getListData(value);
            return (
                <ul className="events">
                    {listData.map(item => (
                        <li key={item.content}>
                            <Badge status={item.type as BadgeProps['status']} text={item.content} />
                        </li>
                    ))}
                </ul>
            );
        };

        return <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />;
    };

    return (
        <div>
            <Row>
                <Col
                    lg={{span: 20, offset: 2}}
                    md={{span: 20, offset: 2}}
                    sm={{span: 22, offset: 1}}
                    xs={{span: 22, offset: 1}}
                >
                    <h1 className="h1-carousel" style={{color: "white", paddingTop: "100px", paddingBottom: "50px"}}>
                        Join the most prestigous debate academy in North America.
                    </h1>
                    <Button
                        type="primary" block
                        onClick={event =>  window.open('https://wd84sdlr.paperform.co/', "_blank")}
                        style={{width: "50%", minWidth: "150px", marginLeft: "25%", fontSize: "16pt"}}
                    >
                        Join Us!
                    </Button>
                    <p className="p-content2" style={{color: "white", paddingTop: "30px"}}>
                        Classes start october 10th.
                    </p>
                    <p style={{color: "white", textAlign: "center", marginTop: "-20px"}}>
                        (want a try-out first? Click "join us" and let us know!)
                    </p>
                </Col>
            </Row>
            <Row style={{paddingTop: "50px"}}>
                <Col
                    lg={{span: 20, offset: 2}}
                    md={{span: 20, offset: 2}}
                    sm={{span: 22, offset: 1}}
                    xs={{span: 22, offset: 1}}
                >
                    <img src={image1} style={{width: "100%", objectFit: "cover"}} alt=""/>
                </Col>
            </Row>
            <Row style={{background: "#F2F2F2", paddingTop: "100px"}}>
                <Col
                    lg={{span: 20, offset: 2}}
                    md={{span: 20, offset: 2}}
                    sm={{span: 22, offset: 1}}
                    xs={{span: 22, offset: 1}}
                >
                    <Row>
                            <h1 className="h1-centered">
                                Class Information
                            </h1>
                            <h2 className="h2-centered" style={{marginTop: "-50px"}}>
                                We offer 4 levels for Middle School (MS) and 2 levels for High School (HS).
                            </h2>
                    </Row>
                    <Row>
                        <Radio.Group onChange={handleSlideChange} value={slide.toString()} style={{ marginBottom: 8 }}>
                            <Radio.Button value="0" style={{marginRight: "10px"}}>
                                MS: Intro
                            </Radio.Button>
                            <Radio.Button value="1" style={{marginRight: "10px"}}>
                                MS: Novice
                            </Radio.Button>
                            <Radio.Button value="2" style={{marginRight: "10px"}}>
                                MS: Junior Varsity
                            </Radio.Button>
                            <Radio.Button value="3" style={{marginRight: "10px"}}>
                                MS: Varsity
                            </Radio.Button>
                            <Radio.Button value="4" style={{marginRight: "10px"}}>
                                HS: Intro
                            </Radio.Button>
                            <Radio.Button value="5" style={{marginRight: "10px"}}>
                                HS: Varsity
                            </Radio.Button>
                        </Radio.Group>
                            <p style={{fontSize: "14pt"}}>
                                <Link to={{pathname: "/why-bda", hash: "#program"}}> Why BDA classes over others?</Link>
                            </p>
                    </Row>
                    <Row>
                        <Col
                            lg={{span: 24}}
                            md={{span: 24}}
                            sm={{span: 24}}
                            xs={{span: 24}}
                        >
                            {slide === 0 && <div>
                                <CarouselContent1 />
                            </div>}
                            {slide === 1 && <div>
                                <CarouselContent2 />
                            </div>}
                            {slide === 2 && <div>
                                <CarouselContent3 />
                            </div>}
                            {slide === 3 && <div>
                                <CarouselContent4 />
                            </div>}
                            {slide === 4 && <div>
                                <CarouselContent5 />
                            </div>}
                            {slide === 5 && <div>
                                <CarouselContent6 />
                            </div>}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{background: "#F2F2F2", paddingBottom: "100px"}}>
                <Col
                    lg={{span: 20, offset: 2}}
                    md={{span: 20, offset: 2}}
                    sm={{span: 22, offset: 1}}
                    xs={{span: 22, offset: 1}}
                >
                    <CalFunc />
                </Col>
            </Row>
        </div>
    );
}

export function CarouselContent1() {
    return (
        <div>
            <p className="p-content3">
                This class is for Middle School students with no experience in debate and public speaking.
                Rather than being thrown into a confusing world full of jargon and technical rules, Boston Debate Academy’s first level focuses on:
            </p>
            <ul style={{fontSize: "14pt"}}>
                <li>learning the basics of proper public speaking</li>
                <li>learning how to construct an argument</li>
                <li>the basics of writing and speaking persuasively</li>
                <li>the basics of evidence and how to research properly</li>
                <li>how to respond logically to an argument</li>
                <li>how to view all issues from both sides</li>
                <li>And more!</li>
            </ul>
        </div>
    )
}

export function CarouselContent2() {
    return (
        <div>
            <p className="p-content3">
                This class is for Middle School students with limited experience in debate and no competitive track record.
                Students at this level are ready to begin learning the structure of official debating. Boston Debate Academy’s second level focuses on:
            </p>
            <ul style={{fontSize: "14pt"}}>
                <li>how to speak clearly and confidently</li>
                <li>how to establish reasoning and significance for an argument</li>
                <li>how to incorporate evidence and cohesive writing into a well-structured point</li>
                <li>the basics of the rules of debate, such as Public Forum</li>
                <li>how to speak for minutes on end presenting, attacking, or defending an argument</li>
                <li>learning about real-world issues</li>
                <li>And more!</li>
            </ul>
        </div>
    )
}

export function CarouselContent3() {
    return (
        <div>
            <p className="p-content3">
                This class is for Middle School students with moderate experience in debate and limited competitive success.
                Students at this level are ready to begin taking the next steps in their debate career,
                both academically and competitively. Boston Debate Academy’s third level focuses on
            </p>
            <ul style={{fontSize: "14pt"}}>
                <li>learning how to speak impromptu at length with a cohesive structure</li>
                <li>how to write advanced arguments that seamlessly incorporate evidence, reasoning, and impactfulness</li>
                <li>how to research and understand complicated statistical and historical evidence from academic journals</li>
                <li>the fine details of the rules and strategy of debate, such as Public Forum</li>
                <li>how to attack arguments from a multitude of clear, strategic angles</li>
                <li>learning the nuances of complex real-world issues</li>
                <li>And more!</li>
            </ul>
        </div>
    )
}

export function CarouselContent4() {
    return (
        <div>
            <p className="p-content3">
                This class is for Middle School students with significant experience in debate and past competitive success.
                Students at this level are the cream of the crop, ready to achieve proficiency in various debate
                subjects, and win prestigious debate tournaments. Boston Debate Academy’s fourth level focuses on:
            </p>
            <ul style={{fontSize: "14pt"}}>
                <li>how to perfect the art of speaking by becoming passionate, adaptive, and astute on any topic.</li>
                <li>how to perfect the art of argumentation by adopting advanced strategies, air-tight logic, and incorporation of collegiate-level empirical evidence</li>
                <li>how to independently research any subject and understand what evidence is relevant and what is not</li>
                <li>the advanced concepts of debate, such as meta-weighing or Progressive arguments in Public Forum</li>
                <li>learning how to choose the best arguments from an array of options at the right time for the right audience</li>
                <li>developing a mastery of various real-world socio-political topics.</li>
                <li>And more!</li>
            </ul>
        </div>
    )
}

export function CarouselContent5() {
    return (
        <div>
            <p className="p-content3">
                This class is for High School students with limited experience in debate. Students will receive
                an expedited version of Beginner and Novice classes, aimed at transforming High Schoolers
                quickly and effectively into intelligent, confident speakers. Boston Debate Academy’s Intro
                level focuses on:
            </p>
            <ul style={{fontSize: "14pt"}}>
                <li>how to speak clearly and confidently</li>
                <li>how to construct a clear, logical argument</li>
                <li>how to research and utilize it to strength argumentation</li>
                <li>the ins and outs of debate rules and norms, such as Public Forum</li>
                <li>how to attack arguments from a variety of angles</li>
                <li>learning the nuances of complex real-world issues</li>
                <li>And more!</li>
            </ul>
        </div>
    )
}

export function CarouselContent6() {
    return (
        <div>
            <p className="p-content3">
                This class is for High School students with prior experience in debate. Students will receive a highly
                competitive education, aimed at producing the world’s next generation of passionate thinkers and
                successful speakers. Boston Debate Academy’s Varsity level focuses on:
            </p>
            <ul style={{fontSize: "14pt"}}>
                <li>debating consistently, competitively, and successfully at regional and national tournaments such as the Harvard Invitational</li>
                <li>how to perfect the art of speaking by becoming passionate, adaptive, and astute on any topic</li>
                <li>how to perfect the art of argumentation by adopting advanced strategies, air-tight logic, and incorporation of collegiate-level empirical evidence</li>
                <li>how to independently research any subject and understand what evidence is relevant and what is not</li>
                <li>the advanced concepts of debate, such as meta-weighing or Progressive arguments in Public Forum</li>
                <li>developing a mastery of various real-world socio-political topics.</li>
                <li>And more!</li>
            </ul>
        </div>
    )
}