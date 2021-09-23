import React, { useState, useEffect } from "react";
import './index.css'


const Test = (props: any) => {
    const [crossX, setData] = useState(0); //滚动的数据

    useEffect(() => {
        

    });

    useEffect(() => {
        let timer: any;
        timer = setInterval(() =>{
            if(crossX < -100){
                setData(0)
            } else {
                setData(crossX-0.008)
            }
        });
        return () => {
            clearTimeout(timer);
        };
    });

    const boxStyle:React.CSSProperties = {
        transform: "translate("+crossX+"%, 0%) translate3d(0px, 0px, 0px)"
    }
    return(
        <div className="test">
            <div className="projectDetail-next-outer">
                <div className="projectDetail-next">
                    <div className="projectDetail-next-1"
                    style={boxStyle}>
                        <span className="projectDetail-npn">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-np">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-npn">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-np">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-npn">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-np">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-npn">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-np">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-npn">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-np">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-npn">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-np">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-npn">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-np">&nbsp;NXGEN&nbsp;</span>
                    </div>
                    <div className="projectDetail-next-2"
                    style={boxStyle}>
                        <span className="projectDetail-npn">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-np">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-npn">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-np">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-npn">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-np">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-npn">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-np">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-npn">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-np">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-npn">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-np">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-npn">&nbsp;NXGEN&nbsp;</span>
                        <span className="projectDetail-np">&nbsp;NXGEN&nbsp;</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Test;

