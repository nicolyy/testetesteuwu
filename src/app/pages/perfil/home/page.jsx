import Image from "next/image"
import Link from "next/link"

import Pessoa from "../../../assets/pessoa.svg"
import Chamado from  "../../../assets/adicionar.svg"
import Acompanhar from "../../../assets/relogio.svg"
import Veiculo from "../../../assets/carro.svg"
import Cancelar from "../../../assets/cancelar.svg"


export default function AbrirChamadoConfirmacao(){
    return(
        <>
        <main>
            <div>
                <h1>Olá {}</h1>
                <p>Bem vindo de volta</p>
            </div>

            <div>
                <div>
                    <Link href="#">
                    <Image className="" src={Pessoa} alt="" />
                    <p>MEU PERFIL</p>
                    </Link>
                </div>
                <div>
                    <Link href="#">
                    <Image className="" src={Chamado} alt="" />
                    <p>ABRIR CHAMADO</p>
                    </Link>
                </div>
                <div>
                    <Link href="#">
                    <Image className="" src={Acompanhar} alt="" />
                    <p>ACOMPANHAR</p>
                    </Link>
                </div>
                <div>
                    <Link href="#">
                    <Image className="" src={Veiculo} alt="" />
                    <p>ACESSAR VEICULOS</p>
                    </Link>
                </div>
                <div>
                    <Link href="#">
                    <Image className="" src={Cancelar} alt="" />
                    <p>CANCELAR</p>
                    </Link>
                </div>
            </div>
        </main>
        </>
    )

}