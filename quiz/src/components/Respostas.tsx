import { EstruturaRespostas } from "@/types/EstruturaRespostas"

export const Respostas = (EstruturaRespostas: EstruturaRespostas) => {
    return(
        <div className="text-black">
            {EstruturaRespostas.Pergunta}
            <div>{EstruturaRespostas.ListaRespostas.ListadeResposta.map(item => <div> {item.Resposta} </div>)}</div>
        </div>
        

    )
}