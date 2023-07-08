import { EstruturaRespostas } from "@/types/EstruturaRespostas"

export const Respostas = (EstruturaRespostas: EstruturaRespostas) => {
    
    let respostaDoUsuario: any = null
    const clicouBotao = (key: number) => {
        //let lista = EstruturaRespostas.ListaRespostas.ListadeResposta.map(e => e.VouF)
        if (key == EstruturaRespostas.RespostaCorreta){
            respostaDoUsuario = key
            console.log(key)

        }
    }
    
    return(
        <div className=" text-black">
            <div className="text-black text-3xl p-5">{EstruturaRespostas.Pergunta}</div>
            <div>{EstruturaRespostas.ListaRespostas.ListadeResposta.map(
                (item, key) => <div 
                key={key}
                onClick={() => clicouBotao(key)}
                className= { ` bg-blue-100 p-3 m-3 rounded-md border border-blue-400 cursor-pointer 
                
                ${respostaDoUsuario == 1 ? 'bg-black': ''}
                `}
                > 
                {item} {key}
                </div>)}
            </div>
        </div>
        

    )
}