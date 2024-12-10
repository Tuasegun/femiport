import { Box, Flex, Text, Group } from '@mantine/core';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const Footer = () => {
  return (
    <Box
      component="footer"
      py={{ base: "8px", sm: "16px" }}
      px={{ base: "5%", sm: "10%" }}
      bg="#FFFFFF"
      pos="sticky"
      h={{ base: "auto", sm: "60px" }}
      bottom="0"
    >
      <Flex
        justify="space-between"
        align={{ base: "stretch", sm: "center" }}
        direction={{ base: "column", sm: "row" }}
        gap={{ base: "md", sm: "0" }}
      >
        {/* Left side content */}
        <Flex 
          gap="md" 
          align="center"
          wrap="wrap"
          justify={{ base: "center", sm: "flex-start" }}
        >
        
          <Text fz={{ base: "sm", sm: "md" }}>© 2025 FEMI ELIAS</Text>
          <Text c="dimmed" display={{ base: "none", sm: "block" }}>|</Text>
          <Text fz={{ base: "sm", sm: "md" }}>All Rights Reserved</Text>
        </Flex>

        {/* Right side content */}
        <Flex 
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "md", sm: "lg" }}
          align={{ base: "center", sm: "center" }}
        >
          {/* Links */}
          <Flex 
            gap={{ base: "md", sm: "xl" }}
            direction={{ base: "column", sm: "row" }}
            align={{ base: "center", sm: "flex-start" }}
          >
            {/* <Title order={4} size="h4">PRIVACY</Title> */}
            <Text
              component="a"
              href="tel:+2348168859168"
              c="#212529"
              fw="700"
              size="h4"
              style={{
                textDecoration: "none"
              }}
            >
             CONTACT US
            </Text>
            
          </Flex>

          {/* Social icons */}
          <Group gap="xl" justify="center">
            <Box c="#212529" component="a" href="https://www.instagram.com/femi_elias?igsh=dWxscmo5NGhnZTh0&utm_source=qr">
              <FaInstagram size={24} style={{ cursor: 'pointer' }} />
            </Box>
            <Box c="#212529" component="a" href="x.com/femielias">
              <FaTwitter size={24} style={{ cursor: 'pointer' }} />
            </Box>
            <Box c="#212529" component="a" href="mailto:fehmeelias@gmail.com">
              <MdEmail size={24} style={{ cursor: 'pointer' }} />
            </Box>
          </Group>
        </Flex>
      </Flex>
    </Box>
  );
};