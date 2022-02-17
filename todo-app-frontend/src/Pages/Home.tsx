import {Text, Input, Button, Row, Column, List, Logo} from '../components'

import {useState} from 'react'

export const Home = () =>{

    const[taskName, setTaskName] = useState('');


    const[tasks, setTasks] = useState<{label: string} []>([])


    const handleOKButton = () =>{

        if(!taskName){
            window.alert("Informe a tarefa!")
        }else{

            setTasks((previous) =>{
                const copy = [...previous]
                copy.push({label: taskName})
                return copy;
            });
    
            setTaskName('')

        }


       

    }

    return(

        


        <Column width="600px" margin="0 auto">

            <Column width="100%" alignItems="center" p="25px">

                <Logo/>

            </Column>

            <Column alignItems='center' p='20px'  width='100%' minHeight='300px' bg='rgba(255,255,255,0.2)'>

                <Text fontFamily='secondary' fontSize='bodyExtraLarge' >Ready</Text>
                <Text fontFamily='secondary' fontSize='displayExtraLarge' fontWeight='bold' p='30px' >25:00</Text>


                <Button variant='primary' >
                    <Text fontFamily='secondary' fontWeight='bold' fontSize='bodyExtraLarge' color='primary' >START</Text>
                </Button>

            
            </Column>


            <Text fontWeight="bold" my="10px" fontSize="bodyLarge" pl="10px" >Tasks</Text>
            <Row width='100%' >
                <Input onChange={e => setTaskName(e.target.value)} value={taskName}  flex={1} placeholder='Informe sua tarefa' />
                <Button onClick={handleOKButton}>OK</Button>
            </Row>

            {taskName}

            <List items={tasks} />

        </Column>
    )
}