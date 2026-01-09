import type { ProjectCardProps } from "../../data/projectData";
import { FaEye, FaGithub } from "react-icons/fa";

function ProjectsCard({
  image,
  title,
  description,
  type,
  link,
  codelink,
  date,
}: ProjectCardProps) {
  return (
    <div
      className="py-4 px-6 rounded-lg min-w-[250px] max-w-[350px] shadow-[0_0_25px_rgba(0,0,0,0.2)]
 dark:bg-[#38383869] w-full h-auto flex flex-col gap-2  hover:translate-y-[-5px] transition-transform duration-300"
    >
      <div className="flex flex-col items-center">
        <img
          className="w-auto h-[200px] rounded object-cover "
          src={image}
          alt={title}
        />

        <p className="px-2 py-1 text-[12px] dark:bg-[#2d2d2d] dark:text-white bg-[#ffffff] rounded-t-lg absolute mt-[174px]">
          {type}
        </p>
      </div>
      <div className="flex justify-around gap-1 my-2">
        <a
          className="w-full text-[12px] text-white bg-blue-600 py-[6px] px-4 flex items-center justify-center gap-2 rounded"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEye className="text-[17px]" />
          Visit
        </a>
        <a
          className="w-full text-[12px] dark:bg-[#1a1a1a] bg-[#e3e3e3] py-[6px] px-4 flex items-center justify-center gap-2 rounded"
          href={codelink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-[17px]" />
          Code
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold text-[16px] ">{title}</p>
        <p className="text-[13px] ">{description}</p>
      </div>
      <div>
        <p className="text-[12px] ">Published: {date}</p>
      </div>
    </div>
  );
}

export default ProjectsCard;
