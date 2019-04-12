import { tMinimalData } from "../index.d";
export default (params?: tMinimalData) => {
  if (params && params.minimalData) {
    return {
      "tpe:TuristaPasajeroExtranjero": {
        position: "turistaPasajeroExtranjero",
        attributes: ["version"]
      }
    };
  }

  return {
    "tpe:TuristaPasajeroExtranjero": {
      position: "turistaPasajeroExtranjero",
      attributes: ["version", "fechadeTransito", "tipoTransito"],
      nodes: {
        "tpe:datosTransito": {
          position: "datosTransito",
          attributes: [
            "via",
            "tipoId",
            "numeroId",
            "nacionalidad",
            "empresaTransporte",
            "idTransporte"
          ]
        }
      }
    }
  };
};
