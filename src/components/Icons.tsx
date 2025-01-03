import { FC } from "react";

const DEFAULT_ICON_COLOR = "var(--clr-icon-primary)";
const ACCENT_ICON_COLOR = "var(--clr-accent)";

interface IconProps {
  fillColor?: string;
}

export const LogoIcon: FC<IconProps> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="43px"
    height="43px"
    viewBox="0 0 43 43"
    version="1.1"
  >
    <defs>
      <filter
        id="alpha"
        filterUnits="objectBoundingBox"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
      >
        <feColorMatrix
          type="matrix"
          in="SourceGraphic"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
        />
      </filter>
      <image
        id="image13"
        width="43"
        height="43"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAABmJLR0QA/wD/AP+gvaeTAAAAh0lEQVRYhe3OvQ1AUBiFYcRPZwTtbfQ20JlCo9AYQGUAjUlsYQStLSSCDdziOhLJ+9Qn3/d6HgBAybcNun4KTZJZd67WfbvGoT2cjqRFE7/U4/wn+CLkLcSqEKtCrAqxKsSqEKtCrAqxKsSqEKtCrMqvYkPboC7z01RzpA5Z9+0cF/UXAMCTGwLcEaT4abfHAAAAAElFTkSuQmCC"
      />
      <mask id="mask0">
        <g filter="url(#alpha)">
          <use xlinkHref="#image13" />
        </g>
      </mask>
      <image
        id="image8"
        width="43"
        height="43"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAABmJLR0QA/wD/AP+gvaeTAAAAfElEQVRYhe3YMQ2AQBBE0V1CggIMkNAggBL8IAhBdCCABgkooOFQwF1zU1zyXz3Z/HrNAABKnhqEpx3Mp1FeErbDm/uMTerkEd9nq/o1W9Sf91rMumhsJY/IiFgVYlWIVSFWhVgVYlWIVSFWhVgVYlWIVSkqtqiPDABA6wP8hBM4HLwRmgAAAABJRU5ErkJggg=="
      />
      <mask id="mask1">
        <g filter="url(#alpha)">
          <use xlinkHref="#image8" />
        </g>
      </mask>
      <clipPath id="clip2">
        <rect x="0" y="0" width="43" height="43" />
      </clipPath>
      <g id="surface7" clipPath="url(#clip2)">
        <path
          style={{
            fillRule: "nonzero",
            fill: "rgb(100%,100%,100%)",
            fillOpacity: 1,
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            stroke: "rgb(0.392157%,34.117648%,60.784316%)",
            strokeOpacity: 1,
            strokeMiterlimit: 4,
          }}
          d="M 154.796512 328.352108 C 155.205305 329.714753 155.750363 330.986555 156.340843 332.212936 C 154.932776 330.21439 153.933503 328.397529 153.297602 326.535247 C 151.844113 322.492733 151.844113 318.132267 151.844113 311.182776 L 151.844113 152.525436 L 152.797965 153.524709 L 152.797965 311.182776 C 152.797965 318.132267 153.297602 323.62827 154.796512 328.352108 Z M 154.796512 328.352108 "
          transform="matrix(0.086,0,0,0.086,0,0)"
        />
      </g>
      <clipPath id="clip1">
        <rect x="0" y="0" width="43" height="43" />
      </clipPath>
      <g id="surface12" clipPath="url(#clip1)">
        <use xlinkHref="#surface7" mask="url(#mask1)" />
      </g>
      <image
        id="image25"
        width="43"
        height="43"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAABmJLR0QA/wD/AP+gvaeTAAAAh0lEQVRYhe3OvQ1AUBiFYcRPZwTtbfQ20JlCo9AYQGUAjUlsYQStLSSCDdziOhLJ+9Qn3/d6HgBAybcNun4KTZJZd67WfbvGoT2cjqRFE7/U4/wn+CLkLcSqEKtCrAqxKsSqEKtCrAqxKsSqEKtCrMqvYkPboC7z01RzpA5Z9+0cF/UXAMCTGwLcEaT4abfHAAAAAElFTkSuQmCC"
      />
      <mask id="mask2">
        <g filter="url(#alpha)">
          <use xlinkHref="#image25" />
        </g>
      </mask>
      <image
        id="image20"
        width="43"
        height="43"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAABmJLR0QA/wD/AP+gvaeTAAAAfElEQVRYhe3YMQ2AQBBE0V1CggIMkNAggBL8IAhBdCCABgkooOFQwF1zU1zyXz3Z/HrNAABKnhqEpx3Mp1FeErbDm/uMTerkEd9nq/o1W9Sf91rMumhsJY/IiFgVYlWIVSFWhVgVYlWIVSFWhVgVYlWIVSkqtqiPDABA6wP8hBM4HLwRmgAAAABJRU5ErkJggg=="
      />
      <mask id="mask3">
        <g filter="url(#alpha)">
          <use xlinkHref="#image20" />
        </g>
      </mask>
      <clipPath id="clip4">
        <rect x="0" y="0" width="43" height="43" />
      </clipPath>
      <g id="surface19" clipPath="url(#clip4)">
        <path
          style={{
            fillRule: "nonzero",
            fill: "rgb(14.901961%,19.607843%,21.960784%)",
            fillOpacity: 1,
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            stroke: "rgb(0.392157%,34.117648%,60.784316%)",
            strokeOpacity: 1,
            strokeMiterlimit: 4,
          }}
          d="M 398.028706 345.24891 L 398.528343 345.24891 L 398.528343 223.56468 L 399.482195 224.563953 L 399.482195 346.202762 L 346.929506 346.202762 L 345.975654 345.24891 Z M 398.028706 345.24891 "
          transform="matrix(0.086,0,0,0.086,0,0)"
        />
      </g>
      <clipPath id="clip3">
        <rect x="0" y="0" width="43" height="43" />
      </clipPath>
      <g id="surface24" clipPath="url(#clip3)">
        <use xlinkHref="#surface19" mask="url(#mask3)" />
      </g>
      <image
        id="image37"
        width="43"
        height="43"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAABmJLR0QA/wD/AP+gvaeTAAAAh0lEQVRYhe3OvQ1AUBiFYcRPZwTtbfQ20JlCo9AYQGUAjUlsYQStLSSCDdziOhLJ+9Qn3/d6HgBAybcNun4KTZJZd67WfbvGoT2cjqRFE7/U4/wn+CLkLcSqEKtCrAqxKsSqEKtCrAqxKsSqEKtCrMqvYkPboC7z01RzpA5Z9+0cF/UXAMCTGwLcEaT4abfHAAAAAElFTkSuQmCC"
      />
      <mask id="mask4">
        <g filter="url(#alpha)">
          <use xlinkHref="#image37" />
        </g>
      </mask>
      <image
        id="image32"
        width="43"
        height="43"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAABmJLR0QA/wD/AP+gvaeTAAAAfElEQVRYhe3YMQ2AQBBE0V1CggIMkNAggBL8IAhBdCCABgkooOFQwF1zU1zyXz3Z/HrNAABKnhqEpx3Mp1FeErbDm/uMTerkEd9nq/o1W9Sf91rMumhsJY/IiFgVYlWIVSFWhVgVYlWIVSFWhVgVYlWIVSkqtqiPDABA6wP8hBM4HLwRmgAAAABJRU5ErkJggg=="
      />
      <mask id="mask5">
        <g filter="url(#alpha)">
          <use xlinkHref="#image32" />
        </g>
      </mask>
      <clipPath id="clip6">
        <rect x="0" y="0" width="43" height="43" />
      </clipPath>
      <g id="surface31" clipPath="url(#clip6)">
        <path
          style={{
            fillRule: "nonzero",
            fill: "rgb(100%,100%,100%)",
            fillOpacity: 1,
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            stroke: "rgb(0.392157%,34.117648%,60.784316%)",
            strokeOpacity: 1,
            strokeMiterlimit: 4,
          }}
          d="M 322.674419 153.070494 C 324.536701 153.570131 326.353561 154.251453 328.170422 155.205305 C 325.808503 154.342297 323.355741 153.751817 321.039244 153.388445 C 316.315407 152.661701 311.90952 152.707122 308.866279 152.752544 C 308.275799 152.752544 307.730741 152.752544 307.276526 152.752544 L 153.524709 152.752544 L 152.570858 151.798692 L 307.276526 151.798692 C 313.181323 151.798692 318.041424 151.844113 322.674419 153.070494 Z M 322.674419 153.070494 "
          transform="matrix(0.086,0,0,0.086,0,0)"
        />
      </g>
      <clipPath id="clip5">
        <rect x="0" y="0" width="43" height="43" />
      </clipPath>
      <g id="surface36" clipPath="url(#clip5)">
        <use xlinkHref="#surface31" mask="url(#mask5)" />
      </g>
      <image
        id="image49"
        width="43"
        height="43"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAABmJLR0QA/wD/AP+gvaeTAAAAh0lEQVRYhe3OvQ1AUBiFYcRPZwTtbfQ20JlCo9AYQGUAjUlsYQStLSSCDdziOhLJ+9Qn3/d6HgBAybcNun4KTZJZd67WfbvGoT2cjqRFE7/U4/wn+CLkLcSqEKtCrAqxKsSqEKtCrAqxKsSqEKtCrMqvYkPboC7z01RzpA5Z9+0cF/UXAMCTGwLcEaT4abfHAAAAAElFTkSuQmCC"
      />
      <mask id="mask6">
        <g filter="url(#alpha)">
          <use xlinkHref="#image49" />
        </g>
      </mask>
      <image
        id="image44"
        width="43"
        height="43"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAABmJLR0QA/wD/AP+gvaeTAAAAfElEQVRYhe3YMQ2AQBBE0V1CggIMkNAggBL8IAhBdCCABgkooOFQwF1zU1zyXz3Z/HrNAABKnhqEpx3Mp1FeErbDm/uMTerkEd9nq/o1W9Sf91rMumhsJY/IiFgVYlWIVSFWhVgVYlWIVSFWhVgVYlWIVSkqtqiPDABA6wP8hBM4HLwRmgAAAABJRU5ErkJggg=="
      />
      <mask id="mask7">
        <g filter="url(#alpha)">
          <use xlinkHref="#image44" />
        </g>
      </mask>
      <radialGradient
        id="radial0"
        gradientUnits="userSpaceOnUse"
        cx="0"
        cy="0"
        fx="0"
        fy="0"
        r="1"
        gradientTransform="matrix(149.979004,0,0,149.979004,249.990997,249.985001)"
      >
        <stop
          offset="0"
          style={{ stopColor: "rgb(100%,100%,100%)", stopOpacity: 0.101961 }}
        />
        <stop
          offset="1"
          style={{ stopColor: "rgb(100%,100%,100%)", stopOpacity: 0 }}
        />
      </radialGradient>
      <clipPath id="clip8">
        <rect x="0" y="0" width="43" height="43" />
      </clipPath>
      <g id="surface43" clipPath="url(#clip8)">
        <path
          style={{
            fillRule: "nonzero",
            fill: "url(#radial0)",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            stroke: "rgb(0.392157%,34.117648%,60.784316%)",
            strokeOpacity: 1,
            strokeMiterlimit: 4,
          }}
          d="M 399.436773 224.518532 L 399.436773 346.15734 L 346.15734 346.15734 L 346.15734 399.436773 L 222.519985 399.436773 L 220.703125 397.665334 L 169.422238 346.339026 L 163.517442 340.43423 L 163.47202 340.43423 L 161.564317 338.481105 C 160.110828 337.118459 158.793605 335.664971 157.567224 334.12064 L 157.521802 334.12064 L 157.521802 334.075218 L 110.192587 287.154797 C 104.242369 280.932049 100.517805 272.301962 100.517805 263.80814 C 100.517805 261.900436 101.062863 259.402253 101.835029 256.90407 C 102.607195 254.405887 103.561047 251.998547 104.424055 250.227108 L 151.707849 151.662427 L 246.275436 104.424055 L 246.320858 104.378634 C 250.545058 101.835029 257.085756 100.517805 263.80814 100.517805 C 267.668968 100.517805 271.893169 101.789608 275.753997 103.697311 C 279.569404 105.605015 282.976017 108.012355 285.15625 110.238009 L 336.482558 161.564317 L 336.84593 161.200945 L 336.482558 161.564317 L 397.665334 222.701672 Z M 399.436773 224.518532 "
          transform="matrix(0.086,0,0,0.086,0,0)"
        />
      </g>
      <clipPath id="clip7">
        <rect x="0" y="0" width="43" height="43" />
      </clipPath>
      <g id="surface48" clipPath="url(#clip7)">
        <use xlinkHref="#surface43" mask="url(#mask7)" />
      </g>
    </defs>
    <g id="surface1">
      <path
        style={{
          fillRule: "nonzero",
          fill: "rgb(0.392157%,34.117648%,60.784316%)",
          fillOpacity: 1,
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          stroke: "rgb(0.392157%,34.117648%,60.784316%)",
          strokeOpacity: 1,
          strokeMiterlimit: 4,
        }}
        d="M 104.424055 250.227108 L 150.890262 153.297602 L 160.610465 337.527253 L 110.238009 287.154797 C 104.196948 280.977471 100.517805 272.256541 100.517805 263.80814 C 100.517805 261.900436 101.062863 259.402253 101.835029 256.90407 C 102.607195 254.405887 103.561047 251.998547 104.424055 250.227108 Z M 104.424055 250.227108 "
        transform="matrix(0.086,0,0,0.086,0,0)"
      />
      <path
        style={{
          fillRule: "nonzero",
          fill: "rgb(25.098041%,76.862746%,100%)",
          fillOpacity: 1,
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          stroke: "rgb(0.392157%,34.117648%,60.784316%)",
          strokeOpacity: 1,
          strokeMiterlimit: 4,
        }}
        d="M 285.15625 110.238009 L 335.574128 160.610465 L 153.25218 150.890262 L 246.275436 104.424055 L 246.320858 104.378634 C 250.545058 101.835029 257.085756 100.517805 263.80814 100.517805 C 267.668968 100.517805 271.893169 101.789608 275.753997 103.697311 C 279.569404 105.605015 282.976017 108.012355 285.15625 110.238009 Z M 285.15625 110.238009 "
        transform="matrix(0.086,0,0,0.086,0,0)"
      />
      <path
        style={{
          fillRule: "nonzero",
          fill: "rgb(25.098041%,76.862746%,100%)",
          fillOpacity: 1,
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          stroke: "rgb(0.392157%,34.117648%,60.784316%)",
          strokeOpacity: 1,
          strokeMiterlimit: 4,
        }}
        d="M 346.202762 347.06577 L 346.202762 399.482195 L 222.565407 399.482195 L 169.967297 346.929506 L 253.951672 317.632631 Z M 346.202762 347.06577 "
        transform="matrix(0.086,0,0,0.086,0,0)"
      />
      <path
        style={{
          fillRule: "nonzero",
          fill: "rgb(16.078432%,71.372551%,96.470588%)",
          fillOpacity: 1,
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          stroke: "rgb(0.392157%,34.117648%,60.784316%)",
          strokeOpacity: 1,
          strokeMiterlimit: 4,
        }}
        d="M 169.285974 346.248183 L 161.518895 338.481105 C 157.612645 334.529433 155.205305 331.622456 153.751817 327.807049 C 152.298328 323.946221 151.798692 319.086119 151.798692 311.182776 L 151.798692 152.434593 L 259.538517 248.364826 L 345.612282 346.248183 Z M 169.285974 346.248183 "
        transform="matrix(0.086,0,0,0.086,0,0)"
      />
      <path
        style={{
          fillRule: "nonzero",
          fill: "rgb(0.392157%,34.117648%,60.784316%)",
          fillOpacity: 1,
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          stroke: "rgb(0.392157%,34.117648%,60.784316%)",
          strokeOpacity: 1,
          strokeMiterlimit: 4,
        }}
        d="M 336.482558 161.518895 L 399.482195 224.563953 L 399.482195 346.15734 L 346.929506 346.15734 L 152.525436 151.798692 L 309.229651 151.798692 C 314.634811 151.798692 319.267805 152.025799 323.62827 153.388445 C 327.988735 154.705669 332.076672 157.113009 336.482558 161.518895 Z M 336.482558 161.518895 "
        transform="matrix(0.086,0,0,0.086,0,0)"
      />
      <use xlinkHref="#surface12" mask="url(#mask0)" />
      <use xlinkHref="#surface24" mask="url(#mask2)" />
      <use xlinkHref="#surface36" mask="url(#mask4)" />
      <use xlinkHref="#surface48" mask="url(#mask6)" />
      <path
        style={{
          fill: "none",
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          stroke: "rgb(0.392157%,34.117648%,60.784316%)",
          strokeOpacity: 1,
          strokeMiterlimit: 4,
        }}
        d="M 48.010538 251.317224 C 75.899346 254.81468 53.052326 99.427689 61.682413 86.936773 C 70.3125 74.491279 81.985828 76.489826 81.985828 76.489826 "
        transform="matrix(0.086,0,0,0.086,0,0)"
      />
      <path
        style={{
          fill: "none",
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          stroke: "rgb(0.392157%,34.117648%,60.784316%)",
          strokeOpacity: 1,
          strokeMiterlimit: 4,
        }}
        d="M 48.010538 251.044695 C 75.899346 247.59266 53.052326 402.979651 61.682413 415.425145 C 70.3125 427.87064 81.985828 425.872093 81.985828 425.872093 "
        transform="matrix(0.086,0,0,0.086,0,0)"
      />
      <path
        style={{
          fill: "none",
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          stroke: "rgb(0.392157%,34.117648%,60.784316%)",
          strokeOpacity: 1,
          strokeMiterlimit: 4,
        }}
        d="M 451.989462 250.953852 C 424.100654 254.451308 446.947674 99.018895 438.317587 86.573401 C 429.6875 74.127907 418.014172 76.126453 418.014172 76.126453 "
        transform="matrix(0.086,0,0,0.086,0,0)"
      />
      <path
        style={{
          fill: "none",
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          stroke: "rgb(0.392157%,34.117648%,60.784316%)",
          strokeOpacity: 1,
          strokeMiterlimit: 4,
        }}
        d="M 451.989462 250.681323 C 424.100654 247.183866 446.947674 402.570858 438.317587 415.061773 C 429.6875 427.507267 418.014172 425.508721 418.014172 425.508721 "
        transform="matrix(0.086,0,0,0.086,0,0)"
      />
    </g>
  </svg>
);

