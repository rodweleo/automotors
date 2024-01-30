export const PopularCarImage = ({name, imageUrl} : {name: string, imageUrl: string}) => {
    return <img src={imageUrl} alt={name} height="250" width="250"/>
}