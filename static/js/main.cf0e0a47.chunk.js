(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,a,n){e.exports=n(80)},67:function(e,a){},80:function(e,a,n){"use strict";n.r(a);var o=n(0),r=n.n(o),s=n(24),t=n.n(s),l=n(15),g=n(16),i=n(18),c=n(17),u=n(19),f=n(25),d=n(12),_=n(13),m=n(9),v=n(3),F=n(2),h=n(5),b=n(36),p=n.n(b),S=n(26),E=n.n(S),C="all",y="ocea",N="na",A="sa",M="eur",k="afr",O="asia",j="me",w=function(e){function a(){var e,n,o;Object(l.a)(this,a);for(var r=arguments.length,s=new Array(r),t=0;t<r;t++)s[t]=arguments[t];return(o=Object(i.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(s)))).regionCoordinates=(n={},Object(F.a)(n,N,{x:.8,y:.23,z:0}),Object(F.a)(n,M,{x:.82,y:-1.9,z:0}),Object(F.a)(n,k,{x:.18,y:-1.85,z:0}),Object(F.a)(n,C,{x:1.1,y:-1.2,z:0}),Object(F.a)(n,A,{x:-.4,y:-.4,z:0}),Object(F.a)(n,O,{x:.65,y:3.2,z:0}),Object(F.a)(n,j,{x:.5,y:-2.34,z:0}),Object(F.a)(n,y,{x:-.25,y:-3.82,z:0}),n),o.start=function(){o.frameId||(o.frameId=requestAnimationFrame(o.animate))},o.stop=function(){cancelAnimationFrame(o.frameId)},o.animate=function(){o.renderScene(),E.a.update(),o.controls.update(),o.frameId=window.requestAnimationFrame(o.animate)},o.renderScene=function(){o.renderer.render(o.scene,o.camera)},o}return Object(u.a)(a,e),Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this.mount.clientWidth,a=this.mount.clientHeight;this.scene=new h.Scene,this.camera=new h.PerspectiveCamera(45,e/a,.1,1e3),this.camera.position.z=1.5,this.renderer=new h.WebGLRenderer({antialias:!0}),this.renderer.setClearColor("#fff"),this.renderer.setSize(e,a),this.mount.appendChild(this.renderer.domElement);var n=new h.SphereGeometry(.5,32,32),o=new h.MeshPhongMaterial,r=(new h.TextureLoader).load("http://1.bp.blogspot.com/-596lbFumbyA/Ukb1cHw21_I/AAAAAAAAK-U/KArMZAjbvyU/s1600/water_4k.png");o.map=r,o.map.minFilter=h.LinearFilter,this.cube=new h.Mesh(n,o),this.cube.setRotationFromEuler(new h.Euler(this.regionCoordinates.all.x,this.regionCoordinates.all.y,this.regionCoordinates.all.z)),this.scene.add(this.cube),this.scene.add(new h.AmbientLight(16777215)),this.controls=new p.a(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.start()}},{key:"componentWillUnmount",value:function(){this.stop(),this.mount.removeChild(this.renderer.domElement)}},{key:"shouldComponentUpdate",value:function(e,a){var n=this.regionCoordinates[e.region]||{x:0,y:0,z:0};return new E.a.Tween(this.cube.rotation).to(n,500).easing(E.a.Easing.Quadratic.InOut).start(),!1}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{width:"100%",height:"100%"},ref:function(a){e.mount=a}})}}]),a}(o.Component),B=[{code:"AF",name:"Afghanistan",url:"flags/Flag_of_Afghanistan.svg",regions:[O,j]},{code:"AL",name:"Albania",url:"flags/Flag_of_Albania.svg",regions:[M]},{code:"DZ",name:"Algeria",url:"flags/Flag_of_Algeria.svg",regions:[k]},{code:"AD",name:"Andorra",url:"flags/Flag_of_Andorra.svg",regions:[M]},{code:"AO",name:"Angola",url:"flags/Flag_of_Angola.svg",regions:[k]},{code:"AG",name:"Antigua and Barbuda",url:"flags/Flag_of_Antigua_and_Barbuda.svg",regions:[N,"carib"]},{code:"AR",name:"Argentina",url:"flags/Flag_of_Argentina.svg",regions:[A]},{code:"AM",name:"Armenia",url:"flags/Flag_of_Armenia.svg",regions:[O]},{code:"AU",name:"Australia",url:"flags/Flag_of_Australia_%28converted%29.svg",regions:[y]},{code:"AT",name:"Austria",url:"flags/Flag_of_Austria.svg",regions:[M]},{code:"AZ",name:"Azerbaijan",url:"flags/Flag_of_Azerbaijan.svg",regions:[O]},{code:"BS",name:"Bahamas",url:"flags/Flag_of_the_Bahamas.svg",regions:[N,"carib"]},{code:"BH",name:"Bahrain",url:"flags/Flag_of_Bahrain.svg",regions:[O,j]},{code:"BD",name:"Bangladesh",url:"flags/Flag_of_Bangladesh.svg",regions:[O]},{code:"BB",name:"Barbados",url:"flags/Flag_of_Barbados.svg",regions:[N,"carib"]},{code:"BY",name:"Belarus",url:"flags/Flag_of_Belarus.svg",regions:[M]},{code:"BE",name:"Belgium",url:"flags/Flag_of_Belgium_%28civil%29.svg",regions:[M]},{code:"BZ",name:"Belize",url:"flags/Flag_of_Belize.svg",regions:[N]},{code:"BJ",name:"Benin",url:"flags/Flag_of_Benin.svg",regions:[k]},{code:"BT",name:"Bhutan",url:"flags/Flag_of_Bhutan.svg",regions:[O]},{code:"BO",name:"Bolivia",url:"flags/Flag_of_Bolivia_%28state%29.svg",regions:[A]},{code:"BA",name:"Bosnia and Herzegovina",url:"flags/Flag_of_Bosnia_and_Herzegovina.svg",accepts:["Bosnia"],regions:[M]},{code:"BW",name:"Botswana",url:"flags/Flag_of_Botswana.svg",regions:[k]},{code:"BR",name:"Brazil",url:"flags/Flag_of_Brazil.svg",regions:[A]},{code:"BN",name:"Brunei",url:"flags/Flag_of_Brunei.svg",regions:[O]},{code:"BG",name:"Bulgaria",url:"flags/Flag_of_Bulgaria.svg",regions:[M]},{code:"BF",name:"Burkina Faso",url:"flags/Flag_of_Burkina_Faso.svg",regions:[k]},{code:"BI",name:"Burundi",url:"flags/Flag_of_Burundi.svg",regions:[k]},{code:"KH",name:"Cambodia",url:"flags/Flag_of_Cambodia.svg",regions:[O]},{code:"CM",name:"Cameroon",url:"flags/Flag_of_Cameroon.svg",regions:[k]},{code:"CA",name:"Canada",url:"flags/Flag_of_Canada.svg",regions:[N]},{code:"CV",name:"Cape Verde",url:"flags/Flag_of_Cape_Verde.svg",accepts:["Cabo Verde"],regions:[k]},{code:"CF",name:"Central African Republic",url:"flags/Flag_of_the_Central_African_Republic.svg",accepts:["CAR"],regions:[k]},{code:"TD",name:"Chad",url:"flags/Flag_of_Chad.svg",regions:[k]},{code:"CL",name:"Chile",url:"flags/Flag_of_Chile.svg",regions:[A]},{code:"CN",name:"China",url:"flags/Flag_of_the_People%27s_Republic_of_China.svg",accepts:["People's Republic of China"],regions:[O]},{code:"CO",name:"Colombia",url:"flags/Flag_of_Colombia.svg",regions:[A]},{code:"KM",name:"Comoros",url:"flags/Flag_of_the_Comoros.svg",regions:[k]},{code:"CD",name:"Democratic Republic of the Congo",url:"flags/Flag_of_the_Democratic_Republic_of_the_Congo.svg",accepts:["DRC"],regions:[k]},{code:"CG",name:"Republic of the Congo",url:"flags/Flag_of_the_Republic_of_the_Congo.svg",accepts:["Congo"],regions:[k]},{code:"CR",name:"Costa Rica",url:"flags/Flag_of_Costa_Rica.svg",regions:[N]},{code:"HR",name:"Croatia",url:"flags/Flag_of_Croatia.svg",regions:[M]},{code:"CU",name:"Cuba",url:"flags/Flag_of_Cuba.svg",regions:[N,"carib"]},{code:"CY",name:"Cyprus",url:"flags/Flag_of_Cyprus.svg",regions:[M]},{code:"CZ",name:"Czech Republic",url:"flags/Flag_of_the_Czech_Republic.svg",accepts:["Czechia"],regions:[M]},{code:"DK",name:"Denmark",url:"flags/Flag_of_Denmark.svg",regions:[M]},{code:"DJ",name:"Djibouti",url:"flags/Flag_of_Djibouti.svg",regions:[k]},{code:"DM",name:"Dominica",url:"flags/Flag_of_Dominica.svg",regions:[N,"carib"]},{code:"DO",name:"Dominican Republic",url:"flags/Flag_of_the_Dominican_Republic.svg",regions:[N,"carib"]},{code:"TL",name:"East Timor",url:"flags/Flag_of_East_Timor.svg",accepts:["Timor Leste"],regions:[O]},{code:"EC",name:"Ecuador",url:"flags/Flag_of_Ecuador.svg",regions:[A]},{code:"EG",name:"Egypt",url:"flags/Flag_of_Egypt.svg",regions:[k]},{code:"SV",name:"El Salvador",url:"flags/Flag_of_El_Salvador.svg",regions:[N]},{code:"GQ",name:"Equatorial Guinea",url:"flags/Flag_of_Equatorial_Guinea.svg",regions:[k]},{code:"ER",name:"Eritrea",url:"flags/Flag_of_Eritrea.svg",regions:[k]},{code:"EE",name:"Estonia",url:"flags/Flag_of_Estonia.svg",regions:[M]},{code:"ET",name:"Ethiopia",url:"flags/Flag_of_Ethiopia.svg",regions:[k]},{code:"FJ",name:"Fiji",url:"flags/Flag_of_Fiji.svg",regions:[y]},{code:"FI",name:"Finland",url:"flags/Flag_of_Finland.svg",regions:[M]},{code:"FR",name:"France",url:"flags/Flag_of_France.svg",regions:[M]},{code:"GA",name:"Gabon",url:"flags/Flag_of_Gabon.svg",regions:[k]},{code:"GM",name:"Gambia",url:"flags/Flag_of_The_Gambia.svg",regions:[k]},{code:"GE",name:"Georgia",url:"flags/Flag_of_Georgia.svg",regions:[O]},{code:"DE",name:"Germany",url:"flags/Flag_of_Germany.svg",regions:[M]},{code:"GH",name:"Ghana",url:"flags/Flag_of_Ghana.svg",regions:[k]},{code:"GR",name:"Greece",url:"flags/Flag_of_Greece.svg",regions:[M]},{code:"GD",name:"Grenada",url:"flags/Flag_of_Grenada.svg",regions:[N,"carib"]},{code:"GT",name:"Guatemala",url:"flags/Flag_of_Guatemala.svg",regions:[N]},{code:"GN",name:"Guinea",url:"flags/Flag_of_Guinea.svg",regions:[k]},{code:"GW",name:"Guinea-Bissau",url:"flags/Flag_of_Guinea-Bissau.svg",regions:[k]},{code:"GY",name:"Guyana",url:"flags/Flag_of_Guyana.svg",regions:[A]},{code:"HT",name:"Haiti",url:"flags/Flag_of_Haiti.svg",regions:[N,"carib"]},{code:"HN",name:"Honduras",url:"flags/Flag_of_Honduras.svg",regions:[N]},{code:"HU",name:"Hungary",url:"flags/Flag_of_Hungary.svg",regions:[M]},{code:"IS",name:"Iceland",url:"flags/Flag_of_Iceland.svg",regions:[M]},{code:"IN",name:"India",url:"flags/Flag_of_India.svg",regions:[O]},{code:"ID",name:"Indonesia",url:"flags/Flag_of_Indonesia.svg",regions:[O]},{code:"IR",name:"Iran",url:"flags/Flag_of_Iran.svg",regions:[O,j]},{code:"IQ",name:"Iraq",url:"flags/Flag_of_Iraq.svg",regions:[O,j]},{code:"IE",name:"Ireland",url:"flags/Flag_of_Ireland.svg",regions:[M]},{code:"IL",name:"Israel",url:"flags/Flag_of_Israel.svg",regions:[O]},{code:"IT",name:"Italy",url:"flags/Flag_of_Italy.svg",regions:[M]},{code:"CI",name:"C\xf4te d'Ivoire",url:"flags/Flag_of_C%C3%B4te_d%27Ivoire.svg",accepts:["Ivory Coast","Cote d'Ivoire"],regions:[k]},{code:"JM",name:"Jamaica",url:"flags/Flag_of_Jamaica.svg",regions:[N,"carib"]},{code:"JP",name:"Japan",url:"flags/Flag_of_Japan.svg",regions:[O]},{code:"JO",name:"Jordan",url:"flags/Flag_of_Jordan.svg",regions:[O,j]},{code:"KZ",name:"Kazakhstan",url:"flags/Flag_of_Kazakhstan.svg",regions:[O]},{code:"KE",name:"Kenya",url:"flags/Flag_of_Kenya.svg",regions:[k]},{code:"KI",name:"Kiribati",url:"flags/Flag_of_Kiribati.svg",regions:[y]},{code:"KP",name:"North Korea",url:"flags/Flag_of_North_Korea.svg",accepts:["Democratic People's Republic of Korea","Best Korea","True Korea","Perfect Nation"],regions:[O]},{code:"KR",name:"South Korea",url:"flags/Flag_of_South_Korea.svg",accepts:["Republic of Korea"],regions:[O]},{code:"KW",name:"Kuwait",url:"flags/Flag_of_Kuwait.svg",regions:[O,j]},{code:"KG",name:"Kyrgyzstan",url:"flags/Flag_of_Kyrgyzstan.svg",regions:[O]},{code:"LA",name:"Laos",url:"flags/Flag_of_Laos.svg",regions:[O]},{code:"LV",name:"Latvia",url:"flags/Flag_of_Latvia.svg",regions:[M]},{code:"LB",name:"Lebanon",url:"flags/Flag_of_Lebanon.svg",regions:[O,j]},{code:"LS",name:"Lesotho",url:"flags/Flag_of_Lesotho.svg",regions:[k]},{code:"LR",name:"Liberia",url:"flags/Flag_of_Liberia.svg",regions:[k]},{code:"LY",name:"Libya",url:"flags/Flag_of_Libya.svg",regions:[k]},{code:"LI",name:"Liechtenstein",url:"flags/Flag_of_Liechtenstein.svg",regions:[M]},{code:"LT",name:"Lithuania",url:"flags/Flag_of_Lithuania.svg",regions:[M]},{code:"LU",name:"Luxembourg",url:"flags/Flag_of_Luxembourg.svg",regions:[M]},{code:"MK",name:"North Macedonia",url:"flags/Flag_of_Macedonia.svg",accepts:["Macedonia"],regions:[M]},{code:"MG",name:"Madagascar",url:"flags/Flag_of_Madagascar.svg",regions:[k]},{code:"MW",name:"Malawi",url:"flags/Flag_of_Malawi.svg",regions:[k]},{code:"MY",name:"Malaysia",url:"flags/Flag_of_Malaysia.svg",regions:[O]},{code:"MV",name:"Maldives",url:"flags/Flag_of_Maldives.svg",regions:[O]},{code:"ML",name:"Mali",url:"flags/Flag_of_Mali.svg",regions:[k]},{code:"MT",name:"Malta",url:"flags/Flag_of_Malta.svg",regions:[M]},{code:"MH",name:"Marshall Islands",url:"flags/Flag_of_the_Marshall_Islands.svg",regions:[y]},{code:"MR",name:"Mauritania",url:"flags/Flag_of_Mauritania.svg",regions:[k]},{code:"MU",name:"Mauritius",url:"flags/Flag_of_Mauritius.svg",regions:[k]},{code:"MX",name:"Mexico",url:"flags/Flag_of_Mexico.svg",regions:[N]},{code:"FM",name:"Micronesia",url:"flags/Flag_of_the_Federated_States_of_Micronesia.svg",regions:[y]},{code:"MD",name:"Moldova",url:"flags/Flag_of_Moldova.svg",regions:[M]},{code:"MC",name:"Monaco",url:"flags/Flag_of_Monaco.svg",regions:[M]},{code:"MN",name:"Mongolia",url:"flags/Flag_of_Mongolia.svg",regions:[O]},{code:"ME",name:"Montenegro",url:"flags/Flag_of_Montenegro.svg",regions:[M]},{code:"MA",name:"Morocco",url:"flags/Flag_of_Morocco.svg",regions:[k]},{code:"MZ",name:"Mozambique",url:"flags/Flag_of_Mozambique.svg",regions:[k]},{code:"MM",name:"Myanmar",url:"flags/Flag_of_Myanmar.svg",accepts:["Burma"],regions:[O]},{code:"NA",name:"Namibia",url:"flags/Flag_of_Namibia.svg",regions:[k]},{code:"NR",name:"Nauru",url:"flags/Flag_of_Nauru.svg",regions:[y]},{code:"NP",name:"Nepal",url:"flags/Flag_of_Nepal.svg",regions:[O]},{code:"NL",name:"Netherlands",url:"flags/Flag_of_the_Netherlands.svg",regions:[M]},{code:"NZ",name:"New Zealand",url:"flags/Flag_of_New_Zealand.svg",regions:[y]},{code:"NI",name:"Nicaragua",url:"flags/Flag_of_Nicaragua.svg",regions:[N]},{code:"NE",name:"Niger",url:"flags/Flag_of_Niger.svg",regions:[k]},{code:"NG",name:"Nigeria",url:"flags/Flag_of_Nigeria.svg",regions:[k]},{code:"NO",name:"Norway",url:"flags/Flag_of_Norway.svg",regions:[M]},{code:"OM",name:"Oman",url:"flags/Flag_of_Oman.svg",regions:[O,j]},{code:"PK",name:"Pakistan",url:"flags/Flag_of_Pakistan.svg",regions:[O]},{code:"PW",name:"Palau",url:"flags/Flag_of_Palau.svg",regions:[y]},{code:"PS",name:"Palestine",url:"flags/Flag_of_Palestine.svg",regions:[O,j]},{code:"PA",name:"Panama",url:"flags/Flag_of_Panama.svg",regions:[N]},{code:"PG",name:"Papua New Guinea",url:"flags/Flag_of_Papua_New_Guinea.svg",regions:[y]},{code:"PY",name:"Paraguay",url:"flags/Flag_of_Paraguay.svg",regions:[A]},{code:"PE",name:"Peru",url:"flags/Flag_of_Peru.svg",regions:[A]},{code:"PH",name:"Philippines",url:"flags/Flag_of_the_Philippines.svg",regions:[O]},{code:"PL",name:"Poland",url:"flags/Flag_of_Poland.svg",regions:[M]},{code:"PT",name:"Portugal",url:"flags/Flag_of_Portugal.svg",regions:[M]},{code:"QA",name:"Qatar",url:"flags/Flag_of_Qatar.svg",regions:[O,j]},{code:"RO",name:"Romania",url:"flags/Flag_of_Romania.svg",regions:[M]},{code:"RU",name:"Russia",url:"flags/Flag_of_Russia.svg",regions:[M,O]},{code:"RW",name:"Rwanda",url:"flags/Flag_of_Rwanda.svg",regions:[k]},{code:"KN",name:"Saint Kitts and Nevis",url:"flags/Flag_of_Saint_Kitts_and_Nevis.svg",accepts:["St Kitts and Nevis"],regions:[N,"carib"]},{code:"LC",name:"Saint Lucia",url:"flags/Flag_of_Saint_Lucia.svg",accepts:["St Lucia"],regions:[N,"carib"]},{code:"VC",name:"Saint Vincent and the Grenadines",url:"flags/Flag_of_Saint_Vincent_and_the_Grenadines.svg",accepts:["St Vincent and the Grenadines"],regions:[N,"carib"]},{code:"WS",name:"Samoa",url:"flags/Flag_of_Samoa.svg",regions:[y]},{code:"SM",name:"San Marino",url:"flags/Flag_of_San_Marino.svg",regions:[M]},{code:"ST",name:"Sao Tome and Principe",url:"flags/Flag_of_Sao_Tome_and_Principe.svg",regions:[k]},{code:"SA",name:"Saudi Arabia",url:"flags/Flag_of_Saudi_Arabia.svg",regions:[O,j]},{code:"SN",name:"Senegal",url:"flags/Flag_of_Senegal.svg",regions:[k]},{code:"RS",name:"Serbia",url:"flags/Flag_of_Serbia.svg",regions:[M]},{code:"SC",name:"Seychelles",url:"flags/Flag_of_Seychelles.svg",accepts:["Seychelle Islands"],regions:[y]},{code:"SL",name:"Sierra Leone",url:"flags/Flag_of_Sierra_Leone.svg",regions:[k]},{code:"SG",name:"Singapore",url:"flags/Flag_of_Singapore.svg",regions:[O]},{code:"SK",name:"Slovakia",url:"flags/Flag_of_Slovakia.svg",regions:[M]},{code:"SI",name:"Slovenia",url:"flags/Flag_of_Slovenia.svg",regions:[M]},{code:"sb",name:"Solomon Islands",url:"flags/Flag_of_the_Solomon_Islands.svg",regions:[y]},{code:"so",name:"Somalia",url:"flags/Flag_of_Somalia.svg",regions:[k]},{code:"ZA",name:"South Africa",url:"flags/Flag_of_South_Africa.svg",regions:[k]},{code:"SS",name:"South Sudan",url:"flags/Flag_of_South_Sudan.svg",regions:[k]},{code:"ES",name:"Spain",url:"flags/Flag_of_Spain.svg",regions:[M]},{code:"LK",name:"Sri Lanka",url:"flags/Flag_of_Sri_Lanka.svg",regions:[O]},{code:"SD",name:"Sudan",url:"flags/Flag_of_Sudan.svg",regions:[k]},{code:"SR",name:"Suriname",url:"flags/Flag_of_Suriname.svg",regions:[A]},{code:"SZ",name:"Eswatini",url:"flags/Flag_of_Swaziland.svg",accepts:["Swaziland"],regions:[k]},{code:"SE",name:"Sweden",url:"flags/Flag_of_Sweden.svg",regions:[M]},{code:"CH",name:"Switzerland",url:"flags/Flag_of_Switzerland_%28Pantone%29.svg",regions:[M]},{code:"SY",name:"Syria",url:"flags/Flag_of_Syria.svg",regions:[O,j]},{code:"TJ",name:"Tajikistan",url:"flags/Flag_of_Tajikistan.svg",regions:[O]},{code:"TZ",name:"Tanzania",url:"flags/Flag_of_Tanzania.svg",regions:[k]},{code:"TH",name:"Thailand",url:"flags/Flag_of_Thailand.svg",regions:[O]},{code:"TG",name:"Togo",url:"flags/Flag_of_Togo.svg",regions:[k]},{code:"TO",name:"Tonga",url:"flags/Flag_of_Tonga.svg",regions:[y]},{code:"TT",name:"Trinidad and Tobago",url:"flags/Flag_of_Trinidad_and_Tobago.svg",regions:[N,"carib"]},{code:"TN",name:"Tunisia",url:"flags/Flag_of_Tunisia.svg",regions:[k]},{code:"TR",name:"Turkey",url:"flags/Flag_of_Turkey.svg",regions:[M,O,j]},{code:"TM",name:"Turkmenistan",url:"flags/Flag_of_Turkmenistan.svg",regions:[O]},{code:"TV",name:"Tuvalu",url:"flags/Flag_of_Tuvalu.svg",regions:[y]},{code:"UG",name:"Uganda",url:"flags/Flag_of_Uganda.svg",regions:[k]},{code:"UA",name:"Ukraine",url:"flags/Flag_of_Ukraine.svg",regions:[M]},{code:"AE",name:"United Arab Emirates",url:"flags/Flag_of_the_United_Arab_Emirates.svg",accepts:["UAE"],regions:[O,j]},{code:"GB",name:"United Kingdom",url:"flags/Flag_of_the_United_Kingdom.svg",accepts:["UK"],regions:[M]},{code:"US",name:"United States",url:"flags/Flag_of_the_United_States.svg",accepts:["US","USA","United States of America","Murica"],regions:[N]},{code:"UY",name:"Uruguay",url:"flags/Flag_of_Uruguay.svg",regions:[A]},{code:"UZ",name:"Uzbekistan",url:"flags/Flag_of_Uzbekistan.svg",regions:[O]},{code:"VU",name:"Vanuatu",url:"flags/Flag_of_Vanuatu.svg",regions:[y]},{code:"VA",name:"Vatican City",url:"flags/Flag_of_the_Vatican_City.svg",accepts:["Vatican","Holy See"],regions:[M]},{code:"VE",name:"Venezuela",url:"flags/Flag_of_Venezuela.svg",regions:[A]},{code:"VN",name:"Vietnam",url:"flags/Flag_of_Vietnam.svg",regions:[O]},{code:"YE",name:"Yemen",url:"flags/Flag_of_Yemen.svg",regions:[O,j]},{code:"ZM",name:"Zambia",url:"flags/Flag_of_Zambia.svg",regions:[k]},{code:"ZW",name:"Zimbabwe",url:"flags/Flag_of_Zimbabwe.svg",regions:[k]}],G=n(29),T=n.n(G),L=n(22),I=n.n(L),P=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n=0,o=1,r=function(e){return"".concat(function(e){return function(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=e.toString();n.length<a;)n="0".concat(n);return n}(T.a.encode(e))}(e%a))},s=function(n){return I.a.flattenDeep(n.split(",").slice(1).map(function(n){var o,r=(o=n.substring(0,2),T.a.decode(o)),s=n[2],t=n.substring(3).match(/.{2}/g);return+s?t:(t=new Set(t),I.a.chunks(e,a)[r].map(function(e){return e.code}).filter(function(e){return!t.has(e)}))}))};return{compress:function(s){var t=function(n){var s=I.a.chunk(e,a),t={};return s.forEach(function(e,o){var s=e.map(function(e){return e.code}).filter(function(e){return n.includes(e)});if(s.length){var l=s.length<a/2;e.map(function(e){return e.code}).forEach(function(e){var a=l?n.includes(e):!n.includes(e),s=r(o);t[s]=t.hasOwnProperty(s)?t[s]:"".concat(+l),a&&(t[s]="".concat(t[s]).concat(e))})}}),[o,I.a.map(t,function(e,a){return"".concat(a).concat(e)}).join()].join()}(s),l=function(a){var o=a.length<e.length/2;return[n,+o,e.map(function(e){return e.code}).filter(function(e){return o?a.includes(e):!a.includes(e)}).join("")].join("")}(s);return t.length<l.length?t:l},decompress:function(a){return+a[0]?s(a):function(a){var n=a[1],o=a.substring(2).match(/.{2}/g);return+n?o:(o=new Set(o),e.map(function(e){return e.code}).filter(function(e){return!o.has(e)}))}(a)}}};function R(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-self: center;\n  align-self: center;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n"]);return R=function(){return e},e}function U(){var e=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  right 0;\n  bottom: 0;\n  left: 0;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n"]);return U=function(){return e},e}function z(){var e=Object(m.a)(["\n  width: 100%;\n  padding-top: 100%;\n  position: relative;\n"]);return z=function(){return e},e}function K(){var e=Object(m.a)(["\n  font-style: italic;\n"]);return K=function(){return e},e}function x(){var e=Object(m.a)(["\n  font-family: 'Oswald', san-serif;\n  text-align: center;\n  width: 100%;\n"]);return x=function(){return e},e}var D=v.a.h1(x()),V=v.a.h4(K()),H=v.a.div(z()),Z=v.a.div(U()),J=v.a.div(R()),W=function(e){return r.a.createElement(J,{onMouseOver:function(){e.onHover(e.region)},onMouseOut:function(){e.onLeave(e.region)},onClick:function(a){a.preventDefault(),e.onClick(e.region)}},e.active?r.a.createElement("button",{className:"ui button circular basic tiny compact active"},e.children):e.children)},Y=function(e){var a=Object(o.useState)("all"),n=Object(_.a)(a,2),s=n[0],t=n[1],l=Object(o.useState)("all"),g=Object(_.a)(l,2),i=g[0],c=g[1],u=Object(o.useState)(""),d=Object(_.a)(u,2),m=d[0],v=d[1];Object(o.useEffect)(function(){var e=B.filter(function(e){return s==C||e.regions.includes(s)}).map(function(e){return e.code}),a=P(B).compress(e);v(a)},[s]);var F=function(e,a){return r.a.createElement(W,{onHover:function(){return c(a)},onLeave:function(){return c(s)},onClick:function(){return t(a)},active:s===a},e)};return r.a.createElement("div",{className:"ui card centered"},r.a.createElement("div",{className:"content"},r.a.createElement(D,null,"LEARN YOUR FLAGS")),r.a.createElement("div",{className:"content"},r.a.createElement(V,null,"To begin, select a region"),r.a.createElement(H,null,r.a.createElement(Z,null,F("World",C),F("North America",N),F("South America",A),F("Europe",M),r.a.createElement(w,{region:i}),F("Africa",k),F("Asia",O),F("Middle East",j),F("Oceania",y))),r.a.createElement(f.b,{to:"/play?stack=".concat(m)},r.a.createElement("button",{className:"fluid ui button primary basic"},"Go")),r.a.createElement("div",{className:"ui horizontal divider"},"Or"),r.a.createElement(V,null,"Paste in a code from a previous game"),r.a.createElement("div",{className:"ui action input fluid"},r.a.createElement("input",{type:"text",placeholder:"Paste code..."}),r.a.createElement("button",{className:"ui button"},"Go"))))},q=n(27),Q=n(10),X=(n(58),n(41)),$=n.n(X);function ee(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  min-height: 354px;\n"]);return ee=function(){return e},e}var ae=v.a.div(ee()),ne=function(e){var a=e.url;return r.a.createElement(ae,null,r.a.createElement("div",{className:"ui card centered"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:a}))))};function oe(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return oe=function(){return e},e}var re=function(e){var a=e.guess;return r.a.createElement("div",{className:"item"},r.a.createElement("i",{class:"close icon middle aligned"}),r.a.createElement("div",{class:"content"},a))},se=function(e){var a=e.guesses;return 0==a.length?null:r.a.createElement("div",{class:"extra content"},r.a.createElement("div",{class:"ui divided list"},a.map(function(e){return r.a.createElement(re,{guess:e})})))},te=v.a.form(oe()),le=function(e){var a=Object(o.useState)(e.guesses||[]),n=Object(_.a)(a,2),s=n[0],t=n[1],l=Object(o.useState)(""),g=Object(_.a)(l,2),i=g[0],c=g[1],u=function(e){return e.toLowerCase().replace(/\b(the|and|of')\b/gi,"").replace(/\s\s+/gi," ").trim()};return r.a.createElement("div",{className:"ui card centered"},r.a.createElement("div",{className:"content"},r.a.createElement(te,{className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"text",placeholder:"Enter country name",autoFocus:!0,value:i,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"ui buttons"},r.a.createElement("button",{className:"ui button primary",onClick:function(a){a.preventDefault(),i&&(t([].concat(Object(Q.a)(s),[i])),function(a){var n=u(a),o=e.data.name,r=e.data.accepts||[];return[o].concat(Object(Q.a)(r)).map(function(e){return u(e)}).some(function(e){return n==e})}(i)&&(e.onSuccess(s),t([])),c(""))}},"Guess"),r.a.createElement("button",{className:"ui button",onClick:function(a){a.preventDefault(),e.onSkip(s),c(""),t([])}},"Skip"),r.a.createElement("button",{className:"ui button negative",onClick:function(a){a.preventDefault(),e.onGiveUp(s),c(""),t([])}},"Give Up")))),r.a.createElement(se,{guesses:s}))},ge=function(e){return r.a.createElement("div",{className:"ui card centered"},r.a.createElement("div",{className:"content"},r.a.createElement("span",{className:"header"},"Correct!"),r.a.createElement("div",{className:"description"},"You got ",e.data.name," correct on your ",function(e){var a=["th","st","nd","rd"],n=e%100;return e+(a[(n-20)%10]||a[n]||a[0])}(e.data.guesses.length+1)," try.")),r.a.createElement("div",{className:"extra content"},r.a.createElement("button",{className:"ui button",type:"button",onClick:function(a){a.preventDefault(),e.onNext()},autoFocus:!0},"Next")))},ie=function(e){return r.a.createElement("div",{className:"ui card centered"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"meta"},"The correct answer was..."),r.a.createElement("span",{className:"header"},e.data.name)),r.a.createElement("div",{className:"extra content"},r.a.createElement("button",{className:"ui button",type:"button",onClick:function(a){a.preventDefault(),e.onNext()},autoFocus:!0},"Next")))},ce="GUESSING",ue="SUCCESS",fe="GIVE_UP",de=function(e){function a(){var e,n;Object(l.a)(this,a);for(var o=arguments.length,s=new Array(o),t=0;t<o;t++)s[t]=arguments[t];return(n=Object(i.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(s)))).state={doingStack:n.initializeStack(),rightStack:[],wrongStack:[],stage:ce},n.onSuccess=function(e){var a=n.state.doingStack,o=a[0];n.setState({stage:ue,doingStack:[Object(q.a)({},o,{guesses:e})].concat(Object(Q.a)(a.slice(1)))})},n.onFail=function(e){var a=n.state.doingStack,o=a[0];n.setState({stage:fe,doingStack:[Object(q.a)({},o,{guesses:e})].concat(Object(Q.a)(a.slice(1)))})},n.onSkip=function(e){var a=n.state.doingStack,o=a[0];n.setState({doingStack:[].concat(Object(Q.a)(a.slice(1)),[Object(q.a)({},o,{guesses:e})])})},n.onNext=function(e){var a,o=e?"rightStack":"wrongStack";n.setState((a={},Object(F.a)(a,o,[].concat(Object(Q.a)(n.state[o]),[n.state.doingStack[0]])),Object(F.a)(a,"doingStack",n.state.doingStack.slice(1)),Object(F.a)(a,"stage",ce),a))},n.convertStageToComponents=function(){switch(n.state.stage){case ce:return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{url:n.state.doingStack[0].url}),r.a.createElement(le,{data:n.state.doingStack[0],onSuccess:n.onSuccess,onSkip:n.onSkip,onGiveUp:n.onFail}));case ue:return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{url:n.state.doingStack[0].url}),r.a.createElement(ge,{data:n.state.doingStack[0],onNext:function(){return n.onNext(!0)}}));case fe:return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{url:n.state.doingStack[0].url}),r.a.createElement(ie,{data:n.state.doingStack[0],onNext:function(){return n.onNext(!1)}}))}},n}return Object(u.a)(a,e),Object(g.a)(a,[{key:"initializeStack",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=$.a.parse(this.props.location.search);return P(B).decompress(e.stack).map(function(e){return B.find(function(a){return a.code===e})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(this.convertStageToComponents,null))}}]),a}(o.Component),_e=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:Y}),r.a.createElement(d.a,{path:"/play",component:de}))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t.a.render(r.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.cf0e0a47.chunk.js.map