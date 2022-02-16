import { Column } from "components"

import {ListItem, ListItemProps} from '../List'



type ListProps = {
    items: ListItemProps[];
}


export const List: React.FC<ListProps> = ({items}: ListProps) =>{
    return(

        <Column py="10px">

            {items.map((item, index) => (
             <ListItem  key={index} {...item}/>
            
            ))}
        
        </Column>

    )
}