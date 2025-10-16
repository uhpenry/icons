'use client';

import { iconEntry, GoogleIcon, VercelIcon } from '@uhpenry/icons';
import { usePreference } from '@/context/preference';

const DisplayIcon = () => {
  const { theme } = usePreference();
  console.log({ theme });
  return (
    <div className='flex flex-wrap items-center gap-4 p-4 rounded-lg border container mx-auto h-[50rem] overflow-y-auto'>
      <VercelIcon size={50} theme={theme} />
      <GoogleIcon size={50} theme={theme} />
      {/* {iconEntry.map((entry, index) => (
        <span title={entry.name} className='inline-flex flex-col' key={index}>
          <entry.icon size={50} theme={theme} />
          <span className='text-xs'>{entry.name}</span>
        </span>
      ))} */}
    </div>
  );
};

export default DisplayIcon;
