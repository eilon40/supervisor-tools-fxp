import PageLayout from '../../components/layouts/page';
import { Box } from '@chakra-ui/react';
import { mmoh, mmop } from '../../data/pages';
import Creator from './Creator';
import { useEffect, useState } from 'react';

const SelectTasks = () => {
    const [pageData, setPageData] = useState({ ...mmop, current: 'mmop' });

    useEffect(() => {
        const searchQuery = new URLSearchParams(window.location.search);
        const actionParam = searchQuery.get('action');

        switch (actionParam) {
            case 'mmop':
                return setPageData({ ...mmop, current: 'mmop' });
            case 'mmoh':
                return setPageData({ ...mmoh, current: 'mmoh' });
            default:
                setPageData({ ...mmop, current: 'mmop' });
                return (window.location.href = '/');
        }
    }, []);

    return (
        <Box>
            <PageLayout
                title={pageData.title}
                usefulLinks={pageData.usefulLinks}
                subtitle={pageData.subtitle}
            >
                <Creator current={pageData.current} />
            </PageLayout>
        </Box>
    );
};

export default SelectTasks;
