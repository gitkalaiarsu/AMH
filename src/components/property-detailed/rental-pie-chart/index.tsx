"use client";

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  Plugin,
  TooltipItem,
} from "chart.js";
import { useMemo } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartData {
  label: string;
  value: number;
  color: string;
}

interface PieChartProps {
  data: PieChartData[];
  showPercentages?: boolean;
  className?: string;
}

export function PieChart({
  data,
  showPercentages = true,
  className = "",
}: PieChartProps) {
  const percentageLabelsPlugin: Plugin<"doughnut"> = useMemo(
    () => ({
      id: "percentageLabels",
      afterDatasetDraw(chart) {
        if (!showPercentages) return;

        const { ctx, data } = chart;
        const meta = chart.getDatasetMeta(0);

        if (!meta || !meta.data) return;

        ctx.save();

        meta.data.forEach((element, index: number) => {
          const dataset = data.datasets[0];
          if (!dataset) return;

          const value = dataset.data[index];
          if (value === null || value === undefined) return;

          const position = element.tooltipPosition(true);

          if (
            !position ||
            typeof position.x !== "number" ||
            typeof position.y !== "number"
          ) {
            return;
          }

          const chartWidth = chart.width || 200;
          let fontSize = 22;
          if (chartWidth < 120) fontSize = 16;
          else if (chartWidth < 150) fontSize = 18;
          else if (chartWidth < 180) fontSize = 20;

          ctx.fillStyle = "#FFFFFF";
          ctx.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          ctx.shadowColor = "rgba(0, 0, 0, 0.6)";
          ctx.shadowBlur = 4;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 2;

          ctx.fillText(`${value}%`, position.x, position.y);
        });

        ctx.restore();
      },
    }),
    [showPercentages],
  );

  const chartData = useMemo(
    () => ({
      labels: data.map((item) => item.label),
      datasets: [
        {
          data: data.map((item) => item.value),
          backgroundColor: data.map((item) => item.color),
          borderColor: data.map(() => "transparent"),
          borderWidth: 0,
          hoverOffset: 4,
          hoverBackgroundColor: data.map((item) => item.color),
        },
      ],
    }),
    [data],
  );

  const chartOptions: ChartOptions<"doughnut"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          padding: 12,
          titleColor: "#fff",
          titleFont: {
            size: 14,
            weight: "bold" as const,
          },
          bodyColor: "#fff",
          bodyFont: {
            size: 13,
          },
          borderColor: "rgba(255, 255, 255, 0.2)",
          borderWidth: 1,
          displayColors: true,
          callbacks: {
            label: function (context: TooltipItem<"doughnut">) {
              return ` ${context.label}: ${context.parsed}%`;
            },
          },
        },
      },
      cutout: "0%",
      rotation: 0,
    }),
    [],
  );

  return (
    <div className={`w-full h-full ${className}`}>
      <Doughnut
        data={chartData}
        options={chartOptions}
        plugins={[percentageLabelsPlugin]}
      />
    </div>
  );
}
