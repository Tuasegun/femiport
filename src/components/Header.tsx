import { Box, Flex, Title, Burger } from '@mantine/core';
import { Link } from "react-router-dom";
import { useState } from 'react';


interface TitleLinkProps {
  to: string;
  size?: { base: string | number; sm: number };
  weight?: string | number;
  children: React.ReactNode;
}

const TitleLink = ({ to, size = { base: "28px", sm: 45 }, weight = "400", children }: TitleLinkProps) => (
  <Title
    component="div"
    fz={size}
    fw={weight}
    c="#212529"
  >
    <Link
      to={to}
      style={{
        textDecoration: "none",
        color: "inherit"
      }}
    >
      {children}
    </Link>
  </Title>
);


export const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Box 
      bg="#FFFFFF" 
      component='div' 
      px={{ base: "5%", sm: "10%" }}
      py={{ base: "8px", sm: "13px" }}
      pos="sticky"
      h={{ base: opened ? "auto" : "60px", sm: "90px" }}
      top="0"
     style={{
      zIndex: 1000
     }}
    >
      <Flex 
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
      >
        <Flex justify="space-between" align="center">
        <TitleLink 
            to="/" 
            size={{ base: "28px", sm: 45 }} 
            weight="700"
          >
            FEMI ELIAS
        </TitleLink>

          
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            size="sm"
            hiddenFrom="sm"
          />
        </Flex>

        <Flex
          display={{ base: opened ? "flex" : "none", sm: "flex" }}
          direction={{ base: "column", sm: "row" }}
          columnGap={{ base: "0", sm: "24px" }}
          rowGap={{ base: "16px", sm: "0" }}
          align={{ base: "flex-start", sm: "center" }}
          py={{ base: "16px", sm: "0" }}
        >
           <TitleLink to="/workslist">
            WORK
          </TitleLink>
          
          <Title 
            mt="-6px" 
            fz={{ base: "28px", sm: 45 }}
            c="#000000"
            fw="300"
            display={{ base: "none", sm: "block" }}
          >
            |
          </Title>
          
          <TitleLink to="/info">
            INFO
          </TitleLink>
        </Flex>
      </Flex>
    </Box>
  );
};