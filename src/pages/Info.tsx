import { Title, Text, Divider, Box, Center, Flex } from "@mantine/core";
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { MainLayout } from '../layout';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Info = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const dividerRef = useRef(null);
  const contactRef = useRef(null);
  const tl = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current
        .to(headerRef.current, { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          delay: 0.2 
        })
        .to(contentRef.current, { 
          opacity: 1, 
          y: 0, 
          duration: 1 
        }, '-=0.5')
        .to(dividerRef.current, { 
          opacity: 1, 
          scaleX: 1, 
          duration: 1 
        }, '-=0.5')
        .to(contactRef.current, { 
          opacity: 1, 
          y: 0, 
          duration: 1 
        }, '-=0.5')
        .play();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <MainLayout>
      <Box 
        ref={containerRef}
        h="80vh" 
        bg="#F6F5F5" 
        p="xl"
      >
        <Flex 
          ref={headerRef}
          align="center" 
          justify="space-between" 
          mb="xl"
          style={{ 
            opacity: 0,
            transform: 'translateY(-20px)'
          }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Flex align="center" gap="md">
              <IoIosArrowBack size={24} />
              <Text fz="16px">BACK</Text>
            </Flex>
          </Link>
          <Title order={1}>INFO</Title>
          <Box w={100} />
        </Flex>

        <Box mt="xl">
          <Center 
            mb="xl" 
            ref={contentRef}
            style={{ 
              opacity: 0,
              transform: 'translateY(20px)'
            }}
          >
                
            <Text ta="center" size="xl">
              Femi Elias is a media and production services company focused on music videos, creative visuals and television.
            </Text>
          </Center>

          <Divider 
            my="xl" 
            ref={dividerRef}
            style={{ 
              opacity: 0,
              transform: 'scaleX(0)'
            }}
          />

          <Box 
            ref={contactRef}
            style={{ 
              opacity: 0,
              transform: 'translateY(20px)'
            }}
          >
             
            <Title order={2} mb="md" ta="center">CONTACT</Title>
            <Text size="lg" ta="center">fehmeelias@gmail.com</Text>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};