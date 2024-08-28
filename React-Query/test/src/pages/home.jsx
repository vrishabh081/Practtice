import React, { useContext, useReducer } from "react";
import { useMutation, useQueryClient } from "react-query";
import { postData } from "../services/allServices";
import { useFetchData } from "../hooks/useFetch";
import { MyContext } from "../context/sampleContext";

const initState = {
  count: 0
};

const reducer = (state, action) => {
  switch (action.type){
    case "INC":
      return {
        ...state,
        count: state.count +  2
      }
  }
}

const url = "http://localhost:8000/data"

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  // const {data, loading, error} = useFetchData(url);
  const {data} = useContext(MyContext);
  console.log(data)

  return (
    <div>
      <h1>Home {state.count}</h1>
      <button onClick={() => dispatch({type: "INC"})} >INC ME</button>
    </div>
  );
};

export default Home;

// LongForm.js
// import React from 'react';
// import { useMutation, useQueryClient } from 'react-query';

// const submitFormData = async (formData) => {
//   // Simulate an API call to submit form data
//   const response = await fetch('https://api.example.com/submit-form', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formData),
//   });
//   const data = await response.json();
//   return data;
// };

// const LongForm = () => {
//   const queryClient = useQueryClient();

//   const mutation = useMutation((formData) => submitFormData(formData), {
//     onSuccess: () => {
//       // Invalidate and refetch relevant queries after successful form submission
//       queryClient.invalidateQueries('formDataList');
//       // Additional queries to invalidate can be added based on your application's needs
//     },
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = {
//       // Extract data from form fields
//       firstName: e.target.firstName.value,
//       lastName: e.target.lastName.value,
//       email: e.target.email.value,
//       // Add more fields as needed
//     };

//     // Call the mutation function to submit the form data
//     mutation.mutate(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="firstName">First Name:</label>
//         <input type="text" id="firstName" name="firstName" required />
//       </div>

//       <div>
//         <label htmlFor="lastName">Last Name:</label>
//         <input type="text" id="lastName" name="lastName" required />
//       </div>

//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" required />
//       </div>

//       {/* Add more form fields as needed */}

//       <button type="submit" disabled={mutation.isLoading}>
//         {mutation.isLoading ? 'Submitting...' : 'Submit'}
//       </button>
//     </form>
//   );
// };

// export default LongForm;
