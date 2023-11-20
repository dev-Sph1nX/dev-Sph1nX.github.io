import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function MainSection(){

    const words = ['Work', 'in', 'progress'];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const delay = 1000; // Délai entre les mots en millisecondes
  
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, delay);
  
      return () => clearInterval(interval);
    }, [words.length]);

    return <Center  color="black" 
    h={"90vh"}
    px={"15%"}
    >
        <Box>

        <Text mb={5} fontSize={{base: "xl", sm: "2xl", md:"4xl", xl: "6xl"}} fontWeight={"semibold"}>

        Bonjour ✌️ <br />
Je m’appelle Lucas et je suis développeur. <br />
Étudiant aux Gobelins, j’aime travailler autour de l’UI et de l’UX.
        </Text>
        <Flex gap={1} color={"#DB5461"} fontWeight={"semibold"}>
        {words.map((word, index) => (
          <span key={index} style={{ opacity: index <= currentIndex ? 1 : 0 }}>
            {word}
          </span>
        ))}
            </Flex>
        </Box>
    </Center>

} 