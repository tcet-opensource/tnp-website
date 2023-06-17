import Marquee from "react-fast-marquee";

const LogosMarquee: React.FC<{
  data: { imgUrl: string; name: string }[];
  oppDirection?: boolean | false;
}> = ({ data, oppDirection }) => {
  return (
    <Marquee  direction={oppDirection ? "right" : "left"} speed={30}>
      {data.map((d) => (
        <img
          key={d.name}
          className="h-12 object-fill mx-4 "
          src={d.imgUrl}
          alt={d.name}
          width={120}
        />
      ))}
    </Marquee>
  );
};
export default LogosMarquee;
