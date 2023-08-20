import { PropsWithChildren } from "react";
import { UserProvider } from "./UserProvider";
import { CartProvider } from "./CartProvider";

export default function ContextProvider ({children} : PropsWithChildren) {
    return (
        <UserProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </UserProvider>
    )
}