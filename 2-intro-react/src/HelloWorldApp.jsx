
import PropTypes from 'prop-types';
import { Book } from './components/Book';
import { Title } from './components/Title';
import { UserDetails } from './components/UserDetails';

// import { Fragment } from "react";

export const HelloWorldApp = ({ user, id, title, book}) => {
    
    console.log(title)
    // const name = 'Pepe';

    // Devuelve las etiquetas para mostrarlo en el main
    return (
        // Detalle: como queremos devolver más de 1 etiqueta se añade un componente de React llamado fragmento (<> y </>) para que haga de etiqueta principal. Este además no interfiere a la hora de mostrar el contenido
        <>
            <Title title={ title } />
            <UserDetails user={user} id={ id } />
            <Book book={ book } />
        </>
        // También como alternativa a <> y </> existe la etiqueta Fragment importandolo de React
    );
}

// Proptypes sirve para validar los valores que llegan del padre
HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
}

// Permite tener un valor por defecto en caso que el padre no traiga ese valor (actua antes que propTypes )
HelloWorldApp.defaultProps = {
    title: 'Hola mundo por defecto!',
    book: 'UMl got a gota'
}