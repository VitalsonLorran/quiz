"use client"

import { Respostas } from "@/components/Respostas"
import { ListadeResposta } from "@/types/ListadeResposta"
 
export default function Home() {




  return (
    <div className="flex flex-col font-bold bg-sky-700 w-screen h-screen justify-center items-center">
      <div className="flex flex-col  rounded-md bg-white h-1/2 w-1/3 shadow shadow-black">
      <div className="text-black text-3xl border-b-2 p-5">Quiz de culinária</div>
      <Respostas 
          Pergunta="1. Qual ingrediente não pode faltar?"
          ListaRespostas={{
            ListadeResposta: [
              "Farinha", "Sal", "Água", "Repolho"
            ]
          }} 
          RespostaCorreta={1}

      />
      <div className="mt-2  text-black text-center">Pergunta 1 de 1</div>
      </div>
    </div>
  )
}
