import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

// Fetch All Data-
export const fetchData = (searchTerm = "") => {
  return axios.get(
    `http://localhost:8000/data?q=${searchTerm}`
  );
};

const MultiQuery = () => {
  const { isLoading, data, isError, error } = useQuery(
    ["All-Data", { searchTerm: "" }],
    () => fetchData(),
    { enabled: true }
  );

  if (isError) {
    return <h2>{error?.message}</h2>;
  }

  const handleChange = (e) => {
    queryClient.invalidateQueries(["All-Data", { q: e.target.value }]);
  };


  return (
    <div>
      <h2>MultiQuery</h2>
      <input type="text" placeholder="Search" onChange={handleChange} />
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
                <td>
                  <Link to={`/rq/${el.id}`}>{el.language}</Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MultiQuery;
