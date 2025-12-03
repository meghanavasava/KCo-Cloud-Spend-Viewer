import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";


export default function ChartCard({ awsTotal, gcpTotal }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current;
    if (!ctx) return;

    // destroy previous chart
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // draw new chart
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["AWS", "GCP"],
        datasets: [
          {
            label: "Spend (USD)",
            data: [awsTotal, gcpTotal],
            backgroundColor: "rgba(75, 192, 192, 0.4)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [awsTotal, gcpTotal]);

  return (
    <div style={{ width: "100%", height: "260px" }}>
      <canvas ref={chartRef} />
    </div>
  );
}
