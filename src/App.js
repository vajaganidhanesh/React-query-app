import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import FetchingData from "./pages/FetchingData";

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>Rick and Morty</h1>
        <QueryClientProvider client={queryClient}>
          <FetchingData />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
