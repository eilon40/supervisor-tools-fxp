import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
} from '@chakra-ui/react';

const InlineError = (props) => {
    return (
        <Box align='center'>
            <Alert
                {...props}
                status={'error'}
                borderRadius={'md'}
                boxShadow={'0 0 15px #33333333'}
                w={'max-content'}
            >
                <AlertIcon />
                <AlertTitle>שגיאה!</AlertTitle>
                <AlertDescription>{props.children}</AlertDescription>
            </Alert>
        </Box>
    );
};

export default InlineError;
