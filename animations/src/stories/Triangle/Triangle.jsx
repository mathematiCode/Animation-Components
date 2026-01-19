function Triangle({
  baseLength,
  height,

  svgWidth = 200,
  svgHeight = 200,
  fill = 'none',
  strokeColor = 'black',
  strokeWidth = 5,
}) {
  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 100 100"
      fill={fill}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    >
      <path
        d={`
        M 1,1
        L 1, 50
        L 50, 50
        Z
    `}
      />
    </svg>
  );
}

export default Triangle;
