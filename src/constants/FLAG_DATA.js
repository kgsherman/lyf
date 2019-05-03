import { NORTH_AMERICA, SOUTH_AMERICA, EUROPE, AFRICA, ASIA, OCEANIA, MIDDLE_EAST, CARIBBEAN } from './regions';

const FLAG_DATA = [
  {
    index: 0,
    code: 'AF',
    name: 'Afghanistan',
    url: 'flags/Flag_of_Afghanistan.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    index: 1,
    code: 'AL',
    name: 'Albania',
    url: 'flags/Flag_of_Albania.svg',
    regions: [EUROPE]
  },
  {
    index: 2,
    code: 'DZ',
    name: 'Algeria',
    url: 'flags/Flag_of_Algeria.svg',
    regions: [AFRICA]
  },
  {
    index: 3,
    code: 'AD',
    name: 'Andorra',
    url: 'flags/Flag_of_Andorra.svg',
    regions: [EUROPE]
  },
  {
    index: 4,
    code: 'AO',
    name: 'Angola',
    url: 'flags/Flag_of_Angola.svg',
    regions: [AFRICA]
  },
  {
    index: 5,
    code: 'AG',
    name: 'Antigua and Barbuda',
    url: 'flags/Flag_of_Antigua_and_Barbuda.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    index: 6,
    code: 'AR',
    name: 'Argentina',
    url: 'flags/Flag_of_Argentina.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    index: 7,
    code: 'AM',
    name: 'Armenia',
    url: 'flags/Flag_of_Armenia.svg',
    regions: [ASIA]
  },
  {
    index: 8,
    code: 'AU',
    name: 'Australia',
    url: 'flags/Flag_of_Australia_%28converted%29.svg',
    accepts: ['Straya', 'Oz'],
    regions: [OCEANIA]
  },
  {
    index: 9,
    code: 'AT',
    name: 'Austria',
    url: 'flags/Flag_of_Austria.svg',
    regions: [EUROPE]
  },
  {
    index: 10,
    code: 'AZ',
    name: 'Azerbaijan',
    url: 'flags/Flag_of_Azerbaijan.svg',
    regions: [ASIA]
  },
  {
    index: 11,
    code: 'BS',
    name: 'Bahamas',
    url: 'flags/Flag_of_the_Bahamas.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    index: 12,
    code: 'BH',
    name: 'Bahrain',
    url: 'flags/Flag_of_Bahrain.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    index: 13,
    code: 'BD',
    name: 'Bangladesh',
    url: 'flags/Flag_of_Bangladesh.svg',
    regions: [ASIA]
  },
  {
    index: 14,
    code: 'BB',
    name: 'Barbados',
    url: 'flags/Flag_of_Barbados.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    index: 15,
    code: 'BY',
    name: 'Belarus',
    url: 'flags/Flag_of_Belarus.svg',
    regions: [EUROPE]
  },
  {
    index: 16,
    code: 'BE',
    name: 'Belgium',
    url: 'flags/Flag_of_Belgium_%28civil%29.svg',
    regions: [EUROPE]
  },
  {
    index: 17,
    code: 'BZ',
    name: 'Belize',
    url: 'flags/Flag_of_Belize.svg',
    regions: [NORTH_AMERICA]
  },
  {
    index: 18,
    code: 'BJ',
    name: 'Benin',
    url: 'flags/Flag_of_Benin.svg',
    regions: [AFRICA]
  },
  {
    index: 19,
    code: 'BT',
    name: 'Bhutan',
    url: 'flags/Flag_of_Bhutan.svg',
    regions: [ASIA]
  },
  {
    index: 20,
    code: 'BO',
    name: 'Bolivia',
    url: 'flags/Flag_of_Bolivia_%28state%29.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    index: 21,
    code: 'BA',
    name: 'Bosnia and Herzegovina',
    url: 'flags/Flag_of_Bosnia_and_Herzegovina.svg',
    accepts: ['Bosnia'],
    regions: [EUROPE]
  },
  {
    index: 22,
    code: 'BW',
    name: 'Botswana',
    url: 'flags/Flag_of_Botswana.svg',
    regions: [AFRICA]
  },
  {
    index: 23,
    code: 'BR',
    name: 'Brazil',
    url: 'flags/Flag_of_Brazil.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    index: 24,
    code: 'BN',
    name: 'Brunei',
    url: 'flags/Flag_of_Brunei.svg',
    regions: [ASIA]
  },
  {
    index: 25,
    code: 'BG',
    name: 'Bulgaria',
    url: 'flags/Flag_of_Bulgaria.svg',
    regions: [EUROPE]
  },
  {
    index: 26,
    code: 'BF',
    name: 'Burkina Faso',
    url: 'flags/Flag_of_Burkina_Faso.svg',
    regions: [AFRICA]
  },
  {
    index: 27,
    code: 'BI',
    name: 'Burundi',
    url: 'flags/Flag_of_Burundi.svg',
    regions: [AFRICA]
  },
  {
    index: 28,
    code: 'KH',
    name: 'Cambodia',
    url: 'flags/Flag_of_Cambodia.svg',
    regions: [ASIA]
  },
  {
    index: 29,
    code: 'CM',
    name: 'Cameroon',
    url: 'flags/Flag_of_Cameroon.svg',
    regions: [AFRICA]
  },
  {
    index: 30,
    code: 'CA',
    name: 'Canada',
    url: 'flags/Flag_of_Canada.svg',
    regions: [NORTH_AMERICA]
  },
  {
    index: 31,
    code: 'CV',
    name: 'Cape Verde',
    url: 'flags/Flag_of_Cape_Verde.svg',
    accepts: ['Cabo Verde'],
    regions: [AFRICA]
  },
  {
    index: 32,
    code: 'CF',
    name: 'Central African Republic',
    url: 'flags/Flag_of_the_Central_African_Republic.svg',
    accepts: ['CAR'],
    regions: [AFRICA]
  },
  {
    index: 33,
    code: 'TD',
    name: 'Chad',
    url: 'flags/Flag_of_Chad.svg',
    regions: [AFRICA]
  },
  {
    index: 34,
    code: 'CL',
    name: 'Chile',
    url: 'flags/Flag_of_Chile.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    index: 35,
    code: 'CN',
    name: 'China',
    url: 'flags/Flag_of_the_People%27s_Republic_of_China.svg',
    accepts: ["People's Republic of China"],
    regions: [ASIA]
  },
  {
    index: 36,
    code: 'CO',
    name: 'Colombia',
    url: 'flags/Flag_of_Colombia.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    index: 37,
    code: 'KM',
    name: 'Comoros',
    url: 'flags/Flag_of_the_Comoros.svg',
    regions: [AFRICA]
  },
  {
    index: 38,
    code: 'CD',
    name: 'Democratic Republic of the Congo',
    url: 'flags/Flag_of_the_Democratic_Republic_of_the_Congo.svg',
    accepts: ['DRC'],
    regions: [AFRICA]
  },
  {
    index: 39,
    code: 'CG',
    name: 'Republic of the Congo',
    url: 'flags/Flag_of_the_Republic_of_the_Congo.svg',
    accepts: ['Congo'],
    regions: [AFRICA]
  },
  {
    index: 40,
    code: 'CR',
    name: 'Costa Rica',
    url: 'flags/Flag_of_Costa_Rica.svg',
    regions: [NORTH_AMERICA]
  },
  {
    index: 41,
    code: 'HR',
    name: 'Croatia',
    url: 'flags/Flag_of_Croatia.svg',
    regions: [EUROPE]
  },
  {
    index: 42,
    code: 'CU',
    name: 'Cuba',
    url: 'flags/Flag_of_Cuba.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    index: 43,
    code: 'CY',
    name: 'Cyprus',
    url: 'flags/Flag_of_Cyprus.svg',
    regions: [EUROPE]
  },
  {
    index: 44,
    code: 'CZ',
    name: 'Czech Republic',
    url: 'flags/Flag_of_the_Czech_Republic.svg',
    accepts: ['Czechia'],
    regions: [EUROPE]
  },
  {
    index: 45,
    code: 'DK',
    name: 'Denmark',
    url: 'flags/Flag_of_Denmark.svg',
    regions: [EUROPE]
  },
  {
    index: 46,
    code: 'DJ',
    name: 'Djibouti',
    url: 'flags/Flag_of_Djibouti.svg',
    regions: [AFRICA]
  },
  {
    index: 47,
    code: 'DM',
    name: 'Dominica',
    url: 'flags/Flag_of_Dominica.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    index: 48,
    code: 'DO',
    name: 'Dominican Republic',
    url: 'flags/Flag_of_the_Dominican_Republic.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    index: 49,
    code: 'TL',
    name: 'East Timor',
    url: 'flags/Flag_of_East_Timor.svg',
    accepts: ['Timor Leste'],
    regions: [ASIA]
  },
  {
    index: 50,
    code: 'EC',
    name: 'Ecuador',
    url: 'flags/Flag_of_Ecuador.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    index: 51,
    code: 'EG',
    name: 'Egypt',
    url: 'flags/Flag_of_Egypt.svg',
    regions: [AFRICA]
  },
  {
    index: 52,
    code: 'SV',
    name: 'El Salvador',
    url: 'flags/Flag_of_El_Salvador.svg',
    regions: [NORTH_AMERICA]
  },
  {
    index: 53,
    code: 'GQ',
    name: 'Equatorial Guinea',
    url: 'flags/Flag_of_Equatorial_Guinea.svg',
    regions: [AFRICA]
  },
  {
    index: 54,
    code: 'ER',
    name: 'Eritrea',
    url: 'flags/Flag_of_Eritrea.svg',
    regions: [AFRICA]
  },
  {
    index: 55,
    code: 'EE',
    name: 'Estonia',
    url: 'flags/Flag_of_Estonia.svg',
    regions: [EUROPE]
  },
  {
    index: 56,
    code: 'ET',
    name: 'Ethiopia',
    url: 'flags/Flag_of_Ethiopia.svg',
    regions: [AFRICA]
  },
  {
    index: 57,
    code: 'FJ',
    name: 'Fiji',
    url: 'flags/Flag_of_Fiji.svg',
    regions: [OCEANIA]
  },
  {
    index: 58,
    code: 'FI',
    name: 'Finland',
    url: 'flags/Flag_of_Finland.svg',
    regions: [EUROPE]
  },
  {
    index: 59,
    code: 'FR',
    name: 'France',
    url: 'flags/Flag_of_France.svg',
    regions: [EUROPE]
  },
  {
    index: 60,
    code: 'GA',
    name: 'Gabon',
    url: 'flags/Flag_of_Gabon.svg',
    regions: [AFRICA]
  },
  {
    index: 61,
    code: 'GM',
    name: 'Gambia',
    url: 'flags/Flag_of_The_Gambia.svg',
    regions: [AFRICA]
  },
  {
    index: 62,
    code: 'GE',
    name: 'Georgia',
    url: 'flags/Flag_of_Georgia.svg',
    regions: [ASIA]
  },
  {
    index: 63,
    code: 'DE',
    name: 'Germany',
    url: 'flags/Flag_of_Germany.svg',
    regions: [EUROPE]
  },
  {
    index: 64,
    code: 'GH',
    name: 'Ghana',
    url: 'flags/Flag_of_Ghana.svg',
    regions: [AFRICA]
  },
  {
    index: 65,
    code: 'GR',
    name: 'Greece',
    url: 'flags/Flag_of_Greece.svg',
    regions: [EUROPE]
  },
  {
    index: 66,
    code: 'GD',
    name: 'Grenada',
    url: 'flags/Flag_of_Grenada.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    index: 67,
    code: 'GT',
    name: 'Guatemala',
    url: 'flags/Flag_of_Guatemala.svg',
    regions: [NORTH_AMERICA]
  },
  {
    index: 68,
    code: 'GN',
    name: 'Guinea',
    url: 'flags/Flag_of_Guinea.svg',
    regions: [AFRICA]
  },
  {
    index: 69,
    code: 'GW',
    name: 'Guinea-Bissau',
    url: 'flags/Flag_of_Guinea-Bissau.svg',
    regions: [AFRICA]
  },
  {
    index: 70,
    code: 'GY',
    name: 'Guyana',
    url: 'flags/Flag_of_Guyana.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    index: 71,
    code: 'HT',
    name: 'Haiti',
    url: 'flags/Flag_of_Haiti.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    index: 72,
    code: 'HN',
    name: 'Honduras',
    url: 'flags/Flag_of_Honduras.svg',
    regions: [NORTH_AMERICA]
  },
  {
    index: 73,
    code: 'HU',
    name: 'Hungary',
    url: 'flags/Flag_of_Hungary.svg',
    regions: [EUROPE]
  },
  {
    index: 74,
    code: 'IS',
    name: 'Iceland',
    url: 'flags/Flag_of_Iceland.svg',
    regions: [EUROPE]
  },
  {
    index: 75,
    code: 'IN',
    name: 'India',
    url: 'flags/Flag_of_India.svg',
    regions: [ASIA]
  },
  {
    index: 76,
    code: 'ID',
    name: 'Indonesia',
    url: 'flags/Flag_of_Indonesia.svg',
    regions: [ASIA]
  },
  {
    index: 77,
    code: 'IR',
    name: 'Iran',
    url: 'flags/Flag_of_Iran.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    index: 78,
    code: 'IQ',
    name: 'Iraq',
    url: 'flags/Flag_of_Iraq.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    index: 79,
    code: 'IE',
    name: 'Ireland',
    url: 'flags/Flag_of_Ireland.svg',
    regions: [EUROPE]
  },
  {
    index: 80,
    code: 'IL',
    name: 'Israel',
    url: 'flags/Flag_of_Israel.svg',
    regions: [ASIA]
  },
  {
    index: 81,
    code: 'IT',
    name: 'Italy',
    url: 'flags/Flag_of_Italy.svg',
    regions: [EUROPE]
  },
  {
    index: 82,
    code: 'CI',
    name: "Côte d'Ivoire",
    url: 'flags/Flag_of_C%C3%B4te_d%27Ivoire.svg',
    accepts: ['Ivory Coast', "Cote d'Ivoire"],
    regions: [AFRICA]
  },
  {
    index: 83,
    code: 'JM',
    name: 'Jamaica',
    url: 'flags/Flag_of_Jamaica.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    index: 84,
    code: 'JP',
    name: 'Japan',
    url: 'flags/Flag_of_Japan.svg',
    regions: [ASIA]
  },
  {
    index: 85,
    code: 'JO',
    name: 'Jordan',
    url: 'flags/Flag_of_Jordan.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    index: 86,
    code: 'KZ',
    name: 'Kazakhstan',
    url: 'flags/Flag_of_Kazakhstan.svg',
    regions: [ASIA]
  },
  {
    index: 87,
    code: 'KE',
    name: 'Kenya',
    url: 'flags/Flag_of_Kenya.svg',
    regions: [AFRICA]
  },
  {
    index: 88,
    code: 'KI',
    name: 'Kiribati',
    url: 'flags/Flag_of_Kiribati.svg',
    regions: [OCEANIA]
  },
  {
    index: 89,
    code: 'KP',
    name: 'North Korea',
    url: 'flags/Flag_of_North_Korea.svg',
    accepts: ["Democratic People's Republic of Korea", 'Best Korea', 'True Korea', 'Perfect Nation'],
    regions: [ASIA]
  },
  {
    index: 90,
    code: 'KR',
    name: 'South Korea',
    url: 'flags/Flag_of_South_Korea.svg',
    accepts: ['Republic of Korea'],
    regions: [ASIA]
  },
  {
    index: 91,
    code: 'KW',
    name: 'Kuwait',
    url: 'flags/Flag_of_Kuwait.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    index: 92,
    code: 'KG',
    name: 'Kyrgyzstan',
    url: 'flags/Flag_of_Kyrgyzstan.svg',
    regions: [ASIA]
  },
  {
    index: 93,
    code: 'LA',
    name: 'Laos',
    url: 'flags/Flag_of_Laos.svg',
    regions: [ASIA]
  },
  {
    index: 94,
    code: 'LV',
    name: 'Latvia',
    url: 'flags/Flag_of_Latvia.svg',
    regions: [EUROPE]
  },
  {
    index: 95,
    code: 'LB',
    name: 'Lebanon',
    url: 'flags/Flag_of_Lebanon.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    index: 96,
    code: 'LS',
    name: 'Lesotho',
    url: 'flags/Flag_of_Lesotho.svg',
    regions: [AFRICA]
  },
  {
    index: 97,
    code: 'LR',
    name: 'Liberia',
    url: 'flags/Flag_of_Liberia.svg',
    regions: [AFRICA]
  },
  {
    index: 98,
    code: 'LY',
    name: 'Libya',
    url: 'flags/Flag_of_Libya.svg',
    regions: [AFRICA]
  },
  {
    index: 99,
    code: 'LI',
    name: 'Liechtenstein',
    url: 'flags/Flag_of_Liechtenstein.svg',
    regions: [EUROPE]
  },
  {
    index: 100,
    code: 'LT',
    name: 'Lithuania',
    url: 'flags/Flag_of_Lithuania.svg',
    regions: [EUROPE]
  },
  {
    index: 101,
    code: 'LU',
    name: 'Luxembourg',
    url: 'flags/Flag_of_Luxembourg.svg',
    regions: [EUROPE]
  },
  {
    index: 102,
    code: 'MK',
    name: 'North Macedonia',
    url: 'flags/Flag_of_Macedonia.svg',
    accepts: ['Macedonia'],
    regions: [EUROPE]
  },
  {
    index: 103,
    code: 'MG',
    name: 'Madagascar',
    url: 'flags/Flag_of_Madagascar.svg',
    regions: [AFRICA]
  },
  {
    index: 104,
    code: 'MW',
    name: 'Malawi',
    url: 'flags/Flag_of_Malawi.svg',
    regions: [AFRICA]
  },
  {
    index: 105,
    code: 'MY',
    name: 'Malaysia',
    url: 'flags/Flag_of_Malaysia.svg',
    regions: [ASIA]
  },
  {
    index: 106,
    code: 'MV',
    name: 'Maldives',
    url: 'flags/Flag_of_Maldives.svg',
    regions: [ASIA]
  },
  {
    index: 107,
    code: 'ML',
    name: 'Mali',
    url: 'flags/Flag_of_Mali.svg',
    regions: [AFRICA]
  },
  {
    index: 108,
    code: 'MT',
    name: 'Malta',
    url: 'flags/Flag_of_Malta.svg',
    regions: [EUROPE]
  },
  {
    index: 109,
    code: 'MH',
    name: 'Marshall Islands',
    url: 'flags/Flag_of_the_Marshall_Islands.svg',
    regions: [OCEANIA]
  },
  {
    index: 110,
    code: 'MR',
    name: 'Mauritania',
    url: 'flags/Flag_of_Mauritania.svg',
    regions: [AFRICA]
  },
  {
    index: 111,
    code: 'MU',
    name: 'Mauritius',
    url: 'flags/Flag_of_Mauritius.svg',
    regions: [AFRICA]
  },
  {
    index: 112,
    code: 'MX',
    name: 'Mexico',
    url: 'flags/Flag_of_Mexico.svg',
    regions: [NORTH_AMERICA]
  },
  {
    index: 113,
    code: 'FM',
    name: 'Micronesia',
    url: 'flags/Flag_of_the_Federated_States_of_Micronesia.svg',
    regions: [OCEANIA]
  },
  {
    index: 114,
    code: 'MD',
    name: 'Moldova',
    url: 'flags/Flag_of_Moldova.svg',
    regions: [EUROPE]
  },
  {
    index: 115,
    code: 'MC',
    name: 'Monaco',
    url: 'flags/Flag_of_Monaco.svg',
    regions: [EUROPE]
  },
  {
    index: 116,
    code: 'MN',
    name: 'Mongolia',
    url: 'flags/Flag_of_Mongolia.svg',
    regions: [ASIA]
  },
  {
    index: 117,
    code: 'ME',
    name: 'Montenegro',
    url: 'flags/Flag_of_Montenegro.svg',
    regions: [EUROPE]
  },
  {
    index: 118,
    code: 'MA',
    name: 'Morocco',
    url: 'flags/Flag_of_Morocco.svg',
    regions: [AFRICA]
  },
  {
    index: 119,
    code: 'MZ',
    name: 'Mozambique',
    url: 'flags/Flag_of_Mozambique.svg',
    regions: [AFRICA]
  },
  {
    index: 120,
    code: 'MM',
    name: 'Myanmar',
    url: 'flags/Flag_of_Myanmar.svg',
    accepts: ['Burma'],
    regions: [ASIA]
  },
  {
    index: 121,
    code: 'NA',
    name: 'Namibia',
    url: 'flags/Flag_of_Namibia.svg',
    regions: [AFRICA]
  },
  {
    index: 122,
    code: 'NR',
    name: 'Nauru',
    url: 'flags/Flag_of_Nauru.svg',
    regions: [OCEANIA]
  },
  {
    index: 123,
    code: 'NP',
    name: 'Nepal',
    url: 'flags/Flag_of_Nepal.svg',
    regions: [ASIA]
  },
  {
    index: 124,
    code: 'NL',
    name: 'Netherlands',
    url: 'flags/Flag_of_the_Netherlands.svg',
    regions: [EUROPE]
  },
  {
    index: 125,
    code: 'NZ',
    name: 'New Zealand',
    url: 'flags/Flag_of_New_Zealand.svg',
    regions: [OCEANIA]
  },
  {
    index: 126,
    code: 'NI',
    name: 'Nicaragua',
    url: 'flags/Flag_of_Nicaragua.svg',
    regions: [NORTH_AMERICA]
  },
  {
    index: 127,
    code: 'NE',
    name: 'Niger',
    url: 'flags/Flag_of_Niger.svg',
    regions: [AFRICA]
  },
  {
    index: 128,
    code: 'NG',
    name: 'Nigeria',
    url: 'flags/Flag_of_Nigeria.svg',
    regions: [AFRICA]
  },
  {
    index: 129,
    code: 'NO',
    name: 'Norway',
    url: 'flags/Flag_of_Norway.svg',
    regions: [EUROPE]
  },
  {
    index: 130,
    code: 'OM',
    name: 'Oman',
    url: 'flags/Flag_of_Oman.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    index: 131,
    code: 'PK',
    name: 'Pakistan',
    url: 'flags/Flag_of_Pakistan.svg',
    regions: [ASIA]
  },
  {
    index: 132,
    code: 'PW',
    name: 'Palau',
    url: 'flags/Flag_of_Palau.svg',
    regions: [OCEANIA]
  },
  {
    index: 133,
    code: 'PS',
    name: 'Palestine',
    url: 'flags/Flag_of_Palestine.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    index: 134,
    code: 'PA',
    name: 'Panama',
    url: 'flags/Flag_of_Panama.svg',
    regions: [NORTH_AMERICA]
  },
  {
    index: 135,
    code: 'PG',
    name: 'Papua New Guinea',
    url: 'flags/Flag_of_Papua_New_Guinea.svg',
    regions: [OCEANIA]
  },
  {
    index: 136,
    code: 'PY',
    name: 'Paraguay',
    url: 'flags/Flag_of_Paraguay.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    index: 137,
    code: 'PE',
    name: 'Peru',
    url: 'flags/Flag_of_Peru.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    index: 138,
    code: 'PH',
    name: 'Philippines',
    url: 'flags/Flag_of_the_Philippines.svg',
    regions: [ASIA]
  },
  {
    index: 139,
    code: 'PL',
    name: 'Poland',
    url: 'flags/Flag_of_Poland.svg',
    regions: [EUROPE]
  },
  {
    index: 140,
    code: 'PT',
    name: 'Portugal',
    url: 'flags/Flag_of_Portugal.svg',
    regions: [EUROPE]
  },
  {
    index: 141,
    code: 'QA',
    name: 'Qatar',
    url: 'flags/Flag_of_Qatar.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    index: 142,
    code: 'RO',
    name: 'Romania',
    url: 'flags/Flag_of_Romania.svg',
    regions: [EUROPE]
  },
  {
    index: 143,
    code: 'RU',
    name: 'Russia',
    url: 'flags/Flag_of_Russia.svg',
    regions: [EUROPE, ASIA]
  },
  {
    index: 144,
    code: 'RW',
    name: 'Rwanda',
    url: 'flags/Flag_of_Rwanda.svg',
    regions: [AFRICA]
  },
  {
    index: 145,
    code: 'KN',
    name: 'Saint Kitts and Nevis',
    url: 'flags/Flag_of_Saint_Kitts_and_Nevis.svg',
    accepts: ['St Kitts and Nevis'],
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    index: 146,
    code: 'LC',
    name: 'Saint Lucia',
    url: 'flags/Flag_of_Saint_Lucia.svg',
    accepts: ['St Lucia'],
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    index: 147,
    code: 'VC',
    name: 'Saint Vincent and the Grenadines',
    url: 'flags/Flag_of_Saint_Vincent_and_the_Grenadines.svg',
    accepts: ['St Vincent and the Grenadines'],
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    index: 148,
    code: 'WS',
    name: 'Samoa',
    url: 'flags/Flag_of_Samoa.svg',
    regions: [OCEANIA]
  },
  {
    index: 149,
    code: 'SM',
    name: 'San Marino',
    url: 'flags/Flag_of_San_Marino.svg',
    regions: [EUROPE]
  },
  {
    index: 150,
    code: 'ST',
    name: 'Sao Tome and Principe',
    url: 'flags/Flag_of_Sao_Tome_and_Principe.svg',
    regions: [AFRICA]
  },
  {
    index: 151,
    code: 'SA',
    name: 'Saudi Arabia',
    url: 'flags/Flag_of_Saudi_Arabia.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    index: 152,
    code: 'SN',
    name: 'Senegal',
    url: 'flags/Flag_of_Senegal.svg',
    regions: [AFRICA]
  },
  {
    index: 153,
    code: 'RS',
    name: 'Serbia',
    url: 'flags/Flag_of_Serbia.svg',
    regions: [EUROPE]
  },
  {
    index: 154,
    code: 'SC',
    name: 'Seychelles',
    url: 'flags/Flag_of_Seychelles.svg',
    accepts: ['Seychelle Islands'],
    regions: [OCEANIA]
  },
  {
    index: 155,
    code: 'SL',
    name: 'Sierra Leone',
    url: 'flags/Flag_of_Sierra_Leone.svg',
    regions: [AFRICA]
  },
  {
    index: 156,
    code: 'SG',
    name: 'Singapore',
    url: 'flags/Flag_of_Singapore.svg',
    regions: [ASIA]
  },
  {
    index: 157,
    code: 'SK',
    name: 'Slovakia',
    url: 'flags/Flag_of_Slovakia.svg',
    regions: [EUROPE]
  },
  {
    index: 158,
    code: 'SI',
    name: 'Slovenia',
    url: 'flags/Flag_of_Slovenia.svg',
    regions: [EUROPE]
  },
  {
    index: 159,
    code: 'sb',
    name: 'Solomon Islands',
    url: 'flags/Flag_of_the_Solomon_Islands.svg',
    regions: [OCEANIA]
  },
  {
    index: 160,
    code: 'so',
    name: 'Somalia',
    url: 'flags/Flag_of_Somalia.svg',
    regions: [AFRICA]
  },
  {
    index: 161,
    code: 'ZA',
    name: 'South Africa',
    url: 'flags/Flag_of_South_Africa.svg',
    regions: [AFRICA]
  },
  {
    index: 162,
    code: 'SS',
    name: 'South Sudan',
    url: 'flags/Flag_of_South_Sudan.svg',
    regions: [AFRICA]
  },
  {
    index: 163,
    code: 'ES',
    name: 'Spain',
    url: 'flags/Flag_of_Spain.svg',
    regions: [EUROPE]
  },
  {
    index: 164,
    code: 'LK',
    name: 'Sri Lanka',
    url: 'flags/Flag_of_Sri_Lanka.svg',
    regions: [ASIA]
  },
  {
    index: 165,
    code: 'SD',
    name: 'Sudan',
    url: 'flags/Flag_of_Sudan.svg',
    regions: [AFRICA]
  },
  {
    index: 166,
    code: 'SR',
    name: 'Suriname',
    url: 'flags/Flag_of_Suriname.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    index: 167,
    code: 'SZ',
    name: 'Eswatini',
    url: 'flags/Flag_of_Swaziland.svg',
    accepts: ['Swaziland'],
    regions: [AFRICA]
  },
  {
    index: 168,
    code: 'SE',
    name: 'Sweden',
    url: 'flags/Flag_of_Sweden.svg',
    regions: [EUROPE]
  },
  {
    index: 169,
    code: 'CH',
    name: 'Switzerland',
    url: 'flags/Flag_of_Switzerland_%28Pantone%29.svg',
    regions: [EUROPE]
  },
  {
    index: 170,
    code: 'SY',
    name: 'Syria',
    url: 'flags/Flag_of_Syria.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    index: 171,
    code: 'TJ',
    name: 'Tajikistan',
    url: 'flags/Flag_of_Tajikistan.svg',
    regions: [ASIA]
  },
  {
    index: 172,
    code: 'TZ',
    name: 'Tanzania',
    url: 'flags/Flag_of_Tanzania.svg',
    regions: [AFRICA]
  },
  {
    index: 173,
    code: 'TH',
    name: 'Thailand',
    url: 'flags/Flag_of_Thailand.svg',
    regions: [ASIA]
  },
  {
    index: 174,
    code: 'TG',
    name: 'Togo',
    url: 'flags/Flag_of_Togo.svg',
    regions: [AFRICA]
  },
  {
    index: 175,
    code: 'TO',
    name: 'Tonga',
    url: 'flags/Flag_of_Tonga.svg',
    regions: [OCEANIA]
  },
  {
    index: 176,
    code: 'TT',
    name: 'Trinidad and Tobago',
    url: 'flags/Flag_of_Trinidad_and_Tobago.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    index: 177,
    code: 'TN',
    name: 'Tunisia',
    url: 'flags/Flag_of_Tunisia.svg',
    regions: [AFRICA]
  },
  {
    index: 178,
    code: 'TR',
    name: 'Turkey',
    url: 'flags/Flag_of_Turkey.svg',
    regions: [EUROPE, ASIA, MIDDLE_EAST]
  },
  {
    index: 179,
    code: 'TM',
    name: 'Turkmenistan',
    url: 'flags/Flag_of_Turkmenistan.svg',
    regions: [ASIA]
  },
  {
    index: 180,
    code: 'TV',
    name: 'Tuvalu',
    url: 'flags/Flag_of_Tuvalu.svg',
    regions: [OCEANIA]
  },
  {
    index: 181,
    code: 'UG',
    name: 'Uganda',
    url: 'flags/Flag_of_Uganda.svg',
    regions: [AFRICA]
  },
  {
    index: 182,
    code: 'UA',
    name: 'Ukraine',
    url: 'flags/Flag_of_Ukraine.svg',
    regions: [EUROPE]
  },
  {
    index: 183,
    code: 'AE',
    name: 'United Arab Emirates',
    url: 'flags/Flag_of_the_United_Arab_Emirates.svg',
    accepts: ['UAE'],
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    index: 184,
    code: 'GB',
    name: 'United Kingdom',
    url: 'flags/Flag_of_the_United_Kingdom.svg',
    accepts: ['UK'],
    regions: [EUROPE]
  },
  {
    index: 185,
    code: 'US',
    name: 'United States',
    url: 'flags/Flag_of_the_United_States.svg',
    accepts: ['US', 'USA', 'United States of America', 'Murica'],
    regions: [NORTH_AMERICA]
  },
  {
    index: 186,
    code: 'UY',
    name: 'Uruguay',
    url: 'flags/Flag_of_Uruguay.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    index: 187,
    code: 'UZ',
    name: 'Uzbekistan',
    url: 'flags/Flag_of_Uzbekistan.svg',
    regions: [ASIA]
  },
  {
    index: 188,
    code: 'VU',
    name: 'Vanuatu',
    url: 'flags/Flag_of_Vanuatu.svg',
    regions: [OCEANIA]
  },
  {
    index: 189,
    code: 'VA',
    name: 'Vatican City',
    url: 'flags/Flag_of_the_Vatican_City.svg',
    accepts: ['Vatican', 'Holy See'],
    regions: [EUROPE]
  },
  {
    index: 190,
    code: 'VE',
    name: 'Venezuela',
    url: 'flags/Flag_of_Venezuela.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    index: 191,
    code: 'VN',
    name: 'Vietnam',
    url: 'flags/Flag_of_Vietnam.svg',
    regions: [ASIA]
  },
  {
    index: 192,
    code: 'YE',
    name: 'Yemen',
    url: 'flags/Flag_of_Yemen.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    index: 193,
    code: 'ZM',
    name: 'Zambia',
    url: 'flags/Flag_of_Zambia.svg',
    regions: [AFRICA]
  },
  {
    index: 194,
    code: 'ZW',
    name: 'Zimbabwe',
    url: 'flags/Flag_of_Zimbabwe.svg',
    regions: [AFRICA]
  }
];

export const FLAG_DATA_NON_UN = [
  {
    index: 195,
    code: '',
    name: 'Abkhazia',
    url: 'flags/Flag_of_Abkhazia.svg'
  },
  {
    index: 196,
    code: '',
    name: 'Kosovo',
    url: 'flags/Flag_of_Kosovo.svg'
  },
  {
    index: 197,
    code: '',
    name: 'Taiwan',
    url: 'flags/Flag_of_the_Republic_of_China.svg',
    accepts: ['Republic of China', 'RoC']
  }
];

export const FLAG_DATA_UK = [
  {
    index: 198,
    code: '',
    name: 'England',
    url: 'flags/Flag_of_England.svg'
  },
  {
    index: 199,
    code: '',
    name: 'Scotland',
    url: 'flags/Flag_of_Scotland.svg'
  },
  {
    index: 200,
    code: '',
    name: 'Wales',
    url: 'flags/Flag_of_Wales_2.svg'
  }
];

export default FLAG_DATA;
