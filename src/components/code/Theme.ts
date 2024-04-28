const theme = {
  plain: {
    color: '#ffffff',
    backgroundColor: '#18181b', // Custom background color, feel free to change
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#71717a',
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7, // Keeping the original opacity setting
        color: '#ffffff', // Adjust if needed
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#fca5a5',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#e4e4e7',
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: '#fca5a5', // Adjust to match specific type if necessary
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#7dd3fc',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: '#c4b5fd',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: '#f9a8d4',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: '#7dd3fc', // You might want to separate these if they need different colors
      },
    },
  ],
}

export default theme
