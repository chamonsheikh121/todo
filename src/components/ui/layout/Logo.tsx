const Logo = () => {
  return (
    <div className="w-24 h-24">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-full h-full"
      >
        <g id="App_Store" data-name="App Store">
          <rect
            x="21.333"
            y="21.333"
            width="469.333"
            height="469.333"
            rx="42.667"
            ry="42.667"
            className="fill-red-500"
          />
          <path
            d="M135.32 206.869c66.543 66.543 174.817 66.542 241.36 0a170.637 170.637 0 0 0 49.546-132.966 10.667 10.667 0 0 0-21.28 1.49 149.099 149.099 0 0 1-29.212 100.07..."
            className="fill-red-700"
          />
          <circle cx="117.333" cy="74.667" r="32" className="fill-red-700" />
          <circle cx="394.667" cy="74.667" r="32" className="fill-red-700" />
          {/* You can continue replacing all other style classes with Tailwind colors */}
        </g>
      </svg>
    </div>
  );
};

export default Logo;
