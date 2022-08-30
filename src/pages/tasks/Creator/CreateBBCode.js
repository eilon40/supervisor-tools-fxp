import { Textarea, Text, Link, Box, Flex, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const CreateBBCode = ({ data, cat, type }) => {
    const { user, forum, manager } = data;
    const [showCode, setShowCode] = useState(false);
    const [copied, setCopied] = useState(false);
    // const wording =
    //     type === 'mmop'
    //         ? cat.generate(forum, user, manager) // פונקציה מחוללת ממו"פ
    //         : cat.generateMmoh(user, manager); // פונקציה מחוללת ממו"ח
    const wording =
        type === 'mmop'
            ? cat.generate(forum, user, manager) // פונקציה מחוללת ממו"פ
            : cat.onlyManagerMmoh
            ? cat.generateMmoh(manager)
            : cat.generateMmoh(user, manager); // פונקציה מחוללת ממו"ח

    const linkHagasha =
        type === 'mmop'
            ? 'https://www.fxp.co.il/showthread.php?t=16436014' // קישור לממו"פ
            : 'https://www.fxp.co.il/showthread.php?t=12349038'; // קישור לממו"ח

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false);
            }, 5000);
        }
    }, [copied]);

    function copy() {
        setCopied(true);
        navigator.clipboard.writeText(wording);
    }

    return (
        <Box align='center' mt={-10}>
            <Flex flexDirection={'column'} gap={3} align='center'>
                <Text
                    color='white'
                    bg='fxpDark'
                    px={5}
                    py={2}
                    borderRadius={'md'}
                    boxShadow={'0 0 15px #33333366'}
                    mt={8}
                    mb={10}
                >
                    הקוד נוצר בהצלחה!
                </Text>

                <Flex
                    gap={{ base: 5, md: 10 }}
                    flexDirection={{ base: 'column', md: 'row' }}
                >
                    <Button
                        onClick={() => setShowCode(!showCode)}
                        colorScheme={showCode ? 'messenger' : 'whatsapp'}
                        w='100%'
                    >
                        {showCode ? 'להסתיר' : 'לראות'} את הקוד 👀
                    </Button>
                    <Button
                        onClick={copy}
                        colorScheme={copied ? 'green' : 'yellow'}
                        w='100%'
                    >
                        {copied ? 'הקוד הועתק בהצלחה! 👏' : 'העתק את הקוד 📄'}
                    </Button>
                    <Link href={linkHagasha} target={'_blank'}>
                        <Button variant={'menu-noshadow-btn'} w='100%'>
                            גש לאשכול ההגשה
                            <ExternalLinkIcon ml={1} />
                        </Button>
                    </Link>
                </Flex>
                <Text>
                    <sub style={{ color: 'red' }}>
                        ** פעולת ההעתקה מעתיקה באופן מקיף את הקוד כלל רווחים
                        וירידות שורה. לא נדרש להעתיק את הקוד הגולמי.
                    </sub>
                </Text>
                <br />
            </Flex>
            {showCode && (
                <Textarea bg={'fxpWhite'} readOnly rows={15} value={wording} />
            )}
        </Box>
    );
};

export default CreateBBCode;
