import React, { useEffect, useState } from "react";
import axios from "axios";

const Normal = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoader(true);
    axios
      .get("http://localhost:8000/data?_page=0&_limit=15")
      .then((res) => {
        setData(res?.data);
        setLoader(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoader(false);
      });
  }, []);

  if(error){
    return <h2>{error}</h2>
  }

  return (
    <div>
      <h2>Normal</h2>
      <table style={{border:'1px solid', }}>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
            {
                loader
                ?
                <tr>
                   <th>Loading.....</th>
                </tr>
                :
                data?.map((el, index) => <tr key={index}>
                    <td>{index+1}</td>
                    <td>{el.name}</td>
                    <td>{el.language}</td>
                </tr>)
            }
        </tbody>
      </table>
    </div>
  );
};

export default Normal;
