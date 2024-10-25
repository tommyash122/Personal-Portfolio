import ButtonSvg from '../assets/svg/ButtonSvg'
const Button = ({ className, href, onClick, children, px, white }) => {

    const renderButton = () => (
        <button>
            <span>
                {ButtonSvg()}
            </span>
        </button>
    )


    return renderButton()
}

export default Button
