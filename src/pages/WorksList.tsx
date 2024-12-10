import { Box, Title, SimpleGrid, Flex, Text } from "@mantine/core";
import { MainLayout } from '../layout';
import { WorkData } from '../constants/workData';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WorkItem {
  id: number;
  name: string;
  workImage: string;
}

export const WorksList = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridItemsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    gsap.to(headerRef.current, {
      delay: 1,
      opacity: '1',
      duration: 1,
      ease: "power3.out"
    });
    gridItemsRef.current.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        y: 200,
        opacity: '0',
        duration: 1.5,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });

    return () => {
      // @ts-ignore
      ScrollTrigger.getAll().forEach(trigger => trigger.revert());
    };
  }, []);
  
  return (
    <MainLayout>
      <Box py={{ base: "16px", sm: "32px" }} px={{ base: "5%", sm: "10%" }}   bg="#F6F5F5" >
        <Flex 
         ref={headerRef}
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          mb={{ base: "24px", sm: "48px" }}
          opacity={0}
        >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Flex align="center" gap="sm" mb={{ base: "16px", sm: "0" }}>
              <IoIosArrowBack size={24} color="#212529" />
              <Text c="#212529" fz={{ base: "16px", sm: "18px" }}>BACK</Text>
            </Flex>
          </Link>
          
          <Title 
            order={1} 
            fz={{ base: "28px", sm: "45px" }}
            fw={400}
            ta={{ base: "left", sm: "center" }}
          >
            WORKS
          </Title>
          
          <Box w={{ base: "auto", sm: "80px" }} /> {/* Spacer */}
        </Flex>

        <SimpleGrid 
          cols={{ base: 1, sm: 2 }}
          spacing={{ base: "16px", sm: "24px" }}
        >
          {WorkData.map((work: WorkItem, index) => (
            <Box
              key={index}
              pos="relative"
              ref={el => gridItemsRef.current[index] = el}
             
              component={Link}
              to={`/work/${work.id}`}
              style={{ textDecoration: 'none' }}
            >
              <Box
                pos="relative"
                h={{ base: "250px", sm: "400px" }}
                w="100%"
                style={{ overflow: 'hidden' }}
              >
                <img
                  src={work.workImage}
                  alt={work.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <Box
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="rgba(0, 0, 0, 0.3)"
                  style={{
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }}
                />
                <Title
                  pos="absolute"
                  bottom={{ base: "16px", sm: "24px" }}
                  left={{ base: "16px", sm: "24px" }}
                  c="white"
                  fz={{ base: "24px", sm: "32px" }}
                  fw={400}
                >
                  {work.name}
                </Title>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </MainLayout>
  );
};