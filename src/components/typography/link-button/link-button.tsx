import { ReactNode } from "react"

interface LinkButtonProps {
    children: ReactNode
}

const LinkButtonStyle = {

}

export function LinkButton ({children}:LinkButtonProps) {
    return(<p style={LinkButtonStyle}>{children}</p>)
}