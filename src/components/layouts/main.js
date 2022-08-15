import { Container, Flex } from '@chakra-ui/react';
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
                h={'100%'}
            >
                <Menu />
                {children}
            </Container>
        </Flex>
    );
};

export default MainLayout;
