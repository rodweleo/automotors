import { ReactNode } from "react"

export const PopularCar = ({children}: {children : ReactNode}) =>{
    return <div className="popular-car-card">
        {children}
    </div>
}