function getCharData (name){
    let data = {
        caras: {
            id: "Cara",
            inicio: 0,
            total: 54,
            sexo: [29, 25],
            script: "app.activeDocument.activeLayer.translate(0,0)"
        },
        ojos: {
            id: "Ojos",
            inicio: 54,
            total: 74,
            sexo: [39, 35],
            script: "app.activeDocument.activeLayer.translate(0,-50)"
        },
        cejas: {
            id: "Cejas",
            inicio: 128,
            total: 30,
            sexo: [15, 15],
            script: "app.activeDocument.activeLayer.translate(0,-120)"
        },
        narices: {
            id: "Nariz",
            inicio: 158,
            total: 24,
            sexo: [12, 12],
            script: "app.activeDocument.activeLayer.translate(0,0)"
        },
        labios: {
            id: "Labios",
            inicio: 182,
            total: 30,
            sexo: [15, 15],
            script: "app.activeDocument.activeLayer.translate(0,130)"
        },
        orejas: {
            id: "Orejas",
            inicio: 212,
            total: 18,
            sexo: [9, 9],
            script: "app.activeDocument.activeLayer.resize(85,100)"
        },
        papada: {
            id: "Papada",
            inicio: 230,
            total: 18,
            sexo: [9, 9],
            script: "app.activeDocument.activeLayer.translate(0,150)"
        },
        cachetes: {
            id: "Cachetes",
            inicio: 248,
            total: 12,
            sexo: [9, 3],
            script: "app.activeDocument.activeLayer.translate(0,50)"
        },
        arrugasEntrecejo: {
            id: "Arrugas Entrecejo",
            inicio: 260,
            total: 18,
            sexo: [9, 9],
            script: "app.activeDocument.activeLayer.translate(0,-130)"
        },
        arrugasPerioculares: {
            id: "Arrugas Perioculares",
            inicio: 278,
            total: 18,
            sexo: [9, 9],
            script: "app.activeDocument.activeLayer.translate(0,-60)"
        },
        arrugasNasogenianas: {
            id: "Arrugas Nasogenianas",
            inicio: 296,
            total: 18,
            sexo: [9, 9],
            script: "app.activeDocument.activeLayer.translate(0,100)"
        },
        arrugasPeribucales: {
            id: "Arrugas Peribucales",
            inicio: 314,
            total: 18,
            sexo: [9, 9],
            script: "app.activeDocument.activeLayer.translate(0,80)"
        },
        acne: {
            id: "Acne",
            inicio: 332,
            total: 8,
            sexo: [4, 4],
            script: "app.activeDocument.activeLayer.translate(0,0)"
        },
        cicatrices: {
            id: "Cicatrices",
            inicio: 340,
            total: 4,
            sexo: [],
            script: "app.activeDocument.activeLayer.translate(0,0)"
        },
        pecas: {
            id: "Pecas",
            inicio: 344,
            total: 2,
            sexo: [],
            script: "app.activeDocument.activeLayer.translate(0,20)"
        },
        verrugasyLunares: {
            id: "Verrugas y Lunares",
            inicio: 346,
            total: 10,
            sexo: [],
            script: "app.activeDocument.activeLayer.translate(0,0)"
        },
        hoyoMenton: {
            id: "Hoyo Menton",
            inicio: 356,
            total: 12,
            sexo: [6, 6],
            script: "app.activeDocument.activeLayer.translate(0,200)"
        },
        asimetrias: {
            id: "Asimetrias",
            inicio: 368,
            total: 7,
            sexo: [],
            script: "app.activeDocument.activeLayer.translate(0,0)"
        },
        torus: {
            id: "Torus",
            inicio: 375,
            total: 3,
            sexo: [],
            script: "app.activeDocument.activeLayer.translate(0,-140)"
        },
        cabelleras: {
            id: "Cabelleras",
            inicio: 378,
            total: 126,
            sexo: [76, 50],
            script: "app.activeDocument.activeLayer.translate(0,-50)"
        },
        bigotes: {
            id: "Bigotes",
            inicio: 504,
            total: 17,
            sexo: [15, 2],
            script: "app.activeDocument.activeLayer.translate(0,100)"
        },
        barbas: {
            id: "Barbas",
            inicio: 521,
            total: 10,
            sexo: [],
            script: "app.activeDocument.activeLayer.translate(0,100)"
        },
        aretes: {
            id: "Aretes",
            inicio: 531,
            total: 12,
            sexo: [],
            script: "app.activeDocument.activeLayer.translate(0,50)"
        },
        lentes: {
            id: "Lentes",
            inicio: 543,
            total: 19,
            sexo: [],
            script: "app.activeDocument.activeLayer.translate(0,-50)"
        },
        sombreros: {
            id: "Sombreros",
            inicio: 562,
            total: 18,
            sexo: [],
            script: "app.activeDocument.activeLayer.translate(0,-100)"
        }
    }

    return data[Object.keys(data)[name]]
}