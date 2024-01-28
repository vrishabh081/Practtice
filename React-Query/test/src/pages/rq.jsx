import React from "react";
import { useQueryHook } from "../hooks/useQueryHook";
import { fetchData } from "../services/allServices";
import { Link } from "react-router-dom";

const RQ = () => {
  const { isLoading, data, isError, error, isFetched, refetch } = useQueryHook({
    key: "Test",
    apiFun: fetchData,
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
            data?.data?.map((el, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input type="text" value={el.name} />
                </td>
                <td><Link to={`/rq/${el.id}`}>{el.language}</Link></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <button onClick={refetch}>Fetch Data</button>
    </div>
  );
};

export default RQ;
