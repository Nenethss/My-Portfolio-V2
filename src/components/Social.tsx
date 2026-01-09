import { socials } from "../data/socials";

export const Social = () => {
  return (
    <div className="hidden xl11:flex flex-col justify-end gap-3 p-4">
      {socials.map(({ icon: Icon, url }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 w-10 rounded-full bg-white dark:bg-[#00000069] border border-gray-300 dark:border-none hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors flex items-center justify-center"
        >
          <Icon className="w-5 h-5 dark:text-white" />
        </a>
      ))}
    </div>
  );
};
