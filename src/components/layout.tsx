import { Flex, FlexProps } from '@chakra-ui/react'

export const Layout = (props: FlexProps) => {

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      height="100vh"
      {...props}
    />
  )
}
