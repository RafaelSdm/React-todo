import { useEffect, useState } from "react"


type IconProps = {
    variant: string;
}


export const Icon: React.FC<IconProps> = ({variant}: IconProps) =>{

    const[iconSrc, setIconSrc] = useState();

    useEffect(() =>{
        const mount = async () =>{
            
            const result =  await  import(`../../../public/${variant}.svg`)
            setIconSrc(result.default);
        }

        mount()
    }, [variant])



    return(

        <img src={iconSrc} alt="img" height='22px' width='22px'/>


    )
}