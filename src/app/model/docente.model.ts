export class Docente {
  constructor(public nro_documento: number,
              public tipo_doc: string,
              public nombre_completo: string,
              public email: string,
              public tipo: string,
              public programa: string,
              public facultad: string) {}
}
