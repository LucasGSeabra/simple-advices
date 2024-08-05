import React, { useEffect, useState } from "react";
import AdviceCard from "../../components/AdviceCard";
import { Button, Container, Box, Skeleton } from "@mui/material";
import SearchBar from "../../components/SearchBar";
import useGetRandomAdvice from "../../services/useGetRandomAdvice";
import useSearchAdvices from "../../services/useSearchAdvices";
import ErrorCard from "../../components/ErrorCard";

const MainPage = () => {
  const [adviceSearch, setAdviceSearch] = useState("");
  const [screenState, setScreenState] = useState<
    "LOADING" | "ERROR" | "DONE"
  >();
  const [adviceState, setAdviceState] = useState<"RANDOM_ADVICE" | "SEARCH">(
    "RANDOM_ADVICE"
  );

  const {
    data: randomAdviceData,
    error: randomAdviceError,
    refetch: refetchRandomAdvice,
    isLoading: randomAdviceLoading,
  } = useGetRandomAdvice();

  const {
    data: searchAdviceData,
    error: searchAdviceError,
    isLoading: searchAdvicesLoading,
    searchAdvice,
  } = useSearchAdvices();

  const handleSearch = (search: string) => {
    if (search.length > 0) {
      setAdviceState("SEARCH");
      searchAdvice(search);
    }
  };

  useEffect(() => {
    if (searchAdvicesLoading || randomAdviceLoading) {
      setScreenState("LOADING");
    } else {
      setScreenState("DONE");
    }
    return;
  }, [randomAdviceLoading, searchAdvicesLoading]);

  useEffect(() => {
    if (searchAdviceError || randomAdviceError) {
      setScreenState("ERROR");
    } else {
      setScreenState("DONE");
    }
    return;
  }, [randomAdviceError, searchAdviceError]);

  return (
    <Container maxWidth={"sm"} sx={{ marginBottom: 3 }}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <SearchBar
          value={adviceSearch}
          setValue={setAdviceSearch}
          searchButtonOnPress={() => handleSearch(adviceSearch)}
        />
        {screenState === "LOADING" && (
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={60}
            animation={"wave"}
          />
        )}
        {screenState === "ERROR" && <ErrorCard />}
        {screenState === "DONE" && (
          <>
            {adviceState === "RANDOM_ADVICE" && (
              <AdviceCard
                key={randomAdviceData?.slip.id}
                advice={randomAdviceData?.slip.advice || ""}
              />
            )}
            {adviceState === "SEARCH" &&
              searchAdviceData?.slips &&
              searchAdviceData?.slips.map((advice) => {
                return (
                  <AdviceCard key={advice.id} advice={advice.advice || ""} />
                );
              })}
            {adviceState === "SEARCH" && !searchAdviceData?.slips && (
              <AdviceCard
                key="sad"
                advice={"No advices found matching that search :("}
              />
            )}
          </>
        )}

        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={() => {
            setAdviceState("RANDOM_ADVICE");
            refetchRandomAdvice();
          }}
          sx={{ marginTop: 2 }}
        >
          I need more!
        </Button>
      </Box>
    </Container>
  );
};

export default MainPage;
