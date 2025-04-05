const continentData = {
    europe: [
      { country: "Albanija", capital: "Tirana", abbreviation: "AL", alternatives: [] },
      { country: "Andora", capital: "Andora", abbreviation: "AD", alternatives: [] },
      { country: "Austrija", capital: "Viena", abbreviation: "AT", alternatives: [] },
      { country: "Belgija", capital: "Briuselis", abbreviation: "BE", alternatives: [] },
      { country: "Bosnija ir Hercegovina", capital: "Sarajevas", abbreviation: "BA", alternatives: [] },
      { country: "Bulgarija", capital: "Sofija", abbreviation: "BG", alternatives: [] },
      { country: "Kroatija", capital: "Zagrebas", abbreviation: "HR", alternatives: [] },
      { country: "Kipras", capital: "Nikosija", abbreviation: "CY", alternatives: [] },
      { country: "Čekija", capital: "Praha", abbreviation: "CZ", alternatives: [] },
      { country: "Danija", capital: "Kopenhaga", abbreviation: "DK", alternatives: [] },
      { country: "Estija", capital: "Talinas", abbreviation: "EE", alternatives: [] },
      { country: "Suomija", capital: "Helsinkis", abbreviation: "FI", alternatives: [] },
      { country: "Prancūzija", capital: "Paryžius", abbreviation: "FR", alternatives: [] },
      { country: "Vokietija", capital: "Berlynas", abbreviation: "DE", alternatives: [] },
      { country: "Graikija", capital: "Atėnai", abbreviation: "GR", alternatives: [] },
      { country: "Vengrija", capital: "Budapeštas", abbreviation: "HU", alternatives: [] },
      { country: "Islandija", capital: "Reikjavikas", abbreviation: "IS", alternatives: [] },
      { country: "Airija", capital: "Dublinas", abbreviation: "IE", alternatives: [] },
      { country: "Italija", capital: "Roma", abbreviation: "IT", alternatives: [] },
      { country: "Latvija", capital: "Ryga", abbreviation: "LV", alternatives: [] },
      { country: "Lichtenšteinas", capital: "Vaducas", abbreviation: "LI", alternatives: [] },
      { country: "Lietuva", capital: "Vilnius", abbreviation: "LT", alternatives: [] },
      { country: "Liuksemburgas", capital: "Liuksemburgas", abbreviation: "LU", alternatives: [] },
      { country: "Malta", capital: "Valeta", abbreviation: "MT", alternatives: [] },
      { country: "Moldova", capital: "Kišiniovas", abbreviation: "MD", alternatives: [] },
      { country: "Monakas", capital: "Monakas", abbreviation: "MC", alternatives: [] },
      { country: "Juodkalnija", capital: "Podgorica", abbreviation: "ME", alternatives: [] },
      { country: "Nyderlandai", capital: "Amsterdamas", abbreviation: "NL", alternatives: [] },
      { country: "Šiaurės Makedonija", capital: "Skopjė", abbreviation: "MK", alternatives: [] },
      { country: "Norvegija", capital: "Oslas", abbreviation: "NO", alternatives: [] },
      { country: "Lenkija", capital: "Varšuva", abbreviation: "PL", alternatives: [] },
      { country: "Portugalija", capital: "Lisabona", abbreviation: "PT", alternatives: [] },
      { country: "Rumunija", capital: "Bukareštas", abbreviation: "RO", alternatives: [] },
      { country: "San Marinas", capital: "San Marinas", abbreviation: "SM", alternatives: [] },
      { country: "Serbija", capital: "Belgradas", abbreviation: "RS", alternatives: [] },
      { country: "Slovakija", capital: "Bratislava", abbreviation: "SK", alternatives: [] },
      { country: "Slovėnija", capital: "Liubliana", abbreviation: "SI", alternatives: [] },
      { country: "Ispanija", capital: "Madridas", abbreviation: "ES", alternatives: [] },
      { country: "Švedija", capital: "Stokholmas", abbreviation: "SE", alternatives: [] },
      { country: "Šveicarija", capital: "Bernas", abbreviation: "CH", alternatives: [] },
      { country: "Ukraina", capital: "Kijevas", abbreviation: "UA", alternatives: [] },
      { country: "Jungtinė Karalystė", capital: "Londonas", abbreviation: "GB", alternatives: ['UK', "GB"] },
      { country: "Vatikanas", capital: "Vatikanas", abbreviation: "VA", alternatives: [] },
      { country: "Kosovas", capital: "Priština", abbreviation: "XK", alternatives: [] },
    ],
    asia: [
        { country: "Afganistanas", capital: "Kabulas", abbreviation: "AF", alternatives: [] },
        { country: "Armėnija", capital: "Jerevanas", abbreviation: "AM", alternatives: [] },
        { country: "Azerbaidžanas", capital: "Baku", abbreviation: "AZ", alternatives: [] },
        { country: "Bahreinas", capital: "Manama", abbreviation: "BH", alternatives: [] },
        { country: "Bangladešas", capital: "Daka", abbreviation: "BD", alternatives: [] },
        { country: "Butanas", capital: "Timpu", abbreviation: "BT", alternatives: [] },
        { country: "Brunėjus", capital: "Bandar Seri Begavanas", abbreviation: "BN", alternatives: [] },
        { country: "Kambodža", capital: "Pnompenis", abbreviation: "KH", alternatives: [] },
        { country: "Kinija", capital: "Pekinas", abbreviation: "CN", alternatives: [] },
        { country: "Kipras", capital: "Nikosija", abbreviation: "CY", alternatives: [] },
        { country: "Gruzija", capital: "Tbilisis", abbreviation: "GE", alternatives: [] },
        { country: "Indija", capital: "Naujasis Delis", abbreviation: "IN", alternatives: [] },
        { country: "Indonezija", capital: "Džakarta", abbreviation: "ID", alternatives: [] },
        { country: "Irakas", capital: "Bagdadas", abbreviation: "IQ", alternatives: [] },
        { country: "Iranas", capital: "Teheranas", abbreviation: "IR", alternatives: [] },
        { country: "Izraelis", capital: "Jeruzalė", abbreviation: "IL", alternatives: [] },
        { country: "Japonija", capital: "Tokijas", abbreviation: "JP", alternatives: [] },
        { country: "Jordanija", capital: "Amanas", abbreviation: "JO", alternatives: [] },
        { country: "Kazachstanas", capital: "Astana", abbreviation: "KZ", alternatives: [] },
        { country: "Kuveitas", capital: "Kuveitas", abbreviation: "KW", alternatives: [] },
        { country: "Kirgizija", capital: "Biškekas", abbreviation: "KG", alternatives: [] },
        { country: "Laosas", capital: "Vientianas", abbreviation: "LA", alternatives: [] },
        { country: "Libanas", capital: "Beirutas", abbreviation: "LB", alternatives: [] },
        { country: "Malaizija", capital: "Kuala Lumpūras", abbreviation: "MY", alternatives: [] },
        { country: "Maldyvai", capital: "Malė", abbreviation: "MV", alternatives: [] },
        { country: "Mongolija", capital: "Ulan Batoras", abbreviation: "MN", alternatives: [] },
        { country: "Mianmaras", capital: "Neipidas", abbreviation: "MM", alternatives: [] },
        { country: "Nepalas", capital: "Katmandu", abbreviation: "NP", alternatives: [] },
        { country: "Šiaurės Korėja", capital: "Pchenjanas", abbreviation: "KP", alternatives: [] },
        { country: "Omanas", capital: "Maskatas", abbreviation: "OM", alternatives: [] },
        { country: "Pakistanas", capital: "Islamabadas", abbreviation: "PK", alternatives: [] },
        { country: "Palestina", capital: "Rytų Jeruzalė", abbreviation: "PS", alternatives: [] },
        { country: "Filipinai", capital: "Manila", abbreviation: "PH", alternatives: [] },
        { country: "Kataras", capital: "Doha", abbreviation: "QA", alternatives: [] },
        { country: "Saudo Arabija", capital: "Rijadas", abbreviation: "SA", alternatives: [] },
        { country: "Singapūras", capital: "Singapūras", abbreviation: "SG", alternatives: [] },
        { country: "Pietų Korėja", capital: "Seulas", abbreviation: "KR", alternatives: [] },
        { country: "Sirija", capital: "Damaskas", abbreviation: "SY", alternatives: [] },
        { country: "Tadžikistanas", capital: "Dušanbė", abbreviation: "TJ", alternatives: [] },
        { country: "Tailandas", capital: "Bankokas", abbreviation: "TH", alternatives: [] },
        { country: "Turkija", capital: "Ankara", abbreviation: "TR", alternatives: [] },
        { country: "Turkmėnistanas", capital: "Ašchabadas", abbreviation: "TM", alternatives: [] },
        { country: "Jungtiniai Arabų Emyratai", capital: "Abu Dabis", abbreviation: "AE", alternatives: [] },
        { country: "Uzbekistanas", capital: "Taškentas", abbreviation: "UZ", alternatives: [] },
        { country: "Vietnamas", capital: "Hanojus", abbreviation: "VN", alternatives: [] },
        { country: "Jemenas", capital: "Sana", abbreviation: "YE", alternatives: [] }
    ],
    africa: [
        { country: "Alžyras", capital: "Alžyras", abbreviation: "DZ", alternatives: [] },
        { country: "Angola", capital: "Luanda", abbreviation: "AO", alternatives: [] },
        { country: "Beninas", capital: "Porto Novas", abbreviation: "BJ", alternatives: [] },
        { country: "Botsvana", capital: "Gaboronas", abbreviation: "BW", alternatives: [] },
        { country: "Burkina Fasas", capital: "Uagadugu", abbreviation: "BF", alternatives: [] },
        { country: "Burundis", capital: "Gitega", abbreviation: "BI", alternatives: [] },
        { country: "Žaliasis Kyšulys", capital: "Praja", abbreviation: "CV", alternatives: [] },
        { country: "Kamerūnas", capital: "Jaundė", abbreviation: "CM", alternatives: [] },
        { country: "Centrinės Afrikos Respublika", capital: "Bangis", abbreviation: "CF", alternatives: [] },
        { country: "Čadas", capital: "Ndžamena", abbreviation: "TD", alternatives: [] },
        { country: "Komorai", capital: "Moronis", abbreviation: "KM", alternatives: [] },
        { country: "Kongas (Brazzaville)", capital: "Brazzavilis", abbreviation: "CG", alternatives: [] },
        { country: "Kongas (Kinšasa)", capital: "Kinšasa", abbreviation: "CD", alternatives: [] },
        { country: "Džibutis", capital: "Džibutis", abbreviation: "DJ", alternatives: [] },
        { country: "Egiptas", capital: "Kairas", abbreviation: "EG", alternatives: [] },
        { country: "Pusiaujo Gvinėja", capital: "Malabas", abbreviation: "GQ", alternatives: [] },
        { country: "Eritrėja", capital: "Asmara", abbreviation: "ER", alternatives: [] },
        { country: "Esvatinis", capital: "Mbabanė", abbreviation: "SZ", alternatives: [] },
        { country: "Etiopija", capital: "Adis Abeba", abbreviation: "ET", alternatives: [] },
        { country: "Gabonas", capital: "Librevilis", abbreviation: "GA", alternatives: [] },
        { country: "Gambija", capital: "Bandžulis", abbreviation: "GM", alternatives: [] },
        { country: "Gana", capital: "Akra", abbreviation: "GH", alternatives: [] },
        { country: "Bisau Gvinėja", capital: "Bisau", abbreviation: "GW", alternatives: [] },
        { country: "Dramblio Kaulo Krantas", capital: "Jamuskas", abbreviation: "CI", alternatives: [] },
        { country: "Kenija", capital: "Nairobis", abbreviation: "KE", alternatives: [] },
        { country: "Lesotas", capital: "Maseru", abbreviation: "LS", alternatives: [] },
        { country: "Liberija", capital: "Monrovija", abbreviation: "LR", alternatives: [] },
        { country: "Libija", capital: "Tripolis", abbreviation: "LY", alternatives: [] },
        { country: "Madagaskaras", capital: "Antananaryvas", abbreviation: "MG", alternatives: [] },
        { country: "Malavis", capital: "Lilongvė", abbreviation: "MW", alternatives: [] },
        { country: "Malis", capital: "Bamako", abbreviation: "ML", alternatives: [] },
        { country: "Mauritanija", capital: "Nuakšotas", abbreviation: "MR", alternatives: [] },
        { country: "Mauricijus", capital: "Port Luisas", abbreviation: "MU", alternatives: [] },
        { country: "Marokas", capital: "Rabat", abbreviation: "MA", alternatives: [] },
        { country: "Mozambikas", capital: "Maputu", abbreviation: "MZ", alternatives: [] },
        { country: "Namibija", capital: "Vindhukas", abbreviation: "NA", alternatives: [] },
        { country: "Nigeris", capital: "Niamejus", abbreviation: "NE", alternatives: [] },
        { country: "Nigerija", capital: "Abudža", abbreviation: "NG", alternatives: [] },
        { country: "Ruanda", capital: "Kigalis", abbreviation: "RW", alternatives: [] },
        { country: "San Tomė ir Prinsipė", capital: "San Tomė", abbreviation: "ST", alternatives: [] },
        { country: "Senegalas", capital: "Dakaras", abbreviation: "SN", alternatives: [] },
        { country: "Seyšeliai", capital: "Victoria", abbreviation: "SC", alternatives: [] },
        { country: "Siera Leonė", capital: "Frytaunas", abbreviation: "SL", alternatives: [] },
        { country: "Somalis", capital: "Mogadišas", abbreviation: "SO", alternatives: [] },
        { country: "Pietų Afrika", capital: "Pretorija", abbreviation: "ZA", alternatives: ["PAR"] },
        { country: "Pietų Sudanas", capital: "Džuba", abbreviation: "SS", alternatives: [] },
        { country: "Sudanas", capital: "Chartumas", abbreviation: "SD", alternatives: [] },
        { country: "Tanzanija", capital: "Dodoma", abbreviation: "TZ", alternatives: [] },
        { country: "Togas", capital: "Lomė", abbreviation: "TG", alternatives: [] },
        { country: "Tunisas", capital: "Tunisas", abbreviation: "TN", alternatives: [] },
        { country: "Uganda", capital: "Kampala", abbreviation: "UG", alternatives: [] },
        { country: "Zambija", capital: "Lusaka", abbreviation: "ZM", alternatives: [] },
        { country: "Zimbabvė", capital: "Hararė", abbreviation: "ZW", alternatives: [] }
    ],
    northAmerica: [
        { country: "Antigva ir Barbuda", capital: "Sent Džonsas", abbreviation: "AG", alternatives: [] },
        { country: "Bahamos", capital: "Naso", abbreviation: "BS", alternatives: [] },
        { country: "Barbadosas", capital: "Bridžtaunas", abbreviation: "BB", alternatives: [] },
        { country: "Belizas", capital: "Belmopanas", abbreviation: "BZ", alternatives: [] },
        { country: "Kanada", capital: "Otava", abbreviation: "CA", alternatives: [] },
        { country: "Kosta Rika", capital: "San Chosė", abbreviation: "CR", alternatives: [] },
        { country: "Kuba", capital: "Havana", abbreviation: "CU", alternatives: [] },
        { country: "Dominika", capital: "Rozo", abbreviation: "DM", alternatives: [] },
        { country: "Dominikos Respublika", capital: "Santo Domingas", abbreviation: "DO", alternatives: [] },
        { country: "Salvadoras", capital: "San Salvadoras", abbreviation: "SV", alternatives: [] },
        { country: "Grenada", capital: "Sent Džordžas", abbreviation: "GD", alternatives: [] },
        { country: "Gvatemala", capital: "Gvatemala", abbreviation: "GT", alternatives: [] },
        { country: "Haitis", capital: "Port o Prensas", abbreviation: "HT", alternatives: [] },
        { country: "Hondūras", capital: "Tegusigalpa", abbreviation: "HN", alternatives: [] },
        { country: "Jamaika", capital: "Kingstonas", abbreviation: "JM", alternatives: [] },
        { country: "Meksika", capital: "Meksikas", abbreviation: "MX", alternatives: [] },
        { country: "Nikaragva", capital: "Managva", abbreviation: "NI", alternatives: [] },
        { country: "Panama", capital: "Panama", abbreviation: "PA", alternatives: [] },
        { country: "Sent Kitsas ir Nevis", capital: "Baseterė", abbreviation: "KN", alternatives: [] },
        { country: "Sent Lusija", capital: "Kastris", abbreviation: "LC", alternatives: [] },
        { country: "Sent Vinsentas ir Grenadinai", capital: "Kingstaunas", abbreviation: "VC", alternatives: [] },
        { country: "Trinidadas ir Tobagas", capital: "Port of Speinas", abbreviation: "TT", alternatives: [] },
        { country: "Jungtinės Amerikos Valstijos", capital: "Vašingtonas", abbreviation: "US", alternatives: ["US", "Amerika", "Jungtinės Valstijos", "USA"] }
    ],
    southAmerica: [
        { country: "Argentina", capital: "Buenos Airės", abbreviation: "AR", alternatives: [] },
        { country: "Bolivija", capital: "Suukrė", abbreviation: "BO", alternatives: [] },
        { country: "Brazilija", capital: "Brazilija", abbreviation: "BR", alternatives: [] },
        { country: "Čilė", capital: "Santjagas", abbreviation: "CL", alternatives: [] },
        { country: "Kolumbija", capital: "Bogota", abbreviation: "CO", alternatives: [] },
        { country: "Ekvadoras", capital: "Kitas", abbreviation: "EC", alternatives: [] },
        { country: "Gajana", capital: "Džordžtaunas", abbreviation: "GY", alternatives: [] },
        { country: "Paragvajus", capital: "Asunsjonas", abbreviation: "PY", alternatives: [] },
        { country: "Peru", capital: "Lima", abbreviation: "PE", alternatives: [] },
        { country: "Surinamas", capital: "Paramaribas", abbreviation: "SR", alternatives: [] },
        { country: "Urugvajus", capital: "Montevidėjas", abbreviation: "UY", alternatives: [] },
        { country: "Venesuela", capital: "Karakasas", abbreviation: "VE", alternatives: [] }
    ],
    oceania: [
        { country: "Australija", capital: "Kanbera", abbreviation: "AU", alternatives: [] },
        { country: "Fidžis", capital: "Suva", abbreviation: "FJ", alternatives: [] },
        { country: "Kiribatis", capital: "Tarava", abbreviation: "KI", alternatives: [] },
        { country: "Maršalo Salos", capital: "Madžūras", abbreviation: "MH", alternatives: [] },
        { country: "Mikronezija", capital: "Palikiras", abbreviation: "FM", alternatives: [] },
        { country: "Nauru", capital: "Jarenas", abbreviation: "NR", alternatives: [] },
        { country: "Naujoji Zelandija", capital: "Velingtonas", abbreviation: "NZ", alternatives: [] },
        { country: "Palau", capital: "Ngerulmudas", abbreviation: "PW", alternatives: [] },
        { country: "Papua Naujoji Gvinėja", capital: "Port Morsbis", abbreviation: "PG", alternatives: [] },
        { country: "Samoa", capital: "Apia", abbreviation: "WS", alternatives: [] },
        { country: "Solomonų Salos", capital: "Honiara", abbreviation: "SB", alternatives: [] },
        { country: "Tonga", capital: "Nukualofa", abbreviation: "TO", alternatives: [] },
        { country: "Tuvalu", capital: "Funafuti", abbreviation: "TV", alternatives: [] },
        { country: "Vanuatu", capital: "Port Vila", abbreviation: "VU", alternatives: [] }
    ],
    all: [
      { country: "Albanija", capital: "Tirana", abbreviation: "AL", alternatives: [] },
      { country: "Andora", capital: "Andora", abbreviation: "AD", alternatives: [] },
      { country: "Austrija", capital: "Viena", abbreviation: "AT", alternatives: [] },
      { country: "Belgija", capital: "Briuselis", abbreviation: "BE", alternatives: [] },
      { country: "Bosnija ir Hercegovina", capital: "Sarajevas", abbreviation: "BA", alternatives: [] },
      { country: "Bulgarija", capital: "Sofija", abbreviation: "BG", alternatives: [] },
      { country: "Kroatija", capital: "Zagrebas", abbreviation: "HR", alternatives: [] },
      { country: "Kipras", capital: "Nikosija", abbreviation: "CY", alternatives: [] },
      { country: "Čekija", capital: "Praha", abbreviation: "CZ", alternatives: [] },
      { country: "Danija", capital: "Kopenhaga", abbreviation: "DK", alternatives: [] },
      { country: "Estija", capital: "Talinas", abbreviation: "EE", alternatives: [] },
      { country: "Suomija", capital: "Helsinkis", abbreviation: "FI", alternatives: [] },
      { country: "Prancūzija", capital: "Paryžius", abbreviation: "FR", alternatives: [] },
      { country: "Vokietija", capital: "Berlynas", abbreviation: "DE", alternatives: [] },
      { country: "Graikija", capital: "Atėnai", abbreviation: "GR", alternatives: [] },
      { country: "Vengrija", capital: "Budapeštas", abbreviation: "HU", alternatives: [] },
      { country: "Islandija", capital: "Reikjavikas", abbreviation: "IS", alternatives: [] },
      { country: "Airija", capital: "Dublinas", abbreviation: "IE", alternatives: [] },
      { country: "Italija", capital: "Roma", abbreviation: "IT", alternatives: [] },
      { country: "Latvija", capital: "Ryga", abbreviation: "LV", alternatives: [] },
      { country: "Lichtenšteinas", capital: "Vaducas", abbreviation: "LI", alternatives: [] },
      { country: "Lietuva", capital: "Vilnius", abbreviation: "LT", alternatives: [] },
      { country: "Liuksemburgas", capital: "Liuksemburgas", abbreviation: "LU", alternatives: [] },
      { country: "Malta", capital: "Valeta", abbreviation: "MT", alternatives: [] },
      { country: "Moldova", capital: "Kišiniovas", abbreviation: "MD", alternatives: [] },
      { country: "Monakas", capital: "Monakas", abbreviation: "MC", alternatives: [] },
      { country: "Juodkalnija", capital: "Podgorica", abbreviation: "ME", alternatives: [] },
      { country: "Nyderlandai", capital: "Amsterdamas", abbreviation: "NL", alternatives: [] },
      { country: "Šiaurės Makedonija", capital: "Skopjė", abbreviation: "MK", alternatives: [] },
      { country: "Norvegija", capital: "Oslas", abbreviation: "NO", alternatives: [] },
      { country: "Lenkija", capital: "Varšuva", abbreviation: "PL", alternatives: [] },
      { country: "Portugalija", capital: "Lisabona", abbreviation: "PT", alternatives: [] },
      { country: "Rumunija", capital: "Bukareštas", abbreviation: "RO", alternatives: [] },
      { country: "San Marinas", capital: "San Marinas", abbreviation: "SM", alternatives: [] },
      { country: "Serbija", capital: "Belgradas", abbreviation: "RS", alternatives: [] },
      { country: "Slovakija", capital: "Bratislava", abbreviation: "SK", alternatives: [] },
      { country: "Slovėnija", capital: "Liubliana", abbreviation: "SI", alternatives: [] },
      { country: "Ispanija", capital: "Madridas", abbreviation: "ES", alternatives: [] },
      { country: "Švedija", capital: "Stokholmas", abbreviation: "SE", alternatives: [] },
      { country: "Šveicarija", capital: "Bernas", abbreviation: "CH", alternatives: [] },
      { country: "Ukraina", capital: "Kijevas", abbreviation: "UA", alternatives: [] },
      { country: "Jungtinė Karalystė", capital: "Londonas", abbreviation: "GB", alternatives: ['UK', "GB"] },
      { country: "Vatikanas", capital: "Vatikanas", abbreviation: "VA", alternatives: [] },
      { country: "Kosovas", capital: "Priština", abbreviation: "XK", alternatives: [] },
      { country: "Afganistanas", capital: "Kabulas", abbreviation: "AF", alternatives: [] },
      { country: "Armėnija", capital: "Jerevanas", abbreviation: "AM", alternatives: [] },
      { country: "Azerbaidžanas", capital: "Baku", abbreviation: "AZ", alternatives: [] },
      { country: "Bahreinas", capital: "Manama", abbreviation: "BH", alternatives: [] },
      { country: "Bangladešas", capital: "Daka", abbreviation: "BD", alternatives: [] },
      { country: "Butanas", capital: "Timpu", abbreviation: "BT", alternatives: [] },
      { country: "Brunėjus", capital: "Bandar Seri Begavanas", abbreviation: "BN", alternatives: [] },
      { country: "Kambodža", capital: "Pnompenis", abbreviation: "KH", alternatives: [] },
      { country: "Kinija", capital: "Pekinas", abbreviation: "CN", alternatives: [] },
      { country: "Kipras", capital: "Nikosija", abbreviation: "CY", alternatives: [] },
      { country: "Gruzija", capital: "Tbilisis", abbreviation: "GE", alternatives: [] },
      { country: "Indija", capital: "Naujasis Delis", abbreviation: "IN", alternatives: [] },
      { country: "Indonezija", capital: "Džakarta", abbreviation: "ID", alternatives: [] },
      { country: "Irakas", capital: "Bagdadas", abbreviation: "IQ", alternatives: [] },
      { country: "Iranas", capital: "Teheranas", abbreviation: "IR", alternatives: [] },
      { country: "Izraelis", capital: "Jeruzalė", abbreviation: "IL", alternatives: [] },
      { country: "Japonija", capital: "Tokijas", abbreviation: "JP", alternatives: [] },
      { country: "Jordanija", capital: "Amanas", abbreviation: "JO", alternatives: [] },
      { country: "Kazachstanas", capital: "Astana", abbreviation: "KZ", alternatives: [] },
      { country: "Kuveitas", capital: "Kuveitas", abbreviation: "KW", alternatives: [] },
      { country: "Kirgizija", capital: "Biškekas", abbreviation: "KG", alternatives: [] },
      { country: "Laosas", capital: "Vientianas", abbreviation: "LA", alternatives: [] },
      { country: "Libanas", capital: "Beirutas", abbreviation: "LB", alternatives: [] },
      { country: "Malaizija", capital: "Kuala Lumpūras", abbreviation: "MY", alternatives: [] },
      { country: "Maldyvai", capital: "Malė", abbreviation: "MV", alternatives: [] },
      { country: "Mongolija", capital: "Ulan Batoras", abbreviation: "MN", alternatives: [] },
      { country: "Mianmaras", capital: "Neipidas", abbreviation: "MM", alternatives: [] },
      { country: "Nepalas", capital: "Katmandu", abbreviation: "NP", alternatives: [] },
      { country: "Šiaurės Korėja", capital: "Pchenjanas", abbreviation: "KP", alternatives: [] },
      { country: "Omanas", capital: "Maskatas", abbreviation: "OM", alternatives: [] },
      { country: "Pakistanas", capital: "Islamabadas", abbreviation: "PK", alternatives: [] },
      { country: "Palestina", capital: "Rytų Jeruzalė", abbreviation: "PS", alternatives: [] },
      { country: "Filipinai", capital: "Manila", abbreviation: "PH", alternatives: [] },
      { country: "Kataras", capital: "Doha", abbreviation: "QA", alternatives: [] },
      { country: "Saudo Arabija", capital: "Rijadas", abbreviation: "SA", alternatives: [] },
      { country: "Singapūras", capital: "Singapūras", abbreviation: "SG", alternatives: [] },
      { country: "Pietų Korėja", capital: "Seulas", abbreviation: "KR", alternatives: [] },
      { country: "Sirija", capital: "Damaskas", abbreviation: "SY", alternatives: [] },
      { country: "Tadžikistanas", capital: "Dušanbė", abbreviation: "TJ", alternatives: [] },
      { country: "Tailandas", capital: "Bankokas", abbreviation: "TH", alternatives: [] },
      { country: "Turkija", capital: "Ankara", abbreviation: "TR", alternatives: [] },
      { country: "Turkmėnistanas", capital: "Ašchabadas", abbreviation: "TM", alternatives: [] },
      { country: "Jungtiniai Arabų Emyratai", capital: "Abu Dabis", abbreviation: "AE", alternatives: [] },
      { country: "Uzbekistanas", capital: "Taškentas", abbreviation: "UZ", alternatives: [] },
      { country: "Vietnamas", capital: "Hanojus", abbreviation: "VN", alternatives: [] },
      { country: "Jemenas", capital: "Sana", abbreviation: "YE", alternatives: [] },
      { country: "Alžyras", capital: "Alžyras", abbreviation: "DZ", alternatives: [] },
      { country: "Angola", capital: "Luanda", abbreviation: "AO", alternatives: [] },
      { country: "Beninas", capital: "Porto Novas", abbreviation: "BJ", alternatives: [] },
      { country: "Botsvana", capital: "Gaboronas", abbreviation: "BW", alternatives: [] },
      { country: "Burkina Fasas", capital: "Uagadugu", abbreviation: "BF", alternatives: [] },
      { country: "Burundis", capital: "Gitega", abbreviation: "BI", alternatives: [] },
      { country: "Žaliasis Kyšulys", capital: "Praja", abbreviation: "CV", alternatives: [] },
      { country: "Kamerūnas", capital: "Jaundė", abbreviation: "CM", alternatives: [] },
      { country: "Centrinės Afrikos Respublika", capital: "Bangis", abbreviation: "CF", alternatives: [] },
      { country: "Čadas", capital: "Ndžamena", abbreviation: "TD", alternatives: [] },
      { country: "Komorai", capital: "Moronis", abbreviation: "KM", alternatives: [] },
      { country: "Kongas (Brazzaville)", capital: "Brazzavilis", abbreviation: "CG", alternatives: [] },
      { country: "Kongas (Kinšasa)", capital: "Kinšasa", abbreviation: "CD", alternatives: [] },
      { country: "Džibutis", capital: "Džibutis", abbreviation: "DJ", alternatives: [] },
      { country: "Egiptas", capital: "Kairas", abbreviation: "EG", alternatives: [] },
      { country: "Pusiaujo Gvinėja", capital: "Malabas", abbreviation: "GQ", alternatives: [] },
      { country: "Eritrėja", capital: "Asmara", abbreviation: "ER", alternatives: [] },
      { country: "Esvatinis", capital: "Mbabanė", abbreviation: "SZ", alternatives: [] },
      { country: "Etiopija", capital: "Adis Abeba", abbreviation: "ET", alternatives: [] },
      { country: "Gabonas", capital: "Librevilis", abbreviation: "GA", alternatives: [] },
      { country: "Gambija", capital: "Bandžulis", abbreviation: "GM", alternatives: [] },
      { country: "Gana", capital: "Akra", abbreviation: "GH", alternatives: [] },
      { country: "Bisau Gvinėja", capital: "Bisau", abbreviation: "GW", alternatives: [] },
      { country: "Dramblio Kaulo Krantas", capital: "Jamuskas", abbreviation: "CI", alternatives: [] },
      { country: "Kenija", capital: "Nairobis", abbreviation: "KE", alternatives: [] },
      { country: "Lesotas", capital: "Maseru", abbreviation: "LS", alternatives: [] },
      { country: "Liberija", capital: "Monrovija", abbreviation: "LR", alternatives: [] },
      { country: "Libija", capital: "Tripolis", abbreviation: "LY", alternatives: [] },
      { country: "Madagaskaras", capital: "Antananaryvas", abbreviation: "MG", alternatives: [] },
      { country: "Malavis", capital: "Lilongvė", abbreviation: "MW", alternatives: [] },
      { country: "Malis", capital: "Bamako", abbreviation: "ML", alternatives: [] },
      { country: "Mauritanija", capital: "Nuakšotas", abbreviation: "MR", alternatives: [] },
      { country: "Mauricijus", capital: "Port Luisas", abbreviation: "MU", alternatives: [] },
      { country: "Marokas", capital: "Rabat", abbreviation: "MA", alternatives: [] },
      { country: "Mozambikas", capital: "Maputu", abbreviation: "MZ", alternatives: [] },
      { country: "Namibija", capital: "Vindhukas", abbreviation: "NA", alternatives: [] },
      { country: "Nigeris", capital: "Niamejus", abbreviation: "NE", alternatives: [] },
      { country: "Nigerija", capital: "Abudža", abbreviation: "NG", alternatives: [] },
      { country: "Ruanda", capital: "Kigalis", abbreviation: "RW", alternatives: [] },
      { country: "San Tomė ir Prinsipė", capital: "San Tomė", abbreviation: "ST", alternatives: [] },
      { country: "Senegalas", capital: "Dakaras", abbreviation: "SN", alternatives: [] },
      { country: "Seyšeliai", capital: "Victoria", abbreviation: "SC", alternatives: [] },
      { country: "Siera Leonė", capital: "Frytaunas", abbreviation: "SL", alternatives: [] },
      { country: "Somalis", capital: "Mogadišas", abbreviation: "SO", alternatives: [] },
      { country: "Pietų Afrika", capital: "Pretorija", abbreviation: "ZA", alternatives: ["PAR"] },
      { country: "Pietų Sudanas", capital: "Džuba", abbreviation: "SS", alternatives: [] },
      { country: "Sudanas", capital: "Chartumas", abbreviation: "SD", alternatives: [] },
      { country: "Tanzanija", capital: "Dodoma", abbreviation: "TZ", alternatives: [] },
      { country: "Togas", capital: "Lomė", abbreviation: "TG", alternatives: [] },
      { country: "Tunisas", capital: "Tunisas", abbreviation: "TN", alternatives: [] },
      { country: "Uganda", capital: "Kampala", abbreviation: "UG", alternatives: [] },
      { country: "Zambija", capital: "Lusaka", abbreviation: "ZM", alternatives: [] },
      { country: "Zimbabvė", capital: "Hararė", abbreviation: "ZW", alternatives: [] },
      { country: "Antigva ir Barbuda", capital: "Sent Džonsas", abbreviation: "AG", alternatives: [] },
      { country: "Bahamos", capital: "Naso", abbreviation: "BS", alternatives: [] },
      { country: "Barbadosas", capital: "Bridžtaunas", abbreviation: "BB", alternatives: [] },
      { country: "Belizas", capital: "Belmopanas", abbreviation: "BZ", alternatives: [] },
      { country: "Kanada", capital: "Otava", abbreviation: "CA", alternatives: [] },
      { country: "Kosta Rika", capital: "San Chosė", abbreviation: "CR", alternatives: [] },
      { country: "Kuba", capital: "Havana", abbreviation: "CU", alternatives: [] },
      { country: "Dominika", capital: "Rozo", abbreviation: "DM", alternatives: [] },
      { country: "Dominikos Respublika", capital: "Santo Domingas", abbreviation: "DO", alternatives: [] },
      { country: "Salvadoras", capital: "San Salvadoras", abbreviation: "SV", alternatives: [] },
      { country: "Grenada", capital: "Sent Džordžas", abbreviation: "GD", alternatives: [] },
      { country: "Gvatemala", capital: "Gvatemala", abbreviation: "GT", alternatives: [] },
      { country: "Haitis", capital: "Port o Prensas", abbreviation: "HT", alternatives: [] },
      { country: "Hondūras", capital: "Tegusigalpa", abbreviation: "HN", alternatives: [] },
      { country: "Jamaika", capital: "Kingstonas", abbreviation: "JM", alternatives: [] },
      { country: "Meksika", capital: "Meksikas", abbreviation: "MX", alternatives: [] },
      { country: "Nikaragva", capital: "Managva", abbreviation: "NI", alternatives: [] },
      { country: "Panama", capital: "Panama", abbreviation: "PA", alternatives: [] },
      { country: "Sent Kitsas ir Nevis", capital: "Baseterė", abbreviation: "KN", alternatives: [] },
      { country: "Sent Lusija", capital: "Kastris", abbreviation: "LC", alternatives: [] },
      { country: "Sent Vinsentas ir Grenadinai", capital: "Kingstaunas", abbreviation: "VC", alternatives: [] },
      { country: "Trinidadas ir Tobagas", capital: "Port of Speinas", abbreviation: "TT", alternatives: [] },
      { country: "Jungtinės Amerikos Valstijos", capital: "Vašingtonas", abbreviation: "US", alternatives: ["US", "Amerika", "Jungtinės Valstijos", "USA"] },
      { country: "Argentina", capital: "Buenos Airės", abbreviation: "AR", alternatives: [] },
      { country: "Bolivija", capital: "Suukrė", abbreviation: "BO", alternatives: [] },
      { country: "Brazilija", capital: "Brazilija", abbreviation: "BR", alternatives: [] },
      { country: "Čilė", capital: "Santjagas", abbreviation: "CL", alternatives: [] },
      { country: "Kolumbija", capital: "Bogota", abbreviation: "CO", alternatives: [] },
      { country: "Ekvadoras", capital: "Kitas", abbreviation: "EC", alternatives: [] },
      { country: "Gajana", capital: "Džordžtaunas", abbreviation: "GY", alternatives: [] },
      { country: "Paragvajus", capital: "Asunsjonas", abbreviation: "PY", alternatives: [] },
      { country: "Peru", capital: "Lima", abbreviation: "PE", alternatives: [] },
      { country: "Surinamas", capital: "Paramaribas", abbreviation: "SR", alternatives: [] },
      { country: "Urugvajus", capital: "Montevidėjas", abbreviation: "UY", alternatives: [] },
      { country: "Venesuela", capital: "Karakasas", abbreviation: "VE", alternatives: [] },
      { country: "Australija", capital: "Kanbera", abbreviation: "AU", alternatives: [] },
      { country: "Fidžis", capital: "Suva", abbreviation: "FJ", alternatives: [] },
      { country: "Kiribatis", capital: "Tarava", abbreviation: "KI", alternatives: [] },
      { country: "Maršalo Salos", capital: "Madžūras", abbreviation: "MH", alternatives: [] },
      { country: "Mikronezija", capital: "Palikiras", abbreviation: "FM", alternatives: [] },
      { country: "Nauru", capital: "Jarenas", abbreviation: "NR", alternatives: [] },
      { country: "Naujoji Zelandija", capital: "Velingtonas", abbreviation: "NZ", alternatives: [] },
      { country: "Palau", capital: "Ngerulmudas", abbreviation: "PW", alternatives: [] },
      { country: "Papua Naujoji Gvinėja", capital: "Port Morsbis", abbreviation: "PG", alternatives: [] },
      { country: "Samoa", capital: "Apia", abbreviation: "WS", alternatives: [] },
      { country: "Solomonų Salos", capital: "Honiara", abbreviation: "SB", alternatives: [] },
      { country: "Tonga", capital: "Nukualofa", abbreviation: "TO", alternatives: [] },
      { country: "Tuvalu", capital: "Funafuti", abbreviation: "TV", alternatives: [] },
      { country: "Vanuatu", capital: "Port Vila", abbreviation: "VU", alternatives: [] }
    ]
  }
  
  const pagrindinis = document.getElementById("pagrindinis")
  const pabaiga = document.getElementById("pabaiga")
  const result = document.getElementById("rezultatas")
  const mygtukas = document.getElementById("saliuPasirinkimoMygtukas")
  const atsMygtukas = document.getElementById("atsMygtukas")
  const klausimasSalys = document.getElementById("klausimasSalys")
  const answer = document.getElementById("answer")
  const rez = document.getElementById("rez")
  const klausimas = document.getElementById("klausimas")
  const pabaigosZinute = document.getElementById("pabaigosZinute")
  const playAgain = document.getElementById("playAgain")
  const veliava = document.getElementById("veliava")
  const continentSelect = document.getElementById("continent-select")
  const countryCountInfo = document.getElementById("country-count-info")
  const saliuSkaiciausPasirinkimas = document.getElementById("saliuSkaiciausPasirinkimas")
  
  function imposeMinMax(el) {
    if (el.value === "") {
      el.value = 1
    }
  
    const selectedContinent = continentSelect.value
    const maxCountries = continentData[selectedContinent].length
  
    const value = Number.parseInt(el.value)
    if (isNaN(value)) {
      el.value = 1
      return
    }
  
    if (value < 1) {
      el.value = 1
    } else if (value > maxCountries) {
      el.value = maxCountries
    }
  }
  
  // Update max countries when continent changes
  continentSelect.addEventListener("change", function () {
    const selectedContinent = this.value
    const maxCountries = continentData[selectedContinent].length
  
    countryCountInfo.textContent = `Maksimalus šalių skaičius: ${maxCountries}`
  
    // Update input max attribute and value if needed
    saliuSkaiciausPasirinkimas.max = maxCountries
  
    if (Number.parseInt(saliuSkaiciausPasirinkimas.value) > maxCountries) {
      saliuSkaiciausPasirinkimas.value = maxCountries
    }
  })
  
  // Initialize with default continent
  document.addEventListener("DOMContentLoaded", () => {
    const selectedContinent = continentSelect.value
    const maxCountries = continentData[selectedContinent].length
  
    countryCountInfo.textContent = `Maksimalus šalių skaičius: ${maxCountries}`
    saliuSkaiciausPasirinkimas.max = maxCountries
  })
  
  let i = 0
  let selectedCountries = []
  let score = 0
  pagrindinis.hidden = true
  pabaiga.hidden = true
  let skaicius
  let salis
  let curentCountry
  let isCheckingAnswer = false
  
  mygtukas.onclick = mygtukopaspaudimas
  atsMygtukas.onclick = checkAnswer
  playAgain.onclick = funkcijaReload
  
  function funkcijaReload() {
    location.reload()
  }
  
  function mygtukopaspaudimas() {
    const selectedContinent = continentSelect.value
    const continentCountries = continentData[selectedContinent]
  
    skaicius = Number.parseInt(document.getElementById("saliuSkaiciausPasirinkimas").value)
  
    if (skaicius > continentCountries.length) {
      skaicius = continentCountries.length
    }
  
    klausimasSalys.hidden = true
    pagrindinis.hidden = false
  
    selectedCountries = [...continentCountries].sort(() => 0.5 - Math.random()).slice(0, skaicius)
    naujasKlausimas()
  }
  
  answer.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && !isCheckingAnswer) {
      checkAnswer()
    }
  })
  
