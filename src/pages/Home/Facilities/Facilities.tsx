import FacilityCard from "../../../components/FacilityCard/FacilityCard";

const Facilities = () => {
  return (
    <div className="bg-secondary">
      <div>
        <h1 className="text-center text-4xl text-primary underline pt-10">
          Our Facilities
        </h1>
        <p className="text-xl text-gray-400 text-center pt-5 pb-5">
          You Can Enjoy our facilities by booking slots. Some of our facilites
          are given below. You can check that our
        </p>
      </div>
      {/* Showing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-10 mx-5">
        <FacilityCard></FacilityCard>
        <FacilityCard></FacilityCard>
        <FacilityCard></FacilityCard>
        <FacilityCard></FacilityCard>
        <FacilityCard></FacilityCard>
        <FacilityCard></FacilityCard>
      </div>
    </div>
  );
};

export default Facilities;
