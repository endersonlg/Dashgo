import { Flex,Box,Text,Avatar } from "@chakra-ui/react";

export function Profile(){
  return (
    <Flex
    align="center"
  >
    <Box mr="4" textAlign="right">
      <Text>Enderson Garcia</Text>
      <Text
        color="gray.300"
        fontSize="small"
      >
        endersonluciog@gmail.com
      </Text>
    </Box>
    <Avatar size="md" name="Enderson Garcia" src="https://github.com/endersonlg.png"/>
  </Flex>
  )
}