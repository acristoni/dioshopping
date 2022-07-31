import { useState, useEffect } from 'react';
import { Grid, Button, TextField } from '@material-ui/core/';

const Contatos = () => {

    const url = 'http://localhost:5000/message'
    const [message, setMessage] = useState([]);
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [validator, setValidator] = useState(false);
    const [render, setRender] = useState(false);
    const [success, setSuccess] = useState(false);
    const [teor, setTeor] = useState('');

    useEffect(async () => {
        const response = await fetch(url)
        const data = await response.json();
        setMessage(data);
    }, [render])

    const sendMessage = () => {
        setValidator(false);
        if(author.length <= 0 || content.length <= 0 || teor.length <= 0){
            return setValidator(!validator)
        }
        const bodyForm = {
            email: author,
            message: content,
            teor: teor,
        }

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyForm)
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.id) {
                setRender(!render);
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 5000)
            }
        })
        
        setAuthor('');
        setContent('');
        setTeor('');
        
        console.log(content)
    }  

    return(
        <>
            <Grid container direction="row" xs={12} className="bg-white mt-3">
                <TextField id="name" label="Name" value={author} onChange={(event)=>{setAuthor(event.target.value)}} fullWidth/>
                <TextField id="message" label="Message" value={content} onChange={(event)=>{setContent(event.target.value)}} fullWidth/>
            </Grid>

            {validator && 
                <div className="alert alert-warning alert-dismissible fade show mt-2" role="alert">
                    <strong>Por favor preencha todos os campos!</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }

            {success && 
                <div className="alert alert-success alert-dismissible fade show mt-2" role="alert">
                    <strong>Mensagem foi enviada</strong>
                </div>
            }

            <div className="d-flex justify-content-around">
                <Button className="mt-2" variant='contained' color="primary" onClick={() => setTeor('elogio')}>Elogio</Button>
                <Button className="mt-2" variant='contained' color="secondary" onClick={() => setTeor('reclamacao')}>Reclamação</Button>
            </div>

            <div className='d-flex justify-content-center'>
                <Button onClick={sendMessage} size="large" className="mt-2" variant="contained" color="primary">
                    Sent
                </Button>
            </div>

            {message.map((content) => {
                let Teor = true;
                
                if (content.teor === 'reclamacao') {
                    Teor = false;
                }

                return(
                    <div className={`text-light card mt-2 mb-2 ${Teor ? "bg-info" : "bg-danger"}`} key={content.id}>
                        <div className="card-body">
                            <h5 className="card-title">{content.email}</h5>
                            <p className="card-text">{content.message}</p>
                            <p className="card-text"><small className="text-muted">{content.created_at}</small></p>
                        </div>
                    </div>
                )
            } )}
        </>
    )
}

export default Contatos;
