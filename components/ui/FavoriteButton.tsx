import confetti from "canvas-confetti";
import Emoji from "../icons/Emoji";
import Love from "../icons/Love";
import OutLove from "../icons/OutLove";

interface FavoriteProps {
    type: 'circle' | 'button';
    onClick?: () => void;
    text?: string;
    isFavorite?: boolean;
}


const FavoriteButton = ({ type, onClick, text, isFavorite }: FavoriteProps) => {

    let basicStyles = 'flex items-center justify-center  hover:opacity-100  absolute  left-0  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-white border-solid border-2'
    let classByType = ''

    type === 'circle' ? classByType = 'rounded-full p-1 w-9 h-9' : classByType = 'px-4 rounded'


    // corazon rojo






    return (
        <div className="static flex-1 ">
            <button className={basicStyles + '  ' + classByType} onClick={() => {
                onClick && onClick()

                if (!isFavorite) {

                    confetti({
                        zIndex: 999,
                        particleCount: 100,
                        spread: 160,
                        angle: -100,
                        origin: {
                            x: 0,
                            y: 0,
                        }
                    })

                }
            }} >
                {isFavorite ? <Love /> : <OutLove />}
                {isFavorite ? ` ${type === 'circle' ? '' : `Remove ${text && text}`}` : ` ${type === 'circle' ? '' : `Add ${text && text}`}`}
            </button>
        </div>

    );
};

export default FavoriteButton;