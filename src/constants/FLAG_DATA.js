import { NORTH_AMERICA, SOUTH_AMERICA, EUROPE, AFRICA, ASIA, OCEANIA, MIDDLE_EAST, CARIBBEAN } from './regions';

const FLAG_DATA = [
  {
    code: 'AF',
    name: 'Afghanistan',
    url: 'flags/Flag_of_Afghanistan.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    code: 'AL',
    name: 'Albania',
    url: 'flags/Flag_of_Albania.svg',
    regions: [EUROPE]
  },
  {
    code: 'DZ',
    name: 'Algeria',
    url: 'flags/Flag_of_Algeria.svg',
    regions: [AFRICA]
  },
  {
    code: 'AD',
    name: 'Andorra',
    url: 'flags/Flag_of_Andorra.svg',
    regions: [EUROPE]
  },
  {
    code: 'AO',
    name: 'Angola',
    url: 'flags/Flag_of_Angola.svg',
    regions: [AFRICA]
  },
  {
    code: 'AG',
    name: 'Antigua and Barbuda',
    url: 'flags/Flag_of_Antigua_and_Barbuda.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    code: 'AR',
    name: 'Argentina',
    url: 'flags/Flag_of_Argentina.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    code: 'AM',
    name: 'Armenia',
    url: 'flags/Flag_of_Armenia.svg',
    regions: [ASIA]
  },
  {
    code: 'AU',
    name: 'Australia',
    url: 'flags/Flag_of_Australia_%28converted%29.svg',
    accepts: ['Straya', 'Oz'],
    regions: [OCEANIA]
  },
  {
    code: 'AT',
    name: 'Austria',
    url: 'flags/Flag_of_Austria.svg',
    regions: [EUROPE]
  },
  {
    code: 'AZ',
    name: 'Azerbaijan',
    url: 'flags/Flag_of_Azerbaijan.svg',
    regions: [ASIA]
  },
  {
    code: 'BS',
    name: 'Bahamas',
    url: 'flags/Flag_of_the_Bahamas.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    code: 'BH',
    name: 'Bahrain',
    url: 'flags/Flag_of_Bahrain.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    code: 'BD',
    name: 'Bangladesh',
    url: 'flags/Flag_of_Bangladesh.svg',
    regions: [ASIA]
  },
  {
    code: 'BB',
    name: 'Barbados',
    url: 'flags/Flag_of_Barbados.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    code: 'BY',
    name: 'Belarus',
    url: 'flags/Flag_of_Belarus.svg',
    regions: [EUROPE]
  },
  {
    code: 'BE',
    name: 'Belgium',
    url: 'flags/Flag_of_Belgium_%28civil%29.svg',
    regions: [EUROPE]
  },
  {
    code: 'BZ',
    name: 'Belize',
    url: 'flags/Flag_of_Belize.svg',
    regions: [NORTH_AMERICA]
  },
  {
    code: 'BJ',
    name: 'Benin',
    url: 'flags/Flag_of_Benin.svg',
    regions: [AFRICA]
  },
  {
    code: 'BT',
    name: 'Bhutan',
    url: 'flags/Flag_of_Bhutan.svg',
    regions: [ASIA]
  },
  {
    code: 'BO',
    name: 'Bolivia',
    url: 'flags/Flag_of_Bolivia_%28state%29.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    code: 'BA',
    name: 'Bosnia and Herzegovina',
    url: 'flags/Flag_of_Bosnia_and_Herzegovina.svg',
    accepts: ['Bosnia'],
    regions: [EUROPE]
  },
  {
    code: 'BW',
    name: 'Botswana',
    url: 'flags/Flag_of_Botswana.svg',
    regions: [AFRICA]
  },
  {
    code: 'BR',
    name: 'Brazil',
    url: 'flags/Flag_of_Brazil.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    code: 'BN',
    name: 'Brunei',
    url: 'flags/Flag_of_Brunei.svg',
    regions: [ASIA]
  },
  {
    code: 'BG',
    name: 'Bulgaria',
    url: 'flags/Flag_of_Bulgaria.svg',
    regions: [EUROPE]
  },
  {
    code: 'BF',
    name: 'Burkina Faso',
    url: 'flags/Flag_of_Burkina_Faso.svg',
    regions: [AFRICA]
  },
  {
    code: 'BI',
    name: 'Burundi',
    url: 'flags/Flag_of_Burundi.svg',
    regions: [AFRICA]
  },
  {
    code: 'KH',
    name: 'Cambodia',
    url: 'flags/Flag_of_Cambodia.svg',
    regions: [ASIA]
  },
  {
    code: 'CM',
    name: 'Cameroon',
    url: 'flags/Flag_of_Cameroon.svg',
    regions: [AFRICA]
  },
  {
    code: 'CA',
    name: 'Canada',
    url: 'flags/Flag_of_Canada.svg',
    regions: [NORTH_AMERICA]
  },
  {
    code: 'CV',
    name: 'Cape Verde',
    url: 'flags/Flag_of_Cape_Verde.svg',
    accepts: ['Cabo Verde'],
    regions: [AFRICA]
  },
  {
    code: 'CF',
    name: 'Central African Republic',
    url: 'flags/Flag_of_the_Central_African_Republic.svg',
    accepts: ['CAR'],
    regions: [AFRICA]
  },
  {
    code: 'TD',
    name: 'Chad',
    url: 'flags/Flag_of_Chad.svg',
    regions: [AFRICA]
  },
  {
    code: 'CL',
    name: 'Chile',
    url: 'flags/Flag_of_Chile.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    code: 'CN',
    name: 'China',
    url: 'flags/Flag_of_the_People%27s_Republic_of_China.svg',
    accepts: ["People's Republic of China"],
    regions: [ASIA]
  },
  {
    code: 'CO',
    name: 'Colombia',
    url: 'flags/Flag_of_Colombia.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    code: 'KM',
    name: 'Comoros',
    url: 'flags/Flag_of_the_Comoros.svg',
    regions: [AFRICA]
  },
  {
    code: 'CD',
    name: 'Democratic Republic of the Congo',
    url: 'flags/Flag_of_the_Democratic_Republic_of_the_Congo.svg',
    accepts: ['DRC'],
    regions: [AFRICA]
  },
  {
    code: 'CG',
    name: 'Republic of the Congo',
    url: 'flags/Flag_of_the_Republic_of_the_Congo.svg',
    accepts: ['Congo'],
    regions: [AFRICA]
  },
  {
    code: 'CR',
    name: 'Costa Rica',
    url: 'flags/Flag_of_Costa_Rica.svg',
    regions: [NORTH_AMERICA]
  },
  {
    code: 'HR',
    name: 'Croatia',
    url: 'flags/Flag_of_Croatia.svg',
    regions: [EUROPE]
  },
  {
    code: 'CU',
    name: 'Cuba',
    url: 'flags/Flag_of_Cuba.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    code: 'CY',
    name: 'Cyprus',
    url: 'flags/Flag_of_Cyprus.svg',
    regions: [EUROPE]
  },
  {
    code: 'CZ',
    name: 'Czech Republic',
    url: 'flags/Flag_of_the_Czech_Republic.svg',
    accepts: ['Czechia'],
    regions: [EUROPE]
  },
  {
    code: 'DK',
    name: 'Denmark',
    url: 'flags/Flag_of_Denmark.svg',
    regions: [EUROPE]
  },
  {
    code: 'DJ',
    name: 'Djibouti',
    url: 'flags/Flag_of_Djibouti.svg',
    regions: [AFRICA]
  },
  {
    code: 'DM',
    name: 'Dominica',
    url: 'flags/Flag_of_Dominica.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    code: 'DO',
    name: 'Dominican Republic',
    url: 'flags/Flag_of_the_Dominican_Republic.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    code: 'TL',
    name: 'East Timor',
    url: 'flags/Flag_of_East_Timor.svg',
    accepts: ['Timor Leste'],
    regions: [ASIA]
  },
  {
    code: 'EC',
    name: 'Ecuador',
    url: 'flags/Flag_of_Ecuador.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    code: 'EG',
    name: 'Egypt',
    url: 'flags/Flag_of_Egypt.svg',
    regions: [AFRICA]
  },
  {
    code: 'SV',
    name: 'El Salvador',
    url: 'flags/Flag_of_El_Salvador.svg',
    regions: [NORTH_AMERICA]
  },
  {
    code: 'GQ',
    name: 'Equatorial Guinea',
    url: 'flags/Flag_of_Equatorial_Guinea.svg',
    regions: [AFRICA]
  },
  {
    code: 'ER',
    name: 'Eritrea',
    url: 'flags/Flag_of_Eritrea.svg',
    regions: [AFRICA]
  },
  {
    code: 'EE',
    name: 'Estonia',
    url: 'flags/Flag_of_Estonia.svg',
    regions: [EUROPE]
  },
  {
    code: 'ET',
    name: 'Ethiopia',
    url: 'flags/Flag_of_Ethiopia.svg',
    regions: [AFRICA]
  },
  {
    code: 'FJ',
    name: 'Fiji',
    url: 'flags/Flag_of_Fiji.svg',
    regions: [OCEANIA]
  },
  {
    code: 'FI',
    name: 'Finland',
    url: 'flags/Flag_of_Finland.svg',
    regions: [EUROPE]
  },
  {
    code: 'FR',
    name: 'France',
    url: 'flags/Flag_of_France.svg',
    regions: [EUROPE]
  },
  {
    code: 'GA',
    name: 'Gabon',
    url: 'flags/Flag_of_Gabon.svg',
    regions: [AFRICA]
  },
  {
    code: 'GM',
    name: 'Gambia',
    url: 'flags/Flag_of_The_Gambia.svg',
    regions: [AFRICA]
  },
  {
    code: 'GE',
    name: 'Georgia',
    url: 'flags/Flag_of_Georgia.svg',
    regions: [ASIA]
  },
  {
    code: 'DE',
    name: 'Germany',
    url: 'flags/Flag_of_Germany.svg',
    regions: [EUROPE]
  },
  {
    code: 'GH',
    name: 'Ghana',
    url: 'flags/Flag_of_Ghana.svg',
    regions: [AFRICA]
  },
  {
    code: 'GR',
    name: 'Greece',
    url: 'flags/Flag_of_Greece.svg',
    regions: [EUROPE]
  },
  {
    code: 'GD',
    name: 'Grenada',
    url: 'flags/Flag_of_Grenada.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    code: 'GT',
    name: 'Guatemala',
    url: 'flags/Flag_of_Guatemala.svg',
    regions: [NORTH_AMERICA]
  },
  {
    code: 'GN',
    name: 'Guinea',
    url: 'flags/Flag_of_Guinea.svg',
    regions: [AFRICA]
  },
  {
    code: 'GW',
    name: 'Guinea-Bissau',
    url: 'flags/Flag_of_Guinea-Bissau.svg',
    regions: [AFRICA]
  },
  {
    code: 'GY',
    name: 'Guyana',
    url: 'flags/Flag_of_Guyana.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    code: 'HT',
    name: 'Haiti',
    url: 'flags/Flag_of_Haiti.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    code: 'HN',
    name: 'Honduras',
    url: 'flags/Flag_of_Honduras.svg',
    regions: [NORTH_AMERICA]
  },
  {
    code: 'HU',
    name: 'Hungary',
    url: 'flags/Flag_of_Hungary.svg',
    regions: [EUROPE]
  },
  {
    code: 'IS',
    name: 'Iceland',
    url: 'flags/Flag_of_Iceland.svg',
    regions: [EUROPE]
  },
  {
    code: 'IN',
    name: 'India',
    url: 'flags/Flag_of_India.svg',
    regions: [ASIA]
  },
  {
    code: 'ID',
    name: 'Indonesia',
    url: 'flags/Flag_of_Indonesia.svg',
    regions: [ASIA]
  },
  {
    code: 'IR',
    name: 'Iran',
    url: 'flags/Flag_of_Iran.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    code: 'IQ',
    name: 'Iraq',
    url: 'flags/Flag_of_Iraq.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    code: 'IE',
    name: 'Ireland',
    url: 'flags/Flag_of_Ireland.svg',
    regions: [EUROPE]
  },
  {
    code: 'IL',
    name: 'Israel',
    url: 'flags/Flag_of_Israel.svg',
    regions: [ASIA]
  },
  {
    code: 'IT',
    name: 'Italy',
    url: 'flags/Flag_of_Italy.svg',
    regions: [EUROPE]
  },
  {
    code: 'CI',
    name: "Côte d'Ivoire",
    url: 'flags/Flag_of_C%C3%B4te_d%27Ivoire.svg',
    accepts: ['Ivory Coast', "Cote d'Ivoire"],
    regions: [AFRICA]
  },
  {
    code: 'JM',
    name: 'Jamaica',
    url: 'flags/Flag_of_Jamaica.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    code: 'JP',
    name: 'Japan',
    url: 'flags/Flag_of_Japan.svg',
    regions: [ASIA]
  },
  {
    code: 'JO',
    name: 'Jordan',
    url: 'flags/Flag_of_Jordan.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    code: 'KZ',
    name: 'Kazakhstan',
    url: 'flags/Flag_of_Kazakhstan.svg',
    regions: [ASIA]
  },
  {
    code: 'KE',
    name: 'Kenya',
    url: 'flags/Flag_of_Kenya.svg',
    regions: [AFRICA]
  },
  {
    code: 'KI',
    name: 'Kiribati',
    url: 'flags/Flag_of_Kiribati.svg',
    regions: [OCEANIA]
  },
  {
    code: 'KP',
    name: 'North Korea',
    url: 'flags/Flag_of_North_Korea.svg',
    accepts: ["Democratic People's Republic of Korea", 'Best Korea', 'True Korea', 'Perfect Nation'],
    regions: [ASIA]
  },
  {
    code: 'KR',
    name: 'South Korea',
    url: 'flags/Flag_of_South_Korea.svg',
    accepts: ['Republic of Korea'],
    regions: [ASIA]
  },
  {
    code: 'KW',
    name: 'Kuwait',
    url: 'flags/Flag_of_Kuwait.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    code: 'KG',
    name: 'Kyrgyzstan',
    url: 'flags/Flag_of_Kyrgyzstan.svg',
    regions: [ASIA]
  },
  {
    code: 'LA',
    name: 'Laos',
    url: 'flags/Flag_of_Laos.svg',
    regions: [ASIA]
  },
  {
    code: 'LV',
    name: 'Latvia',
    url: 'flags/Flag_of_Latvia.svg',
    regions: [EUROPE]
  },
  {
    code: 'LB',
    name: 'Lebanon',
    url: 'flags/Flag_of_Lebanon.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    code: 'LS',
    name: 'Lesotho',
    url: 'flags/Flag_of_Lesotho.svg',
    regions: [AFRICA]
  },
  {
    code: 'LR',
    name: 'Liberia',
    url: 'flags/Flag_of_Liberia.svg',
    regions: [AFRICA]
  },
  {
    code: 'LY',
    name: 'Libya',
    url: 'flags/Flag_of_Libya.svg',
    regions: [AFRICA]
  },
  {
    code: 'LI',
    name: 'Liechtenstein',
    url: 'flags/Flag_of_Liechtenstein.svg',
    regions: [EUROPE]
  },
  {
    code: 'LT',
    name: 'Lithuania',
    url: 'flags/Flag_of_Lithuania.svg',
    regions: [EUROPE]
  },
  {
    code: 'LU',
    name: 'Luxembourg',
    url: 'flags/Flag_of_Luxembourg.svg',
    regions: [EUROPE]
  },
  {
    code: 'MK',
    name: 'North Macedonia',
    url: 'flags/Flag_of_Macedonia.svg',
    accepts: ['Macedonia'],
    regions: [EUROPE]
  },
  {
    code: 'MG',
    name: 'Madagascar',
    url: 'flags/Flag_of_Madagascar.svg',
    regions: [AFRICA]
  },
  {
    code: 'MW',
    name: 'Malawi',
    url: 'flags/Flag_of_Malawi.svg',
    regions: [AFRICA]
  },
  {
    code: 'MY',
    name: 'Malaysia',
    url: 'flags/Flag_of_Malaysia.svg',
    regions: [ASIA]
  },
  {
    code: 'MV',
    name: 'Maldives',
    url: 'flags/Flag_of_Maldives.svg',
    regions: [ASIA]
  },
  {
    code: 'ML',
    name: 'Mali',
    url: 'flags/Flag_of_Mali.svg',
    regions: [AFRICA]
  },
  {
    code: 'MT',
    name: 'Malta',
    url: 'flags/Flag_of_Malta.svg',
    regions: [EUROPE]
  },
  {
    code: 'MH',
    name: 'Marshall Islands',
    url: 'flags/Flag_of_the_Marshall_Islands.svg',
    regions: [OCEANIA]
  },
  {
    code: 'MR',
    name: 'Mauritania',
    url: 'flags/Flag_of_Mauritania.svg',
    regions: [AFRICA]
  },
  {
    code: 'MU',
    name: 'Mauritius',
    url: 'flags/Flag_of_Mauritius.svg',
    regions: [AFRICA]
  },
  {
    code: 'MX',
    name: 'Mexico',
    url: 'flags/Flag_of_Mexico.svg',
    regions: [NORTH_AMERICA]
  },
  {
    code: 'FM',
    name: 'Micronesia',
    url: 'flags/Flag_of_the_Federated_States_of_Micronesia.svg',
    regions: [OCEANIA]
  },
  {
    code: 'MD',
    name: 'Moldova',
    url: 'flags/Flag_of_Moldova.svg',
    regions: [EUROPE]
  },
  {
    code: 'MC',
    name: 'Monaco',
    url: 'flags/Flag_of_Monaco.svg',
    regions: [EUROPE]
  },
  {
    code: 'MN',
    name: 'Mongolia',
    url: 'flags/Flag_of_Mongolia.svg',
    regions: [ASIA]
  },
  {
    code: 'ME',
    name: 'Montenegro',
    url: 'flags/Flag_of_Montenegro.svg',
    regions: [EUROPE]
  },
  {
    code: 'MA',
    name: 'Morocco',
    url: 'flags/Flag_of_Morocco.svg',
    regions: [AFRICA]
  },
  {
    code: 'MZ',
    name: 'Mozambique',
    url: 'flags/Flag_of_Mozambique.svg',
    regions: [AFRICA]
  },
  {
    code: 'MM',
    name: 'Myanmar',
    url: 'flags/Flag_of_Myanmar.svg',
    accepts: ['Burma'],
    regions: [ASIA]
  },
  {
    code: 'NA',
    name: 'Namibia',
    url: 'flags/Flag_of_Namibia.svg',
    regions: [AFRICA]
  },
  {
    code: 'NR',
    name: 'Nauru',
    url: 'flags/Flag_of_Nauru.svg',
    regions: [OCEANIA]
  },
  {
    code: 'NP',
    name: 'Nepal',
    url: 'flags/Flag_of_Nepal.svg',
    regions: [ASIA]
  },
  {
    code: 'NL',
    name: 'Netherlands',
    url: 'flags/Flag_of_the_Netherlands.svg',
    regions: [EUROPE]
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    url: 'flags/Flag_of_New_Zealand.svg',
    regions: [OCEANIA]
  },
  {
    code: 'NI',
    name: 'Nicaragua',
    url: 'flags/Flag_of_Nicaragua.svg',
    regions: [NORTH_AMERICA]
  },
  {
    code: 'NE',
    name: 'Niger',
    url: 'flags/Flag_of_Niger.svg',
    regions: [AFRICA]
  },
  {
    code: 'NG',
    name: 'Nigeria',
    url: 'flags/Flag_of_Nigeria.svg',
    regions: [AFRICA]
  },
  {
    code: 'NO',
    name: 'Norway',
    url: 'flags/Flag_of_Norway.svg',
    regions: [EUROPE]
  },
  {
    code: 'OM',
    name: 'Oman',
    url: 'flags/Flag_of_Oman.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    code: 'PK',
    name: 'Pakistan',
    url: 'flags/Flag_of_Pakistan.svg',
    regions: [ASIA]
  },
  {
    code: 'PW',
    name: 'Palau',
    url: 'flags/Flag_of_Palau.svg',
    regions: [OCEANIA]
  },
  {
    code: 'PS',
    name: 'Palestine',
    url: 'flags/Flag_of_Palestine.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    code: 'PA',
    name: 'Panama',
    url: 'flags/Flag_of_Panama.svg',
    regions: [NORTH_AMERICA]
  },
  {
    code: 'PG',
    name: 'Papua New Guinea',
    url: 'flags/Flag_of_Papua_New_Guinea.svg',
    regions: [OCEANIA]
  },
  {
    code: 'PY',
    name: 'Paraguay',
    url: 'flags/Flag_of_Paraguay.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    code: 'PE',
    name: 'Peru',
    url: 'flags/Flag_of_Peru.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    code: 'PH',
    name: 'Philippines',
    url: 'flags/Flag_of_the_Philippines.svg',
    regions: [ASIA]
  },
  {
    code: 'PL',
    name: 'Poland',
    url: 'flags/Flag_of_Poland.svg',
    regions: [EUROPE]
  },
  {
    code: 'PT',
    name: 'Portugal',
    url: 'flags/Flag_of_Portugal.svg',
    regions: [EUROPE]
  },
  {
    code: 'QA',
    name: 'Qatar',
    url: 'flags/Flag_of_Qatar.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    code: 'RO',
    name: 'Romania',
    url: 'flags/Flag_of_Romania.svg',
    regions: [EUROPE]
  },
  {
    code: 'RU',
    name: 'Russia',
    url: 'flags/Flag_of_Russia.svg',
    regions: [EUROPE, ASIA]
  },
  {
    code: 'RW',
    name: 'Rwanda',
    url: 'flags/Flag_of_Rwanda.svg',
    regions: [AFRICA]
  },
  {
    code: 'KN',
    name: 'Saint Kitts and Nevis',
    url: 'flags/Flag_of_Saint_Kitts_and_Nevis.svg',
    accepts: ['St Kitts and Nevis'],
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    code: 'LC',
    name: 'Saint Lucia',
    url: 'flags/Flag_of_Saint_Lucia.svg',
    accepts: ['St Lucia'],
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    code: 'VC',
    name: 'Saint Vincent and the Grenadines',
    url: 'flags/Flag_of_Saint_Vincent_and_the_Grenadines.svg',
    accepts: ['St Vincent and the Grenadines'],
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    code: 'WS',
    name: 'Samoa',
    url: 'flags/Flag_of_Samoa.svg',
    regions: [OCEANIA]
  },
  {
    code: 'SM',
    name: 'San Marino',
    url: 'flags/Flag_of_San_Marino.svg',
    regions: [EUROPE]
  },
  {
    code: 'ST',
    name: 'Sao Tome and Principe',
    url: 'flags/Flag_of_Sao_Tome_and_Principe.svg',
    regions: [AFRICA]
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
    url: 'flags/Flag_of_Saudi_Arabia.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    code: 'SN',
    name: 'Senegal',
    url: 'flags/Flag_of_Senegal.svg',
    regions: [AFRICA]
  },
  {
    code: 'RS',
    name: 'Serbia',
    url: 'flags/Flag_of_Serbia.svg',
    regions: [EUROPE]
  },
  {
    code: 'SC',
    name: 'Seychelles',
    url: 'flags/Flag_of_Seychelles.svg',
    accepts: ['Seychelle Islands'],
    regions: [OCEANIA]
  },
  {
    code: 'SL',
    name: 'Sierra Leone',
    url: 'flags/Flag_of_Sierra_Leone.svg',
    regions: [AFRICA]
  },
  {
    code: 'SG',
    name: 'Singapore',
    url: 'flags/Flag_of_Singapore.svg',
    regions: [ASIA]
  },
  {
    code: 'SK',
    name: 'Slovakia',
    url: 'flags/Flag_of_Slovakia.svg',
    regions: [EUROPE]
  },
  {
    code: 'SI',
    name: 'Slovenia',
    url: 'flags/Flag_of_Slovenia.svg',
    regions: [EUROPE]
  },
  {
    code: 'sb',
    name: 'Solomon Islands',
    url: 'flags/Flag_of_the_Solomon_Islands.svg',
    regions: [OCEANIA]
  },
  {
    code: 'so',
    name: 'Somalia',
    url: 'flags/Flag_of_Somalia.svg',
    regions: [AFRICA]
  },
  {
    code: 'ZA',
    name: 'South Africa',
    url: 'flags/Flag_of_South_Africa.svg',
    regions: [AFRICA]
  },
  {
    code: 'SS',
    name: 'South Sudan',
    url: 'flags/Flag_of_South_Sudan.svg',
    regions: [AFRICA]
  },
  {
    code: 'ES',
    name: 'Spain',
    url: 'flags/Flag_of_Spain.svg',
    regions: [EUROPE]
  },
  {
    code: 'LK',
    name: 'Sri Lanka',
    url: 'flags/Flag_of_Sri_Lanka.svg',
    regions: [ASIA]
  },
  {
    code: 'SD',
    name: 'Sudan',
    url: 'flags/Flag_of_Sudan.svg',
    regions: [AFRICA]
  },
  {
    code: 'SR',
    name: 'Suriname',
    url: 'flags/Flag_of_Suriname.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    code: 'SZ',
    name: 'Eswatini',
    url: 'flags/Flag_of_Swaziland.svg',
    accepts: ['Swaziland'],
    regions: [AFRICA]
  },
  {
    code: 'SE',
    name: 'Sweden',
    url: 'flags/Flag_of_Sweden.svg',
    regions: [EUROPE]
  },
  {
    code: 'CH',
    name: 'Switzerland',
    url: 'flags/Flag_of_Switzerland_%28Pantone%29.svg',
    regions: [EUROPE]
  },
  {
    code: 'SY',
    name: 'Syria',
    url: 'flags/Flag_of_Syria.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    code: 'TJ',
    name: 'Tajikistan',
    url: 'flags/Flag_of_Tajikistan.svg',
    regions: [ASIA]
  },
  {
    code: 'TZ',
    name: 'Tanzania',
    url: 'flags/Flag_of_Tanzania.svg',
    regions: [AFRICA]
  },
  {
    code: 'TH',
    name: 'Thailand',
    url: 'flags/Flag_of_Thailand.svg',
    regions: [ASIA]
  },
  {
    code: 'TG',
    name: 'Togo',
    url: 'flags/Flag_of_Togo.svg',
    regions: [AFRICA]
  },
  {
    code: 'TO',
    name: 'Tonga',
    url: 'flags/Flag_of_Tonga.svg',
    regions: [OCEANIA]
  },
  {
    code: 'TT',
    name: 'Trinidad and Tobago',
    url: 'flags/Flag_of_Trinidad_and_Tobago.svg',
    regions: [NORTH_AMERICA, CARIBBEAN]
  },
  {
    code: 'TN',
    name: 'Tunisia',
    url: 'flags/Flag_of_Tunisia.svg',
    regions: [AFRICA]
  },
  {
    code: 'TR',
    name: 'Turkey',
    url: 'flags/Flag_of_Turkey.svg',
    regions: [EUROPE, ASIA, MIDDLE_EAST]
  },
  {
    code: 'TM',
    name: 'Turkmenistan',
    url: 'flags/Flag_of_Turkmenistan.svg',
    regions: [ASIA]
  },
  {
    code: 'TV',
    name: 'Tuvalu',
    url: 'flags/Flag_of_Tuvalu.svg',
    regions: [OCEANIA]
  },
  {
    code: 'UG',
    name: 'Uganda',
    url: 'flags/Flag_of_Uganda.svg',
    regions: [AFRICA]
  },
  {
    code: 'UA',
    name: 'Ukraine',
    url: 'flags/Flag_of_Ukraine.svg',
    regions: [EUROPE]
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    url: 'flags/Flag_of_the_United_Arab_Emirates.svg',
    accepts: ['UAE'],
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    url: 'flags/Flag_of_the_United_Kingdom.svg',
    accepts: ['UK'],
    regions: [EUROPE]
  },
  {
    code: 'US',
    name: 'United States',
    url: 'flags/Flag_of_the_United_States.svg',
    accepts: ['US', 'USA', 'United States of America', 'Murica'],
    regions: [NORTH_AMERICA]
  },
  {
    code: 'UY',
    name: 'Uruguay',
    url: 'flags/Flag_of_Uruguay.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    code: 'UZ',
    name: 'Uzbekistan',
    url: 'flags/Flag_of_Uzbekistan.svg',
    regions: [ASIA]
  },
  {
    code: 'VU',
    name: 'Vanuatu',
    url: 'flags/Flag_of_Vanuatu.svg',
    regions: [OCEANIA]
  },
  {
    code: 'VA',
    name: 'Vatican City',
    url: 'flags/Flag_of_the_Vatican_City.svg',
    accepts: ['Vatican', 'Holy See'],
    regions: [EUROPE]
  },
  {
    code: 'VE',
    name: 'Venezuela',
    url: 'flags/Flag_of_Venezuela.svg',
    regions: [SOUTH_AMERICA]
  },
  {
    code: 'VN',
    name: 'Vietnam',
    url: 'flags/Flag_of_Vietnam.svg',
    regions: [ASIA]
  },
  {
    code: 'YE',
    name: 'Yemen',
    url: 'flags/Flag_of_Yemen.svg',
    regions: [ASIA, MIDDLE_EAST]
  },
  {
    code: 'ZM',
    name: 'Zambia',
    url: 'flags/Flag_of_Zambia.svg',
    regions: [AFRICA]
  },
  {
    code: 'ZW',
    name: 'Zimbabwe',
    url: 'flags/Flag_of_Zimbabwe.svg',
    regions: [AFRICA]
  }
];

export const FLAG_DATA_NON_UN = [
  {
    code: '',
    name: 'Abkhazia',
    url: 'flags/Flag_of_Abkhazia.svg'
  },
  {
    code: '',
    name: 'Kosovo',
    url: 'flags/Flag_of_Kosovo.svg'
  },
  {
    code: '',
    name: 'Taiwan',
    url: 'flags/Flag_of_the_Republic_of_China.svg',
    accepts: ['Republic of China', 'RoC']
  }
];

export const FLAG_DATA_UK = [
  {
    code: '',
    name: 'England',
    url: 'flags/Flag_of_England.svg'
  },
  {
    code: '',
    name: 'Scotland',
    url: 'flags/Flag_of_Scotland.svg'
  },
  {
    code: '',
    name: 'Wales',
    url: 'flags/Flag_of_Wales_2.svg'
  }
];

export default FLAG_DATA;
