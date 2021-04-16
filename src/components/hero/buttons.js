import React, { Component } from 'react';
import * as S from './styles';
// import balloonImg from './balloon.png';
import balloonx2Img from './balloonx2.png';

export const ContactButton = () => {
  return <S.Contact>Contact Me</S.Contact>;
};

export const Balloon = () => {
  return (
    <S.Balloon>
      <img src={balloonx2Img} />
      <p>Gallery</p>
    </S.Balloon>
  );
};

// export const Balloon = (props) => {
//   return (
//     <S.Balloon>
//       <svg
//         width={63}
//         height={129}
//         viewBox="0 0 63 129"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         {...props}
//       >
//         <g filter="url(#prefix__filter0_d)">
//           <path
//             d="M32.664 63.686c-2.973 4.043-8.417 9.848-8.417 15.08 0 6.232 2.622 8.995 5.455 14.378 2.233 4.243 4.364 8.742 4.364 13.638 0 4.102 1.503 11.562-2.805 13.716"
//             stroke="#000"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <ellipse cx={31.5} cy={30} rx={27.5} ry={30} fill="red" />
//           <path d="M32 56l3.464 9h-6.928L32 56z" fill="red" />
//           <path
//             d="M19.197 31.62a4.79 4.79 0 00-.322.04c-.094.016-.21.047-.352.094-.16.05-.265.135-.316.252a.918.918 0 00-.076.369v.967a15.41 15.41 0 00.023.914c-.39.234-.968.455-1.734.662-.762.207-1.463.31-2.104.31a5.115 5.115 0 01-1.693-.275 3.933 3.933 0 01-1.389-.826 3.85 3.85 0 01-.943-1.354c-.226-.539-.34-1.156-.34-1.851 0-.649.108-1.248.322-1.799.215-.55.526-1.025.932-1.424.399-.394.883-.699 1.453-.914a5.395 5.395 0 011.905-.322c.472 0 .91.058 1.312.176.402.113.734.236.996.369l.363-.322h.51l.053 3.035h-.516c-.297-.91-.652-1.586-1.066-2.028-.414-.441-.938-.662-1.57-.662-.75 0-1.33.328-1.74.985-.407.656-.61 1.56-.61 2.713 0 1.222.2 2.18.598 2.87.402.692.97 1.038 1.705 1.038.343 0 .648-.051.914-.153.27-.105.478-.226.627-.363v-1.687a.732.732 0 00-.076-.352c-.051-.098-.153-.182-.305-.252a1.96 1.96 0 00-.44-.135 7.21 7.21 0 00-.44-.076v-.457h4.32v.457zm7.067 3.257a4.43 4.43 0 01-.61.205 2.877 2.877 0 01-.744.094c-.48 0-.834-.07-1.06-.211a1.085 1.085 0 01-.463-.615h-.035a3.657 3.657 0 01-.387.34 2.112 2.112 0 01-.393.24 2.65 2.65 0 01-.533.187 3.012 3.012 0 01-.709.065c-.453 0-.84-.133-1.16-.399-.32-.27-.48-.625-.48-1.066 0-.254.035-.469.105-.645.07-.18.17-.338.299-.474a1.57 1.57 0 01.404-.31c.156-.083.326-.16.51-.23a16.78 16.78 0 011.265-.398c.493-.14.852-.265 1.079-.375v-.562c0-.098-.008-.227-.024-.387a1.25 1.25 0 00-.1-.404.773.773 0 00-.257-.317.765.765 0 00-.463-.129 1.09 1.09 0 00-.434.076 1.366 1.366 0 00-.275.147c.012.078.045.197.1.357.054.16.081.315.081.463 0 .067-.017.15-.052.252a.556.556 0 01-.153.235c-.09.078-.191.138-.304.181-.11.043-.28.065-.51.065-.328 0-.576-.078-.744-.235a.82.82 0 01-.252-.62c0-.22.086-.415.258-.587.175-.175.388-.32.638-.433.246-.117.53-.207.85-.27.32-.066.617-.1.89-.1.38 0 .727.024 1.044.07.316.044.601.136.855.276.242.137.434.336.574.598.145.258.217.596.217 1.014 0 .441-.01.964-.03 1.57a59.298 59.298 0 00-.023 1.195c0 .176.026.315.076.416a.519.519 0 00.247.229c.066.031.17.05.31.058.145.004.276.006.393.006v.428zm-2.912-3.053c-.22.074-.436.16-.65.258-.216.094-.392.193-.528.299a1.13 1.13 0 00-.34.422 1.35 1.35 0 00-.123.597c0 .305.068.526.205.663.14.136.313.205.516.205.215 0 .39-.043.527-.13.14-.09.264-.198.37-.328l.023-1.986zM30.283 35H26.61v-.428a6.2 6.2 0 00.293-.029c.098-.012.184-.031.258-.059.125-.047.21-.113.252-.199a.76.76 0 00.07-.351V27.44a.904.904 0 00-.093-.41.669.669 0 00-.24-.293c-.079-.05-.198-.1-.358-.146a1.894 1.894 0 00-.416-.082v-.428l2.947-.152.088.093v7.834a.71.71 0 00.076.352c.051.09.133.16.246.21.079.036.16.067.247.095.085.027.187.046.304.058V35zm4.137 0h-3.674v-.428c.102-.008.2-.017.293-.029.098-.012.184-.031.258-.059.125-.047.209-.113.252-.199a.76.76 0 00.07-.351V27.44a.904.904 0 00-.094-.41.67.67 0 00-.24-.293 1.41 1.41 0 00-.357-.146 1.894 1.894 0 00-.416-.082v-.428l2.947-.152.088.093v7.834c0 .145.025.262.076.352.05.09.133.16.246.21.078.036.16.067.246.095.086.027.188.046.305.058V35zm6.867-1.4a3.578 3.578 0 01-.498.632 2.99 2.99 0 01-.656.504 3.49 3.49 0 01-.797.334 3.269 3.269 0 01-.92.117c-.578 0-1.078-.081-1.5-.246a2.942 2.942 0 01-1.037-.662 2.686 2.686 0 01-.615-.978c-.133-.38-.2-.79-.2-1.23a3.063 3.063 0 01.844-2.122c.266-.277.6-.502 1.002-.674.406-.171.86-.257 1.36-.257.546 0 .996.066 1.347.199.352.133.643.316.873.55.223.223.385.487.487.792.101.3.152.617.152.949v.38h-3.961c0 .802.154 1.41.463 1.829.309.418.799.627 1.47.627.368 0 .698-.1.99-.3.294-.202.544-.458.75-.767l.446.323zm-2.238-2.227c0-.234-.012-.475-.035-.72a2.403 2.403 0 00-.123-.604.915.915 0 00-.276-.416.657.657 0 00-.433-.14c-.301 0-.541.152-.721.456-.18.305-.277.787-.293 1.447l1.88-.023zm8.642-1.113c0 .297-.091.558-.275.785a.895.895 0 01-.726.334c-.286 0-.528-.072-.727-.217-.195-.144-.293-.357-.293-.639 0-.136.01-.242.03-.316l.052-.217c-.18.008-.37.07-.568.188-.2.117-.375.273-.528.468v3.217c0 .137.022.25.065.34.043.09.115.16.217.211.085.043.224.08.415.111.196.028.337.043.422.047V35h-3.92v-.428c.098-.008.196-.017.293-.029.102-.016.188-.035.258-.059a.431.431 0 00.258-.199.761.761 0 00.07-.351v-3.41a.708.708 0 00-.1-.376.85.85 0 00-.24-.27.963.963 0 00-.269-.116 1.822 1.822 0 00-.352-.065v-.427l2.795-.153.088.088v.85h.024c.27-.313.554-.557.855-.733.305-.18.621-.27.95-.27.363 0 .654.114.872.34.223.223.334.512.334.868zm7.032-.645a1.36 1.36 0 00-.516.2c-.164.105-.3.269-.41.492a97.935 97.935 0 00-1.037 2.273c-.356.8-.75 1.668-1.184 2.602-.242.523-.476.941-.703 1.253a4.07 4.07 0 01-.639.721c-.187.157-.373.27-.556.34-.184.07-.37.106-.557.106-.371 0-.672-.104-.902-.311-.227-.207-.34-.44-.34-.697 0-.11.012-.211.035-.305a.86.86 0 01.164-.293.75.75 0 01.287-.223c.133-.058.282-.088.445-.088.22 0 .428.077.627.23.2.151.407.362.622.632.129-.129.287-.322.474-.58a2.75 2.75 0 00.422-.785 134.27 134.27 0 00-1.236-2.538c-.36-.718-.762-1.519-1.207-2.402a1.086 1.086 0 00-.393-.433 1.248 1.248 0 00-.521-.194v-.427h3.586v.427a1.763 1.763 0 00-.463.088c-.172.055-.258.125-.258.211 0 .031.006.066.017.105.012.036.034.088.065.159.133.273.32.654.562 1.142.246.485.532 1.053.856 1.705.242-.554.447-1.03.615-1.43.172-.402.338-.796.498-1.183a.83.83 0 00.065-.228c.007-.059.011-.098.011-.118 0-.07-.035-.13-.105-.181a.95.95 0 00-.24-.14 1.788 1.788 0 00-.282-.089 2.893 2.893 0 00-.222-.04v-.428h2.42v.427z"
//             fill="#fff"
//           />
//         </g>
//         <defs>
//           <filter
//             id="prefix__filter0_d"
//             x={0}
//             y={0}
//             width={63}
//             height={128.998}
//             filterUnits="userSpaceOnUse"
//             colorInterpolationFilters="sRGB"
//           >
//             <feFlood floodOpacity={0} result="BackgroundImageFix" />
//             <feColorMatrix
//               in="SourceAlpha"
//               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//             />
//             <feOffset dy={4} />
//             <feGaussianBlur stdDeviation={2} />
//             <feColorMatrix values="0 0 0 0 0.509804 0 0 0 0 0.72549 0 0 0 0 0.890196 0 0 0 1 0" />
//             <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
//             <feBlend
//               in="SourceGraphic"
//               in2="effect1_dropShadow"
//               result="shape"
//             />
//           </filter>
//         </defs>
//       </svg>
//     </S.Balloon>
//   );
// };
