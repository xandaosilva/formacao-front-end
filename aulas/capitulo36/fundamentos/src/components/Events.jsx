const Events = () => {
    const handleClick = () => {
        console.log("Teste")
    }

    const render = (x) => {
        if(x){
            return <h3>Função para renderizar.</h3>
        }
        else{
            return <h3>Outra renderização</h3>
        }
    } 

    return (
        <div>
            <div>
                <button onClick={handleClick}>Clique aqui</button>
            </div>
            {render(true)}
            {render(false)}
        </div>
    )
}

export default Events