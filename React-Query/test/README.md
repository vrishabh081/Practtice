# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



//   const { isLoading, data, isError, error, isFetched, refetch } = useQuery("dummy-data", fetchData,{
  //     // cacheTime: 10000,  //default 5min
  //     // staleTime: 10000, //default 0 sec
  //     // refetchOnMount: false,
  //     // refetchOnWindowFocus: false,
  //     // refetchInterval: 1000,
  //     // refetchIntervalInBackground: true,
  //     // enabled: false,
  //     // onSuccess: () => {
  //     //     alert("Success Message")
  //     // },
  //     // onError: () => {
  //     //     alert("Something wrong")
  //     // },
  //     select: (data) => {
  //         const newData = data.data.map((el) => {
  //             return {
  //                 ...el,
  //                 language: "English"
  //             }
  //         })
  //         return newData
  //     }
  //   });