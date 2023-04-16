import CompanyCard from "./CompanyCard";

const data = [
  // Row 1
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  // Row 2
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  // Row 3
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  // Row 4
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  // Row 5
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
  {
    caption: "Name of the company",
    imgLink: "company-logo.svg",
  },
];

const InternshipCompanies: React.FC<{}> = () => {
  return (
    <div style={{ background: "radial-gradient(42.83% 57.11% at 50% 100%, rgba(255, 225, 185, 0.7) 0%, rgba(255, 245, 232, 0.3) 100%)" }}>
      <h1 className="relative pb-3 text-2xl 2xl:text-3xl text-center mb-12 font-title">
        Companies offering Internships <div className="absolute sm:top-12 top-16 left-1/2 -translate-x-1/2 lg:w-1/5 md:w-1/3 sm:w-1/2 w-full border-b border-slate-200"></div>
      </h1>
      <div className="grid grid-cols-2 md:grid-rows-5 md:grid-cols-5 2xl:grid-cols-6 gap-x-6 gap-y-8 mb-12 pb-12">
        {data.map((d, index) => {
          return <CompanyCard key={index} imgLink={d.imgLink} caption={d.caption} />;
        })}
      </div>
    </div>
  );
};

export default InternshipCompanies;
