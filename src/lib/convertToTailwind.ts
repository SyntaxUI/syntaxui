export  function generateTailwindGradient({
    shape,
    direction,
    from,
    via,
    to
  }: {
    shape: string;
    direction: string;
    from: string;
    via: string; 
    to: string;
  }): string {
    return `bg-[radial-gradient(${shape}_at_${direction},_var(--tw-gradient-stops))] from-[${from}] via-[${via}] to-[${to}]`;
  }
  

  
  