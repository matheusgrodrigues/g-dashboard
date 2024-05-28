'use client';

import { useRouter } from 'next/navigation';

import { Button, Typography } from '@mui/material';

import BaseLayout from '@/app/components/BaseLayout';

import breadcrumbRoutes from './breadcrumb';
import menuRoutes from './menu';

export default function Overview() {
    const router = useRouter();

    return (
        <BaseLayout routes={{ breadcrumbRoutes, menuRoutes }}>
            <Typography>Overview</Typography>

            <Button variant="contained" onClick={() => router.push('/')}>
                Sair
            </Button>
        </BaseLayout>
    );
}
