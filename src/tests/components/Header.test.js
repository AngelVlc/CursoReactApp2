import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

// se usa shallow renderer pq solo me importa como se renderiza el componente,
// puesto que no tiene estado


test('should render Header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    //console.log(renderer.getRenderOutput());

    //la primera vez q se lanzan el test siempre va a ser OK 
    //porque no hay snapshot (se hace con el primer test en una
    //carpeta). Las siguientes veces se comparan las snapshot
    //con la primera. Si hay cambios que son correctos pq se 
    //ha actualizado el componente entonces se puede "aceptar"
    //la nueva snapshot.
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

