import { FC } from "react";

interface NeonBorderProps {
  children: React.ReactNode;
  borderColor: string;
}

const NeonBorder: FC<NeonBorderProps> = ({ children, borderColor }) => {
  const neonBorderStyles = {
    borderColor: borderColor,
    boxShadow: `0 0 3px ${borderColor}, 0 0 3px ${borderColor}, 0 0 3px ${borderColor}, 0 0 3px ${borderColor}, 0 0 10px ${borderColor}`,
  };

  return (
    <div className="relative inline-block rounded-lg" style={neonBorderStyles}>
      <div className="absolute inset-0 rounded-lg" style={{ ...neonBorderStyles, filter: 'blur(20px)' }}></div>
      {children}
    </div>
  );
};

export default NeonBorder;
