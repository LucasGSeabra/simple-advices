import { useQuery } from "@tanstack/react-query";
import { Slip } from "../../types/Slip";

const useGetRandomAdvice = () => {
  const fetchRandomAdvice = async (): Promise<Slip> => {
    const response = await fetch("https://api.adviceslip.com/advice");
    return await response.json();
  };

  const { error, data, refetch, isLoading } = useQuery({
    queryKey: ["randomAdvice"],
    queryFn: fetchRandomAdvice,
  });

  return { isLoading, error, data, refetch };
};

export default useGetRandomAdvice;
