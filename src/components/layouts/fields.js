import {
    Input,
    InputGroup,
    InputLeftAddon,
    Textarea,
    Flex,
    Box,
    Heading,
    Checkbox,
} from '@chakra-ui/react';
import { useState, useRef } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';

const Fields = ({ nameSetter, title, linkSetter, reasonSetter, isForum }) => {
    const [disableAll, setDisableAll] = useState(false);

    const nameRef = useRef(null);
    const linkRef = useRef(null);
    const reasonRef = useRef(null);

    function disableAndClearFields(e) {
        setDisableAll(e.target.checked);
        if (e.target.checked) {
            nameSetter('לא נבחר השבוע');
            linkSetter('http://www.fxp.co.il');
            reasonSetter('-');
            nameRef.current.value = '';
            linkRef.current.value = '';
            reasonRef.current.value = '';
        }
    }

    return (
        <Box my={10} textAlign='center'>
            <Box mb={10}>
                <Checkbox
                    onChange={(e) => disableAndClearFields(e)}
                    borderRadius={'md'}
                    border='1px solid #cccccc77'
                    size='lg'
                    px={5}
                    py={2}
                    colorScheme='messenger'
                >
                    סמן במידה ואין {isForum ? 'פורום' : 'משתמש / מנהל'} השבוע.
                </Checkbox>
            </Box>
            <Heading variant={'fields-h'}>{title}</Heading>
            <Flex
                minW='30%'
                maxW='50%'
                flexDirection={'column'}
                gap={5}
                margin='0 auto'
            >
                <InputGroup>
                    <InputLeftAddon children={<FaUserAlt />} />
                    <Input
                        ref={nameRef}
                        disabled={disableAll}
                        onChange={(e) => nameSetter(e.target.value.trim())}
                        placeholder={
                            isForum
                                ? 'הזן את שם הפורום...'
                                : 'הזן את שם המשתמש...'
                        }
                    />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children={<AiOutlineLink />} />
                    <Input
                        ref={linkRef}
                        disabled={disableAll}
                        onChange={(e) => linkSetter(e.target.value.trim())}
                        placeholder={
                            isForum
                                ? 'הזן את הקישור לפורום...'
                                : 'הזן את הקישור לפרופיל המשתמש...'
                        }
                    />
                </InputGroup>
                <Textarea
                    ref={reasonRef}
                    disabled={disableAll}
                    onChange={(e) => reasonSetter(e.target.value.trim())}
                    placeholder={
                        isForum
                            ? 'הזן מדוע נבחר פורום זה...'
                            : 'הזן מדוע נבחר המשתמש/מנהל זה...'
                    }
                />
            </Flex>
        </Box>
    );
};

export default Fields;
