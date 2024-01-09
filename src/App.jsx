import Loading from "./components/Loading";
import useFetch from "./components/useFetch";
import Tours from "./components/Tours";

const url = 'https://course-api.com/react-tours-project';

const App = () => {

  const { isLoading, isError, data } = useFetch(url);

  if (isLoading) return <Loading />;
  if (isError) return <h2>An Error Occured...</h2>

  return (
    <>
      <h2>Tours Starter</h2>
      <Tours data={data} />      
    </>
  );
};
export default App;
