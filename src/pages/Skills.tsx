import Header from "../components/Header/Header";
import Experience from "../components/Skills/Experience";
import SkillContainer from "../components/Skills/SkillContainer";
import { Social } from "../components/Social";

function Skills() {
  return (
    <div className="min-h-[100vh] pt-[70px] dark:bg-[#252525] bg-[#fff] flex gap-6 mx-auto">
      <Social />
      <div className="flex flex-col gap-0 lg:gap-16 items-center pb-16 mx-auto">
        <Header initial="Skill & " title="Experience" />
        <div className="flex flex-col md:flex-col xl8:flex-row px-16 md:px-36 lg:px-24 pt-6 gap-10">
          <SkillContainer />
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default Skills;
