import { EstruturaRespostas } from "@/types/EstruturaRespostas"

export const Respostas = (EstruturaRespostas: EstruturaRespostas) => {
    
    const clicouBotao = () => {
        alert("clicou")
    }
    
    return(
        <div className=" text-black">
            <div className="text-black text-3xl p-5">{EstruturaRespostas.Pergunta}</div>
            <div>{EstruturaRespostas.ListaRespostas.ListadeResposta.map(
                item => <div 
                onClick={clicouBotao}
                className="bg-blue-100 p-3 m-3 rounded-md border border-blue-400"> 
                {item.Resposta} </div>)}
            </div>
        </div>
        

    )
}