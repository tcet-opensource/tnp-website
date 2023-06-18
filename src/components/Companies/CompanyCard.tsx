import type { CompanyCardType } from "../../env";


const CompanyCard: React.FC<{} & CompanyCardType> = ({ img, name }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <img src={"/companies/" + img} alt="company-logo" />
      {/* <p className="lg:text-base text-xs text-center text-slate-600">{name}</p> */}
    </div>
  );
};

export default CompanyCard;
