type IconProps = {
  className?: string;
};

export function AnchorIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.4">
      <circle cx="32" cy="11" r="4" />
      <line x1="32" y1="15" x2="32" y2="44" />
      <path d="M20 38a12 12 0 1 0 24 0" />
      <line x1="14" y1="33" x2="27" y2="33" />
      <line x1="37" y1="33" x2="50" y2="33" />
      <path d="M14 33c0 10 8 18 18 18" />
      <path d="M50 33c0 10-8 18-18 18" />
    </svg>
  );
}

export function ChefHatIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.3">
      <path d="M16 36h32v12H16z" />
      <path d="M19 36c-5 0-9-4-9-9s4-9 9-9c2 0 4 .5 5 1.5A12 12 0 0 1 45 20a8 8 0 1 1 0 16H19z" />
    </svg>
  );
}

export function DrinkIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M20 12h24l-4 23H24z" />
      <line x1="30" y1="35" x2="30" y2="52" />
      <line x1="22" y1="52" x2="38" y2="52" />
      <path d="M36 12l8-8" />
      <line x1="40" y1="18" x2="48" y2="10" />
    </svg>
  );
}

export function SunIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="32" cy="32" r="9" />
      <line x1="32" y1="8" x2="32" y2="16" />
      <line x1="32" y1="48" x2="32" y2="56" />
      <line x1="8" y1="32" x2="16" y2="32" />
      <line x1="48" y1="32" x2="56" y2="32" />
      <line x1="15" y1="15" x2="21" y2="21" />
      <line x1="43" y1="43" x2="49" y2="49" />
      <line x1="43" y1="21" x2="49" y2="15" />
      <line x1="15" y1="49" x2="21" y2="43" />
    </svg>
  );
}

export function UtensilsIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M16 10v15c0 3 2 5 5 5v24" />
      <line x1="13" y1="10" x2="13" y2="25" />
      <line x1="19" y1="10" x2="19" y2="25" />
      <line x1="25" y1="10" x2="25" y2="25" />
      <path d="M41 10c-4 4-5 9-5 14v30" />
      <path d="M41 10c4 4 5 9 5 14v30" />
    </svg>
  );
}

export function PinIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M32 56s17-16 17-29a17 17 0 1 0-34 0c0 13 17 29 17 29z" />
      <circle cx="32" cy="27" r="6" />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M19 13h10l4 12-6 4a36 36 0 0 0 8 8l4-6 12 4v10c0 3-2 5-5 5C28 50 14 36 14 18c0-3 2-5 5-5z" />
    </svg>
  );
}

export function MailIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.2">
      <rect x="10" y="16" width="44" height="32" rx="3" />
      <path d="M10 20l22 16 22-16" />
    </svg>
  );
}

export function FacebookIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="32" cy="32" r="24" />
      <path d="M36 20h-4c-3 0-5 2-5 5v4h9l-1 8h-8v15" />
    </svg>
  );
}
