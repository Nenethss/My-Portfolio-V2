interface HeaderProps {
  initial?: string;
  title?: string;
  subtitle?: string;
}

const Header = ({ initial, title, subtitle }: HeaderProps) => {
  return (
    <div className="w-full h-auto items-center flex gap-4 flex-col">
      <h1 className="lg:text-5xl text-4xl font-bold text-gray-600 dark:text-white">
        {initial}
        <span className="text-blue-500">{title}</span>
      </h1>
      <p className="dark:text-white text-gray-600">{subtitle}</p>
    </div>
  );
};

export default Header;
