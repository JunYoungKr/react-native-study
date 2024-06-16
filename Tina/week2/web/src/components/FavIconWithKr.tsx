import THEME_COLOR from '../styles/theme-color';
const FavIconWithKr = ({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <svg
      id='show-icon'
      onClick={onClick}
      width='106'
      height='44'
      viewBox='0 0 106 44'
      fill='none'
    >
      <g filter='url(#filter0_d_420_286)'>
        <rect
          x='10'
          y='10'
          width='86'
          height='24'
          rx='12'
          fill={selected ? THEME_COLOR.Blue[600] : THEME_COLOR.White}
          shape-rendering='crispEdges'
        />
        <rect
          x='10.5'
          y='10.5'
          width='85'
          height='23'
          rx='11.5'
          stroke={THEME_COLOR.Black}
          shape-rendering='crispEdges'
        />
        <rect
          x='18'
          y='14'
          width='16'
          height='16'
          rx='8'
          fill={selected ? THEME_COLOR.White : THEME_COLOR.Blue[600]}
        />
        <path
          d='M22.8834 26.6153L23.7101 23.0733L20.9614 20.692L24.5821 20.3786L26.0001 17.038L27.4181 20.378L31.0381 20.6913L28.2901 23.0726L29.1168 26.6146L26.0001 24.7346L22.8834 26.6153Z'
          fill={selected ? THEME_COLOR.Blue[600] : THEME_COLOR.White}
        />
        <path
          d='M50.8672 21.1348V22.0234H39.793V21.1348H50.8672ZM40.3945 19.6855C42.541 19.5146 44.585 18.5645 44.7217 17.3066H40.8047V16.4316H49.8828V17.3066H45.9521C46.0615 18.5645 48.1191 19.5146 50.2793 19.6855L49.9238 20.5332C47.9346 20.3281 46.0615 19.5557 45.3301 18.332C44.6055 19.5557 42.7393 20.3281 40.75 20.5332L40.3945 19.6855ZM41.1328 23.9648V23.1445H49.4453V25.8926H42.2266V27.123H49.8145V27.9707H41.1602V25.0859H48.3926V23.9648H41.1328ZM58.0586 17.2793C58.0586 17.9697 57.9971 18.6465 57.8604 19.3027H60.8887V15.9395H61.9551V28.1074H60.8887V23.4316H57.457V22.543H60.8887V20.1777H57.6416C56.9443 22.4336 55.3379 24.416 52.4668 25.8105L51.9062 24.9355C55.1396 23.3701 56.7529 21.0254 56.9785 18.1543H52.4395V17.2793H58.0586ZM68.1348 18.4961C68.1416 19.9521 69.3584 21.2852 71.1562 21.8184L70.6504 22.6387C69.249 22.2148 68.1621 21.3125 67.6221 20.1572C67.0957 21.4287 65.9678 22.4131 64.5254 22.8848L63.9922 22.0371C65.8037 21.4902 67.0752 20.0957 67.082 18.4961V18.2637H64.334V17.375H67.082V15.8984H68.1621V17.375H70.8828V18.2637H68.1348V18.4961ZM65.2227 27.2324C67.1777 26.918 68.9551 25.8516 69.1328 24.5527H65.7012V23.6777H73.7129V24.5527H70.2676C70.4385 25.8242 72.2295 26.918 74.1777 27.2324L73.7812 28.0664C72.0039 27.7725 70.3906 26.8906 69.6934 25.6738C69.0029 26.8838 67.3965 27.752 65.6328 28.0527L65.2227 27.2324ZM72.4277 23.0215V15.9531H73.4941V18.9609H75.3262V19.8633H73.4941V23.0215H72.4277ZM86.1406 15.9531V28.1074H85.0605V15.9531H86.1406ZM76.2422 24.9492C79.5303 23.3906 81.2119 21.0596 81.4512 18.1543H76.8027V17.2793H82.5449C82.5312 20.7725 80.9043 23.8691 76.8301 25.8242L76.2422 24.9492Z'
          fill={selected ? THEME_COLOR.White : THEME_COLOR.Black}
        />
      </g>
    </svg>
  );
};

export default FavIconWithKr;