import { Textarea, Box, Button } from '@chakra-ui/react';
import mainGenFunc from '../../../data/codeGenerators';

const CreateBBCode = ({ data, cat }) => {
    const { user, forum, manager } = data;
    const wording = cat.generate(forum, user, manager);

    function copy() {
        navigator.clipboard.writeText(wording);
    }

    return (
        <Box>
            <Button onClick={copy}>העתק ללוח</Button>
            <Textarea readOnly value={wording} />
        </Box>
    );
};

export default CreateBBCode;
