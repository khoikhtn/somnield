import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  background?: string;
  className?: string;
  widthClass?: string;
}

const Container = ({ children, className, background="", widthClass="w-[90%] max-w-[1300px]" }: ContainerProps) => {
  return (
    <div className={`text-white ${background}`}>
      <div className={`${widthClass} mx-auto py-8 max-sm:py-10 ${className}`}>
        {children}
      </div>
    </div>
  )
}

export default Container;