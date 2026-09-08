import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";
import { fireEvent, render,screen } from "@testing-library/react";

describe ('ItemCounter',() => {

    test('should render with default values',()=>{

        const name = 'Test'
       
        // render para cargar un componente de React
        render(<ItemCounter name={name}></ItemCounter>)

        screen.debug();

        expect(screen.getByText('Test')).toBeDefined();
        expect(screen.getByText('Test')).not.toBeNull();

    })
    test('should render with custom quantity',()=>{

        const name = 'Test'
        const quantity = 7
       
        // render para cargar un componente de React
        render(<ItemCounter name={name} quantity={quantity}></ItemCounter>)

        screen.debug();

        expect(screen.getByText(quantity)).toBeDefined();
        expect(screen.getByText(quantity)).not.toBeNull();

    })
    test('should increase count with +1 button is pressed',()=>{

        // render para cargar un componente de React
        render(<ItemCounter name={'Test'} quantity={1}></ItemCounter>)
    
        const [button1] = screen.getAllByRole('button');
    
        fireEvent.click(button1)

        expect(screen.getAllByText('2')).toBeDefined()

    })
    test('should decrease count with -1 button is pressed and count value is 5',()=>{

        // render para cargar un componente de React
        render(<ItemCounter name={'Test'} quantity={5}></ItemCounter>)
    
        const [,button2] = screen.getAllByRole('button');
    
        fireEvent.click(button2)

        expect(screen.getAllByText('4')).toBeDefined()

    })
    test('should decrease count with -1 button is pressed and count value is 1',()=>{

        // render para cargar un componente de React
        render(<ItemCounter name={'Test'} quantity={1}></ItemCounter>)
    
        const [,button2] = screen.getAllByRole('button');
    
        fireEvent.click(button2)

        expect(screen.getAllByText('1')).toBeDefined()

    })

    test('should change to red when count is 1'),()=>{

        const name ='name';
        // render para cargar un componente de React
        render(<ItemCounter name={name} quantity={1}></ItemCounter>)
    
        const itemText= screen.getByText(name)

        expect(itemText.style.color).toBe('red')

    }

})