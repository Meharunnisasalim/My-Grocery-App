// import React, { createContext, useState, useEffect, useContext } from 'react';
// import axios from 'axios';

// // Import API_BASE_URL from environment variables
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// const DataContext = createContext();

// const DataProvider = ({ children }) => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         console.log(`API_BASE_URL: ${API_BASE_URL}`);
//         setLoading(true);
//         axios.get(`${API_BASE_URL}/api/v1`)
//             .then(response => {
//                 setData(response.data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError(error);
//                 setLoading(false);
//             });
//     }, []); // Dependency array is empty to fetch data only once

//     return (
//         <DataContext.Provider value={{ data, loading, error }}>
//             {children}
//         </DataContext.Provider>
//     );
// };

// const useData = () => useContext(DataContext);

// export { useData, DataProvider };