function checkAnswer() {
  isCheckingAnswer = true
  atsMygtukas.disabled = "disabled"
  const atsakymas = answer.value.trim()

  if (atsakymas.toLowerCase() === curentCountry.country.toLowerCase() || 
      curentCountry.alternatives.some((alt) => atsakymas.toLowerCase() === alt.toLowerCase())) {
    score++
    result.innerText = "Teisingai"
    result.style.color = "green"
    rez.innerText = `${score}/${i}`
    setTimeout(naujasKlausimas, 1000)
  } else {
    result.innerText = `Neteisingai. Teisingas atsakymas yra ${curentCountry.country}`
    result.style.color = "red"
    rez.innerText = `${score}/${i}`
    setTimeout(naujasKlausimas, 2000)
  }
}
  
  function naujasKlausimas() {
    if (selectedCountries.length === 0) {
      gameOver()
      return
    }
  
    curentCountry = selectedCountries.pop()
    veliava.src = `https://flagcdn.com/w320/${curentCountry.abbreviation.toLowerCase()}.png`
    rez.innerText = `${score}/${i}`
  
    isCheckingAnswer = false
    atsMygtukas.disabled = ""
    answer.value = ""
    result.innerText = ""
  
    klausimas.innerText = "Parašyk šios šalies pavadinimą"
    i++
  }
  
  function gameOver() {
    pagrindinis.hidden = true
    pabaiga.hidden = false
  
    if (score >= skaicius) {
      pabaigosZinute.innerText = `Pabaiga. Rezultatas: ${score}/${skaicius}`
      pabaigosZinute.style.color = "green"
    } else {
      pabaigosZinute.innerText = `Pabaiga. Rezultatas: ${score}/${skaicius}`
    }
  }
  
  