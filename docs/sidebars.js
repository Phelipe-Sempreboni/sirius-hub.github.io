module.exports = {
  sidebar: [
    {
      type: 'category',
      label: 'Projeto de Engenharia e Qualidade de Dados',
      items: ['project'],
    },
    {
      type: 'category',
      label: 'Infraestrutura com Docker',
      items: [
        {
          type: 'category',
          label: '1. Construção Manual da Imagem Docker (sem Docker Compose)',
          items: ['docker/manual']
        },
        // outros subitens...
      ],
    },
  ],
};
