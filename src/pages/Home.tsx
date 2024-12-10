import { useRef, useEffect } from 'react';
import { MainLayout } from '../layout';
import { Box, Title, Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { WorkData } from '../constants/workData';
import gsap from 'gsap';


export const Home = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  useEffect(() => {
    // Set initial state for all titles
    titleRefs.current.forEach((title) => {
      gsap.set(title, {
        y: 20,
        opacity: 0
      });
    });

    // Animate the first title on mount
    gsap.to(titleRefs.current[0], {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    });
  }, []);

     
  const handleSlideChange = (index: number) => {
    // Reset all titles
    titleRefs.current.forEach((title) => {
      gsap.set(title, {
        y: 20,
        opacity: 0
      });
    });

    // Animate the current title
    gsap.to(titleRefs.current[index], {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "power3.out"
    });
  };


  return (
    <MainLayout>
      <Box 
        bg="rgba(246, 245, 245, 1)" 
        py={{ base: "30%", sm: "68px" }}
        pos="relative"
        h="80vh"
      >
        
        <Carousel
          withControls={false}
          height="100%"
          loop
          plugins={[autoplay.current]}
          align="start"
          slideSize="100%"
          slidesToScroll={1}
          onSlideChange={(index) => handleSlideChange(index)}
          styles={{
            viewport: {
              height: '100%',
            },
            slide: {
              height: '100%',
            },
          }}
        >
          {WorkData.map((work, index) => (
            <Carousel.Slide key={index}>
              <Box pos="relative" h="100%" w="100vw">
                <Image
                  src={work.workImage}
                  alt={work.name}
                  h={{base: 200, sm: "100%"}}
                  // style={{
                  //   width: '100%',
                  //   height: '100%',
                  //   objectFit: 'cover',
                  //   objectPosition: 'center',
                  // }}
                />
                <Box
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="rgba(0, 0, 0, 0.3)"
                />
                <Title
                   
                  ref={el => titleRefs.current[index] = el}
                  data-active             
                  pos="absolute"
                  bottom={{ base: "24px", sm: "76px" }}
                  left={{ base: "24px", sm: "76px" }}
                  c="white"
                  size="h1"
                  fz={{ base: "28px", sm: "45px" }}
                  style={{ 
                    zIndex: 2,
                  }}

                >
                  {work.name}
                </Title>
              </Box>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Box>
    </MainLayout>
  );
};