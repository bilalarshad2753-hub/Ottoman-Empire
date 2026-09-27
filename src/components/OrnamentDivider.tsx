const OrnamentDivider = () => (
  <div className="flex items-center justify-center gap-3 my-16 px-8">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-ottoman-red/30 to-ottoman-gold/50" />
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rotate-45 bg-ottoman-red/60" />
      <div className="w-2 h-2 rotate-45 border border-ottoman-gold/60" />
      <div className="w-3 h-3 rotate-45 border-2 border-ottoman-gold bg-ottoman-red/20" />
      <div className="w-2 h-2 rotate-45 border border-ottoman-gold/60" />
      <div className="w-1.5 h-1.5 rotate-45 bg-ottoman-red/60" />
    </div>
    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-ottoman-red/30 to-ottoman-gold/50" />
  </div>
);

export default OrnamentDivider;
