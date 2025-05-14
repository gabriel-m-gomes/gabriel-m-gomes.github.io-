const Experience = () => {
  return (
    <div id="experience" className="flex flex-col gap-6 text-[#c2e8f0] mb-20">
      <div className="group bg-[#0a192f] hover:bg-[#112240] transition-colors duration-300 rounded-xl p-6 shadow-md">
        <h2 className="text-lg text-[#ccd6f6] font-semibold group-hover:text-[#64ffda] transition-colors">
          Internship at the Public Prosecutor's Office (Ministério Público)
        </h2>
        <p className="text-sm text-[#8892b0]">2 YEARS - 2020/2022</p>
        <p className="mt-2 text-base leading-relaxed text-[#8892b0] text-justify">
          Responsible for administrative and clerical tasks supporting daily
          operations. Duties included organizing and filing legal documents,
          creating and updating spreadsheets, and professional phone
          communication. This experience enhanced my organizational,
          communication, and attention-to-detail skills.
        </p>
      </div>

      <div className="group bg-[#0a192f] hover:bg-[#112240] transition-colors duration-300 rounded-xl p-6 shadow-md">
        <h2 className="text-lg text-[#ccd6f6] font-semibold transition-colors group-hover:text-[#64ffda]">
          Operations Assistant at Eletromecânica do Maranhão
        </h2>
        <p className="text-sm text-[#8892b0]">7 MONTHS - 2024</p>
        <p className="mt-2 text-base leading-relaxed text-[#8892b0] text-justify">
          Managed vehicle dispatch in the emergency response sector. Maintained
          production records, assisted customers, and monitored for operational
          issues. Gained valuable experience in coordination, customer service,
          and technical workflows.
        </p>
      </div>
    </div>
  );
};

export default Experience;
