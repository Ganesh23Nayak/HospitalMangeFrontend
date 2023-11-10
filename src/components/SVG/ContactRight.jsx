import React from "react";

export default function ContactSVGRight() {
  return (
    <svg
      width={55}
      height={99}
      viewBox="0 0 55 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
      <mask
        id="mask0_94:899"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={99}
        height={99}
      >
        <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#30395c" />
      </mask>
      <g mask="url(#mask0_94:899)">
        <circle
          opacity="0.8"
          cx="49.5"
          cy="49.5"
          r="49.5"
          fill="url(#paint0_radial_94:899)"
        />
        <g opacity="0.8" filter="url(#filter0_f_94:899)">
          <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_94:899"
          x="12.4852"
          y="-15.1763"
          width="82.7646"
          height="82.7646"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="10.5"
            result="effect1_foregroundBlur_94:899"
          />
        </filter>
        <radialGradient
          id="paint0_radial_94:899"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
        >
          <stop stopOpacity="0.47" />
          <stop offset={1} stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  );
}
