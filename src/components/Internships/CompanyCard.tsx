type Props = {
  key: (string & Number) | (number & Number);
  imgLink: String;
  caption: String;
};

const CompanyCard = ({ key, imgLink, caption }: Props) => {
  return (
    <div key={key} className="flex flex-col items-center justify-center gap-3">
      <img src={"/InternshipHero/" + imgLink} alt="company-logo" />
      <p className="lg:text-base text-xs text-center text-[#475467]">{caption}</p>
    </div>
  );
};

export default CompanyCard;
