import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, docsRoute, gitConfig } from './shared';
import { BookOpen, ExternalLink } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        type: 'main',
        url: docsRoute,
        text: 'Docs',
        icon: <BookOpen className="size-4" />,
      },
      {
        type: 'icon',
        url: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
        text: 'GitHub',
        icon: <ExternalLink className="size-4" />,
        external: true,
      },
    ],
  };
}

export { docsRoute };