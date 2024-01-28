import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Normal from "../pages/normal";
import RQ from "../pages/rq";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import RQDetail from "../pages/detailRQ";
import MultiQuery from "../pages/MultiQuery";
import Login from "../pages/login";

const queryClient = new QueryClient();

const AllRoutes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/normal" element={<Normal />} />
        <Route path="/rq" element={<RQ />} />
        <Route path="/rq/:id" element={<RQDetail />} />
        <Route path="/multi-query" element={<MultiQuery />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
    </QueryClientProvider>
  );
};

export default AllRoutes;
