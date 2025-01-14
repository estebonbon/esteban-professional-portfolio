import { SKILLS } from "../constants";

const Skillset = () => {
  return (
    <div className="mb-20">
      <h2 
        className="mb-20 text-center text-4xl">
        Skillset
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {SKILLS.map((skill, index) => (
          <li
            key={index}
            className="flex items-center justify-center bg-transparent text-[#c5a358ce] rounded shadow p-3 text-center text-sm font-semibold hover:text-[#c5a358c3] transition-colors duration-200;
"
          >
            {skill.Skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skillset;

