import { Badge, Box, Center, Heading, Spinner, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Chart } from "react-google-charts";
import { AuthContext } from "../../Context/AuthContext";
import { queries } from "../../services/queries";

const Analytics = () => {
  const router = useRouter()
  const { data: news, isLoading } = queries.GetNews()
  const { user } = useContext(AuthContext)
  function DataNews(data: string) {
    const newsSize = news?.filter((e) => e.category === data)
    const newsName = news?.find((e) => e.category === data)
    const porcentageNumber = (Number(newsSize?.length) / Number(news?.length)) * 100
    return [newsName?.category, porcentageNumber, ""]
  }
  const categoriesNews = news?.map((news) => news.category)
  const newsArray = categoriesNews?.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  })
  const data: any = newsArray?.map((news) => DataNews(news))
  const elementNews = data?.unshift(["Notícias", "Percentual", { "role": "blue" }])


  if (isLoading) return (
    <Center mt={8}>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='purple.300'
        size='xl'
      />
    </Center>
  )
  return (
    <Box bgColor="white" mt={5}>
      <Box textAlign="center">
        <Heading fontSize='3xl'>Notícias por categorias </Heading>
        <Text fontSize='md' mt={3}>
          Este gráfico representa o percentual do total de
          {''} {news?.length} notícias recentes.
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