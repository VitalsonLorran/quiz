"use client"

import { Respostas } from "@/components/Respostas"
import { ListadeResposta } from "@/types/ListadeResposta"
 
export default function Home() {




  return (
    <div className="flex flex-col bg-sky-700 w-screen h-screen justify-center items-center">
      <div className="bg-white h-2/3 w-1/3">
      <div className="text-black">Quiz de culinária</div>
      <Respostas 
          Pergunta="Qual ingrediente não pode faltar?" 
          ListaRespostas={
            {
              ListadeResposta: [
                {Resposta: "Farinha",
                VouF: true
              },
              {Resposta: "Sal",
                VouF: false
              },
              {Resposta: "Água",
                VouF: false
              },
              {Resposta: "Repolho",
                VouF: false
              }
            ]
            }
          }      
      />
      <div className="text-black">Pergunta 1 de 1</div>
      </div>
    </div>
  )
}
