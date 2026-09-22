/**
 * La atmósfera. Cuatro manchas de color que se desplazan muy lento, grano
 * encima para que el degradado no se vea en franjas, y una malla técnica que
 * se desvanece antes de llegar al contenido.
 *
 * Sin JavaScript y sin estado: es un componente de servidor a propósito.
 */
export function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora__blob aurora__blob--1" />
      <div className="aurora__blob aurora__blob--2" />
      <div className="aurora__blob aurora__blob--3" />
      <div className="aurora__blob aurora__blob--4" />
      <div className="aurora__mesh" />
      <div className="aurora__grain" />
    </div>
  );
}
