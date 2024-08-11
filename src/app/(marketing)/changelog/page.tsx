export default function ChangelogPage() {
  return (
    <div className="my-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Changelog
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This is the first release of the project.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        [1.0.0] - 2024-08-11
      </h2>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Initial release of the Next.js starter template.</li>
        <li>Includes basic folder structure with components, hooks, and configurations.</li>
        <li>Set up Next.js app router with default layouts and themes.</li>
        <li>Integrated Tailwind CSS and ShadCN UI components.</li>
        <li>Added TypeScript support for better development experience.</li>
      </ul>
    </div>
  );
}
