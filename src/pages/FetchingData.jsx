import React, { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";

function FetchingData() {
  const [page, setPage] = useState(1);
  const FetchData = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    console.log(queryKey[1]);
    return response.json();
  };

  const { data, status } = useQuery(["characters", page], FetchData, {
    keepPreviousData: true,
  });
  console.log(data);
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error...</div>;
  }

  return (
    <div className='characters'>
      {data.results.map((characters) => (
        <Character key={characters.id} character={characters} />
      ))}

      <div>
        <button disabled={page === 1} onClick={() => setPage((old) => old - 1)}>
          previous
        </button>
        <button
          disabled={!data.info.next}
          onClick={() => setPage((old) => old + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default FetchingData;
