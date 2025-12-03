import { useEffect, useState } from "react";
import "../App.css";
import CloudCard from "./CloudCard";
import ChartCard from "./ChartCard";
import Header from "./Header";


function Dashboard() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const [cloud, setCloud] = useState("All");
  const [team, setTeam] = useState("All");
  const [env, setEnv] = useState("All");

  // Fetch data
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setFiltered(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading data.json:", err);
        setLoading(false);
      });
  }, []);

  // Apply filters
  useEffect(() => {
    let result = data;

    if (cloud !== "All")
      result = result.filter((x) => x.cloud_provider === cloud);

    if (team !== "All")
      result = result.filter((x) => x.team === team);

    if (env !== "All")
      result = result.filter((x) => x.env === env);

    setFiltered(result);
  }, [cloud, team, env, data]);

  // Summary values
  const totalSpend = filtered.reduce((sum, row) => sum + Number(row.cost_usd), 0);
  const awsTotal = filtered
    .filter((x) => x.cloud_provider === "AWS")
    .reduce((sum, row) => sum + Number(row.cost_usd), 0);
  const gcpTotal = filtered
    .filter((x) => x.cloud_provider === "GCP")
    .reduce((sum, row) => sum + Number(row.cost_usd), 0);

  // Load chart
  useEffect(() => {
  const ctx = document.getElementById("myChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["AWS", "GCP"],
      datasets: [
        {
          label: "Spend (USD)",
          data: [awsTotal, gcpTotal],
        },
      ],
    },
  });
}, [awsTotal, gcpTotal]);


  if (loading) return <h2>Loading data…</h2>;

  return (
    <div className="dashboard-container">
  
      <div className="header-container">
        <Header />
      </div>
      <div className="filters">
        <select value={cloud} onChange={(e) => setCloud(e.target.value)}>
          <option value="All">All Cloud</option>
          <option value="AWS">AWS</option>
          <option value="GCP">GCP</option>
        </select>

        <select value={team} onChange={(e) => setTeam(e.target.value)}>
          <option value="All">All Team</option>
          <option value="Core">Core</option>
          <option value="Web">WEB</option>
          <option value="Data">Data</option>
        </select>

        <select value={env} onChange={(e) => setEnv(e.target.value)}>
          <option value="All">All Environments</option>
          <option value="prod">prod</option>
          <option value="staging">staging</option>
          <option value="dev">dev</option>
        </select>
      </div>

    
      <div className="summary-cards">
        <CloudCard name="Total Spend" spend={totalSpend} />
        <CloudCard name="AWS Spend" spend={awsTotal} />
        <CloudCard name="GCP Spend" spend={gcpTotal} />
      </div>


      <div className="dashboard-content">
        <div className="table-left">
          <table className="table-container">
            <thead>
              <tr>
                <th>Date</th>
                <th>Cloud</th>
                <th>Service</th>
                <th>Team</th>
                <th>Env</th>
                <th>Cost (USD)</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((row, index) => (
                <tr key={index}>
                  <td>{row.date}</td>
                  <td>{row.cloud_provider}</td>
                  <td>{row.service}</td>
                  <td>{row.team}</td>
                  <td>{row.env}</td>
                  <td>${Number(row.cost_usd).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

     
        <div className="graph-right">
           <ChartCard awsTotal={awsTotal} gcpTotal={gcpTotal} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
