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
import { useState, useRef, useEffect } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';

const Fields = ({ nameSetter, linkSetter, reasonSetter, name }) => {
    const [disableAll, setDisableAll] = useState(false);
    const [fieldName, setFieldName] = useState('');
    const [fieldColor, setFieldColor] = useState('');

    const nameRef = useRef(null);
    const linkRef = useRef(null);
    const reasonRef = useRef(null);

    useEffect(() => {
        switch (name) {
            case 'forum':
                setFieldName('פורום');
                return setFieldColor('#daa520');
            case 'manager':
                setFieldName('מנהל');
                return setFieldColor('#ff0000');
            case 'user':
                setFieldName('משתמש');
                return setFieldColor('#3e3e3e');
            default:
                setFieldName('משתמש/מנהל/פורום');
                return setFieldColor('#3e3e3e');
        }
    }, [name]);

    function disableAndClearFields(e) {
        setDisableAll(e.target.checked);
        if (e.target.checked) {
            nameRef.current.value = '';
            linkRef.current.value = '';
            reasonRef.current.value = '';
            nameSetter('לא נבחר השבוע');
            linkSetter('http://www.fxp.co.il');
            reasonSetter('~');
        } else {
            nameSetter('');
            linkSetter('');
            reasonSetter('');
        }
    }

    return (
        <Box my={10} textAlign='center'>
            <Heading variant={'fields-h'}>
                שדה בחירת <span style={{ color: fieldColor }}>{fieldName}</span>
            </Heading>
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
                    סמן במידה ואין {fieldName} השבוע.
                </Checkbox>
            </Box>
            <Flex
                maxW={{ base: '100%', md: '60%' }}
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
                        placeholder={`הזן את שם ה${fieldName}`}
                    />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children={<AiOutlineLink />} />
                    <Input
                        ref={linkRef}
                        disabled={disableAll}
                        onChange={(e) => linkSetter(e.target.value.trim())}
                        placeholder={`הזן קישור תקין ל${fieldName}`}
                    />
                </InputGroup>
                <Textarea
                    ref={reasonRef}
                    disabled={disableAll}
                    onChange={(e) => reasonSetter(e.target.value.trim())}
                    placeholder={`הזן סיבה מפורטת מדוע נבחר ${fieldName} זה`}
                />
            </Flex>
        </Box>
    );
};

export default Fields;
