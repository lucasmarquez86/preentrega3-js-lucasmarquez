const productosActividades = [
    { id: 1, nombre: 'Cross Training', precio: 2599, fecha: 'Lunes 24 de Julio de 2023', codigo: 'CT001' },
    { id: 2, nombre: 'Boxeo', precio: 3859, fecha: 'Martes 25 de Julio de 2023', codigo: 'BX002' },
    { id: 3, nombre: 'Funcional', precio: 1851, fecha: 'Miércoles 26 de Julio de 2023', codigo: 'FN003' },
    { id: 4, nombre: 'Musculación', precio: 2599, fecha: 'Jueves 27 de Julio de 2023', codigo: 'MC004' },
    { id: 5, nombre: 'Hiit', precio: 2894, fecha: 'Viernes 28 de Julio de 2023', codigo: 'HT005' },
    { id: 6, nombre: 'Full Combat', precio: 3748, fecha: 'Lunes 24 de Julio de 2023', codigo: 'FC006' },
    { id: 7, nombre: 'ABS', precio: 3281, fecha: 'Martes 25 de Julio de 2023', codigo: 'AB007' },
    { id: 8, nombre: 'Zumba', precio: 1938, fecha: 'Miércoles 26 de Julio de 2023', codigo: 'ZB008' },
    { id: 9, nombre: 'MMA', precio: 3122, fecha: 'Jueves 27 de Julio de 2023', codigo: 'MM009' },
    { id: 10, nombre: 'Stretching', precio: 2745, fecha: 'Viernes 28 de Julio de 2023', codigo: 'ST010' },
    { id: 11, nombre: 'Yoga', precio: 3122, fecha: 'Lunes 24 de Julio de 2023', codigo: 'YG011' },
    { id: 12, nombre: 'Ritmos', precio: 1745, fecha: 'Martes 25 de Julio de 2023', codigo: 'RT012' },
    { id: 13, nombre: 'Pilates', precio: 2300, fecha: 'Miércoles 26 de Julio de 2023', codigo: 'PL013' },
    { id: 14, nombre: 'Spinning', precio: 2579, fecha: 'Jueves 27 de Julio de 2023', codigo: 'SP014' },
    { id: 15, nombre: 'Kickboxing', precio: 2899, fecha: 'Viernes 28 de Julio de 2023', codigo: 'KB015' },
    { id: 16, nombre: 'Aeróbicos', precio: 1900, fecha: 'Lunes 24 de Julio de 2023', codigo: 'AR016' },
    { id: 17, nombre: 'Powerlifting', precio: 3499, fecha: 'Martes 25 de Julio de 2023', codigo: 'PW017' },
    { id: 18, nombre: 'Tai Chi', precio: 2180, fecha: 'Miércoles 26 de Julio de 2023', codigo: 'TC018' },
    { id: 19, nombre: 'Natación', precio: 2800, fecha: 'Jueves 27 de Julio de 2023', codigo: 'NA019' },
    { id: 20, nombre: 'GAP', precio: 1999, fecha: 'Viernes 28 de Julio de 2023', codigo: 'GP020' },
    { id: 21, nombre: 'Bailoterapia', precio: 2150, fecha: 'Lunes 24 de Julio de 2023', codigo: 'BT021' },
    { id: 22, nombre: 'Calistenia', precio: 2799, fecha: 'Martes 25 de Julio de 2023', codigo: 'CL022' },
    { id: 23, nombre: 'Futbol', precio: 2899, fecha: 'Miércoles 26 de Julio de 2023', codigo: 'FT023' },
    { id: 24, nombre: 'Baloncesto', precio: 3099, fecha: 'Jueves 27 de Julio de 2023', codigo: 'BC024' },
    { id: 25, nombre: 'Voleibol', precio: 2499, fecha: 'Viernes 28 de Julio de 2023', codigo: 'VB025' },
    { id: 26, nombre: 'Escalada', precio: 3980, fecha: 'Lunes 24 de Julio de 2023', codigo: 'ES026' },
    { id: 27, nombre: 'Crossfit', precio: 3299, fecha: 'Martes 25 de Julio de 2023', codigo: 'CF027' },
    { id: 28, nombre: 'Karate', precio: 2799, fecha: 'Miércoles 26 de Julio de 2023', codigo: 'KT028' },
    { id: 29, nombre: 'Pádel', precio: 2900, fecha: 'Jueves 27 de Julio de 2023', codigo: 'PD029' },
    { id: 30, nombre: 'Ciclismo', precio: 2499, fecha: 'Viernes 28 de Julio de 2023', codigo: 'CC030' },
];

/*LocalStorage y JSON */
function guardarActEnLocalStorage() {
    if (actividades.length > 0) {
        localStorage.setItem('MisActividades', JSON.stringify(actividades))
    }
}

function recuperarActividadesDeLocalStorage() {
    if (localStorage.getItem('MisActividades')) {
        return JSON.parse(localStorage.getItem('MisActividades'))
    } else {
        return []
    }
}

const actividades = recuperarActividadesDeLocalStorage()