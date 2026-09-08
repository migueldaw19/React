import { describe, expect, test } from "vitest";
import {render, screen} from '@testing-library/react'
import { MyAwesomeApp } from "./MyAwesomeApp";

describe ('MyAwesomeApp',() => {

    test('should render firstName and lastName',()=>{
       
        // render para cargar un componente de React
        const {container} = render(<MyAwesomeApp></MyAwesomeApp>)

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');
        
        expect(h1?.innerHTML).toContain('Uusrio');
        expect(h3?.innerHTML).toContain('1123')
    })

    test('should render firstName and lastName with screen',()=>{
       
        // render para cargar un componente de React
        render(<MyAwesomeApp></MyAwesomeApp>);

        screen.debug();

        /*
        Busqueda por rol
        const h1 = screen.getByRole('heading', {
            level:1
        });*/
   
        const h1 = screen.getByTestId('numero1');

        expect(h1?.innerHTML).toContain('Uusrio');
    })

    test ('should match snapshot', ()=>{
        const {container} = render(<MyAwesomeApp></MyAwesomeApp>)

        expect(container).toMatchSnapshot();

        
    })
    //No recomendado
    test ('should match snapshot alternativo', ()=>{
        render(<MyAwesomeApp></MyAwesomeApp>)

        expect(screen.getByTestId('div-in')).toMatchSnapshot()


    })

})