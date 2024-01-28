import { SiCoinmarketcap } from "react-icons/si";
import { RiStockFill } from "react-icons/ri";
import { FaPercent } from "react-icons/fa";
import { MdPriceChange, MdEventAvailable } from "react-icons/md";

export class InfoLabel {
  constructor(coin, history) {
    this.coin = coin;
    // console.log(history);

    // data prepared for the info-boxes
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Cap(USD)",
        value: this.coin?.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Supply",
        value: this.coin?.supply,
      },
      {
        icon: <MdPriceChange />,
        label: "Price(USD)",
        value: this.coin?.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "Change24Hr(%)",
        value: this.coin?.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: "Volume(USD)24Hr",
        value: this.coin?.volumeUsd24Hr,
      },
    ];

    // data prepared for the chart
    this.chartData = {
      labels: history?.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          label: "Price",
          data: history?.map((i) => Number(i.priceUsd).toFixed(2)),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    // console.log(this.chartData);
  }
}
