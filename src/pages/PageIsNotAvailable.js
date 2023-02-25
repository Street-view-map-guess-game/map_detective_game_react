import React from "react";

import "../styles/404ErrorPageStyle.css"

function FailPage() {
    return (
        <div className="error-container">
            <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ flex: 1, paddingLeft: 10, paddingRight: 10, fontSize: "10em" }} >4</p>
                <div className="compass-container">
                    <div className="compass">
                        <div className="arrow"></div>
                    </div>
                </div>
                <p style={{ flex: 1, paddingLeft: 10, paddingRight: 10, fontSize: "10em" }}>4</p>
            </div>
            <p style={{ fontSize: "30px" }}>Oops! Page is Not Available.</p>
        </div>
    )
}

export default FailPage;