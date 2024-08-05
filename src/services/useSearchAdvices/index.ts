import { skipToken, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Search } from "../../types/Search";

const useSearchAdvices = () => {
  const [search, setSearch] = useState("");

  const fetchRandomAdvice = async (
    search: string
  ): Promise<Search> => {
    const response = await fetch(
      `https://api.adviceslip.com/advice/search/${search}`
    );
    return await response.json();
  };

  const { error, data, isLoading} = useQuery({
    queryKey: ["filteredAdvice", search],
    queryFn: search ? () => fetchRandomAdvice(search) : skipToken,
  });

  return {
    error,
    data,
    isLoading,
    searchAdvice: (param: string) => param !== search && setSearch(param),
  };
};

export default useSearchAdvices;
