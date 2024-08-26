import Bitmap from '../assets/Bitmap.jpg';
import { CreateTodo } from './CreateTodo';

export const BackgroundImage = () => {

    return (
        <>
            <header>
                <img src={Bitmap}  alt='mountain'/>
            </header>
            <CreateTodo />

        </>
    )
    
}

