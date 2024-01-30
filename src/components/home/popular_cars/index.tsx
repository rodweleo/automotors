import { PopularCar } from "./cards/popular_car"
import { PopularCarDescription } from "./cards/popular_car/popular-car-description"
import { PopularCarImage } from "./cards/popular_car/popular-car-image"
import { PopularCarName } from "./cards/popular_car/popular-car-name"

export const PopularCars = () => {
    return <section>
        <h2>Popular Cars</h2>
        <PopularCar>
            <PopularCarName name="Audi A8"/>
            <PopularCarImage name='Audi A8' imageUrl="https://imgd.aeplcdn.com/664x374/n/cw/ec/124141/a8-l-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80" />
            
            <PopularCarDescription description="Audi A8 is the fastest-growing automobile in the world"/>
        </PopularCar>
    </section>
}