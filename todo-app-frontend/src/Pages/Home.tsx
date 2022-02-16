import {Text, Input, Button, Row, Column, List} from '../components'

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