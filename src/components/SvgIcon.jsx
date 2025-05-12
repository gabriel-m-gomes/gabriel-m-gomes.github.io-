const SvgIcon = ({ width = 30, height = 24, viewBox, path }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill="currentColor"
    >
      <path d={path} />
    </svg>
  );
};

export default SvgIcon;
