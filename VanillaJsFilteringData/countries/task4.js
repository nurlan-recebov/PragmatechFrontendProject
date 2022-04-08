countries = {
        Afghanistan: [
            "Herat",
            "Kabul",
            "Kandahar",
            "Molah",
            "Rana",
            "Shar",
            "Sharif",
            "Wazir Akbar Khan"
        ],
        Albania: [
            "Elbasan",
            "Petran",
            "Pogradec",
            "Shkoder",
            "Tirana",
            "Ura Vajgurore"
        ],
        Andorra: [
            "Andorra la Vella",
            "Canillo",
            "Encamp",
            "Engordany",
            "Escaldes-Engordany",
            "La Massana",
            "Llorts",
            "Ordino",
            "Santa Coloma",
            "Sispony",
            "Soldeu"
        ],
        Angola: [
            "Ambriz",
            "Benguela",
            "Cabinda",
            "Cacole",
            "Camabatela",
            "Cazeta",
            "Huambo",
            "Kuito",
            "Lobito",
            "Luanda",
            "Lubango",
            "Lucapa",
            "Lumeje",
            "Malanje",
            "Menongue",
            "Muxaluando",
            "Namibe",
            "Ondjiva",
            "Piri",
            "Saurimo",
            "Talatona"
        ],
        AntiguaBarbuda: [
            "All Saints",
            "Cassada Gardens",
            "Codrington",
            "Old Road",
            "Parham",
            "Woods"
        ],
        Armenia: [
            "Abovyan",
            "Agarak",
            "Apaga",
            "Aparan",
            "Arabkir",
            "Ashtarak",
            "Erebuni Fortress",
            "Hrazdan",
            "Ijevan",
            "Jermuk",
            "Kapan",
            "Tsaghkadzor",
            "Vanadzor",
            "Yerevan"
        ],
        Aruba: [
            "Noord",
            "Oranjestad",
            "Palm Beach",
            "Paradera",
            "Ponton",
            "Sabaneta",
            "San Barbola",
            "Santa Cruz",
            "Sero Blanco",
            "Sint Nicolaas",
            "Tanki Lender"
        ],

        Azerbaijan: [
            "Baku",
            "Nakhchivan",
            "Quba",
            "Qusar",
            "Sulutapa",
            "Sumqayit",
            "Xirdalan",
            "Zurges"
        ],
        Bahamas: [
            "Andros Town",
            "Dunmore Town",
            "Freeport",
            "Marsh Harbour",
            "Nassau",
            "Palmetto Point",
            "Spanish Wells"
        ],
    }
    // Ölkə adı ən uzun olan ölkənin şəhərlərini
    // return edən funksiya yazın.
    // write
    // function that
    // return city names of country which name is the longest
function countCity(arr) {
    for (let key in arr) {
        let cityName = Math.max(key.length);
        console.log(`${cityName}`)
    }

}
countCity(countries)