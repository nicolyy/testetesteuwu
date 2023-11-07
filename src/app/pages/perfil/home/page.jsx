import Image from "next/image"
import Link from "next/link"
import "../../../../styles/home.css"

import Pessoa from "../../../assets/pessoa.svg"
import Chamado from  "../../../assets/adicionar.svg"
import Acompanhar from "../../../assets/relogio.svg"
import Veiculo from "../../../assets/carro.svg"
import Cancelar from "../../../assets/cancelar.svg"


export default function AbrirChamadoConfirmacao(){
    return(
        <>
        <main>
            <div className="container-home-perfil">
                <h1>Olá Mariana</h1>
                <p>Bem vindo de volta</p>
            </div>

            <div className="container-opcoes">
                <div className="opcoes-perfil">
                    <Link href="#">
                    <Image className="img-icon-opcoes" src={Pessoa} alt="" />
                    <p>MEU PERFIL</p>
                    </Link>
                </div>
                <div className="opcoes-perfil">
                    <Link href="#">
                    <Image className="img-icon-opcoes" src={Chamado} alt="" />
                    <div className="texto-opcoes">
                        <p>ABRIR CHAMADO</p>
                    </div>
                    </Link>
                </div>
                <div className="opcoes-perfil">
                    <Link href="#">
                    <Image className="img-icon-opcoes" src={Acompanhar} alt="" />
                    <p>ACOMPANHAR</p>
                    </Link>
                </div>
                
            </div>
        </main>
        </>
    )

}