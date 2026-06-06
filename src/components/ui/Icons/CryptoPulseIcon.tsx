export const CryptoPulseIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="92"
            viewBox="0 0 92 92"
            fill="none"
            style={{ display: 'block'}}
        >
            {/* main background */}
            <path
                d="M55.375 19.125h-18.75c-9.665 0-17.5 7.835-17.5 17.5v18.75c0 9.665 7.835 17.5 17.5 17.5h18.75c9.665 0 17.5-7.835 17.5-17.5v-18.75c0-9.665-7.835-17.5-17.5-17.5Z"
                fill="url(#b)"
            />

            {/* subtle border (no opacity mess) */}
            <path
                d="M55.375 19.125h-18.75c-9.665 0-17.5 7.835-17.5 17.5v18.75c0 9.665 7.835 17.5 17.5 17.5h18.75c9.665 0 17.5-7.835 17.5-17.5v-18.75c0-9.665-7.835-17.5-17.5-17.5Z"
                stroke="#FFFFFF"
                strokeOpacity="0.12"
                strokeWidth="1.5"
            />

            {/* main arc */}
            <path
                d="M31 37.875c3.5-5.75 9.125-8.75 15.5-8.75 9.375 0 17 7.625 17 17s-7.625 17-17 17c-6.625 0-12.25-3.625-15.25-8.75"
                stroke="#FFFFFF"
                strokeOpacity="0.6"
                strokeWidth="3"
                strokeLinecap="round"
            />

            {/* chart line */}
            <path
                d="M31.625 50h6.125l3.875-8.5 5.25 16 4.375-10h9.5"
                stroke="url(#d)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* dot */}
            <circle cx="61" cy="47.5" r="2.6" fill="#fff" />

            {/* gradients */}
            <defs>
                <linearGradient
                    id="b"
                    x1="26"
                    y1="21"
                    x2="68.5"
                    y2="71"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6366F1" />
                    <stop offset="0.52" stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#A855F7" />
                </linearGradient>

                <linearGradient
                    id="d"
                    x1="32"
                    y1="50"
                    x2="61"
                    y2="50"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFFFFF" />
                    <stop offset="1" stopColor="#C4B5FD" />
                </linearGradient>
            </defs>
        </svg>
    );
};