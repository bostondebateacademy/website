import {Button, Card, Col, Row} from "antd";
import React from 'react'
import {IconPrivacyPolicy, IconFS, IconPen, IconProg, IconWeighing} from "../../../../icons/icons";


export default function CoachingContentMD() {
    return (
        <div style={{background: "#F2F2F2"}}>
            <Row style={{paddingTop: "100px"}}>
                <Col
                    md={{span: 22, offset: 1}}
                    sm={{span: 22, offset: 1}}
                    xs={{span: 22, offset: 1}}
                >
                    <h1 className="h1-centered">
                        Make every round a 30-point round.
                    </h1>
                    <h2 className="h2-centered" style={{marginTop: "-50px"}}>
                        Get individualized assistance from world-class, highly experienced coaches.
                    </h2>
                </Col>
            </Row>
            <Row style={{paddingTop: "50px"}}>
                <Col
                    md={{span: 22, offset: 1}}
                    sm={{span: 22, offset: 1}}
                    xs={{span: 22, offset: 1}}
                >
                    <Card
                        title={<h3 className="h3-card">Starter Kit ($37.50/hr)</h3>}
                        bordered={false}
                        // eslint-disable-next-line
                        style={{background: "#2b2d42", height: "auto", borderRadius: "20px", overflow: "hidden", position: "relative"}}
                    >
                        <h4 className="h4-card" style={{color: "white"}}>
                            Equip yourself with the barebones tools needed to find success in competition.
                            Designed to give you everything you need to improve.

                        </h4>
                        <p className="p-card" style={{color: "white", paddingTop: "30px"}}>
                            <b>Features include:</b>
                            <ul className="ul-custom">
                                <li>1-hour sessions of private coaching (minimum 4 hours)</li>
                                <li>Case-writing assistance and argument development</li>
                                <li>Case-specific frontline development</li>
                                <li>Ready-made responses to the most common arguments</li>
                                <li>Optional practice round judging with extensive feedback</li>
                                <li>Custom-made drills</li>
                            </ul>
                        </p>
                        <Button type="primary" ghost block onClick={event =>  window.location.href='/classes'}
                                style={{width: "60%", marginLeft: "20%", marginRight: "20%"}}
                        >
                            Select this kit
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row style={{paddingTop: "50px"}}>
                <Col
                    md={{span: 22, offset: 1}}
                    sm={{span: 22, offset: 1}}
                    xs={{span: 22, offset: 1}}
                >
                    <Card
                        title={<h3 className="h3-card">Pro Kit ($50/hr)</h3>}
                        bordered={false}
                        // eslint-disable-next-line
                        style={{background: "#2b2d42", height: "auto", borderRadius: "20px", overflow: "hidden", position: "relative"}}
                    >
                        <h4 className="h4-card" style={{color: "white"}}>
                            For debaters wanting to go to the next level by debaters who have been there.
                            Designed to achieve your greatest competitive ambitions.
                        </h4>
                        <p className="p-card" style={{color: "white", paddingTop: "30px"}}>
                            <b>Features include:</b>
                            <ul className="ul-custom">
                                <li>1-hour sessions of private coaching (minimum 4 hours)</li>
                                <li>Case-writing assistance and argument development</li>
                                <li>Case-specific frontline development</li>
                                <li>Ready-made responses to the most common arguments</li>
                                <li>Optional practice round judging with extensive feedback</li>
                                <li>Custom-made drills</li>
                                <li>Research assistance</li>
                                <li>Help with rebuttal overviews, summary weighing, and collapsing strategies</li>
                                <li>Crossfire sparring to improve lay appeal and case-clarity</li>
                                <li>3 rounds of case editing</li>
                            </ul>
                        </p>
                        <Button type="primary" ghost block onClick={event =>  window.location.href='/classes'}
                                style={{width: "60%", marginLeft: "20%", marginRight: "20%"}}
                        >
                            Select this kit
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row style={{paddingTop: "50px"}}>
                <Col
                    md={{span: 22, offset: 1}}
                    sm={{span: 22, offset: 1}}
                    xs={{span: 22, offset: 1}}
                >
                    <Card
                        title={<h3 className="h3-card">Skills Kits ($250 each)</h3>}
                        bordered={false}
                        // eslint-disable-next-line
                        style={{background: "#2b2d42", height: "auto", borderRadius: "20px", overflow: "hidden", position: "relative"}}
                    >
                        <h4 className="h4-card" style={{color: "white"}}>
                            Hone in on the critical areas of improvement. Our skills kits offer a plethora of
                            custom-tailored packages aimed at what you need.
                        </h4>
                        <p className="p-card" style={{color: "white", paddingTop: "30px"}}>
                            <b>Kits include:</b>
                            <ul className="ul-custom">
                                <li>Case writing kit</li>
                                <li>First Speaker kit</li>
                                <li>Second Speaker kit</li>
                                <li>Crossfire kit</li>
                                <li>Weighing kit</li>
                                <li>Progressive arguments kit</li>
                            </ul>
                        </p>
                        <Button type="primary" ghost block onClick={event =>  window.location.href='/classes'}
                                style={{width: "60%", marginLeft: "20%", marginRight: "20%"}}
                        >
                            Select this kit
                        </Button>
                    </Card>
                </Col>
            </Row>

            <Row style={{paddingTop: "150px"}}>
                <Col
                    md={{span: 22, offset: 1}}
                    sm={{span: 22, offset: 1}}
                    xs={{span: 22, offset: 1}}
                >
                    <h1 className="h1-centered">
                        Learn more about our skills kits
                    </h1>
                    <h2 className="h2-centered" style={{marginTop: "-50px"}}>
                        Each kit provides 3, 1.5-hour classes aimed at what you need most.
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col
                    md={{span: 22, offset: 1}}
                    sm={{span: 22, offset: 1}}
                    xs={{span: 22, offset: 1}}
                >
                    <Card
                        title={
                            <div style={{marginBottom: "-10px"}}>
                                <IconPen style={{display: "inline"}}/>
                                <h3 className="h3-content" style={{display: "inline", fontWeight: "bold", marginLeft: "10px"}}>Case Writing Kit</h3>
                            </div>
                        }
                        bordered={false}
                        // eslint-disable-next-line
                        style={{background: "#FFFFFF", borderColor: "black", height: "auto", borderRadius: "20px",
                            overflow: "hidden", boxShadow: "5px 8px 24px 5px rgba(255, 209, 81, 0.2)" }}
                    >
                        <p className="p-card">
                            The Case Writing Kit will teach you everything about how to perfect case writing.
                        </p>
                        <p className="p-card">
                            You will learn the fundamentals of strategic case writing, including: Argument selection,
                            narrative, preemption, baiting opponents with shiny objects, forced concessions,
                            clash minimizing and maximizing strategies, best paraphrasing practices, evidence flow,
                            and how to employ frameworks and observations. Finally, the Case Writing Kit teaches
                            you how to write contentions in a manner that is clear and well organized, easy for
                            judges to understand, and impossible for opponents to defeat.
                        </p>
                    </Card>
                </Col>
            </Row>
            <Row style={{paddingTop: "50px"}}>
                <Col
                    md={{span: 22, offset: 1}}
                    sm={{span: 22, offset: 1}}
                    xs={{span: 22, offset: 1}}
                >
                    <Card
                        title={
                            <div style={{marginBottom: "-10px"}}>
                                <IconFS style={{display: "inline"}}/>
                                <h3 className="h3-content" style={{display: "inline", fontWeight: "bold", marginLeft: "10px"}}>First Speaker Kit</h3>
                            </div>
                        }
                        bordered={false}
                        // eslint-disable-next-line
                        style={{background: "#FFFFFF", borderColor: "black", height: "auto", borderRadius: "20px",
                            overflow: "hidden", boxShadow: "5px 8px 24px 5px rgba(255, 209, 81, 0.2)" }}
                    >
                        <p className="p-card">
                            The First Speaker Kit will teach you everything about how to be the strongest 1st speaker.
                        </p>
                        <p className="p-card">
                            You will learn how to make better use of intangibles to win rounds, such as speed, intonation,
                            and credibility as the round unfolds. In addition, the First Speaker Kit will help you
                            learn how to use flex-cases, how to use cross fires as a springboard to win rounds,
                            how to deliver the perfect summary speech with an adaptive and efficient collapsing
                            strategy, how to use weighing that is layered, time efficient, and well-warranted,
                            and how to maximize partner collaboration in-round.
                        </p>
                    </Card>
                </Col>
            </Row>
            <Row style={{paddingTop: "50px"}}>
                <Col
                    md={{span: 22, offset: 1}}
                    sm={{span: 22, offset: 1}}
                    xs={{span: 22, offset: 1}}
                >
                    <Card
                        title={
                            <div style={{marginBottom: "-10px"}}>
                                <IconFS style={{display: "inline"}}/>
                                <h3 className="h3-content" style={{display: "inline", fontWeight: "bold", marginLeft: "10px"}}>Second Speaker Kit</h3>
                            </div>
                        }
                        bordered={false}
                        // eslint-disable-next-line
                        style={{background: "#FFFFFF", borderColor: "black", height: "auto", borderRadius: "20px",
                            overflow: "hidden", boxShadow: "5px 8px 24px 5px rgba(255, 209, 81, 0.2)" }}
                    >
                        <p className="p-card">
                            The Second Speaker Kit will teach you everything about how to be the strongest 2nd speaker.
                        </p>
                        <p className="p-card">
                            You will learn how to prepare and deliver comprehensive blocks, how to generate effective
                            overviews that don’t waste time, how and when to prioritize logic over evidence,
                            how to balance offense and defense, how to isolate and refute evidence, how to respond
                            to fringe arguments, how to frontline efficiently in 2nd rebuttal, how to set up your
                            partner’s summary in 2nd crossfire, and how to deliver a final focus with the magic
                            of ballot directive language.
                        </p>
                    </Card>
                </Col>
            </Row>
            <Row style={{paddingTop: "50px"}}>
                <Col
                    md={{span: 22, offset: 1}}
                    sm={{span: 22, offset: 1}}
                    xs={{span: 22, offset: 1}}
                >
                    <Card
                        title={
                            <div style={{marginBottom: "-10px"}}>
                                <IconPrivacyPolicy style={{display: "block", paddingTop: "100px"}}/>
                                <h3 className="h3-content" style={{display: "inline", fontWeight: "bold", marginLeft: "10px"}}>Crossfire Kit</h3>
                            </div>
                        }
                        bordered={false}
                        // eslint-disable-next-line
                        style={{background: "#FFFFFF", borderColor: "black", height: "auto", borderRadius: "20px",
                            overflow: "hidden", boxShadow: "5px 8px 24px 5px rgba(255, 209, 81, 0.2)" }}
                    >
                        <p className="p-card">
                            The Crossfire Kit will teach you everything about how to master crossfire.
                        </p>
                        <p className="p-card">
                            You will learn why crossfire is the most important “speech,” how to use BDA’s one-of-a-kind
                            14 question toolkit, how to use content from crossfire in subsequent speeches, how to
                            properly ask evidence questions, how to get opponents to walk into traps, how to appear
                            respectful but cunning and domineering at the same time, how to master the art of follow
                            up questions, the art of avoiding questions, and why silence is your friend.
                        </p>
                    </Card>
                </Col>
            </Row>
            <Row style={{paddingTop: "50px"}}>
                <Col
                    md={{span: 22, offset: 1}}
                    sm={{span: 22, offset: 1}}
                    xs={{span: 22, offset: 1}}
                >
                    <Card
                        title={
                            <div style={{marginBottom: "-10px"}}>
                                <IconWeighing style={{display: "inline"}}/>
                                <h3 className="h3-content" style={{display: "inline", fontWeight: "bold", marginLeft: "10px"}}>Weighing Kit</h3>
                            </div>
                        }
                        bordered={false}
                        // eslint-disable-next-line
                        style={{background: "#FFFFFF", borderColor: "black", height: "auto", borderRadius: "20px",
                            overflow: "hidden", boxShadow: "5px 8px 24px 5px rgba(255, 209, 81, 0.2)" }}
                    >
                        <p className="p-card">
                            The Weighing Kit will teach you everything about how to weigh effectively in a debate round.
                        </p>
                        <p className="p-card">
                            You will learn which weighing mechanisms actually matter, how to use weighing mechanisms
                            efficiently and effectively, how to utilize comparative language to embed weighing,
                            how to operationalize overviews, middleviews, and underviews as weighing tools,
                            how to warrant weighing, how to respond to weighing, how to adapt weighing to a
                            judge, and how to use weighing to force a judge to vote for you no matter what.
                        </p>
                    </Card>
                </Col>
            </Row>
            <Row style={{paddingTop: "50px"}}>
                <Col
                    md={{span: 22, offset: 1}}
                    sm={{span: 22, offset: 1}}
                    xs={{span: 22, offset: 1}}
                >
                    <Card
                        title={
                            <div style={{marginBottom: "-10px"}}>
                                <IconProg style={{display: "inline"}}/>
                                <h3 className="h3-content" style={{display: "inline", fontWeight: "bold", marginLeft: "10px"}}>Progressive Kit</h3>
                            </div>
                        }
                        bordered={false}
                        // eslint-disable-next-line
                        style={{background: "#FFFFFF", borderColor: "black", height: "auto", borderRadius: "20px",
                            overflow: "hidden", boxShadow: "5px 8px 24px 5px rgba(255, 209, 81, 0.2)" }}
                    >
                        <p className="p-card">
                            The Progressive Kit will teach you everything about how to debate progressive arguments.
                        </p>
                        <p className="p-card">
                            Finally, you will learn the ins and outs of progressive arguments, such as paraphrasing theory,
                            Capitalism Kritiks, and Fem Frameworks. You will learn the proper structure to present
                            such arguments, the best standards and voters to use, and how to effectively warrant
                            your standards and voters. Finally, you learn how to easily respond to any progressive
                            argument  and return to substance ASAP in your round.
                        </p>
                    </Card>
                </Col>
            </Row>
            <Row style={{paddingTop: "50px"}}>
                <Button
                    className="btn-signup"
                    size="large"
                    onClick={event =>  window.location.href='/classes'}
                    style={{width: "20%", minWidth: "300px", height: "60px", fontSize: "14pt", borderRadius: "10px", marginBottom: "50px"}}
                >
                    Ready to win? Select a kit now!
                </Button>
            </Row>
        </div>
    );
}

