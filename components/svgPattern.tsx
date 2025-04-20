const SvgPattern = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="2" height="2" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="0.3" fill="black" />
          </pattern>
        </defs>
        <rect width="10%" height="10%" fill="url(#dots)" />
      </svg>
    );
  };
  
  export default SvgPattern;
  