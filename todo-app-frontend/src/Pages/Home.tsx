import {Text, Input, Button, Row, Column} from '../components'

export const Home = () =>{

    return(
        <Column width="600px" margin="0 auto">
            <Text fontWeight="bold" my="10px" >Tasks</Text>
            <Row width='100%' >
                <Input flex={1} placeholder='Informe sua tarefa' />
                <Button>OK</Button>
            </Row>
        </Column>
    )
}