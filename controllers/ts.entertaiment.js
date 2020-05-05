var tsEntertainmentApp = angular.module('tsEntertainmentApp', []);
tsEntertainmentApp.controller('VenuesListCtrl', function($scope) {
  $scope.venues =  [{
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS QUE POR SU NATURALEZA Y COYUNTURA NO PUEDEN SER PREVISTOS EN LOS PRESUPUESTOS DE LAS ENTIDADES DEL SECTOR PUBLICO PARA GASTOS CORRIENTES, Y ES DE USO EXCLUSIVO DEL MINISTERIO DE ECONOMIA Y FINANZAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.0.1.1.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "RESERVA DE CONTINGENCIA - GASTO CORRIENTE"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS QUE POR SU NATURALEZA Y COYUNTURA NO PUEDEN SER PREVISTOS EN LOS PRESUPUESTOS DE LAS ENTIDADES DEL SECTOR PUBLICO PARA GASTOS DE CAPITAL, Y ES DE USO EXCLUSIVO DEL MINISTERIO DE ECONOMIA Y FINANZAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.0.1.2.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "RESERVA DE CONTINGENCIA - GASTO DE CAPITAL"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS DE CARGAS SOCIALES DE LOS FUNCIONARIOS PUBLICOS POR ELECCION POLITICA (PRESIDENTE DE LA REPUBLICA, CONGRESISTAS, GOBERNADORES REGIONALES Y ALCALDES)",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.1.1.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "FUNCIONARIOS ELEGIDOS POR ELECCION POLITICA"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS DE CARGAS SOCIALES DE LOS SERVIDORES ADMINISTRATIVOS NOMBRADOS BAJO EL REGIMEN LABORAL PUBLICO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.1.1.2",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL ADMINISTRATIVO NOMBRADO (REGIMEN PUBLICO)"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS DE CARGAS SOCIALES DE LOS SERVIDORES ADMINISTRATIVOS CONTRATADOS BAJO EN EL REGIMEN LABORAL PUBLICO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.1.1.3",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL CON CONTRATO A PLAZO FIJO (REGIMEN LABORAL PUBLICO)"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS DE CARGAS SOCIALES DE LOS SERVIDORES ADMINISTRATIVOS CONTRATADOS A PLAZO INDETERMINADO BAJO EL REGIMEN LABORAL PRIVADO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.1.1.4",
      "restringida_art" : "por el Artículo por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL CON CONTRATO A PLAZO INDETERMINADO (REGIMEN LABORAL PRIVADO)"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS DE CARGAS SOCIALES DE LOS SERVIDORES ADMINISTRATIVOS CONTRATADOS A PLAZO FIJO BAJO EL REGIMEN LABORAL PRIVADO  INCLUYE PERSONAL DE CONFIANZA",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.1.1.5",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL CON CONTRATO A PLAZO FIJO (REGIMEN LABORAL PRIVADO)"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LAS RETRIBUCIONES DE LOS SERVIDORES CONTRATADOS BAJO EL REGIMEN LABORAL DE LOS GERENTES PUBLICOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.1.1.6",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL CONTRATADO - REGIMEN LABORAL DE GERENTES PUBLICOS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTO POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES DE LOS FUNCIONARIOS PUBLICOS DE LIBRE DESIGNACION Y REMOCION, Y DE DESIGNACION Y REMOCION REGULADA (ART  52 DE LA LEY NÂº 30057)",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.1.1.7",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "FUNCIONARIOS DE ALTA DIRECCION DE LAS ENTIDADES"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS DE CARGAS SOCIALES DEL PERSONAL BAJO EL REGIMEN DEL SERVICIO CIVIL",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.1.1.8",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL DE LA LEY SERVIR (REGIMEN DEL SERVICIO CIVIL)"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS DE CARGAS SOCIALES DEL PERSONAL DE CONFIANZA DE LAS ENTIDADES",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.1.1.9",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL DE CONFIANZA (REGIMEN LABORAL PUBLICO)"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LAS TRANSFERENCIAS FINANCIERAS A FONDOS PARA EL ABONO DE INCENTIVOS LABORALES A LOS SERVIDORES QUE CUMPLEN FUNCION ADMINISTRATIVA EN EL SECTOR PUBLICO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.1.2.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "ASIGNACION A FONDOS PARA PERSONAL"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR EL PAGO A LOS FUNCIONARIOS A QUE SE REFIERE EL DECRETO DE URGENCIA NÂº 114-2001 Y PARA LOS CONGRESISTAS DE LA REPUBLICA SEGUN LA NORMA CORRESPONDIENTE",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.1.2.2",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "ASIGNACION POR GASTOS OPERATIVOS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "COMPENSATORIA POR PRODUCTIVIDAD DE CONTRALORIA (LEY NÂº 27785 Y RESOLUCION DE CONTRALORIA NÂº 215-2002-CG)",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.1.2.3",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "ASIGNACION POR PRODUCTIVIDAD"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA DISTRIBUCION DE UTILIDADES A QUE TIENEN DERECHO LOS TRABAJADORES SUJETOS AL REGIMEN LABORAL DE LA ACTIVIDAD PRIVADA EN LAS ENTIDADES PUBLICAS QUE DESARROLLAN ACTIVIDADES GENERADORAS DE RENTAS DE TERCERA CATEGORIA, EN APLICACION DEL DECRETO LEGISLATIVO NÂ° 892",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.1.2.4",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PARTICIPACION DE LOS TRABAJADORES EN LAS UTILIDADES"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA BONIFICACION POR CAMBIO DE RESIDENCIA HABITUAL OTORGADA A LOS GERENTES PUBLICOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.1.2.5",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "BONIFICACION POR CAMBIO DE RESIDENCIA"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR OTRAS RETRIBUCIONES Y COMPLEMENTOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.1.2.99",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "OTRAS RETRIBUCIONES Y COMPLEMENTOS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS QUE CORRESPONDEN A RETRIBUCIONES ASIGNADAS POR CONCEPTO DE ASISTENCIA DE FUNCIONARIOS A SESIONES DE CONSEJOS DIRECTIVOS DE LOS ORGANISMOS Y ENTIDADES DEL ESTADO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.10.1.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "DIETAS DE DIRECTORIO Y DE ORGANISMOS COLEGIADOS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS QUE CORRESPONDEN A RETRIBUCIONES ASIGNADAS POR CONCEPTO DE ASISTENCIA DE REGIDORES Y CONSEJEROS A SESIONES",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.10.1.2",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "DIETAS DE REGIDORES Y CONSEJEROS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS QUE CORRESPONDEN A RETRIBUCIONES ASIGNADAS POR CONCEPTO DE ASISTENCIA DE COLABORADORES EVENTUALES A SESIONES DE DIRECTORIOS O SIMILARES",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.10.1.3",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "DIETAS A COLABORADORES EVENTUALES"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES DE LOS SERVIDORES PENITENCIARIOS NOMBRADOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.11.1.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL NOMBRADO"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR ASIGNACION ESPECIAL POR LABORES MULTIFUNCIONALES O EN CONDICIONES GEOGRAFICAS ADVERSAS Y ASIGNACION POR VIGILANCIA Y SEGURIDAD DE LOS SERVIDORES PENITENCIARIOS NOMBRADOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.11.2.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "ASIGNACION ESPECIAL POR LABOR PENITENCIARIA"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES DEL PERSONAL DOCENTE NOMBRADO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.2.1.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL NOMBRADO"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES DEL PERSONAL DOCENTE CONTRATADO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.2.1.2",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL CONTRATADO"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES DE DIVERSAS ASIGNACIONES Y BONIFICACIONES ESTABLECIDOS EN LA LEY NÂº 29944 Y OTRAS NORMAS, DE SER EL CASO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.2.2.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "ASIGNACIONES Y BONIFICACIONES PARA EL PERSONAL DEL MAGISTERIO"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR EL PAGO DE PALMAS MAGISTERIALES",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.2.2.2",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PALMAS MAGISTERIALES"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES DE DIVERSAS BONIFICACIONES Y ASIGNACIONES EXCEPCIONALES",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.2.2.99",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "OTRAS RETRIBUCIONES Y COMPLEMENTOS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES DEL PERSONAL AUXILIAR DE EDUCACION NOMBRADO Y CONTRATADO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.2.3.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL AUXILIAR DE EDUCACION"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES DE DIVERSAS BONIFICACIONES Y ASIGNACIONES EXCEPCIONALES",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.2.3.99",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "OTRAS RETRIBUCIONES Y COMPLEMENTOS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES, DEL PERSONAL MEDICO Y OTROS PROFESIONALES DE LA SALUD NOMBRADOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.3.1.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL NOMBRADO"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES, DEL PERSONAL MEDICO Y OTROS PROFESIONALES DE LA SALUD CONTRATADOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.3.1.2",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL CONTRATADO"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES, DEL PERSONAL DEL SERVICIO RURAL URBANO Y MARGINAL DE SALUD (SERUMS)",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.3.1.3",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL SERUMS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LOS SERVICIOS COMPLEMENTARIOS PRESTADOS POR LOS PROFESIONALES DE LA SALUD DE CUALQUIER REGIMEN LABORAL, PARA GARANTIZAR Y ASEGURAR LA CONTINUIDAD DE LOS SERVICIOS MEDICOS ASISTENCIALES QUE SE BRINDAN EN LAS ENTIDADES PRESTADORAS DE SERVICIOS DE SALUD",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.3.1.5",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL POR SERVICIOS COMPLEMENTARIOS DE SALUD"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES, DEL PERSONAL ASISTENCIAL NOMBRADO NO PROFESIONALES DE LA SALUD",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.3.2.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL NOMBRADO"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES, DEL PERSONAL ASISTENCIAL CONTRATADO NO PROFESIONALES DE LA SALUD",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.3.2.2",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL CONTRATADO"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR GUARDIAS HOSPITALARIAS PARA EL PERSONAL DE LA SALUD, POR EL CUMPLIMIENTO DE ACTIVIDADES MULTIPLES Y DIFERENCIADAS DE LAS REALIZADAS ORDINARIAMENTE, DE ACUERDO A SU REGLAMENTO RESPECTIVO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.3.3.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "GUARDIAS HOSPITALARIAS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR EL OTORGAMIENTO DE BONIFICACIONES O ENTREGAS ECONOMICAS VINCULADAS AL PUESTO DE PROFESIONALES DE LA SALUD ESTABLECIDAS EN EL DL NÂº 1153 Y OTRAS NORMAS, DE SER EL CASO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.3.3.3",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "BONIFICACIONES O ENTREGAS ECONOMICAS AL PUESTO DE PROFESIONALES DE LA SALUD"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR EL OTORGAMIENTO DE BONIFICACIONES O ENTREGAS ECONOMICAS VINCULADAS AL PUESTO DE NO PROFESIONALES DE LA SALUD ESTABLECIDAS EN EL DL NÂº 1153 Y OTRAS NORMAS, DE SER EL CASO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.3.3.4",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "BONIFICACIONES O ENTREGAS  ECONOMICAS AL PUESTO DE NO PROFESIONALES DE LA SALUD"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR OTRAS RETRIBUCIONES Y COMPLEMENTOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.3.3.99",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "OTRAS RETRIBUCIONES Y COMPLEMENTOS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES, DEL PERSONAL NOMBRADO QUE EJERCE LA CARRERA JUDICIAL",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.4.1.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL NOMBRADO"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES, DEL PERSONAL CONTRATADO QUE EJERCE LA CARRERA JUDICIAL",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.4.1.2",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL CONTRATADO"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ASIGNACION DEL BONO POR FUNCION JURISDICCIONAL, FUNCION FISCAL Y BONO DE ALTA DIRECCION SEGUN DECRETO DE URGENCIA NÂº 114-2001",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.4.2.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "BONO POR FUNCION JURISDICCIONAL Y FISCAL"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ASIGNACION DE GASTOS OPERATIVOS SEGUN DECRETO DE URGENCIA NÂº 114-2001",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.4.2.2",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "ASIGNACION POR GASTOS OPERATIVOS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR OTRAS RETRIBUCIONES Y COMPLEMENTOS DEL PERSONAL JUDICIAL NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.4.2.99",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "OTRAS RETRIBUCIONES Y COMPLEMENTOS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES, DEL PERSONAL DOCENTE NOMBRADO QUE LABORAN EN LAS UNIVERSIDADES",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.5.1.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL NOMBRADO"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES, DEL PERSONAL DOCENTE CONTRATADO QUE LABORAN EN LAS UNIVERSIDADES",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.5.1.2",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL CONTRATADO"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ASIGNACION DE LA BONIFICACION ESPECIAL A FAVOR DEL DOCENTE INVESTIGADOR EN LAS UNIVERSIDADES PUBLICAS",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.5.2.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "BONIFICACION ESPECIAL A FAVOR DEL DOCENTE INVESTIGADOR"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR OTRAS RETRIBUCIONES Y COMPLEMENTOS DE LOS DOCENTES UNIVERSITARIOS NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.5.2.99",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "OTRAS RETRIBUCIONES Y COMPLEMENTOS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES, DEL PERSONAL DIPLOMATICO NOMBRADO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.6.1.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL NOMBRADO"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES, DEL PERSONAL DIPLOMATICO CONTRATADO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.6.1.2",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL CONTRATADO"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR OTRAS RETRIBUCIONES Y COMPLEMENTOS DEL PERSONAL DIPLOMATICO NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.6.2.99",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "OTRAS RETRIBUCIONES Y COMPLEMENTOS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES DEL PERSONAL MILITAR",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.7.1.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL MILITAR"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS AFECTOS Y NO AFECTOS A CARGAS SOCIALES DEL PERSONAL POLICIAL",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.7.1.2",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "PERSONAL POLICIAL"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS PARA EL PAGO DE NUEVO PERSONAL MILITAR Y POLICIAL A CARGO DEL ESTADO, SUJETOS A EVALUACION EN BASE A LA INFORMACION REGISTRADA EN AIRHSP Y DE LA DISPONIBILIDAD PRESUPUESTAL",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.7.1.3",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "ALTAS DE PERSONAL MILITAR Y POLICIAL"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR EL OTORGAMIENTO DE BONIFICACIONES O ENTREGAS ECONOMICAS CORRESPONDIENTES AL PERSONAL MILITAR Y POLICIAL ESTABLECIDAS EN EL DL NÂº 1132 Y OTRAS NORMAS, DE SER EL CASO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.7.2.4",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "BONIFICACIONES O ENTREGAS ECONOMICAS AL PERSONAL MILITAR Y POLICIAL"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR OTRAS RETRIBUCIONES Y COMPLEMENTOS DEL PERSONAL MILITAR Y POLICIAL NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.7.2.99",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "OTRAS RETRIBUCIONES Y COMPLEMENTOS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR ASIGNACION DE BONIFICACION AL PERSONAL DE TROPA MILITAR Y POLICIAL",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.7.3.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "TROPA"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS DEL PERSONAL OBRERO QUE LABORA EN FORMA PERMANENTE",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.8.1.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "OBREROS PERMANENTES"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA RETRIBUCION Y COMPLEMENTOS DEL PERSONAL OBRERO QUE LABORA EN FORMA EVENTUAL O CON CONTRATO A PLAZO FIJO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.8.2.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "OBREROS CON CONTRATO A PLAZO FIJO"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONCEPTO DE GRATIFICACIONES POR FIESTAS PATRIAS Y NAVIDAD QUE SE ABONAN A LOS SERVIDORES PUBLICOS ACTIVOS BAJO EL REGIMEN LABORAL 728, EN CUMPLIMIENTO DE PACTO COLECTIVO O NORMA LEGAL EXPRESA",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.por el Artículo 9.1.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "GRATIFICACIONES"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONCEPTO DE AGUINALDOS POR FIESTAS PATRIAS Y NAVIDAD QUE SE ABONAN A LOS SERVIDORES PUBLICOS ACTIVOS Y EL PERSONAL DE LAS FUERZAS ARMADAS, REGULADOS ANUALMENTE POR EL ESTADO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.por el Artículo 9.1.2",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "AGUINALDOS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONCEPTO DE ESCOLARIDAD QUE SE ABONAN A LOS SERVIDORES PUBLICOS ACTIVOS Y PERSONAL DE LAS FUERZAS ARMADAS, REGULADOS ANUALMENTE POR EL ESTADO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.por el Artículo 9.1.3",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "BONIFICACION POR ESCOLARIDAD"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS PARA CUBRIR LA COMPENSACION POR TIEMPO DE SERVICIOS, POR EL CESE DE PERSONAL ACTIVO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.9.2.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "COMPENSACION POR TIEMPO DE SERVICIOS (CTS)"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ASIGNACION ECONOMICA QUE SE CONCEDE AL PERSONAL LICENCIADO DEL SERVICIO MILITAR ACUARTELADO AL TERMINO DEL PERIODO DEL SERVICIO MILITAR O DEL CONTRATO DE REENGANCHE",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.9.2.2",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "ASIGNACION POR LICENCIAMIENTO"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ASIGNACION DE BONIFICACION AL PERSONAL ACTIVO POR CUMPLIR 25 O 30 AÃOS DE SERVICIOS AL ESTADO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.9.3.1",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "ASIGNACION POR CUMPLIR 25 O 30 AÃOS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ASIGNACION DE BONIFICACION ADICIONAL POR VACACIONES AL PERSONAL ACTIVO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.9.3.2",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "BONIFICACION ADICIONAL POR VACACIONES"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ASIGNACION DE COMPENSACION VACACIONAL AL PERSONAL ACTIVO, INCLUYENDO VACACIONES TRUNCAS",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.9.3.3",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "COMPENSACION VACACIONAL (VACACIONES TRUNCAS)"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS DE ASIGNACION POR ENSEÃANZA, QUE POR SU NATURALEZA NO FORME PARTE DE LA RETRIBUCION CONTINUA",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.9.3.4",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "ASIGNACION POR ENSEÃANZA"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS PARA CUBRIR EL OTORGAMIENTO DEL BONO DE PRODUCTIVIDAD, POR EL CUMPLIMIENTO DE LOS CONVENIOS DE ADMINISTRACION POR RESULTADOS SUSCRITOS CON LA DNPP EN EL MARCO DE DISPOSICION LEGAL EXPRESA",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.9.3.5",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "BONOS DE PRODUCTIVIDAD-CONVENIOS DE ADMINISTRACION POR RESULTADOS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR EL OTORGAMIENTO DE UN BONO POR EL CUMPLIMIENTO DE METAS Y OBJETIVOS INSTITUCIONALES",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.9.3.7",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "BONO POR DESEMPEÃO"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR EL OTORGAMIENTO DEL BONO POR FUNCION INSPECTIVA A LOS SERVIDORES DE LA CARRERA DE INSPECCION DEL TRABAJO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.9.3.8",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "BONO POR FUNCION INSPECTIVA"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS PARA EL PAGO A PERSONAL ACTIVO, SUJETOS A EVALUACION POR REGISTRO EN EL AIRHSP",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.9.3.98",
      "restringida_art" : "por el Artículo 9.12",
      "anio" : "2020",
      "des_clasf" : "OTROS GASTOS DE PERSONAL"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "OTROS GASTOS EVENTUALES U OCASIONALES",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.1.9.3.99",
      "restringida_art" : "por el Artículo 9.1",
      "anio" : "2020",
      "des_clasf" : "OTRAS OCASIONALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION, CONFECCION Y ACABADO DE UNIFORMES, VESTUARIO, CALZADO, TEJIDOS Y OTROS ACCESORIOS PARA EL OTORGAMIENTO AL PERSONAL ADMINISTRATIVO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.1.2.1.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "UNIFORME PERSONAL ADMINISTRATIVO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE ALIMENTOS Y BEBIDAS, ENTRE OTRAS RETRIBUCIONES EN ESPECIES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.1.2.1.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTRAS RETRIBUCIONES EN ESPECIE"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ASIGNACION DE SERVICIO DE MOVILIDAD A LOS SERVIDORES ACTIVOS DEL SECTOR PUBLICO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.1.2.1.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "MOVILIDAD PARA TRASLADO DE LOS TRABAJADORES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ASIGNACION DE SERVICIOS DE ESTACIONAMIENTO DEL VEHICULO DEL PERSONAL ACTIVO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.1.2.1.2.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR ESTACIONAMIENTO PARA VEHICULOS DEL PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ASIGNACION DE SERVICIOS DE INSTALACIONES RECREATIVAS PARA TRABAJADORES Y FAMILIARES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.1.2.1.2.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "GASTOS EN INSTALACIONES RECREATIVAS PARA TRABAJADORES Y FAMILIARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR GUARDERIAS PARA LOS HIJOS DE LOS TRABAJADORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.1.2.1.2.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "GUARDERIAS PARA HIJOS DE TRABAJADORES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ENTREGA DE CUPON O VALE POR CONCEPTO DE ALIMENTOS, DE ACUERDO A LA NORMATIVIDAD VIGENTE",
      "habilitadora_" : "Si",
      "code_clasf" : "2.1.2.1.2.5",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ENTREGA DE CUPON O VALE POR CONCEPTO DE ALIMENTACION"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR APORTES A LOS FONDOS DE SALUD QUE LA ENTIDAD ESTATAL DEBE PAGAR EN SU CONDICION DE EMPLEADOR POR EL PERSONAL ACTIVO, INCLUYE LOS APORTES A LAS EMPRESAS PRESTADORAS DE SALUD",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.3.1.1.1",
      "restringida_art" : "por el Artículo 9.5",
      "anio" : "2020",
      "des_clasf" : "APORTES A LOS FONDOS DE SALUD"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR APORTES A LOS FONDOS DE PENSIONES QUE LA ENTIDAD ESTATAL DEBE PAGAR EN SU CONDICION DE EMPLEADOR POR LOS PENSIONISTAS",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.3.1.1.10",
      "restringida_art" : "por el Artículo 9.5",
      "anio" : "2020",
      "des_clasf" : "APORTES A LOS FONDOS DE PENSIONES PARA PENSIONISTAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR APORTES A LOS FONDOS DE VIVIENDA QUE LA ENTIDAD ESTATAL DEBE PAGAR EN SU CONDICION DE EMPLEADOR POR LOS PENSIONISTAS",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.3.1.1.11",
      "restringida_art" : "por el Artículo 9.5",
      "anio" : "2020",
      "des_clasf" : "APORTES A LOS FONDOS DE VIVIENDA PARA PENSIONISTAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR APORTES A LOS FONDOS DE RETIRO QUE LA ENTIDAD ESTATAL DEBE PAGAR EN SU CONDICION DE EMPLEADOR",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.3.1.1.2",
      "restringida_art" : "por el Artículo 9.5",
      "anio" : "2020",
      "des_clasf" : "APORTES A LOS FONDOS DE RETIRO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR APORTES A LOS FONDOS DE PENSIONES QUE LA ENTIDAD ESTATAL DEBE PAGAR EN SU CONDICION DE EMPLEADOR POR EL PERSONAL ACTIVO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.3.1.1.3",
      "restringida_art" : "por el Artículo 9.5",
      "anio" : "2020",
      "des_clasf" : "APORTES A LOS FONDOS DE PENSIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR APORTES A LOS FONDOS DE VIVIENDA QUE LA ENTIDAD ESTATAL DEBE PAGAR EN SU CONDICION DE EMPLEADOR, POR EL PERSONAL ACTIVO",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.3.1.1.4",
      "restringida_art" : "por el Artículo 9.5",
      "anio" : "2020",
      "des_clasf" : "APORTES A LOS FONDOS DE VIVIENDA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONTRIBUCIONES A ESSALUD QUE LA ENTIDAD ESTATAL DEBE PAGAR EN SU CONDICION DE EMPLEADOR",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.3.1.1.5",
      "restringida_art" : "por el Artículo 9.5",
      "anio" : "2020",
      "des_clasf" : "CONTRIBUCIONES A ESSALUD"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR OTRAS CONTRIBUCIONES DEL EMPLEADOR NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES, COMO POR EL SEGURO COMPLEMENTARIO DE TRABAJO DE RIESGO, SEGURO DE VIDA LEY, ENTRE OTROS",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.3.1.1.6",
      "restringida_art" : "por el Artículo 9.5",
      "anio" : "2020",
      "des_clasf" : "OTRAS CONTRIBUCIONES DEL EMPLEADOR"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR APORTES A LOS FONDOS DE SALUD QUE LA ENTIDAD ESTATAL DEBE PAGAR EN SU CONDICION DE EMPLEADOR POR LOS PENSIONISTAS, INCLUYE LOS APORTES A LAS EMPRESAS PRESTADORAS DE SALUD",
      "habilitadora_" : "No",
      "code_clasf" : "2.1.3.1.1.9",
      "restringida_art" : "por el Artículo 9.5",
      "anio" : "2020",
      "des_clasf" : "APORTES A LOS FONDOS DE SALUD PARA PENSIONISTAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR EL PAGO A PENSIONISTAS A CARGO DEL ESTADO, BAJO EL REGIMEN DE PENSIONES DL 20530",
      "habilitadora_" : "No",
      "code_clasf" : "2.2.1.1.1.1",
      "restringida_art" : "por el Artículo 9.2",
      "anio" : "2020",
      "des_clasf" : "REGIMEN DE PENSIONES DL  20530"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR EL PAGO A PENSIONISTAS A CARGO DEL ESTADO, BAJO EL SISTEMA NACIONAL DE PENSIONES DL  19990",
      "habilitadora_" : "No",
      "code_clasf" : "2.2.1.1.1.2",
      "restringida_art" : "por el Artículo 9.2",
      "anio" : "2020",
      "des_clasf" : "SISTEMA NACIONAL DE PENSIONES DL  19990"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR EL PAGO A PENSIONISTAS A CARGO DEL ESTADO, BAJO EL REGIMEN DE PENSIONES DL 19846",
      "habilitadora_" : "No",
      "code_clasf" : "2.2.1.1.1.3",
      "restringida_art" : "por el Artículo 9.2",
      "anio" : "2020",
      "des_clasf" : "REGIMEN DE PENSIONES DL  19846"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR EL PAGO A PENSIONISTAS A CARGO DEL ESTADO, BAJO OTROS REGIMENES DE PENSIONES",
      "habilitadora_" : "No",
      "code_clasf" : "2.2.1.1.1.99",
      "restringida_art" : "por el Artículo 9.2",
      "anio" : "2020",
      "des_clasf" : "OTROS REGIMENES DE PENSIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR EL OTORGAMIENTO DE ESCOLARIDAD, AGUINALDOS Y GRATIFICACIONES POR FIESTAS PATRIAS Y NAVIDAD QUE SE ABONA AL SERVIDOR PUBLICO CESANTE, SEGUN CORRESPONDA",
      "habilitadora_" : "No",
      "code_clasf" : "2.2.1.1.2.1",
      "restringida_art" : "por el Artículo 9.2",
      "anio" : "2020",
      "des_clasf" : "ESCOLARIDAD, AGUINALDOS Y GRATIFICACIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ASIGNACION DE BONIFICACION FONAHPU - DL NÂ° 20530",
      "habilitadora_" : "No",
      "code_clasf" : "2.2.1.1.2.2",
      "restringida_art" : "por el Artículo 9.2",
      "anio" : "2020",
      "des_clasf" : "BONIFICACION FONAHPU - D L  20530"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ASIGNACION DE COMBUSTIBLE AL PERSONAL PENSIONISTA MILITAR Y POLICIAL",
      "habilitadora_" : "No",
      "code_clasf" : "2.2.1.1.2.3",
      "restringida_art" : "por el Artículo 9.2",
      "anio" : "2020",
      "des_clasf" : "ASIGNACION POR COMBUSTIBLES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ASIGNACION DE RACION UNICA AL PERSONAL PENSIONISTA MILITAR Y POLICIAL",
      "habilitadora_" : "No",
      "code_clasf" : "2.2.1.1.2.4",
      "restringida_art" : "por el Artículo 9.2",
      "anio" : "2020",
      "des_clasf" : "ASIGNACION POR RACION ORGANICA UNICA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ASIGNACION DE MAYORDOMIA AL PERSONAL PENSIONISTA MILITAR Y POLICIAL",
      "habilitadora_" : "No",
      "code_clasf" : "2.2.1.1.2.5",
      "restringida_art" : "por el Artículo 9.2",
      "anio" : "2020",
      "des_clasf" : "MAYORDOMIA"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS PARA EL PAGO A PENSIONISTAS A CARGO DEL ESTADO, SUJETOS A EVALUACION POR REGISTRO EN EL AIRHSP",
      "habilitadora_" : "No",
      "code_clasf" : "2.2.1.1.2.98",
      "restringida_art" : "por el Artículo 9.12",
      "anio" : "2020",
      "des_clasf" : "OTROS GASTOS EN PENSIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ASIGNACION POR CUALQUIER OTRA PERCEPCION DE LA MISMA NATURALEZA NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "No",
      "code_clasf" : "2.2.1.1.2.99",
      "restringida_art" : "por el Artículo 9.2",
      "anio" : "2020",
      "des_clasf" : "OTROS BENEFICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS QUE CONLLEVEN A OTORGAR PRESTACIONES DE SALUD Y BRINDAR LA ASISTENCIA NECESARIA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.1.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PRESTACIONES DE SALUD"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS QUE PERMITAN OTORGAR SUBSIDIO POR INCAPACIDAD TEMPORAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.1.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SUBSIDIO POR INCAPACIDAD TEMPORAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS QUE PERMITAN OTORGAR SUBSIDIO POR MATERNIDAD",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.1.2.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SUBSIDIO POR MATERNIDAD"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS QUE PERMITAN OTORGAR SUBSIDIO POR LACTANCIA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.1.2.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SUBSIDIO POR LACTANCIA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL PAGO DE PALMAS MAGISTERIALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.1.2.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PALMAS MAGISTERIALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS QUE PERMITAN OTORGAR SUBSIDIOS POR OTROS BENEFICIOS DE SIMILAR NATURALEZA, NO CONTEMPLADOS ANTERIORMENTE",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.1.2.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS BENEFICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL PAGO DE PENSIONES DE GRACIA QUE SE OTORGARAN A LAS PERSONAS QUE HAYAN REALIZADO UNA LABOR DE TRASCENDENCIA NACIONAL EN BENEFICIO DEL PAIS, QUE NO PERCIBAN UNA PENSION O INGRESO DEL ESTADO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.2.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PENSIONES DE GRACIA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL PAGO DE PENSION DE SOBREVIVIENTE, INVALIDEZ Y CUALQUIER OTRA PERCEPCION DE LA MISMA NATURALEZA, POR ACCIDENTES DE TRABAJO O VICTIMAS DE TERRORISMO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.2.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PENSIONES POR ACCIDENTES DE TRABAJO O VICTIMAS DE TERRORISMO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL OTORGAMIENTO DEL BONO COMPLEMENTARIO DE PENSION MINIMA Y EL BONO COMPLEMENTARIO DE JUBILACION ADELANTADA Y LA BONIFICACION COMPLEMENTARIA, ENTRE OTRAS DE SIMILAR NATURALEZA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.2.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "BONOS COMPLEMENTARIOS Y PENSIONES COMPLEMENTARIAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS DE SIMILAR NATURALEZA NO CONTEMPLADOS ANTERIORMENTE",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.2.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS SIMILARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE ALIMENTOS PARA ATENDER LOS COMEDORES NACIONALES, DESAYUNOS ESCOLARES, PROGRAMA DEL VASO DE LECHE",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.3.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ALIMENTOS PARA PROGRAMAS SOCIALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS DE APOYO ALIMENTARIO U OTRAS DE IGUAL NATURALEZA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.3.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS BIENES DE APOYO ALIMENTARIO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE TEXTOS ESCOLARES DE DISTRIBUCION GRATUITA A ALUMNOS DE LOS CC  EE  PUBLICOS DE INICIAL, PRIMARIA Y SECUNDARIA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.3.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "TEXTOS ESCOLARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE EQUIPOS INFORMATICOS DE DISTRIBUCION GRATUITA A ALUMNOS DE LOS CC  EE  PUBLICOS DE INICIAL, PRIMARIA Y SECUNDARIA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.3.2.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "EQUIPOS INFORMATICOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE OTROS BIENES Y SERVICIOS DE APOYO ESCOLAR PARA DISTRIBUCION GRATUITA A ALUMNOS DE LOS CC  EE  PUBLICOS DE INICIAL, PRIMARIA Y SECUNDARIA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.3.2.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS BIENES DE APOYO ESCOLAR"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MEDICAMENTOS PARA DISTRIBUCION GRATUITA A LA POBLACION",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.3.3.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ENTREGA DE MEDICAMENTOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE OTROS BIENES Y SERVICIOS DE ASISTENCIA MEDICA PARA DISTRIBUCION GRATUITA A LA POBLACION",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.3.3.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS BIENES Y SERVICIOS DE ASISTENCIA MEDICA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS EN QUE INCURREN LAS ENTIDADES PUBLICAS POR CONCEPTO DE SEGURO MEDICO DEL PERSONAL A SU SERVICIO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.3.4.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SEGURO MEDICO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR SEPELIO Y LUTO COMO CONSECUENCIA DEL FALLECIMIENTO DEL SERVIDOR PUBLICO, ASI COMO DE SUS FAMILIARES DIRECTOS   INCLUYE GASTOS DE SEPELIO POR FALLECIMIENTO DE UN TRABAJADOR EN EL MARCO DEL SEGURO COMPLEMENTARIO DE TRABAJO DE RIESGO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.3.4.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "GASTOS DE SEPELIO Y LUTO DEL PERSONAL ACTIVO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR SEPELIO Y LUTO COMO CONSECUENCIA DEL FALLECIMIENTO DE LOS PENSIONISTAS, ASI COMO DE SUS FAMILIARES DIRECTOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.3.4.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "GASTOS DE SEPELIO Y LUTO DEL PERSONAL PENSIONISTA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR CUBRIR OTROS BIENES DE ASISTENCIA SOCIAL NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORMENTE",
      "habilitadora_" : "Si",
      "code_clasf" : "2.2.2.3.99.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS BIENES DE ASISTENCIA SOCIAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE BEBIDAS EN SUS DIVERSAS FORMAS, INSUMOS Y PRODUCTOS ALIMENTICIOS DESTINADOS PARA EL CONSUMO HUMANO, TALES COMO PARA FUNCIONARIOS, ALUMNOS, RECLUSOS, TROPA Y DEMAS PERSONAS, INCLUYENDO LOS COMEDORES DE TROPA Y DE ESCUELAS MILITARES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.1.1.1",
      "restringida_art" : "por el Artículo 9.7",
      "anio" : "2020",
      "des_clasf" : "ALIMENTOS Y BEBIDAS PARA CONSUMO HUMANO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE INSUMOS Y PRODUCTOS DE ORIGEN VEGETAL, ANIMAL O MINERAL EN TODAS SUS FORMAS DESTINADOS AL CONSUMO ANIMAL, TALES COMO PARA ANIMALES DE ZOOLOGICOS, LABORATORIOS DE EXPERIMENTACION, ETC",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.1.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ALIMENTOS Y BEBIDAS PARA CONSUMO ANIMAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE SUMINISTROS DE USO ZOOTECNICO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.10.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SUMINISTROS DE USO ZOOTECNICO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MATERIAL BIOLOGICO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.10.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "MATERIAL BIOLOGICO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE ANIMALES PARA ESTUDIOS E INVESTIGACION",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.10.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ANIMALES PARA ESTUDIO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE FERTILIZANTES, INSECTICIDAS, FUNGICIDAS Y SIMILARES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.10.1.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "FERTILIZANTES, INSECTICIDAS, FUNGICIDAS Y SIMILARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE SUMINISTROS DE ACCESORIOS Y/O MATERIALES DE USO FORESTAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.10.1.5",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SUMINISTROS DE ACCESORIOS Y/O MATERIALES DE USO FORESTAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE PRODUCTOS FARMACEUTICOS DE USO ANIMAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.10.1.6",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PRODUCTOS FARMACEUTICOS DE USO ANIMAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE SUMINISTROS PARA MANTENIMIENTO Y REPARACION PARA EDIFICIOS Y ESTRUCTURAS",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.1.11.1.1",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "PARA EDIFICIOS Y ESTRUCTURAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE SUMINISTROS PARA MANTENIMIENTO Y REPARACION PARA VEHICULOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.1.11.1.2",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "PARA VEHICULOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE SUMINISTROS PARA MANTENIMIENTO Y REPARACION PARA MOBILIARIO Y SIMILARES",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.1.11.1.3",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "PARA MOBILIARIO Y SIMILARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE SUMINISTROS PARA MANTENIMIENTO Y REPARACION PARA MAQUINARIAS Y EQUIPOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.1.11.1.4",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "PARA MAQUINARIAS Y EQUIPOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE SUMINISTROS PARA MANTENIMIENTO Y REPARACION DE OTROS MATERIALES DE MANTENIMIENTO",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.1.11.1.5",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "OTROS MATERIALES DE MANTENIMIENTO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE SUMINISTROS PARA MANTENIMIENTO Y REPARACION DE MATERIALES DE ACONDICIONAMIENTO",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.1.11.1.6",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "MATERIALES DE  ACONDICIONAMIENTO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE VESTUARIO, ACCESORIOS Y PRENDAS DIVERSAS, A SER USADOS EXCLUSIVA O PRINCIPALMENTE EN EL TRABAJO, COMO DE ENFERMERAS, MILITAR Y POLICIAL, PERSONAL DE TROPA Y DEMAS PERSONAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.2.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "VESTUARIO, ACCESORIOS Y PRENDAS DIVERSAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE TEXTILES Y ACABADOS TEXTILES, COMO TAPICES, ALFOMBRAS, CORTINAS, FRAZADAS, SABANAS, FUNDAS Y OTROS ARTICULOS DE SIMILAR NATURALEZA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.2.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "TEXTILES Y ACABADOS TEXTILES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION Y/O CONFECCION DE CALZADOS DE TODO TIPO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.2.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "CALZADO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE COMBUSTIBLES Y CARBURANTES PARA EL CONSUMO DE MAQUINARIAS, EQUIPOS Y VEHICULOS DE PRODUCCION, SERVICIOS PRODUCTIVOS Y DE TRANSPORTE Y OTROS USOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.3.1.1",
      "restringida_art" : "por el Artículo 9.6",
      "anio" : "2020",
      "des_clasf" : "COMBUSTIBLES Y CARBURANTES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE DIFERENTES TIPOS DE GASES PARA EL CONSUMO DE VEHICULOS, MAQUINARIAS, EQUIPOS DE PRODUCCION, TRACCION Y ELEVACION, CALEFACCION Y OTROS USOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.3.1.2",
      "restringida_art" : "por el Artículo 9.6",
      "anio" : "2020",
      "des_clasf" : "GASES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE LUBRICANTES, GRASAS Y AFINES PARA EL CONSUMO DE VEHICULOS, MAQUINARIAS, EQUIPOS DE PRODUCCION, TRACCION Y ELEVACION, CALEFACCION Y OTROS USOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.3.1.3",
      "restringida_art" : "por el Artículo 9.6",
      "anio" : "2020",
      "des_clasf" : "LUBRICANTES, GRASAS Y AFINES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE TODO TIPO DE COMPONENTES EXPLOSIVOS, ASI COMO ELEMENTOS DE CARGA Y MUNICIONES PARA ARMAMENTO Y OTROS DE SIMILAR NATURALIZA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.4.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "MUNICIONES,  EXPLOSIVOS Y SIMILARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE REPUESTOS Y ACCESORIOS PARA COPIADORAS; EQUIPOS, MAQUINARIAS Y EQUIPOS DE OFICINA; Y OTROS AFINES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.5.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "REPUESTOS Y ACCESORIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE PAPELERIA EN GENERAL, UTILES Y MATERIALES DE OFICINA, TALES COMO: ARCHIVADORES, BORRADORES, CORRECTORES, IMPLEMENTOS PARA ESCRITORIO EN GENERAL; MEDIOS PARA ESCRIBIR, NUMERAR Y SELLAR; PAPELES, CARTONES Y CARTULINAS; SUJETADORES DE PAPEL; ENTRE OTROS AFINES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.5.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PAPELERIA EN GENERAL, UTILES Y MATERIALES DE OFICINA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MATERIAL AGROPECUARIO, GANADERO Y DE JARDINERIA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.5.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "AGROPECUARIO, GANADERO Y DE JARDINERIA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE DESINFECTANTES, DETERGENTES Y DESODORANTES; IMPLEMENTOS Y MEDIOS PARA ASEO; MATERIAL, REPUESTOS Y ACCESORIOS PARA TOCADOR Y COSMETOLOGIA, ENTRE OTROS AFINES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.5.3.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ASEO, LIMPIEZA Y TOCADOR"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A LA ADQUISICION DE UTILES MENORES DE COCINA Y VAJILLA DE COMEDOR A SER UTILIZADA EN HOSPITALES, HOGARES DE NIÃOS, ASILOS Y OTRAS DEPENDENCIAS PUBLICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.5.3.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE COCINA, COMEDOR Y CAFETERIA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE PIEZAS Y ELEMENTOS DE INSTALACIONES ELECTRICAS Y ELECTRONICA  INCLUYE LA ADQUISICION DE BOMBILLAS, CABLES, INTERRUPTORES, ZOCALOS, TUBOS FLUORESCENTES, LINTERNAS, CONDUCTORES, AISLADORES, FUSIBLES, BATERIAS, PILAS, ENCHUFES, ETC",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.5.4.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ELECTRICIDAD, ILUMINACION Y ELECTRONICA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS DE LA MISMA NATURALEZA NO CONTEMPLADOS ANTERIORMENTE",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.5.99.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE REPUESTOS Y ACCESORIOS DE TODO TIPO DE VEHICULOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.1.6.1.1",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "DE VEHICULOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE REPUESTOS Y ACCESORIOS DE TELECOMUNICACIONES, TELEFONIA Y TELEGRAFIA, TALES COMO: ACOPLADORES TELEFONICOS, AUDIFONOS, ANTENAS, ALAMBRES PARA TELEFONIA, CABLES TELEFONICOS, ENTRE OTROS AFINES",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.1.6.1.2",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "DE COMUNICACIONES Y TELECOMUNICACIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ADQUISICION MATERIALES DE CONSTRUCCION Y OTROS ELEMENTOS DE MAMPOSTERIA; MADERAS Y ACCESORIOS DE MADERA EN GENERAL; REVESTIMIENTO Y ACABADOS; PRODUCTOS DE CONCRETO Y OTROS MATERIALES DE CONSTRUCCION, ACCESORIOS Y REPUESTOS DE MAQUINAS, ENTRE OTROS AFINES",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.1.6.1.3",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "DE CONSTRUCCION Y MAQUINAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE REPUESTOS Y ACCESORIOS PARA EQUIPOS DE ALARMA Y PROTECCION DE LOCALES Y BIENES; SEÃALIZADORES; INDUMENTARIA Y PROTECTORES PARA PERSONAS; IMPLEMENTOS Y MATERIALES; ENTRE OTROS AFINES",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.1.6.1.4",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "DE SEGURIDAD"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR OTROS ACCESORIOS Y REPUESTOS NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.1.6.1.99",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "OTROS ACCESORIOS Y REPUESTOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE ENSERES DIVERSOS DE POCO VALOR O CUANTIA, TALES COMO: BALDES, MACETEROS, ARTICULOS DECORATIVOS, ENTRE OTROS AFINES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.7.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ENSERES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE VACUNAS PARA PACIENTES DE HOSPITALES, CLINICAS, POLICLINICOS, ENTRE OTRAS ENTIDADES PUBLICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.8.1.1",
      "restringida_art" : "por el Artículo 9.11",
      "anio" : "2020",
      "des_clasf" : "VACUNAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MEDICAMENTOS PARA PACIENTES DE LOS HOSPITALES, CLINICAS, POLICLINICOS, ENTRE OTRAS ENTIDADES PUBLICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.8.1.2",
      "restringida_art" : "por el Artículo 9.11",
      "anio" : "2020",
      "des_clasf" : "MEDICAMENTOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE OTROS PRODUCTOS SIMILARES, NO CONTEMPLADOS EN LAS CUENTAS ANTERIORES: COMO VITAMINAS, PRODUCTOS BACTERIOLOGICOS, ENTRE OTROS DE SIMILAR NATURALEZA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.8.1.99",
      "restringida_art" : "por el Artículo 9.11",
      "anio" : "2020",
      "des_clasf" : "OTROS PRODUCTOS SIMILARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MATERIAL, INSUMOS, INSTRUMENTAL Y ACCESORIOS  MEDICOS, QUIRURGICOS, ODONTOLOGICOS Y DE LABORATORIO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.8.2.1",
      "restringida_art" : "por el Artículo 9.11",
      "anio" : "2020",
      "des_clasf" : "MATERIAL, INSUMOS, INSTRUMENTAL Y ACCESORIOS  MEDICOS, QUIRURGICOS, ODONTOLOGICOS Y DE LABORATORIO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE LIBROS, TEXTOS Y OTROS MATERIALES IMPRESOS DESTINADOS A LA ENSEÃANZA EDUCATIVA, UTILIZADOS POR INSTITUCIONES EDUCATIVAS, BIBLIOTECAS, INSTITUTOS, CENTROS DE ESTUDIO, ENTRE OTROS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.por el Artículo 9.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "LIBROS, TEXTOS Y OTROS MATERIALES IMPRESOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MATERIAL DIDACTICO, ACCESORIOS Y UTILES DE ENSEÃANZA, UTILIZADOS POR INSTITUCIONES EDUCATIVAS, BIBLIOTECAS, INSTITUTOS, CENTROS DE ESTUDIO, ENTRE OTROS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.por el Artículo 9.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "MATERIAL DIDACTICO, ACCESORIOS Y UTILES DE ENSEÃANZA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR OTROS MATERIALES DIVERSOS DE ENSEÃANZA, COMO MATERIALES DE LABORATORIO, ENTRE OTROS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.por el Artículo 9.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS MATERIALES DIVERSOS DE ENSEÃANZA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE HERRAMIENTAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.9por el Artículo 9.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "HERRAMIENTAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE PRODUCTOS QUIMICOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.9por el Artículo 9.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PRODUCTOS QUIMICOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE LIBROS, DIARIOS, REVISTAS Y OTROS BIENES IMPRESOS NO VINCULADOS A ENSEÃANZA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.9por el Artículo 9.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "LIBROS, DIARIOS, REVISTAS Y OTROS BIENES IMPRESOS NO VINCULADOS A ENSEÃANZA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE SIMBOLOS, DISTINTIVOS Y CONDECORACIONES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.9por el Artículo 9.1.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SIMBOLOS, DISTINTIVOS Y CONDECORACIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE OTROS BIENES, DE SIMILAR NATURALEZA NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.1.9por el Artículo 9.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DE PASAJES Y GASTOS DE TRANSPORTE PAGADOS A EMPRESAS DE TRANSPORTE O A AGENCIAS DE VIAJE POR EL TRASLADO DEL PERSONAL AL EXTERIOR DEL PAIS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.1.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PASAJES Y GASTOS DE TRANSPORTE"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "ASIGNACION QUE SE CONCEDEN AL PERSONAL PUBLICO PARA ATENDER GASTOS QUE LES OCASIONA EN EL DESEMPEÃO DE UNA COMISION DE SERVICIO EN EL EXTERIOR (ALIMENTACION, HOSPEDAJE, MOVILIDAD ASI COMO EL TUUA)",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.1.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "VIATICOS Y ASIGNACIONES POR COMISION DE SERVICIO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR CAMBIO DE COLOCACION DEL PERSONAL, ASI COMO DE SU FAMILIA, QUE POR RAZONES DEL SERVICIO ES TRASLADADO TEMPORALMENTE DE SU UNIDAD O SEDE DE ORIGEN AL EXTERIOR DEL PAIS  INCLUYE VIATICOS Y FLETES POR MENAJE, ENSERES DOMESTICOS Y DESEMBOLSOS INICIALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.1.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "VIATICOS Y FLETES POR CAMBIO DE COLOCACION"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS DE VIAJES AL EXTERIOR DEL PAIS NO ESPECIFICADOS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.1.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS GASTOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL PAGO DE PASAJES Y GASTOS DE TRANSPORTE PAGADOS A EMPRESAS DE TRANSPORTE O A AGENCIAS DE VIAJES POR EL TRASLADO DE PERSONAL EN EL INTERIOR DEL PAIS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.1.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PASAJES Y GASTOS DE TRANSPORTE"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "ASIGNACION QUE SE CONCEDEN AL PERSONAL PUBLICO PARA ATENDER GASTOS PERSONALES QUE LES OCASIONE EN EL DESEMPEÃO DE SUS FUNCIONES EN EL INTERIOR DEL PAIS (ALIMENTACION, HOSPEDAJE, MOVILIDAD ASI COMO EL TUUA)",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.1.2.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "VIATICOS Y ASIGNACIONES POR COMISION DE SERVICIO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR CAMBIO DE COLOCACION DEL PERSONAL, ASI COMO DE SU FAMILIA, QUE POR RAZONES DEL SERVICIO ES TRASLADADO TEMPORALMENTE DE SU UNIDAD O SEDE DE ORIGEN EN EL INTERIOR DEL PAIS  INCLUYE VIATICOS Y FLETES POR MENAJE, ENSERES DOMESTICOS Y DESEMBOLSOS INICIALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.1.2.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "VIATICOS Y FLETES POR CAMBIO DE COLOCACION"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS DE VIAJES DOMESTICOS NO ESPECIFICADOS EN LAS PARTIDAS ANTERIORES, COMO MOVILIDAD LOCAL CUANDO EL SERVIDOR SE DESPLAZA FUERA DE SU CENTRO DE TRABAJO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.1.2.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS GASTOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR EL CONSUMO DE ENERGIA ELECTRICA POR LAS ENTIDADES PUBLICAS, PARA EL FUNCIONAMIENTO DE SUS INSTALACIONES",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.2.1.1",
      "restringida_art" : "por el Artículo 9.9",
      "anio" : "2020",
      "des_clasf" : "SERVICIO DE SUMINISTRO DE ENERGIA ELECTRICA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR EL CONSUMO DE AGUA POTABLE Y TRATADA POR LAS ENTIDADES PUBLICAS, PARA EL FUNCIONAMIENTO DE SUS INSTALACIONES",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.2.1.2",
      "restringida_art" : "por el Artículo 9.9",
      "anio" : "2020",
      "des_clasf" : "SERVICIO DE AGUA Y DESAGUE"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR EL CONSUMO DE GAS POR LAS ENTIDADES PUBLICAS, PARA EL FUNCIONAMIENTO DE SUS INSTALACIONES",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.2.1.3",
      "restringida_art" : "por el Artículo 9.9",
      "anio" : "2020",
      "des_clasf" : "SERVICIO DE SUMINISTRO DE GAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONCEPTO DE TELEFONIA MOVIL (CELULAR), SERVICIO NEXTEL, PRESTADOS POR EMPRESAS PUBLICAS O PRIVADAS",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.2.2.1",
      "restringida_art" : "por el Artículo 9.9",
      "anio" : "2020",
      "des_clasf" : "SERVICIO DE TELEFONIA MOVIL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONCEPTO DE TELEFONIA FIJA (TELEFONO, TELEFAX), USADOS POR LAS ENTIDADES EN EL DESEMPEÃO DE SUS FUNCIONES",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.2.2.2",
      "restringida_art" : "por el Artículo 9.9",
      "anio" : "2020",
      "des_clasf" : "SERVICIO DE TELEFONIA FIJA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONCEPTO DE CONEXION A LA RED INTERNACIONAL DE INFORMACION (INTERNET), USADOS POR LAS ENTIDADES EN EL DESEMPEÃO DE SUS FUNCIONES",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.2.2.3",
      "restringida_art" : "por el Artículo 9.9",
      "anio" : "2020",
      "des_clasf" : "SERVICIO DE INTERNET"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR SERVICIOS DE CORREOS, MENSAJERIA A NIVEL NACIONAL E INTERNACIONAL, QUE USAN LAS ENTIDADES PUBLICAS EN EL DESEMPEÃO DE SUS FUNCIONES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.2.3.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "CORREOS Y SERVICIOS DE MENSAJERIA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS DE CABLE Y OTRAS COMUNICACIONES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.2.3.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS SERVICIOS DE COMUNICACION"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS ANUNCIOS EN DIVERSOS MEDIOS (DIARIOS, REVISTAS, RADIO, TELEVISION, PANELES, MEDIOS ELECTRONICOS, PAGINAS WEB) SOBRE EL QUEHACER GUBERNAMENTAL O RELACIONADO AL SERVICIO PUBLICO QUE BRINDAN LAS ENTIDADES PUBLICAS  NO INCLUYE LAS PUBLICACIONES EN EL DIARIO OFICIAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.2.4.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIO DE PUBLICIDAD"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS DE PROMOCION, PUBLICIDAD Y DIFUSION EN LOS DIVERSOS MEDIOS DE INFORMACION, RELACIONADOS CON LA IMAGEN INSTITUCIONAL DE LAS ENTIDADES PUBLICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.2.4.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS DE IMAGEN INSTITUCIONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LAS PUBLICACIONES EN EL DIARIO OFICIAL EL PERUANO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.2.5.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DIFUSION EN EL DIARIO OFICIAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR CONCEPTO DE CONTRATACION DE SERVICIOS DE LIMPIEZA E HIGIENE DE LAS INSTALACIONES INHERENTES A EDIFICIOS Y LOCALES DE LA ENTIDADES PUBLICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.3.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS DE LIMPIEZA E HIGIENE"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS DE CAMARAS DE VIDEO, ALARMAS Y OTROS IMPLEMENTOS NECESARIOS PARA RESGUARDAR EL ORDEN Y LA SEGURIDAD, DE LAS PERSONAS Y VALORES QUE SE ENCUENTRAN EN UN LUGAR FISICO DETERMINADO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.3.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS DE SEGURIDAD Y VIGILANCIA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONCEPTO DE MANTENIMIENTO, REPARACION Y ACONDICIONAMIENTO DE EDIFICIOS Y ESTRUCTURAS PARA OFICINAS PUBLICAS, ESCUELAS, PENITENCIARIAS, CENTROS ASISTENCIALES Y OTROS ANALOGOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.4.2.1",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "DE EDIFICACIONES, OFICINAS Y ESTRUCTURAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR SERVICIOS DE MANTENIMIENTO O CONSERVACION DE VIAS DE COMUNICACION, TALES COMO: CARRETERAS, CAMINOS Y PUENTES NO CONCESIONADOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.4.3.1",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "DE CARRETERAS, CAMINOS Y PUENTES  NO CONCESIONADOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONCEPTO DE MANTENIMIENTO Y OPERACION (PAMO) DE LAS CARRETERAS, CAMINOS Y PUENTES CONCESIONADOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.4.4.1",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR MANTENIMIENTO Y OPERACION (PAMO)"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONCEPTO DE COSTO ANUAL DE MANTENIMIENTO (CAM) DE OBRAS ADICIONALES, OBRAS ACCESORIAS, VARIACIONES DE METRADO, OBRAS NUEVAS Y OTROS, RELACIONADOS A LAS CARRETERAS, CAMINOS Y PUENTES CONCESIONADOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.4.4.2",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR COSTO ANUAL DE MANTENIMIENTO (CAM)"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONCEPTO DE MANTENIMIENTO DE PAVIMENTOS, DRENAJE, REPARACIONES CAUSADAS POR DERRUMBES Y OTROS DERIVADOS DE INFORMES TECNICOS DE MANTENIMIENTO (ITM) Y/O CONSERVACION (ITC) DE LAS CARRETERAS, CAMINOS Y PUENTES CONCESIONADOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.4.4.3",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR MANTENIMIENTO DERIVADOS DE INFORMES TECNICOS DE MANTENIMIENTO (ITM)"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONCEPTO DE MANTENIMIENTO PERIODICO INICIAL (PAMPI) DE LAS CARRETERAS, CAMINOS Y PUENTES CONCESIONADOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.4.4.4",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR MANTENIMIENTO PERIODICO INICIAL (PAMPI)"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONCEPTO MANTENIMIENTO DE EMERGENCIA COMPUESTO DE ACTIVIDADES DE EJECUCION OCASIONAL, DE CARACTER EXTRAORDINARIO EFECTUADAS CON EL PROPOSITO DE RECUPERAR LA FUNCIONALIDAD O INTEGRALIDAD DEL AREA DE CONCESION  QUE SE HAYA PERDIDO POR EFECTO DE LA ACCION DEL CLIMA, LA NATURALEZA U OTROS FACTORES DIFERENTES DEL NORMAL USO DE LA INFRAESTRUCTURA VIAL CONCESIONADA",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.4.4.5",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR MANTENIMIENTO DE EMERGENCIA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONCEPTO DE MANTENIMIENTO, REPARACION Y ACONDICIONAMIENTO DE AUTOMOVILES, AUTOBUSES, CAMIONES, JEEP, MOTOS, VEHICULOS DE TRES RUEDAS, FERROVIARIOS, MARITIMOS Y AEREOS, Y DE EQUIPOS DE TRACCION ANIMAL Y MECANICA",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.4.5.1",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "DE VEHICULOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONCEPTO DE MANTENIMIENTO, REPARACION Y ACONDICIONAMIENTO DE MOBILIARIO Y SIMILARES, DE OFICINAS Y VIVIENDAS, MUEBLES DE INSTALACIONES MILITARES, POLICIALES, EDUCACIONALES, SANITARIAS Y HOSPITALARIAS, DE ADUANAS, PUERTOS Y AEROPUERTOS, ENTRE OTRAS ANALOGAS",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.4.6.1",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "DE MOBILIARIO Y SIMILARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONCEPTO DE MANTENIMIENTO, REPARACION Y ACONDICIONAMIENTO DE MAQUINAS Y EQUIPOS EN GENERAL",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.4.7.1",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "DE MAQUINARIAS Y EQUIPOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONCEPTO DE MANTENIMIENTO, REPARACION Y ACONDICIONAMIENTO DE OTROS BIENES Y ACTIVOS NO INCLUIDOS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.4.99.99",
      "restringida_art" : "por el Artículo 9.8",
      "anio" : "2020",
      "des_clasf" : "DE OTROS BIENES Y ACTIVOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A CUBRIR EL ALQUILER DE EDIFICIOS, LOCALES Y TERRENOS PARA EL CUMPLIMIENTO DE LAS FUNCIONES O PROGRAMAS INSTITUCIONALES REGULARES  INCLUYE GARANTIAS DE ARRIENDO, DERECHOS DE LLAVE Y OTROS ANALOGOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.5.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE EDIFICIOS Y ESTRUCTURAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A CUBRIR EL ALQUILER DE VEHICULOS DE TRANSPORTE TERRESTRE, AEREO, MARITIMO, LACUSTRE Y FLUVIAL, MOTORIZADO O NO MOTORIZADO, PARA EL TRANSPORTE DE PERSONAL Y CARGA, PARA EL DESEMPEÃO DE LAS FUNCIONES DE LAS ENTIDADES PUBLICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.5.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE VEHICULOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR CONCEPTO DE ALQUILER DE MOBILIARIO DE OFICINA, Y VIVIENDA, MUEBLES DE INSTALACIONES MILITARES, POLICIALES, EDUCACIONALES, SANITARIAS Y HOSPITALARIAS, PUESTOS Y AEROPUERTOS, ENTRE OTRAS ANALOGAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.5.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE MOBILIARIO Y SIMILARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR CONCEPTO DE ALQUILER DE MAQUINAS Y EQUIPOS DE OFICINA, AGRICOLAS, INDUSTRIALES, DE CONSTRUCCION, ENTRE OTRAS MAQUINAS Y EQUIPOS NECESARIOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.5.1.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE MAQUINARIAS Y EQUIPOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR CONCEPTO DE ALQUILER DE OTROS BIENES Y ACTIVOS NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES, INCLUYE ACTUALIZACION, SOPORTE Y MANTENIMIENTO DE LICENCIAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.5.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE OTROS BIENES Y ACTIVOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR SERVICIOS LEGALES Y JUDICIALES EN LOS QUE EL ESTADO HAYA SIDO PARTE",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.6.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "GASTOS LEGALES Y JUDICIALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR SERVICIOS NOTARIALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.6.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "GASTOS NOTARIALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR CONCEPTO DE SERVICIO QUE PRESTAN LOS BANCOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.6.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "CARGOS BANCARIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS EN QUE INCURRE EL ESTADO EN LA COMPRA Y VENTA DE TITULOS Y VALORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.6.2.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "GASTOS FINANCIEROS POR COMPRA Y VENTA DE TITULOS Y VALORES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS RELACIONADOS CON OTROS SERVICIOS FINANCIEROS NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.6.2.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS SERVICIOS FINANCIEROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL PAGO DE SEGURO DE VIDA POR RIESGOS QUE PODRIA SUFRIR UN SERVIDOR PUBLICO EN EL CUMPLIMIENTO DE SUS FUNCIONES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.6.3.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SEGURO DE VIDA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL PAGO DE SEGURO DE VEHICULOS POR RIESGOS DE SUFRIR ALGUN ACCIDENTE DE CIRCULACION",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.6.3.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SEGURO DE VEHICULOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A CUBRIR EL SEGURO OBLIGATORIO DE ACCIDENTES DE TRANSITO, EXIGIDO POR LEY PARA OFRECER PROTECCION AL CONDUCTOR DEL VEHICULO, SUS ACOMPAÃANTES Y TERCEROS NO OCUPANTES QUE SUFRAN LESIONES CORPORALES O MUERTE COMO CONSECUENCIA DE UN ACCIDENTE DE TRANSITO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.6.3.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SEGURO OBLIGATORIO ACCIDENTES DE TRANSITO (SOAT)"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR OTROS SEGUROS PERSONALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.6.3.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS SEGUROS PERSONALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS RELACIONADOS CON OTROS SEGUROS DE BIENES MUEBLES E INMUEBLES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.6.3.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS SEGUROS DE  BIENES MUEBLES E INMUEBLES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL PAGO DE PRESTACIONES DE SERVICIOS DE SALUD BASICA Y ESPECIALIZADA QUE OTORGAN LAS ENTIDADES PRESTADORAS DE SALUD DEL SECTOR PRIVADO   INCLUYE EL PAGO DE LAS PRESTACIONES ADMINISTRATIVAS ASOCIADAS A LOS ASEGURADOS EN EL MARCO DEL ASEGURAMIENTO UNIVERSAL DE SALUD",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.6.4.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR PRESTACIONES DE SALUD"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE CONSULTORIAS, ENTENDIDAS COMO INSUMOS PARA LA TOMA DE DECISIONES DE ENTIDADES, CUYA APLICACION NECESARIAMENTE IMPULSE O CONSTITUYA VALOR PUBLICO EN EL MARCO DE LAS COMPETENCIAS DE CADA ENTIDAD, POR PERSONAS JURIDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "CONSULTORIAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA REALIZACION DE ESTUDIOS Y/O EVALUACIONES NO VINCULADOS A FORMACION DE CAPITAL, QUE IMPLICAN LA ESTRATEGIA Y/O DESARROLLO DE METODOLOGIAS, ASI COMO EL LEVANTAMIENTO DE INFORMACION PRIMARIA Y/O SECUNDARIA EN EL PAIS O EN EL EXTRANJERO PARA TOMAR DECISIONES VINCULADAS A INTERVENCIONES DE ENTIDADES PUBLICAS, PRESTADOS POR PERSONAS JURIDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.1.6",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ESTUDIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA REALIZACION DE INVESTIGACIONES Y PROFUNDIZACION DE TEMAS RELACIONADOS A DETERMINADA FUNCION DEL ESTADO, NO VINCULADAS A FORMACION DE CAPITAL, QUE IMPLIQUEN REVISION DE DATA, LITERATURA, COMPORTAMIENTO, MEJORES PRACTICAS, ENTRE OTROS, PRESTADOS POR PERSONAS JURIDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.1.7",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "INVESTIGACIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE METODOLOGIAS, REFORMAS, RE-PLANTEOS Y SIMILARES VINCULADOS A LAS COMPETENCIAS DE LA ENTIDAD PUBLICA POR PERSONAS JURIDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.1.8",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DISEÃO DE METODOLOGIAS, REFORMAS Y SIMILARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR OTROS SERVICIOS SIMILARES NO ESPECIFICADOS EN LAS PARTIDAS ANTERIORES PRESTADOS POR PERSONAS JURIDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS SERVICIOS SIMILARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS PRESTADOS POR PERSONAS NATURALES O JURIDICAS PARA REALIZAR SEMINARIOS, TALLERES Y SIMILARES ORGANIZADOS POR LA INSTITUCION",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.10.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SEMINARIOS ,TALLERES Y SIMILARES ORGANIZADOS POR LA  INSTITUCION"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS PRESTADOS POR PERSONAS NATURALES O JURIDICAS PARA ATENCIONES OFICIALES Y CELEBRACIONES INSTITUCIONALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.10.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ATENCIONES OFICIALES Y CELEBRACIONES INSTITUCIONALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS PRESTADOS POR PERSONAS NATURALES O JURIDICAS PARA OTRAS ATENCIONES Y CELEBRACIONES NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.10.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTRAS ATENCIONES Y CELEBRACIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS PRESTADOS POR PERSONAS NATURALES Y JURIDICAS PARA EL EMBALAJE Y ALMACENAJE",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.11.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "EMBALAJE Y ALMACENAJE"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS PRESTADOS POR PERSONAS NATURALES Y JURIDICAS PARA EL TRANSPORTE,  TRASLADO Y FLETE DE CARGA, BIENES Y MATERIALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.11.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "TRANSPORTE Y TRASLADO DE CARGA, BIENES Y MATERIALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS PRESTADOS POR PERSONAS NATURALES Y JURIDICAS RELACIONADOS CON FLORERIA, JARDINERIA Y OTRAS ACTIVIDADES SIMILARES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.11.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS RELACIONADOS CON FLORERIA, JARDINERIA Y OTRAS ACTIVIDADES SIMILARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS PRESTADOS POR PERSONAS NATURALES Y JURIDICAS PARA LA CALIFICACION DE PENSIONES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.11.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS DE CALIFICACION DE PENSIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR CONCEPTO DE SERVICIOS DE ALIMENTACION PARA EL CONSUMO HUMANO, BRINDADOS POR PERSONAS NATURALES O JURIDICAS, PARA EL DESARROLLO DE ACTIVIDADES PROPIAS DE LA FUNCION PUBLICA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.11.5",
      "restringida_art" : "por el Artículo 9.7",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS DE ALIMENTACION DE CONSUMO HUMANO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS DE IMPRESION, ENCUADERNACION Y EMPASTADO DE DOCUMENTOS OFICIALES NECESARIOS PARA LA PRESTACION DEL SERVICIO PUBLICO QUE BRINDAN LAS ENTIDADES PUBLICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.11.6",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIO DE IMPRESIONES, ENCUADERNACION Y EMPASTADO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR OTROS SERVICIOS PRESTADOS POR PERSONAS NATURALES Y JURIDICAS NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.11.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS DIVERSOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION TEMPORAL DE SERVICIOS PROFESIONALES CALIFICADOS A TRAVES DEL FONDO DE APOYO GERENCIAL AL SECTOR PUBLICO  NO INCLUYE PERSONAL ALTAMENTE CALIFICADO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.12.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "LOCACION DE SERVICIOS - FONDO DE APOYO GERENCIAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION TEMPORAL DE PERSONAL ALTAMENTE CALIFICADO, A TRAVES DEL FONDO DE APOYO GERENCIAL AL SECTOR PUBLICO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.12.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "LOCACION DE SERVICIOS - PERSONAL ALTAMENTE CALIFICADO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE SUPERVISION Y FISCALIZACION EN CUMPLIMIENTO DEL ROL DE LA ENTIDAD PUBLICA POR PERSONAS JURIDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.13.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SUPERVISIONES Y FISCALIZACIONES TECNICAS RELACIONADAS AL ROL DE LA ENTIDAD"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DEL DESARROLLO DE ANALISIS EN EL MARCO DE PROYECCIONES ECONOMICAS O FINANCIERAS, ESTRUCTURACION FINANCIERA Y SIMILARES POR PERSONAS JURIDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.13.10",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS DE ANALISIS, PROYECCIONES ECONOMICAS O FINANCIERAS, ESTRUCTURACION FINANCIERA Y SIMILARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE MONITOREO SISTEMATICO DE INTERVENCIONES EN EJECUCION POR PERSONAS JURIDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.13.11",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIO DE MONITOREO SISTEMATICO DE INTERVENCIONES EN EJECUCION"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS PARA LA FORMULACION, ESTRUCTURACION, TRANSACCION Y/O EJECUCION CONTRACTUAL PRESTADO POR PERSONAS JURIDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.13.12",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS RELACIONADOS CON LA FORMULACION Y LA PROMOCION DE LA INVERSION PRIVADA POR PERSONAS JURIDICAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS RELACIONADOS A LA ESTRATEGIA DE FORTALECIMIENTO DE CAPACIDADES Y FORMACION DE ACTORES VINCULADOS A FINALIDADES PUBLICAS POR PERSONAS JURIDICAS  NO INCLUYE EN ESTRICTO LA CAPACITACION",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.13.13",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS RELACIONADOS CON EL FORTALECIMIENTO DE CAPACIDADES DE ACTORES PUBLICOS POR PERSONAS JURIDICAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE LEVANTAMIENTO DE INFORMACION, MEDICIONES Y SIMILARES DE ACUERDO A INSTRUCCIONES DE LA ENTIDAD PUBLICA O A METODOLOGIAS EXISTENTES POR PERSONAS JURIDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.13.14",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIO DE LEVANTAMIENTO DE INFORMACION, MEDICIONES Y SIMILARES POR PERSONAS JURIDICAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE SUPERVISION A DIVERSAS INTERVENCIONES POR PERSONAS JURIDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.13.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTRAS SUPERVISIONES A INTERVENCIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE DISEÃO, ELABORACION O ACTUALIZACION DE NORMAS INTERNAS CORRESPONDIENTES A PROCEDIMIENTOS Y ATRIBUCIONES DE LAS ENTIDADES PUBLICAS POR PERSONAS JURIDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.13.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS DE DISEÃO, ELABORACION O ACTUALIZACION NORMAS INTERNAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE DISEÃO, ELABORACION O ACTUALIZACION DE NORMAS TECNICAS POR PERSONAS JURIDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.13.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS DE DISEÃO, ELABORACION O ACTUALIZACION NORMAS TECNICAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE ASESORIA LEGAL PARA SERVIDORES Y EX-SERVIDORES CIVILES POR PERSONAS JURIDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.13.5",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ASESORIA LEGAL PARA SERVIDORES Y EX-SERVIDORES CIVILES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE ASESORIA LEGAL PARA ENTIDADES DEL ESTADO POR PERSONAS JURIDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.13.6",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ASESORIA LEGAL PARA ENTIDADES PUBLICAS EN EL MARCO DE CONTROVERSIAS CONTRACTUALES NACIONALES O INTERNACIONALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE DEFENSA LEGAL PARA SERVIDORES Y EX-SERVIDORES CIVILES POR PERSONAS JURIDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.13.7",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DEFENSA LEGAL PARA SERVIDORES Y EX-SERVIDORES CIVILES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE DEFENSA LEGAL PARA ENTIDADES DEL ESTADO POR PERSONAS JURIDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.13.8",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DEFENSA LEGAL PARA ENTIDADES PUBLICAS EN EL MARCO DE CONTROVERSIAS CONTRACTUALES NACIONALES O INTERNACIONALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR SERVICIOS DE AUDITORIA EN EL MARCO DEL SISTEMA NACIONAL DE CONTROL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.13.9",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS DE AUDITORIAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS TECNICOS REALIZADOS POR PERSONAS JURIDICAS QUE NO HAN SIDO INCLUIDOS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.13.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS SERVICIOS TECNICOS SIMILARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE SUPERVISION Y FISCALIZACION EN CUMPLIMIENTO DEL ROL DE LA ENTIDAD PUBLICA POR PERSONAS NATURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.14.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SUPERVISIONES Y FISCALIZACIONES TECNICAS RELACIONADAS AL ROL DE LA ENTIDAD"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE MONITOREO SISTEMATICO DE INTERVENCIONES EN EJECUCION POR PERSONAS NATURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.14.10",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIO DE MONITOREO SISTEMATICO DE INTERVENCIONES EN EJECUCION"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS PARA LA FORMULACION, ESTRUCTURACION, TRANSACCION Y/O EJECUCION CONTRACTUAL PRESTADO POR PERSONAS NATURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.14.11",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS RELACIONADOS CON LA FORMULACION Y LA PROMOCION DE LA INVERSION PRIVADA POR PERSONAS NATURALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS RELACIONADOS A LA ESTRATEGIA DE FORTALECIMIENTO DE CAPACIDADES Y FORMACION DE ACTORES VINCULADOS A FINALIDADES PUBLICAS POR PERSONAS NATURALES  NO INCLUYE EN ESTRICTO LA CAPACITACION",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.14.12",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS RELACIONADOS CON EL FORTALECIMIENTO DE CAPACIDADES DE ACTORES PUBLICOS POR PERSONAS NATURALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE LEVANTAMIENTO DE INFORMACION, MEDICIONES Y SIMILARES DE ACUERDO A INSTRUCCIONES DE LA ENTIDAD PUBLICA O A METODOLOGIAS EXISTENTES POR PERSONAS NATURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.14.13",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIO DE LEVANTAMIENTO DE INFORMACION, MEDICIONES Y SIMILARES POR PERSONAS NATURALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE SUPERVISION A DIVERSAS INTERVENCIONES POR PERSONAS NATURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.14.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTRAS SUPERVISIONES A INTERVENCIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE DISEÃO, ELABORACION O ACTUALIZACION DE NORMAS INTERNAS CORRESPONDIENTES A PROCEDIMIENTOS Y ATRIBUCIONES DE LAS ENTIDADES PUBLICAS POR PERSONAS NATURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.14.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS DE DISEÃO, ELABORACION O ACTUALIZACION DE NORMAS INTERNAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE DISEÃO, ELABORACION O ACTUALIZACION DE NORMAS TECNICAS POR PERSONAS NATURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.14.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS DE DISEÃO, ELABORACION O ACTUALIZACION DE NORMAS TECNICAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE ASESORIA LEGAL PARA SERVIDORES Y EX-SERVIDORES CIVILES POR PERSONAS NATURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.14.5",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ASESORIA LEGAL PARA SERVIDORES Y EX-SERVIDORES CIVILES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE ASESORIA LEGAL PARA ENTIDADES DEL ESTADO POR PERSONAS NATURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.14.6",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ASESORIA LEGAL PARA ENTIDADES PUBLICAS EN EL MARCO DE CONTROVERSIAS CONTRACTUALES NACIONALES O INTERNACIONALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE DEFENSA LEGAL PARA SERVIDORES Y EX-SERVIDORES CIVILES POR PERSONAS NATURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.14.7",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DEFENSA LEGAL PARA SERVIDORES Y EX-SERVIDORES CIVILES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE DEFENSA LEGAL PARA ENTIDADES DEL ESTADO POR PERSONAS NATURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.14.8",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DEFENSA LEGAL PARA ENTIDADES PUBLICAS EN EL MARCO DE CONTROVERSIAS CONTRACTUALES NACIONALES O INTERNACIONALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DEL DESARROLLO DE ANALISIS EN EL MARCO DE PROYECCIONES ECONOMICAS O FINANCIERAS, ESTRUCTURACION FINANCIERA Y SIMILARES POR PERSONAS NATURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.14.9",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS DE ANALISIS, PROYECCIONES ECONOMICAS O FINANCIERAS, ESTRUCTURACION FINANCIERA Y SIMILARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS TECNICOS REALIZADOS POR PERSONAS NATURALES QUE NO HAN SIDO INCLUIDOS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.14.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS SERVICIOS TECNICOS SIMILARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE CONSULTORIAS, ENTENDIDAS COMO INSUMOS PARA LA TOMA DE DECISIONES DE ENTIDADES, CUYA APLICACION NECESARIAMENTE IMPULSE O CONSTITUYA VALOR PUBLICO EN EL MARCO DE LAS COMPETENCIAS DE CADA ENTIDAD, POR PERSONAS NATURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "CONSULTORIAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA REALIZACION DE INVESTIGACIONES Y PROFUNDIZACION DE TEMAS RELACIONADOS A DETERMINADA FUNCION DEL ESTADO, NO VINCULADAS A FORMACION DE CAPITAL, QUE IMPLIQUEN REVISION DE DATA, LITERATURA, COMPORTAMIENTO, MEJORES PRACTICAS, ENTRE OTROS, PRESTADOS POR PERSONAS NATURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.2.10",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "INVESTIGACIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE METODOLOGIAS, REFORMAS, RE-PLANTEOS Y SIMILARES VINCULADOS A LAS COMPETENCIAS DE LA ENTIDAD PUBLICA POR PERSONAS NATURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.2.11",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DISEÃO DE METODOLOGIAS, REFORMAS Y SIMILARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS COMPLEMENTARIOS PRESTADOS POR LOS PROFESIONALES DE LA SALUD, PARA GARANTIZAR Y ASEGURAR LA CONTINUIDAD DE LOS SERVICIOS MEDICOS ASISTENCIALES QUE SE BRINDAN EN LAS ENTIDADES PRESTADORAS DE SERVICIOS DE SALUD",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.2.7",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS COMPLEMENTARIOS DE SALUD"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA REALIZACION DE ESTUDIOS Y/O EVALUACIONES NO VINCULADOS A FORMACION DE CAPITAL, QUE IMPLICAN LA ESTRATEGIA Y/O DESARROLLO DE METODOLOGIAS, ASI COMO EL LEVANTAMIENTO DE INFORMACION PRIMARIA Y/O SECUNDARIA EN EL PAIS O EN EL EXTRANJERO PARA TOMAR DECISIONES VINCULADAS A INTERVENCIONES DE ENTIDADES PUBLICAS, PRESTADOS POR PERSONAS NATURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.2.9",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ESTUDIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR OTROS SERVICIOS SIMILARES NO ESPECIFICADOS EN LAS PARTIDAS ANTERIORES PRESTADOS POR PERSONAS NATURALES  NO INCLUYE CONTRATACION A TRAVES DEL FONDO DE APOYO GERENCIAL, NI POR SERVICIOS DE TERCEROS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.2.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS SERVICIOS SIMILARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR CONTRATOS DE PERSONAS JURIDICAS PRESTADORAS DE SERVICIOS DE CAPACITACION Y PERFECCIONAMIENTO AL PERSONAL ORIENTADO A MEJORAR LA GESTION Y EL SERVICIO DE LA ENTIDAD",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.3.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "REALIZADO POR PERSONAS JURIDICAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR CONTRATOS DE PERSONAS NATURALES PRESTADORAS DE SERVICIOS DE CAPACITACION Y PERFECCIONAMIENTO AL PERSONAL ORIENTADO A MEJORAR LA GESTION Y EL SERVICIO DE LA ENTIDAD",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.3.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "REALIZADO POR PERSONAS NATURALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS DE PERSONAS NATURALES Y JURIDICAS PARA LA ELABORACION DE PROGRAMAS INFORMATICOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.4.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ELABORACION DE PROGRAMAS INFORMATICOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS DE PERSONAS NATURALES Y JURIDICAS PARA EL PROCESAMIENTOS DE DATOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.4.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PROCESAMIENTOS DE DATOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS DE PERSONAS NATURALES Y JURIDICAS PARA SOPORTE TECNICO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.4.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SOPORTE TECNICO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR OTROS SERVICIOS DE INFORMATICA DE PERSONAS NATURALES Y JURIDICAS, NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.4.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS SERVICIOS DE INFORMATICA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL ESTIPENDIO POR EL SERVICIO CIVIL DE GRADUANDOS SECIGRA, A LOS ESTUDIANTES DE DERECHO QUE TIENEN LA OPORTUNIDAD DE CONOCER LA GESTION PUBLICA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.5.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ESTIPENDIO POR SECIGRA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL OTORGAMIENTO DE PROPINAS A PRACTICANTES DE DIFERENTES CARRERAS DE ESTUDIO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.5.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PROPINAS PARA PRACTICANTES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL OTORGAMIENTO DE PROPINAS A ANIMADORAS Y ALFABETIZADORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.5.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ANIMADORAS Y ALFABETIZADORES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL OTORGAMIENTO DE PROPINAS A ALUMNOS DE ESCUELAS MILITARES Y POLICIALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.5.5",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ALUMNOS DE ESCUELAS MILITARES Y POLICIALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL ESTIPENDIO POR LA PARTICIPACION AL CURSO DE INTRODUCCION DE LOS CANDIDATOS A GERENTES PUBLICOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.5.6",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ESTIPENDIO A LOS CANDIDATOS A GERENTES PUBLICOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL OTORGAMIENTO DE COMPENSACION REMUNERATIVA Y AGUINALDOS A INTERNOS DE MEDICINA Y ODONTOLOGIA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.5.7",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "INTERNOS DE MEDICINA Y ODONTOLOGIA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR CONTRIBUCIONES A LOS SEGUROS DE SALUD QUE LA ENTIDAD ESTATAL DEBE PAGAR EN SU CONDICION DE EMPLEADOR",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.5.8",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "CONTRIBUCIONES A LOS SEGUROS DE SALUD"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL OTORGAMIENTO DE PROPINA O ESTIPENDIO A PERSONAS NATURALES QUE APOYEN AL CUMPLIMIENTO DE LAS METAS DEL SECTOR PUBLICO EN TEMAS SOCIALES TALES COMO DISMINUCION DE LA ANEMIA, DESNUTRICION CRONICA INFANTIL, ENTRE OTROS QUE POR SU NATURALEZA SEAN DE CONTENIDO SOCIAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.5.9",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ASIGNACION DE PROPINAS O ESTIPENDIOS PARA EL CUMPLIMIENTO DE METAS SOCIALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL SERVICIO QUE PRESTAN ORGANISMOS INTERNACIONALES EN MATERIA DE LICITACIONES Y CONCURSOS DE MERITOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.6.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIO Y GESTION DE EVALUACION INTERNACIONAL DE PROCESOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS RELACIONADOS CON EL MEDIO AMBIENTE",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.7.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS RELACIONADOS CON EL MEDIO AMBIENTE"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS DE REMEDIACION AMBIENTAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.7.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIO DE REMEDIACION AMBIENTAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA PRESTACION DE SERVICIOS DE EVALUACIONES, CERTIFICACIONES, LICENCIAMIENTO Y SIMILARES VINCULADOS AL MEDIO AMBIENTE",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.7.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS DE EVALUACIONES, CERTIFICACIONES, LICENCIAMIENTO Y SIMILARES VINCULADOS AL MEDIO AMBIENTE"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS RELACIONADOS CON EL TRATAMIENTO DEL AGUA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.8.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "SERVICIOS RELACIONADOS CON EL TRATAMIENTO DE AGUA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS PRESTADOS QUE CONCIERNEN A LA ORGANIZACION Y CONDUCCION DE EVENTOS DEPORTIVOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.por el Artículo 9.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ORGANIZACION Y CONDUCCION DE EVENTOS DEPORTIVOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS PRESTADOS QUE CONCIERNEN A LA ORGANIZACION Y CONDUCCION DE EVENTOS RECREACIONALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.9.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ORGANIZACION Y CONDUCCION DE EVENTOS RECREACIONALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS PRESTADOS QUE CONCIERNEN A LA ORGANIZACION Y CONDUCCION DE ESPECTACULOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.9.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ORGANIZACION Y CONDUCCION DE ESPECTACULOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS PRESTADOS QUE CONCIERNEN AL AUSPICIO Y PATROCINIO DE EVENTOS CULTURALES Y DE ARTE",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.9.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "AUSPICIO Y PATROCINIO DE EVENTOS CULTURALES Y DE ARTE"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS SERVICIOS PRESTADOS QUE CONCIERNEN A LA ORGANIZACION DE EVENTOS CULTURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.9.5",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ORGANIZACION DE EVENTOS CULTURALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR OTROS SERVICIOS PRESTADOS QUE CONCIERNEN A ORGANIZACION DE EVENTOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.7.9.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS RELACIONADOS A ORGANIZACION DE EVENTOS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONTRATO ADMINISTRATIVO DE SERVICIOS, CUYO VINCULO CONTRACTUAL SE ENCUENTRA REGULADO POR NORMA LEGAL EXPRESA",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.8.1.1",
      "restringida_art" : "por el Artículo 9.4",
      "anio" : "2020",
      "des_clasf" : "CONTRATO ADMINISTRATIVO DE SERVICIOS"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONTRIBUCIONES A ESSALUD QUE LA ENTIDAD ESTATAL DEBE ABONAR POR CONTRATO ADMINISTRATIVO DE SERVICIOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.8.1.2",
      "restringida_art" : "por el Artículo 9.4",
      "anio" : "2020",
      "des_clasf" : "CONTRIBUCIONES A ESSALUD DE C A S"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR AGUINALDO PARA CONTRATO ADMINISTRATIVO DE SERVICIOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.8.1.4",
      "restringida_art" : "por el Artículo 9.4",
      "anio" : "2020",
      "des_clasf" : "AGUINALDOS DE C A S"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR VACACIONES TRUNCAS PARA CONTRATO ADMINISTRATIVO DE SERVICIOS",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.8.1.5",
      "restringida_art" : "por el Artículo 9.4",
      "anio" : "2020",
      "des_clasf" : "VACACIONES TRUNCAS DE C A S"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ENTREGA DE CUPON O VALE POR CONCEPTO DE ALIMENTOS, DE ACUERDO A LA NORMATIVA VIGENTE",
      "habilitadora_" : "Si",
      "code_clasf" : "2.3.2.8.1.6",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "ENTREGA DE CUPON O VALE POR CONCEPTO DE ALIMENTACION"
    }, {
      "habilitada_" : "No",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR CONTRATO ADMINISTRATIVO DE SERVICIOS, SUJETOS A EVALUACION POR REGISTRO EN EL AIRHSP",
      "habilitadora_" : "No",
      "code_clasf" : "2.3.2.8.1.99",
      "restringida_art" : "por el Artículo 9.13",
      "anio" : "2020",
      "des_clasf" : "OTROS GASTOS C A S"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR DONACIONES Y TRANSFERENCIAS DESTINADOS A FINANCIAR GASTOS CORRIENTES DE PAISES DE AMERICA SIN FINES DE LUCRO; PARA CUBRIR COMPROMISOS ADQUIRIDOS O PARA CONTRIBUIR A SITUACIONES DE EMERGENCIA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.1.1.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PAISES DE AMERICA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR DONACIONES Y TRANSFERENCIAS DESTINADOS A FINANCIAR GASTOS CORRIENTES DE PAISES DE EUROPA SIN FINES DE LUCRO; PARA CUBRIR COMPROMISOS ADQUIRIDOS O PARA CONTRIBUIR A SITUACIONES DE EMERGENCIA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.1.1.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PAISES DE EUROPA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR DONACIONES Y TRANSFERENCIAS DESTINADOS A FINANCIAR GASTOS CORRIENTES DE PAISES DE AFRICA, ASIA Y OCEANIA, SIN FINES DE LUCRO; PARA CUBRIR COMPROMISOS ADQUIRIDOS O PARA CONTRIBUIR A SITUACIONES DE EMERGENCIA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.1.1.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PAISES DE AFRICA, ASIA Y OCEANIA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR DONACIONES Y TRANSFERENCIAS DESTINADOS A FINANCIAR GASTOS CORRIENTES DE AGENCIAS GUBERNAMENTALES DE COOPERACION INTERNACIONAL, SIN FINES DE LUCRO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.1.1.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "AGENCIAS GUBERNAMENTALES DE COOPERACION INTERNACIONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR DONACIONES Y TRANSFERENCIAS DESTINADOS A FINANCIAR GASTOS CORRIENTES DE FONDOS CONTRAVALOR O DE DESARROLLO BINACIONAL, SIN FINES DE LUCRO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.1.1.2.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "FONDOS CONTRAVALOR O DE DESARROLLO BINACIONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "DONACIONES Y TRANSFERENCIAS DESTINADOS A FINANCIAR GASTOS CORRIENTES DE INSTITUCIONES FINANCIERAS INTERNACIONALES SIN FINES DE LUCRO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.1.2.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A INSTITUCIONES FINANCIERAS INTERNACIONALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "DONACIONES Y TRANSFERENCIAS DESTINADOS A FINANCIAR GASTOS POR LA ADQUISICION DE MATERIALES, INSUMOS, INSTRUMENTAL Y ACCESORIOS MEDICOS QUIRURGICOS, ODONTOLOGICOS Y DE LABORATORIO A TRAVES DE ORGANISMOS INTERNACIONALES DE LA SALUD",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.1.2.1.98",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A OTROS ORGANISMOS INTERNACIONALES DE LA SALUD - SUMINISTROS MEDICOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "DONACIONES Y TRANSFERENCIAS DESTINADOS A FINANCIAR GASTOS CORRIENTES DE OTROS ORGANISMOS INTERNACIONALES SIN FINES DE LUCRO, ENTRE OTROS  INCLUYE CUOTAS INTERNACIONALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.1.2.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A OTROS ORGANISMOS INTERNACIONALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "DONACIONES Y TRANSFERENCIAS A OTRAS ENTIDADES DEL GOBIERNO NACIONAL, DESTINADOS A FINANCIAR GASTOS CORRIENTES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.1.3.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A OTRAS UNIDADES DEL GOBIERNO NACIONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "DONACIONES Y TRANSFERENCIAS A OTRAS ENTIDADES DEL GOBIERNO REGIONAL, DESTINADOS A FINANCIAR GASTOS CORRIENTES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.1.3.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A OTRAS UNIDADES DEL GOBIERNO REGIONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "DONACIONES Y TRANSFERENCIAS A OTRAS ENTIDADES DEL GOBIERNO LOCAL, DESTINADOS A FINANCIAR GASTOS CORRIENTES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.1.3.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A OTRAS UNIDADES DEL GOBIERNO LOCAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "DONACIONES Y TRANSFERENCIAS A LA BENEFICENCIA Y A OTRAS ENTIDADES PUBLICAS, DESTINADOS A FINANCIAR GASTOS CORRIENTES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.1.3.1.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A OTRAS ENTIDADES PUBLICAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "DONACIONES Y TRANSFERENCIAS A FONDOS PUBLICOS, DESTINADOS A FINANCIAR GASTOS CORRIENTES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.1.3.1.5",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A FONDOS PUBLICOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "DONACIONES Y TRANSFERENCIAS DESTINADOS A FINANCIAR GASTOS DE CAPITAL A PAISES DE AMERICA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.2.1.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PAISES DE AMERICA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "DONACIONES Y TRANSFERENCIAS DESTINADOS A FINANCIAR GASTOS DE CAPITAL A PAISES DE EUROPA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.2.1.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PAISES DE EUROPA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "DONACIONES Y TRANSFERENCIAS DESTINADOS A FINANCIAR GASTOS DE CAPITAL A PAISES DE AFRICA, ASIA Y OCEANIA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.2.1.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PAISES DE AFRICA, ASIA Y OCEANIA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR DONACIONES Y TRANSFERENCIAS DESTINADOS A FINANCIAR GASTOS DE CAPITAL DE AGENCIAS GUBERNAMENTALES DE COOPERACION INTERNACIONAL, SIN FINES DE LUCRO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.2.1.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "AGENCIAS GUBERNAMENTALES DE COOPERACION INTERNACIONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR DONACIONES Y TRANSFERENCIAS DESTINADOS A FINANCIAR GASTOS DE CAPITAL DE FONDOS CONTRAVALOR O DE DESARROLLO BINACIONAL, SIN FINES DE LUCRO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.2.1.2.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "FONDOS CONTRAVALOR O DE DESARROLLO BINACIONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "DONACIONES Y TRANSFERENCIAS DESTINADOS A FINANCIAR GASTOS DE CAPITAL DE INSTITUCIONES FINANCIERAS INTERNACIONALES SIN FINES DE LUCRO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.2.2.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A INSTITUCIONES FINANCIERAS INTERNACIONALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "DONACIONES Y TRANSFERENCIAS DESTINADOS A FINANCIAR GASTOS DE CAPITAL DE OTROS ORGANISMOS INTERNACIONALES SIN FINES DE LUCRO, ENTRE OTROS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.2.2.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A OTROS ORGANISMOS INTERNACIONALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "DONACIONES Y TRANSFERENCIAS A OTRAS ENTIDADES DEL GOBIERNO NACIONAL, DESTINADOS A FINANCIAR GASTOS DE CAPITAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.2.3.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A OTRAS UNIDADES DEL GOBIERNO NACIONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "DONACIONES Y TRANSFERENCIAS A OTRAS ENTIDADES DEL GOBIERNO REGIONAL, DESTINADOS A FINANCIAR GASTOS DE CAPITAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.2.3.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A OTRAS UNIDADES DEL GOBIERNO REGIONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "DONACIONES Y TRANSFERENCIAS A OTRAS ENTIDADES DEL GOBIERNO LOCAL, DESTINADOS A FINANCIAR GASTOS DE CAPITAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.2.3.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A OTRAS UNIDADES DEL GOBIERNO LOCAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "DONACIONES Y TRANSFERENCIAS A LA BENEFICENCIA Y A OTRAS ENTIDADES PUBLICAS, DESTINADOS A FINANCIAR GASTOS DE CAPITAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.2.3.1.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A OTRAS ENTIDADES PUBLICAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "TRANSFERENCIAS A FONDOS PUBLICOS, DESTINADOS A FINANCIAR GASTOS DE CAPITAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.4.2.3.1.5",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A FONDOS PUBLICOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "SUBSIDIOS DESTINADOS A FINANCIAR GASTOS EN FORMA PARCIAL O TOTAL A EMPRESAS PUBLICAS NO FINANCIERAS DEL GOBIERNO NACIONAL QUE PERSIGUEN FINES PRODUCTIVOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.1.1.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "EMPRESAS PUBLICAS DEL GOBIERNO NACIONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "SUBSIDIOS DESTINADOS A FINANCIAR GASTOS EN FORMA PARCIAL O TOTAL A EMPRESAS PUBLICAS NO FINANCIERAS DE GOBIERNOS REGIONALES QUE PERSIGUEN FINES PRODUCTIVOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.1.1.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "EMPRESAS PUBLICAS DE LOS GOBIERNOS REGIONALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "SUBSIDIOS DESTINADOS A FINANCIAR GASTOS EN FORMA PARCIAL O TOTAL A EMPRESAS PUBLICAS NO FINANCIERAS DE GOBIERNOS LOCALES QUE PERSIGUEN FINES PRODUCTIVOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.1.1.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "EMPRESAS PUBLICAS DE LOS GOBIERNOS LOCALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR SUBSIDIOS DESTINADOS A FINANCIAR GASTOS EN FORMA PARCIAL O TOTAL A EMPRESAS PUBLICAS FINANCIERAS DEL GOBIERNO NACIONAL SIN FINES DE LUCRO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.1.1.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "EMPRESAS PUBLICAS DEL GOBIERNO NACIONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR SUBSIDIOS DESTINADOS A FINANCIAR GASTOS EN FORMA PARCIAL O TOTAL A EMPRESAS PUBLICAS FINANCIERAS DE LOS GOBIERNOS REGIONALES SIN FINES DE LUCRO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.1.1.2.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "EMPRESAS PUBLICAS DE LOS GOBIERNOS REGIONALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR SUBSIDIOS DESTINADOS A FINANCIAR GASTOS EN FORMA PARCIAL O TOTAL A EMPRESAS PUBLICAS FINANCIERAS DE LOS GOBIERNOS LOCALES SIN FINES DE LUCRO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.1.1.2.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "EMPRESAS PUBLICAS DE LOS GOBIERNOS LOCALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "SUBSIDIOS DESTINADOS A FINANCIAR GASTOS EN FORMA PARCIAL O TOTAL A EMPRESAS PRIVADAS NO FINANCIERAS QUE PERSIGUEN FINES PRODUCTIVOS, INCLUYE LOS DOCUMENTOS CANCELATORIOS A EMPRESAS PRIVADAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.1.2.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A LAS EMPRESAS PRIVADAS NO FINANCIERAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "SUBSIDIOS DESTINADOS A FINANCIAR EN FORMA PARCIAL O TOTAL A EMPRESAS PRIVADAS NO FINANCIERAS QUE PRESTAN SERVICIOS DE TRANSPORTE AEREO DE PASAJEROS - IGV A TRAVES DE DOCUMENTOS CANCELATORIOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.1.2.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A LAS EMPRESAS PRIVADAS NO FINANCIERAS QUE PRESTAN SERVICIOS DE TRANSPORTE AEREO DE PASAJEROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "SUBSIDIOS DESTINADOS A FINANCIAR GASTOS EN FORMA PARCIAL O TOTAL A EMPRESAS PRIVADAS FINANCIERAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.1.2.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A LAS EMPRESAS PRIVADAS FINANCIERAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "TRANSFERENCIAS A LA IGLESIA DESTINADOS A FINANCIAR EN FORMA PARCIAL O TOTAL LOS GASTOS CORRIENTES SIN FINES DE LUCRO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.2.1.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A LA IGLESIA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "TRANSFERENCIAS A ORGANISMOS NO GUBERNAMENTALES (ONGS) DESTINADOS A FINANCIAR EN FORMA PARCIAL O TOTAL LOS GASTOS CORRIENTES SIN FINES DE LUCRO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.2.1.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A ORGANISMOS NO GUBERNAMENTALES (ONGS)"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "TRANSFERENCIAS A UNIVERSIDADES PRIVADAS DESTINADOS A FINANCIAR EN FORMA PARCIAL O TOTAL LOS GASTOS CORRIENTES SIN FINES DE LUCRO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.2.1.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A UNIVERSIDADES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "TRANSFERENCIAS A FONDOS Y FUNDACIONES DESTINADOS A FINANCIAR EN FORMA PARCIAL O TOTAL LOS GASTOS CORRIENTES SIN FINES DE LUCRO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.2.1.1.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A FONDOS Y FUNDACIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "TRANSFERENCIAS A OTRAS ORGANIZACIONES DESTINADOS A FINANCIAR EN FORMA PARCIAL O TOTAL LOS GASTOS CORRIENTES SIN FINES DE LUCRO   INCLUYE TRANSFERENCIAS A LAS AFPS, POR PAGOS INDEBIDOS AL SISTEMA NACIONAL DE PENSIONES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.2.1.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A OTRAS ORGANIZACIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "TRANSFERENCIAS A LA IGLESIA DESTINADOS A FINANCIAR EN FORMA PARCIAL O TOTAL LOS GASTOS DE CAPITAL SIN FINES DE LUCRO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.2.2.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A LA IGLESIA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "TRANSFERENCIAS A ORGANISMOS NO GUBERNAMENTALES (ONGS) DESTINADOS A FINANCIAR EN FORMA PARCIAL O TOTAL LOS GASTOS DE CAPITAL SIN FINES DE LUCRO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.2.2.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A ORGANISMOS NO GUBERNAMENTALES (ONGS)"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "TRANSFERENCIAS A UNIVERSIDADES PRIVADAS DESTINADOS A FINANCIAR EN FORMA PARCIAL O TOTAL LOS GASTOS DE CAPITAL SIN FINES DE LUCRO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.2.2.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A UNIVERSIDADES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "TRANSFERENCIAS A FONDOS Y FUNDACIONES DESTINADOS A FINANCIAR EN FORMA PARCIAL O TOTAL LOS GASTOS DE CAPITAL SIN FINES DE LUCRO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.2.2.1.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A FONDOS Y FUNDACIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "TRANSFERENCIAS A FONDOS SOCIALES DESTINADOS A FINANCIAR EN FORMA PARCIAL O TOTAL LOS GASTOS DE CAPITAL SIN FINES DE LUCRO, EN EL MARCO DEL DECRETO LEGISLATIVO NÂ° 996",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.2.2.1.5",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A FONDOS SOCIALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "TRANSFERENCIAS A OTRAS ORGANIZACIONES DESTINADAS A FINANCIAR EN FORMA PARCIAL O TOTAL LOS GASTOS DE CAPITAL SIN FINES DE LUCRO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.2.2.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A OTRAS ORGANIZACIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A LA AYUDA FINANCIERA ESTATAL OTORGADA A ESTUDIANTES TALENTOSOS O DE ESCASOS RECURSOS  SE INCLUYE BECAS Y PASANTIAS DE ESTUDIOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.3.1.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A ESTUDIANTES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A LA AYUDA FINANCIERA ESTATAL PARA EL DESARROLLO DE ESTUDIOS E INVESTIGACIONES DE NATURALEZA CIENTIFICA, PUBLICACIONES Y DIFUSION DE RESULTADOS DE TRABAJO DE INVESTIGACION Y AVANCES CIENTIFICOS Y TECNOLOGICOS INEDITOS, REALIZADAS POR PERSONAS NATURALES Y ESTUDIANTES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.3.1.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A INVESTIGADORES CIENTIFICOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A LA AYUDA FINANCIERA ESTATAL OTORGADA A OTRAS PERSONAS NATURALES  INCLUYE REGIMEN DE EJECUCION ESPECIAL, ASI COMO SUBVENCIONES A PERSONAS NATURALES PARA GASTOS ESPECIFICOS A FAVOR DE ENTIDADES PUBLICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.3.1.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A OTRAS PERSONAS NATURALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL PAGO DE IMPUESTOS A LAS ENTIDADES DEL GOBIERNO NACIONAL, A QUE SE ENCUENTREN OBLIGADAS LAS ENTIDADES DEL SECTOR PUBLICO, EN CALIDAD DE SUJETOS PASIVOS TRIBUTARIOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.4.1.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "IMPUESTOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL PAGO DE DERECHOS ADMINISTRATIVOS A LAS ENTIDADES DEL GOBIERNO NACIONAL, QUE SE ENCUENTREN OBLIGADAS LAS ENTIDADES DEL SECTOR PUBLICO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.4.1.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DERECHOS ADMINISTRATIVOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL PAGO DE MULTAS A LAS ENTIDADES DEL GOBIERNO NACIONAL POR INCUMPLIMIENTO O CONTRAVENCION A DETERMINADAS NORMAS LEGALES A QUE SE ENCUENTREN OBLIGADAS LAS ENTIDADES DEL SECTOR PUBLICO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.4.1.3.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "MULTAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR CONCEPTO DE PAGO DE DERECHOS ADMINISTRATIVOS A LAS ENTIDADES DEL GOBIERNO REGIONAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.4.2.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DERECHOS ADMINISTRATIVOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL PAGO DE MULTAS A LAS ENTIDADES DEL GOBIERNO REGIONAL POR INCUMPLIMIENTO O CONTRAVENCION A DETERMINADAS NORMAS LEGALES A QUE SE ENCUENTREN OBLIGADAS LAS ENTIDADES DEL SECTOR PUBLICO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.4.2.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "MULTAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL PAGO DE IMPUESTOS A LAS ENTIDADES DEL GOBIERNO LOCAL, A QUE SE ENCUENTREN OBLIGADAS LAS ENTIDADES DEL SECTOR PUBLICO, EN CALIDAD DE SUJETOS PASIVOS TRIBUTARIOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.4.3.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "IMPUESTOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL PAGO DE DERECHOS ADMINISTRATIVOS A LAS ENTIDADES DEL GOBIERNO LOCAL, QUE SE ENCUENTREN OBLIGADAS LAS ENTIDADES DEL SECTOR PUBLICO  INCLUYE LOS ARBITRIOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.4.3.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DERECHOS ADMINISTRATIVOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR EL PAGO DE MULTAS A LAS ENTIDADES DEL GOBIERNO LOCAL POR INCUMPLIMIENTO O CONTRAVENCION A DETERMINADAS NORMAS LEGALES A QUE SE ENCUENTREN OBLIGADAS LAS ENTIDADES DEL SECTOR PUBLICO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.4.3.3.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "MULTAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS PARA EL CUMPLIMIENTO DE RESOLUCIONES JUDICIALES CUYO ESTADO PROCESAL TENGA LA CONDICION DE COSA JUZGADA Y SE ENCUENTRE EN EJECUCION DE SENTENCIA A PERSONAL ADMINISTRATIVOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.5.1.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PERSONAL ADMINISTRATIVO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS PARA EL CUMPLIMIENTO DE RESOLUCIONES JUDICIALES CUYO ESTADO PROCESAL TENGA LA CONDICION DE COSA JUZGADA Y SE ENCUENTRE EN EJECUCION DE SENTENCIA A PERSONAL DE EDUCACION",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.5.1.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PERSONAL DE EDUCACION"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS PARA EL CUMPLIMIENTO DE RESOLUCIONES JUDICIALES CUYO ESTADO PROCESAL TENGA LA CONDICION DE COSA JUZGADA Y SE ENCUENTRE EN EJECUCION DE SENTENCIA A PERSONAL DE SALUD",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.5.1.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PERSONAL DE SALUD"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS PARA EL CUMPLIMIENTO DE RESOLUCIONES JUDICIALES CUYO ESTADO PROCESAL TENGA LA CONDICION DE COSA JUZGADA Y SE ENCUENTRE EN EJECUCION DE SENTENCIA A PERSONAL JUDICIAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.5.1.1.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PERSONAL JUDICIAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS PARA EL CUMPLIMIENTO DE RESOLUCIONES JUDICIALES CUYO ESTADO PROCESAL TENGA LA CONDICION DE COSA JUZGADA Y SE ENCUENTRE EN EJECUCION DE SENTENCIA A DOCENTES UNIVERSITARIOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.5.1.1.5",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DOCENTES UNIVERSITARIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS PARA EL CUMPLIMIENTO DE RESOLUCIONES JUDICIALES CUYO ESTADO PROCESAL TENGA LA CONDICION DE COSA JUZGADA Y SE ENCUENTRE EN EJECUCION DE SENTENCIA A PERSONAL DIPLOMATICO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.5.1.1.6",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PERSONAL DIPLOMATICO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS PARA EL CUMPLIMIENTO DE RESOLUCIONES JUDICIALES CUYO ESTADO PROCESAL TENGA LA CONDICION DE COSA JUZGADA Y SE ENCUENTRE EN EJECUCION DE SENTENCIA A PERSONAL POLICIAL Y MILITAR",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.5.1.1.7",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PERSONAL MILITAR Y POLICIAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS PARA EL CUMPLIMIENTO DE RESOLUCIONES JUDICIALES CUYO ESTADO PROCESAL TENGA LA CONDICION DE COSA JUZGADA Y SE ENCUENTRE EN EJECUCION DE SENTENCIA A PERSONAL OBRERO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.5.1.1.8",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PERSONAL OBRERO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS PARA EL CUMPLIMIENTO DE RESOLUCIONES JUDICIALES CUYO ESTADO PROCESAL TENGA LA CONDICION DE COSA JUZGADA Y SE ENCUENTRE EN EJECUCION DE SENTENCIA A PERSONAL DE OTROS REGIMENES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.5.1.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTRO REGIMEN"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS PARA EL CUMPLIMIENTO DE RESOLUCIONES JUDICIALES CUYO ESTADO PROCESAL TENGA LA CONDICION DE COSA JUZGADA Y SE ENCUENTRE EN EJECUCION DE SENTENCIA A PENSIONISTAS GUBERNAMENTALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.5.1.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PENSIONISTAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS PARA EL CUMPLIMIENTO DE RESOLUCIONES JUDICIALES CUYO ESTADO PROCESAL TENGA LA CONDICION DE COSA JUZGADA Y SE ENCUENTRE EN EJECUCION DE SENTENCIA A FAVOR DE PERSONAS JURIDICAS  INCLUYE LAUDOS ARBITRALES DEFINITIVOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.5.1.3.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A PERSONAS JURIDICAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS PARA EL CUMPLIMIENTO DE RESOLUCIONES JUDICIALES CUYO ESTADO PROCESAL TENGA LA CONDICION DE COSA JUZGADA Y SE ENCUENTRE EN EJECUCION DE SENTENCIA A FAVOR DE PERSONAS NATURALES  INCLUYE LAUDOS ARBITRALES DEFINITIVOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.5.1.3.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "A PERSONAS NATURALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LAS INDEMNIZACIONES POR CESES COLECTIVOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.5.2.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "INDEMNIZACIONES POR CESES COLECTIVOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LOS PAGOS EN COMPENSACION DE DAÃOS OCASIONADOS POR DESASTRES NATURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.5.2.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PAGOS EN COMPENSACION DE DAÃOS OCASIONADOS POR DESASTRES NATURALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LAS INDEMNIZACIONES POR ACCIDENTES DE TRABAJO O VICTIMAS DE TERRORISMO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.5.2.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "INDEMNIZACIONES POR ACCIDENTES DE TRABAJO O VICTIMAS DE TERRORISMO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR OTRAS INDEMNIZACIONES Y COMPENSACIONES AFINES NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.5.5.2.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTRAS INDEMNIZACIONES Y COMPENSACIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE VIVIENDAS, EDIFICIOS Y OTRAS SIMILARES DESTINADOS PARA QUE SUS INSTALACIONES SEAN UTILIZADAS COMO RESIDENCIA PERSONAL DE LAS ENTIDADES PUBLICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.1.1.1.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COMPRA DE VIVIENDAS RESIDENCIALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE EDIFICIOS ADMINISTRATIVOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.1.2.1.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COMPRA DE EDIFICIOS ADMINISTRATIVOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE INSTALACIONES EDUCATIVAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.1.2.1.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COMPRA DE INSTALACIONES EDUCATIVAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE INSTALACIONES MEDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.1.2.1.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COMPRA DE INSTALACIONES MEDICAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE INSTALACIONES SOCIALES Y CULTURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.1.2.1.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COMPRA DE INSTALACIONES SOCIALES Y CULTURALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE CENTROS DE RECLUSION",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.1.2.1.5",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COMPRA DE CENTROS DE RECLUSION"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE EDIFICIOS O UNIDADES NO RESIDENCIALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.1.2.1.6",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COMPRA DE EDIFICIOS O UNIDADES NO RESIDENCIALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONSTRUCCION DE VIVIENDAS RESIDENCIALES QUE LAS ENTIDADES PUBLICAS CONTRATEN CON PERSONAS JURIDICAS (TITULO ONEROSO) O CONVENIO (TITULO GRATUITO)  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.1.1.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR CONTRATA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DE PERSONAL POR LA CONSTRUCCION DE VIVIENDAS RESIDENCIALES QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.1.1.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, PARA LA CONSTRUCCION DE VIVIENDAS RESIDENCIALES QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.1.1.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, PARA LA CONSTRUCCION DE VIVIENDAS RESIDENCIALES QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.1.1.5",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS NO CONTEMPLADAS EN LAS PARTIDAS ANTERIORES, NO INCLUYE EQUIPAMIENTO, POR LA CONSTRUCCION DE VIVIENDAS RESIDENCIALES QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.1.1.6",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONSTRUCCION DE EDIFICIOS ADMINISTRATIVOS QUE LAS ENTIDADES PUBLICAS CONTRATEN CON PERSONAS JURIDICAS (TITULO ONEROSO) O CONVENIO (TITULO GRATUITO)  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.1.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR CONTRATA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DE PERSONAL POR LA CONSTRUCCION DE EDIFICIOS ADMINISTRATIVOS QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.1.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, PARA LA CONSTRUCCION DE EDIFICIOS ADMINISTRATIVOS QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.1.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, PARA LA CONSTRUCCION DE EDIFICIOS ADMINISTRATIVOS QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.1.5",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS NO CONTEMPLADAS EN LAS PARTIDAS ANTERIORES, NO INCLUYE EQUIPAMIENTO, POR LA CONSTRUCCION DE EDIFICIOS ADMINISTRATIVOS QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.1.6",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONSTRUCCION DE INSTALACIONES EDUCATIVAS QUE LAS ENTIDADES PUBLICAS CONTRATEN CON PERSONAS JURIDICAS (TITULO ONEROSO) O CONVENIO (TITULO GRATUITO)  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.2.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR CONTRATA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS EN PERSONAL POR LA CONSTRUCCION DE INSTALACIONES EDUCATIVAS QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.2.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, PARA LA CONSTRUCCION DE INSTALACIONES EDUCATIVAS QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.2.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, PARA LA CONSTRUCCION DE INSTALACIONES EDUCATIVAS QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.2.5",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES, NO INCLUYE EQUIPAMIENTO, PARA LA CONSTRUCCION DE INSTALACIONES EDUCATIVAS QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.2.6",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONSTRUCCION DE INSTALACIONES MEDICAS QUE LAS ENTIDADES PUBLICAS CONTRATEN CON PERSONAS JURIDICAS (TITULO ONEROSO) O CONVENIO (TITULO GRATUITO)  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.3.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR CONTRATA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS EN PERSONAL POR LA CONSTRUCCION DE INSTALACIONES MEDICAS QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.3.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, PARA LA CONSTRUCCION DE INSTALACIONES MEDICAS QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.3.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, PARA LA CONSTRUCCION DE INSTALACIONES MEDICAS QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.3.5",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES, NO INCLUYE EQUIPAMIENTO, PARA LA CONSTRUCCION DE INSTALACIONES MEDICAS QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACCION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.3.6",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONSTRUCCION DE INSTALACIONES SOCIALES Y CULTURALES QUE LAS ENTIDADES PUBLICAS CONTRATEN CON PERSONAS JURIDICAS (TITULO ONEROSO) O CONVENIO (TITULO GRATUITO)  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.4.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR CONTRATA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS EN PERSONAL POR LA CONSTRUCCION DE INSTALACIONES SOCIALES Y CULTURALES  QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.4.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, PARA LA CONSTRUCCION DE INSTALACIONES SOCIALES Y CULTURALES  QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.4.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, PARA LA CONSTRUCCION DE INSTALACIONES SOCIALES Y CULTURALES  QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.4.5",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES, NO INCLUYE EQUIPAMIENTO, PARA LA CONSTRUCCION DE INSTALACIONES SOCIALES Y CULTURALES  QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.4.6",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONSTRUCCION DE CENTROS DE RECLUSION QUE LAS ENTIDADES PUBLICAS CONTRATEN CON PERSONAS JURIDICAS (TITULO ONEROSO) O CONVENIO (TITULO GRATUITO)  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.5.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR CONTRATA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS EN PERSONAL POR LA CONSTRUCCION DE CENTROS DE RECLUSION QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.5.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, PARA LA CONSTRUCCION DE CENTROS DE RECLUSION QUE LAS ENTIDADES PUBLICAS CONTRATEN CON PERSONAS JURIDICAS  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.5.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, PARA LA CONSTRUCCION DE CENTROS DE RECLUSION QUE LAS ENTIDADES PUBLICAS CONTRATEN CON PERSONAS JURIDICAS  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.5.5",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES, NO INCLUYE EQUIPAMIENTO, PARA LA CONSTRUCCION DE CENTROS DE RECLUSION QUE LAS ENTIDADES PUBLICAS CONTRATEN CON PERSONAS JURIDICAS  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.5.6",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONSTRUCCION DE OTROS EDIFICIOS O UNIDADES NO RESIDENCIALES QUE LAS ENTIDADES PUBLICAS CONTRATEN CON PERSONAS JURIDICAS (TITULO ONEROSO) O CONVENIO (TITULO GRATUITO)  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.6.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR CONTRATA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS EN PERSONAL POR LA CONSTRUCCION DE OTROS EDIFICIOS O UNIDADES NO RESIDENCIALES QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.6.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, PARA LA CONSTRUCCION DE OTROS EDIFICIOS O UNIDADES NO RESIDENCIALES QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.6.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, PARA LA CONSTRUCCION DE OTROS EDIFICIOS O UNIDADES NO RESIDENCIALES QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.6.5",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES, NO INCLUYE EQUIPAMIENTO, PARA LA CONSTRUCCION DE OTROS EDIFICIOS O UNIDADES NO RESIDENCIALES QUE LAS ENTIDADES PUBLICAS EJECUTAN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.2.6.6",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTOS DE CONSTRUCCION POR ADMINISTRACION DIRECTA - OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONSTRUCCION DE PUERTOS Y AEROPUERTOS QUE LAS ENTIDADES PUBLICAS CONTRATEN CON PERSONAS JURIDICAS  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.1.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR CONTRATA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS EN PERSONAL POR LA CONSTRUCCION DE PUERTOS Y AEROPUERTOS QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.1.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, PARA LA CONSTRUCCION DE PUERTOS Y AEROPUERTOS QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.1.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, PARA LA CONSTRUCCION DE PUERTOS Y AEROPUERTOS QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.1.5",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES, NO INCLUYE EQUIPAMIENTO, PARA LA CONSTRUCCION DE PUERTOS Y AEROPUERTOS QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.1.6",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONSTRUCCION DE INFRAESTRUCTURA VIAL QUE LAS ENTIDADES PUBLICAS CONTRATEN CON PERSONAS JURIDICAS  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.2.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR CONTRATA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DE PERSONAL, PARA LA CONSTRUCCION DE INFRAESTRUCTURA VIAL QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.2.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, PARA LA CONSTRUCCION DE INFRAESTRUCTURA VIAL QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.2.5",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, PARA LA CONSTRUCCION DE INFRAESTRUCTURA VIAL QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.2.6",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES, NO INCLUYE EQUIPAMIENTO, PARA LA CONSTRUCCION DE INFRAESTRUCTURA VIAL QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.2.7",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONSTRUCCION DE INFRAESTRUCTURA ELECTRICA QUE LAS ENTIDADES PUBLICAS CONTRATEN CON PERSONAS JURIDICAS  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.3.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR CONTRATA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE PERSONAL, PARA LA CONSTRUCCION DE INFRAESTRUCTURA ELECTRICA QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.3.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, PARA LA CONSTRUCCION DE INFRAESTRUCTURA ELECTRICA QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.3.5",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, PARA LA CONSTRUCCION DE INFRAESTRUCTURA ELECTRICA QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.3.6",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES, NO INCLUYE EQUIPAMIENTO, PARA LA CONSTRUCCION DE INFRAESTRUCTURA ELECTRICA QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.3.7",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONSTRUCCION DE INFRAESTRUCTURA AGRICOLA QUE LAS ENTIDADES PUBLICAS CONTRATEN CON PERSONAS JURIDICAS  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.4.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR CONTRATA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS EN PERSONAL, PARA LA CONSTRUCCION DE INFRAESTRUCTURA AGRICOLA QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.4.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, PARA LA CONSTRUCCION DE INFRAESTRUCTURA AGRICOLA QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.4.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, PARA LA CONSTRUCCION DE INFRAESTRUCTURA AGRICOLA QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.4.5",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES, NO INCLUYE EQUIPAMIENTO, POR LA CONSTRUCCION DE INFRAESTRUCTURA AGRICOLA QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.4.6",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONSTRUCCION DEL SISTEMA DE AGUA Y SANEAMIENTO QUE LAS ENTIDADES PUBLICAS CONTRATEN CON PERSONAS JURIDICAS  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.5.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR CONTRATA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS EN PERSONAL POR LA CONSTRUCCION DEL SISTEMA DE AGUA Y SANEAMIENTO QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.5.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, PARA LA CONSTRUCCION DEL SISTEMA DE AGUA Y SANEAMIENTO QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.5.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, PARA LA CONSTRUCCION DEL SISTEMA DE AGUA Y SANEAMIENTO QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.5.5",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES, NO INCLUYE EQUIPAMIENTO, POR LA CONSTRUCCION DEL SISTEMA DE AGUA Y SANEAMIENTO QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.5.6",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONSTRUCCION DE PLAZUELAS, PARQUES Y JARDINES QUE LAS ENTIDADES PUBLICAS CONTRATEN CON PERSONAS JURIDICAS  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.6.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR CONTRATA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS EN PERSONAL, PARA LA CONSTRUCCION DE PLAZUELAS, PARQUES Y JARDINES QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.6.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, PARA LA CONSTRUCCION DE PLAZUELAS, PARQUES Y JARDINES QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.6.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, PARA LA CONSTRUCCION DE PLAZUELAS, PARQUES Y JARDINES QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.6.5",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES, NO INCLUYE EQUIPAMIENTO, POR LA CONSTRUCCION DE PLAZUELAS, PARQUES Y JARDINES QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.6.6",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA REHABILITACION, MEJORAMIENTO Y RECONSTRUCCION DE MONUMENTOS HISTORICOS QUE LAS ENTIDADES PUBLICAS CONTRATEN CON PERSONAS JURIDICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.7.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR CONTRATA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS EN PERSONAL POR EL MEJORAMIENTO Y RECONSTRUCCION DE MONUMENTOS HISTORICOS QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.7.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, PARA EL MEJORAMIENTO Y RECONSTRUCCION DE MONUMENTOS HISTORICOS QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.7.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, PARA EL MEJORAMIENTO Y RECONSTRUCCION DE MONUMENTOS HISTORICOS QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.7.5",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES, NO INCLUYE EQUIPAMIENTO, POR EL MEJORAMIENTO Y RECONSTRUCCION DE MONUMENTOS HISTORICOS QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.7.6",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONSTRUCCION DE OTRAS ESTRUCTURAS NO CONSIDERADAS EN LAS PARTIDAS ANTERIORES QUE LAS ENTIDADES PUBLICAS CONTRATEN CON PERSONAS JURIDICAS  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.99.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR CONTRATA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS EN PERSONAL, PARA LA CONSTRUCCION DE OTRAS ESTRUCTURAS NO CONSIDERADAS EN LAS PARTIDAS ANTERIORES QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.99.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, PARA LA CONSTRUCCION DE OTRAS ESTRUCTURAS NO CONSIDERADAS EN LAS PARTIDAS ANTERIORES QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.99.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, PARA LA CONSTRUCCION DE OTRAS ESTRUCTURAS NO CONSIDERADAS EN LAS PARTIDAS ANTERIORES QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.99.5",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "OTROS GASTOS, NO INCLUYE EQUIPAMIENTO, POR LA CONSTRUCCION DE OTRAS ESTRUCTURAS NO CONSIDERADAS EN LAS PARTIDAS ANTERIORES QUE LAS ENTIDADES PUBLICAS EJERCEN BAJO LA MODALIDAD DE OBRAS PUBLICAS POR ADMINISTRACION DIRECTA  ESTAS OBRAS INCLUYEN LA RECONSTRUCCION, REHABILITACION, AMPLIACION Y MEJORAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.2.3.99.6",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "COSTO DE CONSTRUCCION POR ADMINISTRACION DIRECTA - OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_rojo.png",
      "restringida_" : "Si",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE VEHICULOS PARA TRANSPORTE TERRESTRE",
      "habilitadora_" : "No",
      "code_clasf" : "2.6.3.1.1.1",
      "restringida_art" : "por el Artículo 9.10",
      "anio" : "2020",
      "des_clasf" : "PARA TRANSPORTE TERRESTRE"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE VEHICULOS PARA TRANSPORTE AEREO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.1.1.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "PARA TRANSPORTE AEREO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE VEHICULOS PARA TRANSPORTE ACUATICO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.1.1.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "PARA TRANSPORTE ACUATICO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MAQUINARIA Y EQUIPOS DE OFICINA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.1.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "MAQUINAS Y EQUIPOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MOBILIARIO DE OFICINA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.1.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "MOBILIARIO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MAQUINARIA Y EQUIPOS PARA INSTALACIONES EDUCATIVAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.2.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "MAQUINAS Y EQUIPOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MOBILIARIO PARA INSTALACIONES EDUCATIVAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.2.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "MOBILIARIO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE EQUIPOS COMPUTACIONALES Y PERIFERICOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.3.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "EQUIPOS COMPUTACIONALES Y PERIFERICOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE EQUIPOS DE COMUNICACIONES PARA REDES INFORMATICAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.3.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "EQUIPOS DE COMUNICACIONES PARA REDES INFORMATICAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE EQUIPOS DE TELECOMUNICACIONES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.3.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "EQUIPOS DE TELECOMUNICACIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MOBILIARIO MEDICO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.4.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "MOBILIARIO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE EQUIPOS Y APARATOS MEDICOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.4.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "EQUIPOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MOBILIARIO DE USO AGRICOLA Y PESQUERO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.5.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "MOBILIARIO DE USO AGRICOLA Y PESQUERO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE EQUIPO DE USO AGRICOLA Y PESQUERO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.5.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "EQUIPO DE USO AGRICOLA Y PESQUERO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE EQUIPO DE CULTURA Y ARTE",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.6.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "EQUIPO DE CULTURA Y ARTE"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MOBILIARIO DE CULTURA Y ARTE",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.6.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "MOBILIARIO DE CULTURA Y ARTE"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE EQUIPO DE DEPORTES Y RECREACION",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.7.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "EQUIPO DE DEPORTES Y RECREACION"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MOBILIARIO DE DEPORTES Y RECREACION",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.7.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "MOBILIARIO DE DEPORTES Y RECREACION"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MOBILIARIO, EQUIPOS Y APARATOS PARA LA DEFENSA Y LA SEGURIDAD",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.8.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "MOBILIARIO, EQUIPOS Y APARATOS PARA LA DEFENSA Y LA SEGURIDAD"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE ARMAMENTO EN GENERAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.8.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "ARMAMENTO EN GENERAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MAQUINARIA Y EQUIPOS DIVERSOS PARA AIRE ACONDICIONADO Y REFRIGERACION",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.por el Artículo 9.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "AIRE ACONDICIONADO Y REFRIGERACION"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MAQUINARIA Y EQUIPOS DIVERSOS PARA ASEO, LIMPIEZA Y COCINA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.9.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "ASEO,  LIMPIEZA Y COCINA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MAQUINARIA Y EQUIPOS DIVERSOS PARA SEGURIDAD INDUSTRIAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.9.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "SEGURIDAD INDUSTRIAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MAQUINARIA Y EQUIPOS DIVERSOS PARA ELECTRICIDAD Y ELECTRONICA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.9.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "ELECTRICIDAD Y ELECTRONICA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE EQUIPOS E INSTRUMENTOS DE MEDICION",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.9.5",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "EQUIPOS E INSTRUMENTOS DE MEDICION"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE EQUIPOS PARA VEHICULOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.9.6",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "EQUIPOS PARA VEHICULOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE MAQUINARIAS, EQUIPOS Y MOBILIARIOS DE OTRAS INSTALACIONES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.3.2.9.99",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "MAQUINARIAS, EQUIPOS Y MOBILIARIOS DE OTRAS INSTALACIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE PIEDRAS Y METALES PRECIOSOS, TALES COMO: LOS DIAMANTES, EL ORO NO MONETARIO, EL PLATINO, Y LA PLATA QUE NO SE PRETENDE UTILIZAR COMO INSUMO INTERMEDIO EN PROCESOS DE PRODUCCION",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.4.1.1.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "ADQUISICION DE PIEDRAS Y METALES PRECIOSOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE PINTURAS, ESCULTURAS Y OTROS OBJETOS RECONOCIDOS COMO OBRAS DE ARTE",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.4.1.1.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "ADQUISICION DE PINTURAS Y ESCULTURAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE JOYAS DE CONSIDERABLE VALOR, DISEÃADAS CON PIEDRAS Y METALES PRECIOSOS, COLECCIONES Y DIVERSOS OBJETOS DE VALOR, COMO ANTIGÃEDAD DES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.4.1.1.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "ADQUISICION DE JOYAS Y ANTIGUEDADES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE TERRENOS URBANOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.5.1.1.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "TERRENOS URBANOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE TERRENOS RURALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.5.1.1.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "TERRENOS RURALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE TERRENOS ERIAZOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.5.1.1.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "TERRENOS ERIAZOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE ANIMALES DE CRIA (INCLUIDOS LOS PECES Y LAS AVES DE CORRAL)",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.6.1.1.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "ANIMALES DE CRIA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE ANIMALES REPRODUCTORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.6.1.1.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "ANIMALES REPRODUCTORES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE ANIMALES DE TIRO, TALES COMO: BUEYES, BUFALOS, CABALLOS, MULAS Y BURROS, USADOS PARA LABRAR LAS TIERRAS, SEMBRAR, QUITAR LA MALEZA, TRANSPORTAR PRODUCTOS, AGUA Y LEÃA, ENTRE OTROS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.6.1.1.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "ANIMALES DE TIRO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE ANIMALES NO DETALLADOS EN LAS ESPECIFICAS ANTERIORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.6.1.1.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "OTROS ANIMALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE ARBOLES FRUTALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.6.1.1.5",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "ARBOLES FRUTALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE VIDES Y ARBUSTOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.6.1.1.6",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "VIDES Y ARBUSTOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE SEMILLAS Y ALMACIGOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.6.1.1.7",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "SEMILLAS Y ALMACIGOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE ACTIVOS DE MINAS Y DE CANTERAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.6.1.1.8",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "MINAS Y CANTERAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE BIENES AGROPECUARIOS, PESQUEROS Y MINEROS NO CONSIDERADOS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.6.1.1.99",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "OTROS BIENES  AGROPECUARIOS, PESQUEROS Y MINEROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE LIBROS Y TEXTOS PARA BIBLIOTECAS, CATALOGADOS COMO BIENES PERMANENTES Y SUJETOS AL CONTROL DE INVENTARIOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.6.1.2.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "LIBROS Y TEXTOS PARA BIBLIOTECAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE OTROS BIENES CULTURALES AFINES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.6.1.2.99",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "OTROS BIENES CULTURALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE PATENTES Y MARCAS DE FABRICA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.6.1.3.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "PATENTES Y MARCAS DE FABRICA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE SOFTWARE, INCLUIDAS LAS LICENCIAS CUANDO SE ADQUIERE EN FORMA CONJUNTA (SOFTWARE MAS LICENCIA)",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.6.1.3.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "SOFTWARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE OTROS ACTIVOS INTANGIBLES AFINES, INCLUYENDO LA ADQUISICION DE SOLO LICENCIAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.6.1.3.99",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "OTROS ACTIVOS INTANGIBLES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS QUE SE GENERAN POR LA ADQUISICION DE OTROS ACTIVOS FIJOS NO CONSIDERADOS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.6.1.99.99",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS EN PERSONAL, QUE SE GENERAN EN EL USO DE TEGNOLOGIAS DE INFORMACION Y COMUNICACION PARA EL APOYO EN LA TOMA DE DECISIONES EN UNA ENTIDAD PUBLICA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.7.1.2.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR LA CONTRATACION DE PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, QUE SE GENERAN EN EL USO DE TECNOLOGIAS DE INFORMACION Y COMUNICACION PARA EL APOYO EN LA TOMA DE DECISIONES EN UNA ENTIDAD PUBLICA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.7.1.2.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR LA COMPRA DE BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, QUE SE GENERAN EN EL USO DE TECNOLOGIAS DE INFORMACION Y COMUNICACION PARA EL APOYO EN LA TOMA DE DECISIONES EN UNA ENTIDAD PUBLICA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.7.1.2.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR LA CONTRATACION DE SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS EN PERSONAL, QUE SE GENERAN POR EL DISEÃO E IMPLEMENTACION DE PROCESOS Y PROCEDIMIENTOS IDONEOS QUE RIGEN LA PRESTACION DE UN SERVICIO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.7.1.3.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR LA CONTRATACION DE PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, QUE SE GENERAN POR EL DISEÃO E IMPLEMENTACION DE PROCESOS Y PROCEDIMIENTOS IDONEOS QUE RIGEN LA PRESTACION DE UN SERVICIO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.7.1.3.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR LA COMPRA DE BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, QUE SE GENERAN POR EL DISEÃO E IMPLEMENTACION DE PROCESOS Y PROCEDIMIENTOS IDONEOS QUE RIGEN LA PRESTACION DE UN SERVICIO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.7.1.3.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR LA CONTRATACION DE SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS EN PERSONAL, QUE SE GENERAN POR EL DISEÃO DE INSTRUMENTOS PARA MEJORAR LA CALIDAD DEL SERVICIO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.7.1.4.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR LA CONTRATACION DE PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, QUE SE GENERAN POR EL DISEÃO DE INSTRUMENTOS PARA MEJORAR LA CALIDAD DEL SERVICIO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.7.1.4.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR LA COMPRA DE BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, QUE SE GENERAN POR EL DISEÃO DE INSTRUMENTOS PARA MEJORAR LA CALIDAD DEL SERVICIO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.7.1.4.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR LA CONTRATACION DE SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS EN PERSONAL, QUE SE GENERAN POR LA FORMACION EFECTIVA DE CAPACIDADES Y DESTREZAS EN EL RECURSO HUMANO PARA INCREMENTAR LA PRODUCTIVIDAD",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.7.1.5.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR LA CONTRATACION DE PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, QUE SE GENERAN POR LA FORMACION EFECTIVA DE CAPACIDADES Y DESTREZAS EN EL RECURSO HUMANO PARA INCREMENTAR LA PRODUCTIVIDAD",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.7.1.5.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR LA COMPRA DE BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, QUE SE GENERAN POR LA FORMACION EFECTIVA DE CAPACIDADES Y DESTREZAS EN EL RECURSO HUMANO PARA INCREMENTAR LA PRODUCTIVIDAD",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.7.1.5.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR LA CONTRATACION DE SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DE PERSONAL POR OTRAS INVERSIONES INTANGIBLES NO CONTEMPLADAS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.7.1.6.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR LA CONTRATACION DE PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, PARA OTRAS INVERSIONES INTANGIBLES NO CONTEMPLADAS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.7.1.6.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR LA COMPRA DE BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS, PARA OTRAS INVERSIONES INTANGIBLES NO CONTEMPLADAS EN LAS PARTIDAS ANTERIORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.7.1.6.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTOS POR LA CONTRATACION DE SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS QUE SE GENEREN POR LA ELABORACION DE LOS ESTUDIOS DE PREINVERSION DE LAS INVERSIONES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.8.1.2.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "ESTUDIO DE PREINVERSION"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ELABORACION DE EXPEDIENTES TECNICOS DE LAS INVERSIONES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.8.1.3.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "ELABORACION DE EXPEDIENTES TECNICOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS EN PERSONAL POR LA ADMINISTRACION DE LAS INVERSIONES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.8.1.4.1",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTO POR LA CONTRATACION DE PERSONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BIENES, PARA LA ADMINISTRACION DE LAS INVERSIONES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.8.1.4.2",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTO POR LA COMPRA DE BIENES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONTRATACION DE SERVICIOS POR LA SUPERVISION Y ADMINISTRACION DE LAS INVERSIONES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.8.1.4.3",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTO POR LA CONTRATACION DE SERVICIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS ASOCIADOS A LAUDOS ARBITRALES O SENTENCIAS VINCULADAS A INVERSIONES, DERIVADOS DE VALORIZACIONES EN CONTROVERSIA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.8.1.4.4",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "GASTO POR LAUDOS ARBITRALES O SENTENCIAS VINCULADAS A INVERSIONES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS NO CONTEMPLADOS EN LAS PARTIDAS ANTERIORES, NO INCLUYE EQUIPAMIENTO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.6.8.1.4.99",
      "restringida_art" : "por el Artículo 9.3",
      "anio" : "2020",
      "des_clasf" : "OTROS GASTOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONCESION DE CUALQUIER PRESTAMO OTORGADO PARA FINES EDUCATIVOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.7.1.1.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PARA FINES EDUCATIVOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONCESION DE CUALQUIER PRESTAMO OTORGADO PARA FINES AGROPECUARIOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.7.1.1.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PARA FINES AGROPECUARIOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONCESION DE CUALQUIER PRESTAMO OTORGADO PARA FINES DE VIVIENDA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.7.1.1.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PARA FINES DE VIVIENDA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONCESION DE CUALQUIER PRESTAMO OTORGADO PARA OTROS FINES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.7.1.1.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PARA OTROS FINES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE BONOS EMITIDOS TANTO PRIVADOS COMO PUBLICOS, NACIONALES COMO EXTRANJEROS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.7.1.2.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "BONOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE PAGARES EMITIDOS TANTO PRIVADOS COMO PUBLICOS, NACIONALES COMO EXTRANJEROS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.7.1.2.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "PAGARES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE LETRAS EMITIDOS TANTO PRIVADOS COMO PUBLICOS, NACIONALES COMO EXTRANJEROS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.7.1.2.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "LETRAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA COMPRA DE OTROS TITULOS Y VALORES EMITIDOS TANTO PRIVADOS COMO PUBLICOS, NACIONALES COMO EXTRANJEROS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.7.1.2.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS TITULOS Y VALORES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE ACCIONES O APORTES A EMPRESAS, CUYOS TITULOS NO REPRESENTAN CONSTITUCION O AUMENTO DE CAPITAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.7.1.3.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE EMPRESAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE ACCIONES O APORTES A ORGANISMOS INTERNACIONALES, CUYOS TITULOS NO REPRESENTAN CONSTITUCION O AUMENTO DE CAPITAL; Y SUSCRIPCION DE ACCIONES Y CONTRIBUCIONES CORRESPONDIENTES A LA PARTICIPACION DEL GOBIERNO EN LOS ORGANISMOS MULTILATERALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.7.1.3.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE ORGANISMOS INTERNACIONALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE ACCIONES O APORTES A OTRAS SOCIEDADES, CUYOS TITULOS NO REPRESENTAN CONSTITUCION O AUMENTO DE CAPITAL; Y SUSCRIPCION DE ACCIONES Y CONTRIBUCIONES CORRESPONDIENTES A LA PARTICIPACION DEL GOBIERNO EN LOS ORGANISMOS MULTILATERALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.7.1.3.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA CONSTITUCION O AUMENTO DE CAPITAL DE EMPRESAS INDUSTRIALES, AGRICOLAS, COMERCIALES, FINANCIERAS, MEDIANTE LA SUSCRIPCION DE ACCIONES REPRESENTATIVAS DE SU CAPITAL SOCIAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.7.1.4.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "CONSTITUCION O AUMENTO DE CAPITAL DE EMPRESAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA ADQUISICION DE OTROS ACTIVOS FINANCIEROS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.7.1.4.1.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER LA AMORTIZACION DE LA DEUDA PUBLICA EXTERNA CONTRAIDA CON GOBIERNOS DE PAISES DE AMERICA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.1.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE PAISES DE AMERICA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER LA AMORTIZACION DE LA DEUDA PUBLICA EXTERNA CONTRAIDA CON GOBIERNOS DE PAISES DE EUROPA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.1.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE PAISES DE EUROPA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER LA AMORTIZACION DE LA DEUDA PUBLICA EXTERNA CONTRAIDA CON GOBIERNOS DE PAISES DE AFRICA, ASIA Y OCEANIA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.1.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE AFRICA, ASIA Y OCEANIA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER LA AMORTIZACION DE LA DEUDA PUBLICA EXTERNA CONTRAIDA CON EL BANCO INTERAMERICANO DE DESARROLLO - BID",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.1.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "BANCO INTERAMERICANO DE DESARROLLO - BID"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER LA AMORTIZACION DE LA DEUDA PUBLICA EXTERNA CONTRAIDA CON EL BANCO MUNDIAL - BIRF",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.1.2.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "BANCO MUNDIAL - BIRF"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER LA AMORTIZACION DE LA DEUDA PUBLICA EXTERNA CONTRAIDA CON EL FONDO MONETARIO INTERNACIONAL - FMI",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.1.2.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "FONDO MONETARIO INTERNACIONAL - FMI"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER LA AMORTIZACION DE LA DEUDA PUBLICA EXTERNA CONTRAIDA CON EL KREDINTANSTALF FUR WIEDERAUFBAU - KFW",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.1.2.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "KREDINTANSTALF FUR WIEDERAUFBAU - KFW"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER LA AMORTIZACION DE LA DEUDA PUBLICA EXTERNA CONTRAIDA CON EL CORPORACION ANDINA DE FOMENTO - CAF",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.1.2.5",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "CORPORACION ANDINA DE FOMENTO - CAF"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER LA AMORTIZACION DE LA DEUDA PUBLICA EXTERNA CONTRAIDA CON EL FONDO INTERNACIONAL DE DESARROLLO AGRICOLA - FIDA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.1.2.6",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "FONDO INTERNACIONAL DE DESARROLLO AGRICOLA - FIDA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER LA AMORTIZACION DE LA DEUDA PUBLICA EXTERNA CONTRAIDA CON EL AGENCIA ALEMANA DE COOPERACION TECNICA INTERNACIONAL - GIZ",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.1.2.8",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "AGENCIA ALEMANA DE COOPERACION TECNICA INTERNACIONAL - GIZ"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER LA AMORTIZACION DE LA DEUDA PUBLICA EXTERNA CONTRAIDA CON LA AGENCIA DE COOPERACION INTERNACIONAL DEL JAPON - JICA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.1.2.9",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "AGENCIA DE COOPERACION INTERNACIONAL DEL JAPON - JICA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER LA AMORTIZACION DE LA DEUDA PUBLICA EXTERNA CONTRAIDA CON OTROS ORGANISMOS INTERNACIONALES O AGENCIAS OFICIALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.1.2.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS ORGANISMOS INTERNACIONALES O AGENCIAS OFICIALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER LA AMORTIZACION DE LA DEUDA PUBLICA EXTERNA CORRESPONDIENTE A LA COLOCACION DE BONOS DEL TESORO PUBLICO, CON ORGANISMOS Y ENTIDADES PUBLICAS O PRIVADAS DEL EXTERIOR",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.1.3.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "BONOS DEL TESORO PUBLICO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER LA AMORTIZACION DE LA DEUDA PUBLICA EXTERNA CORRESPONDIENTE A LA COLOCACION DE OTROS TITULOS VALORES DEL SECTOR PUBLICO, CON ORGANISMOS Y ENTIDADES PUBLICAS O PRIVADAS DEL EXTERIOR",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.1.3.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS VALORES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER OTRAS AMORTIZACIONES DE LA DEUDA PUBLICA EXTERNA CONTRAIDA CON LA BANCA PRIVADA Y FINANCIERA EXTERNOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.1.4.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "CON BANCA PRIVADA Y FINANCIERAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER OTRAS AMORTIZACIONES DE LA DEUDA PUBLICA EXTERNA CONTRAIDA CON OTRAS ENTIDADES EXTERNAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.1.4.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS CREDITOS EXTERNOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA AMORTIZACION DE LA DEUDA PUBLICA INTERNA CONTRAIDA CON LAS ENTIDADES DEL GOBIERNO NACIONAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.2.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE  GOBIERNO NACIONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA AMORTIZACION DE LA DEUDA PUBLICA INTERNA CONTRAIDA CON LAS ENTIDADES DE GOBIERNOS REGIONALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.2.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE LOS GOBIERNOS REGIONALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LA AMORTIZACION DE LA DEUDA PUBLICA INTERNA CONTRAIDA CON LAS ENTIDADES DE GOBIERNOS LOCALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.2.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE LOS GOBIERNOS LOCALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER LA AMORTIZACION DE LA DEUDA PUBLICA INTERNA DERIVADOS DE LA APLICACION DE CAPITAL DE TERCEROS EN BONOS DEL TESORO PUBLICO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.2.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "BONOS DEL TESORO PUBLICO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER LA AMORTIZACION DE LA DEUDA PUBLICA INTERNA DERIVADOS DE LA APLICACION DE CAPITAL DE TERCEROS EN BONOS MUNICIPALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.2.2.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "BONOS MUNICIPALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER LA AMORTIZACION DE LA DEUDA PUBLICA INTERNA DERIVADOS DE LA APLICACION DE CAPITAL DE TERCEROS EN OTROS TITULOS VALORES INTERNOS  INCLUYE EL BONO DE RECONOCIMIENTO, QUE RECONOCEN LOS APORTES QUE UN TRABAJADOR HAYA REALIZADO AL SISTEMA NACIONAL DE PENSIONES (SNP), ANTES DE SU AFILIACION AL SISTEMA PRIVADO DE PENSIONES (SPP)",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.2.2.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS VALORES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER AMORTIZACIONES DE LA DEUDA PUBLICA CON EL BANCO DE LA NACION",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.2.3.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DEL BANCO DE LA NACION"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER AMORTIZACIONES DE LA DEUDA PUBLICA CON EL FONDO DE MIVIENDA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.2.3.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DEL FONDO MIVIENDA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER AMORTIZACIONES DE LA DEUDA PUBLICA CON LA BANCA PRIVADA Y FINANCIERA INTERNA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.2.3.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE LA BANCA PRIVADA Y FINANCIERA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER LAS AMORTIZACIONES DE LA DEUDA PUBLICA POR LOS CERTIFICADOS DE INVERSION PUBLICA REGIONAL Y LOCAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.2.3.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE CERTIFICADOS DE INVERSION PUBLICA REGIONAL Y LOCAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER OTRAS AMORTIZACIONES DE LA DEUDA PUBLICA CON OTRAS ENTIDADES INTERNAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.1.2.3.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS CREDITOS INTERNOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDO CON LOS PAISES DE AMERICA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.1.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE PAISES DE AMERICA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDO CON LOS PAISES DE EUROPA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.1.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE PAISES DE EUROPA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDO CON LOS PAISES DE AFRICA, ASIA Y OCEANIA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.1.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE AFRICA, ASIA Y OCEANIA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDO CON EL BANCO INTERAMERICANO DE DESARROLLO - BID",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.1.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "BANCO INTERAMERICANO DE DESARROLLO - BID"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDO CON EL BANCO MUNDIAL - BIRF",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.1.2.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "BANCO MUNDIAL - BIRF"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDO CON EL FONDO MONETARIO INTERNACIONAL - FMI",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.1.2.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "FONDO MONETARIO INTERNACIONAL - FMI"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDO CON EL KREDINTANSTALF FUR WIEDERAUFBAU - KFW",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.1.2.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "KREDINTANSTALF FUR WIEDERAUFBAU - KFW"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDO CON EL CORPORACION ANDINA DE FOMENTO - CAF",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.1.2.5",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "CORPORACION ANDINA DE FOMENTO - CAF"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDO CON EL FONDO INTERNACIONAL DE DESARROLLO AGRICOLA - FIDA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.1.2.6",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "FONDO INTERNACIONAL DE DESARROLLO AGRICOLA - FIDA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDO CON EL AGENCIA ALEMANA DE COOPERACION TECNICA INTERNACIONAL - GIZ",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.1.2.8",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "AGENCIA ALEMANA DE COOPERACION TECNICA INTERNACIONAL - GIZ"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS AL PAGO DE INTERESES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDA CON LA AGENCIA DE COOPERACION INTERNACIONAL DEL JAPON - JICA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.1.2.9",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "AGENCIA DE COOPERACION INTERNACIONAL DEL JAPON - JICA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDO CON OTROS ORGANISMOS INTERNACIONALES O AGENCIAS OFICIALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.1.2.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS ORGANISMOS INTERNACIONALES O AGENCIAS OFICIALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES DERIVADOS DE LA APLICACION DE CAPITAL DE TERCEROS EN LA COLOCACION DE BONOS DEL TESORO PUBLICO EN EL EXTRANJERO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.1.3.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "BONOS DEL TESORO PUBLICO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES DERIVADOS DE LA APLICACION DE CAPITAL DE TERCEROS EN LA COLOCACION DE OTROS TITULOS Y VALORES EN EL EXTERNOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.1.3.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS VALORES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER OTROS PAGOS DE INTERESES REFERENTES A OPERACIONES DE CREDITO EXTERNO Y OTRAS CARGAS DE LA DEUDA PUBLICA CON LA BANCA PRIVADA Y FINANCIERA EXTERNA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.1.4.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "CON BANCA PRIVADA Y FINANCIERAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER OTROS PAGOS DE INTERESES REFERENTES A OPERACIONES DE CREDITO EXTERNO Y OTRAS CARGAS DE LA DEUDA PUBLICA CON OTRAS ENTIDADES EXTERNAS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.1.4.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS CREDITOS EXTERNOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES REFERENTES A OPERACIONES DE CREDITO INTERNO CONTRAIDAS CON UNIDADES DEL GOBIERNO NACIONAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.2.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE  GOBIERNO NACIONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES REFERENTES A OPERACIONES DE CREDITO INTERNO CONTRAIDAS CON UNIDADES DE GOBIERNOS REGIONALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.2.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE LOS GOBIERNOS REGIONALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES REFERENTES A OPERACIONES DE CREDITO INTERNO CONTRAIDAS CON UNIDADES DE GOBIERNOS LOCALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.2.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE LOS GOBIERNOS LOCALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES DERIVADOS DE LA APLICACION DE CAPITAL DE TERCEROS EN LA COLOCACION DE BONOS DEL TESORO PUBLICO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.2.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "BONOS DEL TESORO PUBLICO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES DERIVADOS DE LA APLICACION DE CAPITAL DE TERCEROS EN LA COLOCACION DE BONOS MUNICIPALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.2.2.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "BONOS MUNICIPALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES DERIVADOS DE LA APLICACION DE CAPITAL DE TERCEROS EN LA COLOCACION DE OTROS TITULOS Y VALORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.2.2.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS VALORES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE OTROS INTERESES REFERENTES A OPERACIONES DE CREDITO INTERNO Y OTRAS CARGAS DE LA DEUDA PUBLICA CON EL BANCO DE LA NACION   INCLUYE INTERESES POR OPERACIONES DE FINANCIAMIENTO TEMPORAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.2.3.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DEL BANCO DE LA NACION"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE OTROS INTERESES REFERENTES A OPERACIONES DE CREDITO INTERNO Y OTRAS CARGAS DE LA DEUDA PUBLICA CON EL FONDO MIVIENDA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.2.3.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DEL FONDO MIVIENDA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE OTROS INTERESES REFERENTES A OPERACIONES DE CREDITO INTERNO Y OTRAS CARGAS DE LA DEUDA PUBLICA CON LA BANCA PRIVADA Y FINANCIERA   INCLUYE INTERESES POR OPERACIONES DE FINANCIAMIENTO TEMPORAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.2.3.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE LA BANCA PRIVADA Y FINANCIERA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE INTERESES REFERENTES A LOS CERTIFICADOS DE INVERSION PUBLICA REGIONAL Y LOCAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.2.3.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE CERTIFICADOS DE INVERSION PUBLICA REGIONAL Y LOCAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS A ATENDER EL PAGO DE OTROS INTERESES REFERENTES A OPERACIONES DE CREDITO INTERNO Y OTRAS CARGAS DE LA DEUDA PUBLICA CON OTRAS ENTIDADES NACIONALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.2.2.3.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS CREDITOS INTERNOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS AL PAGO DE COMISIONES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDA CON LOS PAISES DE AMERICA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.1.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE PAISES DE AMERICA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS AL PAGO DE COMISIONES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDA CON LOS PAISES DE EUROPA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.1.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE PAISES DE EUROPA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS AL PAGO DE COMISIONES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDA CON LOS PAISES DE AFRICA, ASIA Y OCEANIA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.1.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE AFRICA, ASIA Y OCEANIA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADO AL PAGO DE COMISIONES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDA CON EL BANCO INTERAMERICANO DE DESARROLLO - BID",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.1.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "BANCO INTERAMERICANO DE DESARROLLO - BID"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADO AL PAGO DE COMISIONES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDA CON EL BANCO MUNDIAL - BIRF",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.1.2.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "BANCO MUNDIAL - BIRF"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADO AL PAGO DE COMISIONES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDA CON EL FONDO MONETARIO INTERNACIONAL - FMI",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.1.2.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "FONDO MONETARIO INTERNACIONAL - FMI"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADO AL PAGO DE COMISIONES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDA CON EL KREDINTANSTALF FUR WIEDERAUFBAU - KFW",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.1.2.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "KREDINTANSTALF FUR WIEDERAUFBAU - KFW"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADO AL PAGO DE COMISIONES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDA CON EL CORPORACION ANDINA DE FOMENTO - CAF",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.1.2.5",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "CORPORACION ANDINA DE FOMENTO - CAF"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADO AL PAGO DE COMISIONES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDA CON EL FONDO INTERNACIONAL DE DESARROLLO AGRICOLA - FIDA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.1.2.6",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "FONDO INTERNACIONAL DE DESARROLLO AGRICOLA - FIDA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADO AL PAGO DE COMISIONES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDA CON EL AGENCIA ALEMANA DE COOPERACION TECNICA INTERNACIONAL - GIZ",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.1.2.8",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "AGENCIA ALEMANA DE COOPERACION TECNICA INTERNACIONAL - GIZ"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS AL PAGO DE COMISIONES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDA CON LA AGENCIA DE COOPERACION INTERNACIONAL DEL JAPON - JICA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.1.2.9",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "AGENCIA DE COOPERACION INTERNACIONAL DEL JAPON - JICA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADO AL PAGO DE COMISIONES REFERENTES A OPERACIONES DE CREDITO EXTERNO CONTRAIDA CON OTROS ORGANISMOS INTERNACIONALES O AGENCIAS OFICIALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.1.2.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS ORGANISMOS INTERNACIONALES O AGENCIAS OFICIALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADO AL PAGO DE COMISIONES DERIVADOS DE LA APLICACION DE CAPITAL DE TERCEROS EN LA COLOCACION BONOS DEL TESORO PUBLICO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.1.3.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "BONOS DEL TESORO PUBLICO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADO AL PAGO DE COMISIONES DERIVADOS DE LA APLICACION DE CAPITAL DE TERCEROS EN LA COLOCACION OTROS TITULOS Y VALORES EXTERNOS",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.1.3.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS VALORES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS AL PAGO DE OTRAS COMISIONES REFERENTES A OPERACIONES DE CREDITO EXTERNO Y OTRAS CARGAS DE LA DEUDA PUBLICA CON LA BANCA PRIVADA Y FINANCIERA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.1.4.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "CON BANCA PRIVADA Y FINANCIERAS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS AL PAGO DE OTRAS COMISIONES Y CARGOS REFERENTES A OPERACIONES DE CREDITO EXTERNO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.1.4.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS CREDITOS EXTERNOS"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS POR LAS OPERACIONES DE COBERTURA DE RIESGO CON EL OBJETO DE MITIGAR LA VOLATILIDAD DE LAS TASAS DE INTERES Y/O LOS TIPOS DE CAMBIO Y SUS EFECTOS SOBRE LOS IMPORTES QUE DEBEN ATENDERSE POR EL SERVICIO DE LA DEUDA PUBLICA EXTERNA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.1.5.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS GASTOS DE LA DEUDA EXTERNA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS AL PAGO DE COMISIONES REFERENTES A OPERACIONES DE CREDITO INTERNO CONTRAIDA CON LAS ENTIDADES DEL GOBIERNO NACIONAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.2.1.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE  GOBIERNO NACIONAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS AL PAGO DE COMISIONES REFERENTES A OPERACIONES DE CREDITO INTERNO CONTRAIDA CON LAS ENTIDADES DE GOBIERNOS REGIONALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.2.1.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE LOS GOBIERNOS REGIONALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS AL PAGO DE COMISIONES REFERENTES A OPERACIONES DE CREDITO INTERNO CONTRAIDA CON LAS ENTIDADES DE GOBIERNOS LOCALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.2.1.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE LOS GOBIERNOS LOCALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS AL PAGO DE COMISIONES DERIVADOS DE LA APLICACION DE CAPITAL DE TERCEROS EN LA COLOCACION DE BONOS DEL TESORO PUBLICO",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.2.2.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "BONOS DEL TESORO PUBLICO"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS AL PAGO DE COMISIONES DERIVADOS DE LA APLICACION DE CAPITAL DE TERCEROS EN LA COLOCACION DE BONOS MUNICIPALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.2.2.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "BONOS MUNICIPALES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS AL PAGO DE COMISIONES DERIVADOS DE LA APLICACION DE CAPITAL DE TERCEROS EN LA COLOCACION DE OTROS TITULOS Y VALORES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.2.2.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS VALORES"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS AL PAGO DE OTRAS COMISIONES REFERENTES A OPERACIONES DE CREDITO INTERNO Y OTRAS CARGAS DE LA DEUDA PUBLICA INTERNA CON EL BANCO DE LA NACION",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.2.3.1",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DEL BANCO DE LA NACION"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS AL PAGO DE OTRAS COMISIONES REFERENTES A OPERACIONES DE CREDITO INTERNO Y OTRAS CARGAS DE LA DEUDA PUBLICA INTERNA, CON EL FONDO MIVIENDA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.2.3.2",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DEL FONDO MIVIENDA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS AL PAGO DE OTRAS COMISIONES REFERENTES A OPERACIONES DE CREDITO INTERNO Y OTRAS CARGAS DE LA DEUDA PUBLICA INTERNA, CON LA BANCA PRIVADA Y FINANCIERA",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.2.3.3",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE LA BANCA PRIVADA Y FINANCIERA"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS AL PAGO DE COMISIONES REFERENTES A LOS CERTIFICADOS DE INVERSION PUBLICA REGIONAL Y LOCAL",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.2.3.4",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "DE CERTIFICADOS DE INVERSION PUBLICA REGIONAL Y LOCAL"
    }, {
      "habilitada_" : "Si",
      "icono" : "img/icono_verde.png",
      "restringida_" : "No",
      "des_detallada" : "GASTOS DESTINADOS AL PAGO DE OTRAS COMISIONES REFERENTES A OPERACIONES DE CREDITO INTERNO Y OTRAS CARGAS DE LA DEUDA PUBLICA INTERNA, CON OTRAS ENTIDADES NACIONALES",
      "habilitadora_" : "Si",
      "code_clasf" : "2.8.3.2.3.99",
      "restringida_art" : "",
      "anio" : "2020",
      "des_clasf" : "OTROS CREDITOS INTERNOS"
    } ]

});
