import React, { useState } from "react";
import "./App.css";
import QueryInput from "./components/QueryInput";
import Results from "./components/Results";
import LoadingIndicator from "./components/utils/LoadingIndicator";

function App() {
  const [fetchedData, setFetchedData] = useState<responseType | undefined>();
  const [error, setError] = useState<ErrorType | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="App">
      <QueryInput
        setFetchedData={setFetchedData}
        fetchedData={fetchedData}
        setError={setError}
        setIsLoading={setIsLoading}
      />
      {fetchedData ? (
        <>
          <Results fetchedData={fetchedData} />
          {error && (
            <div className="error">{error.message}, retry your search.</div>
          )}
          {isLoading && <LoadingIndicator />}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
