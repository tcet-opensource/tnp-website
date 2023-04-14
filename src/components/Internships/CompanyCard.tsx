type Props = {
  imgLink: String;
  caption: String;
};

const CompanyCard = ({ imgLink, caption }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <img src={"/InternshipHero/" + imgLink} alt="company-logo" />
      <p className="lg:text-base text-xs text-center text-[#475467]">{caption}</p>
    </div>
  );
};

export default CompanyCard;
