import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BillGenerate = () => {
  const navigate = useNavigate();

  const [billData, setBillData] = useState([
    {
      BillNumber: "1001",
      ConnectionID: "CON1234",
      RRNO: "RR9876",
      InterestOB: "23",
      TaxInterest: 500,
      Interest: 1200,
      PenaltyAmount: "29374",
      AdjustmentAmount: "23764",
      OtherAdjustment: 200,
      Consumption: "324",
      GOKSchemeEligibleAmount: "234",
      OtherIncentiveAmount: 100,
      RebateAmount: "34",
      Demand: "324",
      Total: 8000,
      BillingMonth: 3,
      BillingYear: 2025,
      CollectionAmount: "5000",
      OpeningBalance: "2000",
      ClosingBalance: "7000",
      BillIssueDate: "2025-03-10",
      TotalGOKBalance: 3000,
      TotalCustomerBalance: 9000,
      RevenueOB: 1500,
      InterestOBValue: 2000,
      CurrentMonthInterest: 300,
      RoundOff: 5,
    },
  ]);

  const clickableHeaders = {
    InterestOB: "/interest-ob",
    PenaltyAmount: "/penalty-amount",
    Consumption: "/consumption",
    Demand:"/demand",
    RebateAmount:"/rebate-amount",
    AdjustmentAmount:"/adjustment-amount",
    CollectionAmount:"/collection-amount",
    OpeningBalance:"/opening-balance",
    ClosingBalance:"/closing-balance",
    GOKSchemeEligibleAmount: "/gok-scheme-eligible",
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="flex overflow-x-auto">
        <div className="bg-white shadow-lg rounded-lg p-8 min-w-full">
          <h2 className="text-2xl font-bold mb-4">Bill Summary</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  {[
                    "BillNumber",
                    "ConnectionID",
                    "RRNO",
                    "InterestOB",
                    "TaxInterest",
                    "Interest",
                    "PenaltyAmount",
                    "AdjustmentAmount",
                    "OtherAdjustment",
                    "Consumption",
                    "GOKSchemeEligibleAmount",
                    "OtherIncentiveAmount",
                    "RebateAmount",
                    "Demand",
                    "Total",
                    "BillingMonth",
                    "BillingYear",
                    "CollectionAmount",
                    "OpeningBalance",
                    "ClosingBalance",
                    "BillIssueDate",
                    "TotalGOKBalance",
                    "TotalCustomerBalance",
                    "RevenueOB",
                    "InterestOB",
                    "CurrentMonthInterest",
                    "RoundOff",
                  ].map((header) => (
                    <th key={header} className="border p-2 text-xs whitespace-nowrap">
                      {clickableHeaders[header] ? (
                        <button
                          onClick={() => navigate(clickableHeaders[header])}
                          className="text-blue-500 underline hover:text-blue-700"
                        >
                          {header}
                        </button>
                      ) : (
                        header
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {billData.map((row, index) => (
                  <tr key={index} className="border">
                    {Object.entries(row).map(([key, value]) => (
                      <td key={key} className="border p-2 text-xs whitespace-nowrap">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillGenerate;
