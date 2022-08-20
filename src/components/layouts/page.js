import { Container, Heading, Text, Flex, Link } from '@chakra-ui/react';

const PageLayout = ({ title, subtitle, usefulLinks, children }) => {
    return (
        <Flex flexDirection={'column'} gap={10}>
            {usefulLinks && (
                <Flex
                    gap={10}
                    mt={10}
                    align='center'
                    boxShadow={'0 2px 10px #00000033'}
                    borderRadius='20px'
                    px={2}
                    fontSize={'.8em'}
                    color={'fxpDark'}
                    py={1}
                >
                    <Text fontWeight={''}>קישורים שימושיים:</Text>
                    {usefulLinks.map((link, index) => (
                        <Flex m={0} key={index} gap={4}>
                            {/* {index !== 0 && '//'} */}
                            <Link
                                target={'_blank'}
                                fontWeight={'bold'}
                                href={link.href}
                                color={link.color ? link.color : 'fxpDark'}
                            >
                                {link.name}
                            </Link>
                        </Flex>
                    ))}
                </Flex>
            )}
            <Flex mb={5} mt={2} flexDirection={'column'} align={'center'}>
                <Heading variant={'normal-h'}>{title}</Heading>
                <Heading variant={'sub-h'}>{subtitle}</Heading>
            </Flex>
            <Container maxW={'container.md'}>{children}</Container>
        </Flex>
    );
};

export default PageLayout;
