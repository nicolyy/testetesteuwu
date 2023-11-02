import Image from "next/image"
import Link from "next/link"

import FotoPerfil from "../../../assets/foto-perfil.png"

export default function MeuPerfil(){
    return(
        <>
            <div>
                <div>
                    <Image className="" src={FotoPerfil} />
                </div> 
                <div>
                    <h1>Nome {}</h1>
                    <p>Email {}</p>
                </div> 

                <section>
                    <h1>Veiculo</h1>
                    <Image/>

                    <div className="veiculo-propriedade">
                        <div className="veiculo-nome-propriedade">
                            <Image/>
                            <p>Modelo</p>
                        </div>
                        <p>Civic 2.0 - SPORT - PRATA</p>
                    </div>
                    <div className="veiculo-propriedade">
                        <div className="veiculo-nome-propriedade">
                            <Image/>
                            <p>Modelo</p>
                        </div>
                        <p>Civic 2.0 - SPORT - PRATA</p>
                    </div>
                    <div className="veiculo-propriedade">
                        <div className="veiculo-nome-propriedade">
                            <Image/>
                            <p>Modelo</p>
                        </div>
                        <p>Civic 2.0 - SPORT - PRATA</p>
                    </div>
                    <div className="veiculo-propriedade">
                        <div className="veiculo-nome-propriedade">
                            <Image/>
                            <p>Modelo</p>
                        </div>
                        <p>Civic 2.0 - SPORT - PRATA</p>
                    </div>
                    <div className="veiculo-propriedade">
                        <div className="veiculo-nome-propriedade">
                            <Image/>
                            <p>Modelo</p>
                        </div>
                        <p>Civic 2.0 - SPORT - PRATA</p>
                    </div>
                    <div className="veiculo-propriedade">
                        <div className="veiculo-nome-propriedade">
                            <Image/>
                            <p>Modelo</p>
                        </div>
                        <p>Civic 2.0 - SPORT - PRATA</p>
                    </div>
                    <div className="veiculo-propriedade">
                        <div className="veiculo-nome-propriedade">
                            <Image/>
                            <p>Modelo</p>
                        </div>
                        <p>Civic 2.0 - SPORT - PRATA</p>
                    </div>
                    <div className="veiculo-propriedade">
                        <div className="veiculo-nome-propriedade">
                            <Image/>
                            <p>Modelo</p>
                        </div>
                        <p>Civic 2.0 - SPORT - PRATA</p>
                    </div>
                    <div className="veiculo-propriedade">
                        <div className="veiculo-nome-propriedade">
                            <Image/>
                            <p>Modelo</p>
                        </div>
                        <p>Civic 2.0 - SPORT - PRATA</p>
                    </div>
                    <div className="veiculo-propriedade">
                        <div className="veiculo-nome-propriedade">
                            <Image/>
                            <p>Modelo</p>
                        </div>
                        <p>Civic 2.0 - SPORT - PRATA</p>
                    </div>
                </section>

                <section>
                    <h1>MEUS CHAMADOS</h1>
                    <div>
                        <p>CH0056 <strong>Em Andamento</strong></p>
                        <p>AV. Marandeira 789 - Sonho Lindo - Guarulhos, SP</p>
                        <p>Abertura : 03/12/2023</p>
                    </div>
                    <div>
                        <p>CH0056 <strong>FInalizado</strong></p>
                        <p>AV. Marandeira 789 - Sonho Lindo - Guarulhos, SP</p>
                        <p>Abertura : 20/10/2022</p>
                    </div>
                    <div>
                        <p>CH0056 <strong>Finalizado</strong></p>
                        <p>AV. Marandeira 789 - Sonho Lindo - Guarulhos, SP</p>
                        <p>Abertura : 15/02/2023</p>
                    </div>
                </section>
            </div>
        </>
    )
}