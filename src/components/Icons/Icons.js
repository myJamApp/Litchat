export const GoogleIcon = ({ height = '3.2rem', width = '3.2rem', className }) => {
    return (
        <svg
            className={className}
            height={height}
            width={width}
            viewBox="0 0 20 20"
            fit=""
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
        >
            <path
                d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"
                fill="#4285F4"
            ></path>
            <path
                d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"
                fill="#34A853"
            ></path>
            <path
                d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"
                fill="#FBBC05"
            ></path>
            <path
                d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"
                fill="#EA4335"
            ></path>
        </svg>
    );
};

export const FacebookIcon = ({ height = '4rem', width = '4rem', className }) => {
    return (
        <svg className={className} height={height} width={width} fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 0 0-1 15.931V12H7v-2h2V8a2.722 2.722 0 0 1 2.846-3 13.044 13.044 0 0 1 1.643.1v1.909h-.979c-.925 0-1.51.49-1.51 1.129V10h2.25L13 12h-2v5.931A8 8 0 0 0 10 2z"></path>
        </svg>
    );
};