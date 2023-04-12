import type { StaffTNP } from "../../env";

const Staff: React.FC<{
  data: StaffTNP[];
}> = ({ data }) => {
    console.log(data);
  return <div>{data.map(staff => <StaffPot></StaffPot>)}</div>;
};

export default Staff;

const StaffPot = () => {
    return (
        <div>
            staff info
        </div>
    )
}