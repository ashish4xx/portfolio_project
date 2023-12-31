import React from "react";

import logo from "../../../images/img.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helper";

import "./style.scss";

const Navigation = () => {
    return (
        <div className="top-navigation-bar">
            <div className="app-logo">
                <img
                    src={logo}
                    alt="logo-image"
                />
            </div>
            <div className="navigation">
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection("skills")}
                >
                    Skills
                </span>
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection("portfolio")}
                >
                    Portfolio
                </span>
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection("blogs")}
                >
                    Blogs & Articles
                </span>
                <CallToAction
                    text="Contact Me"
                    action={() => scrollToSection("contact")}
                />
            </div>
        </div>
    );
};

export default Navigation;
