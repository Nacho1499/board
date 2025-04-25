import React from "react";
import { Chart as chartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import Footer from "../Component/Footer";

const Chartjs = () => {
  return (
    <>
    <div className="container p-4">
      <div className="row g-3">
        <div className="col-12 col-lg-6">
          <div className="h-100 card rounded shadow p-3  ">
            <div className="card-body">
              <div className="card-title">
                <h5>Revenue</h5>
              </div>
              <hr />
              <Bar
                data={{
                  labels: ["A", "B", "C"],
                  datasets: [
                    {
                      label: "revenue",
                      data: [200, 300, 400],
                    },
                    {
                      label: "Loss",
                      data: [100, 50, 25],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="h-100 card rounded p-3  shadow">
            <div className="card-body">
              <div className="card-title">
                <h5>performanace</h5>
              </div>
              <hr />
              <Doughnut
                data={{
                  labels: ["A", "B", "C"],
                  datasets: [
                    {
                      label: "Performance",
                      data: [1000, 2000, 3000],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="h-100 card rounded p-3  shadow">
            <div className="card-body">
              <div className="card-title">
                <h5>Balances</h5>
              </div>
              <hr />
              <Line
                data={{
                  labels: ["A", "B", "C"],
                  datasets: [
                    {
                      label: "revenue",
                      data: [200, 300, 400],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row g-4 p-2 mt-3">
        <div className="d-flex justify-content-evenly col-12 col-lg-8 shadow rounded p-4">
          <div>
            <h5>Total Transactions</h5>
            <hr />
            <Doughnut
              data={{
                labels: ["A", "B", "C"],
                datasets: [
                  {
                    label: "Performance",
                    data: [200, 300, 400],
                  },
                ],
              }}
            />
          </div>

          <div>
            <h5>Report</h5>
            <hr />
            <p>
              Last month transactions <br /> $234.40k
            </p>
            <div className="d-flex">
              <div>
                <i class="fa-solid fa-chart-pie fa-2x m-4 text-danger"></i>
                <p>This Week</p>
                <h6>+82.45%</h6>
              </div>
              <div>
                <i class="fa-solid fa-chart-simple fa-2x m-4 text-danger"></i>
                <p>Last Week</p>
                <h6>-24.86%</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="card shadow p-3 h-100">
            <div className="card-body shadow rounded p-3">
              <h5>Activity Timeline</h5>
              <hr />
             
                <p><i class="fa-solid fa-circle-check text-danger"></i> Create youtube video for next product 😎</p>
                <p><i class="fa-solid fa-circle-check text-danger"></i>Received payment from USA client 😍</p>
                <p><i class="fa-solid fa-circle-check text-danger"></i>Meeting with joseph morgan for next project</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Chartjs;
