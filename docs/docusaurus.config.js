// docusaurus.config.js
export default {
  title: 'Sirius Docs',
  url: 'https://your-org.github.io',
  baseUrl: '/sirius-docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'YourOrg',
  projectName: 'sirius-docs',
  themeConfig: {
    navbar: {
      title: 'Sirius',
      items: [
        { to: 'docs/project', label: 'Projeto de Engenharia e Qualidade', position: 'left' },
        { to: 'docs/docker/manual', label: 'Infraestrutura com Docker', position: 'left' },
      ],
    },
    colorMode: { defaultMode: 'light' },
  },
  presets: [
    ['classic', {
      docs: { sidebarPath: require.resolve('./sidebars.js'), editUrl: '' },
      theme: { customCss: require.resolve('./src/css/custom.css') },
    }],
  ],
};
