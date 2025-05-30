# 🌗 Dark/Light Theme Toggle Guide

This guide walks you through setting up a dark/light theme toggle in your React app using **Tailwind CSS 4** and **DaisyUI**. By the end, you’ll have a sleek theme switcher that saves the user’s preference. Let’s get started! 🚀

---

## 💻 Step 1: Configure `index.css`

First, set up DaisyUI themes by adding this to your `index.css` file:

```css
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
}
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

- This sets "light" as the default theme and switches to "dark" when preferred.

---

## 💻 Step 2: Create the `useTheme` Hook

Create a file called `useTheme.js` in your hooks folder (e.g., `src/hooks/useTheme.js`) and add this code:

```jsx
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
```

- This hook checks `localStorage` for the theme (defaults to "dark") and updates the `data-theme` attribute on the `<html>` tag.

---

## 💻 Step 3: Integrate the Hook into Your Navbar

In your `Navbar.js`, use the `useTheme` hook to add the toggle. You’ve got two options:

```jsx
import useTheme from "../Hooks/useTheme";
// Assuming you have a ToggleButton component
import ToggleButton from "../Components/UI/ToggleButton";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      {/* Option 1: Use the ToggleButton component */}
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
```

- **Option 1**: Use a custom `ToggleButton` component (if you have one in `Components/UI/ToggleButton`).
- **Option 2**: Use the DaisyUI toggle input for a quick, built-in solution.

**Note**: If using `ToggleButton`, make sure it’s set up to handle `theme` and `toggleTheme` props!

---

## 💻 Step 4: Style Components for Light and Dark Modes

Style your components with Tailwind’s `dark:` variant for theme-specific looks. Here’s an example:

```jsx
<div className="bg-white dark:bg-gray-800">
  <p className="text-green-500 dark:text-green-500">
    This text is green in both modes!
  </p>
</div>
```

- Normal classes (e.g., `bg-white`) apply to light mode.
- `dark:` classes (e.g., `dark:bg-gray-800`) kick in for dark mode.

---

## ✅ Test Your Theme Toggle

Follow these steps to ensure it works:

1. Open your app in the browser.
2. Find the toggle button or checkbox in the navbar.
3. Click it to switch between light and dark themes.
4. Watch the UI update instantly.
5. Refresh the page—your theme choice should stick!

---

That’s it! Your theme toggle is ready to shine (or darken). Enjoy! 🎉