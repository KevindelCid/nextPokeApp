import { FC, PropsWithChildren } from "react";

export const FlexLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ul className="
        flex px-8 
        gap-4	
        flex-wrap 
        flex-row  
        justify-center" >{children}</ul>
    );
};
