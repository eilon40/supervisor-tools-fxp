import { Container, Flex, Text, Divider } from '@chakra-ui/react';
import Menu from './menu';

const MainLayout = ({ children }) => {
    return (
        <Flex
            flexDirection='column'
            h='100vh'
            justify='space-between'
            align='center'
            as='main'
        >
            <Container
                maxW='container.xl'
                bg='white'
                boxShadow={'0 2px 25px #00000011'}
                py={10}
                px={20}
                h={'max-content'}
            >
                <Menu />

                {children}
                <Divider mt={10} />
                <Text
                    mt={4}
                    mb={-5}
                    color={'gray.300'}
                    fontStyle={'italic'}
                    textAlign='center'
                >
                    עדכון אחרון: 20.08.22
                </Text>
            </Container>
        </Flex>
    );
};

export default MainLayout;
