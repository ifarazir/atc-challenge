import * as React from "react";
const Logo = (
    props: React.SVGProps<SVGSVGElement>
) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1026 532"
        {...props}
    >
        <path d="M773 106c-57.2 9.7-98.2 52.9-108.9 115-3.8 21.7-4.7 44.1-2.5 61.7l.5 4.3h36.4v-23.7c0-30.8 2.9-49.4 10.9-69 12.5-30.4 34.1-49.4 65.2-56.9 9.4-2.3 13.1-2.7 26.9-2.7 22.8 0 39.2 3.8 53.6 12.3 8.5 5 19.9 17.2 26.2 27.8 2.7 4.5 5.5 8.2 6.3 8.2 2.2 0 6.8-2.5 16.6-9.2 9.8-6.5 9.5-5.4 4.2-16-12-23.8-35.1-41.6-63.2-48.7-21-5.3-51.5-6.6-72.2-3.1m-529.8 5.2c-1.1 2.9-2.3 6.4-2.7 7.8-.7 2.4-8.1 23.7-21.7 62.5-3.3 9.3-7 20.1-8.3 24-1.3 3.8-6 17.3-10.5 30-4.5 12.6-10.1 28.6-12.5 35.5s-4.7 13.3-5 14.2c-.7 1.7.5 1.8 16.9 1.8 15.7 0 17.6-.2 18.4-1.8.5-.9 11.2-32.3 23.7-69.7s23.2-69 23.8-70.2c1.2-2.8 4.7-3.7 6.7-1.7.8.8 12.1 33.3 25 72.2l23.6 70.7 18.3.3c16.7.2 18.3.1 17.7-1.4-.3-.9-3.5-10-7-20.3-3.6-10.2-13.7-39.3-22.6-64.6s-19-54.3-22.5-64.5-7.3-21.1-8.5-24.3l-2.1-5.7h-48.8zm172.5-4.5c-.6.6-1 28-.4 28.5.1.1 21.8.5 48.2.8l48 .5.3 75.2.2 75.3h35l.2-75.3.3-75.2 48.3-.3 48.2-.2v-30H530.2c-62.6 0-114.2.3-114.5.7M159.1 305.9c-.6 1-2.8 5.9-5 10.9-3.1 7.2-3.6 9.2-2.5 9.6.9.4 1.8-.4 2.4-1.9.9-2.2 1.5-2.5 6.4-2.5 4.7 0 5.6.3 7.1 2.6 1.1 1.7 2 2.3 2.6 1.7 1.2-1.2-6.7-20.9-8.7-21.7-.8-.3-1.8.3-2.3 1.3m4.1 8.1 1.6 3.9-2.9.6c-1.6.4-3.3.4-3.8.1-.9-.6 1.7-8.6 2.8-8.6.3 0 1.3 1.8 2.3 4m287.2-8.5c-.3.6-.3 5.4-.2 10.6l.3 9.4 6.1.3c5.4.3 6.5 0 9.2-2.3 5.6-4.7 5.2-13.9-.7-16.9-3.6-1.8-14.2-2.6-14.7-1.1m13.8 4.2c1.2 1.1 1.8 3.1 1.8 5.9 0 5-2.1 7-8 7.6l-3.5.3-.3-8.4-.3-8.4 4.3.7c2.3.4 5 1.4 6 2.3m36.1-4.9c-2.2.3-2.3.7-2.3 10.8V326h7c5.1 0 7-.4 7-1.3s-1.6-1.3-5.2-1.2h-5.3V320c0-3.5 0-3.5 4.8-3.8 2.6-.2 4.7-.7 4.7-1.2s-2.1-1-4.7-1.2c-4.6-.3-4.8-.4-4.8-3.3s.2-3 5.3-3.3c2.8-.2 5.2-.7 5.2-1.2 0-.9-8-1.7-11.7-1.2m81.2-.2c-.5.1-2.3.5-3.8.8-1.6.4-3.6 2-4.7 3.9-4.8 7.9-.5 16.7 8.2 16.7 4.4-.1 7.8-1.8 7.8-4 0-.8-.7-1-2.2-.5-1.3.4-3.9.9-5.9 1.2-3 .4-3.9.1-5.3-1.8-2-2.9-2-6.1-.1-9.8 1.8-3.6 5.7-4.7 9.7-2.6 3.4 1.6 4.4 1.4 3.5-.8-.6-1.5-5.4-3.6-7.2-3.1m89.2.1c-.3.4-2.5 5.4-5 11-4.1 9.1-4.4 10.3-2.7 10.3 1 0 2.2-.9 2.5-2 .5-1.7 1.5-2 6-2 4.6 0 5.5.3 7 2.6 1 1.6 2 2.3 2.6 1.7s-.8-5-3.4-11.3c-4.1-9.7-5.8-12.3-7-10.3m3.2 8.5c1.6 4.8 1.4 5.3-1.8 5.5-3.9.3-4.4-.7-2.6-5.1 1.9-4.5 3-4.5 4.4-.4M198 313c0 7.3.3 8.3 2.5 10.5 1.8 1.9 3.5 2.5 6.5 2.5s4.7-.6 6.5-2.5c2.2-2.2 2.5-3.2 2.5-10.5 0-6.1-.3-8-1.4-8-1 0-1.5 2.1-1.8 8.1-.5 8.8-1.2 9.9-6.5 9.9-4.3 0-5.3-2.1-5.3-10.9 0-5.6-.3-7.1-1.5-7.1s-1.5 1.6-1.5 8m45-7.1c0 1.1 3.2 2.3 5.1 1.9 1.1-.2 1.5 1.8 1.9 8.7.4 7.5.8 9 2.3 9.3s1.7-.7 1.7-9.3v-9.6l3.2.3c1.8.2 3.3-.2 3.5-1 .4-.9-1.8-1.2-8.6-1.2-5 0-9.1.4-9.1.9m73 .1c0 .5 1.5 1 3.4 1h3.4l.7 8.7c.7 10 1 11.3 2.5 11.3.6 0 1-3.8 1-10v-10h3.5c1.9 0 3.5-.5 3.5-1 0-.6-3.7-1-9-1s-9 .4-9 1m45 10c0 9.3.2 10.9 1.5 10.4 1-.4 1.5-2 1.5-5 0-4.9 1-5.5 3.3-2.2 2.9 4.4 5.8 6.8 8.2 6.8 1.6 0 2.5-.6 2.5-1.5 0-.8-.9-1.5-1.9-1.5-2.5 0-6.9-5.3-4.9-5.9 4.5-1.4 6-5.9 3.2-9.9-1.3-1.9-2.4-2.2-7.5-2.2H361zm10.3-7.3c.4.2.7 1.5.7 2.8 0 2.5-3.4 4-6.4 2.9-1.6-.6-2.2-5.4-1-6.7.7-.6 4.9 0 6.7 1m36.5 5c-5.3 12.6-5.2 12.3-3.4 12.3.8 0 2-.9 2.6-2 .8-1.6 2.1-2 6-2 4.1 0 5.1.4 6.8 2.7 1.8 2.4 2.2 2.6 2.7 1.1.4-.9 0-3.2-.9-5-.8-1.8-2.6-6-3.9-9.3-3.5-9.1-5.4-8.7-9.9 2.2m6.3 4.5c-3.7 1.1-4.5-.4-2.6-4.8l1.6-3.9 1.8 4 1.8 4zm202.1-3.1c.2 8.3.6 10.2 2 11 1.5.8 1.7.3 2-4.3l.3-5.3 5.3-.3 5.2-.3.2 3.3c.1 1.8.2 4.1.1 5 0 1.1.8 1.8 1.9 1.8 1.6 0 1.8-.9 1.8-8.3 0-8.6-.7-12.7-2.1-12.7-.4 0-1.1 1.9-1.4 4.3l-.7 4.3-5.1-.1h-5.2l-.3-4.3c-.3-3.4-.7-4.2-2.3-4.2-2 0-2 .5-1.7 10.1m92.8.4V326h6.5c5 0 6.5-.3 6.5-1.4s-1.4-1.6-4.7-1.8l-4.8-.3-.3-8.8c-.2-6.8-.6-8.7-1.7-8.7-1.2 0-1.5 2-1.5 10.5m40.6-6.3c-.3 2.4-.5 7-.3 10.3l.2 6 6.8.3c5.5.2 6.7 0 6.7-1.3 0-1.1-1.2-1.5-5-1.5h-5v-9c0-7.2-.3-9-1.4-9-1 0-1.7 1.5-2 4.2m40-1.6c-.4 1.5-.4 6.2 0 10.5l.7 7.9h6.9c4.4 0 6.7-.4 6.3-1-.3-.6-2.8-1-5.6-1H793v-4.1c0-4 .1-4 3-3.4 3.7.8 7-.2 7-2.1 0-1-1.3-1.4-5-1.4-4.9 0-5-.1-5-3s.1-3 5-3c2.8 0 5-.5 5-1 0-.6-2.8-1-6.4-1-6.1 0-6.4.1-7 2.6m41.4 7.9c0 8.7.3 10.5 1.5 10.5s1.5-1.5 1.5-7.5c0-4.1.4-7.5.8-7.5s1.5 1.3 2.5 2.9C840 318.6 847 327 848 327c.6 0 1-4.5 1-11 0-9-.3-11-1.5-11-1.1 0-1.5 1.8-1.7 7.7l-.3 7.8-5.9-7.8c-3.2-4.2-6.5-7.7-7.2-7.7-1.1 0-1.4 2.2-1.4 10.5m52.1-9.1c-5.8 3.2-6.9 11.9-2.2 16.7 2.7 2.7 3.4 2.9 10 2.6l7.1-.2v-3.7c0-5.7-.6-6.4-5-6-3.9.4-4.7 2.2-.9 2.2 1 0 1.9.6 1.9 1.3 0 4.1-8.8 5.3-11.4 1.5-4.9-6.9 2.1-15.6 9.9-12.4 2.4 1.1 3.7 1.2 4.1.4 2-3.2-8.6-5.1-13.5-2.4m42.9 9.1V326h7c5.4 0 7-.3 7-1.4s-1.3-1.4-5.2-1.3l-5.3.2V320c0-3.5 0-3.5 4.8-3.8 2.8-.2 4.7-.8 4.7-1.5 0-.8-1.7-1.2-4.7-1.3-4.5 0-4.8-.2-5.1-2.7-.3-2.6-.1-2.7 4-2.8 2.4-.1 4.9-.1 5.6 0 .6.1 1.2-.5 1.2-1.4 0-1.2-1.4-1.5-7-1.5h-7zm-763 26.7c-.6 1.3-6.6 18.3-13.4 37.8l-12.3 35.5 18 .3c13.8.2 18.2-.1 18.8-1 .5-.7 2.4-6 4.3-11.8s7.3-21.7 12-35.4c4.7-13.6 8.6-25.4 8.6-26.2 0-1.1-3.2-1.4-17.5-1.4-17.2 0-17.6 0-18.5 2.2m176-1.3c0 1 19.8 59.3 23.3 68.6l2.3 6 18.6.3 18.6.2-2.3-7.2c-1.3-4-5.1-15-8.4-24.3-3.2-9.4-8.1-23.2-10.8-30.8l-4.8-13.7h-18.2c-10.1 0-18.3.4-18.3.9M512 378v38h35v-76h-35zm164-37.5c0 1.5 6.8 13.9 11.5 21.1 18.1 27.2 46.5 46.2 80 53.4 12.8 2.7 38.9 3.7 53.2 2.1 28.6-3.3 55.2-16.4 70.8-34.7 10.2-12 15.1-20.4 21-36.2l2.4-6.2h-33.5l-3.4 6.5c-7.1 13.8-18.7 25-32.5 31.6-30.5 14.7-74.8 12-101.6-6.1-8.7-5.9-18.7-16-24.3-24.8l-4.7-7.2h-19.4c-10.7 0-19.5.2-19.5.5" />
    </svg>
);
export default Logo;
