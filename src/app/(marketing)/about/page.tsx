export default function AboutPage() {
  return (
    <div className="my-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        About This Project
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This Next.js starter template is built with the latest features in Next.js 13/14, utilizing the app router, Tailwind CSS, TypeScript, and ShadCN UI. It provides a solid foundation to start building modern web applications quickly and efficiently.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Key Features
      </h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <span className="font-semibold">Organized Folder Structure:</span> The project is organized in a way that makes it easy to manage and expand as your project grows.
        </li>
        <li>
          <span className="font-semibold">Out-of-the-Box Layouts:</span> Pre-built layouts that can be customized easily to fit different sections of your application.
        </li>
        <li>
          <span className="font-semibold">Theming:</span> Integrated support for light and dark themes, with easy toggling and customization options.
        </li>
        <li>
          <span className="font-semibold">Navigation:</span> Modern navigation using the Next.js app router, making routing and nested layouts seamless.
        </li>
        <li>
          <span className="font-semibold">Industry-Standard Code Conventions:</span> The template adheres to industry-standard practices, making your code clean, consistent, and maintainable.
        </li>
      </ul>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Why This Template?
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This starter template is designed to save you time and effort. With its well-organized structure, pre-configured layouts, and adherence to modern development practices, you can focus on building features without worrying about the setup.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Whether you're creating a personal project or a professional application, this template is flexible and ready to be customized to fit your needs.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Get Started
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Ready to get started? Head over to the documentation to learn more about how to set up the project, explore the file structure, and begin building your application.
      </p>
    </div>
  );
}
