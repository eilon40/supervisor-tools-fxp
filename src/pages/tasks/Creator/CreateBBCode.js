import { Textarea, Text, Link, Box, Flex, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
// import mainGenFunc from '../../../data/codeGenerators';

const CreateBBCode = ({ data, cat, type }) => {
    const { user, forum, manager } = data;
    const [showCode, setShowCode] = useState(false);
    const [copied, setCopied] = useState(false);
    const wording =
        type === 'mmop'
            ? cat.generate(forum, user, manager) // פונקציה מחוללת ממו"פ
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
        <Box align='center'>
            <Flex flexDirection={'column'} gap={3} my={5} align='center'>
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
                    הקוד נוצר בהצלחה! כעת כל שנדרש הוא להעתיק את הקוד ולהגיש{' '}
                    <Link href={linkHagasha} color='red' fontWeight={'bold'}>
                        כאן
                    </Link>{' '}
                    {':)'}
                </Text>
                <Button
                    onClick={copy}
                    colorScheme={copied ? 'green' : 'yellow'}
                >
                    {copied ? 'הקוד הועתק בהצלחה! 👏' : 'העתק את הקוד 📄'}
                </Button>
                <sub style={{ color: 'red', marginBottom: '1em' }}>
                    ** פעולת ההעתקה מעתיקה באופן מקיף את הקוד כלל רווחים וירידות
                    שורה. לא נדרש להעתיק את הקוד הגולמי.
                </sub>
                <br />
                <sub style={{ color: '#3e3e3e', marginBottom: '1em' }}>
                    אבל גם לאלו שאוהבים אפשר...
                </sub>
                <Button
                    onClick={() => setShowCode(!showCode)}
                    colorScheme={'messenger'}
                >
                    {showCode ? 'להסתיר' : 'לראות'} את הקוד 👀
                </Button>
            </Flex>
            {showCode && <Textarea readOnly rows={15} value={wording} />}
        </Box>
    );
};

export default CreateBBCode;
