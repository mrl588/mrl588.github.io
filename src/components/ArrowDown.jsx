export const ArrowDown = (props) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-box");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div onClick={scrollToAbout} style={{cursor:"pointer"}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Down Arrow"
        width="128"
        height="128"
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: "5%",
          height: "100%",
          contentVisibility: "visible",
          display: "block",
          margin: "0 auto",
          contentVisibility: "visible",
        }}
        viewBox="0 0 128 128"
      >
        <defs>
          <clipPath id="__lottie_element_2">
            <path d="M0 0h128v128H0z"></path>
          </clipPath>
        </defs>
        <g clipPath="url(#__lottie_element_2)">
          <path
            fillOpacity="0"
            stroke="#000"
            strokeWidth="5"
            d="M64 19.5c24.577 0 44.5 19.923 44.5 44.5S88.577 108.5 64 108.5 19.5 88.577 19.5 64 39.423 19.5 64 19.5z"
            display="block"
          ></path>
          <path
            fillOpacity="0"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="5"
            d="M64.25 73.5V38.571M81.801 72.884 66.919 87.435a3.46 3.46 0 0 1-4.838 0L47.199 72.884"
            display="block"
          ></path>
        </g>
      </svg>
    </div>
  )
};
