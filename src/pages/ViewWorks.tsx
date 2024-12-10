import { Box, Title, Flex, Text, Center } from "@mantine/core";
import { useParams, Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { WorkData } from '../constants/workData';
import { MainLayout } from '../layout';

export const ViewWorks = () => {
  const { id } = useParams<{ id: string }>();
  const work = id ? WorkData[parseInt(id) - 1] : undefined;

  if (!work) return <Center>Work not found</Center>;

  return (
    <MainLayout>
      <Box 
        h={{base: "100%", sm: "100%"}}
        px={{ base: "5%", sm: "15%", md: "25%" }} 
        bg="#F6F5F5"
      >
        <Flex 
          pt={{ base: "12px", sm: "20px" }}
          bg="#F6F5F5" 
          align="center" 
          justify="space-between" 
          mb={{ base: "lg", sm: "xl" }}
        >
          <Link to="/workslist" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Flex align="center" gap={{ base: "sm", sm: "md" }}>
              <IoIosArrowBack size={24} />
              <Text fz="16px">BACK</Text>
            </Flex>
          </Link>
          <Title order={1} fz={{ base: "28px", sm: "36px" }} fw={500}>WORK</Title>
          <Box w={{ base: 50, sm: 100 }} />
        </Flex>

        <Center style={{ flexDirection: "column" }} pb={{base: "32px", sm:"0"}} >
          <Text 
            c="#6C757D" 
            fz={{ base: "24px", sm: "32px" }}
            fw="500"
            ta="center"
          >
            {work.name}
          </Text>
          <Box component="iframe"
            src={work.embeddedUrl}
            width="100%"
            h={{ base: "300px", sm: "450px", md: "600px" }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <Title fz={{ base: "24px", sm: "36px" }}>
            Directed by Femi Elias
          </Title>
        </Center>
      </Box>
    </MainLayout>
  );
};