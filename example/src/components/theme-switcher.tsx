'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      onClick={() => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      }}
      variant='outline'
      size='icon'
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeSwitcher;
