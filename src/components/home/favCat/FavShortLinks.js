import { Flex, Link, Button, Box } from '@chakra-ui/react';

const FavShortLinks = ({ catId }) => {
    const relativeFavCatURL = (type, catId) =>
        `/tasks?action=${type}&cat=${catId}`;

    return (
        <>
            <Flex
                gap={{ base: 5, md: 14 }}
                mt={{ base: 10, md: 4 }}
                mb={5}
                flexDirection={{ base: 'column', md: 'row' }}
            >
                <Box>
                    <Link href={relativeFavCatURL('mmop', catId)}>
                        <Button variant={'menu-btn'} size={'md'}>
                            מחולל ממו"פ מהיר
                        </Button>
                    </Link>
                </Box>
                <Box>
                    <Link href={relativeFavCatURL('mmoh', catId)}>
                        <Button variant={'menu-btn'} size={'md'}>
                            מחולל ממו"ח מהיר
                        </Button>
                    </Link>
                </Box>
            </Flex>
        </>
    );
};

export default FavShortLinks;
