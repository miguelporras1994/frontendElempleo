/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import handleInput from '../hooks/status';

const SelectSector = () => {

  return (
    <Autocomplete
      id='combo-box-demo'
      options={sector}
      getOptionLabel={option => option.Name}
      style={{ width: 350, marginLeft: 260, float: 'left' }}
      renderInput={params => <TextField {...params} label='Sector' variant='outlined' />}
      onChange={(event, newValue) => {
        handleInput(newValue, 'sector');
      }}
    />
  );
};

const sector = [
  {
    'Id': 1133,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Abonos, plaguicidas y químicos agropecuarios',
    'IdIndustry': 122,
  },
  {
    'Id': 1166,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Acabados textiles',
    'IdIndustry': 127,
  },
  {
    'Id': 1008,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Aceites y grasas comestibles',
    'IdIndustry': 102,
  },
  {
    'Id': 1038,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Acondicionamiento y terminación de edificios',
    'IdIndustry': 106,
  },
  {
    'Id': 1171,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Aéreo',
    'IdIndustry': 128,
  },
  {
    'Id': 1124,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Agencias de publicidad',
    'IdIndustry': 120,
  },
  {
    'Id': 1125,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Agencias promocionales',
    'IdIndustry': 120,
  },
  {
    'Id': 1001,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Agricultura varios',
    'IdIndustry': 101,
  },
  {
    'Id': 1072,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Agricultura y desarrollo rural',
    'IdIndustry': 113,
  },
  {
    'Id': 1023,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Ajustadores de seguros',
    'IdIndustry': 103,
  },
  {
    'Id': 1183,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Alimentos / Bebidas',
    'IdIndustry': 124,
  },
  {
    'Id': 1009,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Alimentos para animales',
    'IdIndustry': 102,
  },
  {
    'Id': 1031,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Almacenes de cadena',
    'IdIndustry': 105,
  },
  {
    'Id': 1154,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Almacenes de depósito',
    'IdIndustry': 124,
  },
  {
    'Id': 1037,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Almacenes varios',
    'IdIndustry': 105,
  },
  {
    'Id': 1142,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'ARP',
    'IdIndustry': 123,
  },
  {
    'Id': 1002,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Avícola',
    'IdIndustry': 101,
  },
  {
    'Id': 1192,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Ayuda humanitaria y/o cooperación al desarrollo',
    'IdIndustry': 132,
  },
  {
    'Id': 1010,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Azúcar',
    'IdIndustry': 102,
  },
  {
    'Id': 1091,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Banca',
    'IdIndustry': 114,
  },
  {
    'Id': 1126,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Brokers de medios',
    'IdIndustry': 120,
  },
  {
    'Id': 1011,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Café exportadores',
    'IdIndustry': 102,
  },
  {
    'Id': 1003,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Café producción',
    'IdIndustry': 101,
  },
  {
    'Id': 1155,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Cajas de compensación',
    'IdIndustry': 124,
  },
  {
    'Id': 1100,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Cajeros electrónicos',
    'IdIndustry': 114,
  },
  {
    'Id': 1050,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Calzado',
    'IdIndustry': 108,
  },
  {
    'Id': 1176,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Carrocerías, partes y piezas para vehículos',
    'IdIndustry': 129,
  },
  {
    'Id': 1162,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Celulares',
    'IdIndustry': 126,
  },
  {
    'Id': 1042,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Cemento',
    'IdIndustry': 106,
  },
  {
    'Id': 1043,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Cerámica y otros materiales no metálicos',
    'IdIndustry': 106,
  },
  {
    'Id': 1024,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Cerveza',
    'IdIndustry': 104,
  },
  {
    'Id': 1013,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Chocolate y confitería',
    'IdIndustry': 102,
  },
  {
    'Id': 1073,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Ciencia y tecnología',
    'IdIndustry': 113,
  },
  {
    'Id': 1066,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Cine y video',
    'IdIndustry': 112,
  },
  {
    'Id': 1156,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Clubes',
    'IdIndustry': 124,
  },
  {
    'Id': 1056,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Colegios',
    'IdIndustry': 110,
  },
  {
    'Id': 1181,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Comercialización de partes y accesorios',
    'IdIndustry': 129,
  },
  {
    'Id': 1159,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Comercio de computadores',
    'IdIndustry': 125,
  },
  {
    'Id': 1074,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Comercio exterior',
    'IdIndustry': 113,
  },
  {
    'Id': 1058,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Compañias de capacitación continuada',
    'IdIndustry': 110,
  },
  {
    'Id': 1096,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Compañías de financiamiento',
    'IdIndustry': 114,
  },
  {
    'Id': 1093,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Compañias de leasing',
    'IdIndustry': 114,
  },
  {
    'Id': 1020,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Compañías de seguros',
    'IdIndustry': 103,
  },
  {
    'Id': 1059,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Compañias petroleras',
    'IdIndustry': 111,
  },
  {
    'Id': 1075,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Comunicaciones',
    'IdIndustry': 113,
  },
  {
    'Id': 1035,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Concesionarios',
    'IdIndustry': 105,
  },
  {
    'Id': 1179,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Concesionarios',
    'IdIndustry': 129,
  },
  {
    'Id': 1168,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Confecciones',
    'IdIndustry': 127,
  },
  {
    'Id': 1012,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Conservas, pasabocas y condimentos',
    'IdIndustry': 102,
  },
  {
    'Id': 1039,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Construcción',
    'IdIndustry': 106,
  },
  {
    'Id': 1189,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Construcción naval',
    'IdIndustry': 131,
  },
  {
    'Id': 1048,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Consultoría contable / Revisoría fiscal',
    'IdIndustry': 107,
  },
  {
    'Id': 1046,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Consultoría en recursos humanos',
    'IdIndustry': 107,
  },
  {
    'Id': 1182,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Consumo masivo',
    'IdIndustry': 130,
  },
  {
    'Id': 1157,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Cooperativas',
    'IdIndustry': 124,
  },
  {
    'Id': 1097,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Corporaciones de ahorro y vivienda',
    'IdIndustry': 114,
  },
  {
    'Id': 1095,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Corredores de bolsa',
    'IdIndustry': 114,
  },
  {
    'Id': 1021,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Corredores de seguros',
    'IdIndustry': 103,
  },
  {
    'Id': 1146,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Correo',
    'IdIndustry': 124,
  },
  {
    'Id': 1128,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Correo directo',
    'IdIndustry': 120,
  },
  {
    'Id': 1051,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Curtido de cueros',
    'IdIndustry': 108,
  },
  {
    'Id': 1076,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Defensa y seguridad nacional',
    'IdIndustry': 113,
  },
  {
    'Id': 1161,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Desarrollo y diseño de páginas web',
    'IdIndustry': 125,
  },
  {
    'Id': 1188,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Diseño naval',
    'IdIndustry': 131,
  },
  {
    'Id': 1019,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Distribución / Consumo masivo de alimentos',
    'IdIndustry': 102,
  },
  {
    'Id': 1028,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Distribución / Consumo masivo de bebidas y tabaco',
    'IdIndustry': 104,
  },
  {
    'Id': 1139,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Distribución / Consumo masivo de elementos de aseo',
    'IdIndustry': 122,
  },
  {
    'Id': 1060,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Distribución de combustibles',
    'IdIndustry': 111,
  },
  {
    'Id': 1106,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Distribución de enseres domésticos',
    'IdIndustry': 115,
  },
  {
    'Id': 1107,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Distribución de maquinaría y equipo',
    'IdIndustry': 115,
  },
  {
    'Id': 1044,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Distribución de materiales de construcción y ferretería',
    'IdIndustry': 106,
  },
  {
    'Id': 1007,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Distribución de productos e insumos agropecuarios',
    'IdIndustry': 101,
  },
  {
    'Id': 1138,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Distribución de productos farmacéuticos y otros',
    'IdIndustry': 122,
  },
  {
    'Id': 1170,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Distribución de productos textiles y confecciones',
    'IdIndustry': 127,
  },
  {
    'Id': 1033,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Droguerías',
    'IdIndustry': 105,
  },
  {
    'Id': 1077,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Economía y desarrollo económico',
    'IdIndustry': 113,
  },
  {
    'Id': 1078,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Educación, cultura y turismo',
    'IdIndustry': 113,
  },
  {
    'Id': 1102,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Electrodomésticos',
    'IdIndustry': 115,
  },
  {
    'Id': 1064,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Energía eléctrica',
    'IdIndustry': 111,
  },
  {
    'Id': 1177,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Ensambladora de vehículos',
    'IdIndustry': 129,
  },
  {
    'Id': 1122,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Envases',
    'IdIndustry': 119,
  },
  {
    'Id': 1140,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'EPS',
    'IdIndustry': 123,
  },
  {
    'Id': 1163,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Equipos de telecomunicaciones',
    'IdIndustry': 126,
  },
  {
    'Id': 1034,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Estaciones de servicio / Servitecas',
    'IdIndustry': 105,
  },
  {
    'Id': 1079,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Estadística',
    'IdIndustry': 113,
  },
  {
    'Id': 1062,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Explotación de carbón',
    'IdIndustry': 111,
  },
  {
    'Id': 1036,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Ferreterías',
    'IdIndustry': 105,
  },
  {
    'Id': 1094,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Fiduciaria',
    'IdIndustry': 114,
  },
  {
    'Id': 1049,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Firmas de abogados',
    'IdIndustry': 107,
  },
  {
    'Id': 1045,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Firmas de consultoría empresarial',
    'IdIndustry': 107,
  },
  {
    'Id': 1004,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Flores',
    'IdIndustry': 101,
  },
  {
    'Id': 1092,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Fondos de pensiones',
    'IdIndustry': 114,
  },
  {
    'Id': 1080,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Función pública',
    'IdIndustry': 113,
  },
  {
    'Id': 1005,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Ganadería',
    'IdIndustry': 101,
  },
  {
    'Id': 1063,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Gas',
    'IdIndustry': 111,
  },
  {
    'Id': 1025,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Gaseosas, jugos y aguas',
    'IdIndustry': 104,
  },
  {
    'Id': 1070,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Gremios y asociaciones',
    'IdIndustry': 113,
  },
  {
    'Id': 1167,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Hilanderías',
    'IdIndustry': 127,
  },
  {
    'Id': 1029,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Hipermercados',
    'IdIndustry': 105,
  },
  {
    'Id': 1147,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Hoteles',
    'IdIndustry': 124,
  },
  {
    'Id': 1178,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Importadores de vehículos',
    'IdIndustry': 129,
  },
  {
    'Id': 1053,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Impresión editorial',
    'IdIndustry': 109,
  },
  {
    'Id': 1150,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Informáticos',
    'IdIndustry': 124,
  },
  {
    'Id': 1185,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Infraestructura',
    'IdIndustry': 106,
  },
  {
    'Id': 1186,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Infraestructura vial',
    'IdIndustry': 106,
  },
  {
    'Id': 1040,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Ingeniería civil',
    'IdIndustry': 106,
  },
  {
    'Id': 1057,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Institutos técnicos',
    'IdIndustry': 110,
  },
  {
    'Id': 1081,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Interior, control y organizacion electoral',
    'IdIndustry': 113,
  },
  {
    'Id': 1112,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Internet',
    'IdIndustry': 116,
  },
  {
    'Id': 1141,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'IPS',
    'IdIndustry': 123,
  },
  {
    'Id': 1082,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Justicia y derecho',
    'IdIndustry': 113,
  },
  {
    'Id': 1132,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Laboratorios farmacéuticos y otros',
    'IdIndustry': 122,
  },
  {
    'Id': 1014,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Lácteos',
    'IdIndustry': 102,
  },
  {
    'Id': 1054,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Libros, folletos y similares',
    'IdIndustry': 109,
  },
  {
    'Id': 1026,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Licores',
    'IdIndustry': 104,
  },
  {
    'Id': 1052,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Maletas, bolsos y similares',
    'IdIndustry': 108,
  },
  {
    'Id': 1191,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Mantenimiento naval',
    'IdIndustry': 131,
  },
  {
    'Id': 1105,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Manufacturas varias',
    'IdIndustry': 115,
  },
  {
    'Id': 1101,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Maquinaría y equipo',
    'IdIndustry': 115,
  },
  {
    'Id': 1172,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Marítimo y fluvial',
    'IdIndustry': 128,
  },
  {
    'Id': 1143,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Medicina prepagada',
    'IdIndustry': 123,
  },
  {
    'Id': 1083,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Medio ambiente',
    'IdIndustry': 113,
  },
  {
    'Id': 1113,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Metales básicos, hierro, acero y otros',
    'IdIndustry': 117,
  },
  {
    'Id': 1114,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Metales no ferrosos',
    'IdIndustry': 117,
  },
  {
    'Id': 1084,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Minas y energía',
    'IdIndustry': 113,
  },
  {
    'Id': 1015,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Molinería de arroz',
    'IdIndustry': 102,
  },
  {
    'Id': 1016,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Molinería y productos de trigo y maíz',
    'IdIndustry': 102,
  },
  {
    'Id': 1104,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Muebles y accesorios',
    'IdIndustry': 115,
  },
  {
    'Id': 1187,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Naval',
    'IdIndustry': 131,
  },
  {
    'Id': 1175,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Operadores, agentes y terminales',
    'IdIndustry': 128,
  },
  {
    'Id': 1071,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Organizaciones no gubernamentales (Ong)',
    'IdIndustry': 113,
  },
  {
    'Id': 1195,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Otros',
    'IdIndustry': 134,
  },
  {
    'Id': 1065,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Otros (Energético)',
    'IdIndustry': 111,
  },
  {
    'Id': 1069,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Otros (Entretenimiento)',
    'IdIndustry': 112,
  },
  {
    'Id': 1129,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Otros (Publicidad y mercadeo)',
    'IdIndustry': 120,
  },
  {
    'Id': 1165,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Otros (Telecomunicaciones)',
    'IdIndustry': 126,
  },
  {
    'Id': 1123,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Otros productos de vidrio',
    'IdIndustry': 119,
  },
  {
    'Id': 1158,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Otros servicios',
    'IdIndustry': 124,
  },
  {
    'Id': 1193,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Palmero',
    'IdIndustry': 101,
  },
  {
    'Id': 1130,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Papel, celulosa y cartón ondulado',
    'IdIndustry': 121,
  },
  {
    'Id': 1068,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Parques de diversiones',
    'IdIndustry': 112,
  },
  {
    'Id': 1017,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Pastas, panadería y galletería',
    'IdIndustry': 102,
  },
  {
    'Id': 1108,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Periódicos',
    'IdIndustry': 116,
  },
  {
    'Id': 1006,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Pesca',
    'IdIndustry': 101,
  },
  {
    'Id': 1134,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Pinturas, barnices y similares',
    'IdIndustry': 122,
  },
  {
    'Id': 1085,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Planeación',
    'IdIndustry': 113,
  },
  {
    'Id': 1117,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Plásticos primarios',
    'IdIndustry': 118,
  },
  {
    'Id': 1041,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Preparación de terreno',
    'IdIndustry': 106,
  },
  {
    'Id': 1086,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Presidencia, gobernaciones y alcaldías',
    'IdIndustry': 113,
  },
  {
    'Id': 1067,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Producción y grabación musical',
    'IdIndustry': 112,
  },
  {
    'Id': 1160,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Productores y distribuidores de software',
    'IdIndustry': 125,
  },
  {
    'Id': 1018,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Productos cárnicos',
    'IdIndustry': 102,
  },
  {
    'Id': 1135,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Productos de aseo y cosméticos',
    'IdIndustry': 122,
  },
  {
    'Id': 1118,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Productos de caucho',
    'IdIndustry': 118,
  },
  {
    'Id': 1103,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Productos de madera',
    'IdIndustry': 115,
  },
  {
    'Id': 1115,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Productos de metal',
    'IdIndustry': 117,
  },
  {
    'Id': 1131,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Productos de papel y cartón',
    'IdIndustry': 121,
  },
  {
    'Id': 1119,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Productos de plástico',
    'IdIndustry': 118,
  },
  {
    'Id': 1136,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Químicos básicos',
    'IdIndustry': 122,
  },
  {
    'Id': 1137,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Químicos industriales y diversos',
    'IdIndustry': 122,
  },
  {
    'Id': 1110,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Radio',
    'IdIndustry': 116,
  },
  {
    'Id': 1022,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Reaseguradores',
    'IdIndustry': 103,
  },
  {
    'Id': 1087,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Relaciones exteriores',
    'IdIndustry': 113,
  },
  {
    'Id': 1127,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Relaciones públicas',
    'IdIndustry': 120,
  },
  {
    'Id': 1190,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Reparación naval',
    'IdIndustry': 131,
  },
  {
    'Id': 1148,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Restaurantes',
    'IdIndustry': 124,
  },
  {
    'Id': 1109,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Revistas',
    'IdIndustry': 116,
  },
  {
    'Id': 1088,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Salud, trabajo y seguridad social',
    'IdIndustry': 113,
  },
  {
    'Id': 1145,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Seguridad social',
    'IdIndustry': 123,
  },
  {
    'Id': 1153,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Servicios de aseo',
    'IdIndustry': 124,
  },
  {
    'Id': 1164,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Servicios de telecomunicaciones',
    'IdIndustry': 126,
  },
  {
    'Id': 1098,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Servicios financieros',
    'IdIndustry': 114,
  },
  {
    'Id': 1144,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Servicios hospitalarios, médicos u odontológicos',
    'IdIndustry': 123,
  },
  {
    'Id': 1061,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Servicios petroleros',
    'IdIndustry': 111,
  },
  {
    'Id': 1089,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Servicios públicos',
    'IdIndustry': 113,
  },
  {
    'Id': 1149,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Servicios Públicos',
    'IdIndustry': 124,
  },
  {
    'Id': 1116,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Siderurgia',
    'IdIndustry': 117,
  },
  {
    'Id': 1194,
    'DeletedKey': 1194,
    'IsUndefinedValue': true,
    'Name': 'Sin Definir',
    'IdIndustry': 133,
  },
  {
    'Id': 1030,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Supermercados',
    'IdIndustry': 105,
  },
  {
    'Id': 1027,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Tabaco',
    'IdIndustry': 104,
  },
  {
    'Id': 1180,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Talleres',
    'IdIndustry': 129,
  },
  {
    'Id': 1099,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Tarjetas de crédito',
    'IdIndustry': 114,
  },
  {
    'Id': 1111,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Televisión',
    'IdIndustry': 116,
  },
  {
    'Id': 1047,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Temporales / Dotación de personal',
    'IdIndustry': 107,
  },
  {
    'Id': 1173,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Terrestre',
    'IdIndustry': 128,
  },
  {
    'Id': 1169,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Textiles',
    'IdIndustry': 127,
  },
  {
    'Id': 1032,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Tiendas',
    'IdIndustry': 105,
  },
  {
    'Id': 1090,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Transporte',
    'IdIndustry': 113,
  },
  {
    'Id': 1151,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Turismo',
    'IdIndustry': 124,
  },
  {
    'Id': 1055,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Universidades',
    'IdIndustry': 110,
  },
  {
    'Id': 1174,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Valores',
    'IdIndustry': 128,
  },
  {
    'Id': 1120,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Vidrio - Construcción',
    'IdIndustry': 119,
  },
  {
    'Id': 1121,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Vidrio - Vehículos',
    'IdIndustry': 119,
  },
  {
    'Id': 1152,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Vigilancia y seguridad',
    'IdIndustry': 124,
  },
  {
    'Id': 1184,
    'DeletedKey': null,
    'IsUndefinedValue': false,
    'Name': 'Vivienda – Inmobiliaria',
    'IdIndustry': 106,
  },
];

export default SelectSector;
