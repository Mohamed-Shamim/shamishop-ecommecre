import { useState } from "react";

const Tooltip = ({ text, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="relative inline-block">
            {/* Target element (hoverable) */}
            <div
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                className="cursor-pointer"
            >
                {children}
            </div>

            {/* Tooltip box */}
            {isVisible && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[-45px] mb-2 bg-black/70 text-white text-[12px] px-3 py-1 rounded-md shadow-lg whitespace-nowrap">
                    <div className=""></div>
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;