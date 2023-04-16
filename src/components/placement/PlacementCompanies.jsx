import CompanyCard from "../Internships/CompanyCard";

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
];

const PlacementCompanies = ({ title, bgColor }) => {
  return (
    <div
      style={{
        background: bgColor,
      }}
    >
      <h1 className="relative pb-3 text-2xl 2xl:text-3xl text-center mb-12 font-title">
        {title}
        <div className="absolute sm:top-12 top-16 left-1/2 -translate-x-1/2 lg:w-1/5 md:w-1/3 sm:w-1/2 w-full border-b border-slate-200"></div>
      </h1>
      <div className="gap-y-6 mb-12 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-8 ">
          {data.map((d, index) => {
            return (
              <CompanyCard
                key={index}
                imgLink={d.imgLink}
                caption={d.caption}
              />
            );
          })}
        </div>
        <div>
          <button class="text-slate-500 mr-auto float-right hover:bg-slate-100 active:bg-slate-50 transition-all border border-gray-300 rounded-xl px-4 py-2 m-8">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacementCompanies;
