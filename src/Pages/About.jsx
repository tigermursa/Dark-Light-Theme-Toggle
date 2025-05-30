const About = () => {
  return (
    <div className="min-h-screen bg-sky-500 dark:bg-gray-900 p-8 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4 text-white dark:text-blue-400">
        About Theme Toggle
      </h1>
      <p className="text-white dark:text-blue-400 text-lg leading-relaxed max-w-3xl">
        This project demonstrates a simple and clean implementation of a theme
        toggle using Tailwind CSS and DaisyUI. It's suitable for small to
        medium-sized apps where maintaining a global theme state is relatively
        straightforward.
        <br />
        <br />
        In larger applications, theme toggling often requires a more structured
        approach. You might:
        <ul className="list-disc list-inside mt-2">
          <li>
            Use a global context (like React Context API or Redux) to manage
            theme state.
          </li>
          <li>
            Persist theme preference using localStorage or cookies so the choice
            is remembered across sessions.
          </li>
          <li>
            Sync the theme with system preferences using the
            `prefers-color-scheme` media query.
          </li>
          <li>
            Use utility libraries (e.g., `clsx` or `classnames`) to simplify
            dynamic class handling.
          </li>
        </ul>
        <br />
        These practices help ensure consistency, scalability, and
        maintainability in complex applications.
      </p>
    </div>
  );
};

export default About;
