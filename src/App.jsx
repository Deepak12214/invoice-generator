import React from 'react';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CustomerInfo from './component/CustomerInfo';
import BillInfo from './component/BillInfo';
import BillGenerate from './component/BillGenerate';
import DemandTable from './component/DemandTable';
import CollectionAmountTable from './component/CollectionAmountTable';
import PenaltyAmountTable from './component/PenaltyAmountTable';
import RebateAmountTable from './component/RebateAmountTable';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <CustomerInfo />,
    },
    {
      path: "/billInfo",
      element: <BillInfo/>,
    },
    {
      path: "/demand",
      element: <DemandTable />,
    },
    {
      path: "/billGenerate",
      element: <BillGenerate />,
    },
    {
      path: "/collection-amount", 
      element: <CollectionAmountTable />,
    },
    {
      path: "/penalty-amount",
      element: <PenaltyAmountTable />,
    },
    {
      path: "/rebate-amount", 
      element: <RebateAmountTable />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
