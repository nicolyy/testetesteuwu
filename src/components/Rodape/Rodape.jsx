import Image from "next/image";

import "./rodape.css"

import Facebook from '../../app/assets/facebook.png'
import Instagram from '../../app/assets/instagram.png'
import Email from '../../app/assets/email.png'

export default function Rodape() {
    return(
        <footer>
            <div className='social-medias'>
                <a className='social-media-logo' href="#"> <Image className="footer-img" src={Facebook} alt="Logo do facebook"/></a>
                <a className='social-media-logo' href="#"> <Image className="footer-img" src={Email} alt="Logo do e-mail"/></a>
                <a className='social-media-logo' href="#"> <Image className="footer-img" src={Instagram} alt="Logo do Instagram"/></a>
            </div>
        </footer>
    )
}