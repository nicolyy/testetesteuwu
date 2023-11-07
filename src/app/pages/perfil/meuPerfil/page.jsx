import Image from "next/image"
import Link from "next/link"

import "../../../../styles/meuPerfil.css"

import FotoPerfil from "../../../assets/foto-perfil.png"
import Veiculo from "../../../assets/veiculo.png"

export default function MeuPerfil(){
    return(
        <>
            <div className="perfil">
                
                <div className="container-perfil">
                    <Image className="foto-perfil" src={FotoPerfil} />
                    <div>
                        <h1>Mariana Peixoto</h1>
                        <p>marianapeixoto@gmail.com</p>
                    </div> 
                </div> 

                <section className="container-veiculo">
                    <h1>Veiculo</h1>
                    <Image className="img-veiculo-chamado" src={Veiculo}/>
                        <div className="container-veiculo-propriedades">
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
                                <p>Marca</p>
                            </div>
                            <p>Civic 2.0 - SPORT - PRATA</p>
                        </div>
                        <div className="veiculo-propriedade">
                            <div className="veiculo-nome-propriedade">
                                <Image/>
                                <p>Combustivel</p>
                            </div>
                            <p>Civic 2.0 - SPORT - PRATA</p>
                        </div>
                        <div className="veiculo-propriedade">
                            <div className="veiculo-nome-propriedade">
                                <Image/>
                                <p>Tipo</p>
                            </div>
                            <p>Civic 2.0 - SPORT - PRATA</p>
                        </div>
                        <div className="veiculo-propriedade">
                            <div className="veiculo-nome-propriedade">
                                <Image/>
                                <p>Categoria</p>
                            </div>
                            <p>Civic 2.0 - SPORT - PRATA</p>
                        </div>
                        <div className="veiculo-propriedade">
                            <div className="veiculo-nome-propriedade">
                                <Image/>
                                <p>Passageiros</p>
                            </div>
                            <p>Civic 2.0 - SPORT - PRATA</p>
                        </div>
                        <div className="veiculo-propriedade">
                            <div className="veiculo-nome-propriedade">
                                <Image/>
                                <p>Espécie</p>
                            </div>
                            <p>Civic 2.0 - SPORT - PRATA</p>
                        </div>
                        <div className="veiculo-propriedade">
                            <div className="veiculo-nome-propriedade">
                                <Image/>
                                <p>Carroceria</p>
                            </div>
                            <p>Civic 2.0 - SPORT - PRATA</p>
                        </div>
                        <div className="veiculo-propriedade">
                            <div className="veiculo-nome-propriedade">
                                <Image/>
                                <p>Endereço</p>
                            </div>
                            <p>Civic 2.0 - SPORT - PRATA</p>
                        </div>
                        <div className="veiculo-propriedade">
                            <div className="veiculo-nome-propriedade">
                                <Image/>
                                <p>Renavan</p>
                            </div>
                            <p>Civic 2.0 - SPORT - PRATA</p>
                        </div>
                    </div>
                </section>

                <section  className="container-chamados">
                <h1>MEUS CHAMADOS</h1>
                    <div className="chamados-historico">
                       
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
                    </div>
                </section>
            </div>
        </>
    )
}