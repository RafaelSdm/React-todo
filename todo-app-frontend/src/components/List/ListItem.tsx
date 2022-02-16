import {Column} from '../../components/Column'
import {Text} from '../Text'


export  type ListItemProps =  {
    label: string;
}


export const ListItem: React.FC<ListItemProps> = ({label}) =>{
    return(
        <Column width="100%" bg="rgba(0,0,0,0.2)" mb="10px" borderLeft="5px solid #fff" p="20px" borderRadius= "5px" >

            <Text>{label}</Text>

        </Column>
    )
}