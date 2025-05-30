Dark/Light Theme Toggle Guide
This is how to set up a dark/light theme toggle in your React app with Tailwind CSS 4 and DaisyUI.
Step 1: Add This to index.css
Put this in your index.css file to set up DaisyUI themes and the dark variant:
@plugin "daisyui" {
themes: light --default, dark --prefersdark;
}
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] \*));

Step 2: Create the Theme Hook
Make a file called useTheme.js in your project (e.g., src/hooks/useTheme.js) and add this code:
import { useState, useEffect } from "react";

const useTheme = () => {
const [theme, setTheme] = useState(
localStorage.getItem("theme") === "light" ? "light" : "dark"
);

useEffect(() => {
localStorage.setItem("theme", theme);
document.querySelector("html").setAttribute("data-theme", theme);
}, [theme]);

const toggleTheme = (isDark) => {
setTheme(isDark ? "dark" : "light");
};

return { theme, toggleTheme };
};

export default useTheme;

This hook sets the theme based on what’s in localStorage and updates the HTML data-theme attribute.
Step 3: Use the Hook in Your Navbar
In your Navbar.js, import the hook and use it like this:
import useTheme from "../Hooks/useTheme";

const Navbar = () => {
const { theme, toggleTheme } = useTheme();

return (
<nav>
{/_ Option 1: Use the ToggleButton component _/}
<ToggleButton theme={theme} toggleTheme={toggleTheme} />

      {/* Option 2: Or use this DaisyUI toggle input */}
      <input
        type="checkbox"
        value="dark"
        className="toggle theme-controller mr-6 text-white"
        checked={theme === "dark"}
        onChange={(e) => toggleTheme(e.target.checked)}
      />
    </nav>

);
};

export default Navbar;

If you already have a ToggleButton component in Components/UI/ToggleButton, use that.
Otherwise, use the DaisyUI toggle input shown above.

Step 4: Style Components for Light and Dark Modes
In your components, style like this:

For light mode, use normal classes like text-green-500.
For dark mode, add the dark: prefix, like dark:text-green-500.

Example:

<div className="bg-white dark:bg-gray-800">
  <p className="text-green-500 dark:text-green-500">
    This text is green in both modes!
  </p>
</div>

Test It

Open your app.
Click the toggle button or checkbox in the navbar.
Watch the theme switch between light and dark.
Refresh the page to make sure it remembers your choice.

That’s it! Your theme toggle should work now.