export const SearchIcon: FC<IconProps> = ({
  fillColor = DEFAULT_ICON_COLOR,
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="search-icon-title search-icon-description"
  >
    <title id="search-icon-title">Search icon</title>
    <desc id="search-icon-description">A magnifying glass icon</desc>
    <path
      d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C2.99933 7.684 3.62867 6.14667 4.888 4.888C6.14733 3.62933 7.68467 3 9.5 3C11.3153 3 12.853 3.62933 14.113 4.888C15.373 6.14667 16.002 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C13.9993 8.24933 13.562 7.187 12.688 6.313C11.814 5.439 10.7513 5.00133 9.5 5C8.24867 4.99867 7.18633 5.43633 6.313 6.313C5.43967 7.18967 5.002 8.252 5 9.5C4.998 10.748 5.43567 11.8107 6.313 12.688C7.19033 13.5653 8.25267 14.0027 9.5 14Z"
      fill={fillColor}
    />
  </svg>
);

export const GitHubIcon: FC<IconProps> = ({
  fillColor = DEFAULT_ICON_COLOR,
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="gh-logo-title gh-logo-description"
  >
    <title id="gh-logo-title">Github Logo</title>
    <desc id="gh-logo-description">
      A black cat silhouette inside a white circle
    </desc>
    <path
      d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
      fill={fillColor}
    />
  </svg>
);

export const SwitchIcon: FC<IconProps> = ({
  fillColor = DEFAULT_ICON_COLOR,
}) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.75 8.70833H19.25L13.75 3.20833M19.6162 13.2917H3.11621L8.61621 18.7917"
      stroke={fillColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ExpandIcon: FC<IconProps> = ({
  fillColor = DEFAULT_ICON_COLOR,
}) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 14.5L10 10.5M14 14.5V11.3M14 14.5H10.8M2 11.3V14.5M2 14.5H5.2M2 14.5L6 10.5M14 5.7V2.5M14 2.5H10.8M14 2.5L10 6.5M2 5.7V2.5M2 2.5H5.2M2 2.5L6 6.5"
      stroke={fillColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseIcon: FC<IconProps> = ({
  fillColor = DEFAULT_ICON_COLOR,
}) => (
  <svg
    width="31"
    height="30"
    viewBox="0 0 31 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.5 23.75L6.75 22L13.75 15L6.75 8L8.5 6.25L15.5 13.25L22.5 6.25L24.25 8L17.25 15L24.25 22L22.5 23.75L15.5 16.75L8.5 23.75Z"
      fill={fillColor}
    />
  </svg>
);

export const CopyIcon: FC<IconProps> = ({ fillColor = ACCENT_ICON_COLOR }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.7 1.66667H9.455C7.985 1.66667 6.82 1.66667 5.90917 1.79C4.97083 1.91667 4.21167 2.18333 3.61333 2.78417C3.01417 3.385 2.74833 4.1475 2.6225 5.08917C2.5 6.00417 2.5 7.17333 2.5 8.64917V13.5142C2.5 14.7708 3.26667 15.8475 4.35583 16.2992C4.3 15.5408 4.3 14.4783 4.3 13.5933V9.41833C4.3 8.35083 4.3 7.43 4.39833 6.69333C4.50417 5.90333 4.7425 5.14667 5.35417 4.5325C5.96583 3.91833 6.72 3.67917 7.50667 3.5725C8.24 3.47417 9.15667 3.47417 10.2208 3.47417H12.7792C13.8425 3.47417 14.7575 3.47417 15.4917 3.5725C15.2718 3.01108 14.8878 2.52895 14.3898 2.18899C13.8918 1.84902 13.303 1.66701 12.7 1.66667Z"
      fill={fillColor}
    />
    <path
      d="M5.5 9.4975C5.5 7.22583 5.5 6.09 6.20333 5.38416C6.90583 4.67833 8.03667 4.67833 10.3 4.67833H12.7C14.9625 4.67833 16.0942 4.67833 16.7975 5.38416C17.5008 6.09 17.5 7.22583 17.5 9.4975V13.5142C17.5 15.7858 17.5 16.9217 16.7975 17.6275C16.0942 18.3333 14.9625 18.3333 12.7 18.3333H10.3C8.0375 18.3333 6.90583 18.3333 6.20333 17.6275C5.5 16.9217 5.5 15.7858 5.5 13.5142V9.4975Z"
      fill={fillColor}
    />
  </svg>
);

export const LeftAngleArrowIcon: FC<IconProps> = ({
  fillColor = ACCENT_ICON_COLOR,
}) => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_97_152)">
      <path
        d="M24.2401 71.28C24.2401 69.0985 22.085 65.841 19.9036 63.1068C17.0988 59.5788 13.7472 56.5006 9.90463 54.1516C7.02343 52.3905 3.53071 50.7 0.720069 50.7M0.720069 50.7C3.53071 50.7 7.02637 49.0095 9.90463 47.2484C13.7472 44.8964 17.0988 41.8183 19.9036 38.2961C22.085 35.559 24.2401 32.2956 24.2401 30.12M0.720069 50.7L34.5301 50.7C54.0134 50.7 69.8101 34.9034 69.8101 15.42L69.8101 0.719996"
        stroke={fillColor}
        strokeWidth="5.88"
      />
    </g>
    <defs>
      <clipPath id="clip0_97_152">
        <rect
          width="70.56"
          height="70.56"
          fill="white"
          transform="translate(71.28 71.28) rotate(-180)"
        />
      </clipPath>
    </defs>
  </svg>
);
