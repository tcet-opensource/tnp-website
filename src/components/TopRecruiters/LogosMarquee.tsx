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
          className="h-8 px-8 object-contain"
          src={d.imgUrl}
          alt={d.name}
        />
      ))}
    </Marquee>
  );
};
export default LogosMarquee;
