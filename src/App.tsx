import React, { useState } from "react";
import "./App.css";
import QueryInput from "./components/QueryInput";
import Results from "./components/Results";

function App() {
  const [fetchedData, setFetchedData] = useState<responseType | undefined>();
  const [error, setError] = useState<ErrorType | undefined>();

  // const hasError = fetchedData && "error" in fetchedData!;
  const hasData = fetchedData && "recordings" in fetchedData!;
  // console.log(fetchedData);

  return (
    <div className="App">
      <QueryInput
        setFetchedData={setFetchedData}
        fetchedData={fetchedData}
        setError={setError}
      />
      {hasData ? (
        <>
          <Results fetchedData={fetchedData} />
          {error && <div className="error">{error.message}</div>}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
