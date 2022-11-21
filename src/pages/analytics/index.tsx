import { Box, Heading, Highlight, Text, Badge } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Chart } from "react-google-charts";
import { AuthContext } from "../../Context/AuthContext";
import { queries } from "../../services/queries";

const Analytics = () => {
  const { data: news } = queries.GetNews()
  const { user } = useContext(AuthContext)
  function DataNews(data: string) {
    const newsSize = news?.filter((e) => e.category === data)
    const newsName = news?.find((e) => e.category === data)
    return [newsName?.category, newsSize?.length, ""]
  }
  const categoriesNews = news?.map((news) => news.category)
  const newsArray = categoriesNews?.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  })
  const data: any = newsArray?.map((news) => DataNews(news))
  const elementNews = data?.unshift(["Notícias", "Categorias", { "role": "blue" }])
  return (
    <Box bgColor="white" mt={5}>
      <Box textAlign="center">
        <Heading fontSize='3xl'>Notícias por categorias </Heading>
        <Text fontSize='md'>
          Este gráfico representa
          <Badge borderRadius='full' colorScheme='purple' fontSize='md' m={2} p={2}>
            {news?.length} notícias
          </Badge>  recentes em
          relação a recorrência de suas categorias pelo dataset.
        </Text>
      </Box>
      <Chart
        chartType="ColumnChart"
        data={data}
        width={"100%"}
        height={"400px"}
      />

    </Box>
  );
}
export default Analytics