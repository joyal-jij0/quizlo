
import ResultTable from "./resultTable";
const Leaderboard = () => {
  return (
      <>
        <div className=" bg-cover min-h-screen" style={{backgroundImage: `url('https://res.cloudinary.com/dfhj4i9hd/image/upload/v1713119651/CSI%20Website/Quiz/background_pdy1uy.png')`}}>
          <div className="mx-44">
            <h1 className="text-9xl  font-jersey text-white text-center font-bold mb-7 pt-7">
              LEADERBOARD
            </h1>
            <ResultTable/>
          </div>
        </div>
      </>
  );
};

export default Leaderboard;
