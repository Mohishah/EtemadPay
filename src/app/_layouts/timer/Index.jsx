"use client";

import { useEffect } from "react";
import { Timer } from "@common/timer";

const TimerModule = () => {
    useEffect(() => {
        Timer();
    }, []);

    return (
        <>
        {/* timer */}
        <div id="timer" className="mil-timer mil-mb-90">
            <div className="mil-timer-item">
                <span id="days" className="mil-timer-number">00</span>
                <h6 className="mil-text-xs mil-upper mil-light">روز</h6>
            </div>
            <div className="mil-timer-item">
                <span id="hours" className="mil-timer-number">00</span>
                <h6 className="mil-text-xs mil-upper mil-light">ساعت</h6>
            </div>
            <div className="mil-timer-item">
                <span id="minutes" className="mil-timer-number">00</span>
                <h6 className="mil-text-xs mil-upper mil-light">دقیقه</h6>
            </div>
            <div className="mil-timer-item">
                <span id="seconds" className="mil-timer-number">00</span>
                <h6 className="mil-text-xs mil-upper mil-light">ثانیه</h6>
            </div>
        </div>
        {/* timer end */}
        </>
    );
};
export default TimerModule;