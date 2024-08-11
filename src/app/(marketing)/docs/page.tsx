export default function DocsPage() {
  return (
    <div className="my-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Project Structure Overview
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This <span className="font-semibold font-heading">Next.js</span> + <span className="font-semibold font-heading">Tailwind.css</span> + <span className="font-semibold font-heading">ShadCN</span> starter template is designed to provide a solid foundation
        for building scalable and well-organized web applications. Below is a
        breakdown of the project structure, along with conventions and best
        practices for organizing your code.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Directory Structure
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The project follows a modular approach to keep the codebase organized and maintainable. Each directory serves a specific purpose, making it easier to navigate through the project.
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        <code>public/</code> Directory
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The <code>public/</code> directory contains static assets like images, fonts, and icons. These files are accessible directly via URLs and do not undergo processing by Webpack or other bundlers.
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        <code>src/app/</code> Directory
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The <code>src/app/</code> directory is the heart of the application, leveraging Next.js's app directory structure. It uses the App Router, enabling modern routing mechanisms with support for nested layouts and error handling.
      </p>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <code>(marketing)/</code> - This group folder organizes pages related to marketing, such as the About page, Changelog, and Documentation. It allows for a unique layout tailored specifically for the marketing section.
        </li>
        <li>
          <code>layout.tsx</code> - Defines the shared layout for the group, ensuring consistency across all marketing pages.
        </li>
        <li>
          <code>error.tsx</code> &amp; <code>not-found.tsx</code> - Global error and not-found pages that handle application-wide errors and 404s, respectively.
        </li>
      </ul>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        <code>src/components/</code> Directory
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The <code>components/</code> directory is where all reusable UI components and custom components live. This directory is split into subdirectories for better organization:
      </p>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <code>footer/</code> &amp; <code>navbar/</code> - Contain the main layout components for the site's footer and navigation bar. These are usually composed of smaller UI components.
        </li>
        <li>
          <code>ui/</code> - Houses generic UI components like buttons, separators, and tooltips. These components are designed to be highly reusable across the application.
        </li>
        <li>
          <code>theme/</code> - Manages theme-related components, including the theme provider and toggler.
        </li>
      </ul>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        <code>src/config/</code> Directory
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Configuration files are stored in the <code>config/</code> directory. Each file is dedicated to a specific aspect of the application:
      </p>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <code>marketing.config.ts</code> - Contains configurations specific to marketing pages.
        </li>
        <li>
          <code>site.config.ts</code> - Manages global site settings, such as metadata, site title, and other essential configurations.
        </li>
      </ul>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        <code>src/hooks/</code> Directory
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The <code>hooks/</code> directory is where custom React hooks are stored. These hooks encapsulate logic that is reused across multiple components, enhancing code modularity and reusability.
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        <code>src/lib/</code> Directory
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The <code>lib/</code> directory contains utility functions that provide common functionality across the application. This can include anything from formatting dates to fetching data from an API.
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        <code>src/styles/</code> Directory
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The <code>styles/</code> directory holds global CSS files. The <code>globals.css</code> file, for instance, applies base styles and resets to ensure a consistent look and feel across the application.
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        <code>src/types/</code> Directory
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The <code>types/</code> directory is dedicated to TypeScript type definitions. This helps in maintaining strong type safety and better autocompletion support throughout the development process.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        With this structure, the template ensures that your Next.js project is scalable, maintainable, and easy to navigate. Each directory serves a clear purpose, allowing for a clean separation of concerns and modular development.
      </p>
    </div>
  );
}
