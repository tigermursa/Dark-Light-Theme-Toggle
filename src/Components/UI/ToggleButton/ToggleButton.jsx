import "./ToggleButton.css";

const ToggleButton = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";

  return (
    <label className="switch">
      <input
        id="input"
        type="checkbox"
        checked={isDark}
        onChange={(e) => toggleTheme(e.target.checked)}
      />
      <div className="slider round">
        <div className="sun-moon">
          {/* Moon Dots */}
          {[1, 2, 3].map((id) => (
            <svg
              key={id}
              id={`moon-dot-${id}`}
              className="moon-dot"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
          ))}

          {/* Light Rays */}
          {[1, 2, 3].map((id) => (
            <svg
              key={id}
              id={`light-ray-${id}`}
              className="light-ray"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
          ))}

          {/* Clouds */}
          {[1, 2, 3].map((id) => (
            <svg
              key={id}
              id={`cloud-${id}`}
              className="cloud-dark"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
          ))}
          {[4, 5, 6].map((id) => (
            <svg
              key={id}
              id={`cloud-${id}`}
              className="cloud-light"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
          ))}
        </div>

        {/* Stars */}
        <div className="stars">
          {[1, 2, 3, 4].map((id, index) => (
            <svg
              key={id}
              id={`star-${id}`}
              className="star"
              viewBox="0 0 20 20"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
          ))}
        </div>
      </div>
    </label>
  );
};

export default ToggleButton;
