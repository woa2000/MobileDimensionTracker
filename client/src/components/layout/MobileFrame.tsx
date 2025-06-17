import { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
}

export default function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="mobile-frame">
      <div className="screen-content">
        {children}
      </div>
    </div>
  );
}
