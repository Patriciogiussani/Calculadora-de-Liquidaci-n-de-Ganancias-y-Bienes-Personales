function calcular() {
    const ingresos = parseFloat(document.getElementById('ingresos').value);
    const deducciones = parseFloat(document.getElementById('deducciones').value);
    const bienes = parseFloat(document.getElementById('bienes').value);
    
    if (isNaN(ingresos) || isNaN(deducciones) || isNaN(bienes)) {
        alert('Por favor, ingresa todos los valores.');
        return;
    }

    const gananciasNetas = ingresos - deducciones;
    const impuestoGanancias = gananciasNetas * 0.30; // Ejemplo: 30% de impuesto
    const impuestoBienesPersonales = bienes * 0.005; // Ejemplo: 0.5% de impuesto

    const totalImpuestos = impuestoGanancias + impuestoBienesPersonales;

    document.getElementById('resultado').innerHTML = `
        <p>Ganancias Netas: $${gananciasNetas.toFixed(2)}</p>
        <p>Impuesto a las Ganancias: $${impuestoGanancias.toFixed(2)}</p>
        <p>Impuesto sobre Bienes Personales: $${impuestoBienesPersonales.toFixed(2)}</p>
        <p><strong>Total de Impuestos: $${totalImpuestos.toFixed(2)}</strong></p>
    `;
}
