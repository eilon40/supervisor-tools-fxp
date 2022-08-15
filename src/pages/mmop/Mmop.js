import PageLayout from '../../components/layouts/page';
import { Box } from '@chakra-ui/react';
import * as page from '../../data/pages';
import Creator from './Creator';

const Mmop = () => {
    const mmop = page.mmop;
    return (
        <Box>
            <PageLayout
                title={mmop.title}
                usefulLinks={mmop.usefulLinks}
                subtitle={mmop.subtitle}
            >
                <Creator />
            </PageLayout>
        </Box>
    );
};

export default Mmop;
