import React from "react";
import { useQueryHook } from "../hooks/useQueryHook";
import { fetchSingleData } from "../services/allServices";
import { useParams } from "react-router-dom";

const RQDetail = () => {
  const { id } = useParams();
  const { isLoading, data, isError, error } = useQueryHook({
    key: ["Test", id],
    apiFun: fetchSingleData,
    enabled: true,
    staleTime: 10000,
  });

  if (isError) {
    return <h2>{error?.message}</h2>;
  }

  return (
    <div>
      <h2>RQ</h2>
      <table style={{ border: "1px solid" }}>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <th>Loading.....</th>
            </tr>
          ) : (
            <tr>
              <td>{id}</td>
              <td>
                <input type="text" value={data?.data?.name} />
              </td>
              <td>{data?.data?.language}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RQDetail;
