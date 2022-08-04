import React from 'react';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import stylesAboutItem from '../AboutItem.module.scss';

const Pending = () => {
  return (
    <div className={stylesAboutItem.container}>
      <div className={stylesAboutItem.wrapper}>
        <div className={stylesAboutItem.pending}>
          <Stack spacing={1}>
            <Skeleton
              className={stylesAboutItem.itemImg}
              variant="rectangular"
              width={310}
              height={412}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Pending;
