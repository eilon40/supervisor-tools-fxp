import { Container, Flex, Text, Divider, Link, Image } from '@chakra-ui/react';
import logo from '../../images/logo-text.png';
import Menu from '../nav/menu';

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
                bg='#FFFFFF88'
                backdropFilter={'blur(5px)'}
                boxShadow={'0 2px 25px #00000055'}
                py={10}
                px={{ base: 5, md: 20 }}
                h={'max-content'}
            >
                <Flex justify={'center'}>
                    <Link href={'/'}>
                        <Image
                            src={logo}
                            w={'100%'}
                            maxW={'8rem'}
                            alt='tool logo'
                        />
                    </Link>
                </Flex>
                <Menu />

                {children}
                <Divider mt={10} />
                <Flex
                    mt={4}
                    mb={-5}
                    flexDirection={'column'}
                    justify='center'
                    textAlign={'center'}
                    color={'gray.600'}
                >
                    <Text fontStyle={'italic'} textAlign='center'>
                        עדכון אחרון: 26.08.22
                    </Text>
                    <Text>
                        Built with ❤️ by{' '}
                        <Link
                            target='_blank'
                            href='https://www.fxp.co.il/member.php?u=749522'
                        >
                            Middleware
                        </Link>
                    </Text>
                </Flex>
            </Container>
        </Flex>
    );
};

export default MainLayout;
