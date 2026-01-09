import type { SkillProps } from "../../data/skillsData";

function Skill({ img, skill }: SkillProps) {
  return (
    <div className="flex flex-col items-center gap-2 md:mr-0">
      <div
        className="
          flex items-center justify-center rounded-full
          bg-[#edf2f8] dark:bg-[#38383869]
          w-[86px] h-[86px]
          sm:w-24 sm:h-24
          md:w-20 md:h-20
          lg:w-[6rem] lg:h-[6rem]
          p-3
          md:p-3
          lg:p-4
          sm:px-5
          dark:hover:shadow-[0_0_25px_rgba(165,165,165,165)]
          transition-shadow
          duration-200
        "
      >
        <img src={img} alt={skill} className="p-2 w-20 h-20 object-contain" />
      </div>

      <p className="text-xs sm:text-sm font-medium text-center">{skill}</p>
    </div>
  );
}

export default Skill;
