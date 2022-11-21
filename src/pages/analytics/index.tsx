import { Box, Heading, Highlight, Text, Badge } from "@chakra-ui/react";
import React from "react";
import { Chart } from "react-google-charts";
import { queries } from "../../services/queries";


const Analytics = () => {
  const { data: news } = queries.GetNews()
  const data = [
    ["Element", "Categorias", { role: "blue" }],
    ["Mercados", 10, ""],
    ["Um conteúdo Bússola", 20, ""],
    ["Pop", 19.3, ""],
    ["Mundo", 10.45, ""],
    ["Brasil", 8.45, ""],
    ["Economia", 20, ""],
    ["Future of Money", 15.45, ""],
    ["Dinheiro e tendências", 11, ""],
  ];
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
      <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />

    </Box>
  );
}
export default Analytics