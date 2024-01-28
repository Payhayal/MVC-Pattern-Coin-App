import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const DetailView = ({ model }) => {
  console.log(model);
  return (
    <div className="container">
      <div className="lineChart">
        <h2 className="d-flex justify-content-center text-warning fs-bold">
          {model?.coin?.name}
        </h2>
        <Line data={model?.chartData} />
      </div>

      <div className="row row-cols-2 row-cols-lg-4 gap-4">
        {model.infoFields.map((info, i) => (
          <div
            className="row bg-white text-black rounded shadow-lg g-3"
            key={i}
          >
            <span className="fs-4">{info.icon}</span>
            <h3 className="my-3 text-warning fs-bold">{info.label}</h3>
            <p>{Number(info.value).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailView;
