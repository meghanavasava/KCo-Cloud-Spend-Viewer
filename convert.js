import csv from "csvtojson";
import fs from "fs";

async function convert() {
  const aws = await csv().fromFile("aws_line_items_12mo.csv");
  const gcp = await csv().fromFile("gcp_billing_12mo.csv");

  const awsData = aws.map(row => ({ ...row, cloud_provider: "AWS" }));
  const gcpData = gcp.map(row => ({ ...row, cloud_provider: "GCP" }));

  const combined = [...awsData, ...gcpData];

  fs.writeFileSync("public/data.json", JSON.stringify(combined, null, 2));

  console.log("data.json created!");
}

convert();
