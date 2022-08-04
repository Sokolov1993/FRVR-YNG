import React from 'react';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import stylesSection from '../Section.module.scss';

const Pending = () => {
  return (
    <section className={stylesSection.section}>
      <div className={stylesSection.wrapper}>
        <Stack
          spacing={1}
          maxWidth="1200px"
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="flex-start"
          gap="145px"
        >
          <Skeleton variant="rectangular" width={300} height={545} />
          <Skeleton variant="rectangular" width={300} height={545} />
          <Skeleton variant="rectangular" width={300} height={545} />
          <Skeleton variant="rectangular" width={300} height={545} />
          <Skeleton variant="rectangular" width={300} height={545} />
          <Skeleton variant="rectangular" width={300} height={545} />
        </Stack>
      </div>
    </section>
  );
};

export default Pending;
