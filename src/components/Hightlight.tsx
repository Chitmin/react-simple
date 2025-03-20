import MoreNews from "./MoreNews";
import WorldNews from "./WorldNews";

const Hightlight = () => {
  return (
    <div className="block xl:flex">
      <div className="w-full xl:w-2/3">
        <WorldNews />
      </div>
      <div className="w-full xl:w-1/3">
        <MoreNews />
      </div>
    </div>
  );
};

export default Hightlight;
