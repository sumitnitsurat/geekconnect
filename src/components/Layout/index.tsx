import React, { ReactNode } from "react";
import {LanguageSidebar} from "components/LanguageSidebar";

export const Layout = ({children}: {children: ReactNode}) => {
    return <><LanguageSidebar/>{children}</>
}