function openData(imagen){
    
    var carasMascRef = [
        //29 rostros masculinos
        "https://Karlxz.github.io/img/caras/masculino/J3_M1267.png",    //1
        "https://Karlxz.github.io/img/caras/masculino/J2_M0020.png",    //2
        "https://Karlxz.github.io/img/caras/masculino/J1_M0254.png",    //3
        "https://Karlxz.github.io/img/caras/masculino/I3_M1189.png",    //4
        "https://Karlxz.github.io/img/caras/masculino/I2_M0656.png",    //5
        "https://Karlxz.github.io/img/caras/masculino/I1_M0100.png",    //6
        "https://Karlxz.github.io/img/caras/masculino/H2_M1171.png",    //7
        "https://Karlxz.github.io/img/caras/masculino/H1_M0313.png",    //8
        "https://Karlxz.github.io/img/caras/masculino/G5_M0646.png",    //9
        "https://Karlxz.github.io/img/caras/masculino/G3_M1185.png",    //10
        "https://Karlxz.github.io/img/caras/masculino/G1_M0371.png",    //11
        "https://Karlxz.github.io/img/caras/masculino/F3_M1266.png",    //12
        "https://Karlxz.github.io/img/caras/masculino/F2_M1039.png",    //13
        "https://Karlxz.github.io/img/caras/masculino/F1_M1004.png",    //14
        "https://Karlxz.github.io/img/caras/masculino/E3_M0497.png",    //15
        "https://Karlxz.github.io/img/caras/masculino/E2_M0349.png",    //16
        "https://Karlxz.github.io/img/caras/masculino/E1_M0230.png",    //17
        "https://Karlxz.github.io/img/caras/masculino/D3_M0739.png",    //18
        "https://Karlxz.github.io/img/caras/masculino/D2_M0953.png",    //19
        "https://Karlxz.github.io/img/caras/masculino/D1_M0424.png",    //20
        "https://Karlxz.github.io/img/caras/masculino/C3_M1079.png",    //21
        "https://Karlxz.github.io/img/caras/masculino/C2_M0308.png",    //22
        "https://Karlxz.github.io/img/caras/masculino/C1_M0039.png",    //23
        "https://Karlxz.github.io/img/caras/masculino/B3_M0836.png",    //24
        "https://Karlxz.github.io/img/caras/masculino/B2_M0595.png",    //25
        "https://Karlxz.github.io/img/caras/masculino/B1_M0319.png",    //26
        "https://Karlxz.github.io/img/caras/masculino/A3_M0603.png",    //27
        "https://Karlxz.github.io/img/caras/masculino/A2_M0667.png",    //28
        "https://Karlxz.github.io/img/caras/masculino/A1_M0586.png",    //29
        
        //25 Rostros femeninos
        "https://Karlxz.github.io/img/caras/femenino/J3_F1222.png",    //1
        "https://Karlxz.github.io/img/caras/femenino/J2_F1145.png",    //2
        "https://Karlxz.github.io/img/caras/femenino/J1_F1135.png",    //3
        "https://Karlxz.github.io/img/caras/femenino/I3_F1257.png",    //4
        "https://Karlxz.github.io/img/caras/femenino/I2_F1209.png",    //5
        "https://Karlxz.github.io/img/caras/femenino/I1_F0832.png",    //6
        "https://Karlxz.github.io/img/caras/femenino/G3_F1240.png",    //7
        "https://Karlxz.github.io/img/caras/femenino/G2_F0216.png",    //8
        "https://Karlxz.github.io/img/caras/femenino/G1_F0066.png",    //9
        "https://Karlxz.github.io/img/caras/femenino/F3_F1212.png",    //10
        "https://Karlxz.github.io/img/caras/femenino/F2_F1133.png",    //11
        "https://Karlxz.github.io/img/caras/femenino/F1_F1037.png",    //12
        "https://Karlxz.github.io/img/caras/femenino/E1_F0886.png",    //13
        "https://Karlxz.github.io/img/caras/femenino/D3_F1134.png",    //14
        "https://Karlxz.github.io/img/caras/femenino/D2_F0654.png",    //15
        "https://Karlxz.github.io/img/caras/femenino/D1_F0548.png",    //16
        "https://Karlxz.github.io/img/caras/femenino/C3_F1453.png",    //27
        "https://Karlxz.github.io/img/caras/femenino/C2_F0524.png",    //18
        "https://Karlxz.github.io/img/caras/femenino/C1_F0087.png",    //19
        "https://Karlxz.github.io/img/caras/femenino/B3_F1127.png",    //20
        "https://Karlxz.github.io/img/caras/femenino/B2_F0752.png",    //21
        "https://Karlxz.github.io/img/caras/femenino/B1_F1362.png",    //22
        "https://Karlxz.github.io/img/caras/femenino/A3_F0195.png",    //23
        "https://Karlxz.github.io/img/caras/femenino/A2_F1066.png",    //24
        "https://Karlxz.github.io/img/caras/femenino/A1_F0195.png",    //25
        
        //Ojos masculinos
        "https://Karlxz.github.io/img/ojos/masculino/F4_M0123.png",    //1
        "https://Karlxz.github.io/img/ojos/masculino/F3_M0507.png",    //2
        "https://Karlxz.github.io/img/ojos/masculino/F2_M0065.png",    //3
        "https://Karlxz.github.io/img/ojos/masculino/F1_M0251.png",    //4
        "https://Karlxz.github.io/img/ojos/masculino/E7_M2731.png",    //5
        "https://Karlxz.github.io/img/ojos/masculino/E6_M2238.png",    //6
        "https://Karlxz.github.io/img/ojos/masculino/E5_M2694.png",    //7
        "https://Karlxz.github.io/img/ojos/masculino/E4_M1418.png",    //8
        "https://Karlxz.github.io/img/ojos/masculino/E3_M1290.png",    //9
        "https://Karlxz.github.io/img/ojos/masculino/E2_M1318.png",    //10
        "https://Karlxz.github.io/img/ojos/masculino/E1_M0269.png",    //11
        "https://Karlxz.github.io/img/ojos/masculino/D7_M1065.png",    //12
        "https://Karlxz.github.io/img/ojos/masculino/D6_M0280.png",    //13
        "https://Karlxz.github.io/img/ojos/masculino/D5_M2257.png",    //14
        "https://Karlxz.github.io/img/ojos/masculino/D4_M1407.png",    //15
        "https://Karlxz.github.io/img/ojos/masculino/D3_M0578.png",    //16
        "https://Karlxz.github.io/img/ojos/masculino/D2_M2546.png",    //17
        "https://Karlxz.github.io/img/ojos/masculino/D1_M0620.png",    //18
        "https://Karlxz.github.io/img/ojos/masculino/C7_M1299.png",    //19
        "https://Karlxz.github.io/img/ojos/masculino/C6_M0236.png",    //20
        "https://Karlxz.github.io/img/ojos/masculino/C5_M0754.png",    //21
        "https://Karlxz.github.io/img/ojos/masculino/C4_M2400.png",    //22
        "https://Karlxz.github.io/img/ojos/masculino/C3_M0323.png",    //23
        "https://Karlxz.github.io/img/ojos/masculino/C2_M0204.png",    //24
        "https://Karlxz.github.io/img/ojos/masculino/C1_M1021.png",    //25
        "https://Karlxz.github.io/img/ojos/masculino/B7_M0830.png",    //26
        "https://Karlxz.github.io/img/ojos/masculino/B6_M1046.png",    //27
        "https://Karlxz.github.io/img/ojos/masculino/B5_M1766.png",    //28
        "https://Karlxz.github.io/img/ojos/masculino/B4_M1283.png",    //29
        "https://Karlxz.github.io/img/ojos/masculino/B3_M1583.png",    //30
        "https://Karlxz.github.io/img/ojos/masculino/B2_M1483.png",    //31
        "https://Karlxz.github.io/img/ojos/masculino/B1_M2405.png",    //32
        "https://Karlxz.github.io/img/ojos/masculino/A7_M1000.png",    //33
        "https://Karlxz.github.io/img/ojos/masculino/A6_M0287.png",    //34
        "https://Karlxz.github.io/img/ojos/masculino/A5_M1048.png",    //35
        "https://Karlxz.github.io/img/ojos/masculino/A4_M0967.png",    //36
        "https://Karlxz.github.io/img/ojos/masculino/A3_M0311.png",    //37
        "https://Karlxz.github.io/img/ojos/masculino/A2_M0233.png",    //38
        "https://Karlxz.github.io/img/ojos/masculino/A1_M0571.png",    //39

        //Ojos femeninos
        "https://Karlxz.github.io/img/ojos/femenino/F4_F0160.png",    //1
        "https://Karlxz.github.io/img/ojos/femenino/F3_F1298.png",    //2
        "https://Karlxz.github.io/img/ojos/femenino/F2_F0521.png",    //3
        "https://Karlxz.github.io/img/ojos/femenino/F1_F0698.png",    //4
        "https://Karlxz.github.io/img/ojos/femenino/E6_F0188.png",    //5
        "https://Karlxz.github.io/img/ojos/femenino/E5_F2553.png",    //6
        "https://Karlxz.github.io/img/ojos/femenino/E4_F0661.png",    //7
        "https://Karlxz.github.io/img/ojos/femenino/E3_F2550.png",    //8
        "https://Karlxz.github.io/img/ojos/femenino/E2_F2852.png",    //9
        "https://Karlxz.github.io/img/ojos/femenino/E1_F1703.png",    //10
        "https://Karlxz.github.io/img/ojos/femenino/D7_F2706.png",    //11
        "https://Karlxz.github.io/img/ojos/femenino/D6_F2873.png",    //12
        "https://Karlxz.github.io/img/ojos/femenino/D5_F1370.png",    //13
        "https://Karlxz.github.io/img/ojos/femenino/D4_F1362.png",    //14
        "https://Karlxz.github.io/img/ojos/femenino/D3_F0168.png",    //15
        "https://Karlxz.github.io/img/ojos/femenino/D2_F2882.png",    //16
        "https://Karlxz.github.io/img/ojos/femenino/D1_F0301.png",    //17
        "https://Karlxz.github.io/img/ojos/femenino/C6_F1932.png",    //18
        "https://Karlxz.github.io/img/ojos/femenino/C5_F0179.png",    //19
        "https://Karlxz.github.io/img/ojos/femenino/C4_F1223.png",    //20
        "https://Karlxz.github.io/img/ojos/femenino/C3_F1221.png",    //21
        "https://Karlxz.github.io/img/ojos/femenino/C2_F2442.png",    //22
        "https://Karlxz.github.io/img/ojos/femenino/C1_F2407.png",    //23
        "https://Karlxz.github.io/img/ojos/femenino/B5_F1308.png",    //24
        "https://Karlxz.github.io/img/ojos/femenino/B4_F1606.png",    //25
        "https://Karlxz.github.io/img/ojos/femenino/B3_F0710.png",    //26
        "https://Karlxz.github.io/img/ojos/femenino/B2_F2472.png",    //27
        "https://Karlxz.github.io/img/ojos/femenino/B1_F1037.png",    //28
        "https://Karlxz.github.io/img/ojos/femenino/A7_F1614.png",    //29
        "https://Karlxz.github.io/img/ojos/femenino/A6_F1603.png",    //30
        "https://Karlxz.github.io/img/ojos/femenino/A5_F1334.png",    //31
        "https://Karlxz.github.io/img/ojos/femenino/A4_F1300.png",    //32
        "https://Karlxz.github.io/img/ojos/femenino/A3_F1040.png",    //33
        "https://Karlxz.github.io/img/ojos/femenino/A2_F1612.png",    //34
        "https://Karlxz.github.io/img/ojos/femenino/A1_F2356.png",    //35

        //Cejas masculinas
        "https://Karlxz.github.io/img/cejas/masculino/C5_M0129.png",    //1
        "https://Karlxz.github.io/img/cejas/masculino/C4_M0039.png",    //2
        "https://Karlxz.github.io/img/cejas/masculino/C3_M0015.png",    //3
        "https://Karlxz.github.io/img/cejas/masculino/C2_M0591.png",    //4
        "https://Karlxz.github.io/img/cejas/masculino/C1_M0278.png",    //5
        "https://Karlxz.github.io/img/cejas/masculino/B5_M0570.png",    //6
        "https://Karlxz.github.io/img/cejas/masculino/B4_M0269.png",    //7
        "https://Karlxz.github.io/img/cejas/masculino/B3_M0132.png",    //8
        "https://Karlxz.github.io/img/cejas/masculino/B2_M0247.png",    //9
        "https://Karlxz.github.io/img/cejas/masculino/B1_M0104.png",    //10
        "https://Karlxz.github.io/img/cejas/masculino/A5_M0032.png",    //11
        "https://Karlxz.github.io/img/cejas/masculino/A4_M0185.png",    //12
        "https://Karlxz.github.io/img/cejas/masculino/A3_M0665.png",    //13
        "https://Karlxz.github.io/img/cejas/masculino/A2_M0327.png",    //14
        "https://Karlxz.github.io/img/cejas/masculino/A1_M0110.png",    //15

        //Cejas femeninas
        "https://Karlxz.github.io/img/cejas/femenino/C5_F0198.png",    //1
        "https://Karlxz.github.io/img/cejas/femenino/C4_F1289.png",    //2
        "https://Karlxz.github.io/img/cejas/femenino/C3_F0036.png",    //3
        "https://Karlxz.github.io/img/cejas/femenino/C2_F0143.png",    //4
        "https://Karlxz.github.io/img/cejas/femenino/C1_F0014.png",    //5
        "https://Karlxz.github.io/img/cejas/femenino/B5_F0063.png",    //6
        "https://Karlxz.github.io/img/cejas/femenino/B4_F1798.png",    //7
        "https://Karlxz.github.io/img/cejas/femenino/B3_F0066.png",    //8
        "https://Karlxz.github.io/img/cejas/femenino/B2_F0213.png",    //9
        "https://Karlxz.github.io/img/cejas/femenino/B1_F0135.png",    //10
        "https://Karlxz.github.io/img/cejas/femenino/A5_F0224.png",    //11
        "https://Karlxz.github.io/img/cejas/femenino/A4_F0194.png",    //12
        "https://Karlxz.github.io/img/cejas/femenino/A3_F0552.png",    //13
        "https://Karlxz.github.io/img/cejas/femenino/A2_F0526.png",    //14
        "https://Karlxz.github.io/img/cejas/femenino/A1_F0149.png",    //15

        //Narices masculinas
        "https://Karlxz.github.io/img/narices/masculino/C4_M1039.png",    //1
        "https://Karlxz.github.io/img/narices/masculino/C3_M2530.png",    //2
        "https://Karlxz.github.io/img/narices/masculino/C2_M2417.png",    //3
        "https://Karlxz.github.io/img/narices/masculino/C1_M1234.png",    //4
        "https://Karlxz.github.io/img/narices/masculino/B4_M0713.png",    //5
        "https://Karlxz.github.io/img/narices/masculino/B3_M0278.png",    //6
        "https://Karlxz.github.io/img/narices/masculino/B2_M1105.png",    //7
        "https://Karlxz.github.io/img/narices/masculino/B1_M2405.png",    //8
        "https://Karlxz.github.io/img/narices/masculino/A4_M1338.png",    //9
        "https://Karlxz.github.io/img/narices/masculino/A3_M0574.png",    //10
        "https://Karlxz.github.io/img/narices/masculino/A2_M1319.png",    //11
        "https://Karlxz.github.io/img/narices/masculino/A1_M0091.png",    //12

        //Narices femeninas
        "https://Karlxz.github.io/img/narices/femenino/C4_F1753.png",    //1
        "https://Karlxz.github.io/img/narices/femenino/C3_F2227.png",    //2
        "https://Karlxz.github.io/img/narices/femenino/C2_F2443.png",    //3
        "https://Karlxz.github.io/img/narices/femenino/C1_F2700.png",    //4
        "https://Karlxz.github.io/img/narices/femenino/B4_F0903.png",    //5
        "https://Karlxz.github.io/img/narices/femenino/B3_F2229.png",    //6
        "https://Karlxz.github.io/img/narices/femenino/B2_F2383.png",    //7
        "https://Karlxz.github.io/img/narices/femenino/B1_F0086.png",    //8
        "https://Karlxz.github.io/img/narices/femenino/A4_F0225.png",    //9
        "https://Karlxz.github.io/img/narices/femenino/A3_F1315.png",    //10
        "https://Karlxz.github.io/img/narices/femenino/A2_F0056.png",    //11
        "https://Karlxz.github.io/img/narices/femenino/A1_F2682.png",    //12

        //Labios masculinos
        "https://Karlxz.github.io/img/labios/masculino/C5_M2111.png",    //1
        "https://Karlxz.github.io/img/labios/masculino/C4_M0403.png",    //2
        "https://Karlxz.github.io/img/labios/masculino/C3_M1688.png",    //3
        "https://Karlxz.github.io/img/labios/masculino/C2_M1079.png",    //4
        "https://Karlxz.github.io/img/labios/masculino/C1_M2309.png",    //5
        "https://Karlxz.github.io/img/labios/masculino/B5_M0954.png",    //6
        "https://Karlxz.github.io/img/labios/masculino/B4_M2131.png",    //7
        "https://Karlxz.github.io/img/labios/masculino/B3_M0678.png",    //8
        "https://Karlxz.github.io/img/labios/masculino/B2_M0609.png",    //9
        "https://Karlxz.github.io/img/labios/masculino/B1_M0574.png",    //10
        "https://Karlxz.github.io/img/labios/masculino/A5_M0584.png",    //11
        "https://Karlxz.github.io/img/labios/masculino/A4_M2593.png",    //12
        "https://Karlxz.github.io/img/labios/masculino/A3_M1091.png",    //13
        "https://Karlxz.github.io/img/labios/masculino/A2_M0223.png",    //14
        "https://Karlxz.github.io/img/labios/masculino/A1_M1601.png",    //15

        //Labios femeninos
        "https://Karlxz.github.io/img/labios/femenino/C5_F1585.png",    //1
        "https://Karlxz.github.io/img/labios/femenino/C4_F1546.png",    //2
        "https://Karlxz.github.io/img/labios/femenino/C3_F1620.png",    //3
        "https://Karlxz.github.io/img/labios/femenino/C2_F2142.png",    //4
        "https://Karlxz.github.io/img/labios/femenino/C1_F0643.png",    //5
        "https://Karlxz.github.io/img/labios/femenino/B5_F2861.png",    //6
        "https://Karlxz.github.io/img/labios/femenino/B4_F2430.png",    //7
        "https://Karlxz.github.io/img/labios/femenino/B3_F2272.png",    //8
        "https://Karlxz.github.io/img/labios/femenino/B2_F2283.png",    //9
        "https://Karlxz.github.io/img/labios/femenino/B1_F1897.png",    //10
        "https://Karlxz.github.io/img/labios/femenino/A5_F0037.png",    //11
        "https://Karlxz.github.io/img/labios/femenino/A4_F1094.png",    //12
        "https://Karlxz.github.io/img/labios/femenino/A3_F0783.png",    //13
        "https://Karlxz.github.io/img/labios/femenino/A2_F0038.png",    //14
        "https://Karlxz.github.io/img/labios/femenino/A1_F1347.png",    //15
    ];

    return carasMascRef[imagen];
}   



