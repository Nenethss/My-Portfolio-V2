import { skillsData } from "../../data/skillsData";
import Skill from "./Skill";

const SkillContainer = () => {
  return (
    <div className="w-full lg:w-2/3">
      <div
        className="
        flex-2
        grid gap-8 place-items-center
        grid-cols-3 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4
        2xl:grid-cols-6
        md:px-0
        lg:px-16
      "
      >
        {skillsData.map((skill, index) => (
          <Skill key={index} img={skill.img} skill={skill.skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillContainer;
