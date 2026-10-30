export const H1 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={`font-bold font-heading text-lg ${className || ""}`}>
      {children}
    </h1>
  );
};

export const H2 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={`font-bold font-heading text-md ${className || ""}`}>
      {children}
    </h2>
  );
};

export const H3 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={`font-bold font-heading text-sm ${className || ""}`}>
      {children}
    </h3>
  );
};
