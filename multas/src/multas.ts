type EstadoPrestamo = 'activo' | 'vencido' | 'devuelto';

interface Prestamo {
    folio: string;
    multa: number;
    ejemplar: number;
    estado : EstadoPrestamo;
    socio?: string;
}

function calcularMulta(prestamo: Prestamo):number {
    return prestamo.multa + 50;
}

function reciboDe(prestamo: Prestamo): string {
    if(prestamo.socio === undefined){
        return `Recibo de socio no registrado`
    }

    return `Recibo de ${prestamo.socio}`;
}

const prestamo: Prestamo = {
    folio: 'F-001',
    multa: 300,
    ejemplar: 2,
    estado: 'vencido',
};

console.log(calcularMulta(prestamo))
console.log(reciboDe(prestamo))

/*
const p1: Prestamo = {
    folio: 'F-001',
    multa: 300,
    ejemplar: 2,
    estado: 'VENCIDO',
};

const p2: Prestamo = {
    folio: 'F-001',
    multa: 300,
    ejemplar: 'djdj',
    estado: 'vencido',
    socio: 'Raul'
};

const p3: Prestamo = {
    folio: 'F-001',
    ejemplar: 5,
    estado: 'vencido',
    socio: 'Raul'
};

*/
