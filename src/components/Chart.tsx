import { CSSProperties, useState } from "react";
import ChartData from "../../data.json";

export default function Chart() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const highestAmount = Math.max(...ChartData.map(data => data.amount));
  const highestAmountIndex = ChartData.findIndex(data => data.amount === highestAmount);

  function barsStyle(amount: number, index: number): CSSProperties {
    const baseStyle: CSSProperties = {
      height: amount * 3 + "px",
    };

    if (index === highestAmountIndex && hoveredBar === index) {
      return {
        ...baseStyle,
        backgroundColor: "hsla(186, 34%, 60%, 0.8)",
      };
    }

    return baseStyle;
  }

  return (
    <>
      <div className="chart">
        <div className="chart__bars">
          {ChartData.map((data, index) => {
            return (
              <div className="chart__data" key={index}>
                <p className={hoveredBar === index ? "show" : "hide"}>${data.amount}</p>
                <div
                  className="chart__bar"
                  style={barsStyle(data.amount, index)}
                  onMouseEnter={() => setHoveredBar(index)}
                  onMouseLeave={() => setHoveredBar(null)}
                ></div>
                <span>{data.day}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
