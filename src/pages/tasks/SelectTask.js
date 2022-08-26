import PageLayout from '../../components/layouts/page';
import { Box } from '@chakra-ui/react';
import { mmoh, mmop } from '../../data/pages';
import Creator from './Creator';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const SelectTasks = () => {
    const [pageData, setPageData] = useState({ ...mmop, current: 'mmop' });
    const [catParam, setCatParam] = useState(-1);

    useEffect(() => {
        const searchQuery = new URLSearchParams(window.location.search);
        const actionParam = searchQuery.get('action');
        const favCatId = parseInt(searchQuery.get('cat'));

        switch (actionParam) {
            case 'mmop':
                setPageData({ ...mmop, current: 'mmop' });
                break;
            case 'mmoh':
                setPageData({ ...mmoh, current: 'mmoh' });
                break;
            default:
                setPageData(null);
        }

        if (favCatId) {
            setCatParam(favCatId);
        }
    }, []);

    if (pageData === null) return <Navigate to={'/'} />;
    return (
        <Box>
            <PageLayout
                title={pageData.title}
                usefulLinks={pageData.usefulLinks}
                subtitle={pageData.subtitle}
            >
                <Creator favCat={catParam} current={pageData.current} />
            </PageLayout>
        </Box>
    );
};

export default SelectTasks;
