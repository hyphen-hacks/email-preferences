<template>

  <main class="home page">
    <h1 v-if="!valid"><span>Unsubscribe</span></h1>
    <p v-if="!valid" class="invalidText">Uh oh, it looks like your email is invalid. Please <a href="mailto:support@hyphen-hacks.com">contact support</a> for more
      information.</p>
    <a v-if="!valid" class="button" href="mailto:support@hyphen-hacks.com">Contact Support</a>
    <h1 v-if="!success && valid"><span>Unsubscribe</span></h1>
    <svg v-if="!success&& valid" id="08e565a9-d273-44a5-8e62-fb3ff03af726" data-name="Layer 1"
         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="960.22" height="727.85"
         viewBox="0 0 960.22 727.85">
      <defs>
        <linearGradient id="47567f34-21cc-4103-b039-7b07a02a692b" x1="224.88" y1="440.26" x2="438.9" y2="440.26"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="gray" stop-opacity="0.25"/>
          <stop offset="0.54" stop-color="gray" stop-opacity="0.12"/>
          <stop offset="1" stop-color="gray" stop-opacity="0.1"/>
        </linearGradient>
        <linearGradient id="9327c94c-6e79-4ecb-b0e2-b824d910a5fb" x1="636.83" y1="740.55" x2="636.83" y2="204.8"
                        xlink:href="#47567f34-21cc-4103-b039-7b07a02a692b"/>
      </defs>
      <title>newsletter</title>
      <ellipse cx="516.58" cy="627.85" rx="350" ry="100" fill="#f5f5f5"/>
      <path
          d="M969.58,324.92s-62,62-27,154-60,245-60,245,1-.15,2.91-.48c127.34-22.48,190.61-168.12,119.8-276.31C979,406.91,957.35,359.72,969.58,324.92Z"
          transform="translate(-120 -86.08)" fill="#dc8f2a"/>
      <path d="M969.58,324.92s-35,76,0,138,6,236-87,261" transform="translate(-120 -86.08)" fill="none" stroke="#535461"
            stroke-miterlimit="10" stroke-width="2"/>
      <path
          d="M1080,575.69s-70.75-11.27-77.2,52.14-136,72.19-136,72.19.84.58,2.43,1.62c107,70.24,209.29,44.74,193.88-48.53C1057.34,618.44,1057.8,583.61,1080,575.69Z"
          transform="translate(-120 -86.08)" fill="#dc8f2a"/>
      <path
          d="M1080,575.69s-70.75-11.27-77.2,52.14-136,72.19-136,72.19.84.58,2.43,1.62c107,70.24,209.29,44.74,193.88-48.53C1057.34,618.44,1057.8,583.61,1080,575.69Z"
          transform="translate(-120 -86.08)" fill="#f5f5f5" opacity="0.2"/>
      <path d="M1080,575.69s-54.92,12.06-50.41,62S948,747.47,866.76,700" transform="translate(-120 -86.08)" fill="none"
            stroke="#535461" stroke-miterlimit="10" stroke-width="2"/>
      <path
          d="M271.4,86.16c-8.06-.28-16.32,0-23.88,2.82-20.57,7.67-30.32,32.76-27.15,54.49s16.21,40.6,29.74,57.89,28.19,34.36,35.61,55c3.7,10.31,5.43,21.86,1.67,32.15-5.8,15.87-23.29,24.74-40.08,26.58s-33.65-1.75-50.5-3c-7.07-.5-14.34-.56-21,1.76-7.31,2.53-13.4,7.69-19,13.07-21.85,21.1-39.34,49.9-36.51,80.14,3.2,34.28,31.74,61.38,63,75.91,10.35,4.82,21.3,8.72,30.41,15.6,24,18.14,29.39,52.13,27,82.14s-10.53,60.05-6,89.8c5.33,34.6,28.92,65.85,60.74,80.45,28.35,13,63.83,12.19,89-6.2,12.27-9,21.55-21.41,29.62-34.28a295.87,295.87,0,0,0,29.45-61.88c3.51-10.31,6.81-21.4,15-28.57,5-4.41,11.48-6.88,17.89-8.8,19.32-5.78,39.67-7.37,59.17-12.51S574.7,584,585.3,566.87c15-24.31,8-55.4,8.07-84,.12-65.16,39.11-123.5,53.5-187,4.7-20.76,6.45-43.73-4.05-62.24C635.68,221,623.65,212,611,205,583.2,189.56,551.6,182.69,520.51,176c-43.21-9.28-95.68-10.48-129.17-40.5C359.2,106.7,315.23,86.16,271.4,86.16Z"
          transform="translate(-120 -86.08)" fill="#dc8f2a" opacity="0.2"/>
      <g opacity="0.5">
        <path
            d="M428.14,338.37a150.56,150.56,0,0,0-7.29-46.26l-12-37.21c0-.62,0-1.23,0-1.84.37-23.85-18.22-35.75-25.38-34.46-7.33,1.32-27.67-8.88-27.67-8.88V210a38.1,38.1,0,0,1-3.76-5.14,32.62,32.62,0,0,0,6.71-46.18,14.33,14.33,0,0,0,4.83-6.48c1.66-4.67.39-10-2.31-14.16a27.44,27.44,0,0,0-4-4.77,50.64,50.64,0,0,0-7.46-6.1c-6.67-4.62-14-8.59-22-10a9.16,9.16,0,0,0-4.21,0,17.45,17.45,0,0,0-3.41,1.84c-5.48,3.12-12.3,1.77-18.62,1.44s-14,1.44-16,7.37c-.62,1.83-.58,3.81-1,5.69-1,4.6-4.55,8.17-7.29,12s-4.79,9-2.51,13.16c.78,1.4,2,2.69,2,4.29,0,1.15-.68,2.18-1,3.28-.69,2.5.61,5,2.61,6.81a11.09,11.09,0,0,0,3,2.29c3.17,1.62,6.82,2.12,10.05,3.62a16.51,16.51,0,0,1,4.38,3,17.22,17.22,0,0,1,4.76,12.43l.67.07c0,.2,0,.39,0,.59.7.08,1.44.15,2.17.18A33,33,0,0,0,307,200q-.34,1.28-.77,2.6c-2.35,1.63-21.57,14.43-43.43,11.35-23.33-3.29-36.67,98.71-36.67,98.71a116.66,116.66,0,0,0-1.26,17.62c-.1,15,3.05,34.63,20.6,31.74l9.33-3.07v50.45s1.33,13.82-3.33,23,14.67,5.92,14.67,5.92.74.77,2.1,2.08l-.43,1.21.57.58a132.29,132.29,0,0,1-10.23,25.09l.55.28c-.35.67-.55,1-.55,1s7.18,3.67,17.06,8.4c7.94,26.84,25.32,89,19.6,100.84l.16.34h0c1.07,2.22,7.05,15.31,5.84,27.3-1.09,10.72,13.75,59.43,19.29,77.12l-2.62.53,9.33,33.56-2,21.72s-11.33,30.27,15.33,24.35,19.33-30.27,19.33-30.27l.67-49.36s-2.57-1.43-5.74-2.8c-2.18-5.89-6.93-19.81-6.93-29.44,0-12.5-8.67-66.47-8.67-66.47v-.11l0-.21V584l-.05-.72v-.12c0-.67-.11-1.59-.19-2.71v-.06c-1-14.59-4-64.16-1.81-90a57.75,57.75,0,0,1,6-3.58c6.49,16.4,23.22,60.71,22.15,79.3-1.33,23-.33,4.94,0,2,.1-.91.17.19.2,2.66,0,.45,0,.95,0,1.48s0,1.12,0,1.73,0,1.27,0,2q0,.52,0,1.06,0,1.08,0,2.26,0,.59,0,1.2c0,2,0,4.22-.07,6.53q0,.69,0,1.4c0,1.41,0,2.85-.07,4.31,0,2-.08,3.94-.12,5.95-.1,4.5-.23,9.05-.39,13.31q0,.71-.05,1.41-.05,1.4-.11,2.74t-.12,2.62q-.06,1.27-.13,2.47c-.05.94-.11,1.84-.16,2.7l-3.62-.52-.77,8.32a90.46,90.46,0,0,0,5,39c1.24,3.42,2.2,6.25,2.41,7.26.67,3.29,0,27,0,27s4,30.93,22.67,25c8.4-2.67,12.48-10.79,14.43-18.93a46.94,46.94,0,0,0-2.31-28.27c-2.65-6.66-5.36-16-3.45-23.22,3.33-12.5,3.33-30.27,3.33-30.27l-2.06-.29a32.84,32.84,0,0,0,1.39-3s-.67-45.41,5.33-51.33c3.3-3.26,3-11.09,2-17.49a119.67,119.67,0,0,1-1-28c.41-4.81,1-9,1.69-10.49,1.76-3.48,3.52-38.56-4.27-55.44l1.6-.5-.25-1.24.25-.08a98,98,0,0,0,4,9.21,3.66,3.66,0,0,0,1.33.66c21.59-3.79,22.46-23.94,21.26-34.94.91.44,1.41.72,1.41.72l2-29c2.05-4.63,2.81-10.54,2.76-16.93C439.1,368.33,428.14,338.37,428.14,338.37ZM404.34,420.8c-1.48-12.63-3.53-24.52-3.53-24.52l-10-35.54V347.8L406.67,407Z"
            transform="translate(-120 -86.08)" fill="url(#47567f34-21cc-4103-b039-7b07a02a692b)"/>
      </g>
      <path
          d="M359.38,614.93l-.74,8.13a89.47,89.47,0,0,0,4.85,38.15c1.19,3.35,2.12,6.11,2.32,7.1.64,3.22,0,26.37,0,26.37s3.86,30.23,21.87,24.44c8.1-2.6,12-10.55,13.92-18.5A46.44,46.44,0,0,0,399.36,673c-2.56-6.51-5.18-15.66-3.33-22.69,3.22-12.22,3.22-29.58,3.22-29.58Z"
          transform="translate(-120 -86.08)" fill="#5a5773"/>
      <path
          d="M340.09,475.37s25.08,61.1,23.79,83.6-.32,4.82,0,1.93c.57-5.15,0,56-1.93,63,0,0,26.37,19.29,36.66-6.43,0,0-.64-44.37,5.14-50.16,3.18-3.18,2.87-10.84,1.93-17.09a118.45,118.45,0,0,1-1-27.33c.39-4.7.93-8.84,1.63-10.25,1.93-3.86,3.86-47.59-7.72-59.81Z"
          transform="translate(-120 -86.08)" fill="#605d82"/>
      <path
          d="M365.17,623.93c1.93-7.07,2.5-68.18,1.93-63-.32,2.89-1.29,20.58,0-1.93s-23.79-83.6-23.79-83.6l56.11-21.58c-.26-.33-.53-.64-.8-.93l-58.52,22.51s25.08,61.1,23.79,83.6-.32,4.82,0,1.93c.57-5.15,0,56-1.93,63,0,0,10.53,7.7,20.88,6.88C373.63,630.12,365.17,623.93,365.17,623.93Z"
          transform="translate(-120 -86.08)" opacity="0.1"/>
      <path
          d="M318.22,673.45l9,32.8-1.93,21.22s-10.93,29.58,14.79,23.79,18.65-29.58,18.65-29.58l.64-48.23s-10.29-5.79-14.79-5.14S318.22,673.45,318.22,673.45Z"
          transform="translate(-120 -86.08)" fill="#5a5773"/>
      <path
          d="M273.85,459.94s29.58,95.82,22.51,110.61c0,0,7.07,14.15,5.79,27s20.58,81.67,20.58,81.67l32.16-5.79s-7.72-19.29-7.72-31.51-8.36-65-8.36-65-7.07-96.47,1.29-106.76Z"
          transform="translate(-120 -86.08)" fill="#605d82"/>
      <g opacity="0.1">
        <path
            d="M337.6,478c-5.33,21.84.56,102.21.56,102.21s8.36,52.73,8.36,65c0,9.33,4.49,22.77,6.62,28.61l1.74-.31s-7.72-19.29-7.72-31.51-8.36-65-8.36-65S333.42,503.55,337.6,478Z"
            transform="translate(-120 -86.08)"/>
        <path d="M296.36,570.55l.16.33c.05-.33.1-.68.13-1A7.11,7.11,0,0,1,296.36,570.55Z"
              transform="translate(-120 -86.08)"/>
        <path d="M338.64,473.32a9.47,9.47,0,0,1,1.45-3.09l-66.24-10.29s.39,1.25,1.06,3.48Z"
              transform="translate(-120 -86.08)"/>
      </g>
      <path d="M428.19,425.21s9.65,36-19.29,41.16a3.52,3.52,0,0,1-1.29-.64s-16.72-32.8-3.86-45.66Z"
            transform="translate(-120 -86.08)" fill="#a1616a"/>
      <path d="M309.86,186s1.93,27-19.29,39.87,45,48.23,45,48.23l34.73-55.31S355.52,220.7,346.52,195Z"
            transform="translate(-120 -86.08)" fill="#a1616a"/>
      <path
          d="M295.71,227.78s32.8,68.17,62.38,3.86L403.75,458S333,479.87,332.37,490.16,261,463.8,261,463.8s15.43-28.3,11.58-45.66S295.71,227.78,295.71,227.78Z"
          transform="translate(-120 -86.08)" opacity="0.1"/>
      <path
          d="M295.71,226.49s32.8,68.17,62.38,3.86l45.66,226.37S333,478.59,332.37,488.88,261,462.51,261,462.51s15.43-28.3,11.58-45.66S295.71,226.49,295.71,226.49Z"
          transform="translate(-120 -86.08)" fill="#e1e7ef"/>
      <path d="M327.87,691.46s-8.36-18.65,10.93-18.65,16.08,16.72,16.08,16.72Z" transform="translate(-120 -86.08)"
            fill="#5a5773"/>
      <path d="M371.6,643.22s-7.72-19.94,11.58-20.58,9.65,18,9.65,18Z" transform="translate(-120 -86.08)"
            fill="#5a5773"/>
      <path
          d="M355.2,212s19.61,10,26.69,8.68,25.72,10.93,24.44,35.37l11.62,36.46a148.9,148.9,0,0,1,7,45.21h0s16.72,46.3,7.72,66.88l-1.93,28.3s-14.79-8.36-30.23-5.79L404.4,404,387,338.39l-28.94-70.1Z"
          transform="translate(-120 -86.08)" opacity="0.1"/>
      <path
          d="M355.2,210.73s19.61,10,26.69,8.68,25.72,10.93,24.44,35.37l11.62,36.46a148.9,148.9,0,0,1,7,45.21h0s16.72,46.3,7.72,66.88l-1.93,28.3s-14.79-8.36-30.23-5.79l3.86-23.15L387,337.1,358.09,267Z"
          transform="translate(-120 -86.08)" fill="#67647e"/>
      <path
          d="M387.68,288.87v72.67l9.65,34.73s6.43,37.94,4.5,49.52-32.8,14.15-41.16,4.5-3.86-92-3.86-92L355.2,237.74l1.29-3.86Z"
          transform="translate(-120 -86.08)" opacity="0.1"/>
      <path d="M389,285.66v72.67l9.65,34.73s6.43,37.94,4.5,49.52-32.8,14.15-41.16,4.5-3.86-92-3.86-92l-1.61-120.58Z"
            transform="translate(-120 -86.08)" fill="#67647e"/>
      <path
          d="M259.38,346.11l20.58,64-9.65,27.33s45.66,48.23,74.6,25.08c0,0,3.22-98.4-3.22-121.55s-37.3-101-37.3-101L298,219.42l-34.08,19.29Z"
          transform="translate(-120 -86.08)" opacity="0.1"/>
      <path
          d="M257.77,342.89v63s1.29,13.51-3.22,22.51,14.15,5.79,14.15,5.79,45.66,48.23,74.6,25.08c0,0,3.22-98.4-3.22-121.55s-37.3-101-37.3-101l-6.43-20.58-34.08,19.29Z"
          transform="translate(-120 -86.08)" fill="#67647e"/>
      <path
          d="M307.61,204.95S288,219.42,265.49,216.2s-35.37,96.47-35.37,96.47-8.36,51.45,18.65,46.95l59.81-19.94s-12.86-13.51-10.93-30.87L268.7,320.38,270,265.08Z"
          transform="translate(-120 -86.08)" opacity="0.1"/>
      <path d="M231.4,311.38s-8.36,51.45,18.65,46.95l59.81-19.94S297,324.89,298.93,307.52L270,319.1Z"
            transform="translate(-120 -86.08)" opacity="0.1"/>
      <path d="M297.51,314.3s20.07-26.39,34.85-13.72-29.55,35.89-29.55,35.89Z" transform="translate(-120 -86.08)"
            fill="#a1616a"/>
      <path
          d="M307.61,203.66S288,218.13,265.49,214.91s-35.37,96.47-35.37,96.47-8.36,51.45,18.65,46.95l59.81-19.94s-12.86-13.51-10.93-30.87L268.7,319.1,270,263.79l32.8-27Z"
          transform="translate(-120 -86.08)" fill="#67647e"/>
      <path
          d="M347.16,196.26l-36.66-9s1.91,2.16-.32,10.61c5.9,6.77,13.15,15.76,22.83,15.76a32,32,0,0,0,19.22-6.37A57.82,57.82,0,0,1,347.16,196.26Z"
          transform="translate(-120 -86.08)" opacity="0.1"/>
      <circle cx="212.37" cy="94.11" r="32.16" fill="#a1616a"/>
      <path
          d="M344.56,166.23c7.46-1.27,15.66-4.58,18.16-11.72,1.6-4.57.38-9.77-2.23-13.84s-6.45-7.2-10.41-10c-6.43-4.52-13.52-8.4-21.26-9.76a8.73,8.73,0,0,0-4.06,0,16.76,16.76,0,0,0-3.29,1.8c-5.29,3.05-11.87,1.73-18,1.41s-13.48,1.41-15.41,7.2c-.6,1.79-.56,3.72-1,5.56-1,4.5-4.39,8-7,11.75s-4.62,8.82-2.42,12.86c.75,1.37,2,2.63,2,4.19a13,13,0,0,1-1,3.21c-.91,3.32,1.74,6.67,4.8,8.25s6.58,2.07,9.7,3.54a17,17,0,0,1,9.47,15.74c2.84.33,6.15.5,8.07-1.62.86-.95,1.28-2.22,2.06-3.23,1-1.32,2.56-2.1,3.84-3.16,6.73-5.53,1.95-13.17,5.76-19.13,2-3.07,5.18-2.13,8.4-2.08A74.22,74.22,0,0,0,344.56,166.23Z"
          transform="translate(-120 -86.08)" opacity="0.1"/>
      <path
          d="M343.92,165.59c7.46-1.27,15.66-4.58,18.16-11.72,1.6-4.57.38-9.77-2.23-13.84s-6.45-7.2-10.41-10c-6.43-4.52-13.52-8.4-21.26-9.76a8.73,8.73,0,0,0-4.06,0,16.76,16.76,0,0,0-3.29,1.8c-5.29,3.05-11.87,1.73-18,1.41s-13.48,1.41-15.41,7.2c-.6,1.79-.56,3.72-1,5.56-1,4.5-4.39,8-7,11.75s-4.62,8.82-2.42,12.86c.75,1.37,2,2.63,2,4.19a13,13,0,0,1-1,3.21c-.91,3.32,1.74,6.67,4.8,8.25s6.58,2.07,9.7,3.54A17,17,0,0,1,302,195.82c2.84.33,6.15.5,8.07-1.62.86-.95,1.28-2.22,2.06-3.23,1-1.32,2.56-2.1,3.84-3.16,6.73-5.53,1.95-13.17,5.76-19.13,2-3.07,5.18-2.13,8.4-2.08A74.22,74.22,0,0,0,343.92,165.59Z"
          transform="translate(-120 -86.08)" fill="#4a4347"/>
      <path d="M382.85,273.76s7.07,36.66,3.86,50.81a47.15,47.15,0,0,0,.84,24.92" transform="translate(-120 -86.08)"
            opacity="0.1"/>
      <path d="M268.56,289.19s-3.08,24.44,2.05,29.58" transform="translate(-120 -86.08)" opacity="0.1"/>
      <path d="M448.13,590.38a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z" transform="translate(-120 -86.08)"/>
      <g opacity="0.5">
        <path d="M910,415.63v-.83L637.16,205a1,1,0,0,0-1.19,0L363.12,414.8V740h.52v.52H910.53V415.32Z"
              transform="translate(-120 -86.08)" fill="url(#9327c94c-6e79-4ecb-b0e2-b824d910a5fb)"/>
      </g>
      <polygon points="780.58 644.85 252.58 644.85 252.58 330.85 516.58 127.85 780.58 330.85 780.58 644.85"
               fill="#fff"/>
      <polygon points="761.58 626.24 271.58 626.24 271.58 334.84 516.58 146.45 761.58 334.84 761.58 626.24"
               fill="#e0e0e0"/>
      <rect x="465.58" y="260.92" width="309" height="393" transform="translate(-215.73 86.13) rotate(-14.69)"
            fill="#dc8f2a"/>
      <rect x="363.58" y="199.85" width="309" height="393" fill="#f5f5f5"/>
      <polygon points="255.08 331.35 519.08 488.35 255.08 645.35 255.08 331.35" opacity="0.05"/>
      <polygon points="253.08 331.35 517.08 488.35 253.08 645.35 253.08 331.35" fill="#fff"/>
      <polygon points="779.08 331.35 515.08 488.35 779.08 645.35 779.08 331.35" opacity="0.05"/>
      <polygon points="781.08 331.35 517.08 488.35 781.08 645.35 781.08 331.35" fill="#fff"/>
      <polygon points="253.08 640.35 517.08 434.35 781.08 640.35 253.08 640.35" opacity="0.05"/>
      <polygon points="253.08 645.35 517.08 439.35 781.08 645.35 253.08 645.35" fill="#fff"/>
      <path d="M426.73,755.28s-13.26-45,2.49-78.14a71.09,71.09,0,0,0,5.75-44.6,119.57,119.57,0,0,0-6.31-20.93"
            transform="translate(-120 -86.08)" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="2"/>
      <path d="M438.45,590.67c0,5.52-10,21.51-10,21.51s-10-16-10-21.51a10,10,0,1,1,20,0Z"
            transform="translate(-120 -86.08)" fill="#dc8f2a"/>
      <path d="M455,621.23c-3,4.63-20.08,12.63-20.08,12.63s.31-18.86,3.31-23.49A10,10,0,0,1,455,621.23Z"
            transform="translate(-120 -86.08)" fill="#dc8f2a"/>
      <path d="M454.24,673.44c-4.93,2.48-23.71.77-23.71.77s9.79-16.12,14.71-18.6a10,10,0,1,1,9,17.84Z"
            transform="translate(-120 -86.08)" fill="#dc8f2a"/>
      <path d="M444.8,712.83c-4.44,3.28-23.24,4.76-23.24,4.76s6.92-17.54,11.36-20.82a10,10,0,0,1,11.88,16.06Z"
            transform="translate(-120 -86.08)" fill="#dc8f2a"/>
      <path d="M413.91,634.92c4,3.84,22.39,7.83,22.39,7.83s-4.51-18.31-8.47-22.15a10,10,0,0,0-13.92,14.33Z"
            transform="translate(-120 -86.08)" fill="#dc8f2a"/>
      <path d="M403.45,681.13c4.93,2.48,23.71.77,23.71.77s-9.79-16.12-14.71-18.6a10,10,0,0,0-9,17.84Z"
            transform="translate(-120 -86.08)" fill="#dc8f2a"/>
      <path d="M399.45,727.43c4.44,3.28,23.24,4.76,23.24,4.76s-6.92-17.54-11.36-20.82a10,10,0,1,0-11.88,16.06Z"
            transform="translate(-120 -86.08)" fill="#dc8f2a"/>
      <rect x="381.58" y="217.85" width="124" height="10" fill="#dc8f2a" opacity="0.5"/>
      <rect x="381.58" y="257.85" width="268" height="10" fill="#dc8f2a" opacity="0.5"/>
      <rect x="381.58" y="283.85" width="268" height="10" fill="#dc8f2a" opacity="0.5"/>
      <rect x="381.58" y="309.85" width="268" height="10" fill="#dc8f2a" opacity="0.4"/>
      <rect x="381.58" y="335.85" width="268" height="10" fill="#dc8f2a" opacity="0.4"/>
      <rect x="381.58" y="361.85" width="153" height="10" fill="#dc8f2a" opacity="0.3"/>
      <rect x="381.58" y="387.85" width="209" height="10" fill="#dc8f2a" opacity="0.3"/>
    </svg>
    <p v-if="!success && valid">If you ended up on our mailing list by accident or wish to no longer receive our
      occasional, non
      spam, emails about upcoming Hyphen-Hacks events please click the button below.</p>
    <svg v-if="success && valid" class="success" id="b49c538b-d2f0-4d56-8d1f-7f4005552b2e" data-name="Layer 1"
         xmlns="http://www.w3.org/2000/svg"
         width="809.83511" height="872.15034" viewBox="0 0 809.83511 872.15034"><title>completed</title>
      <circle cx="436.83511" cy="499.15034" r="373" fill="#f2f2f2"/>
      <path
          d="M414.10287,447.11594a30.11371,30.11371,0,0,0,3.98291-15.266c0-13.79652-8.54358-24.98081-19.08256-24.98081s-19.08256,11.18429-19.08256,24.98081a30.11411,30.11411,0,0,0,3.98291,15.266,31.248,31.248,0,0,0,0,30.53213,31.248,31.248,0,0,0,0,30.53208,31.248,31.248,0,0,0,0,30.53208,30.11408,30.11408,0,0,0-3.98291,15.266c0,13.79652,8.54353,24.98081,19.08256,24.98081s19.08256-11.18429,19.08256-24.98081a30.11368,30.11368,0,0,0-3.98291-15.266,31.248,31.248,0,0,0,0-30.53208,31.248,31.248,0,0,0,0-30.53208,31.248,31.248,0,0,0,0-30.53213Z"
          transform="translate(-195.08244 -13.92483)" fill="#3f3d56"/>
      <ellipse cx="203.92076" cy="387.393" rx="19.08256" ry="24.9808" fill="#3f3d56"/>
      <ellipse cx="203.92076" cy="356.86091" rx="19.08256" ry="24.9808" fill="#3f3d56"/>
      <path
          d="M470.43871,161.84489a91.61081,91.61081,0,0,0,7.10658-10.46092l-50.141-8.23491,54.22885.4033a91.566,91.566,0,0,0,1.74556-72.426L410.62418,108.8677l67.09658-49.32086a91.41255,91.41255,0,1,0-150.971,102.298,91.45842,91.45842,0,0,0-10.42451,16.66946l65.0866,33.81447-69.40046-23.292a91.46011,91.46011,0,0,0,14.73837,85.83669,91.40575,91.40575,0,1,0,143.68892,0,91.41808,91.41808,0,0,0,0-113.02862Z"
          transform="translate(-195.08244 -13.92483)" fill="#dc8f2a"/>
      <path
          d="M307.1885,218.3592a91.01343,91.01343,0,0,0,19.56129,56.51431,91.40575,91.40575,0,1,0,143.68892,0C482.68982,259.32067,307.1885,208.10008,307.1885,218.3592Z"
          transform="translate(-195.08244 -13.92483)" opacity="0.1"/>
      <path
          d="M900.66632,759.46878c-23.65362,84.287-206.16663,162.4611-400.25283,107.99432S174.1644,646.51415,197.818,562.22713s194.16663-54.46109,388.25283.00569S924.32,675.18177,900.66632,759.46878Z"
          transform="translate(-195.08244 -13.92483)" fill="#3f3d56"/>
      <path
          d="M900.66632,759.46878c-23.65362,84.287-206.16663,162.4611-400.25283,107.99432S174.1644,646.51415,197.818,562.22713s194.16663-54.46109,388.25283.00569S924.32,675.18177,900.66632,759.46878Z"
          transform="translate(-195.08244 -13.92483)" opacity="0.1"/>
      <ellipse cx="549.24217" cy="660.84796" rx="158.51081" ry="365"
               transform="translate(-430.51054 997.17954) rotate(-74.32419)" fill="#3f3d56"/>
      <ellipse cx="294.83511" cy="652.15034" rx="107" ry="31" opacity="0.1"/>
      <path
          d="M621.67318,487.68009l-135.333,135.33319-56.881-56.88163a19.44416,19.44416,0,0,0-27.49819-.00013l-2.04342-3.05635c-7.59348,7.59341-5.55011,22.9612,2.04335,30.55464l73.80253,73.80235a14.83616,14.83616,0,0,0,20.976.00546l152.41792-152.259c7.59835-7.59043,10.35467-21.50914,2.76019-29.10343h0C644.326,478.48381,629.26463,480.08863,621.67318,487.68009Z"
          transform="translate(-195.08244 -13.92483)" fill="#57b894"/>
      <path
          d="M621.67318,487.68009l-135.333,135.33319-56.881-56.88163a19.44416,19.44416,0,0,0-27.49819-.00013l-2.04342-3.05635c-7.59348,7.59341-5.55011,22.9612,2.04335,30.55464l73.80253,73.80235a14.83616,14.83616,0,0,0,20.976.00546l152.41792-152.259c7.59835-7.59043,10.35467-21.50914,2.76019-29.10343h0C644.326,478.48381,629.26463,480.08863,621.67318,487.68009Z"
          transform="translate(-195.08244 -13.92483)" opacity="0.1"/>
      <path
          d="M621.67318,481.68009l-135.333,135.33319-56.881-56.88163a19.44416,19.44416,0,0,0-27.49819-.00013l0,0a19.44414,19.44414,0,0,0,0,27.49826l73.80253,73.80235a14.83616,14.83616,0,0,0,20.976.00546l152.41792-152.259a19.43931,19.43931,0,0,0,.007-27.49867l0,0A19.43931,19.43931,0,0,0,621.67318,481.68009Z"
          transform="translate(-195.08244 -13.92483)" fill="#57b894"/>
      <path
          d="M687.57455,712.05039s-12.10288,3.63087-18.15432,10.8926c0,0-10.8926,4.84115-17.54918,3.63086s-18.75947,10.89259-9.07716,14.52346,68.98642,13.31317,70.19671,10.28745,1.21029-33.88807,1.21029-33.88807Z"
          transform="translate(-195.08244 -13.92483)" fill="#575a89"/>
      <path
          d="M782.64455,706.85365s-11.30486,5.64474-16.027,13.83337c0,0-9.90564,6.63052-16.67112,6.575s-16.62329,13.93673-6.4631,15.86045,70.24662,1.33431,70.92231-1.85367-4.59574-33.5968-4.59574-33.5968Z"
          transform="translate(-195.08244 -13.92483)" fill="#575a89"/>
      <circle cx="512.15929" cy="255.46267" r="27.23148" fill="#ffb9b9"/>
      <path
          d="M729.32949,273.92608s3.02572,20.5749,8.472,22.99548a40.2077,40.2077,0,0,1,10.28745,7.26173L732.96035,311.445l-29.652-1.81544s2.42057-13.31317-1.81544-19.96975S729.32949,273.92608,729.32949,273.92608Z"
          transform="translate(-195.08244 -13.92483)" fill="#ffb9b9"/>
      <path
          d="M785.60789,371.35428s13.91831,35.7035,0,70.19671-19.96976,39.93951-19.96976,39.93951l-4.236-45.3858,4.87082-4.4189s2.94952-13.76938.55221-21.92185,1.23355-33.56852,1.23355-33.56852Z"
          transform="translate(-195.08244 -13.92483)" fill="#ffb9b9"/>
      <path
          d="M681.52311,448.81272s-17.54918,39.93951-15.73375,59.30412S681.52311,609.1759,681.52311,609.1759,679.70768,714.471,685.154,714.471s31.46749,9.6823,31.46749,3.02572,5.4463-166.41462,5.4463-166.41462,30.86235,70.19671,33.88807,75.643,22.39033,90.77161,29.04691,90.77161,27.23149-6.05144,25.41606-10.28745S788.02847,608.57076,776.53073,584.365s-9.07716-115.58251-9.07716-115.58251L748.089,426.42239Z"
          transform="translate(-195.08244 -13.92483)" fill="#2f2e41"/>
      <path
          d="M699.07229,256.98205s-16.944-1.21029-18.15433-5.4463-3.63086-7.86687-2.42057-7.86687,1.81543-3.02572,1.81543-3.02572,1.21029-.60514,1.81543,0,1.21029-4.236,1.21029-4.236.60514-1.81543,1.21029-.60514.60514.60514,1.21029-1.21029S689.39,231.566,689.39,231.566s11.49774.60514,13.31317-1.81543,22.39033-.60515,26.62634,2.42057,22.99547,13.91832,19.96975,22.99548-13.91831,29.04691-13.91831,32.07263-4.236,2.42058-5.4463-.60514-10.89259-6.65659-10.89259-8.472-5.4463-18.75946-8.472-17.54918-6.65658,10.8926-7.86687,9.07717S699.07229,256.98205,699.07229,256.98205Z"
          transform="translate(-195.08244 -13.92483)" fill="#3f3d56"/>
      <path
          d="M782.58217,339.88679s-24.81091-36.30865-32.07264-38.12408-23.60062-6.65658-23.60062-6.65658-16.33889,2.42057-21.18,4.84115-22.99547,6.65658-23.60062,13.91831,4.84116,76.8533,1.81543,83.50988-13.31316,70.19672-8.472,68.98643,1.21029-16.944,22.39033-17.54918,32.67778-13.31317,40.54465,1.81543,30.2572,26.62634,30.2572,26.62634a146.40876,146.40876,0,0,1,2.42058-14.52346c1.81543-8.472-4.84115-29.04691-4.84115-29.04691s.60514-47.80638,3.02572-53.25268S782.58217,339.88679,782.58217,339.88679Z"
          transform="translate(-195.08244 -13.92483)" fill="#575a89"/>
      <path
          d="M773.505,338.6765l9.07716,1.21029s-.60515,12.10288,1.81543,15.73374,6.65659,22.39033,4.236,22.99548-24.20576,4.236-24.20576,4.236l-1.21029-27.83663Z"
          transform="translate(-195.08244 -13.92483)" fill="#575a89"/>
      <path
          d="M675.47167,360.46169s-6.05144,39.33436-9.07716,44.17551-18.15433,72.61729-18.15433,72.61729-24.87763,34.596-12.77475,33.99086,24.87764-31.57028,24.87764-31.57028,37.51893-68.38128,37.51893-75.643,9.07716-43.57037,9.07716-43.57037Z"
          transform="translate(-195.08244 -13.92483)" fill="#ffb9b9"/>
      <path
          d="M693.02085,307.209l-10.8926,4.236s-13.91831,49.62181-10.89259,53.85782,39.33436-1.81543,39.93951-3.63087S704.51858,307.209,693.02085,307.209Z"
          transform="translate(-195.08244 -13.92483)" fill="#575a89"/>
      <path d="M206.47444,434.718c0,42.17026,26.45541,76.2939,59.14921,76.2939"
            transform="translate(-195.08244 -13.92483)" fill="#3f3d56"/>
      <path d="M265.62365,511.01194c0-42.64408,29.5227-77.15113,66.00709-77.15113"
            transform="translate(-195.08244 -13.92483)" fill="#dc8f2a"/>
      <path d="M227.90532,438.54084c0,40.05727,16.87011,72.4711,37.71833,72.4711"
            transform="translate(-195.08244 -13.92483)" fill="#dc8f2a"/>
      <path d="M265.62365,511.01194c0-54.48966,34.12364-98.582,76.29391-98.582"
            transform="translate(-195.08244 -13.92483)" fill="#3f3d56"/>
      <path
          d="M253.18018,511.54983s8.38833-.25836,10.91636-2.05853,12.90337-3.94969,13.53051-1.0626,12.60611,14.35907,3.13572,14.43546-22.005-1.47516-24.52812-3.01212S253.18018,511.54983,253.18018,511.54983Z"
          transform="translate(-195.08244 -13.92483)" fill="#a8a8a8"/>
      <path
          d="M280.93178,521.85915c-9.47038.07641-22.005-1.47514-24.52812-3.01211-1.92153-1.17048-2.68724-5.37044-2.94344-7.30813-.17743.00762-.28.01091-.28.01091s.53129,6.76525,3.05446,8.30221,15.05774,3.08853,24.52813,3.01212c2.73372-.02205,3.678-.99467,3.62615-2.4352C284.00915,521.29928,282.96653,521.84275,280.93178,521.85915Z"
          transform="translate(-195.08244 -13.92483)" opacity="0.2"/>
    </svg>
    <h2 v-if="success && valid">UNSUBSCRIBE SUCCESSFUL!</h2>
    <button @click="unsubscribe" v-if="!success && valid">UNSUBSCRIBE</button>
  </main>
</template>

<script>
  export default {
    name: "unsubscribe",
    data() {
      return {
        valid: false,
        success: false
      }
    },
    mounted() {
      function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

      if (this.$route.params.email && validateEmail(this.$route.params.email)) {
        this.valid = true
      }
    },
    methods: {
      unsubscribe() {
        fetch('https://api.hyphen-hacks.com/api/v1/unsubscribeEmail', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.$route.params.email
          })
        }).then(resp => resp.json()).then(resp => {
          console.log(resp)
          if (resp.success == true) {
            this.success = true
          } else if (resp.error.type == 'email does not exist') {
            this.success = true
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>