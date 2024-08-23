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
    const formattedDirection = direction.replace(/\s+/g, '_');
    return `bg-[radial-gradient(${shape}_at_${formattedDirection},_var(--tw-gradient-stops))] from-[${from}] via-[${via}] to-[${to}]`;
  }
  

  
  