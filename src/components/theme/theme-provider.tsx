'use client'
import { ThemeProvider as NextThemeProvider, ThemeProviderProps } from "next-themes"
import Header from "../layout/header"
import { cn } from "@/lib/utils"


interface ExtendedThemeProviderProp extends ThemeProviderProps{
 containerClassName? : string;
}

export function ThemeProvider({
    children, 
    containerClassName, 
    ...props}:ExtendedThemeProviderProp){
    return(
        <NextThemeProvider{...props}>
            <Header/>
            <main className={cn(' mx-auto px-4', containerClassName)}>
                {children}
            </main>
            
        </NextThemeProvider>
    )
}