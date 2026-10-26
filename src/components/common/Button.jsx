import { clsx } from "clsx";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  loading = false,
  onClick,
  href,
  type = "button",
  target,
  rel,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-xs sm:text-sm px-4 py-2 gap-2",
    lg: "text-sm sm:text-base px-5 py-2.5 gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-henna-700 hover:bg-henna-800 text-white shadow-subtle border border-henna-600/50",
    secondary:
      "bg-stone-900 hover:bg-black text-white shadow-subtle",
    outline:
      "bg-transparent hover:bg-henna-50 text-henna-800 border border-henna-700/30",
    champagne:
      "bg-champagne-100 hover:bg-champagne-200 text-champagne-900 border border-champagne-300",
    whatsapp:
      "bg-emerald-600 hover:bg-emerald-700 text-white shadow-subtle",
    subtle:
      "bg-stone-100 hover:bg-stone-200 text-stone-700",
  };

  const combinedClasses = clsx(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        onClick={onClick}
        {...props}
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-1" />
        ) : null}
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-1" />
      ) : null}
      {children}
    </button>
  );
}
