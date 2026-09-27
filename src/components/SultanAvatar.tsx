import { useState } from "react";

const getInitials = (name: string) => {
  const parts = name.split(" ");
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
};

const SultanAvatar = ({ name, src, className = "" }: { name: string; src: string; className?: string }) => {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-ottoman-gold/20 to-ottoman-green/20 ${className}`}>
        <span className="font-display font-bold text-primary text-lg select-none">
          {getInitials(name)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
};

export default SultanAvatar;
