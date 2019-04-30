import { NORTH_AMERICA, SOUTH_AMERICA, EUROPE, AFRICA, ASIA, OCEANIA, MIDDLE_EAST, CARIBBEAN } from './regions';

const FLAG_DATA = [
    {
        name: 'Afghanistan',
        url: 'flags/Flag_of_Afghanistan.svg',
        regions: [ASIA, MIDDLE_EAST]
    },
    {
        name: 'Albania',
        url: 'flags/Flag_of_Albania.svg',
        regions: [EUROPE]
    },
    {
        name: 'Algeria',
        url: 'flags/Flag_of_Algeria.svg',
        regions: [AFRICA]
    },
    {
        name: 'Andorra',
        url: 'flags/Flag_of_Andorra.svg',
        regions: [EUROPE]
    },
    {
        name: 'Angola',
        url: 'flags/Flag_of_Angola.svg',
        regions: [AFRICA]
    },
    {
        name: 'Antigua and Barbuda',
        url: 'flags/Flag_of_Antigua_and_Barbuda.svg',
        regions: [NORTH_AMERICA, CARIBBEAN]
    },
    {
        name: 'Argentina',
        url: 'flags/Flag_of_Argentina.svg',
        regions: [SOUTH_AMERICA]
    },
    {
        name: 'Armenia',
        url: 'flags/Flag_of_Armenia.svg',
        regions: [ASIA]
    },
    {
        name: 'Australia',
        url: 'flags/Flag_of_Australia_%28converted%29.svg',
        regions: [OCEANIA]
    },
    {
        name: 'Austria',
        url: 'flags/Flag_of_Austria.svg',
        regions: [EUROPE]
    },
    {
        name: 'Azerbaijan',
        url: 'flags/Flag_of_Azerbaijan.svg',
        regions: [ASIA]
    },
    {
        name: 'Bahamas',
        url: 'flags/Flag_of_the_Bahamas.svg',
        regions: [NORTH_AMERICA, CARIBBEAN]
    },
    {
        name: 'Bahrain',
        url: 'flags/Flag_of_Bahrain.svg',
        regions: [ASIA, MIDDLE_EAST]
    },
    {
        name: 'Bangladesh',
        url: 'flags/Flag_of_Bangladesh.svg',
        regions: [ASIA]
    },
    {
        name: 'Barbados',
        url: 'flags/Flag_of_Barbados.svg',
        regions: [NORTH_AMERICA, CARIBBEAN]
    },
    {
        name: 'Belarus',
        url: 'flags/Flag_of_Belarus.svg',
        regions: [EUROPE]
    },
    {
        name: 'Belgium',
        url: 'flags/Flag_of_Belgium_%28civil%29.svg',
        regions: [EUROPE]
    },
    {
        name: 'Belize',
        url: 'flags/Flag_of_Belize.svg',
        regions: [NORTH_AMERICA]
    },
    {
        name: 'Benin',
        url: 'flags/Flag_of_Benin.svg',
        regions: [AFRICA]
    },
    {
        name: 'Bhutan',
        url: 'flags/Flag_of_Bhutan.svg',
        regions: [ASIA]
    },
    {
        name: 'Bolivia',
        url: 'flags/Flag_of_Bolivia_%28state%29.svg',
        regions: [SOUTH_AMERICA]
    },
    {
        name: 'Bosnia and Herzegovina',
        url: 'flags/Flag_of_Bosnia_and_Herzegovina.svg',
        accepts: ['Bosnia'],
        regions: [EUROPE]
    },
    {
        name: 'Botswana',
        url: 'flags/Flag_of_Botswana.svg',
        regions: [AFRICA]
    },
    {
        name: 'Brazil',
        url: 'flags/Flag_of_Brazil.svg',
        regions: [SOUTH_AMERICA]
    },
    {
        name: 'Brunei',
        url: 'flags/Flag_of_Brunei.svg',
        regions: [ASIA]
    },
    {
        name: 'Bulgaria',
        url: 'flags/Flag_of_Bulgaria.svg',
        regions: [EUROPE]
    },
    {
        name: 'Burkina Faso',
        url: 'flags/Flag_of_Burkina_Faso.svg',
        regions: [AFRICA]
    },
    {
        name: 'Burundi',
        url: 'flags/Flag_of_Burundi.svg',
        regions: [AFRICA]
    },
    {
        name: 'Cambodia',
        url: 'flags/Flag_of_Cambodia.svg',
        regions: [ASIA]
    },
    {
        name: 'Cameroon',
        url: 'flags/Flag_of_Cameroon.svg',
        regions: [AFRICA]
    },
    {
        name: 'Canada',
        url: 'flags/Flag_of_Canada.svg',
        regions: [NORTH_AMERICA]
    },
    {
        name: 'Cape Verde',
        url: 'flags/Flag_of_Cape_Verde.svg',
        accepts: ['Cabo Verde'],
        regions: [AFRICA]
    },
    {
        name: 'Central African Republic',
        url: 'flags/Flag_of_the_Central_African_Republic.svg',
        accepts: ['CAR'],
        regions: [AFRICA]
    },
    {
        name: 'Chad',
        url: 'flags/Flag_of_Chad.svg',
        regions: [AFRICA]
    },
    {
        name: 'Chile',
        url: 'flags/Flag_of_Chile.svg',
        regions: [SOUTH_AMERICA]
    },
    {
        name: 'China',
        url: 'flags/Flag_of_the_People%27s_Republic_of_China.svg',
        accepts: ["People's Republic of China"],
        regions: [ASIA]
    },
    {
        name: 'Colombia',
        url: 'flags/Flag_of_Colombia.svg',
        regions: [SOUTH_AMERICA]
    },
    {
        name: 'Comoros',
        url: 'flags/Flag_of_the_Comoros.svg',
        regions: [AFRICA]
    },
    {
        name: 'Democratic Republic of the Congo',
        url: 'flags/Flag_of_the_Democratic_Republic_of_the_Congo.svg',
        accepts: ['DRC'],
        regions: [AFRICA]
    },
    {
        name: 'Republic of the Congo',
        url: 'flags/Flag_of_the_Republic_of_the_Congo.svg',
        regions: [AFRICA]
    },
    {
        name: 'Costa Rica',
        url: 'flags/Flag_of_Costa_Rica.svg',
        regions: [NORTH_AMERICA]
    },
    {
        name: 'Croatia',
        url: 'flags/Flag_of_Croatia.svg',
        regions: [EUROPE]
    },
    {
        name: 'Cuba',
        url: 'flags/Flag_of_Cuba.svg',
        regions: [NORTH_AMERICA, CARIBBEAN]
    },
    {
        name: 'Cyprus',
        url: 'flags/Flag_of_Cyprus.svg',
        regions: [EUROPE]
    },
    {
        name: 'Czech Republic',
        url: 'flags/Flag_of_the_Czech_Republic.svg',
        regions: [EUROPE]
    },
    {
        name: 'Denmark',
        url: 'flags/Flag_of_Denmark.svg',
        regions: [EUROPE]
    },
    {
        name: 'Djibouti',
        url: 'flags/Flag_of_Djibouti.svg',
        regions: [AFRICA]
    },
    {
        name: 'Dominica',
        url: 'flags/Flag_of_Dominica.svg',
        regions: [NORTH_AMERICA, CARIBBEAN]
    },
    {
        name: 'Dominican Republic',
        url: 'flags/Flag_of_the_Dominican_Republic.svg',
        regions: [NORTH_AMERICA, CARIBBEAN]
    },
    {
        name: 'East Timor',
        url: 'flags/Flag_of_East_Timor.svg',
        accepts: ['Timor Leste'],
        regions: [ASIA]
    },
    {
        name: 'Ecuador',
        url: 'flags/Flag_of_Ecuador.svg',
        regions: [SOUTH_AMERICA]
    },
    {
        name: 'Egypt',
        url: 'flags/Flag_of_Egypt.svg',
        regions: [AFRICA]
    },
    {
        name: 'El Salvador',
        url: 'flags/Flag_of_El_Salvador.svg',
        regions: [NORTH_AMERICA]
    },
    {
        name: 'Equatorial Guinea',
        url: 'flags/Flag_of_Equatorial_Guinea.svg',
        regions: [AFRICA]
    },
    {
        name: 'Eritrea',
        url: 'flags/Flag_of_Eritrea.svg',
        regions: [AFRICA]
    },
    {
        name: 'Estonia',
        url: 'flags/Flag_of_Estonia.svg',
        regions: [EUROPE]
    },
    {
        name: 'Ethiopia',
        url: 'flags/Flag_of_Ethiopia.svg',
        regions: [AFRICA]
    },
    {
        name: 'Fiji',
        url: 'flags/Flag_of_Fiji.svg',
        regions: [OCEANIA]
    },
    {
        name: 'Finland',
        url: 'flags/Flag_of_Finland.svg',
        regions: [EUROPE]
    },
    {
        name: 'France',
        url: 'flags/Flag_of_France.svg',
        regions: [EUROPE]
    },
    {
        name: 'Gabon',
        url: 'flags/Flag_of_Gabon.svg',
        regions: [AFRICA]
    },
    {
        name: 'Gamiba',
        url: 'flags/Flag_of_The_Gambia.svg',
        regions: [AFRICA]
    },
    {
        name: 'Georgia',
        url: 'flags/Flag_of_Georgia.svg',
        regions: [ASIA]
    },
    {
        name: 'Germany',
        url: 'flags/Flag_of_Germany.svg',
        regions: [EUROPE]
    },
    {
        name: 'Ghana',
        url: 'flags/Flag_of_Ghana.svg',
        regions: [AFRICA]
    },
    {
        name: 'Greece',
        url: 'flags/Flag_of_Greece.svg',
        regions: [EUROPE]
    },
    {
        name: 'Grenada',
        url: 'flags/Flag_of_Grenada.svg',
        regions: [NORTH_AMERICA, CARIBBEAN]
    },
    {
        name: 'Guatemala',
        url: 'flags/Flag_of_Guatemala.svg',
        regions: [NORTH_AMERICA]
    },
    {
        name: 'Guinea',
        url: 'flags/Flag_of_Guinea.svg',
        regions: [AFRICA]
    },
    {
        name: 'Guinea-Bissau',
        url: 'flags/Flag_of_Guinea-Bissau.svg',
        regions: [AFRICA]
    },
    {
        name: 'Guyana',
        url: 'flags/Flag_of_Guyana.svg',
        regions: [SOUTH_AMERICA]
    },
    {
        name: 'Haiti',
        url: 'flags/Flag_of_Haiti.svg',
        regions: [NORTH_AMERICA, CARIBBEAN]
    },
    {
        name: 'Honduras',
        url: 'flags/Flag_of_Honduras.svg',
        regions: [NORTH_AMERICA]
    },
    {
        name: 'Hungary',
        url: 'flags/Flag_of_Hungary.svg',
        regions: [EUROPE]
    },
    {
        name: 'Iceland',
        url: 'flags/Flag_of_Iceland.svg',
        regions: [EUROPE]
    },
    {
        name: 'India',
        url: 'flags/Flag_of_India.svg',
        regions: [ASIA]
    },
    {
        name: 'Indonesia',
        url: 'flags/Flag_of_Indonesia.svg',
        regions: [ASIA]
    },
    {
        name: 'Iran',
        url: 'flags/Flag_of_Iran.svg',
        regions: [ASIA, MIDDLE_EAST]
    },
    {
        name: 'Iraq',
        url: 'flags/Flag_of_Iraq.svg',
        regions: [ASIA, MIDDLE_EAST]
    },
    {
        name: 'Ireland',
        url: 'flags/Flag_of_Ireland.svg',
        regions: [EUROPE]
    },
    {
        name: 'Israel',
        url: 'flags/Flag_of_Israel.svg',
        regions: [ASIA]
    },
    {
        name: 'Italy',
        url: 'flags/Flag_of_Italy.svg',
        regions: [EUROPE]
    },
    {
        name: "Côte d'Ivoire",
        url: 'flags/Flag_of_C%C3%B4te_d%27Ivoire.svg',
        accepts: ['Ivory Coast', "Cote d'Ivoire"],
        regions: [AFRICA]
    },
    {
        name: 'Jamaica',
        url: 'flags/Flag_of_Jamaica.svg',
        regions: [NORTH_AMERICA, CARIBBEAN]
    },
    {
        name: 'Japan',
        url: 'flags/Flag_of_Japan.svg',
        regions: [ASIA]
    },
    {
        name: 'Jordan',
        url: 'flags/Flag_of_Jordan.svg',
        regions: [ASIA, MIDDLE_EAST]
    },
    {
        name: 'Kazakhstan',
        url: 'flags/Flag_of_Kazakhstan.svg',
        regions: [ASIA]
    },
    {
        name: 'Kenya',
        url: 'flags/Flag_of_Kenya.svg',
        regions: [AFRICA]
    },
    {
        name: 'Kiribati',
        url: 'flags/Flag_of_Kiribati.svg',
        regions: [OCEANIA]
    },
    {
        name: 'North Korea',
        url: 'flags/Flag_of_North_Korea.svg',
        accepts: ["Democratic People's Republic of Korea", 'Best Korea', 'True Korea', 'Perfect Nation'],
        regions: [ASIA]
    },
    {
        name: 'South Korea',
        url: 'flags/Flag_of_South_Korea.svg',
        accepts: ['Republic of Korea'],
        regions: [ASIA]
    },
    {
        name: 'Kuwait',
        url: 'flags/Flag_of_Kuwait.svg',
        regions: [ASIA, MIDDLE_EAST]
    },
    {
        name: 'Kyrgyzstan',
        url: 'flags/Flag_of_Kyrgyzstan.svg',
        regions: [ASIA]
    },
    {
        name: 'Laos',
        url: 'flags/Flag_of_Laos.svg',
        regions: [ASIA]
    },
    {
        name: 'Latvia',
        url: 'flags/Flag_of_Latvia.svg',
        regions: [EUROPE]
    },
    {
        name: 'Lebanon',
        url: 'flags/Flag_of_Lebanon.svg',
        regions: [ASIA, MIDDLE_EAST]
    },
    {
        name: 'Lesotho',
        url: 'flags/Flag_of_Lesotho.svg',
        regions: [AFRICA]
    },
    {
        name: 'Liberia',
        url: 'flags/Flag_of_Liberia.svg',
        regions: [AFRICA]
    },
    {
        name: 'Libya',
        url: 'flags/Flag_of_Libya.svg',
        regions: [AFRICA]
    },
    {
        name: 'Liechtenstein',
        url: 'flags/Flag_of_Liechtenstein.svg',
        regions: [EUROPE]
    },
    {
        name: 'Lithuania',
        url: 'flags/Flag_of_Lithuania.svg',
        regions: [EUROPE]
    },
    {
        name: 'Luxembourg',
        url: 'flags/Flag_of_Luxembourg.svg',
        regions: [EUROPE]
    },
    {
        name: 'Macedonia',
        url: 'flags/Flag_of_Macedonia.svg',
        regions: [EUROPE]
    },
    {
        name: 'Madagascar',
        url: 'flags/Flag_of_Madagascar.svg',
        regions: [AFRICA]
    },
    {
        name: 'Malawi',
        url: 'flags/Flag_of_Malawi.svg',
        regions: [AFRICA]
    },
    {
        name: 'Malaysia',
        url: 'flags/Flag_of_Malaysia.svg',
        regions: [ASIA]
    },
    {
        name: 'Maldives',
        url: 'flags/Flag_of_Maldives.svg',
        regions: [ASIA]
    },
    {
        name: 'Mali',
        url: 'flags/Flag_of_Mali.svg',
        regions: [AFRICA]
    },
    {
        name: 'Malta',
        url: 'flags/Flag_of_Malta.svg',
        regions: [EUROPE]
    },
    {
        name: 'Marshall Islands',
        url: 'flags/Flag_of_the_Marshall_Islands.svg',
        regions: [OCEANIA]
    },
    {
        name: 'Mauritania',
        url: 'flags/Flag_of_Mauritania.svg',
        regions: [AFRICA]
    },
    {
        name: 'Mauritius',
        url: 'flags/Flag_of_Mauritius.svg',
        regions: [AFRICA]
    },
    {
        name: 'Mexico',
        url: 'flags/Flag_of_Mexico.svg',
        regions: [NORTH_AMERICA]
    },
    {
        name: 'Micronesia',
        url: 'flags/Flag_of_the_Federated_States_of_Micronesia.svg',
        regions: [OCEANIA]
    },
    {
        name: 'Moldova',
        url: 'flags/Flag_of_Moldova.svg',
        regions: [EUROPE]
    },
    {
        name: 'Monaco',
        url: 'flags/Flag_of_Monaco.svg',
        regions: [EUROPE]
    },
    {
        name: 'Mongolia',
        url: 'flags/Flag_of_Mongolia.svg',
        regions: [ASIA]
    },
    {
        name: 'Montenegro',
        url: 'flags/Flag_of_Montenegro.svg',
        regions: [EUROPE]
    },
    {
        name: 'Morocco',
        url: 'flags/Flag_of_Morocco.svg',
        regions: [AFRICA]
    },
    {
        name: 'Mozambique',
        url: 'flags/Flag_of_Mozambique.svg',
        regions: [AFRICA]
    },
    {
        name: 'Myanmar',
        url: 'flags/Flag_of_Myanmar.svg',
        accepts: ['Burma'],
        regions: [ASIA]
    },
    {
        name: 'Namibia',
        url: 'flags/Flag_of_Namibia.svg',
        regions: [AFRICA]
    },
    {
        name: 'Nauru',
        url: 'flags/Flag_of_Nauru.svg',
        regions: [OCEANIA]
    },
    {
        name: 'Nepal',
        url: 'flags/Flag_of_Nepal.svg',
        regions: [ASIA]
    },
    {
        name: 'Netherlands',
        url: 'flags/Flag_of_the_Netherlands.svg',
        regions: [EUROPE]
    },
    {
        name: 'New Zealand',
        url: 'flags/Flag_of_New_Zealand.svg',
        regions: [OCEANIA]
    },
    {
        name: 'Nicaragua',
        url: 'flags/Flag_of_Nicaragua.svg',
        regions: [NORTH_AMERICA]
    },
    {
        name: 'Niger',
        url: 'flags/Flag_of_Niger.svg',
        regions: [AFRICA]
    },
    {
        name: 'Nigeria',
        url: 'flags/Flag_of_Nigeria.svg',
        regions: [AFRICA]
    },
    {
        name: 'Norway',
        url: 'flags/Flag_of_Norway.svg',
        regions: [EUROPE]
    },
    {
        name: 'Oman',
        url: 'flags/Flag_of_Oman.svg',
        regions: [ASIA, MIDDLE_EAST]
    },
    {
        name: 'Pakistan',
        url: 'flags/Flag_of_Pakistan.svg',
        regions: [ASIA]
    },
    {
        name: 'Palau',
        url: 'flags/Flag_of_Palau.svg',
        regions: [OCEANIA]
    },
    {
        name: 'Palestine',
        url: 'flags/Flag_of_Palestine.svg',
        regions: [ASIA, MIDDLE_EAST]
    },
    {
        name: 'Panama',
        url: 'flags/Flag_of_Panama.svg',
        regions: [NORTH_AMERICA]
    },
    {
        name: 'Papua New Guinea',
        url: 'flags/Flag_of_Papua_New_Guinea.svg',
        regions: [OCEANIA]
    },
    {
        name: 'Paraguay',
        url: 'flags/Flag_of_Paraguay.svg',
        regions: [SOUTH_AMERICA]
    },
    {
        name: 'Peru',
        url: 'flags/Flag_of_Peru.svg',
        regions: [SOUTH_AMERICA]
    },
    {
        name: 'Philippines',
        url: 'flags/Flag_of_the_Philippines.svg',
        regions: [ASIA]
    },
    {
        name: 'Poland',
        url: 'flags/Flag_of_Poland.svg',
        regions: [EUROPE]
    },
    {
        name: 'Portugal',
        url: 'flags/Flag_of_Portugal.svg',
        regions: [EUROPE]
    },
    {
        name: 'Qatar',
        url: 'flags/Flag_of_Qatar.svg',
        regions: [ASIA, MIDDLE_EAST]
    },
    {
        name: 'Romania',
        url: 'flags/Flag_of_Romania.svg',
        regions: [EUROPE]
    },
    {
        name: 'Russia',
        url: 'flags/Flag_of_Russia.svg',
        regions: [EUROPE, ASIA]
    },
    {
        name: 'Rwanda',
        url: 'flags/Flag_of_Rwanda.svg',
        regions: [AFRICA]
    },
    {
        name: 'Saint Kitts and Nevis',
        url: 'flags/Flag_of_Saint_Kitts_and_Nevis.svg',
        accepts: ['St Kitts and Nevis'],
        regions: [NORTH_AMERICA, CARIBBEAN]
    },
    {
        name: 'Saint Lucia',
        url: 'flags/Flag_of_Saint_Lucia.svg',
        accepts: ['St Lucia'],
        regions: [NORTH_AMERICA, CARIBBEAN]
    },
    {
        name: 'Saint Vincent and the Grenadines',
        url: 'flags/Flag_of_Saint_Vincent_and_the_Grenadines.svg',
        accepts: ['St Vincent and the Grenadines'],
        regions: [NORTH_AMERICA, CARIBBEAN]
    },
    {
        name: 'Samoa',
        url: 'flags/Flag_of_Samoa.svg',
        regions: [OCEANIA]
    },
    {
        name: 'San Marino',
        url: 'flags/Flag_of_San_Marino.svg',
        regions: [EUROPE]
    },
    {
        name: 'Sao Tome and Principe',
        url: 'flags/Flag_of_Sao_Tome_and_Principe.svg',
        regions: [AFRICA]
    },
    {
        name: 'Saudi Arabia',
        url: 'flags/Flag_of_Saudi_Arabia.svg',
        regions: [ASIA, MIDDLE_EAST]
    },
    {
        name: 'Senegal',
        url: 'flags/Flag_of_Senegal.svg',
        regions: [AFRICA]
    },
    {
        name: 'Serbia',
        url: 'flags/Flag_of_Serbia.svg',
        regions: [EUROPE]
    },
    {
        name: 'Seychelles',
        url: 'flags/Flag_of_Seychelles.svg',
        accepts: ['Seychelle Islands'],
        regions: [OCEANIA]
    },
    {
        name: 'Sierra Leone',
        url: 'flags/Flag_of_Sierra_Leone.svg',
        regions: [AFRICA]
    },
    {
        name: 'Singapore',
        url: 'flags/Flag_of_Singapore.svg',
        regions: [ASIA]
    },
    {
        name: 'Slovakia',
        url: 'flags/Flag_of_Slovakia.svg',
        regions: [EUROPE]
    },
    {
        name: 'Slovenia',
        url: 'flags/Flag_of_Slovenia.svg',
        regions: [EUROPE]
    },
    {
        name: 'Solomon Islands',
        url: 'flags/Flag_of_the_Solomon_Islands.svg',
        regions: [OCEANIA]
    },
    {
        name: 'Somalia',
        url: 'flags/Flag_of_Somalia.svg',
        regions: [AFRICA]
    },
    {
        name: 'South Africa',
        url: 'flags/Flag_of_South_Africa.svg',
        regions: [AFRICA]
    },
    {
        name: 'South Sudan',
        url: 'flags/Flag_of_South_Sudan.svg',
        regions: [AFRICA]
    },
    {
        name: 'Spain',
        url: 'flags/Flag_of_Spain.svg',
        regions: [EUROPE]
    },
    {
        name: 'Sri Lanka',
        url: 'flags/Flag_of_Sri_Lanka.svg',
        regions: [ASIA]
    },
    {
        name: 'Sudan',
        url: 'flags/Flag_of_Sudan.svg',
        regions: [AFRICA]
    },
    {
        name: 'Suriname',
        url: 'flags/Flag_of_Suriname.svg',
        regions: [SOUTH_AMERICA]
    },
    {
        name: 'Swaziland',
        url: 'flags/Flag_of_Swaziland.svg',
        regions: [AFRICA]
    },
    {
        name: 'Sweden',
        url: 'flags/Flag_of_Sweden.svg',
        regions: [EUROPE]
    },
    {
        name: 'Switzerland',
        url: 'flags/Flag_of_Switzerland_%28Pantone%29.svg',
        regions: [EUROPE]
    },
    {
        name: 'Syria',
        url: 'flags/Flag_of_Syria.svg',
        regions: [ASIA, MIDDLE_EAST]
    },
    {
        name: 'Tajikistan',
        url: 'flags/Flag_of_Tajikistan.svg',
        regions: [ASIA]
    },
    {
        name: 'Tanzania',
        url: 'flags/Flag_of_Tanzania.svg',
        regions: [AFRICA]
    },
    {
        name: 'Thailand',
        url: 'flags/Flag_of_Thailand.svg',
        regions: [ASIA]
    },
    {
        name: 'Togo',
        url: 'flags/Flag_of_Togo.svg',
        regions: [AFRICA]
    },
    {
        name: 'Tonga',
        url: 'flags/Flag_of_Tonga.svg',
        regions: [OCEANIA]
    },
    {
        name: 'Trinidad and Tobago',
        url: 'flags/Flag_of_Trinidad_and_Tobago.svg',
        regions: [NORTH_AMERICA, CARIBBEAN]
    },
    {
        name: 'Tunisia',
        url: 'flags/Flag_of_Tunisia.svg',
        regions: [AFRICA]
    },
    {
        name: 'Turkey',
        url: 'flags/Flag_of_Turkey.svg',
        regions: [EUROPE, ASIA, MIDDLE_EAST]
    },
    {
        name: 'Turkmenistan',
        url: 'flags/Flag_of_Turkmenistan.svg',
        regions: [ASIA]
    },
    {
        name: 'Tuvalu',
        url: 'flags/Flag_of_Tuvalu.svg',
        regions: [OCEANIA]
    },
    {
        name: 'Uganda',
        url: 'flags/Flag_of_Uganda.svg',
        regions: [AFRICA]
    },
    {
        name: 'Ukraine',
        url: 'flags/Flag_of_Ukraine.svg',
        regions: [EUROPE]
    },
    {
        name: 'United Arab Emirates',
        url: 'flags/Flag_of_the_United_Arab_Emirates.svg',
        accepts: ['UAE'],
        regions: [ASIA, MIDDLE_EAST]
    },
    {
        name: 'United Kingdom',
        url: 'flags/Flag_of_the_United_Kingdom.svg',
        accepts: ['UK'],
        regions: [EUROPE]
    },
    {
        name: 'United States',
        url: 'flags/Flag_of_the_United_States.svg',
        accepts: ['US', 'USA', 'United States of America', 'Murica'],
        regions: [NORTH_AMERICA]
    },
    {
        name: 'Uruguay',
        url: 'flags/Flag_of_Uruguay.svg',
        regions: [SOUTH_AMERICA]
    },
    {
        name: 'Uzbekistan',
        url: 'flags/Flag_of_Uzbekistan.svg',
        regions: [ASIA]
    },
    {
        name: 'Vanuatu',
        url: 'flags/Flag_of_Vanuatu.svg',
        regions: [OCEANIA]
    },
    {
        name: 'Vatican City',
        url: 'flags/Flag_of_the_Vatican_City.svg',
        accepts: ['Vatican'],
        regions: [EUROPE]
    },
    {
        name: 'Venezuela',
        url: 'flags/Flag_of_Venezuela.svg',
        regions: [SOUTH_AMERICA]
    },
    {
        name: 'Vietnam',
        url: 'flags/Flag_of_Vietnam.svg',
        regions: [ASIA]
    },
    {
        name: 'Yemen',
        url: 'flags/Flag_of_Yemen.svg',
        regions: [ASIA, MIDDLE_EAST]
    },
    {
        name: 'Zambia',
        url: 'flags/Flag_of_Zambia.svg',
        regions: [AFRICA]
    },
    {
        name: 'Zimbabwe',
        url: 'flags/Flag_of_Zimbabwe.svg',
        regions: [AFRICA]
    }
];

export const FLAG_DATA_NON_UN = [
    {
        name: 'Abkhazia',
        url: 'flags/Flag_of_Abkhazia.svg'
    },
    {
        name: 'Kosovo',
        url: 'flags/Flag_of_Kosovo.svg'
    },
    {
        name: 'Taiwan',
        url: 'flags/Flag_of_the_Republic_of_China.svg',
        accepts: ['Republic of China', 'RoC']
    }
];

export const FLAG_DATA_UK = [
    {
        name: 'England',
        url: 'flags/Flag_of_England.svg'
    },
    {
        name: 'Scotland',
        url: 'flags/Flag_of_Scotland.svg'
    },
    {
        name: 'Wales',
        url: 'flags/Flag_of_Wales_2.svg'
    }
];

export default FLAG_DATA;
