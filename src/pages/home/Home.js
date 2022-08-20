import React from 'react';
import {
    Box,
    Flex,
    Alert,
    AlertIcon,
    AlertDescription,
    AlertTitle,
} from '@chakra-ui/react';
import c from '../../data/categories';
import PageLayout from '../../components/layouts/page';

const Home = () => {
    const hasNoNosah = c.filter((cat) => !cat.generate);
    return (
        <Box>
            <PageLayout
                title={'ברוכים הבאים לPikuahToolV1!'}
                subtitle={'כאן ירוכזו כלים שימושיים עבורכם בתפקיד.'}
            >
                <Flex flexDirection={'column'} gap={6}>
                    {hasNoNosah.map((cat, index) => {
                        if (!cat.generate) {
                            return (
                                <Alert
                                    status='error'
                                    key={index}
                                    borderRadius={'md'}
                                >
                                    <AlertIcon />
                                    <AlertTitle>קטגוריית {cat.name}</AlertTitle>
                                    <AlertDescription>
                                        לא ניתן להשתמש במחולל עבור קטגורייה זו,
                                        עדיין לא הוזן עבורה נוסח.
                                    </AlertDescription>
                                </Alert>
                            );
                        }
                        return null;
                    })}
                </Flex>
            </PageLayout>
        </Box>
    );
};

export default Home;
