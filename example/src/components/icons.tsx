'use client';

import { usePreference } from '@/context/preference';
import { iconEntry, GoogleIcon, VercelIcon, svgEntry } from '@uhpenry/icons';

const DisplayIcon = () => {
  const { theme } = usePreference();
  console.log({ theme });
  return (
    <div className='flex flex-wrap items-center gap-4 p-4 rounded-lg border container mx-auto h-[50rem] overflow-y-auto'>
      <VercelIcon size={50} theme={theme} />
      <GoogleIcon size={50} theme={theme} />
      {iconEntry.map((entry, index) => (
        <span title={entry.name} className='inline-flex flex-col' key={index}>
          <entry.icon size={50} theme={theme} />
          <span className='text-xs'>{entry.name}</span>
        </span>
      ))}
      SVG ENTRY?::::::::::::::::::::::::::::
      {svgEntry.map((entry: any, index: number) => {
        // pick the svg string
        const raw = entry.svg.light || entry.svg.dark || '';

        // Inject width/height attributes into the <svg ...> tag (keeps viewBox if present)
        const sizedSvg = raw.replace(/<svg([^>]*)>/i, (match, attrs) => {
          // remove any existing width/height to avoid duplicates
          const cleaned = attrs.replace(
            /\s*(width|height)=["'][^"']*["']/gi,
            ''
          );
          return `<svg${cleaned} width="32" height="32">`;
        });

        return (
          <span
            key={index}
            title={entry.name}
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              // wrapper sizing (numbers are ok here)
              style={{ display: 'inline-block', width: 32, height: 32 }}
              dangerouslySetInnerHTML={{ __html: sizedSvg }}
            />
            <span style={{ fontSize: 10, marginTop: 4 }}>{entry.name}</span>
          </span>
        );
      })}
    </div>
  );
};

export default DisplayIcon;
