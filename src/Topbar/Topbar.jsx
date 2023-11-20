import { Flex, Text } from "@chakra-ui/react";

export default function Topbar(){
    return <Flex color="#686963" 
    px={20}
    h={"10vh"} fontWeight={"semibold"}
    align={"center"}
    justify={"space-between"}
    >
        <Text>

        lucasleperlier
        </Text>
        <Text opacity={0.5} cursor={"not-allowed"}>
            Mes projets
        </Text>
    </Flex>

} 