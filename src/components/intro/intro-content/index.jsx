import React from "react";

import hand from "../../../images/hand.png";
import myself from "../../../images/SAVE_20230715_011059-removebg-preview.png";

import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helper";

import "./style.scss";
import { BsForwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I am</span>
                        </span>
                        <span className="big-text">Ashish Sagar</span>
                    </h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form.
                    </p>
                    <CallToAction
                        text="Contact Me"
                        action={() => scrollToSection("contact")}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={myself}
                        alt="myself"
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsForwardFill />
                        </div>
                        <div className="text">Good Designer</div>
                    </div>
                    <div className="highlights vertical">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>4k+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
