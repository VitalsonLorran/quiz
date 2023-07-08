import { EstruturaRespostas } from "@/types/EstruturaRespostas"

export const Respostas = (EstruturaRespostas: EstruturaRespostas) => {
    
    
    const clicouBotao = (chave) => {
        //let lista = EstruturaRespostas.ListaRespostas.ListadeResposta.map(e => e.VouF)
        if (chave){
            //console.log(chave)
        }
    }
    
    return(
        <div className=" text-black">
            <div className="text-black text-3xl p-5">{EstruturaRespostas.Pergunta}</div>
            <div>{EstruturaRespostas.ListaRespostas.ListadeResposta.map(
                (item, key) => <div 
                key={key}
                onClick={clicouBotao(key)}
                className="bg-blue-100 p-3 m-3 rounded-md border border-blue-400 cursor-pointer"
                > 
                {item.Resposta} {key}
                </div>)}
            </div>
        </div>
        

    )
}