import {Text, Input, Button, Row, Column, List, Logo, Icon} from '../components'

import {useState} from 'react'

export const Home = () =>{

    const[taskName, setTaskName] = useState('');

    const SECOND_DEFAULT = 1500;
    const[tasks, setTasks] = useState<{label: string} []>([])

    const[seconds, setSeconds] = useState(SECOND_DEFAULT)

    const[timer, setTimer] = useState<any>();

    const[stage, setStage] = useState('Ready')


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




    const secondsTimer = (secs: number) =>{
        const divisorMinute = secs % 3600;

        const minutes = Math.floor(divisorMinute / 60)
        const seconds = Math.ceil(divisorMinute % 60);


        return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2, '0')}`
    }




    const startTimer = () =>{
        setStage('In progress!')
       // console.log('fazendo teste de click de botao')
        const timerInterval = setInterval(() =>{
           //console.log("print")
           setSeconds( (previousValues) =>{

            if(previousValues === 0){
                clearInterval(timerInterval);
                setStage('Done')
                setTimer(undefined)
                return 0;
            }
               console.log(`${previousValues}`)
               return previousValues -1;
           });
           

       }, 1000)

       setTimer(timerInterval)
    }



    const handlePauseButton = () =>{
        clearInterval(timer)
        setTimer(undefined)
    }



    const handleStopButton = () =>{

        handlePauseButton();
        setSeconds(SECOND_DEFAULT)
        setStage('Ready')
    }

    const handleRestartButton = () =>{
        
        setSeconds(SECOND_DEFAULT)
        startTimer();
    }

    return(

        


        <Column width="600px" margin="0 auto">

            <Column width="100%" alignItems="center" p="25px">

                <Logo/>

            </Column>

            <Column alignItems='center' p='20px'  width='100%' minHeight='300px' bg='rgba(255,255,255,0.2)'>

                <Text fontFamily='secondary' fontSize='bodyExtraLarge' >{stage}</Text>
                <Text fontFamily='secondary' fontSize='displayExtraLarge' fontWeight='bold' p='30px' >{secondsTimer(seconds)}</Text>


                <Button onClick={startTimer} variant='primary' >
                    <Text fontFamily='secondary' fontWeight='bold' fontSize='bodyExtraLarge' color='primary' >START</Text>
                </Button>



                <Row p='20px'>

                    <Button onClick={startTimer} variant='primary' p='10px 20px' mx='5px'>

                        <Icon variant='play'/>

                    </Button>

                     <Button onClick={handlePauseButton} variant='primary' p='10px 20px' mx='5px'>

                         <Icon  variant='pause'/>

                     </Button>

                     
                     <Button onClick={handleStopButton} variant='primary' p='10px 20px' mx='5px'>

                         <Icon variant='stop'/>

                     </Button>

                     
                     <Button onClick={handleRestartButton} variant='primary' p='10px 20px' mx='5px'>

                         <Icon variant='restart'/>

                     </Button>

                     <Button variant='primary' p='10px 20px' mx='px'>
                         <Icon variant='done'></Icon>
                     </Button>



                </Row>

               

            
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